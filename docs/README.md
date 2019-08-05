---
pageClass: home-page
---

<home-page title="What's LinDB?" :intro="['LinDB is an open-source distributed time series database  which provides high performance, high availability and horizontal scalability.', 'Providing massive  time series data storage while supporting cross multiple data centers, LinDB stores all monitoring data of ELEME Inc.']" startText="Get Started"/>

<intro-list title="Feature List">
  <intro-item 
    icon="icongaoxingneng"
    title="High performance" 
    summary="One machine supports more than one million TPS, due to internal efficient compression storage and parallel computing capabilities, the query of P99 is basically below 200ms, filtering query is less than 10ms."/>

  <intro-item 
    icon="iconxitongkeyongxing"
    title="High availability" 
    summary="The multi-channel replication protocol supports any amount of nodes, auto fault tolerance of replicas, and ensures system availability."/>

  <intro-item 
    icon="iconshujuzhongxin"
    title="Easy to use" 
    summary="Support Metric + Tags + Fields, schema is free, and real time data write and query."/>

  <intro-item 
    icon="iconchucun"
    title="Auto Rollup" 
    summary="Unlike writing a lot of Continuous-Query for InfluxDB, LinDB supports rollup in specific interval automatically after creating the database."/>

  <intro-item 
    icon="iconshenjing"
    title="Cross Multiple IDCs" 
    summary="LinDB is designed to work under a Multi-Active IDCs cloud architecture. The compute layer of LinDB, called brokers, supports efficient Multi-IDCs aggregation query."/>

  <intro-item 
    icon="iconextend"
    title="Horizontal scalability" 
    summary="Tags based sharding strategy in LinDB solves the hotspots problem, and is truly horizontally expanded available by simply adding new broker and storage nodes."/>

</intro-list>

<lindb-footer/>