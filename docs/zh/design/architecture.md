# 架构

## 目标

- 高可用性；
- 易用且易维护；
- 支持集群模式；
- 支持复制；
- 支持多个 IDC；
- 最终一致性；
- 自监控能力；
- 数据治理能力；

## 整体架构

![architecture](@images/design/architecture.png)

整体架构采用计算存储分离：
- **计费层**：由 Broker 集群承担，处理入口的读写请求；
- **存储层**：由 Storage 集群承担，Storage 集群可以有多个组件，每个集群作为独立的存储单元，负责数据的存储；

## 计算层

Broker 无状态的服务，具有水平扩容能力，主要职责如下：

1. **负载均衡**：由于自身无状态，可以启动多个实例，因此接入层的连接可以均匀的分摊到所有 Broker 节点上进行读写；
2. **数据写入**：Broker 根据当时目标数据库 Shard 状态的情况，与 Shard Leader 节点进行通信，将数据写入 Leader 节点，而 Leader 节点会进行数据多副本复制；
3. **分布式查询**：根据具体的查询情况生成不同的执行计划；
4. **查询结果聚合**：作为计算层聚合 Broker（中间查询）/ Storage 查询返回的数据；
5. **跨机房查询结果聚合**：多 IDC 查询结果的再聚合；

Master：是 Broker 集群中一个特殊的节点，承担所有 Metadata 变更操作，并且由 Master 把相关的 Metadata 数据下发到对应的节点上，以保证 Metadata 一致性，由于 Master 本身负责的都是轻量化操作，且为了简化架构，因此从任一 Broker 节点中通过抢占的方式选举产生。

## 存储层

Storage 是有状态的服务，存储实际的数据，Storage 本身不协调集群的 Metadata（Metadata 统一由 Master 协调下发）同时也具有水平扩展的能力，主要职责如下：

1. **写入**：存储各 Database 下的数据及索引，以及自己的 Metadata(Metric/Tags/Fields) ；
2. **读取**：执行数据的过滤及一些简单的聚合(最原子的 Field 基本类型的聚合计算) 及 Down Sampling 操作；
3. **DDL**：执行 Broker 下发的 Metadata 变更任务，如创建数据库，数据治理等；

## 元信息层

ETCD 作为 LinDB 的唯一外部依赖，存储所有的 Metadata 信息，主要职责如下：

1. 元数据存储：如数据库的配置，各分片的信息，Broker/Storage 集群各节点的状态；
2. 分布式调度：即所有的 Metadata 的变更都通过 ETCD 中转下发到 Storage 节点；

在满足如下两个前置条件时，LinDB 可以在 ETCD 出现故障时还能处理读写请求：

1. 当 ETCD 出问题的时候，不支持 Metadata 信息的变更，如不修改数据库的配置等；
2. 集群状态是健康的，即还是可以使用当前内存的 Metadata/Status 来协调整个集群；

一定的自修复能力：当 ETCD 中的数据完整不可用或者丢失时，Broker/Storage 可以上报 Metadata/Status 到新的 ETCD 集群以实现故障转移；
