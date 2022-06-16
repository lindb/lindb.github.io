# Coordinator

All MetaData modification are mainly executed by three different roles in LinDB.

1. **Master**: Execute all Metadata modification and delivery them to other components in the cluster through ETCD, and the Master is elected in Broker;
2. **Broker**: Listens all states in the cluster;
3. **Storage**: Listens status of the storage cluster where its located;

Why is Master in charge of all Coordination of the entire cluster?

- Broker actually acts as compute node with read/write operations. Coordination task of the state information is placed in the broker layer so that it is able to access the state information of all the storage nodes in the lower layer.
- Metadata changes are frequent and are all lightweight;
- Requires the computing ability to reduce query of a same database from multiple IDCs;

What information needs to be processed?
- Database DDL operations;
- Storage Node Management;
- Runtime Parameter Adjustment;
- Storage/Broker State Management;

## Overview

![coordinator](@images/design/coordinator.png)

All scheduling operations are processed based on the basic framework logic of the figure above, each role listens for its own interested data change operations in ETCD.

- Each character spawns an asynchronous goroutine for the Metadata they care about to listen for changes via different keys in ETCD, each key is listened by separated goroutine;
- When the listening key is changed, the corresponding goroutine submits the event to the event-queue in State Manager. Then the State Manager will start a global thread to process the change work of all events uniformly, and store the processed result in the State Manager's State Store;
- All external status information is obtained directly from the State Manager's State Store without ETCD, so LinDB will still work when ETCD is down;


## Master

The Master is responsible for most Metadata changes, it is elected from currently surviving Broker nodes by preemptively election. In brief, each Broker node registers the Master KEY concurrently, the first node will become Master;

At the same time, each Broker will also watch Master Key, If the information on Master Key is lost, the election will be re-initialized, so that each Broker will know who is the Master and able to forward requests to Master node;


```yaml:no-line-numbers
Master KEY: /{broker namespace}/master/node
Successfully Election KEY: /{broker namespace}/master/node/{broker node}
Post-Election Key: /{broker namespace}/master/elected/{broker node}
``` 

Master is responsible for the following state machines:

1. Storage Config State Machine;
2. Database Config State Machine;
3. Shard Assignment State Machine;

### Storage Config

```yaml:no-line-numbers
Watch KEY: /{broker namespace}/storage/config
```  

