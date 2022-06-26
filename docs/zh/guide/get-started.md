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

|  组件  | Host | 配置 |
|  ----  | ----  | --- | 
| ETCD    | 192.168.1.10 <br/> 192.168.1.11 <br/> 192.168.1.12 | 默认端口 <br/> 默认配置 |
| Broker  | 192.168.1.10 <br/> 192.168.1.11 <br/> 192.168.1.12 | 默认端口 <br/> 默认配置 |
| Storage | 192.168.1.10 <br/> 192.168.1.11 <br/> 192.168.1.12 | 默认端口 <br/> 调整各节点 ID，其他使用默认配置 |

## 源码编译

适用场景：主要运行 LinDB 的日常开发，及学习 LinDB 具体代码实现。