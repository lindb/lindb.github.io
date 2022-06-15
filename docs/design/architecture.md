# Architecture

## Design Goals

- High Availability;
- Easy Usability and Maintenance;
- Cluster Deployment;
- Replication;
- Support Multiple IDCs;
- Eventually Consistency;
- Self-Monitoring Ability;
- Self-Governance Ability;

## Overview

![architecture](@images/design/architecture.png)

LinDB adopts the design of Separating compute and storage:

- **Computation layer**: Broker cluster is responsible for handling read/write requests;
- **Storage layer**: Storage cluster is responsible for data storage, which may be composed of multiple components. Each cluster acts as an independent storage unit;

### Computation Layer

Broker is a stateless service with horizontal expansion capability.

The main responsibilities of the Broker are as follows:

1. **Load Balancing**: Multiple stateless Broker instances are able to handle the IO requests at access layer.
2. **Data Ingestion**: Broker communicates with the Shard Leader node, and delivering writing to the Leader-Node according to the Shard status of the target database, then the Leader-Node will perform multiple-follower replication;
3. **Distributed Query**: Broker generate different execution plans according to the specific query situation;
4. **Query-Result-Aggregation**: Aggregate data returned by Broker (As Intermediate Node) / Storage(As Leaf Node);
5. **Cross-IDC-Query-Result-Aggregation**: Re-Aggregating multi-IDC query results;

Master is a special Broker-Node,  who takes all modification of Metadata and dispatches it to the corresponding node to ensure metadata consistency.

Since the Master itself is only responsible for lightweight operations, and in order to simplify the architecture, master is elected from Broker node via preemption election.

### Storage Layer

Storage is a stateful service that stores data without the Metadata. It is also able to scale horizontally. The main responsibilities are as follows:

1. **Write**: Storing all data and index of database, as well as its own MetaData(Metric/Tags/Fields);
2. **Read**: Perform data filtering and some simple aggregation (aggregation of basic Field Type) and Down Sampling operations;
3. **DDL**: Execute Metadata change task dispatched by Broker, such as database creation, data governance, etc.;

### MetaData Layer

ETCD is the only external dependency of LinDB, it stores all metadata.

The main responsibilities of ETCD are as follows:

1. **Metadata Storage**: database configuration, sharding details, status of Broker/Storage Node;
2. **Distributed Scheduling**: Every change to Metadata is sent to the Storage node through ETCD;

LinDB can still handle read and write requests when ETCD fails when the following two preconditions are met:

1. When ETCD is down, no more modification of Metadata will be performed, such as modifying the configuration of database;
2. The cluster status is still healthy, which means that the current Metadata/Status is available for coordinating the entire cluster;


- Certain self-healing ability: When the data in ETCD is completely unavailable or lost, Broker/Storage can report Metadata/Status to the new ETCD cluster for failover;