- The user can submit storage cluster configuration information to any broker node, then the Broker node just simply writes the configuration information to `/storage/config/{cluster name}`
- Master establishes a Storage-Live-Node State-Machine Watching mechanism for each Storage cluster based on the configuration information to trace the survival of each Storage cluster node;
- Each Storage Cluster Watches the survival situation of Storage nodes, and write the overall storage status information to `/state/storage/cluster/{cluster name}` for usage by [Storage Cluster Status State Machine] (#storage-status);


The Watch mechanism for each Storage Cluster is as follows:
- Establish connection with ETCD of the Storage cluster based on the configuration information of the Storage cluster;
- Watch Storage cluster node survival KEY: `/active/nodes` (note that unlike brokers `/active/nodes`, it corresponds to the storage registration information);
- When each Storage node starts, registers the node information below the corresponding KEY:  `/live/nodes/{storage node id}`;


### Database Config

```yaml:no-line-numbers
Watch KEY: /{broker namespace}/database/config
```

- The user can submit the database DDL to any broker node, which broker will just write the configuration to ETCD;
- Through the change of Watch KEY, the Master knows that it needs to assign the corresponding database, then generates a Shard Assignment according to the node status information of the current Storage cluster, and sends the Shard Assignment task to the corresponding nodes;

:::tip
Shard Assignment : Describe the detail of each DataBase Shard;

```yaml:no-line-numbers
Name: Database Name;
Option: Configuration information for the storage engine;
Shards: Assignment information for each Shard;

Each Shard assignment includes the following information:
ShardID: Shard's ID;
Replicas: The information of all Replicas under the Shard corresponds to the information in the Node ID above;
```
:::


### Shard Assignment

### Storage Cluster Status State Machine

This State Machine runs on each Broker node, it performs the tracking of the survival status of each node in the Storage Cluster.

`Watch Key: /state/storage/cluster`

- The information of Watch Key is written by the Master. The Master will watch the survival of each node in Storage Cluster and write the final information to the corresponding Key(/state/storage/cluster/{cluster name}). For details see [Storage Cluster State Machine](./coordinator.html#storage-cluster-state-machine);
- Status information of each Storage Cluster is available by Broker watched Key change;
- Broker will create a copy channel to Storage according to the situation of the Storage Cluster node and the information of the current Broker WAL. Once the channel is established, the data can be copied. For details see [Replication](./replication.html) ；


### DB Admin State Machine

The State Machine runs on each Master, it will primarily performs the database-related DDL.

`Watch Key: /database/config`

- User can submits the database DDL to any Broker node, then the node does not generate a specific Task for Storage but just write the configuration to "/database/config/{db name}";
- Shard assignment is created by current Storage cluster status by watching the Master Key;
- Task is generated by shard assignment which will be delivered to the corresponding Storage node to perform DDL operation;

Shard Assignment is information about each Shard which contains these details:
```
Name: database name
Nodes: Shard Replica of the located Storage Nodes
Shards: Information about each Shard


Each shard contains the following information:
ShardID: ID of the corresponding Shard:
Replicas: Information about all Replicas to the Shard, which corresponds to the information of the Nodes above. 
```

### Storage Cluster State Machine

This State Machine runs on the Master, it performs the operation of configuration of Storage Cluster.

`Watch Key: /storage/cluster/config`

- User can submits configuration to each Broker node which will simply writes the configuration to "/storage/cluster/config/{cluster name}";
- A Storage Cluster Watch mechanism is established for each cluster to track the survival status of each node;
- The survival or the Storage Node is watched and the status of the entire Storage will be wrote to "/state/storage/cluster/{cluster name}" for [Storage Cluster Status State Machine](./coordinator.html#storage-cluster-status-state-machine)'s usage;

The watch mechanism of each cluster is as follows:
- Establish a relationship with the Storage Cluster ETCD based on the configuration;
- Watch alive key of Storage nodes: `/active/nodes(note that it's different from the broker)`;
- Node information is registered to `/active/nodes/{storage node id}` when Storage node starts;


### Replicator State Machine

This State Machine runs on the Broker, it primarily performs the replication of shard WAL for each database.

`Watch Key: /database/assign`

- Watch Key change: Relationship of each Shard WAL of the database and the target Storage node is generated according to Shard Assignment. For details see [DB Admin State Machine](./coordinator.html#db-admin-state-machine);
- Note that it's just establishing a relationship instead of creating a copy channel;

### Replica Status State Machine

This State Machine runs on the Broker, it primarily performs monitoring the replication status of each Replicas;

`Watch Key: /state/replica`

- WAL replication periodically reports current replication status to the corresponding key ("/state/replica/{storage node id}");
- The status of each copy channel is available by watching `Broker Watch Key`, then the latest Storage node will be chosen when executing the query;
- The status of all replicas under Broker Nodes to Storage nodes peer may include the replication status of multiple different database copies;
 
 
## Fault tolerance
- ETCD is a very central component during the process, as all coordination and scheduling information is done by it;
- Metadata is also stored in ETCD;

So if the ETCD is down, there will be a big impact on the whole system, then how to minimize the impact is critical:

1. Firstly, if ETCD is down,. In the extreme case, the data corruption in the ETCD won't be recovered. Therefore, the relevant node need to perform local backup operations after each Metadata change, and have the ability to restore the new data to new ETCD cluster;
2. ETCD failures should not affect the availability of the entire system;
3. Generally, the Metadata change is low frequency operation, so it's acceptable;
4. If replication of Leader is corrupt, the replication data may be inconsistent;
