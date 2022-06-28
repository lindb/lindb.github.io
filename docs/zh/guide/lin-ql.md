# LinQL 

LinDB 为了让用户快速上手，提供类 SQL 语法 (LinQL) 来查询集群中的数据，同时也可以通过 LinQL 对集群或者数据库进行相关的操作。

本文档主要说明 LinQL 相关的语法规则以及常用场景 LinQL 使用技巧。

## Database

//TODO

## 数据查询

前提已经选中需要查询的数据库（使用 **USE** 或者通过 API 执行时指定了对应的数据库名。

:::tip
如果没有指定查询的 Namespace，使用默认 Namespace：`default-ns`
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

/* 通过 SUM 函数计算最近 1 小时内订数，计算间隔为 1 分钟，即每分钟内的订单总数*/
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

//TODO