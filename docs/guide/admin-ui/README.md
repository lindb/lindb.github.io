# Introduction

Admin Console is a web interface provided by LinDB that can be used to monitor the status of the cluster and query
the data in the cluster. The Admin Console is built into LinDB's broker
node, no independent deployment is required.

:::tip
The 'dark'/'light' UI styles are currently supported.
:::
<image-window>

![overview](@images/guide/admin_ui/overview.png)

</image-window>

The main features of the Admin Console are listed below, which can be further learned by clicking on the links in the
respective sections.

## Cluster Status

Health status of the broker, storage components and the running status of the host on which they reside in the
entire cluster are displayed

See [Cluster Status](overview.md) for more details.

## Data Search

Query data from cluster via [LinQL](../lin-ql.md), you can also use LinQL to see execution plan and execution status
statistics.

Please refer to [Data search](search.md) for more details.

## Data View

View data in the cluster through the UI clickstream, and generate the corresponding [LinQL](./lin-ql.md).

Please refer to [Data Explore](explore.md) for more details.

## Monitoring

No external components are required to monitor cluster components.

- [Dashboard](monitoring.md#dashboard)：Provides rich dashboards to monitor the running status of various components in
  the cluster；
- [Replication](monitoring.md#replication)：View the running status of each replica channel in real time, including the '
  WAL' replication status and the in-memory write status;
- [Request](monitoring.md#request)：View execution query statements in real time;
- [Log View](monitoring.md#log-view)：Real-time view of log files on each component node of the cluster;

## Meta Data Management

- [Storage](metadata.md#storage)：Management of the corresponding Storage cluster configuration;
- [Database](metadata.md#database)：Management of the corresponding database configuration;
- [Explore](metadata.md#explore)：Browse scheduling information in the cluster and the scheduling result status of each
  component node's memory;
