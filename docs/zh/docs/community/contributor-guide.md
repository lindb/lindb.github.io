# 贡献指南

## 项目结构

整个项目使用 Go 实现，所以遵循了一般 Go 项目的规则，下面是整个项目结构的简单说明：

```
├── aggregation           : 数据聚合，函数及表达式计算
├── app                   : broker、storage、standalone、cli 等runtime
│   ├── broker            : Broker 内部实现及整个 Broker 的运行时依赖
│   ├── cli               : 交互式命令行
│   ├── standalone        : 单机模式运行时依赖
│   └── storage           : storage 内部实现与 运行时依赖
├── bin                   : 编译生成的文件，二进制包名称为 `lind`
├── cmd                   : main 函数
│   └── lind              : lind 二进制包
├── config                : 各组件启动时需要的配置项
├── constants             : 一些通用的常量定义
├── coordinator           : 分布式的协调者，包括 Metadata, State 及 Task 的管理，包含了 Broker, Storage 及 Master 等
├── flow                  : 数据查询流程接口
├── ingestion             : metric数据摄取入口
│   ├── common            : gzip handler、行解析等通用工具
│   ├── influx            : influxdb 数据转换到linmetric
│   ├── native            : lindb 原生的http接收器
│   └── prometheus        : prometheus 数据解析转换
├── internal              : 内部的一些工具包
│   ├── bootstrap         : 启动时初始化_internal数据库的方法
│   ├── concurrent        : 并发goroutine池
│   ├── conntrack         : grpc 与 tcp conn埋点钩子
│   ├── server            : app 通用接口
│   ├── linmetric         : lindb自带的内部多值类型的sdk打点工具
│   └── mock              : 项目所用到的一些 Mock 工具实现
├── kv                    : 底层的通用 KV 存储
├── models                : 整个项目的 Model 定义
├── monitoring            : 自带的系统层监控采集与native metrics pusher
├── pkg                   : 整个项目通用工具包
│   ├── bit               : 位读写
│   ├── bufioutil         : 缓冲io工具包
│   ├── bufpool           : 存放buffer的sync pool
│   ├── collections       : float array、bit array 等数据结构
│   ├── encoding          : delta-bit-packing、zigzag 等编码工具包
│   ├── fasttime          : 毫秒级的时间，避免频繁的系统调用
│   ├── fileutil          : 常用的文件操作
│   ├── hostutil          : 获取机器状态的包
│   ├── http              : gin http server的通用方法
│   ├── lockers           : 文件锁
│   ├── logger            : zap logger
│   ├── ltoml             : toml文件解析与类型
│   ├── option            : shard 配置选项
│   ├── queue             : 持久化队列
│   ├── state             : etcd 操作工包
│   ├── stream            : 文件读取工具包
│   ├── strutil           : 字符串工具包
│   ├── timeutil          : 时间处理工具包
│   └── trie              : 紧凑型的trie树，用于倒排索引
├── proto                 : protobuf
│   ├── gen               : protobuf 生成的golang code
│   ├── opentelemetry-v1  : open telemetry的protobuf文件，暂未利用
│   └── v1                : lindb内的proto buf 文件
├── query                 : 分布式的数据与元数据查询
│   ├── broker            : 计算节点的数据查询与聚合
│   └── storage           : 存储节点的数据查询与聚合
├── replica               : storage层的复制
├── replication           : broker层的复制
├── rpc                   : 内部通信的 RPC 
├── series                : 时间线迭代器、聚合器
│   ├── field             : field数据结构与聚合器
│   ├── metric            : metric校验与histogram工具类
│   └── tag               : tag数据结构
├── sql                   : SQL 解析
│   ├── grammar           : antlr4生成的语法解析器
│   └── stmt              : SQL statement 
├── tsdb                  : 整个 Time Series 存储引擎 
│   ├── cumulativecache   : 简单的cumulative型数据到lindb delta数值的转换缓存
│   ├── indexdb           : 索引存储
│   ├── memdb             : LSM 树的内存数据库
│   ├── metadb            : metric 元数据
│   ├── query             : tsdb层的查询上下文对象
│   ├── tblstore          : tsdb与 KV 存储的读写交互，包括索引文件与数据文件
│   ├── template          : 利用模板生成一些通用的代码
│   └── wal               : Write Ahead Log
└── web                   : lindb admin页面的前端项目

```
