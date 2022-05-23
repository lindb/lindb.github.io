# Overview

## 概述

该页面显示了整个集群的概况，包含以下信息：

- 当前集群 Master 信息；
  - Master 节点基本信息；
  - Master 选举时间；
- 当前集群 Broker 存活节点列表；
  - Broker 节点基本信息；
  - Broker 存活时间；
  - Broker 对应的版本；
  - Broker 节点的 CPU/Memory 状态；
- 当前可用 Storage 集群列表，更多信息请看[集群状态信息](#存储集群状态)；
  - 集群内节点状态；
  - 可用的数据库数；
  - 副本基本状态；
  - 集群磁盘使用情况；

<image-window>

![overview](@images/guide/admin_ui/overview.png)

</image-window>

## 节点配置信息

点击 Broker 节点或者 Storage 节点列表右侧的配置图标可以显示该节点当前的配置信息，如下：

<image-window>

![node configuration](@images/guide/admin_ui/node_config.png)

</image-window>

## 存储集群状态

点击 Storage 集群列表中的某个 Storage 名称可以查询该 Storage 集群的基本状态信息：
- 集群基本状态信息；
- 集群当前存活的存储节点信息，可以看某个节点的[配置信息](#节点配置信息)；
- 当前集群下可用的数据库状态，点击具体某个数据库名称可以查看该[数据库副本状态信息](./monitoring.md#replication)；

<image-window>

![node configuration](@images/guide/admin_ui/storage_state.png)

</image-window>

