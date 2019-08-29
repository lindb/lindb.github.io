# 贡献指南

## 项目结构

整个项目使用 Go 实现，所以遵循了一般 Go 项目的规则，下面是整个项目结构的简单说明：

```
.
├─ aggregation    : 数据聚合，函数及表达式计算
├─ bin            : 编译生成的文件，二进制包名称为 `lind`
├─ broker         : Broker 内部实现及整个 Broker 的运行时依赖
├─ ci             : 一些 CI 工具及protobuf脚本
├─ cmd            : 整个系统的入口，包括 Broker, Stroage 及 Standalone
├─ config         : 各组件启动时需要的配置项
├─ constants      : 一些通用的常量定义
├─ coordinator    : 分布式的协调者，包括 Metadata, State 及 Task 的管理，包含了 Broker, Storage 及 Master 等
├─ kv             : 底层的通用 KV 存储
├─ mock           : 项目所用到的一些 Mock 工具实现
├─ models         : 整个项目的 Model 定义
├─ parallel       : 分布式查询计算的 Job 及 Task 的管理
├─ pkg            : 整个项目通用函数的实现
├─ query          : 查询执行逻辑，包括 Broker 和 Storage 的查询
├─ replication    : WAL 复制逻辑
├─ rpc            : 内部通信的 RPC 
├─ service        : 内部通用服务的实现
├─ sql            : SQL 解析
├─ standalone     : 单机模式运行时依赖
├─ storage        : Storage 内部实现及整个 Storage 的运行时依赖 
├─ tsdb           : 整个 Time Series 存储引擎 
│  ├─ indexdb     : 索引数据库
│  ├─ memdb       : Time Series 内存数据库
│  ├─ tblstore    : tsdb与 KV 存储的读写交互，包括索引文件与数据文件
│  └─ series      : 基于 Bitmap 的多版本和series接口
├─ vendor         : Go vender
└─ web            : 前端项目
```
