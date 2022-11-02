# Configuration

## Broker

```toml
## Coordinator related configuration.
[coordinator]
## Coordinator coordinates reads/writes operations between different nodes
## namespace organizes etcd keys into a isolated complete keyspaces for coordinator
## Default: /lindb-cluster
namespace = "/lindb-cluster"
## Endpoints config list of ETCD cluster
## Default: ["http://localhost:2379"]
endpoints = ["http://localhost:2379"]
## Lease-TTL is a number in seconds.
## It controls how long a ephemeral node like zookeeper will be removed when heartbeat fails.
## lease expiration will cause a re-elect.
## Min: 5s
## Default: 10s
lease-ttl = "10s"
## Timeout is the timeout for failing to executing a etcd command.
## Default: 5s
timeout = "5s"
## DialTimeout is the timeout for failing to establish a etcd connection.
## Default: 5s
dial-timeout = "5s"
## Username is a user name for etcd authentication.
## Default: ""
username = ""
## Password is a password for etcd authentication.
## Default: ""
password = ""

## Query related configuration.
[query]
## Number of queries allowed to execute concurrently
## Default: 8
query-concurrency = 8
## Idle worker will be canceled in this duration
## Default: 5s
idle-timeout = "5s"
## Maximum timeout threshold for query.
## Default: 5s
timeout = "5s"

## Broker related configuration.
[broker]

## Controls how HTTP Server are configured.
[broker.http]
## port which the HTTP Server is listening on
## Default: 9000
port = 9000
## maximum duration the server should keep established connections alive.
## Default: 2m0s
idle-timeout = "2m0s"
## maximum duration before timing out for server writes of the response
## Default: 5s
write-timeout = "5s"
## maximum duration for reading the entire request, including the body.
## Default: 5s
read-timeout = "5s"

## Ingestion configuration for broker handle ingest request.
[broker.ingestion]
## How many goroutines can write metrics at the same time.
## If writes requests exceeds the concurrency,
## ingestion HTTP API will be throttled.
## Default: 8
max-concurrency = 8
## maximum duration before timeout for server ingesting metrics
## Default: 5s
ingest-timeout = "5s"

## Write configuration for writing replication block.
[broker.write]
## Broker will write at least this often,
## even if the configured batch-size if not reached.
## Default: 2s
batch-timeout = "2s"
## Broker will sending block to storage node in this size
## Default: 256 KiB
batch-block-size = "256 KiB"
## interval for how often expired write write family garbage collect task execute
## Default: 1m0s
gc-task-interval = "1m0s"

## Controls how GRPC Server are configured.
[broker.grpc]
## port which the GRPC Server is listening on
## Default: 9001
port = 9001
## max-concurrent-streams limits the number of concurrent streams to each ServerTransport
## Default: 80 
max-concurrent-streams = 80
## connect-timeout sets the timeout for connection establishment.
## Default: 3s
connect-timeout = "3s"

## Config for the Internal Monitor
[monitor]
## time period to process an HTTP metrics push call
## Default: 3s
push-timeout = "3s"
## monitor won't start when interval is sets to 0
## such as cpu, memory, and disk, process and go runtime
## Default: 10s
report-interval = "10s"
## URL is the target of broker native ingestion url
## Default: http://127.0.0.1:9000/api/flat/write?db=_internal
url = "http://127.0.0.1:9000/api/flat/write?db=_internal"

## logging related configuration.
[logging]
## Dir is the output directory for log-files
## Default: /tmp/lindb/log
dir = "/tmp/lindb/log"
## Determine which level of logs will be emitted.
## error, warn, info, and debug are available
## Default: info
level = "info"
## MaxSize is the maximum size in megabytes of the log file before it gets rotated. 
## Default: 100 MiB
maxsize = "100 MiB"
## MaxBackups is the maximum number of old log files to retain. The default
## is to retain all old log files (though MaxAge may still cause them to get deleted.)
## Default: 3
maxbackups = 3
## MaxAge is the maximum number of days to retain old log files based on the
## timestamp encoded in their filename.  Note that a day is defined as 24 hours
## and may not exactly correspond to calendar days due to daylight savings, leap seconds, etc.
## The default is not to remove old log files based on age.
## Default: 7
maxage = 7
```
## Storage

