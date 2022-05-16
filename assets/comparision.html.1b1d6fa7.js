import{_ as e,b as a}from"./app.1245c310.js";const i={},h=a('<h1 id="\u4E0E\u5176\u4ED6-tsdb-\u5BF9\u6BD4" tabindex="-1"><a class="header-anchor" href="#\u4E0E\u5176\u4ED6-tsdb-\u5BF9\u6BD4" aria-hidden="true">#</a> \u4E0E\u5176\u4ED6 TSDB \u5BF9\u6BD4</h1><h2 id="lindb-vs-influxdb" tabindex="-1"><a class="header-anchor" href="#lindb-vs-influxdb" aria-hidden="true">#</a> LinDB vs. InfluxDB</h2><h3 id="\u67B6\u6784\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u67B6\u6784\u65B9\u6848" aria-hidden="true">#</a> \u67B6\u6784\u65B9\u6848</h3><p>InfluxDB \u9ED8\u8BA4\u63D0\u4F9B\u5355\u673A\u65B9\u6848\uFF0C\u4F46\u63D0\u4F9B\u81EA\u5DF1\u5546\u4E1A\u5316\u7684\u96C6\u7FA4\u65B9\u6848\uFF0C\u7B2C\u4E09\u65B9\u96C6\u7FA4\u65B9\u6848\u4E5F\u53EF\u4EE5\u5728GitHub\u4E0A\u83B7\u53D6\u5230\u3002</p><p>LinDB \u539F\u751F\u9ED8\u8BA4\u63D0\u4F9B\u514D\u8D39\u5F00\u6E90\u7684\u96C6\u7FA4\u65B9\u6848\uFF0C\u4E24\u8005\u4F7F\u7528\u65F6\u90FD\u9700\u8981\u8003\u8651\u7BA1\u7406\u5206\u5E03\u5F0F\u7CFB\u7EDF\u7684\u590D\u6742\u6027\u3002</p><h3 id="\u6570\u636E\u6A21\u578B\u4E0E\u5B58\u50A8\u5F15\u64CE" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u6A21\u578B\u4E0E\u5B58\u50A8\u5F15\u64CE" aria-hidden="true">#</a> \u6570\u636E\u6A21\u578B\u4E0E\u5B58\u50A8\u5F15\u64CE</h3><p>\u4E0E InfluxDB \u4E00\u6837\uFF0CLinDB \u4E5F\u4F7F\u7528\u6587\u672C\u578B\u7684\u952E\u503C\u5BF9\u4F5C\u4E3Atags\uFF0C\u4E5F\u540C\u65F6\u652F\u6301\u591Afield\uFF0CInfluxDB\u652F\u6301\u7EB3\u79D2\u7EA7\u7684\u65F6\u95F4\u6233\u5B58\u50A8\uFF0C\u4EE5\u53CAfloat64\u3001int64\u3001bool\u548C\u5B57\u7B26\u4E32\u6570\u636E\u7C7B\u578B\u3002\u76F8\u6BD4\u4E4B\u4E0B\uFF0CLinDB \u4EC5\u652F\u6301\u6570\u503C\u7C7B\u578B\u4EE5\u53CA\u79D2\u7EA7\u65F6\u95F4\u5B58\u50A8\u7CBE\u5EA6\u3002\u56E0\u6B64\uFF0CInfluxDB\u53EF\u540C\u65F6\u7528\u4E8Elogging\u548Cmetrics\u76D1\u63A7\uFF0CLinDB\u53EA\u652F\u6301metrics\u3002</p><p>LinDB\u7684 field \u5177\u6709 Counter\u3001Gauge\u3001Histogram \u7B49\u7C7B\u578B\uFF0C\u5728\u5B58\u50A8\u65F6\u4FBF\u4F1A\u81EA\u52A8\u805A\u5408\u3002\u800CInfluxDB\u5B58\u50A8\u7684\u5B8C\u5168\u662F\u539F\u59CB\u6570\u636E\u3002</p><p>InfluxDB \u5B58\u50A8\u4F7F\u7528\u5E26WAL\u65E5\u5FD7\u7684 LSM \u6811\uFF0CLinDB \u5728\u8FDB\u884C\u6570\u503C\u5B58\u50A8\u65F6\u4F7F\u7528 LSM \u6811\uFF0CMetric \u5143\u6570\u636E\u5B58\u50A8\u4F7F\u7528 BoltDB, WAL \u65E5\u5FD7\u4EC5\u5728\u8BA1\u7B97\u5C42\u4F7F\u7528\u3002</p><h3 id="\u5982\u4F55\u9009\u62E9" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u9009\u62E9" aria-hidden="true">#</a> \u5982\u4F55\u9009\u62E9</h3><h4 id="influxdb-\u66F4\u9002\u5408\u7684\u7528\u9014" tabindex="-1"><a class="header-anchor" href="#influxdb-\u66F4\u9002\u5408\u7684\u7528\u9014" aria-hidden="true">#</a> InfluxDB \u66F4\u9002\u5408\u7684\u7528\u9014\uFF1A</h4><ul><li>\u9700\u8981 logging \u76D1\u63A7\uFF1B</li><li>\u9700\u8981\u7CBE\u7EC6\u7684\u65F6\u95F4\u5C3A\u5EA6\uFF1B</li><li>\u9700\u8981 TICK \u751F\u6001\u7684\u6613\u7528\u6027\uFF1B</li></ul><h4 id="lindb-\u66F4\u9002\u5408\u7684\u7528\u9014" tabindex="-1"><a class="header-anchor" href="#lindb-\u66F4\u9002\u5408\u7684\u7528\u9014" aria-hidden="true">#</a> LinDB \u66F4\u9002\u5408\u7684\u7528\u9014\uFF1A</h4><ul><li>\u9700\u8981\u67E5\u8BE2\u901F\u5EA6\u66F4\u5FEB\uFF1B</li><li>\u9700\u8981\u89E3\u51B3\u6D77\u91CF\u6570\u636E\u7684\u65F6\u5E8F\u573A\u666F\uFF1B</li><li>\u5BF9\u65F6\u5E8F\u6570\u636E\u65F6\u95F4\u7CBE\u5EA6\u4E0D\u654F\u611F\uFF0C\u6BD4\u5982\u76D1\u63A7\u9886\u57DF\uFF1B</li></ul><p>InfluxDB \u7531\u5546\u4E1A\u516C\u53F8\u8FDB\u884C\u7EF4\u62A4\u8FED\u4EE3\uFF0C\u9AD8\u7EA7\u529F\u80FD\u5747\u4E3A\u6536\u8D39\u670D\u52A1\u3002LinDB\u662F\u4E00\u4E2A\u5B8C\u5168\u5F00\u6E90\u7684\u9879\u76EE\uFF0C\u7531\u793E\u533A\u7EF4\u62A4\u3002</p><h2 id="lindb-vs-prometheus" tabindex="-1"><a class="header-anchor" href="#lindb-vs-prometheus" aria-hidden="true">#</a> LinDB vs. Prometheus</h2><h3 id="\u67B6\u6784\u65B9\u6848-1" tabindex="-1"><a class="header-anchor" href="#\u67B6\u6784\u65B9\u6848-1" aria-hidden="true">#</a> \u67B6\u6784\u65B9\u6848</h3><p>LinDB \u4E13\u6CE8\u4E8E\u5206\u5E03\u5F0F\u5B58\u50A8\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u4F46\u517C\u5BB9 Prometheus \u7684\u534F\u8BAE\uFF0C\u53EF\u4EE5\u66FF\u6362 Prometheus \u7684\u5B58\u50A8\u5C42\u3002</p><p>Prometheus \u4E0D\u4EC5\u4EC5\u662F\u4E00\u4E2A\u65F6\u5E8F\u6570\u636E\u5E93\uFF0C\u8FD8\u63D0\u4F9B\u4E86\u65F6\u5E8F\u6570\u636E\u6293\u53D6\u3001\u62A5\u8B66\u7B49\u7EC4\u4EF6\uFF0C\u66F4\u662F\u4E00\u4E2A\u5B8C\u6574\u7684\u751F\u6001\u3002</p><h3 id="\u6570\u636E\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u6A21\u578B" aria-hidden="true">#</a> \u6570\u636E\u6A21\u578B</h3><p>LinDB \u7684\u6570\u636E\u7C7B\u578B\u4E0E Prometheus \u57FA\u672C\u4E00\u81F4\uFF0CPrometheus \u662FMetric\u7EA7\u7684\u5355 field \u7C7B\u578B\uFF0CLinDB \u662F\u591A field \u7C7B\u578B\u3002</p><h3 id="\u5982\u4F55\u9009\u62E9-1" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u9009\u62E9-1" aria-hidden="true">#</a> \u5982\u4F55\u9009\u62E9</h3><h4 id="prometheus-\u66F4\u9002\u5408\u7684\u7528\u9014" tabindex="-1"><a class="header-anchor" href="#prometheus-\u66F4\u9002\u5408\u7684\u7528\u9014" aria-hidden="true">#</a> Prometheus \u66F4\u9002\u5408\u7684\u7528\u9014\uFF1A</h4><ul><li>\u9700\u8981\u66F4\u4E30\u5BCC\u7684\u67E5\u8BE2\u8BED\u8A00\uFF1B</li><li>\u9700\u8981\u62A5\u8B66\u901A\u77E5\u7B49\u529F\u80FD\uFF1B</li></ul><h3 id="lindb-\u66F4\u9002\u5408\u7684\u7528\u9014-1" tabindex="-1"><a class="header-anchor" href="#lindb-\u66F4\u9002\u5408\u7684\u7528\u9014-1" aria-hidden="true">#</a> LinDB \u66F4\u9002\u5408\u7684\u7528\u9014</h3><ul><li>\u9700\u8981\u89E3\u51B3\u6D77\u91CF\u6570\u636E\u7684\u65F6\u5E8F\u573A\u666F\uFF1B</li></ul><h2 id="lindb-vs-opentsdb" tabindex="-1"><a class="header-anchor" href="#lindb-vs-opentsdb" aria-hidden="true">#</a> LinDB vs. OpenTSDB</h2><h3 id="\u6570\u636E\u6A21\u578B-1" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u6A21\u578B-1" aria-hidden="true">#</a> \u6570\u636E\u6A21\u578B</h3><p>LinDB \u7684\u6570\u636E\u7C7B\u578B\u4E0E OpenTSDB \u57FA\u672C\u4E00\u81F4\u3002\u4F46OpenTSDB \u7F3A\u5C11\u5B8C\u6574\u7684\u67E5\u8BE2\u8BED\u8A00\uFF0C\u4EC5\u80FD\u901A\u8FC7 API \u8FDB\u884C\u7B80\u5355\u7684\u805A\u5408\u4E0E\u6570\u5B66\u8BA1\u7B97\u3002</p><p>OpenTSDB \u57FA\u4E8E Hadoop \u548C HBase\uFF0C\u5B58\u50A8\u5C42\u53EF\u4EE5\u7B80\u5355\u7684\u6C34\u5E73\u62D3\u5C55\uFF0C\u4F46\u5FC5\u987B\u8FD0\u7EF4 Hadoop / HBase \u96C6\u7FA4\u3002</p><p>LinDB \u5728\u521B\u5EFA\u6570\u636E\u5E93\u65F6\uFF0C\u9700\u8981\u9884\u4F30\u5BB9\u91CF\u8FDB\u884C\u660E\u786E\u7684\u5206\u7247\uFF0C\u5728\u5BB9\u91CF\u4E0D\u8DB3\u65F6\u4E5F\u53EF\u4EE5\u8FDB\u884C\u6269\u5BB9\u3002</p><h3 id="\u5982\u4F55\u9009\u62E9-2" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u9009\u62E9-2" aria-hidden="true">#</a> \u5982\u4F55\u9009\u62E9</h3><p>\u9664\u4E86\u5DF2\u4F7F\u7528 OpenTSDB \u4E4B\u5916\uFF0C\u4E0D\u518D\u5EFA\u8BAE\u65B0\u9879\u76EE\u4F7F\u7528\u3002</p>',33);function r(d,n){return h}var s=e(i,[["render",r],["__file","comparision.html.vue"]]);export{s as default};
