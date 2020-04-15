# 协调者

## Overview

整个集群的协调操作都是由 Broker 来完成，那么为什么把这些重要的操作放在 Broker 上呢？
- Broker 其实是充当计算节点，包括读写操作。由于 Broker 需要知道下层所有 Storage 节点的状态信息，所以状态信息的协调任务被放在Broker 中；
- Metadata 的变更不是很频繁，并且都是轻量操作；
- Storage 节点的状态变更会比较频繁， Broker 通过这部分信息来选取 Shard 副本是可用的，所以没有必要让 Storage 来管理这些状态再同步给 Broker，这样的好处是 Storage 可以更专注在存储上；
- 需要多机房同一数据库的计算能力；

哪些信息需要处理？
- 数据库 DDL 操作；
- Storage 节点管理；
- 运行时参数调整；
- Storage/Broker 状态管理；

所有协调及调度操作都是基于 ETCD 来完成，所有的调度消息都需要一个版本号，以跟踪各节点在 Metadata 变更后，各节点上的数据是否一致。

## Master

Master 负责主要的 Metadata 的变更，Master 抢占式地从当前存活的 Broker 节点中选举出来，即每个 Broker 节点同时去注册 Master KEY，谁先注册上成为 Master；

同时每个 Broker 也会 Watch Master KEY，如果 Master KEY 上的信息丢失，重新进行选举，这样的好处是每个 Broker 都知道当前 Master 是哪个节点；

- Master KEY: /master/node;
- 注册成功的 KEY: /master/node/{broker node}

## Task

这里说的 Task 主要是指 Master(Broker) 下发给 Storage 需要执行的任务。主要包括如下 2 个角色：
- Controller
- Executor

与 ETCD 有关系的 KEY 信息如下：
- Task KEY: /task-coordinator/v1/executor/{storage node id}/kinds/{task kind}/names/{task name}
- Task Status KEY: /task-coordinator/v1/status/kinds/{task kind}/names/{task name}

### Controller

Controller 运行在 Broker 层：
- 生成任务(Task KEY)：接受 Master(Broker) 提交的任务，生成具体的 Task 并下发给 Storage 节点，下发操作通过 ETCD 来完成；
- 对任务状态的跟踪(Task Status KEY)：在下发 Task 的同时会生成一个对 Task 状态的 Tracker，来跟踪具体 Task 的执行情况；

### Executor

Executor 动行在 Storage 层：
- 执行任务：Executor 会 Watch 相应 Task KEY 上任务的变化来执行属于自己的 Task；
- 任务状态的更新：会对相应 Task 执行结果的上报更新到 Task Status KEY；

## State Machine

所有的这些操作由各种不同的状态机来完成，下面会对每个 State Machine 进行说明。

不同的 State Machine 会 Watch 不同 ECTD 上面的 KEY 来完成相应的操作。

### Broker Node State Machine

该 State Machine 主要执行 Broker Node 的发现操作，运行于每个 Broker 节点。

`Watch KEY: /active/nodes`

- Broker 启动的时候都会把自己的信息注册到 Watch KEY 下面，即 /active/nodes/{broker node}；
- Watch KEY 的变化，每个 Broker 都知道当前 Broker 存活的节点有哪些；

### Storage Cluster Status State Machine

该 State Machine 主要完成 Storage 集群各节点存活状态的跟踪，Broker 需要知道所有的 Storage 集群及其各节点的存活情况，运行于每个 Broker 节点。

`Watch KEY: /state/storage/cluster`

