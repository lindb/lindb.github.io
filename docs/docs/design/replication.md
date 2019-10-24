# Replication

client通过tcp或http协议将时序数据(包含database, metric name, tags, timestamp, fields信息)发送到broker，broker首先判断database是否存在，如果存在根据metric name，tags及database配置的shard总数计算所属的shard，然后将数据写入到shard相应内存buffer中，当buffer大小超过限制或离上一次写入时间超过限制，内存buffer中的数据会作为一条record追加到当前shard所属的磁盘日志文件中。

一个shard依据配置的备份数会对应一个或多个物理的storage节点，broker查询etcd中数据了解到这些信息，通过rpc将shard日志文件中record有序的复制到对应的storage节点。依据目前的设计，storage直接将record数据写入到内存中，不会再额外写wal。等内存中数据写入磁盘后，通过rpc通知broker这部分数据已经完全消费。broker等所有storage节点完成确认后删除磁盘文件。

一个shard的复制过程可以抽象为Fanout queue的生产和消费过程，实现时借鉴了[bigqueue](https://github.com/bulldog2011/bigqueue)，broker将写入的数据计算shard，累计成批后写入Fanout queue，异步go routine负责将数据推送到对应的storage节点，storage确认成功消费的数据记录。broker删除被所有消费者acked的queue文件。

![replication](../../assets/images/design/replication.png)

时序数据库对数据写入的顺序没有要求，只要数据最终都完成写入，查询的结果是一致的，broker向storage复制时保持顺序性是为了依靠顺序性处理各种异常场景，保证数据准确地复制到storage。



### broker

1. broker询问storage消费record的index，如果index有效(未超过broker当前写入的head index，大于broker已经acked的tail index)，进入第3步，否则进入第2步
2. 以broker记录的index重置storage的index，进入第3步
3. 从index开始复制数据到storage，如果出现异常回到第1步

### storage

1. 响应broker查询，重置record index请求
2. 接收broker复制推送的record，检测record的index和storage记录的index是否一致，一致则返回ok，index自增1，否则返回错误



TBD
