# 与其他 TSDB 对比

## LinDB vs. InfluxDB
### 架构方案
InfluxDB 默认提供单机方案，但提供自己商业化的集群方案，第三方集群方案也可以在GitHub上获取到。

LinDB 原生默认提供免费开源的集群方案，两者使用时都需要考虑管理分布式系统的复杂性。

### 数据模型与存储引擎

与 InfluxDB 一样，LinDB 也使用文本型的键值对作为tags，也同时支持多field，InfluxDB支持纳秒级的时间戳存储，以及float64、int64、bool和字符串数据类型。相比之下，LinDB 仅支持数值类型以及秒级时间存储精度。因此，InfluxDB可同时用于logging和metrics监控，LinDB只支持metrics。

LinDB的 field 具有 Counter、Gauge、Histogram 等类型，在存储时便会自动聚合。而InfluxDB存储的完全是原始数据。

InfluxDB 存储使用带WAL日志的 LSM 树，LinDB 在进行数值存储时使用 LSM 树，Metric 元数据存储使用 BoltDB, WAL 日志仅在计算层使用。

### 如何选择
#### InfluxDB 更适合的用途：
+ 需要 logging 监控；
+ 需要精细的时间尺度；
+ 需要 TICK 生态的易用性；

#### LinDB 更适合的用途：
+ 需要查询速度更快；
+ 需要解决海量数据的时序场景；
+ 对时序数据时间精度不敏感，比如监控领域；

InfluxDB 由商业公司进行维护迭代，高级功能均为收费服务。LinDB是一个完全开源的项目，由社区维护。

## LinDB vs. Prometheus
### 架构方案
LinDB 专注于分布式存储的解决方案，但兼容 Prometheus 的协议，可以替换 Prometheus 的存储层。

Prometheus 不仅仅是一个时序数据库，还提供了时序数据抓取、报警等组件，更是一个完整的生态。

### 数据模型
LinDB 的数据类型与 Prometheus 基本一致，Prometheus 是Metric级的单 field 类型，LinDB 是多 field 类型。

### 如何选择
#### Prometheus 更适合的用途：
+ 需要更丰富的查询语言；
+ 需要报警通知等功能；

### LinDB 更适合的用途
+ 需要解决海量数据的时序场景；

## LinDB vs. OpenTSDB

### 数据模型
LinDB 的数据类型与 OpenTSDB 基本一致。但OpenTSDB 缺少完整的查询语言，仅能通过 API 进行简单的聚合与数学计算。

OpenTSDB 基于 Hadoop 和 HBase，存储层可以简单的水平拓展，但必须运维 Hadoop / HBase 集群。

LinDB 在创建数据库时，需要预估容量进行明确的分片，在容量不足时也可以进行扩容。

### 如何选择

除了已使用 OpenTSDB 之外，不再建议新项目使用。

