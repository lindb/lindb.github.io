# LinQL

LinDB 为了让用户快速上手，提供类 SQL 语法 (LinQL) 来查询集群中的数据，同时也可以通过 LinQL 对集群或者数据库进行相关的操作。

本文档主要说明 LinQL 的语法规则以及常用场景 LinQL 使用技巧。

## Database

数据库相关操作

### 创建数据库

创建数据配置。

**语法规则**

```sql:no-line-numbers
create database json_config
```

**示例**

```sql:no-line-numbers
/*数据库配置信息为 JSON 格式，请注意 JSON 格式的正确性*/
create database {\"option\":{\"intervals\":[{\"interval\":\"10s\",\"retention\":\"30d\"},{\"interval\":\"5m\",\"retention\":\"3M\"},{\"interval\":\"1h\",\"retention\":\"2y\"}],\"autoCreateNS\":true,\"behead\":\"1h\",\"ahead\":\"1h\"},\"name\":\"system_monitor\",\"storage\":\"/lindb-storage\",\"numOfShard\":3,\"replicaFactor\":2}
```

### 查询数据库名

查询当前集群下所有的数据库名。

**语法规则**

```sql:no-line-numbers
show databases
```

### 查询数据库配置

查询当前集群下所有的数据库配置信息。

**语法规则**

```sql:no-line-numbers
show schemas
```

### 删除数据库

删除相应的数据配置及其存储在 Storage 集群中的数据。

**语法规则**

```sql:no-line-numbers
drop database database_name
```

## Broker

Broker 集群相关操作。

### 创建注册 Broker 集群

Broker 集群部署完成之后，需要注册到 Root 集群中才可以提供多机房/Region服务。

**语法规则**

```sql:no-line-numbers 
create broker json_config
```

**示例**

```sql:no-line-numbers
/*Broker 配置信息为 JSON 格式，请注意 JSON 格式的正确性*/
create broker {\"config\":{\"namespace\":\"/lindb-broker\",\"timeout\":10,\"dialTimeout\":10,\"leaseTTL\":10,\"endpoints\":[\"http://192.168.1.10:2379\"]}}
```

### 查询 Broker 集群

查询当前存活的 Broker 集群配置信息。

**语法规则**

```sql:no-line-numbers
show brokers
```

## Storage

Storage 集群相关操作。

### 创建注册 Storage 集群

Storage 集群部署完成之后，需要注册到 Broker 集群中才可以提供存储服务，目前 Storage 节点在启动的时候会自注册自己当前所在的 Storage 集群配置给 Broker 集群，如果自注册失败，也可以通过手动的方式注册。

**语法规则**

```sql:no-line-numbers
create storage json_config
```

**示例**

```sql:no-line-numbers
/*Storage 配置信息为 JSON 格式，请注意 JSON 格式的正确性*/
create storage {\"config\":{\"namespace\":\"/lindb-storage\",\"timeout\":10,\"dialTimeout\":10,\"leaseTTL\":10,\"endpoints\":[\"http://192.168.1.10:2379\"]}}
```

### 查询 Storage 集群

查询当前存活的 Storage 集群配置信息。

**语法规则**

```sql:no-line-numbers
show storages
```

## 数据查询

前提已经选中需要查询的数据库（使用 **USE** 或者通过 API 执行时指定了对应的数据库名。

:::tip 如果没有指定查询的 Namespace，使用默认 Namespace：`default-ns`
:::

### 指标查询

使用 **SELECT** 语句查询某个数据库中的数据。

**语法规则**

```sql:no-line-numbers
explain? 
select 
    fields|expr 
from metric (on namespace)?
(where where_condition)? 
(group by {tag_key | time_expr})?
```

**示例**

```sql:no-line-numbers
/* 查询所有服务器 CPU 的 idle 和 iowait 值 */
select idle,iowait from monitor.system.cpu_stat group by ip;

/* 查询 IP 为 192.168.1.10 这台服务器 CPU 的 idle 和 iowait 值 */
select idle,iowait from monitor.system.cpu_stat where ip="192.168.1.10";

/* 查询 IP 为 192.168 开头的所有服务器 CPU 的 idle 值 */
select idle from monitor.system.cpu_stat where ip like '192.168.*' group by ip;

/* 查询 IP 为 192.168.1.10 这台服务器 CPU 的使用率，并通过表达式转换成百分比 */
select usage * 100.0 as usage_percent from monitor.system.cpu_stat where ip="192.168.1.10";

/* 通过 SUM 函数计算最近 1 小时内订单数，计算间隔为 1 分钟，即每分钟内的订单总数*/
select sum(order) from order.system.monitoring where time>now()-1h group by time(1m);

/* 查询 SELECT 语句执行过程的统计，如找到了多少 Series、执行步骤耗时、网络通信流量等 */
explain select sum(order) from order.system.monitoring where time>now()-1h group by time(1m);
```

