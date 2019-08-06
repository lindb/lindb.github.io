---
pageClass: home-page
---

<home-page title="什么是 LinDB？" :intro="['LinDB 是一款开源分布式时序数据库，具有高性能、高可用性和水平扩展性等特性。', '提供海量时序数据存储的同时支持跨多数据中心的能力，目前 LinDB 已经支撑起「饿了么」所有监控数据的存储。']" startText="快速上手"/>

<intro-list title="特色功能">
  <intro-item 
    icon="icongaoxingneng"
    title="高性能" 
    summary="单机支持百万以上TPS写入；高效的数据压缩与多节点的并行查询与计算，专注查询性能优化。"/>

  <intro-item 
    icon="iconxitongkeyongxing"
    title="高可用" 
    summary="独创的多通道复制协议支持任意节点数的多副本机制，可保证整个服务的高可用性。"/>

  <intro-item 
    icon="iconshenjing"
    title="简单易用" 
    summary="支持Metric + Tags + Fields的方式，无需提前定义Schema；可通过LinQL进行实时数据分析。"/>

  <intro-item 
    icon="iconextend"
    title="水平扩展" 
    summary="支持Tags级别的Sharding机制，可将任一Metric数据充分分散到多个存储节点，既避免了热点问题，又可通过增加服务器数量线性增加处理能力。"/>

  <intro-item 
    icon="iconshujuzhongxin"
    title="跨多数据中心" 
    summary="支持各数据中心写入，多数据中心查询聚合。"/>

  <intro-item 
    icon="iconchucun"
    title="自动Rollup" 
    summary="支持秒级数据写入后自动Rollup到分钟、小时和天的粒度，无需人工介入（如InfluxDB Continuous-Query）。"/>

</intro-list>

<lindb-footer/>