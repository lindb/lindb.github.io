# Replication

## Overview

For the replication of distributed storage, consensus protocols such as Paxos, Raft, and ZAB are commonly used in the industry. More than half of these protocols will sacrifice certain performance to strictly ensure data consistency.

The scenario faced by `LinDB` is that the amount of writing is huge, and the requirements for data consistency are not high. It also allows short-term data inconsistency and eventually consistent. Therefore, `LinDB` adopts the strategy that when successfully written to the `Leader` the write operation is successful.

Written to `Leader` is successful has the following benefits:
- Improving write performance;
- Any machine can be deployed in the cluster, while Paxos, Raft, ZAB, etc. require at least 3 machines;

Written to `Leader` is successful, has the following problems:
- Data consistency problem: once the `Leader` is down, a new `Leader` will be elected, then the new `Leader` copying new data may overwrite the data written by the old `Leader`;
- Data loss problem: once `Leader` is down, and the data block which was not copied to `Follower` is also damaged at this time, this part of data will be lost;

In order to solve the above problems and try to ensure that data is not lost, `LinDB` adopts a multichannel replication scheme, as shown in the following figure:

![replication](@images/design/storage_database.png)

Take the data shard `Shard 3` as an example:
- When `Node 1` is a `Leader`, `1-WAL` write channel is enabled, `Node 1` receives new data and writes it to the `1-WAL` channel, and replicating the data into `1-WAL` channel of `Node 2` and `Node 4`;
- When `Node 1` is down and `Node 2` is elected as the new `Leader`, the `2-WAL` write channel is enabled, and `Node 2` receives new data and replicating the data into `2-WAL` channel of `Node 4`;
- When `Node 1` is up again, `Node 1` continue to copy the data into `1-WAL` channel that has not been copied to `Node 2` and `Node 4` to their corresponding `1-WAL` channels . `Node 2` will supplement the data in the `2-WAL` channel to the `2-WAL` channel of `Node 1`;

That is, data in write channel flows from `Leader` . For example, the `1-WAL` channel is always the `Node 1` replication channel to `Node 2` and `Node 4`, and the `2-WAL` channel is always `Node 2` replication channels to `Node 1` and `Node 4`, `4-WAL` channel is always `Node 4` replication channel to `Node 1` and `Node 2`, and so on,

:::tip
`Node 1` corresponds to the unique identifier `1` in the cluster, and so on for other nodes.
:::

This way of replication solves the following problems:
- Avoid data inconsistency: only one node is responsible for the authority of the data for each channel, so there will be no conflict;
- Avoid data loss as much as possible: as long as the data which has not been copied in the old `Leader` is still persistent at disk, it will be copied to other replicas after it gets up again. If the data that has not been copied in the old `Leader` is lost, then which will be lost forever;

Preconditions for multichannel replication:
- Out of order is allowed: data written to multiple channels loses its order. Transactions are not required for Time series data scenarios faced by `LinDB`   so out of order is allowed.

:::tip
Since a major feature of time series data is time correlation, `LinDB` also shards data by time according to this feature when storing data. Each time shard is a storage unit, so the actual replication channel is also stored with Units correspond one-to-one.
:::

## Local Replication

![local replication](@images/design/local_replication.png)