```toml
## Coordinator related configuration.
[coordinator]
## Coordinator coordinates reads/writes operations between different nodes
## namespace organizes etcd keys into a isolated complete keyspaces for coordinator
## Default: /lindb-cluster
namespace = "/lindb-cluster"
## Endpoints config list of ETCD cluster
## Default: ["http://localhost:2379"]
endpoints = ["http://localhost:2379"]
## Lease-TTL is a number in seconds.
## It controls how long a ephemeral node like zookeeper will be removed when heartbeat fails.
## lease expiration will cause a re-elect.
## Min: 5s
## Default: 10s
lease-ttl = "10s"
## Timeout is the timeout for failing to executing a etcd command.
## Default: 5s
timeout = "5s"
## DialTimeout is the timeout for failing to establish a etcd connection.
## Default: 5s
dial-timeout = "5s"
## Username is a user name for etcd authentication.
## Default: ""
username = ""
## Password is a password for etcd authentication.
## Default: ""
password = ""

## Query related configuration.
[query]
## Number of queries allowed to execute concurrently
## Default: 8
query-concurrency = 8
## Idle worker will be canceled in this duration
## Default: 5s
idle-timeout = "5s"
## Maximum timeout threshold for query.
## Default: 5s
timeout = "5s"

## Storage related configuration
[storage]
## interval for how often do ttl job
## Default: 24h0m0s
ttl-task-interval = "24h0m0s"
## Broker http endpoint which storage self register address
## Default: http://localhost:9000
broker-endpoint = "http://localhost:9000"

## Storage HTTP related configuration.
[storage.http]
## port which the HTTP Server is listening on
## Default: 2892
port = 2892
## maximum duration the server should keep established connections alive.
## Default: 2m0s
idle-timeout = "2m0s"
## maximum duration before timing out for server writes of the response
## Default: 5s
write-timeout = "5s"
## maximum duration for reading the entire request, including the body.
## Default: 5s
read-timeout = "5s"

## Storage GRPC related configuration.
[storage.grpc]
## port which the GRPC Server is listening on
## Default: 2891
port = 2891
## max-concurrent-streams limits the number of concurrent streams to each ServerTransport
## Default: 160 
max-concurrent-streams = 160
## connect-timeout sets the timeout for connection establishment.
## Default: 3s
connect-timeout = "3s"

## Write Ahead Log related configuration.
[storage.wal]
## WAL mmaped log directory
## Default: /tmp/lindb/storage/wal
dir = "/tmp/lindb/storage/wal"
## data-size-limit is the maximum size in megabytes of the page file before a new
## file is created. It defaults to 512 megabytes, available size is in [1MB, 1GB]
## Default: 128 MiB
data-size-limit = "128 MiB"
## interval for how often remove expired write ahead log
## Default: 1m0s
remove-task-interval = "1m0s"

## TSDB related configuration.
[storage.tsdb]
## The TSDB directory where the time series data and meta file stores.
## Default: /tmp/lindb/storage/data
dir = "/tmp/lindb/storage/data"

## Flush configuration
## 
## The amount of data to build up in each memdb, 
## before it is queueing to the immutable list for flushing.
## larger memdb may improve query performance.
## Default: 500 MiB
max-memdb-size = "500 MiB"
## Mutable memdb will switch to immutable this often,
## event if the configured memdb-size is not reached.
## Default: 30m0s
mutable-memdb-ttl = "30m0s"
## Global flush operation will be triggered
## when system memory usage is higher than this ratio.
## Default: 0.75
max-mem-usage-before-flush = 0.75
## Global flush operation will be stopped 
## when system memory usage is lower than this ration.
## Default: 0.60
target-mem-usage-after-flush = 0.60
## concurrency of goroutines for flushing.
## Default: 2
flush-concurrency = 2

## Time Series limitation
## 
## Limit for time series of metric.
## Default: 200000
max-seriesIDs = 200000
## Limit for tagKeys
## Default: 32
max-tagKeys = 32

## Config for the Internal Monitor
[monitor]
## time period to process an HTTP metrics push call
## Default: 3s
push-timeout = "3s"
## monitor won't start when interval is sets to 0
## such as cpu, memory, and disk, process and go runtime
## Default: 10s
report-interval = "10s"
## URL is the target of broker native ingestion url
## Default: http://127.0.0.1:9000/api/flat/write?db=_internal
url = "http://127.0.0.1:9000/api/flat/write?db=_internal"

## logging related configuration.
[logging]
## Dir is the output directory for log-files
## Default: /tmp/lindb/log
dir = "/tmp/lindb/log"
## Determine which level of logs will be emitted.
## error, warn, info, and debug are available
## Default: info
level = "info"
## MaxSize is the maximum size in megabytes of the log file before it gets rotated. 
## Default: 100 MiB
maxsize = "100 MiB"
## MaxBackups is the maximum number of old log files to retain. The default
## is to retain all old log files (though MaxAge may still cause them to get deleted.)
## Default: 3
maxbackups = 3
## MaxAge is the maximum number of days to retain old log files based on the
## timestamp encoded in their filename.  Note that a day is defined as 24 hours
## and may not exactly correspond to calendar days due to daylight savings, leap seconds, etc.
## The default is not to remove old log files based on age.
## Default: 7
maxage = 7
```

## Standalone

```toml
## Embed ETCD related configuration.
[etcd]
## Where the ETCD data is stored
## Default: /tmp/lindb/coordinator
dir = "/tmp/lindb/coordinator"
## URL to listen on for client traffic 
## If 0.0.0.0 if specified as the IP, 
## etcd listens to the given port on all interfaces.
## If an IP address is given as well as a port, 
## etcd will listen on the given port and interface.
## Default: http://localhost:2379
url = "http://localhost:2379"

## Reference to the configuration of Broker/Storage.
[coordinator]

## Reference to the configuration of Broker/Storage.
[query]

## Reference to the configuration of Broker.
[broker]

## Reference to the configuration of Broker's HTTP.
[broker.http]

## Reference to the configuration of Broker's Ingestion.
[broker.ingestion]

## Reference to the configuration of Broker's Write.
[broker.write]

## Reference to the configuration of Broker's GRPC.
[broker.grpc]

## Reference to the configuration of Storage.
[storage]
## Indicator is a unique id for identifing each storage node

## Reference to the configuration of Storage's HTTP.
[storage.http]

## Reference to the configuration of Storage's GRPC.
[storage.grpc]

## Reference to the configuration of Storage's WAL.
[storage.wal]

## Reference to the configuration of Storage's TSDB.
[storage.tsdb]

## Reference to the configuration of Broker/Storage's logging.
[logging]

## Reference to the configuration of Broker/Storage's monitor.
[monitor]
```
