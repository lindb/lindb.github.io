import{_ as d}from"./forward_grouping.6fa852dd.js";import{_ as n,r as i,o as s,c as o,d as t,a,F as h,b as l,e as r}from"./app.1245c310.js";const p={},c=l(`<h1 id="\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#\u7D22\u5F15" aria-hidden="true">#</a> \u7D22\u5F15</h1><p>\u4E3B\u8981\u4F5C\u7528\u662F\u4E3A\u65B9\u4FBF\u5BF9\u67D0\u4E2A Metric \u4E0B\u9762 Tags \u7684 Filtering/Grouping \u64CD\u4F5C\uFF0C\u540C\u65F6\u4E5F\u662F\u4E3A\u4E86\u63D0\u5347\u6574\u4F53\u7684\u67E5\u8BE2\u6548\u7387\u3002</p><p>\u6574\u4E2A\u7D22\u5F15\u4E3A\u4E00\u4E2A\u5012\u6392\u7ED3\u6784\uFF0C\u7C7B\u4F3C Lucene \uFF0C\u4F46\u662F\u76F8\u6BD4\u4F1A\u66F4\u52A0\u7B80\u5355\uFF0C\u56E0\u4E3A\u5728\u65F6\u5E8F\u8FD9\u6837\u7684\u573A\u666F\u4E0D\u9700\u8981\u505A\u5206\u8BCD\u8FD9\u6837\u7684\u64CD\u4F5C\u3002</p><h2 id="\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784" aria-hidden="true">#</a> \u7ED3\u6784</h2><h3 id="metadata" tabindex="-1"><a class="header-anchor" href="#metadata" aria-hidden="true">#</a> Metadata</h3><p>\u4E3B\u8981\u5B58\u50A8 string-&gt;uint32 \u6570\u636E\u8F6C\u6362\uFF0C\u7C7B\u4F3C\u7ECF\u5178\u7684 OpenTSDB \u8BBE\u8BA1\u601D\u60F3\u3002</p><h4 id="namespace" tabindex="-1"><a class="header-anchor" href="#namespace" aria-hidden="true">#</a> Namespace</h4><table><thead><tr><th>Key</th><th>Value</th></tr></thead><tbody><tr><td>Namespace(string value)</td><td>Namespace ID(uint32)</td></tr></tbody></table><h4 id="metric" tabindex="-1"><a class="header-anchor" href="#metric" aria-hidden="true">#</a> Metric</h4><table><thead><tr><th>Key</th><th>Value</th></tr></thead><tbody><tr><td>Namespace ID + Metric Name(string value)</td><td>Metric ID(uint32)</td></tr></tbody></table><h4 id="field" tabindex="-1"><a class="header-anchor" href="#field" aria-hidden="true">#</a> Field</h4><table><thead><tr><th>Key</th><th>Value</th></tr></thead><tbody><tr><td>Metric ID</td><td>Field List</td></tr></tbody></table><div class="language-yaml ext-yml"><pre class="language-yaml"><code>\u5355\u4E2A Field \u7684\u7ED3\u6784\u5982\u4E0B\uFF1A
<span class="token key atrule">Field ID</span><span class="token punctuation">:</span> \u5728\u8BE5 Metric \u4E0B\u662F\u552F\u4E00\u7684\uFF0C\u5B58\u50A8\u6570\u636E\u7684\u65F6\u5019\u7528\u8BE5 ID
<span class="token key atrule">Field Name</span><span class="token punctuation">:</span> \u5B57\u6BB5\u540D
<span class="token key atrule">Field Type</span><span class="token punctuation">:</span> \u5B57\u6BB5\u7C7B\u578B\uFF0C\u5982 Sum/Min/Max \u7B49
</code></pre></div><h4 id="tag-key" tabindex="-1"><a class="header-anchor" href="#tag-key" aria-hidden="true">#</a> Tag Key</h4><table><thead><tr><th>Key</th><th>Value</th></tr></thead><tbody><tr><td>Metric ID</td><td>Tag Key List</td></tr></tbody></table><div class="language-yaml ext-yml"><pre class="language-yaml"><code>\u5355\u4E2A Tag Key \u7684\u7ED3\u6784\u5982\u4E0B\uFF1A
<span class="token key atrule">Tag Key ID</span><span class="token punctuation">:</span> \u5728\u8BE5 Database \u4E0B\u662F\u552F\u4E00\u7684\uFF0C\u5B58\u50A8 Index \u7684\u65F6\u5019\u7528\u8BE5 ID
<span class="token key atrule">Tag Key</span> <span class="token punctuation">:</span> Tag Key(string value)
</code></pre></div><h4 id="tag-value" tabindex="-1"><a class="header-anchor" href="#tag-value" aria-hidden="true">#</a> Tag Value</h4><table><thead><tr><th>Key</th><th>Value</th></tr></thead><tbody><tr><td>Tag Key ID</td><td>Tag Values Trie</td></tr></tbody></table><p>\u5176\u4E2D Tag Value \u4EE5 Trie \u7ED3\u6784\u5B58\u50A8\u8BE5 Tag Key \u4E0B\u6240\u6709\u7684 Tag Value \u7684\u503C\uFF0C\u540C\u65F6\u901A\u8FC7 Trie \u7684\u7ED3\u6784\u4E3A\u6BCF\u4E2A Tag Value \u751F\u6210\u4E00\u4E2A\u8BE5 Tag Key \u4E0B\u552F\u4E00\u7684 Tag Value ID \u3002</p><h3 id="index" tabindex="-1"><a class="header-anchor" href="#index" aria-hidden="true">#</a> Index</h3><p>\u7531\u4E8E\u5728 Metadata \u4E2D\u5DF2\u7ECF\u505A\u4E86 string-&gt;uint32 \u7684\u64CD\u4F5C\uFF0C\u56E0\u6B64\u5728 Index \u4E2D\u5176\u5B9E\u90FD\u662F\u6309\u6570\u5B57\u6765\u5B58\u50A8\uFF0C\u8FDB\u4E00\u6B65\u51CF\u5C11\u5B58\u50A8\u7A7A\u95F4\u3002</p><h4 id="forward" tabindex="-1"><a class="header-anchor" href="#forward" aria-hidden="true">#</a> Forward</h4><table><thead><tr><th>Key</th><th>Value</th></tr></thead><tbody><tr><td>Series IDs(Roaring Bitmap)</td><td>Tag Value IDs(Array)</td></tr></tbody></table><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>Forward Index \u548C\u4F20\u7EDF\u7684\u7D22\u5F15\u6709\u6240\u4E0D\u540C\uFF0C\u4F20\u7EDF\u7D22\u5F15\u4F1A\u628A\u6BCF\u4E00\u6761\u5199\u5165\u7684\u6570\u636E\u5F53\u6210\u4E00\u4E2A\u6B63\u5411\u8BB0\u5F55\u5B58\u50A8\u4E0B\u6765\uFF0C\u5BF9\u5E94\u65F6\u5E8F\u91CC\u9762\u5C31\u662F\u4E00\u6761\u6761\u7684 Time Series \u5BF9\u5E94\u7684 Tags\uFF0C\u800C\u8FD9\u4E9B Tags \u7ECF\u8FC7 Metadata \u91CC\u9762\u7684 string-&gt;uint32 \u8F6C\u6362\u4E4B\u540E\uFF0C\u90FD\u53D8\u6210\u4E86\u4E00\u4E32\u6570\u636E\uFF0C\u6240\u4EE5\u53EF\u4EE5\u628A\u8FD9\u4E9B\u6570\u636E\u90FD\u538B\u7F29\u5230\u4E00\u6761 Forward Index \u4E2D\u3002</p></div><h4 id="inverted" tabindex="-1"><a class="header-anchor" href="#inverted" aria-hidden="true">#</a> Inverted</h4><table><thead><tr><th>Key</th><th>Value</th></tr></thead><tbody><tr><td>Tag Value ID</td><td>Series IDs(Roaring Bitmap)</td></tr></tbody></table><h2 id="\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2" aria-hidden="true">#</a> \u67E5\u8BE2</h2><p>\u4E0B\u9762\u4EE5\u4E00\u4E2A\u4F8B\u5B50\u7684\u65B9\u5F0F\u6765\u8BF4\u660E Filtering/Grouping \u3002</p><h3 id="filtering" tabindex="-1"><a class="header-anchor" href="#filtering" aria-hidden="true">#</a> Filtering</h3><p>\u5982\u4E0B\u8868\u4E3A\u4E00\u4E2A Metric(cpu) \u4E0B\u9762 Tags \u5BF9\u5E94\u7684\u6B63\u5411\u6570\u636E\uFF0C\u6709 3 \u4E2A Tags \u5206\u522B\u4E3A host/cpu/type</p><table><thead><tr><th>Tags</th><th>Series ID</th></tr></thead><tbody><tr><td>host=dev cpu=0 type=SCHED</td><td>1</td></tr><tr><td>host=dev cpu=1 type=SCHED</td><td>2</td></tr><tr><td>host=dev cpu=0 type=TIMER</td><td>3</td></tr><tr><td>host=dev cpu=1 type=TIMER</td><td>4</td></tr><tr><td>host=test cpu=0 type=SCHED</td><td>5</td></tr><tr><td>host=test cpu=1 type=SCHED</td><td>6</td></tr><tr><td>host=test cpu=2 type=SCHED</td><td>7</td></tr><tr><td>host=test cpu=3 type=SCHED</td><td>8</td></tr><tr><td>host=test cpu=0 type=TIMER</td><td>9</td></tr><tr><td>host=test cpu=1 type=TIMER</td><td>10</td></tr><tr><td>host=test cpu=2 type=TIMER</td><td>11</td></tr><tr><td>host=test cpu=3 type=TIMER</td><td>12</td></tr></tbody></table><p>\u5982\u679C\u628A\u4E0A\u8868\u7684\u6570\u636E\uFF0C\u5012\u6392\u4E00\u4E0B\uFF0C\u5C31\u5F62\u6210\u4E86\u5982\u4E0B\u8868\u7684\u5012\u6392\u7ED3\u6784\uFF0CPosting List \u76F4\u63A5\u7528 Roaring Bitmap \u6765\u5B58\u50A8\u3002</p><table><thead><tr><th>Tag</th><th>Posting List</th></tr></thead><tbody><tr><td>host=dev</td><td>1, 2, 3, 4</td></tr><tr><td>host=test</td><td>5, 6, 7, 8, 9, 10, 11, 12</td></tr><tr><td>cpu=0</td><td>1, 3, 5, 9</td></tr><tr><td>cpu=1</td><td>2, 4, 6, 10</td></tr><tr><td>cpu=2</td><td>7, 11</td></tr><tr><td>cpu=3</td><td>8, 12</td></tr><tr><td>type=SCHED</td><td>1, 2, 5, 6, 7, 8</td></tr><tr><td>type=TIMER</td><td>3, 4, 9, 10, 11, 12</td></tr></tbody></table><p>\u540C\u65F6\u5BF9 Tag \u4E0B\u9762\u7684 Tag Values \u4EE5\u524D\u7F00\u6811\u7684\u65B9\u5F0F\u5B58\u50A8\uFF0C\u4EE5\u65B9\u4FBF\u5BF9 Tag Value \u505A\u8FC7\u6EE4\u64CD\u4F5C\uFF0C\u5982 host like dev* \u8FD9\u6837\u7684\u524D\u7F00\u8FC7\u6EE4\u64CD\u4F5C\u3002\u52A0\u4E0A\u4E0A\u9762\u7684\u5012\u6392\u7ED3\u6784\u4E4B\u540E\uFF0C\u5BF9\u4E8E\u6761\u4EF6\u8FC7\u6EE4\u64CD\u4F5C\u5C31\u975E\u5E38\u65B9\u4FBF\uFF0C\u5982\u591A\u4E2A\u6761\u4EF6\u7684\u64CD\u4F5C\u53EA\u9700\u8981\u5BF9\u591A\u4E2A Posting List \u505A<strong>\u4E0E</strong>/<strong>\u6216</strong>\u64CD\u4F5C\u5373\u53EF\uFF0C\u57FA\u672C\u53EF\u4EE5\u6EE1\u8DB3\u65E5\u5E38\u591A\u4E2A\u6761\u4EF6\u7684 And/Or/Not \u8FD9\u6837\u7684\u8FC7\u6EE4\u64CD\u4F5C\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u4F8B\u5982\uFF1A</p><ul><li>Case 1: host = test or host = dev\uFF0C\u5C31\u662F 2 \u4E2A Posting list \u7684 \u201D\u4E0E\u201C \u64CD\u4F5C</li><li>Case 1: host != test\uFF0C\u8FD9\u79CD\u5C31\u662F\u627E\u5230 host \u4E0B\u9762\u6240\u7684 Series IDs \u548C host = test \u7684 Series IDs\uFF0C\u628A\u8FD9 2 \u4E2A Posting list \u6C42\u4E00\u4E2A AntNot(Difference) \u64CD\u4F5C\u5373\u53EF</li></ul></div><p>\u540C\u65F6\u57FA\u4E8E\u8FD9\u4E2A\u5012\u6392\u7ED3\u6784\u53EF\u80FD\u652F\u6301\u4E00\u4E9B Metadata \u7684\u67E5\u8BE2\uFF0C\u5982\u60F3\u77E5\u9053 host \u8FD9\u4E2A Tag \u4E0B\u9762\u6709\u54EA\u4E9B Value \u7B49\u3002</p><h3 id="grouping" tabindex="-1"><a class="header-anchor" href="#grouping" aria-hidden="true">#</a> Grouping</h3><p>\u90A3\u4E48\uFF0C\u5982\u679C\u4E0D\u5B58\u50A8\u6B63\u5411\u6570\u636E\uFF0C\u600E\u4E48\u6765\u89E3\u51B3\u6309\u67D0\u4E2A\u6216\u8005\u67D0\u51E0\u4E2A Tag Key \u7684 Group By \u64CD\u4F5C\u5462\uFF1F\u5982\u679C\u6211\u4EEC\u50CF Lucene \u4E00\u6837\u9700\u8981\u5BF9 Tag Value \u505A\u5206\u8BCD\u7684\u8BDD\uFF0C\u57FA\u672C\u4E0A\u662F\u505A\u4E0D\u5230\u901A\u8FC7\u53CD\u5411\u6765\u63A8\u5BFC\u51FA\u6B63\u5411\u7684\u6570\u636E\uFF0C\u4F46\u662F\u5728 TSDB \u8FD9\u6837\u7684\u573A\u666F\u91CC\u9762\uFF0C\u6211\u4EEC\u4E0D\u9700\u8981\u5BF9 Tag Value \u505A\u5206\u8BCD\u5904\u7406\uFF0C\u6240\u4EE5\u8FD8\u662F\u53EF\u4EE5\u901A\u8FC7\u53CD\u5411\u7684\u6570\u636E\u6765\u53CD\u63A8\u51FA\u6765\u6B63\u5411\u7684\u6570\u636E\u7684\u3002</p><p>\u5982\u4E0B\u56FE\uFF0C\u5DF2\u7ECF\u628A\u5355\u6761 Tag Key \u7684\u6B63\u5411\u6570\u636E\u91CD\u65B0\u8FD8\u539F\u6210 Tag Key/Value =&gt; Series IDs \uFF0C\u4EE5\u65B9\u4FBF\u7406\u89E3\u3002</p><p><img src="`+d+'" alt="index forward"></p><p>\u4E0B\u9762\u8FD8\u662F\u62FF\u4E4B\u524D\u90A3\u4E2A\u4F8B\u5B50\u6765\u8BF4\u660E\uFF0C\u600E\u4E48\u6765\u62FF\u5230 Group By host,cpu \u8FD9 2 \u4E2A Tag Key \u7684\u6570\u636E\uFF0C\u5982\u4E0A\u56FE\u6240\u793A\uFF0C\u5176\u5B9E\u4ECE\u56FE\u4E2D\u53EF\u4EE5\u770B\u5230\uFF0C\u6574\u4E2A\u64CD\u4F5C\u5C31\u662F\u4E00\u4E2A\u5F52\u5E76\u64CD\u4F5C\uFF0C\u6709 2 \u79CD\u505A\u6CD5\u3002</p><ol><li>\u56E0\u4E3A\u6BCF\u4E2A\u6570\u636E\u90FD\u662F\u6392\u597D\u5E8F\u7684\uFF0C\u6240\u4EE5\u53EF\u4EE5\u7528 2 \u4E2A\u5806\u6765\u6392\u5E8F\uFF0C\u5373 host \u548C cpu \u5206\u522B\u653E\u5728\u4E00\u4E2A\u5806\u91CC\u9762\uFF0C\u6BCF\u6B21\u4ECE\u6BCF\u4E2A\u5806\u91CC\u9762\u53D6\u4E00\u4E2A\u503C\uFF0C\u5982\u679C\u503C\u76F8\u540C\uFF0C\u8BF4\u660E 2 \u8005\u90FD\u6EE1\u8DB3\uFF0C\u5982 TSID = 0 \u5BF9\u5E94\u7684 host=dev,cpu=0 \uFF0C\u5373\u53EF\u4EE5\u627E\u5230\u76F8\u5E94\u7684 Group By \u6570\u636E\uFF0C\u4EE5\u6B64\u7C7B\u63A8\uFF0C\u904D\u5386\u5B8C 2 \u4E2A\u5806\u91CC\u9762\u7684\u6570\u636E\uFF0C\u5C31\u53EF\u4EE5\u5F97\u5230\u6700\u7EC8\u7684\u7ED3\u5408\uFF0C\u8BE5\u65B9\u5F0F\u4F1A\u5360\u7528 CPU \uFF0C\u5185\u5B58\u5360\u7528\u5C11\uFF1B</li><li>\u4F7F\u7528\u7C7B\u4F3C Counting Sort \uFF0C\u5373\u9884\u5148\u5206\u914D\u597D\u4E00\u4E2A\u56FA\u5B9A\u5927\u5C0F\u7684\u6570\u7EC4\uFF0C\u7136\u540E\u628A Series IDs \u653E\u5728\u76F8\u5E94\u7684\u6570\u7EC4\u4E0B\u6807\u91CC\u9762\uFF0C\u5982\u4E0B\u6807\u4E3A 1 \u4E2D\u540C\u65F6\u5305\u62EC\u4E86 2 \u4E2A Tag Key \u7684\u6570\u636E\uFF0C\u5373\u662F\u6211\u4EEC\u60F3\u8981\u7684\uFF0C\u4EE5\u6B64\u7C7B\u63A8\uFF0C\u53EF\u4EE5\u62FF\u5230\u6240\u6709\u7684\u6570\u636E\uFF0C CPU \u5360\u7528\u5C11\uFF0C\u4F46\u662F\u6D6A\u8D39\u5185\u5B58\uFF1B</li></ol><p>\u518D\u7ED3\u5408\uFF0CRoaring Bitmap High/Low Container \u7684\u7ED3\u6784\uFF0C\u4E00\u4E2A Container \u91CC\u6700\u591A\u53EF\u4EE5\u6709 65536 \u4E2A uint16 \u503C\uFF0C\u6240\u4EE5\u5185\u5B58\u7684\u5360\u7528\u4E5F\u53EF\u4EE5\u5F97\u5230\u63A7\u5236\uFF0C\u6240\u4EE5\u6211\u4EEC\u91C7\u7528 Counting Sort \u7684\u65B9\u5F0F\u6765\u63A8\u5BFC\u5BF9\u5E94\u7684\u6B63\u5411\u6570\u636E\uFF0C\u5E76\u4E14\u6574\u4F53\u8FC7\u7A0B\u53EF\u4EE5\u6309\u4E00\u4E2A\u4E2A Container \u6765\u5E76\u884C\u5904\u7406\u3002</p><h5 id="\u53C2\u8003\u5F15\u7528" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u5F15\u7528" aria-hidden="true">#</a> \u53C2\u8003\u5F15\u7528</h5>',44),u={href:"http://roaringbitmap.org/",target:"_blank",rel:"noopener noreferrer"},g=r("RoaringBitmap"),y={href:"https://akumuli.org/akumuli/2017/11/17/indexing/",target:"_blank",rel:"noopener noreferrer"},b=r("Akumuli Inverted Index"),T={href:"https://en.wikipedia.org/wiki/Counting_sort",target:"_blank",rel:"noopener noreferrer"},_=r("Counting Sort"),m={href:"https://en.wikipedia.org/wiki/Trie",target:"_blank",rel:"noopener noreferrer"},f=r("Trie"),I={href:"https://en.wikipedia.org/wiki/Succinct_data_structure",target:"_blank",rel:"noopener noreferrer"},k=r("Succinct Data Structure");function x(D,v){const e=i("ExternalLinkIcon");return s(),o(h,null,[c,t("ol",null,[t("li",null,[t("a",u,[g,a(e)])]),t("li",null,[t("a",y,[b,a(e)])]),t("li",null,[t("a",T,[_,a(e)])]),t("li",null,[t("a",m,[f,a(e)])]),t("li",null,[t("a",I,[k,a(e)])])])],64)}var K=n(p,[["render",x],["__file","index_.html.vue"]]);export{K as default};
