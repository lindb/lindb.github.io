# Monitoring

## Dashboard

Dashboard is a self-monitoring page that comes with LinDB, the internal real-time status of each component is available
in the relevant dashboards

For specific metric descriptions, refer to [Self-monitoring](../self-monitor.md)

<image-window>

![dashboard](@images/guide/admin_ui/dashboard.png)
</image-window>

### Broker Dashboard

|  Dashboard  | Description                            |
|  ----  |----------------------------------------|
| Broker Query | Task, Request/Response                 |
| Ingestion | Broker ingestion traffic, io, duration |
| Broker Write | Broker write count、statistics          |
| Broker Coordinator | Broker coordination monitoring         |
| Master Coordinator | Master node coordination monitoring    |
| Master Controller | Master election   monitoring           |
| Concurrent Pool | Concurrency pool monitoring            |
| Concurrent Limit | Concurrency pool limiter               |
| Network TCP | Connection, Traffic, I/O               |
| Network GRPC | Client/Server Stream                   |
| Runtime | Golang runtime                         |
| System | Node system, such as CPU, memory, disk |

### Storage Dashboard

|  Dashboard  | Description                                                               |
|  ----  |---------------------------------------------------------------------------|
| Storage Query | Task, Request/Response                                                    |
| WAL | Write Ahead Log(ingestion, writing, replication)                          |
| Local Replication | Consuming logs locally from WAL to write TSDB                             |
| Remote Replication | Storage leader consumes WAL logs and copies the data to the follower node |
| Storage Coordinator | Storage Coordination                                                      |
| TSDB Write | Family Write，Memory Database Write                                        |
| TSDB Job | Flush Operation                                                           |
| KV Read | KV Read Traffic、Count                                                     |
| KV Write | KV Write Traffic、Count                                                    |
| KV Job | KV Flush, Compaction                                                      |
| Concurrent Pool | Concurrency pool                                                          |
| Network TCP | Connection, Traffic, I/O                                                  |
| Network GRPC | Client/Server Stream                                                      |
| Runtime | Go runtime                                                                |
| System | Node system, such as CPU, memory, disk                                    |

## Replication

Database replication status mainly includes the following status:

- Basic state information of the database, such as the number of replicas;
- Replica distribution and replication status, such as channels delay information;
- Local replication write.

### WAL

There are 2 modes viewing replica status, which can be switched through the button on the right side
of the Replication State:

- Mode 1: Perspective of the distribution of replicas in each Storage node, and show whether there is a
  replication delay, mouse hover to a shard will display replication of each channel in it;

<image-window>

![replication shards](@images/guide/admin_ui/replication_shards.png)
</image-window>

- Mode 2: Perspective of replication channels under all shards, Shard/Family related filtering and filtering is
  supported

<image-window>

![replication families](@images/guide/admin_ui/replication_families.png)
</image-window>

### Write

Write status of the local replica:

- Write status of each memory-database;
- Each `leader`'s writing pointer status;

- Mode 1: Perspective of writing status of all memory databases under all shards,
  Shard/Family related filtering and filtering is supported

<image-window>

![memory database write](@images/guide/admin_ui/memory_database_write.png)
</image-window>

- Mode 2: Perspective of all active families under all shards,
  Shard/Family related filtering and filtering is supported

<image-window>

![memory database replica](@images/guide/admin_ui/memory_database_replica.png)
</image-window>

## Request

Browse for [LinQL](../lin-ql.md) that is currently executing in the cluster


<image-window>

![memory database replica](@images/guide/admin_ui/request_list.png)
</image-window>

## Log View

Log View allows users to browse log files on all nodes in the cluster and displays related logs.


<image-window>

![log view](@images/guide/admin_ui/log_view.png)
</image-window>
