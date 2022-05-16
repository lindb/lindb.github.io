(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{106:function(e,t,a){"use strict";a.r(t);var i=a(0),d=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"tsdb-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tsdb-model"}},[e._v("#")]),e._v(" TSDB Model")]),e._v(" "),a("p",[e._v("LinDB 的field 字段提供了多种标准类型。这些类型可以通过SDK（ProtoBuf）传输。\n所有原始数据在落盘时便会根据相应的类型进行聚合。对于普通用户而言，并不需要关心 Field 的具体存储形式\n，相对应的转换过程都会封装在 tsdb 中")]),e._v(" "),a("h2",{attrs:{id:"sumfield"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sumfield"}},[e._v("#")]),e._v(" SumField")]),e._v(" "),a("p",[e._v("SumField 是一个自动累计的字段，多个值在存储或查询时会根据时间区间进行自动汇总求和。\n例如，SumField 可以用来记录上一个时间区间内的PV、UV、错误数等类型的数据")]),e._v(" "),a("h2",{attrs:{id:"gaugefield"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gaugefield"}},[e._v("#")]),e._v(" GaugeField")]),e._v(" "),a("p",[e._v("GaugeField 用来表示可以任意波动的值，例如当前的内存用量、CPU使用率等。")]),e._v(" "),a("h1",{attrs:{id:"compound-field"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compound-field"}},[e._v("#")]),e._v(" Compound Field")]),e._v(" "),a("p",[e._v("从 DTO model的 复合 field 会自动转换为以下几种 field 进行存储")]),e._v(" "),a("h2",{attrs:{id:"histogramfield"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#histogramfield"}},[e._v("#")]),e._v(" HistogramField")]),e._v(" "),a("p",[e._v("HistogramField 是组成直方图数据的基础字段，在 SDK中打点时，对应的数据会被拆解为多个HistogramField，记录到不同的Bucket中，以支持计算99线、95线等。\nHistogramField 是一种特殊的 SumField，并不会呈现给用户。")]),e._v(" "),a("h2",{attrs:{id:"minfield"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#minfield"}},[e._v("#")]),e._v(" MinField")]),e._v(" "),a("p",[e._v("MinField 是一个自动求最小值的字段，多个值在存储时会根据时间区间写入最小的一个值，在降采样查询时也会如此。\n例如，MinField 通常作为 HistogramField 的辅助Field，也可以根据需求自主使用。")]),e._v(" "),a("h2",{attrs:{id:"maxfield"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maxfield"}},[e._v("#")]),e._v(" MaxField")]),e._v(" "),a("p",[e._v("MaxField 是一个自动求最大值的字段，功能与 MinField 类似。")])])}),[],!1,null,null,null);t.default=d.exports}}]);