- Watch KEY 里面的信息由 Master 写入，Master 会 Watch 每个 Storage 集群各节点的存活情况，并把最终集群的信息写入到 Watch KEY 下面(/state/storage/cluster/{cluster name}), 具体请看  [Storage Cluster State Machine](./coordinator.html#storage-cluster-state-machine) ；
- 通过Broker Watch KEY 的变化，可以知道每个 Storage 集群的状态信息；
- Broker 会根据 Storage 集群节点的情况，并结合当前 Broker WAL 的信息，生成 Broker -> Storage 的复制通道，一但通道建立完成，就可以进行数据的复制操作，具体的复制请看 [Replication](./replication.html) ；

### DB Admin State Machine

该 State Machine 主要完成数据库相关的 DDL，运行于 Master。

`Watch Key: /database/config`

- 用户可以提交数据库 DDL 到任意一台 Broker 节点，该 Broker 节点不生成具体的 Task 给 Storage，而是简单的把配置写在 "/database/config/{db name}" 下；
- Master Watch KEY 的变化，根据当前 Storage 集群的状态信息，生成 Shard Assignment；
- 根据生成的 Shard Assignment 生成相应的 Task，下发给相应的 Storage 节点来执行相应的 DDL 操作；

Shard Assignment: 为某一数据库的每 Shard 的信息，主要包括如下信息：
```
Name: 数据库名
Nodes:  该数据库各 Shard 的 Replica 所在的 Storage Nodes
Shards: 各 Shard 的信息

每个 Shard 包括如下信息：
ShardID: 该 Shard 对应的 ID
Replicas: 该 Shard 下所有 Replicas 的信息，对应上面 Nodes 里面的信息
```

### Storage Cluster State Machine

该 State Machine 主要完成 Storage Cluster 配置信息的操作，运行于 Master。

Watch KEY: /storage/cluster/config

- 用户可以提交 Storage Cluster 配置信息给任意一台 Broker 节点，该 Broker 节点只是简单的把配置信息写到 "/storage/cluster/config/{cluster name}" 下；
- Master Watch KEY 的变化，根据配置信息为每个 Storage 集群建立一个 Storage Cluster 的 Watch 机制，以追溯每个 Storage 集群节点的存活情况；
- 每个 Storage Cluster 的 Watch 会 Watch Storage 节点的存活情况，并把该 Storage 整体的状态信息写到 "/state/storage/cluster/{cluster name}" 下以供 [Storage Cluster Status State Machine](./coordinator.html#storage-cluster-status-state-machine) 使用；


每个 Storage Cluster 的 Watch 机制如下：
- 根据 Storage 集群的配置信息，与 Storage 集群的 ETCD 建立关系；
- Watch Storage 集群节点存活的 KEY: /active/nodes (注意有别于与 Broker 的 /active/nodes，这里对应的是 Storage 相要注册的信息)；
- 每个 Storage 节点启动的时候，需要注册节点信息到对应的 KEY 下面，即 /active/nodes/{storage node id}

### Replicator State Machine

该 State Machine 主要完成每个数据库的 Shard WAL 的复制关系，运行于 Broker。

Watch KEY：/database/assign

- Watch KEY 的变化: 根据 Shard Assignment 的信息，生成该数据库每个 Shard WAL 与目标 Storage 节点的关系，Shard Assignment 的写入，请看 [DB Admin State Machine](./coordinator.html#db-admin-state-machine) ；
- 注意这时只是建立关系，并不会建立真正的复制通道；

### Replica Status State Machine

该 State Machine 主要监控每个 Replica 的复制状态，运行于 Broker。

Watch KEY: /state/replica

- WAL 复制会定期上报当前的复制状态，到对应的 KEY 下面 "/state/replica/{storage node id}" ；
- 通过watch Broker Watch KEY 的变化，便可知道每个复制通道复制的状态，在执行查询的时候可以选取最新副本的 Storage 节点；
- 需要注意复制状态信息，包括 Broker Node -> Storage Node peer 下面所有的副本的状态，可能包括多个不同的数据库副本的复制状态；

## 容错

- 整个过程中 ETCD 成为了一个非常核心的组节，因为所有的协调及调度信息都是通过 ETCD 来完成。
- 并且很多 Metadata 信息都存放在 ETCD 中；

因此如果 ETCD 出问题了对整个系统会产生很大的影响，那么怎么把影响做到最小是比较关键的：
1. 首先 ETCD 挂了，极端情况 ETCD 中的数据损坏不能恢复了怎么办? 因此需要在每次 Metadata 变更之后相关节点都需要做好本地的备份操作，并有能力通过这些备份数据能还原到新的 ETCD 集群中；
2. ETCD 出问题不应该影响整个系统的可用性；
3. 一般 Metadata 变更是一个低频操作，因此这个是可被接受的；
4. 如 Leader 副本出现问题时可能会影响副本数据不一致；