The entire Local Replication writing process is as follows:
- The system will start a writing goroutine for each `Shard` replication channel, this goroutine is responsible for all write operations on this channel, whatever it is a `Leader` or a `Follower`;
- First, data corresponding to `namespace/metric name/tags/fields` into the index file of the database will be written, and the corresponding `metric id/time series id/field id` will be generated, this operation is  mainly about completing the conversion of `string->int`; Advantage of this conversion is that all data are stored in data types to reduce the overall storage size, because for each data point, metadata such as `namespace/metric name/tags/fields` is occupied by such as `cpu{host= 1.1.1.1} load=1 1514214168614`,
In fact, after converting to `id`, the storage will be `cpu => 1(metric id), host=1.1.1.1 => 1(time series id), load => 1(field id)`, simplified to `1 1 1514214168614 =>1`, please refer to [index](index_.md) for the specific index structure;
- If writing index operation fails, it is considered that the writing has failed, and the failure is composed of two cases`;
  1. Bad data writing format, such failures are directly marked as failures;
  2. Internal failure, the writing operations will be retried;
- When obtained `ID`, data will be written into storage uint, this process is similar to `LSM`, which writes data into the memory database firstly, and directly write to the memory to achieve high throughput performance. After the size of memory data reaches the memory limit, the `Flush` operation will be triggered. For details, please refer to [Storage Format](storage.md), [Memory Database](memory.md);

Here are two import replication `Index` for write operations:
- `Consume(Replica) Index`: where the writing goroutine has been processed, each write operation will first verify whether the `Index` is legal;
- `Ack Index`: which data in this channel has been successfully written and persisted to storage;

Here are a few things to note:
1. The writing goroutine will consume the written data from the `WAL` channel in order, so the `Replica Index` is an ordered pointer, so it is easy to check with the persisted `Index` to verify the data whether it has been written;
2. The `Flush` goroutine is used to synchronize the `Ack Index` to notify which data has been written successfully;
3. Since all write operations write into memory firstly, and then persist the data into corresponding file. If the system crashes during this process, as there is no `Ack Index`, even if the data in the memory is lost, but when the goroutine starts again, it consumes the data in the `WAL` channel with `Ack Index` as the current `Replica Index`. This consuming process achieved that data can be recovered after crashing;

## Remote Replication

Pick `Node 1` as `Leader` in the above figure with 3 Replications replicating data from `1-WAL` as an example:

`Node 1` acts a `Leader` of the shard to accept written data from `Broker`, `Node 2` and `Node 4` are both `Follower` accepting the replication request of `Node 1`, meanwhile the `1-WAL` channel is used as data write channel.

![remote replication](@images/design/remote_replication.png)
  
`Index` basic concept description:
- `Append Index` of each channel, indicating the writing position of the channel ;
- Each channel retains each `Follower Consumer (Replica) Index` and `Ack Index`, respectively indicating the position where each `Follower` is consumed (consumed but the request is still without successful consumption acknowledged) and position of successful consumption;
- `Tail Index` of each channel: indicates the minimum value of all `Follower Ack Index`, `WAL` before the `Index` is deletable ;

The entire replication process is as follows:
- `Leader` will start an independent goroutine for each `Follower` replication, get `Follower Consumer(Replica) Index` from `WAL` of `Leader` then send it to `Follower`;
- `Follower` compares the `Append Index` with `Consumer(Replica) Index` in local `WAL`;
  - On equal: return `Consumer Index` to `Leader` as `Ack Index` (normal case);
  - On not equal, return the `Append Index` in its own local `WAL` to `Leader`;
- After `Leader` receiving response, detect whether the `Ack Index` of`Follower` is equal to `Consumer(Replica) Index`;
  - On equal: update the `Ack Index` of the `Follower` (normal case);
  - On not equal: here are some cases:
    - On `Follower Ack Index` smaller than `Tail Index` of `Leader WAL`: this means that `Follower` local `Append Index` is too small while `Leader` has no data at that position, then `Follower` should reset its own `Append Index` as `Tail Index` of `Leader`;
    - On `Follower Ack Index` is greater than the `Append Index` of the `Leader WAL`: this means that the `Append Index` of the `Follower` is too large, and the `Leader` has no data at this position, and the `Leader WAL` needs to be changed. Append Index` is raised to `Follower Ack Index`, and `Follower Consumer(Replica) Index` is raised to `Follower Ack Index`;
    - On `Follower` is between `Tail Index` and `Append Index` of `Leader WAL`: `Follower Consumer(Replica) Index` will be reset to `Follower Ack Index`;

The process of `Leader` and `Follower` to initialize the replication channel is similar to `TCP` three-way handshake.

## Sequentiality

Generally speaking, multichannel replication does not guarantee the order of the overall data. In most cases, only one of the channels is used. It is necessary to ensure the order of replication of the channel. With sequentiality, it is easier to know which data has been copied. Which data has not been replicated.

To ensure the sequentiality of replication process, it is necessary to ensure the order of the following steps:
- `Leader` send replication requests in order;
- `Follower` processes replication request in order;
- `Leader` responses to replication request in order;

Since the entire writing and replication process is based on the `GRPC Stream` long connection and single-goroutine processing mechanism, the above conditions can basically be guaranteed.

#### Reference
1. [bigqueue](https://github.com/bulldog2011/bigqueue)
