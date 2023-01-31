---
home: true
heroText: null
tagline: null
---

<home-page title="What's LinDB?" :intro="['LinDB is an open-source distributed time-series database which provides high performance, high availability and horizontal scalability.', 'LinDB used to be the only monitoring solution of ELEME Inc, which stores massive time-series data across multiple IDCs.']" startLink="/guide/get-started" startText="Get Started"/>

<intro-list title="Feature List">
  <intro-item
    icon="icongaoxingneng"
    title="High performance"
    summary="A single server could easily support more than one million write TPS; With fundamental techniques like efficient compression storage and parallel computing, LinDB delivers highly optimized query performance."/>

  <intro-item
    icon="iconxitongkeyongxing"
    title="High availability"
    summary="The multi-channel replication protocol supports any amount of nodes, ensures the system availability."/>

  <intro-item
    icon="iconshenjing"
    title="Easy to use"
    summary="Schema-free multi-dimensional data model with Metric, Tags, and Fields; The LinQL is flexible yet handy for real-time data analytics."/>

  <intro-item
    icon="iconextend"
    title="Horizontal scalability"
    summary="Horizontal scalable is made simple by adding more new broker and storage nodes without too much thinking and manual operations. And the tags-based sharding strategy resolves the hotspot problem."/>

  <intro-item
    icon="iconshujuzhongxin"
    title="Cross Multiple IDCs"
    summary="LinDB is designed to work under a Multi-Active IDCs cloud architecture. The compute layer of LinDB, called brokers, supports efficient Multi-IDCs aggregation query."/>

  <intro-item
    icon="iconchucun"
    title="Auto Rollup"
    summary="LinDB supports rollup in specific intervals(minute, hour and day) automatically after creating the database(unlike the Continuous-Query of InfluxDB)."/>

</intro-list>

<lin-footer/>
