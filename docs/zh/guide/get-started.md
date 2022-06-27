# 快速开始

:::tip
目前 LinDB 支持 MacOS 和 Linux，暂不支持 Windows。
:::

## Standalone

该模式把 Broker/Storage/ETCD 等组件统一集成在单进程中，以实现快速简单的部署。

适用场景：利用本地 MacOS 或者单机 Linux 环境快速部署 LinDB 测试集群，体验 LinDB 集群的基本功能。

1. 通过 [LinDB 版本发布地址](https://github.com/lindb/lindb/releases) 下载对应环境最新的版本；

2. 快速启动；

只需如下命令即可使用默认配置启动 Standalone 模式进行体验，同时也可以快速生成默认配置文件并调整对应的参数，[更多参数请参考](configuration.md#standalone)。
```sh:no-line-numbers
./lind standalone run
```

Standalone 命令行说明：
```sh:no-line-numbers
./lind standalone -h
Run as a standalone node with embed broker, storage, etcd)

Usage:
  lind standalone [command]

Available Commands:
  init-config create a new default standalone-config
  run         run as standalone mode

Flags:
  -h, --help   help for standalone

Use "lind standalone [command] --help" for more information about a command.
```

3. 通过 [http://127.0.0.1:9000](http://127.0.0.1:9000) 访问 LinDB Admin Cosnole 界面来查看整体状态等，[更多 Admin Console 请参考](admin-ui/README.md)；

4. 同时也可以通过 Lin Cli 来查询状态及集群内数据，[更多 Cli 请参考](cli.md)；

## 集群模式

该模式需要把 LinDB 各组件进行独立部署。

适用场景：主要运行于生产环境数据存储。

:::tip
以下环境以部署一个最小 LinDB 集群为例子来说明整个集群模式的部署方式，实际业务场景请根据具体的要求来选择集群节点配置及规模。

以下示例中的 IP 为示例实例 IP，请以实际 IP 为准。
:::

本示例以 3 台主机为例，每台主机上都部署 Broker/Storage/ETCD 3 个组件，主机 IP 如下：
- 192.168.1.10
- 192.168.1.11
- 192.168.1.12

组件部署顺序为 ETCD/Broker/Storage，组件信息如下：
|  组件     | 配置 |
|  ----    | --- | 
| ETCD     | 默认端口 <br/> 默认配置 |
| Broker   | 默认端口 <br/> 默认配置 |
| Storage  | 默认端口 <br/> 调整各节点 ID，其他使用默认配置 |

1. 部署 ETCD，[具体 ETCD 安装请参考](https://etcd.io/docs/v3.5/install/)。

2. 部署 Broker，相关命令行参数如下。

```sh:no-line-numbers
$ bin/lind broker
Run as a compute node with cluster mode enabled

Usage:
  lind broker [command]

Available Commands:
  init-config create a new default broker-config
  run         starts the broker

Flags:
  -h, --help   help for broker

Use "lind broker [command] --help" for more information about a command.
```

- [下载默认配置文件](https://github.com/lindb/lindb/blob/main/config/broker.toml.example)，或者通过下面命令生成默认配置文件。

```sh:no-line-numbers
$ lind broker init-config
```

- 修改配置参数，主要修改 ETCD 地址，其他可以使用默认配置，也可以根据实际场景进行修改。

```toml:no-line-numbers
[coordinator]
## ETCD 注册 namespace
namespace = "/lindb-broker"
## ETCD 地址
endpoints = ["http://192.168.1.10:2379","http://192.168.1.11:2379","http://192.168.1.12:2379"]
.......
```

- 启动 Broker。

```sh:no-line-numbers
$ lind broker run --config=broker.toml
```

:::tip
通常情况下，需要在 Broker 前面放一个 VIP 或者 LB 来提供统一的入口地址。
:::
  
3. 部署 Storage，相关命令行参数如下。

```sh:no-line-numbers
$ bin/lind storage
Run as a storage node with cluster mode enabled

Usage:
  lind storage [command]

Available Commands:
  init-config create a new default storage-config
  run         starts the storage

Flags:
  -h, --help   help for storage

Use "lind storage [command] --help" for more information about a command.
```

- [下载默认配置文件](https://github.com/lindb/lindb/blob/main/config/storage.toml.example)，或者通过下面命令生成默认配置文件。

```sh:no-line-numbers
$ lind storage init-config
```

- 修改配置参数，主要修改 ETCD 地址及 Storage 节点 ID，其他可以使用默认配置，也可以根据实际场景进行修改。

```toml:no-line-numbers
[storage]
## Storage 节点集群内唯一标识，必须确保其在当前存储集群内是唯一的
indicator = 1
## broker 地址，用于自注册 storage 集群信息
broker-endpoint = "http://192.168.1.10:9000"
.......
[coordinator]
## ETCD 注册 namespace
namespace = "/lindb-storage"
## ETCD 地址
endpoints = ["http://192.168.1.10:2379","http://192.168.1.11:2379","http://192.168.1.12:2379"]
.......
## 自监控相关配置参数
[monitor]
## 监控指标上报地址(Broker写入地址)
url = "http://192.168.1.19:9000/api/flat/write?db=_internal"
```

- 启动 Storage。

```sh:no-line-numbers
$ lind storage run --config=storage.toml
```

4. 通过任意一台 Broker 节点地址 [http://192.168.1.10:9000](http://127.0.0.1:9000) 访问 LinDB Admin Cosnole 界面来查看整体状态等，[更多 Admin Console 请参考](admin-ui/README.md)；

5. 同时也可以通过 Lin Cli 来查询状态及集群内数据，[更多 Cli 请参考](cli.md)；

## 源码编译

适用场景：主要运行 LinDB 的日常开发，及学习 LinDB 具体代码实现。

1. [下载最新的代码包](https://codeload.github.com/lindb/lindb/zip/refs/heads/main)并解压，或者通过下面的命令克隆最新代码。

```sh:no-line-numbers
git clone https://github.com/lindb/lindb.git
```

2. 进入代码根目录。

```sh:no-line-numbers
cd lindb
```

3. 运行编译脚本。

```sh:no-line-numbers
make build
```
编译生成的二进制包在 `bin` 目录下。

4. 在 `bin` 下测试对应环境的 `lind`。

```sh:no-line-numbers
❯ bin/lind-darwin

██╗     ██╗███╗   ██╗██████╗ ██████╗
██║     ██║████╗  ██║██╔══██╗██╔══██╗
██║     ██║██╔██╗ ██║██║  ██║██████╔╝
██║     ██║██║╚██╗██║██║  ██║██╔══██╗
███████╗██║██║ ╚████║██████╔╝██████╔╝
╚══════╝╚═╝╚═╝  ╚═══╝╚═════╝ ╚═════╝

LinDB is a scalable, high performance, high availability, distributed time series database.
Complete documentation is available at https://lindb.io

Usage:
  lind [command]

Available Commands:
  broker      Run as a compute node with cluster mode enabled
  completion  Generate the autocompletion script for the specified shell
  help        Help about any command
  standalone  Run as a standalone node with embed broker, storage, etcd)
  storage     Run as a storage node with cluster mode enabled
  version     Print the version

Flags:
  -h, --help   help for lind

Use "lind [command] --help" for more information about a command.
```

5. 可以通过编译出来的二进制包进行部署 [Standalone](#standalone) 和 [集群模式](#集群模式)。
