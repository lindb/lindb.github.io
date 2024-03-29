# Metadata

Cluster metadata configuration management.

## Broker

For the `Broker` cluster that has been registered under multiple IDCs/Regions mode.
<image-window>

![broker list](@images/guide/admin_ui/broker_list.png)
</image-window>

Register `Broker` cluster.

<image-window>

![create broker](@images/guide/admin_ui/create_broker.png)
</image-window>

## Logic Database

Logic Databases in Cluster

<image-window>

![logic database list](@images/guide/admin_ui/list_logic_database.png)
</image-window>

Update or edit configuration of corresponding logic database

<image-window>

![create logic database](@images/guide/admin_ui/create_logic_database.png)
</image-window>

## Storage

For the `Storage` cluster that has been registered, each `Storage` node will do
self-registration when it's started, users doesn't need to register manually.

<image-window>

![storage list](@images/guide/admin_ui/storage_list.png)
</image-window>

When the `Storage` self-registration fails, you can perform manual registration.

<image-window>

![create storage](@images/guide/admin_ui/create_storage.png)
</image-window>

## Database

Databases in Cluster

<image-window>

![database list](@images/guide/admin_ui/database_list.png)
</image-window>

Update or edit configuration of corresponding database

<image-window>

![create database](@images/guide/admin_ui/create_database.png)
</image-window>

## Explore

Browse each configuration of current cluster in `ETCD`, click the `Compare` button to
view state machine in memory.

<image-window>

![metadata explore](@images/guide/admin_ui/metadata_explore.png)
</image-window>

Check the comparison results with the information in the memory state machine,
it's handy to check whether the information in the state
machine is inconsistent with configuration.

<image-window>

![metadata compare](@images/guide/admin_ui/metadata_explore_compare.png)
</image-window>
