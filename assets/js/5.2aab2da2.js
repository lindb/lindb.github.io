(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{108:function(e,t,a){"use strict";a.r(t);var s=a(0),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"存储"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#存储"}},[e._v("#")]),e._v(" 存储")]),e._v(" "),s("p",[e._v("LinDB 所有的数据都会存储在本地磁盘上，根据不同的数据类型有不同的存储结构：")]),e._v(" "),s("ul",[s("li",[e._v("Metirc Metadata: 存储 Metric Name 及其下面的 Fields")]),e._v(" "),s("li",[e._v("Tags: 存储一个 Metric 下面所有的 Tags，这部分分为 2 种数据类型\n"),s("ul",[s("li",[e._v("正向：Series ID 对应的 Tags")]),e._v(" "),s("li",[e._v("反向：存储 Tag Key/Value 的倒排索引，即每个 Tag Value 下面有哪些 Series ID，Series ID 使用 "),s("a",{attrs:{href:"http://roaringbitmap.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("RoaringBitMap"),s("OutboundLink")],1),e._v(" 来存储")])])]),e._v(" "),s("li",[e._v("Data: 所有 Time Series 下 Data Point 的存储")])]),e._v(" "),s("p",[e._v("以上所有的数据类型都存储在底层一个通用的 KV Store 里面。")]),e._v(" "),s("h2",{attrs:{id:"时序特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#时序特性"}},[e._v("#")]),e._v(" 时序特性")]),e._v(" "),s("p",[e._v("在讲存储之前，首先来讲一下时序的特性，如图：")]),e._v(" "),s("p",[s("img",{attrs:{src:a(74),alt:"time series characteristic"}})]),e._v(" "),s("p",[e._v("时序数据特性（根据其时间特性可以分为不随时间变化和随时间变化的数据）")]),e._v(" "),s("ol",[s("li",[e._v("Time Series => Metric + Tags：这部分数据基本都是字符串，而且该数据占数据包的大头，但是不会随时间变化而变化，\n尽量把字符串变换成数值来存储，以降低存储成本")]),e._v(" "),s("li",[e._v("Fields：这部分数据基本都是数值，并且随着时间变化而变化，但是数值类型容易做压缩")])]),e._v(" "),s("h2",{attrs:{id:"存储结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#存储结构"}},[e._v("#")]),e._v(" 存储结构")]),e._v(" "),s("h3",{attrs:{id:"database"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#database"}},[e._v("#")]),e._v(" Database")]),e._v(" "),s("p",[s("img",{attrs:{src:a(75),alt:"storage database"}})]),e._v(" "),s("ul",[s("li",[e._v("一个数据库的数据按 Shard 分散在 Storage 集群的不同节点上")]),e._v(" "),s("li",[e._v("一个 Shard 可以有多个副本")])]),e._v(" "),s("h3",{attrs:{id:"shard"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shard"}},[e._v("#")]),e._v(" Shard")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("├─ db_test_1\n|  ├─ index\n|  |  ├─ metric_meta\n|  |  ├─ metric_ids\n|  |  ├─ inverted_1\n|  |  ├─ forward_1\n|  |  ├─ inverted_2\n|  |  └─ forward_2\n|  └─ shard\n|     ├─ 1\n|     |  └─ segment\n|     |     ├─ day\n|     |     |  ├─ 20190101\n|     |     |  |  ├─ 01\n|     |     |  |  ├─ 02\n|     |     |  |  └─ 23\n|     |     |  └─ 20190102\n|     |     ├─ month\n|     |     |  ├─ 201901\n|     |     |  |  ├─ 01\n|     |     |  |  ├─ 02\n|     |     |  |  └─ 31\n|     |     |  └─ 201902\n|     |     └─ year\n|     |        ├─ 2019\n|     |        |  ├─ 01\n|     |        |  ├─ 02\n|     |        |  └─ 12\n|     |        └─ 2020\n|     └─ 2\n└─ db_test_2\n")])])]),s("p",[e._v("如上是数据在一台 Storage 节点上面的存储目录结构，以单个数据库在单节点上的数据结构为例：")]),e._v(" "),s("ul",[s("li",[e._v("index: 存储所有的 metadata 和 index\n"),s("ul",[s("li",[e._v("metadata: 是数据库级别的，即所有的 shard 共享这些数据")]),e._v(" "),s("li",[e._v("index: 每个 Shard 都会有自己的 forward 和 inverted 数据")])])]),e._v(" "),s("li",[e._v("shard: 一个数据库在单节点上会存在多个 shard")])]),e._v(" "),s("p",[e._v("所有的数据根据数据库的 Interval 来计算按时间片来存储具体的数据")]),e._v(" "),s("ol",[s("li",[e._v("这样的设计主要为了方便处理 TTL，数据如果过期，直接删除相应的目录即可")]),e._v(" "),s("li",[e._v("每个 shard 下面会存在多个 segment，每个 segment 根据对应 interval 来存储相应时间片的数据")]),e._v(" "),s("li",[e._v("为什么每个 segment 下面又按 interval 存储很多个 data family？这个主要因为 LinDB 主要解决的问题是存储海量的监控数据，一般的监控数据基本是最新时间写入，基本不会写历史数据，而整个 LinDB 的数据存储类似 LSM 方式，所以为了减少数据文件之间的合并操作，导致写放大,所以最终衡量下来，再对 segment 时间片进行分片。")])]),e._v(" "),s("p",[e._v("下面以 interval 为 10s 为例说明:")]),e._v(" "),s("ol",[s("li",[e._v("segment 按天来存储")]),e._v(" "),s("li",[e._v("每个 segment 按小时来分 data family，每个小时一个 family，每个 family 中的文件再按列存储具体的数据")])]),e._v(" "),s("h2",{attrs:{id:"kv-store"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kv-store"}},[e._v("#")]),e._v(" KV Store")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("└─ kv_store_1\n   ├─ CURRENT\n   ├─ LOCK\n   ├─ MANIFEST-000010\n   ├─ OPTIONS\n   ├─ family_1\n   |  ├─ 000001.sst\n   |  ├─ 000002.sst\n   |  ├─ 000004.sst\n   |  └─ 000008.sst\n   ├─ family_2\n   |  ├─ 000011.sst\n   |  ├─ 000012.sst\n   |  ├─ 000014.sst\n   |  └─ 000018.sst\n   └─ family_3\n")])])]),s("p",[e._v("整个 KV Store 类似 LSM，但是又有别于 LSM，主要的区别如下：")]),e._v(" "),s("ul",[s("li",[e._v("没有 Memory Table, 因为整个系统会有一个 Memory Database 来存储当前一段时间的所有数据，包括 index 和 data, 这些数据会直接写文件到 KV Store 中")]),e._v(" "),s("li",[e._v("Key 都是 uint32, 因为根据时序特性会把所有的 string 转换成 uint32，所以底层的 KV Store 直接设计成 uint32 => binary")])]),e._v(" "),s("p",[e._v("整个目录跟 rocksdb 很像，支持 family。")]),e._v(" "),s("ul",[s("li",[e._v("CURRENT: 记录当前有效的 MANIFEST 文件")]),e._v(" "),s("li",[e._v("LOCK: 文件锁，防止多进程打开同一个 KV Store")]),e._v(" "),s("li",[e._v("MANIFEST: 所有 sstable 变更的 change log，包括一些 sequence 的 change log 等")]),e._v(" "),s("li",[e._v("OPTIONS: KV Store 配置信息，包括每个 family 级别的配置信息")]),e._v(" "),s("li",[e._v("KV Store 下可以存储多个 family，每个 family 下面存储多个 sstable 文件")])]),e._v(" "),s("h3",{attrs:{id:"compaction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compaction"}},[e._v("#")]),e._v(" Compaction")]),e._v(" "),s("p",[s("img",{attrs:{src:a(76),alt:"storage compaction"}})]),e._v(" "),s("ul",[s("li",[e._v("每个 KV Store 都会启一个 Goroutine 定期 Check 一下每个 Family Level 0 下面的文件是否太多，满足 Compaction 的条件")]),e._v(" "),s("li",[e._v("如何满足条件，会通知对应 Family 执行 Compaction Job，如果当前已经有 Compaction 正在执行，则忽略这次操作，整个操作只在一个 Goroutine 内完成，这样的好处是整个操作为无锁操作，因为 Compaction Job 是一个很重的操作，如果需要加锁则可能会影响新文件的写入")])]),e._v(" "),s("p",[e._v("Compaction 主要是把 Level 0 中的文件合并到 Level 1 中，目前 LinDB 只有 2 级 Level，这个有别于 LevelDB。")]),e._v(" "),s("p",[e._v("Compaction 条件，符合以下任意一个条件都会触发Compact任务")]),e._v(" "),s("ul",[s("li",[e._v("Level 0 中的文件数超过配置的文件数")])]),e._v(" "),s("p",[e._v("合并过程目前会有 2 类")]),e._v(" "),s("ul",[s("li",[e._v("直接把 Level 0 的文件移到 Level 1 上，但需要满足需要 compact 的条件，pick files from level 0 的文件数为 1，pick fiels from level 1 的文件数为 0；")]),e._v(" "),s("li",[e._v("需要把多个文件合并成一个大的文件")])]),e._v(" "),s("p",[e._v("Compact 过程")]),e._v(" "),s("ol",[s("li",[e._v("选取需要 Compact 的文件，首先选取当前 level 0 的文件，再遍历每个 level 0 的文件，按 key range 从 level 1 取与其有重合的文件，这里为什么按每个 level 0 的文件，而不是按 level 0 中最终的 key range 来取 level 1 的文件。因为整个 level 0 中的文件的 keys 可能是比较散列的，这样如果取最终的 range 话可能拿到一个很大的范围。例如：")])]),e._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("for example:\nLevel 0:\n    file 1: 1~10\n    file 2: 1000~1001\n    \nLevel 1:\n    file 3: 1~5\n    file 4: 100~200\n    file 5: 400~500\n    \n- 如果按 level 0 最终 range 的话，1~1001，这样的就会把 level 1 的文件全取出来\n- 如果按每个 level 0 的 range 来取的话，那最终只需要取 file 3（1~5）这个文件就可以\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[e._v("整个 compact 过程其实是一个多路合并的过程，由于 flush 写文件的时候 key 是排好序的，所以 compact 只需要按顺序读取每个文件，并且按 key 的顺序从这些文件中遍历数据即可")])]),e._v(" "),s("ul",[s("li",[e._v("过程中需要把 key 相同的数据进行合并，合并的过程需要根据不同的数据类型来合并，需要实现 Merger Interface")]),e._v(" "),s("li",[e._v("如果 key 不需要合并的操作，直接把对应的数据写到文件中，这样就可以减少不必要的序列化操作")])]),e._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[e._v("compact 合并写文件成功完成，需要把 Version Edit 提交到 Version Set 中，此时 Version Edit 中包括了新写的文件和需要删除的老文件，这个过程需要锁")]),e._v(" "),s("li",[e._v("删除一些无用的文件，如已经合并掉的文件，或者失败之后的一些中间结果文件，这里需要注意的是一定要在 Version Edit 提交到 Version Set 成功之后，作清理操作，否则会导致数据文件错乱问题")])]),e._v(" "),s("blockquote",[s("ul",[s("li",[e._v("Version Edit: 类似 LevelDB ，会把每次写文件操作都记录一个 Version Edit ，Version Edit 记录新增文件/删除文件，这样就可以做到当系统重启或者 Crash，只要重新加载一遍 Version Edit Log 就可以提到整个有用的文件有那些。")]),e._v(" "),s("li",[e._v("Version Set: 记录当前存储有哪些文件可用。")])])]),e._v(" "),s("h3",{attrs:{id:"sstable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sstable"}},[e._v("#")]),e._v(" SSTable")]),e._v(" "),s("p",[s("img",{attrs:{src:a(77),alt:"storage sstable"}})]),e._v(" "),s("p",[e._v("每个 SSTable 的结构如上图，主要有如下几部分组件：")]),e._v(" "),s("ul",[s("li",[e._v("Footer Block: 主要存储 Margic Number(8 Bytes) + Version(1 byte) + Index Block Offset(4 bytes) + Offset Block Offset(4 bytes)，可以通过 Index Block Offset 和 Offset Block Offset 这两个 Offset 读取 Index Block 和 Offset Block 的内容")]),e._v(" "),s("li",[e._v("Index Block: 使用 Roaring Bitmap 存储当前 SSTable 文件里面所有的 Keys，因为所有的 Key 都是 uint32，所以可以直接用 Roaring Bitmap 来存储，这样的好处是，可以通过 Roaring Bitmap 来判断一个 Key 是否存在的同时，也可以知道这个 Key 在这个 Roaring Bitmap 中第几个位置")]),e._v(" "),s("li",[e._v("Offset Block: 存储所有的 Value Entry 的 Offset，\b\b并且每个 Offset 都是以固定长度来存储，所以如果在 Index Block 找到是第 N 个位置，那个 Value Entry 的 Offset 就是 N * Offset Length 指向的数据")]),e._v(" "),s("li",[e._v("Value Entry: 存储每个 Key/Value 对应的 Value, 因为 Key 已经在 Index Block 存储了，所以 Value Entry 只需要存储 Key/Value 中的 Value 即可")])]),e._v(" "),s("p",[e._v("这样做的好处是 Key 的压缩可以做的很好，而且 Roaring Bitmap 已经对 Bitmap 做了很多优化，通过 Key 来 Get 数据很高效，因为不会像 LevelDB 那样中间还要二分查询 Key，而且 Bitmap 可以做到常驻在内存中。")]),e._v(" "),s("p",[e._v("基于上面的存储结构整个查询逻辑如下：")]),e._v(" "),s("ol",[s("li",[e._v("通过 Index Block 直接可以知道查询的 Key 是否存在，如果不存在直接返回，如果存在，拿到在 Bitmap 中的第几个位置(Index)")]),e._v(" "),s("li",[e._v("第一跳: 根据上面拿到的 Index，在 Offset Block，跳过 Index * Offset Length 之后就可以拿到 Value Entry Offset(Position)")]),e._v(" "),s("li",[e._v("第二跳: 根据上面拿到的 Position，以文件开头跳过 Position 之后就是想要的 Value，直接读取即可")])]),e._v(" "),s("p",[e._v("如果想做 Scan 操作，直接基于 Index Block 和 Offset Blcok 顺序读取即可。")])])}),[],!1,null,null,null);t.default=i.exports},74:function(e,t,a){e.exports=a.p+"assets/img/time_series_characteristic.5c6ae5d1.png"},75:function(e,t,a){e.exports=a.p+"assets/img/storage_database.e9671db4.png"},76:function(e,t,a){e.exports=a.p+"assets/img/storage_compaction.6064f320.png"},77:function(e,t,a){e.exports=a.p+"assets/img/storage_sstable.13bee9bf.png"}}]);