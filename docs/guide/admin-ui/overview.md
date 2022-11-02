# Overview

## Overview page

This page shows the overview of the entire cluster:

- Current cluster Master Status;
  - Basic Status of Master node;
  - Master election time;
- Alive Broker-Nodes list of current cluster;
  - Basic status of Broker-Nodes;
  - Broker alive time;
  - Broker's version;
  - CPU/Memory status of Broker nodes;
- Alive Storage-Nodes list of current cluster,  see [Cluster Status Information](#storage-cluster-status) for more information;
  - Node status in the cluster;
  - Available databases;
  - Basic state of the replica;
  - Cluster disk usage;

<image-window>

![overview](@images/guide/admin_ui/overview.png)

</image-window>

## Node configuration

Click the configuration icon on the right side of the Broker node or Storage node, then the current configuration information of the node will be displayed:

<image-window>

![node configuration](@images/guide/admin_ui/node_config.png)

</image-window>

## Storage cluster status

Click either Storage name in the Storage cluster to query the basic status of the Storage cluster:
- Basic cluster status;
- See [configuration information](#node-configuration) for active storage nodes in the cluster;
- See [database replica status](./monitoring.md#replication) for status of available database in the cluster

<image-window>

![node configuration](@images/guide/admin_ui/storage_state.png)

</image-window>