### 指标元数据查询

使用 **SHOW** 语句查询指标相关的元数据。

#### Namespace

查询当前数据库中的 Namespace。

**语法规则**

```sql:no-line-numbers
show namespaces (where namespace = prefix)? (limit n)?
```

**示例**

```sql:no-line-numbers
/* 查询前 100 的 Namespace，按字母排序 */
show namespaces;

/* 查询以 order 开头的前 10 个 Namespace */
show namespaces where namespace = order limit 10;
```

#### Metric

查询当前数据库中的指标名。

**语法规则**

```sql:no-line-numbers
show metrics (on namespace)? (where metric = prefix)? (limit n)?
```

**示例**

```sql:no-line-numbers
/* 查询 default-ns 下前 100 的 Metric，按字母排序 */
show metrics;

/* 查询 system namespace 下以 cpu 开头的前 10 个 metric */
show metrics on system where metric = cpu limit 10;
```

#### Field

查询当前指标下所有的字段。

**语法规则**

```sql:no-line-numbers
show fields from metric (on namespace)?
```

**示例**

```sql:no-line-numbers
/* 查询指标名为 system.cpu_stat 下所有的字段 */
show fields from system.cpu_stat;
```

#### Tag Key

查询当前指标下所有的标签键值（Tag Key）。

**语法规则**

```sql:no-line-numbers
show tag keys from metric (on namespace)?
```

**示例**

```sql:no-line-numbers
/* 查询指标名为 system.cpu_stat 下所有的 Tag Key */
show tag keys from system.cpu_stat on system;
```

#### Tag Value

查询当前指标下某个标签键值（Tag Key）下的标签值。

**语法规则**

```sql:no-line-numbers
show tag values from metric (on namespace)? with key = key_value (where tag_key=value)? (limit n)?
```

**示例**

```sql:no-line-numbers
/* 查询指标名为 system.cpu_stat 下 Tag Key 为 ip 的 Tag Value 值，默认返回前 100 */
show tag values from system.cpu_stat with key=ip;

/* 查询指标名为 system.cpu_stat 下 Tag Key 为 ip 的 Tag Value 值，同时满足以 192.168 开头，返回前 20 */
show tag values from system.cpu_stat with key=ip where ip=192.168 limit 20;
```

## 状态查询

使用 **SHOW** 语句结合状态类型查询集群相关状态信息。

### Master

查询当前 Master 信息。

**语法规则**

```sql:no-line-numbers
show master
```

### Root

查询当前集群存活的 Root 节点信息。

**语法规则**

```sql:no-line-numbers
show root alive
```

### Broker

查询当前集群存活的 Broker 节点信息。

**语法规则**

```sql:no-line-numbers
show broker alive
```

### Storage

查询当前集群存活的 Storage 集群，返回每个存活 Storage 的状态信息。

**语法规则**

```sql:no-line-numbers
show storage alive
```

### Replication

查询当前集群各副本的状态信息。

**语法规则**

```sql:no-line-numbers
/*查询各副本 WAL 的复制情况*/
show replication where storage='/lindb-cluster' and database='_internal';

/*查询各副本写入情况*/
show memory database where storage='/lindb-cluster' and database='_internal';
```

### Request

查询当前集群中正在执行的 LinQL 语句。

**语法规则**

```sql:no-line-numbers
show requests
```

### Metadata

查询当前集群协调的元数据信息，包括存储在 ETCD 中的信息，以及各状态机当前内存中的信息。

#### 类型查询

查询当前可以查询的 Metadata 类型以及它们存储的路径 (ETCD 中的 KEY)。

**语法规则**

```sql:
show metadata types
```

目前提供的 Metadata 如下，具体的 Metadata 使用及基于 Metadata 的集群调度请参考[集群协调](../design/coordinator.md)。

