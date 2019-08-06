---
pageClass: home-page
---

<home-page title="What's LinDB?" :intro="['LinDB is an open-source distributed time series database which provides high performance, high availability and horizontal scalability.', 'LinDB stores all monitoring data of ELEME Inc, providing massive time series data storage and the capability of cross-IDCs.']" startText="Get Started"/>

<intro-list title="Feature List">
  <intro-item 
    icon="icongaoxingneng"
    title="High performance" 
    summary="Singal server supports more than one million TPS; As the internal efficient compression storage and parallel computing capabilities, LinDB is focusing on the query performance optimization."/>

  <intro-item 
    icon="iconxitongkeyongxing"
    title="High availability" 
    summary="The multi-channel replication protocol supports any amount of nodes, ensures the system availability."/>

  <intro-item 
    icon="iconshenjing"
    title="Easy to use" 
    summary="LinDB supports Metric + Tags + Fields, and is schema-free; The LinQL is handy for realtime data analytics."/>

  <intro-item 
    icon="iconextend"
    title="Horizontal scalability" 
    summary="Tags based sharding strategy in LinDB solves the hotspots problem, and is truly horizontally expanded available by simply adding new broker and storage nodes."/>

  <intro-item 
    icon="iconshujuzhongxin"
    title="Cross Multiple IDCs" 
    summary="LinDB is designed to work under a Multi-Active IDCs cloud architecture. The compute layer of LinDB, called brokers, supports efficient Multi-IDCs aggregation query."/>

  <intro-item 
    icon="iconchucun"
    title="Auto Rollup" 
    summary="LinDB supports rollup in specific interval(minute, hour and day) automatically after creating the database(unlike the Continuous-Query of InfluxDB)."/>

</intro-list>

<lindb-footer/>