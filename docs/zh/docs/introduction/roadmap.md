# 路线图

以下是我们正在开发或计划开发的一些功能，更多的具体 feature 可以参考 [GitHub issues](https://github.com/lindb/lindb/issues)

## Doing 
+ 中间节点查询：计算层查询数据时，只会有根节点和叶子节点参与运算，我们计划实现该功能。


## Todo

+ HTTP 行协议：LinDB 在 InfluxDB 行协议的基础上支持了多 field 类型的定义，我们计划在 Broker 上暴露该接口。

+ 跨平台支持: 目前 LinDB 只支持在 *nix 系统下编译运行，而Windows 下的文件操作存在较多差异，测试用例无法通过，因此不能保证在 Windows 下的可用性。(低优先级）。
