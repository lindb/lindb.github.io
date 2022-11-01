# Monitoring

## Dashboard

Dashboard 为 LinDB 自带的自监控大盘，可以通过各组件相关 Dashboard 了解其内部实时运行状态。

具体的指标说明请参考[自监控](../self-monitor.md)。

<image-window>

![dashboard](@images/guide/admin_ui/dashboard.png)
</image-window>

### Broker Dashboard

|  Dashboard  | 描述 |
|  ----  | ----  |
| Broker Query | Broker 查询相关监控 |
| Ingestion | Broker 接收用户写入相关监控 |
| Broker Write | Broker 往存储集群写入相关监控 |
| Broker Coordinator | Broker 各节点协调相关监控 |
| Master Coordinator | Master 节点协调相关监控 |
| Master Controller | Master 选举相关监控 |
| Concurrent Pool | 并发协程池相关监控 |
| Concurrent Limit | 并发限流器相关监控 |
| Network TCP | TCP 相关监控 |
| Network GRPC | GRPC 相关监控 |
| Runtime | Go 运行时相关监控 |
| System | 系统层相关监控，如CPU/Memory/Disk |

### Storage Dashboard

|  Dashboard  | 描述 |
|  ----  | ----  |
| Storage Query | Storage 查询相关监控 |
| WAL | Write Ahead Log 相关监控，主要包括接收写入及复制请求到写 WAL 相当监控 |
| Local Replication | 本地从 WAL 消费日志到写 TSDB 存储相当监控 |
| Remote Replication | Leader 消费 WAL 日志并把数据复制给 Follower 节点相当监控 |
| Storage Coordinator | 存储各节点协调相关监控 |
| TSDB Write | TSDB 写相关监控 |
| TSDB Job | TSDB 后台任务相关监控 |
| KV Read | 底层 KV Store 读相关监控 |
| KV Write | 底层 KV Store 写相关监控 |
| KV Job | 底层 KV Store 后台任务相关监控 |
| Concurrent Pool | 并发协程池相关监控 |
| Network TCP | TCP 相关监控 |
| Network GRPC | GRPC 相关监控 |
| Runtime | Go 运行时相关监控 |
| System | 系统层相关监控，如CPU/Memory/Disk |

## Replication

数据库副本状态信息主要包括如下状态：
- 数据库的基本状态信息，如副本数；
- 副本分布及当前副本的复制情况，如当前哪些复制通道有延时等；
- 本地副本写入情况。

### WAL

其中副本状态可以有如下 2 种方式，可以通过 Replication State 右侧的按钮进行切换：
- 模式 1：以副本在每个 Storage 节点的分布情况为视角展现，同时展现是否有复制延时，鼠标 Hover 到某个分片 Shard 上可以展现当前分片各通道的复制情况；

<image-window>

![replication shards](@images/guide/admin_ui/replication_shards.png)
</image-window>

- 模式 2：以所有分片 Shard 下所有复制通道为视角展现，展现当前所有复制通道的复制情况，支持 Shard/Family 相关的过滤筛选；

<image-window>

![replication families](@images/guide/admin_ui/replication_families.png)
</image-window>

### Write

本地副本的写入情况：
- 各内存数据库的写入状态；
- 各`Leader`写入指针状态；

- 模式 1：以所有分片 Shard 下所有内存数据库为视角展现，展现当前所有内存库的写入状态，支持 Shard/Family 相关的过滤筛选；

<image-window>

![memory database write](@images/guide/admin_ui/memory_database_write.png)
</image-window>

- 模式 2：以所有分片 Shard 下所有活跃 Family 为视角展现，展现当前所有活跃 Family 各复制状态，支持 Shard/Family 相关的过滤筛选；

<image-window>

![memory database replica](@images/guide/admin_ui/memory_database_replica.png)
</image-window>

## Request

浏览当前集群中正在执行的 [LinQL](../lin-ql.md) 语句。

<image-window>

![memory database replica](@images/guide/admin_ui/request_list.png)
</image-window>

## Log View

Log View 允许用户浏览集群中所有节点上的日志文件，并在页面上展现相关的日志信息。

<image-window>

![log view](@images/guide/admin_ui/log_view.png)
</image-window>
