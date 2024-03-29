# 项目结构

整个项目使用 Go 实现，所以遵循了一般 Go 项目的规则，下面是整个项目结构的简单说明：

```md:no-line-numbers
├── aggregation           : 数据聚合，函数及表达式计算
├── app                   : broker、storage、standalone、cli 等runtime
│   ├── broker            : Broker 内部实现及整个 Broker 的运行时依赖
│   ├── standalone        : 单机模式运行时依赖
│   └── storage           : storage 内部实现与 运行时依赖
├── bin                   : 编译生成的文件，二进制包名称为 `lind`
├── cmd                   : main 函数
│   ├── cli               : 交互式命令行
│   ├── lind              : lind 二进制包
│   └── tools             : 命令行工具 
├── config                : 各组件启动时需要的配置项
├── constants             : 一些通用的常量定义
├── coordinator           : 分布式的协调者，包括 Metadata, State 及 Task 的管理，包含了 Broker, Storage 及 Master 等
├── docker                : docker image 构建
├── e2e                   : 集成和性能测试用例
├── flow                  : 数据查询流程接口
├── ingestion             : metric数据摄取入口
│   ├── common            : gzip handler、行解析等通用工具
│   ├── flat              : 原生格式接收器
│   ├── influx            : influxdb 数据转换到linmetric
│   └── proto             : PB 数据接收器 
├── internal              : 内部的一些工具包
│   ├── bootstrap         : 启动时初始化_internal数据库的方法
│   ├── client            : 访问Broker API Client
│   ├── concurrent        : 并发goroutine池
│   ├── conntrack         : grpc 与 tcp conn埋点钩子
│   ├── linmetric         : lindb自带的内部多值类型的sdk打点工具
│   |── mock              : 项目所用到的一些 Mock 工具实现
|   ├── monitoring        : 自带的系统层监控采集与native metrics pusher
│   └── server            : app 通用接口
├── kv                    : 底层的通用 KV 存储
├── metrics               : 所有监控指标定义
├── models                : 整个项目的 Model 定义
├── pkg                   : 整个项目通用工具包
│   ├── bit               : 位读写 │   ├── bufioutil         : 缓冲io工具包
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
│   |── trie              : 紧凑型的trie树，用于string->int的存储
│   |── unique            : 全局唯一ID存储
│   └── validate          : 对 struct 进行校验的工具包
├── proto                 : protobuf
│   ├── gen               : protobuf 生成的golang code
│   ├── opentelemetry-v1  : open telemetry的protobuf文件，暂未利用
│   └── v1                : lindb内的proto buf 文件
├── query                 : 分布式的数据与元数据查询
│   ├── broker            : 计算节点的数据查询与聚合
│   ├── context           : 查询上下文
│   ├── operator          : 查询算子
│   ├── stage             : 查询 Stage
│   └── tracker           : 跟踪整个查询过程
├── replica               : broker数据写入以及storage层的复制
├── rpc                   : 内部通信的 RPC 
├── series                : 时间线迭代器、聚合器
│   ├── field             : field数据结构与聚合器
│   ├── metric            : metric校验与histogram工具类
│   └── tag               : tag数据结构
├── sql                   : SQL 解析
│   ├── grammar           : antlr4生成的语法解析器
│   └── stmt              : SQL statement 
├── tsdb                  : 整个 Time Series 存储引擎 
│   ├── indexdb           : 索引存储
│   ├── memdb             : LSM 树的内存数据库
│   ├── metadb            : metric 元数据
│   ├── tblstore          : tsdb与 KV 存储的读写交互，包括索引文件与数据文件
│   └── template          : 利用模板生成一些通用的代码
└── web                   : lindb admin页面的前端项目

```
