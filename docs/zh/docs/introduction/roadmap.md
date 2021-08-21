# 路线图

以下是我们正在开发或计划开发的一些功能，更多的具体 feature 可以参考 [GitHub issues](https://github.com/lindb/lindb/issues)


## 已完成
+ 中间节点查询：计算层查询数据时，除根节点和叶子节点参与运算，引入中间节点进行联合计算；

## 进行中 
+ 无状态broker： WAL 下沉到 storage节点；
+ 索引过期清理；
+ Prom Agent：prometheus 采集层、并支持转换数据到 lindb；

## Todo

+ 跨平台支持: 目前 LinDB 只支持在 *nix 系统下编译运行，而Windows 下的文件操作存在较多差异，测试用例无法通过，因此不能保证在 Windows 下的可用性。(低优先级）。
