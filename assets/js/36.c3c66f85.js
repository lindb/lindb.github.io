(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{107:function(a,t,r){"use strict";r.r(t);var e=r(0),v=Object(e.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#架构"}},[a._v("#")]),a._v(" 架构")]),a._v(" "),r("h3",{attrs:{id:"计算层"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#计算层"}},[a._v("#")]),a._v(" 计算层")]),a._v(" "),r("p",[a._v("Broker，是一个无状态的服务，具有水平扩容能力。\n其中，Master 是承担特殊职责的节点，所有的 Metadata 变更均由 Master 来完成，以保证一致性，Master 可以从任一 Broker 节点中抢占式选举产生。")]),a._v(" "),r("p",[a._v("Broker 的主要职责如下：")]),a._v(" "),r("ol",[r("li",[a._v("负载均衡：由于自身无状态，可以启动多个实例，因此接入层的连接可以均匀的分摊到所有 Broker 节点上进行读写；")]),a._v(" "),r("li",[a._v("WAL复制： 由Master节点负责将相应的WAL日志复制到对应的Slave节点；")]),a._v(" "),r("li",[a._v("分布式查询：根据具体的查询情况生成不同的执行计划；")]),a._v(" "),r("li",[a._v("查询结果聚合：作为计算层聚合 Broker（中间查询）/Storage 查询返回的数据；")]),a._v(" "),r("li",[a._v("跨机房查询结果聚合：多IDC查询结果的再聚合；")])]),a._v(" "),r("h3",{attrs:{id:"存储层"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#存储层"}},[a._v("#")]),a._v(" 存储层")]),a._v(" "),r("p",[a._v("Storage， 也是一个无状态的服务，\b只存储实际的数据，不存储整个 Storage 集群的 Metadata，因此也具有水平扩展的能力。主要职责如下：")]),a._v(" "),r("ol",[r("li",[a._v("写入：存储各database下的数据及索引，以及自己的 Metadata；")]),a._v(" "),r("li",[a._v("读取：执行数据的过滤及一些简单的聚合操作(最原子的field基本类型的聚合计算)；")]),a._v(" "),r("li",[a._v("DDL：执行 Broker 下发的 Metadata 变更任务，如创建数据库，数据治理等；")]),a._v(" "),r("li",[a._v("自监控：定期上报自身服务的状态；")])]),a._v(" "),r("h3",{attrs:{id:"元信息系统层"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#元信息系统层"}},[a._v("#")]),a._v(" 元信息系统层")]),a._v(" "),r("p",[a._v("ETCD是 LinDB 的唯一外部依赖，ETCD 也是一个弱依赖，即在不可用的情况下，LinDB 集群仍然可以提供服务。")]),a._v(" "),r("p",[a._v("ETCD 主要职责如下：")]),a._v(" "),r("ol",[r("li",[a._v("元数据存储：如数据库的配置，各分片的信息，Broker/Storage 集群各节点的状态；")]),a._v(" "),r("li",[a._v("分布式调度：即所有的 Metadata 的变更都通过 ETCD 中转下发到 Storage 节点；")])]),a._v(" "),r("p",[a._v("实现弱依赖的前置条件：")]),a._v(" "),r("ol",[r("li",[a._v("当 ETCD 出问题的时候，不存在 Metadata 信息的变更，如不修改数据库的配置等；")]),a._v(" "),r("li",[a._v("集群状态是健康的，即还是可以使用当前的 Metadata/Status 来协调整个集群；")])]),a._v(" "),r("p",[a._v("一定的自修复能力：当 ETCD 中的数据完整不可用或者丢失时，Broker/Storage 可以上报 Metadata/Status 到新的 ETCD 集群以实现故障转移；")])])}),[],!1,null,null,null);t.default=v.exports}}]);