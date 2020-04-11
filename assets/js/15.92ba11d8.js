(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{105:function(e,t,r){"use strict";r.r(t);var i=r(0),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"内存数据库"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#内存数据库"}},[e._v("#")]),e._v(" 内存数据库")]),e._v(" "),i("h2",{attrs:{id:"内存结构"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#内存结构"}},[e._v("#")]),e._v(" 内存结构")]),e._v(" "),i("p",[i("img",{attrs:{src:r(70),alt:"memory overview"}})]),e._v(" "),i("p",[e._v("整个内存结构更像是一个内存时序存储，主要包括如下 2 大块组成:")]),e._v(" "),i("ol",[i("li",[e._v("Metric Meta/Index: 主要存储了 Metric Metadata 和 Tags 的倒排索引\n"),i("ul",[i("li",[e._v("Metric Metadata: 存储该 Metric 下面对应有哪些 Field 和 哪些 Tag Keys，同时为每个 Tag Key 生成一个数据库级别的全局唯一的 ID，方便 Tag Index 在底层 KV Store 中的存储")]),e._v(" "),i("li",[e._v("Metric Index: 主要是为每个 Metric Tag Key 下面的 Tag Values 做一个倒排索引，Term 是对应的 Tag Value, Posting List 为该 Metric 下对应的 Series ID")]),e._v(" "),i("li",[e._v("Hash(Tags) => Series ID: 通过 Tags Hash Code 计算相应的 Series ID 是否已经存在")]),e._v(" "),i("li",[e._v("Series Sequence ID: 为 Metric 级别的 Series ID 生成器，为自增类型，这样所以生成的 Series ID 都是有序的 ID , 更容易做索引及存储")])])]),e._v(" "),i("li",[e._v("Metric Store: 主要存储了 Metric 下面的数据，即该 Metric 下面的所有对应 Series 的每个 Field 的数据\n"),i("ul",[i("li",[e._v("Field List(Field Store): 根据不同的 Field Type 存储该 Field 的实际数据")])])])]),e._v(" "),i("p",[e._v("整个内存结构中维护了上面 2 个数据结构的 2 个映射关系。")]),e._v(" "),i("h2",{attrs:{id:"series-id-的唯一性"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#series-id-的唯一性"}},[e._v("#")]),e._v(" Series ID 的唯一性")]),e._v(" "),i("p",[e._v("部分设计考虑了 OpenTSDB String => Int 的思路，考虑到时序数据的特点， Metric Name + Tags 这部分占用存储大头的数据存储在 Index 中： Filtering/Grouping 等操作将基于这部分数据来进行，实际存储数据时只存储到Series ID。")]),e._v(" "),i("p",[e._v("Metric下的每一条Series线的唯一性通过tags来确定：对于tags(ip=1.1.1.1, host=test.vm, zone=nt)，先根据tagKey作排序，得到host=test.vm,ip=1.1.1.1,zone=nt。如果原始存储tags文本到Series ID的映射关系，会浪费过多的存储空间。权衡效率后，LinDB 通过对tags计算hash来记录Series，关于碰撞机率可参考 "),i("a",{attrs:{href:"https://www.johndcook.com/blog/2017/01/10/probability-of-secure-hash-collisions/",target:"_blank",rel:"noopener noreferrer"}},[e._v("生日碰撞"),i("OutboundLink")],1)]),e._v(" "),i("p",[e._v("一般化的哈希碰撞机率公式如下：")]),e._v(" "),i("p",[i("img",{attrs:{src:"https://www.wangbase.com/blogimg/asset/201809/bg2018090508.png",alt:"哈希碰撞机率公式"}})]),e._v(" "),i("p",[e._v("通过以上公式，计算得64位hash在不同的tags组合数下的碰撞概率见下表。其中d为取值空间，n为数据集规模。\n在监控领域下，Metric下tags的组合数极少能达到1M量级，即使在该量级碰撞机率也极低。")]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",[e._v("Tags组合数量")]),e._v(" "),i("th",[e._v("至少有2条Series出现碰撞的机率")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("100K")]),e._v(" "),i("td",[e._v("0.000000000271")])]),e._v(" "),i("tr",[i("td",[e._v("1M")]),e._v(" "),i("td",[e._v("0.0000000271")])]),e._v(" "),i("tr",[i("td",[e._v("10M")]),e._v(" "),i("td",[e._v("0.00000271")])]),e._v(" "),i("tr",[i("td",[e._v("100M")]),e._v(" "),i("td",[e._v("0.000271")])]),e._v(" "),i("tr",[i("td",[e._v("1G")]),e._v(" "),i("td",[e._v("0.0271")])])])]),e._v(" "),i("h2",{attrs:{id:"写"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#写"}},[e._v("#")]),e._v(" 写")]),e._v(" "),i("p",[e._v("整个写入流程如下:")]),e._v(" "),i("ol",[i("li",[e._v("首先通过 Hash(Metric Name) 查询是否存在对应的 Metric Index\n"),i("ul",[i("li",[e._v("存在: 使用 Metric Index 中的数据，找到对应的 Field ID 和 Series ID，如果没有对应的 Field ID 和 Series ID 的话先生成对应的 ID，直接返回，异步的对 Tags 来构建一个倒排索引，以做到构建索引和写数据可以并行处理来提升写入性能")]),e._v(" "),i("li",[e._v("不存在: 这种情况为一个新的 Metric, 返回对应的 ID，异步构建 Index")]),e._v(" "),i("li",[e._v("Index 使用 Roaring Bitmap 为存储 Series ID Posting List")])])]),e._v(" "),i("li",[e._v("拿到 Metric ID/Series ID 之后，就可以操作 Metric Store 了，找到对应的 Field Store 写入即可")])]),e._v(" "),i("p",[e._v("这里需要注意的地方有，如果直接使用 Map 来存储 Metric Store 里面的 Map 的话内存的开销还是比较大的，因为本身已经都转换成了 Int，所以这里可以使用 Roaring Bitmap + Array 的数据结构来构建一个 Map 结构，在 Roaring Bitmap 中存储所有 Keys 的值，Key 在 Roaring Bitmap 中的位置就是 Array 的 Index，所以读取的效率也可以保证，同时可以与倒排索引里面的 Roaring Bitmap 保持一致。")]),e._v(" "),i("p",[e._v("深入 Roaring Bitmap 之后发现 Roaring Bitmap 内部是以 High Container + Low Container 的方式存储的，所以 Roaring Bitmap + Array 也可以使用这个思想来对进一步优化 Map 结构，即使用 Roaring Bitmap + []Array 的结构，Key 的高位使用 Roaring Bitmap 的 High Container 来存储，Key 的低位用 Low Container 来存储，Key 的高位对应一个 Array，整体就是一个 2 维数组。这样就可以通过 Key 的高位来进行并行查询操作。")]),e._v(" "),i("h2",{attrs:{id:"flush"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#flush"}},[e._v("#")]),e._v(" Flush")]),e._v(" "),i("p",[e._v("系统会定期检测当前系统中每个 Memory TSDB 是否已经超过了内存大，如果满足下面条件中的任何一种，都需要把内存中的数据 Flush 到磁盘上：")]),e._v(" "),i("ol",[i("li",[e._v("单个 Memory TSDB 的内存占用超过指定大小")]),e._v(" "),i("li",[e._v("该个 Memory TSDB 距离上次 Flush 时间超过了一定的大小")]),e._v(" "),i("li",[e._v("该 LinDB 实例总内存占用超过一定大小之后，Flush 哪些占用内存比较大的 Memory TSDB，以防止该实例 OOM")])]),e._v(" "),i("p",[e._v("文件结构请看 "),i("router-link",{attrs:{to:"/zh/docs/design/storage.html#sstable"}},[e._v("Storage SSTable")]),e._v("。")],1)])}),[],!1,null,null,null);t.default=a.exports},70:function(e,t,r){e.exports=r.p+"assets/img/memory_overview.43634ca2.png"}}]);