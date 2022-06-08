# 安装部署

:::tip
目前 LinDB 支持 MacOS 和 Linux，暂不支持 Windows。
:::

## Standalone

该模式把 Broker/Storage/ETCD 等组件统一集成在单进程中，以实现快速简单的部署。

适用场景：利用本地 MacOS 或者单机 Linux 环境快速部署 LinDB 测试集群，体验 LinDB 集群的基本功能。

1. 下载 
    TODO
2. 快速启动
只需如下命令即可使用默认配置启动 Standalone 模式进行体验，同时也可以快速生成默认配置文件并调整对应的参数，[更多参数请参考](configuration.md#standalone)。
```sh:no-line-numbers
./lind-darwin standalone run
```
```sh:no-line-numbers
TODO
```
3. 通过 [http://127.0.0.1:9000](http://127.0.0.1:9000) 访问 LinDB Admin Cosnole 界面。


## Cluster

## 源码编译