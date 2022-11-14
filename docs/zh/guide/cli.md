# CLI

LinDB Command-Line Client（以下简称 cli）是 LinDB 自带的命令行工具，用于管理查询集群内各组件状态及数据。

```sh:no-line-numbers
./lind-cli -help
```

```sh:no-line-numbers
Usage of ./lind-cli:
  -endpoint string
        Broker HTTP Endpoint (default "http://localhost:9000")
```

cli 目前只提供了一个命令行参数：Broker 节点 HTTP 服务的地址。 连接至 Broker 节点后，可通过 LQL 来查询相关状态及数据。下面举几个简单的例子，更多细节请查看 [LQL](lin-ql.md) 。

:::tip 可以通过上下方向键快速浏览历史执行中的 LQL。
:::

##### 启动 cli

```sh:no-line-numbers
./lind-cli
Welcome to the LinDB.
Server version: 0.0.1
lin@localhost:9000>
```

##### 查看数据库列表

```sh:no-line-numbers
lin@localhost:9000> show databases;
+-----------+
| Database  |
+-----------+
| _internal |
+-----------+
1 rows in sets (4.218862ms)
```

##### 查看数据库 Schema

```sh:no-line-numbers
lin@localhost:9000> show schemas;
+-----------+----------------+------------------------------------------------------------------------+
| Name      | Storage        | Desc                                                                   |
+-----------+----------------+------------------------------------------------------------------------+
| _internal | /lindb-cluster | create database _internal with shard 1, replica 1, intervals [10s->1M] |
+-----------+----------------+------------------------------------------------------------------------+
1 rows in sets (7.747045ms)
```

##### 集群状态

- 查看当前 Master 状态

```sh:no-line-numbers
lin@localhost:9000> show master;
+-------------+---------------------+
| Desc        | Value               |
+-------------+---------------------+
| Elect Time  | 2022-05-15 16:52:48 |
| Online Time | 2022-05-15 16:52:48 |
| Host IP     | 192.168.0.112       |
| Host Name   | woker0              |
| HTTP Port   | 9000                |
| GRPC Port   | 9001                |
+-------------+---------------------+
1 rows in sets (4.675873ms)
```

- 查看存活的 Broker 节点

```sh:no-line-numbers
lin@localhost:9000> show broker alive;
+---------------------+---------------+-----------+-----------------+---------+
| Online time         | Host IP       | Host Name | Port(HTTP/GRPC) | Version |
+---------------------+---------------+-----------+-----------------+---------+
| 2022-05-15 16:52:48 | 192.168.0.112 | worker0   | 9000/9001       | 0.0.1   |
+---------------------+---------------+-----------+-----------------+---------+
1 rows in sets (1.38066ms)
```

##### 查询数据库中的数据

- 切换查询数据库

```sh:no-line-numbers
lin@localhost:9000> use _internal;
Database changed(current:_internal)
```

- 查看有哪些指标名

```sh:no-line-numbers
lin@localhost:9000> show metrics;
+----------------------------------------------------+
| Metric                                             |
+----------------------------------------------------+
| lindb.broker.database.write                        |
| lindb.broker.family.write                          |
| lindb.broker.query                                 |
|                      ......                        |
| lindb.traffic.tcp                                  |
| lindb.tsdb.shard                                   |
| lindb.tsdb.shard.indexdb_flush_duration            |
| lindb.tsdb.shard.memdb_flush_duration              |
+----------------------------------------------------+
50 rows in sets (6.495605ms)
```

- 查看某个指标名下有哪些 Field

```sh:no-line-numbers
lin@localhost:9000> show fields from lindb.tsdb.shard;
+-----------------------------+-------+
| Name                        | Type  |
+-----------------------------+-------+
| write_metrics_failures      | sum   |
| active_memdbs               | gauge |
| lookup_metric_meta_failures | sum   |
| write_metrics               | sum   |
| write_batches               | sum   |
| write_fields                | sum   |
| memdb_total_size            | gauge |
| memdb_flush_failures        | sum   |
| indexdb_flush_failures      | sum   |
| active_families             | gauge |
+-----------------------------+-------+
10 rows in sets (7.448755ms)
```

- 查看某个指标名下有哪些 Tag Key

```sh:no-line-numbers
lin@localhost:9000> show tag keys from lindb.tsdb.shard;
+-----------+
| Tag Key   |
+-----------+
| db        |
| namespace |
| node      |
| role      |
| shard     |
+-----------+
5 rows in sets (7.065156ms)
```

- 查看指标名下某个 Tag Key 下有哪些 Tag Value

```sh:no-line-numbers
lin@localhost:9000> show tag values from lindb.tsdb.shard with key='db';
+-----------+
| Tag Value |
+-----------+
| _internal |
+-----------+
1 rows in sets (5.984711ms)
```

- 查看某个指标下的指标数据

```sh:no-line-numbers
lin@localhost:9000> select write_fields from lindb.tsdb.shard where time>now()-2m group by db,node;
+-----------+--------------------+---------------------+--------------+
| db        | node               | timestamp           | write_fields |
+-----------+--------------------+---------------------+--------------+
| _internal | 192.168.0.112:2891 | 2022-05-15 17:05:50 |         1061 |
| _internal | 192.168.0.112:2891 | 2022-05-15 17:06:00 |         1805 |
| _internal | 192.168.0.112:2891 | 2022-05-15 17:06:10 |         1806 |
| _internal | 192.168.0.112:2891 | 2022-05-15 17:06:20 |         1805 |
| _internal | 192.168.0.112:2891 | 2022-05-15 17:06:30 |         1805 |
| _internal | 192.168.0.112:2891 | 2022-05-15 17:06:40 |         1807 |
| _internal | 192.168.0.112:2891 | 2022-05-15 17:06:50 |         1807 |
| _internal | 192.168.0.112:2891 | 2022-05-15 17:07:00 |         1807 |
| _internal | 192.168.0.112:2891 | 2022-05-15 17:07:10 |         1805 |
| _internal | 192.168.0.112:2891 | 2022-05-15 17:07:20 |         1806 |
| _internal | 192.168.0.112:2891 | 2022-05-15 17:07:30 |         1807 |
| _internal | 192.168.0.112:2891 | 2022-05-15 17:07:40 |         1807 |
| _internal | 192.168.0.112:2891 | 2022-05-15 17:07:50 |         1811 |
+-----------+--------------------+---------------------+--------------+
1 rows in sets (8.235714ms)
```