# 配置参数

LinDB 采用 TOML 格式作为服务配置文件，`Root`/`Broker`/`Storage` 使用不同的配置，以下分别介绍对应的每个参数含义。

:::tip
目前配置项支持通过环境变量和启动配置文件两种方种，优先级环境变量 > 配置文件 > 默认值。
:::

## Root 

可以在 [config/root.toml.example](https://github.com/lindb/lindb/tree/main/config/root.toml.example) 找到默认值的配置文件，重命名为 root.toml 即可作为 `Root` 启动参数文件。

```toml
## 状态存储及协调状态相关配置参数
[coordinator]
## ETCD 中存储的 Namespace，通过 Namespace 来隔离各组件的元数据
## 默认值：/lindb-cluster
## Env: LINDB_COORDINATOR_NAMESPACE
namespace = "/lindb-cluster"
## ETCD 地址
## 默认值：["http://localhost:2379"]
## Env: LINDB_COORDINATOR_ENDPOINTS  Env Separator: ,
endpoints = ["http://localhost:2379"]
## 类似 Zookeeper 临时节点租约超时时间，不能小于 5s
## 默认值：10s
## Env: LINDB_COORDINATOR_LEASE_TTL
lease-ttl = "10s"
## 处理 ETCD 相关指令超时时间
## 默认值：5s
## Env: LINDB_COORDINATOR_TIMEOUT
timeout = "5s"
## ETCD 连接超时时间
## 默认值：5s
## Env: LINDB_COORDINATOR_DIAL_TIMEOUT
dial-timeout = "5s"
## ETCD 认证用户名
## 默认值：""
## Env: LINDB_COORDINATOR_USERNAME
username = ""
## ETCD 认证密码
## 默认值：""
## Env: LINDB_COORDINATOR_PASSWORD
password = ""

## 通用查询相关配置参数
[query]
## 查询请求最大处理并发数
## 默认值：runtime.GOMAXPROCS(-1) * 2
## Env: LINDB_QUERY_CONCURRENCY
query-concurrency = 16
## 查询处理协程空闲时间，超过空闲时间协程将被回收
## 默认值：5s
## Env: LINDB_QUERY_IDLE_TIMEOUT
idle-timeout = "5s"
## 查询超时时间
## 默认值：5s
## Env: LINDB_QUERY_TIMEOUT
timeout = "5s"

## Root HTTP Server 相关配置参数
[http]
## HTTP Server 监听端口
## 默认值：3000
## Env: LINDB_ROOT_HTTP_PORT
port = 3000
## 最大连接空闲时间
## 默认值：2m
## Env: LINDB_ROOT_HTTP_IDLE_TIMEOUT
idle-timeout = "2m0s"
## 写请求响应超时时间
## 默认值：5s
## Env: LINDB_ROOT_HTTP_WRITE_TIMEOUT
write-timeout = "5s"	
## 读请求超时时间
## 默认值：5s
## Env: LINDB_ROOT_HTTP_READ_TIMEOUT
read-timeout = "5s"

## 自监控相关配置参数
[monitor]
## 通过 HTTP 方式上报指标超时时间
## 默认值：3s
## Env: LINDB_MONITOR_PUSH_TIMEOUT
push-timeout = "3s"
## Default: 10s
## 监控数据(cpu/memory/disk/process/go runtime等)采集上报间隔，设置为 0 时不上报监控数据
## 默认值：10s
report-interval = "10s"
## Env: LINDB_MONITOR_REPORT_INTERVAL
## 监控指标上报地址(Broker写入地址)
## 默认值：http://127.0.0.1:9000/api/v1/write?db=_internal
## Env: LINDB_MONITOR_URL
url = "http://127.0.0.1:9000/api/v1/write?db=_internal"

## 日志相关配置参数
[logging]
## 日志存储目录
## 默认值：data/log
## Env: LINDB_LOGGING_DIR
dir = "data/log"
## 日志级别，对应的参数值：error/warn/info/debug
## 默认值：info
## Env: LINDB_LOGGING_LEVEL
level = "info"
## 单个日志文件大小
## 默认值：100 MiB.
## Env: LINDB_LOGGING_MAX_SIZE
maxsize = "100 MiB"
## 保留多少个旧日志文件
## 默认值：3
## Env: LINDB_LOGGING_MAX_BACKUPS
maxbackups = 3
## 保留多少天以前的日志文件，单位：天
## 默认值：7
## Env: LINDB_LOGGING_MAX_AGE
maxage = 7
```

## Broker

可以在 [config/broker.toml.example](https://github.com/lindb/lindb/tree/main/config/broker.toml.example) 找到默认值的配置文件，重命名为 broker.toml 即可作为 `Broker` 启动参数文件。

```toml
## 状态存储及协调状态相关配置参数
[coordinator]
## ETCD 中存储的 Namespace，通过 Namespace 来隔离各组件的元数据
## 默认值：/lindb-cluster
## Env: LINDB_COORDINATOR_NAMESPACE
namespace = "/lindb-broker"
## ETCD 地址
## 默认值：["http://localhost:2379"]
## Env: LINDB_COORDINATOR_ENDPOINTS  Env Separator: ,
endpoints = ["http://localhost:2379"]
## 类似 Zookeeper 临时节点租约超时时间，不能小于 5s
## 默认值：10s
## Env: LINDB_COORDINATOR_LEASE_TTL
lease-ttl = "10s"
## 处理 ETCD 相关指令超时时间
## 默认值：5s
## Env: LINDB_COORDINATOR_TIMEOUT
timeout = "5s"
## ETCD 连接超时时间
## 默认值：5s
## Env: LINDB_COORDINATOR_DIAL_TIMEOUT
dial-timeout = "5s"
## ETCD 认证用户名
## 默认值：""
## Env: LINDB_COORDINATOR_USERNAME
username = ""
## ETCD 认证密码
## 默认值：""
## Env: LINDB_COORDINATOR_PASSWORD
password = ""

## 通用查询相关配置参数
[query]
## 查询请求最大处理并发数
## 默认值：runtime.GOMAXPROCS(-1) * 2
## Env: LINDB_QUERY_CONCURRENCY
query-concurrency = 16
## 查询处理协程空闲时间，超过空闲时间协程将被回收
## 默认值：5s
## Env: LINDB_QUERY_IDLE_TIMEOUT
idle-timeout = "5s"
## 查询超时时间
## 默认值：5s
## Env: LINDB_QUERY_TIMEOUT
timeout = "5s"

## Broker 相关配置参数
[broker]

## 慢SQL阈值
## 默认值：30s
## Env: LINDB_BROKER_SLOW_SQL
slow-sql = "30s"

## Broker HTTP Server 相关配置参数
[broker.http]
## HTTP Server 监听端口
## 默认值：9000
## Env: LINDB_BROKER_HTTP_PORT
port = 9000
## 最大连接空闲时间
## 默认值：2m
## Env: LINDB_BROKER_HTTP_IDLE_TIMEOUT
idle-timeout = "2m0s"
## 写请求响应超时时间
## 默认值：5s
## Env: LINDB_BROKER_HTTP_WRITE_TIMEOUT
write-timeout = "5s"	
## 读请求超时时间
## 默认值：5s
## Env: LINDB_BROKER_HTTP_READ_TIMEOUT
read-timeout = "5s"

## Broker 处理数据写入相关配置
[broker.ingestion]
## 数据写入最大并发数，超过最大并发数的请求将被限流
## 默认值：runtime.GOMAXPROCS(-1) * 2
## Env: LINDB_BROKER_INGESTION_CONCURRENCY
max-concurrency = 8
## 处理数据写入超时时间
## 默认值：5s
## Env: LINDB_BROKER_INGESTION_TIMEOUT
ingest-timeout = "5s"

## Broker 写数据到存储相配置参数
[broker.write]
## 写入 Buffer 数据 Cache 时间间隔，到达这个间隔数据写入存储节点
## 默认值：2s
## Env: LINDB_BROKER_WRITE_BATCH_TIMEOUT
batch-timeout = "2s"
## 在写入 Buffer 中 Cache 多少数据，到达这个大小数据写入存储节点
## 默认值：256 KiB
## Env: LINDB_BROKER_WRITE_BLOCK_SIZE
batch-block-size = "256 KiB"
## 回收过期写入通道间隔时间
## 默认值：1m0s
## Env: LINDB_BROKER_WRITE_GC_INTERVAL
gc-task-interval = "1m0s"

## Broker GRPC 相关配置参数
[broker.grpc]
## GRPC 监控端口
## 默认值：9001
## Env: LINDB_BROKER_GRPC_PORT
port = 9001
## GRPC 最大并发 Streams，建议该参数设置一个比较大的值
## 默认值：runtime.GOMAXPROCS(-1) * 2
## Env: LINDB_BROKER_GRPC_MAX_CONCURRENT_STREAMS
max-concurrent-streams = 8
## 连接超时时间
## 默认值：3s
## Env: LINDB_BROKER_GRPC_CONNECT_TIMEOUT
connect-timeout = "3s"

## 自监控相关配置参数
[monitor]
## 通过 HTTP 方式上报指标超时时间
## 默认值：3s
## Env: LINDB_MONITOR_PUSH_TIMEOUT
push-timeout = "3s"
## Default: 10s
## 监控数据(cpu/memory/disk/process/go runtime等)采集上报间隔，设置为 0 时不上报监控数据
## 默认值：10s
## Env: LINDB_MONITOR_REPORT_INTERVAL
report-interval = "10s"
## 监控指标上报地址(Broker写入地址)
## 默认值：http://127.0.0.1:9000/api/v1/write?db=_internal
## Env: LINDB_MONITOR_URL
url = "http://127.0.0.1:9000/api/v1/write?db=_internal"

## 日志相关配置参数
[logging]
## 日志存储目录
## 默认值：data/log
## Env: LINDB_LOGGING_DIR
dir = "data/log"
## 日志级别，对应的参数值：error/warn/info/debug
## 默认值：info
## Env: LINDB_LOGGING_LEVEL
level = "info"
## 单个日志文件大小
## 默认值：100 MiB.
## Env: LINDB_LOGGING_MAX_SIZE
maxsize = "100 MiB"
## 保留多少个旧日志文件
## 默认值：3
## Env: LINDB_LOGGING_MAX_BACKUPS
maxbackups = 3
## 保留多少天以前的日志文件，单位：天
## 默认值：7
## Env: LINDB_LOGGING_MAX_AGE
maxage = 7
```

## Storage

可以在 [config/storage.toml.example](https://github.com/lindb/lindb/tree/main/config/storage.toml.example) 找到默认值的配置文件，重命名为 storage.toml 即可作为 `Storage` 启动参数文件。

```toml
## 状态存储及协调状态相关配置参数
[coordinator]
## ETCD 中存储的 Namespace，通过 Namespace 来隔离各组件的元数据
## 默认值：/lindb-cluster
## Env: LINDB_COORDINATOR_NAMESPACE
namespace = "/lindb-broker"
## ETCD 地址
## 默认值：["http://localhost:2379"]
## Env: LINDB_COORDINATOR_ENDPOINTS  Env Separator: ,
endpoints = ["http://localhost:2379"]
## 类似 Zookeeper 临时节点租约超时时间，不能小于 5s
## 默认值：10s
## Env: LINDB_COORDINATOR_LEASE_TTL
lease-ttl = "10s"
## 处理 ETCD 相关指令超时时间
## 默认值：5s
## Env: LINDB_COORDINATOR_TIMEOUT
timeout = "5s"
## ETCD 连接超时时间
## 默认值：5s
## Env: LINDB_COORDINATOR_DIAL_TIMEOUT
dial-timeout = "5s"
## ETCD 认证用户名
## 默认值：""
## Env: LINDB_COORDINATOR_USERNAME
username = ""
## ETCD 认证密码
## 默认值：""
## Env: LINDB_COORDINATOR_PASSWORD
password = ""

## 通用查询相关配置参数
[query]
## 查询请求最大处理并发数
## 默认值：runtime.GOMAXPROCS(-1) * 2
## Env: LINDB_QUERY_CONCURRENCY
query-concurrency = 16
## 查询处理协程空闲时间，超过空闲时间协程将被回收
## 默认值：5s
## Env: LINDB_QUERY_IDLE_TIMEOUT
idle-timeout = "5s"
## 查询超时时间
## 默认值：5s
## Env: LINDB_QUERY_TIMEOUT
timeout = "5s"

## Storage 相关配置参数
[storage]
## TTL 任务处理间隔时间
## 默认值：24h
## Env: LINDB_STORAGE_TTL_TASK_INTERVAL
ttl-task-interval = "24h0m0s"
## Broker 对应的 HTTP 服务地址，用于 Storage 完成集群自注册
## 默认值：http://localhost:9000
## Env: LINDB_STORAGE_BROKER_ENDPOINT
broker-endpoint = "http://localhost:9000"

## Storage HTTP Server 相关配置参数
[storage.http]
## HTTP Server 监听端口
## 默认值：2892
## Env: LINDB_STORAGE_HTTP_PORT
port = 2892
## 最大连接空闲时间
## 默认值：2m
## Env: LINDB_STORAGE_HTTP_IDLE_TIMEOUT
idle-timeout = "2m0s"
## 写请求响应超时时间
## 默认值：5s
## Env: LINDB_STORAGE_HTTP_WRITE_TIMEOUT
write-timeout = "5s"	
## 读请求超时时间
## 默认值：5s
## Env: LINDB_STORAGE_HTTP_READ_TIMEOUT
read-timeout = "5s"

## Broker GRPC 相关配置参数
[storage.grpc]
## GRPC 监控端口
## 默认值：2891
## Env: LINDB_STORAGE_GRPC_PORT
port = 2891
## GRPC 最大并发 Streams，建议该参数设置一个比较大的值
## 默认值：runtime.GOMAXPROCS(-1) * 2
## Env: LINDB_STORAGE_GRPC_MAX_CONCURRENT_STREAMS
max-concurrent-streams = 16
## 连接超时时间
## 默认值：3s
## Env: LINDB_STORAGE_GRPC_CONNECT_TIMEOUT
connect-timeout = "3s"

## Storage Write Ahead Log 相关配置参数
[storage.wal]
## Write Ahead log 存储目录
## 默认值：data/storage/wal
## Env: LINDB_STORAGE_WAL_DIR
dir = "data/storage/wal"
## 单个 WAL 日志文件的大小，取值范围为 [1MB, 1GB]
## 默认值：128 MiB
## Env: LINDB_STORAGE_WAL_DATA_SIZE_LIMIT
data-size-limit = "128 MiB" 
## 处理过期日志间隔时间
## 默认值：1m
## Env: LINDB_STORAGE_WAL_REMOVE_TASK_INTERVAL
remove-task-interval = "1m0s"

## Storage TSDB 相关配置参数
[storage.tsdb]
## TSDB 存储目录
## 默认值：data/storage/data
## Env: LINDB_STORAGE_TSDB_DIR
dir = "data/storage/data"

## 刷新任务相关参数
## 
## Memory Database 最大内存使用大小，超过该大小之后数据被刷新，设置太大会影响查询性能
## 默认值：500 MiB
## Env: LINDB_STORAGE_TSDB_MAX_MEMDB_SIZE
max-memdb-size = "500 MiB"
## Memory Database 创建之后多久其内部的数据需要被刷新
## 默认值：30min
## Env: LINDB_STORAGE_TSDB_MUTABLE_MEMDB_TTL
mutable-memdb-ttl = "30m0s"
## 超过当前系统内存百分之多少触发刷新操作，取值范围[0~1]
## 默认值：0.75
## Env: LINDB_STORAGE_TSDB_MAX_MEM_USAGE_BEFORE_FLUSH
max-mem-usage-before-flush = 0.75
## 低于前系统内存百分之多少不会触发刷新操作，取值范围[0~1]
## 默认值：0.60
## Env: LINDB_STORAGE_TSDB_TARGET_MEM_USAGE_AFTER_FLUSH
target-mem-usage-after-flush = 0.60
## 数据刷新并发数
## 默认值：Ceil(runtime.GOMAXPROCS(-1) / 2)
## Env: LINDB_STORAGE_TSDB_FLUSH_CONCURRENCY
flush-concurrency = 2

## 自监控相关配置参数
[monitor]
## 通过 HTTP 方式上报指标超时时间
## 默认值：3s
## Env: LINDB_MONITOR_PUSH_TIMEOUT
push-timeout = "3s"
## Default: 10s
## 监控数据 (cpu/memory/disk/process/go runtime等) 采集上报间隔，设置为 0 时不上报监控数据
## 默认值：10s
## Env: LINDB_MONITOR_REPORT_INTERVAL
report-interval = "10s"
## 监控指标上报地址(Broker写入地址)
## 默认值：http://127.0.0.1:9000/api/v1/write?db=_internal
## Env: LINDB_MONITOR_URL
url = "http://127.0.0.1:9000/api/v1/write?db=_internal"

## 日志相关配置参数
[logging]
## 日志存储目录
## 默认值：data/log
## Env: LINDB_LOGGING_DIR
dir = "data/storage"
## 日志级别，对应的参数值：error/warn/info/debug
## Env: LINDB_LOGGING_LEVEL
level = "info"
## 单个日志文件大小
## 默认值：100 MiB.
## Env: LINDB_LOGGING_MAX_SIZE
maxsize = "100 MiB"
## 保留多少个旧日志文件
## 默认值：3
maxbackups = 3
## Env: LINDB_LOGGING_MAX_BACKUPS
## 保留多少天以前的日志文件，单位：天
## 默认值：7
## Env: LINDB_LOGGING_MAX_AGE
maxage = 7
```

## Standalone

可以在 [config/standalone.toml.example](https://github.com/lindb/lindb/tree/main/config/standalone.toml.example) 找到默认值的配置文件，重命名为 standalone.toml 即可作为 Standalone 启动参数文件。Standalone 作为 LinDB 一种特殊的单机模式，其内部集成了 Broker/Storage/ETCD 等组件，其为 [Broker](#broker)/[Storage](#storage) 参数如上，这里只介绍不包含 Broker/Storage 这部分参数说明。

```toml
## 内嵌 ETCD 配置参考
[etcd]
## ETCD 数据存储目录
## 默认值：/tmp/lindb/coordinator
## Env: LINDB_ETCD_DIR
dir = "/tmp/lindb/coordinator"
## ETCD 对外提供服务地址
## 默认值：http://localhost:2379
## Env: LINDB_ETCD_URL
url = "http://localhost:2379"

## 参考 Broker/Storage 协调相关对应参数
[coordinator]

## 参考 Broker/Storage 查询相关对应参数
[query]

[broker]

## 参考 Broker Ingestion 相关对应参数
[broker.ingestion]

## 参考 Broker Write 相关对应参数
[broker.write]

## 参考 Broker HTTP 相关对应参数
[broker.http]

## 参考 Broker GRPC 相关对应参数
[broker.grpc]

## 参考 Storage 相关对应参数
[storage]

## 参考 Storage HTTP 相关对应参数
[storage.http]

## 参考 Storage GRPC 相关对应参数
[storage.grpc]

## 参考 Storage WAL 相关对应参数
[storage.wal]

## 参考 Storage TSDB 相关对应参数
[storage.tsdb]

## 日志相关的配置，参考 Broker/Storage 对应的配置
[logging]

## 自监控相关的配置，参考 Broker/Storage 对应的配置
[monitor]
```
