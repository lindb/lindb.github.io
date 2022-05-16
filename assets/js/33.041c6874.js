(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{104:function(t,v,_){"use strict";_.r(v);var e=_(0),a=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"数据模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据模型"}},[t._v("#")]),t._v(" 数据模型")]),t._v(" "),_("h2",{attrs:{id:"时间序列术语"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#时间序列术语"}},[t._v("#")]),t._v(" 时间序列术语")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("术语")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Namespace")]),t._v(" "),_("td",[t._v("命名空间，类似database name")])]),t._v(" "),_("tr",[_("td",[t._v("Metric Name")]),t._v(" "),_("td",[t._v("指标名")])]),t._v(" "),_("tr",[_("td",[t._v("Tags")]),t._v(" "),_("td",[t._v("每个指标名下面可以加多个 Key/Value 类型的 Tag")])]),t._v(" "),_("tr",[_("td",[t._v("Time Series")]),t._v(" "),_("td",[t._v("时间线，Metric Name + Tags 的组合对应一条时间线")])]),t._v(" "),_("tr",[_("td",[t._v("Field")]),t._v(" "),_("td",[t._v("一个指标下面可以有多个字段")])]),t._v(" "),_("tr",[_("td",[t._v("Data Point")]),t._v(" "),_("td",[t._v("一个字段在相应时间点的数据点")])])])]),t._v(" "),_("h2",{attrs:{id:"时间序列唯一标识"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#时间序列唯一标识"}},[t._v("#")]),t._v(" 时间序列唯一标识")]),t._v(" "),_("p",[t._v("每一个时间序列都由"),_("code",[t._v("指标名")]),t._v("与"),_("code",[t._v("标签")]),t._v("的键值对以及"),_("code",[t._v("字段")]),t._v("来唯一标识。\n指标名记录了监控对象的具体意义（例如，cpu，即监控对象为cpu的资源使用情况），由于我们采用"),_("code",[t._v("pb")]),t._v("进行metric传输，无需进行正则检查，仅对该文本数据作长度检查。")]),t._v(" "),_("p",[t._v("标签记录的是可枚举的文本数据（例如，ip=1.1.1.1,zone=sh，即该机器的ip地址为1.1.1.1,生产区为上海）。在查询时，我们可以对这些标签来做过滤和聚合操作，比如查找单条ip地址的机器、查找多条ip地址的机器、前缀搜索50条ip地址的机器、搜索sh上产区的所有机器等。对于任一标签的修改及删除都会产生另外一条时间序列。")]),t._v(" "),_("p",[t._v("标签名称同样没有特别的限制，LinDB 默认限制 tag-key 的数量为32，标签组合数限制为10K;")]),t._v(" "),_("p",[t._v("字段对应的是文本到数值的键值对（例如，idle=32,system=10,user=20，即该条时间序列的空闲利用率为32、系统态用户态的利用率分别为10、20）。")]),t._v(" "),_("p",[t._v("除字段名之外，LinDB 中的字段存在字段类型的定义，不同的字段类型会在存储时进行聚合存放。详细内容可参考下一节。")])])}),[],!1,null,null,null);v.default=a.exports}}]);