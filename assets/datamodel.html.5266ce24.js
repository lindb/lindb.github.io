import{_ as t,b as e}from"./app.1245c310.js";const d={},a=e('<h1 id="\u6570\u636E\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u6A21\u578B" aria-hidden="true">#</a> \u6570\u636E\u6A21\u578B</h1><h2 id="\u65F6\u95F4\u5E8F\u5217\u672F\u8BED" tabindex="-1"><a class="header-anchor" href="#\u65F6\u95F4\u5E8F\u5217\u672F\u8BED" aria-hidden="true">#</a> \u65F6\u95F4\u5E8F\u5217\u672F\u8BED</h2><table><thead><tr><th>\u672F\u8BED</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>Namespace</td><td>\u547D\u540D\u7A7A\u95F4\uFF0C\u7C7B\u4F3Cdatabase name</td></tr><tr><td>Metric Name</td><td>\u6307\u6807\u540D</td></tr><tr><td>Tags</td><td>\u6BCF\u4E2A\u6307\u6807\u540D\u4E0B\u9762\u53EF\u4EE5\u52A0\u591A\u4E2A Key/Value \u7C7B\u578B\u7684 Tag</td></tr><tr><td>Time Series</td><td>\u65F6\u95F4\u7EBF\uFF0CMetric Name + Tags \u7684\u7EC4\u5408\u5BF9\u5E94\u4E00\u6761\u65F6\u95F4\u7EBF</td></tr><tr><td>Field</td><td>\u4E00\u4E2A\u6307\u6807\u4E0B\u9762\u53EF\u4EE5\u6709\u591A\u4E2A\u5B57\u6BB5</td></tr><tr><td>Data Point</td><td>\u4E00\u4E2A\u5B57\u6BB5\u5728\u76F8\u5E94\u65F6\u95F4\u70B9\u7684\u6570\u636E\u70B9</td></tr></tbody></table><h2 id="\u65F6\u95F4\u5E8F\u5217\u552F\u4E00\u6807\u8BC6" tabindex="-1"><a class="header-anchor" href="#\u65F6\u95F4\u5E8F\u5217\u552F\u4E00\u6807\u8BC6" aria-hidden="true">#</a> \u65F6\u95F4\u5E8F\u5217\u552F\u4E00\u6807\u8BC6</h2><p>\u6BCF\u4E00\u4E2A\u65F6\u95F4\u5E8F\u5217\u90FD\u7531<code>\u6307\u6807\u540D</code>\u4E0E<code>\u6807\u7B7E</code>\u7684\u952E\u503C\u5BF9\u4EE5\u53CA<code>\u5B57\u6BB5</code>\u6765\u552F\u4E00\u6807\u8BC6\u3002 \u6307\u6807\u540D\u8BB0\u5F55\u4E86\u76D1\u63A7\u5BF9\u8C61\u7684\u5177\u4F53\u610F\u4E49\uFF08\u4F8B\u5982\uFF0Ccpu\uFF0C\u5373\u76D1\u63A7\u5BF9\u8C61\u4E3Acpu\u7684\u8D44\u6E90\u4F7F\u7528\u60C5\u51B5\uFF09\uFF0C\u7531\u4E8E\u6211\u4EEC\u91C7\u7528<code>pb</code>\u8FDB\u884Cmetric\u4F20\u8F93\uFF0C\u65E0\u9700\u8FDB\u884C\u6B63\u5219\u68C0\u67E5\uFF0C\u4EC5\u5BF9\u8BE5\u6587\u672C\u6570\u636E\u4F5C\u957F\u5EA6\u68C0\u67E5\u3002</p><p>\u6807\u7B7E\u8BB0\u5F55\u7684\u662F\u53EF\u679A\u4E3E\u7684\u6587\u672C\u6570\u636E\uFF08\u4F8B\u5982\uFF0Cip=1.1.1.1,zone=sh\uFF0C\u5373\u8BE5\u673A\u5668\u7684ip\u5730\u5740\u4E3A1.1.1.1,\u751F\u4EA7\u533A\u4E3A\u4E0A\u6D77\uFF09\u3002\u5728\u67E5\u8BE2\u65F6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5BF9\u8FD9\u4E9B\u6807\u7B7E\u6765\u505A\u8FC7\u6EE4\u548C\u805A\u5408\u64CD\u4F5C\uFF0C\u6BD4\u5982\u67E5\u627E\u5355\u6761ip\u5730\u5740\u7684\u673A\u5668\u3001\u67E5\u627E\u591A\u6761ip\u5730\u5740\u7684\u673A\u5668\u3001\u524D\u7F00\u641C\u7D2250\u6761ip\u5730\u5740\u7684\u673A\u5668\u3001\u641C\u7D22sh\u4E0A\u4EA7\u533A\u7684\u6240\u6709\u673A\u5668\u7B49\u3002\u5BF9\u4E8E\u4EFB\u4E00\u6807\u7B7E\u7684\u4FEE\u6539\u53CA\u5220\u9664\u90FD\u4F1A\u4EA7\u751F\u53E6\u5916\u4E00\u6761\u65F6\u95F4\u5E8F\u5217\u3002</p><p>\u6807\u7B7E\u540D\u79F0\u540C\u6837\u6CA1\u6709\u7279\u522B\u7684\u9650\u5236\uFF0CLinDB \u9ED8\u8BA4\u9650\u5236 tag-key \u7684\u6570\u91CF\u4E3A32\uFF0C\u6807\u7B7E\u7EC4\u5408\u6570\u9650\u5236\u4E3A10K;</p><p>\u5B57\u6BB5\u5BF9\u5E94\u7684\u662F\u6587\u672C\u5230\u6570\u503C\u7684\u952E\u503C\u5BF9\uFF08\u4F8B\u5982\uFF0Cidle=32,system=10,user=20\uFF0C\u5373\u8BE5\u6761\u65F6\u95F4\u5E8F\u5217\u7684\u7A7A\u95F2\u5229\u7528\u7387\u4E3A32\u3001\u7CFB\u7EDF\u6001\u7528\u6237\u6001\u7684\u5229\u7528\u7387\u5206\u522B\u4E3A10\u300120\uFF09\u3002</p><p>\u9664\u5B57\u6BB5\u540D\u4E4B\u5916\uFF0CLinDB \u4E2D\u7684\u5B57\u6BB5\u5B58\u5728\u5B57\u6BB5\u7C7B\u578B\u7684\u5B9A\u4E49\uFF0C\u4E0D\u540C\u7684\u5B57\u6BB5\u7C7B\u578B\u4F1A\u5728\u5B58\u50A8\u65F6\u8FDB\u884C\u805A\u5408\u5B58\u653E\u3002\u8BE6\u7EC6\u5185\u5BB9\u53EF\u53C2\u8003\u4E0B\u4E00\u8282\u3002</p>',9);function r(i,c){return a}var o=t(d,[["render",r],["__file","datamodel.html.vue"]]);export{o as default};
