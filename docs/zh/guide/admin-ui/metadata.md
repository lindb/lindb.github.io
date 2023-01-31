# Metadata

当前集群元数据配置管理。

## Broker

在多机房/Region模式下，当前集群下已经注册的`Broker`集群。

<image-window>

![broker list](@images/guide/admin_ui/broker_list.png)
</image-window>

注册相应的`Broker`配置信息。

<image-window>

![create broker](@images/guide/admin_ui/create_broker.png)
</image-window>

## Logic Database

当前集群下逻辑数据库列表。

<image-window>

![logic database list](@images/guide/admin_ui/list_logic_database.png)
</image-window>

创新或者修改对应逻辑数据库配置信息。

<image-window>

![create logic database](@images/guide/admin_ui/create_logic_database.png)
</image-window>

## Storage

当前集群下已经注册的`Storage`集群，每个`Storage`在启动的时候会完成自注册，正常情况不需要用户手动进行注册。

<image-window>

![storage list](@images/guide/admin_ui/storage_list.png)
</image-window>

当`Storage`自注册失败时，可以通过手动方式注册相应的`Storage`配置信息。

<image-window>

![create storage](@images/guide/admin_ui/create_storage.png)
</image-window>

## Database

当前集群下数据库列表。

<image-window>

![database list](@images/guide/admin_ui/database_list.png)
</image-window>

创新或者修改对应数据库配置信息。

<image-window>

![create database](@images/guide/admin_ui/create_database.png)
</image-window>

## Explore

浏览当前集群`ETCD`中的各类型的配置信息，可以通过`Compare`按钮来对应内存中各状态机中的信息。

<image-window>

![metadata explore](@images/guide/admin_ui/metadata_explore.png)
</image-window>

查看与内存状态机中信息的对比结果，是否存在状态机中的信息与配置不一致情况。

<image-window>

![metadata compare](@images/guide/admin_ui/metadata_explore_compare.png)
</image-window>