<table>
    <thead>
        <tr>
            <th>Role</th>
            <th>Type</th>
            <th>Path</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=3>Root</td>
            <td>DatabaseConfig</td>
            <td>/database/config</td>
            <td>逻辑数据库配置信息，每个 Root 节点需要同步所有逻辑数据库的配置</td>
        </tr>
        <tr>
            <td>LiveNode</td>
            <td>/live/nodes</td>
            <td>当前存活 Root 节点</td>
        </tr>
        <tr>
            <td>BrokerState</td>
            <td>BrokerState</td>
            <td>当前存活 Broker 集群状态</td>
        </tr>
        <tr>
            <td rowspan=3>Broker</td>
            <td>DatabaseConfig</td>
            <td>/database/config</td>
            <td>数据库配置信息，每个 Broker 节点需要同步所有数据库的配置</td>
        </tr>
        <tr>
            <td>LiveNode</td>
            <td>/live/nodes</td>
            <td>当前存活 Broker 节点</td>
        </tr>
        <tr>
            <td>StorageState</td>
            <td>/storage/state</td>
            <td>当前存活 Storage 集群状态</td>
        </tr>
        <tr>
            <td rowspan=5>Master</td>
            <td>DatabaseConfig</td>
            <td>/database/config</td>
            <td>Master 根据数据库配置信息进行 Shard 及副本分配</td>
        </tr>
        <tr>
            <td>Master</td>
            <td>/master/node</td>
            <td>当前 Master 节点</td>
        </tr>
        <tr>
            <td>ShardAssigment</td>
            <td>/database/assign</td>
            <td>数据库 Shard 及副本信息</td>
        </tr>
        <tr>
            <td>StorageConfig</td>
            <td>/storage/config</td>
            <td>Storage 集群配置信息</td>
        </tr>
        <tr>
            <td>StorageState</td>
            <td>/storage/state</td>
            <td>当前存活 Storage 集群状态</td>
        </tr>
        <tr>
            <td rowspan=2>Storage</td>
            <td>LiveNode</td>
            <td>/live/nodes</td>
            <td>当前 Storage 集群下存活的节点</td>
        </tr>
        <tr>
            <td>ShardAssigment</td>
            <td>/database/assign</td>
            <td>当前 Storage 集群下数据库 Shard 及副本信息</td>
        </tr>
    </tbody>
</table>

Metadata 存储介质如下：

- **state_repo**: 持有久存储在 ETCD 中；
- **state_machine**: 根据 ETCD 中的信息协调到对应节点的状态机内存中；

#### 数据查询

查询对应 Metadata 在相应的存储介质中的值。

**语法规则**

```sql:
show Broker|Master|Storage metadata from state_repo|state_machine where where_condition
```

**示例**

```sql:
/*示例 1: 查询 /lindb-storage Storage 集群当前存储的节点*/
show Storage metadata from state_repo where type='LiveNode' and storage='/lindb-storage';

/*示例 2: 查询 Master 状态机中数据库的配置信息*/
show Master metadata from state_machine where type='DatabaseConfig';

/*示例 3: Broker 节点应该读取到 Storage 集群的状态信息 */
show Broker metadata from state_repo where type='StorageState';

/*示例 4: Broker 节点状态机中实际的 Storage 集群的状态信息，
  可以与 *示例 3* 的结果进行对比，以查询集群协调是否正确 */
show Broker metadata from state_machine where type='StorageState';

/*示例 5: Root 节点应该读取到 Broker 集群的状态信息 */
show Root metadata from state_machine where type='BrokerState' and broker='/lindb-broker';
```

## 自监控指标

查询当前集群节点上自监控统计指标。

**语法规则**

```sql:
show Root|Broker|Storage metric where where_condition
```

**示例**

```sql:
/*查询 Root 节点的 CPU/内存使用情况*/
show root metric where metric in ('lindb.monitor.system.cpu_stat','lindb.monitor.system.mem_stat');

/*查询 Broker 节点的 CPU/内存使用情况*/
show broker metric where metric in ('lindb.monitor.system.cpu_stat','lindb.monitor.system.mem_stat');

/*查询 /lindb-storage 集群下节点磁盘使用情况*/
show storage metric where storage='/lindb-storage' and metric in ('lindb.monitor.system.disk_usage_stats';
```

## 关键字

:::tip 如果使用到了关键字作为指标名/标签/字段等命名方式，需要使用双引号。
:::

```:no-line-numbers
ALIVE          AND            AS             ASC            AVG            BETWEEN        
BROKER         BROKERS        BY             COUNT          CREATE         DATASBAE       
DATASBAES      DAY            DESC           DROP           EXPLAIN        FIELD          
FIELDS         FILL           FIRST          FOR            FROM           FUTURE_TTL     
GROUP          HAVING         HOUR           ID             IN             INFO           
INTERVAL       INTERVAL_NAME  IS             KEY            KEYS           KILL           
LAST           LIKE           LIMIT          LOG            MASTER         MAX            
MEMORY         METADATA       META_TTL       METRIC         METRICS        MIN            
MINUTE         MONTH          NAMESPACE      NAMESPACES     NODE           NOT            
NOW            NULL           ON             OR             ORDER          PASTTL         
PREVIOUS       PROFILE        QUANTILE       QUERIES        QUERY          RATE           
REPLICATION    REQUEST        REQUESTS       ROOT           SCHEMAS        SECOND         
SELECT         SET            SHARD          SHOW           STATE_MACHINE  STATE_REPO     
STATS          STDDEV         STORAGE        STORAGES       SUM            TAG            
TIME           TTL            TYPE           TYPES          UPDATE         USE            
VALUE          VALUES         WEEK           WHERE          WITH           WITH_VALUE     
YEAR           
```
