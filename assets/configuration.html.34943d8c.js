import{_ as l,r as p,o as i,c as o,d as n,a as e,F as c,e as s,b as t}from"./app.1245c310.js";const r={},m=n("h1",{id:"\u914D\u7F6E\u53C2\u6570",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u914D\u7F6E\u53C2\u6570","aria-hidden":"true"},"#"),s(" \u914D\u7F6E\u53C2\u6570")],-1),u=n("p",null,"LinDB \u91C7\u7528 TOML \u683C\u5F0F\u4F5C\u4E3A\u670D\u52A1\u914D\u7F6E\u53C2\u6570\u5B9A\u4E49\uFF0C\u4E3B\u8981\u5206\u4E3A\u4EE5\u4E0B 2 \u79CD\u914D\u7F6E\u53C2\u6570\uFF1A",-1),d=n("ul",null,[n("li",null,"Broker \u76F8\u5173\u914D\u7F6E\uFF1B"),n("li",null,"Storage \u76F8\u5173\u914D\u7F6E\uFF1B")],-1),v=n("p",null,"\u4EE5\u4E0B\u5206\u522B\u4ECB\u7ECD\u5BF9\u5E94\u7684\u6BCF\u4E2A\u53C2\u6570\u542B\u4E49\u3002",-1),k=n("h2",{id:"broker",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#broker","aria-hidden":"true"},"#"),s(" Broker")],-1),b=s("\u53EF\u4EE5\u5728 "),y={href:"https://github.com/lindb/lindb/tree/main/config/broker.toml.example",target:"_blank",rel:"noopener noreferrer"},g=s("config/broker.toml.example"),q=s(" \u627E\u5230\u9ED8\u8BA4\u503C\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u91CD\u547D\u540D\u4E3A broker.toml \u5373\u53EF\u4F5C\u4E3A Storage \u542F\u52A8\u53C2\u6570\u6587\u4EF6\u3002"),h=t(`<div class="language-toml ext-toml line-numbers-mode"><pre class="language-toml"><code><span class="token comment">## \u72B6\u6001\u5B58\u50A8\u53CA\u534F\u8C03\u72B6\u6001\u76F8\u5173\u914D\u7F6E\u53C2\u6570</span>
<span class="token punctuation">[</span><span class="token table class-name">coordinator</span><span class="token punctuation">]</span>
<span class="token comment">## ETCD \u4E2D\u5B58\u50A8\u7684 Namespace\uFF0C\u901A\u8FC7 Namespace \u6765\u9694\u79BB\u5404\u7EC4\u4EF6\u7684\u5143\u6570\u636E</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A/lindb-cluster</span>
<span class="token key property">namespace</span> <span class="token punctuation">=</span> <span class="token string">&quot;/lindb-broker&quot;</span>
<span class="token comment">## ETCD \u5730\u5740</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A[&quot;http://localhost:2379&quot;]</span>
<span class="token key property">endpoints</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;http://localhost:2379&quot;</span><span class="token punctuation">]</span>
<span class="token comment">## \u7C7B\u4F3C Zookeeper \u4E34\u65F6\u8282\u70B9\u79DF\u7EA6\u8D85\u65F6\u65F6\u95F4\uFF0C\u4E0D\u80FD\u5C0F\u4E8E 5s</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A10s</span>
<span class="token key property">lease-ttl</span> <span class="token punctuation">=</span> <span class="token string">&quot;10s&quot;</span>
<span class="token comment">## \u5904\u7406 ETCD \u76F8\u5173\u6307\u4EE4\u8D85\u65F6\u65F6\u95F4</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A5s</span>
<span class="token key property">timeout</span> <span class="token punctuation">=</span> <span class="token string">&quot;5s&quot;</span>
<span class="token comment">## ETCD \u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A5s</span>
<span class="token key property">dial-timeout</span> <span class="token punctuation">=</span> <span class="token string">&quot;5s&quot;</span>
<span class="token comment">## ETCD \u8BA4\u8BC1\u7528\u6237\u540D</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A&quot;&quot;</span>
<span class="token key property">username</span> <span class="token punctuation">=</span> <span class="token string">&quot;&quot;</span>
<span class="token comment">## ETCD \u8BA4\u8BC1\u5BC6\u7801</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A&quot;&quot;</span>
<span class="token key property">password</span> <span class="token punctuation">=</span> <span class="token string">&quot;&quot;</span>

<span class="token comment">## \u901A\u7528\u67E5\u8BE2\u76F8\u5173\u914D\u7F6E\u53C2\u6570</span>
<span class="token punctuation">[</span><span class="token table class-name">query</span><span class="token punctuation">]</span>
<span class="token comment">## \u67E5\u8BE2\u8BF7\u6C42\u6700\u5927\u5904\u7406\u5E76\u53D1\u6570</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1Aruntime.GOMAXPROCS(-1) * 2</span>
<span class="token key property">query-concurrency</span> <span class="token punctuation">=</span> <span class="token number">16</span>
<span class="token comment">## \u67E5\u8BE2\u5904\u7406\u534F\u7A0B\u7A7A\u95F2\u65F6\u95F4\uFF0C\u8D85\u8FC7\u7A7A\u95F2\u65F6\u95F4\u534F\u7A0B\u5C06\u88AB\u56DE\u6536</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A5s</span>
<span class="token key property">idle-timeout</span> <span class="token punctuation">=</span> <span class="token string">&quot;5s&quot;</span>
<span class="token comment">## \u67E5\u8BE2\u8D85\u65F6\u65F6\u95F4</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A5s</span>
<span class="token key property">timeout</span> <span class="token punctuation">=</span> <span class="token string">&quot;5s&quot;</span>

<span class="token comment">## Broker \u76F8\u5173\u914D\u7F6E\u53C2\u6570</span>
<span class="token punctuation">[</span><span class="token table class-name">broker</span><span class="token punctuation">]</span>

<span class="token comment">## Broker HTTP Server \u76F8\u5173\u914D\u7F6E\u53C2\u6570</span>
<span class="token punctuation">[</span><span class="token table class-name">broker.http</span><span class="token punctuation">]</span>
<span class="token comment">## HTTP Server \u76D1\u542C\u7AEF\u53E3</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A9000</span>
<span class="token key property">port</span> <span class="token punctuation">=</span> <span class="token number">9000</span>
<span class="token comment">## \u6700\u5927\u8FDE\u63A5\u7A7A\u95F2\u65F6\u95F4</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A2m</span>
<span class="token key property">idle-timeout</span> <span class="token punctuation">=</span> <span class="token string">&quot;2m0s&quot;</span>
<span class="token comment">## \u5199\u8BF7\u6C42\u54CD\u5E94\u8D85\u65F6\u65F6\u95F4</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A5s</span>
<span class="token key property">write-timeout</span> <span class="token punctuation">=</span> <span class="token string">&quot;5s&quot;</span>	
<span class="token comment">## \u8BFB\u8BF7\u6C42\u8D85\u65F6\u65F6\u95F4</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A5s</span>
<span class="token key property">read-timeout</span> <span class="token punctuation">=</span> <span class="token string">&quot;5s&quot;</span>

<span class="token comment">## Broker \u5904\u7406\u6570\u636E\u5199\u5165\u76F8\u5173\u914D\u7F6E</span>
<span class="token punctuation">[</span><span class="token table class-name">broker.ingestion</span><span class="token punctuation">]</span>
<span class="token comment">## \u6570\u636E\u5199\u5165\u6700\u5927\u5E76\u53D1\u6570\uFF0C\u8D85\u8FC7\u6700\u5927\u5E76\u53D1\u6570\u7684\u8BF7\u6C42\u5C06\u88AB\u9650\u6D41</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1Aruntime.GOMAXPROCS(-1) * 2</span>
<span class="token key property">max-concurrency</span> <span class="token punctuation">=</span> <span class="token number">8</span>
<span class="token comment">## \u5904\u7406\u6570\u636E\u5199\u5165\u8D85\u65F6\u65F6\u95F4</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A5s</span>
<span class="token key property">ingest-timeout</span> <span class="token punctuation">=</span> <span class="token string">&quot;5s&quot;</span>

<span class="token comment">## Broker \u5199\u6570\u636E\u5230\u5B58\u50A8\u76F8\u914D\u7F6E\u53C2\u6570</span>
<span class="token punctuation">[</span><span class="token table class-name">broker.write</span><span class="token punctuation">]</span>
<span class="token comment">## \u5199\u5165 Buffer \u6570\u636E Cache \u65F6\u95F4\u95F4\u9694\uFF0C\u5230\u8FBE\u8FD9\u4E2A\u95F4\u9694\u6570\u636E\u5199\u5165\u5B58\u50A8\u8282\u70B9</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A2s</span>
<span class="token key property">batch-timeout</span> <span class="token punctuation">=</span> <span class="token string">&quot;2s&quot;</span>
<span class="token comment">## \u5728\u5199\u5165 Buffer \u4E2D Cache \u591A\u5C11\u6570\u636E\uFF0C\u5230\u8FBE\u8FD9\u4E2A\u5927\u5C0F\u6570\u636E\u5199\u5165\u5B58\u50A8\u8282\u70B9</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A256 KiB</span>
<span class="token key property">batch-block-size</span> <span class="token punctuation">=</span> <span class="token string">&quot;256 KiB&quot;</span>
<span class="token comment">## \u56DE\u6536\u8FC7\u671F\u5199\u5165\u901A\u9053\u95F4\u9694\u65F6\u95F4</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A1m0s</span>
<span class="token key property">gc-task-interval</span> <span class="token punctuation">=</span> <span class="token string">&quot;1m0s&quot;</span>

<span class="token comment">## Broker GRPC \u76F8\u5173\u914D\u7F6E\u53C2\u6570</span>
<span class="token punctuation">[</span><span class="token table class-name">broker.grpc</span><span class="token punctuation">]</span>
<span class="token comment">## GRPC \u76D1\u63A7\u7AEF\u53E3</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A9001</span>
<span class="token key property">port</span> <span class="token punctuation">=</span> <span class="token number">9001</span>
<span class="token comment">## GRPC \u6700\u5927\u5E76\u53D1 Streams\uFF0C\u5EFA\u8BAE\u8BE5\u53C2\u6570\u8BBE\u7F6E\u4E00\u4E2A\u6BD4\u8F83\u5927\u7684\u503C</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1Aruntime.GOMAXPROCS(-1) * 2</span>
<span class="token key property">max-concurrent-streams</span> <span class="token punctuation">=</span> <span class="token number">8</span>
<span class="token comment">## \u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A3s</span>
<span class="token key property">connect-timeout</span> <span class="token punctuation">=</span> <span class="token string">&quot;3s&quot;</span>

<span class="token comment">## \u81EA\u76D1\u63A7\u76F8\u5173\u914D\u7F6E\u53C2\u6570</span>
<span class="token punctuation">[</span><span class="token table class-name">monitor</span><span class="token punctuation">]</span>
<span class="token comment">## \u901A\u8FC7 HTTP \u65B9\u5F0F\u4E0A\u62A5\u6307\u6807\u8D85\u65F6\u65F6\u95F4</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A3s</span>
<span class="token key property">push-timeout</span> <span class="token punctuation">=</span> <span class="token string">&quot;3s&quot;</span>
<span class="token comment">## Default: 10s</span>
<span class="token comment">## \u76D1\u63A7\u6570\u636E(cpu/memory/disk/process/go runtime\u7B49)\u91C7\u96C6\u4E0A\u62A5\u95F4\u9694\uFF0C\u8BBE\u7F6E\u4E3A 0 \u65F6\u4E0D\u4E0A\u62A5\u76D1\u63A7\u6570\u636E</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A10s</span>
<span class="token key property">report-interval</span> <span class="token punctuation">=</span> <span class="token string">&quot;10s&quot;</span>
<span class="token comment">## \u76D1\u63A7\u6307\u6807\u4E0A\u62A5\u5730\u5740(Broker\u5199\u5165\u5730\u5740)</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1Ahttp://127.0.0.1:9000/api/flat/write?db=_internal</span>
<span class="token key property">url</span> <span class="token punctuation">=</span> <span class="token string">&quot;http://127.0.0.1:9000/api/flat/write?db=_internal&quot;</span>

<span class="token comment">## \u65E5\u5FD7\u76F8\u5173\u914D\u7F6E\u53C2\u6570</span>
<span class="token punctuation">[</span><span class="token table class-name">logging</span><span class="token punctuation">]</span>
<span class="token comment">## \u65E5\u5FD7\u5B58\u50A8\u76EE\u5F55</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A/tmp/lindb/log</span>
<span class="token key property">dir</span> <span class="token punctuation">=</span> <span class="token string">&quot;/tmp/lindb/log&quot;</span>
<span class="token comment">## \u65E5\u5FD7\u7EA7\u522B\uFF0C\u5BF9\u5E94\u7684\u53C2\u6570\u503C\uFF1Aerror/warn/info/debug</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1Ainfo</span>
<span class="token key property">level</span> <span class="token punctuation">=</span> <span class="token string">&quot;info&quot;</span>
<span class="token comment">## \u5355\u4E2A\u65E5\u5FD7\u6587\u4EF6\u5927\u5C0F</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A100 MiB.</span>
<span class="token key property">maxsize</span> <span class="token punctuation">=</span> <span class="token string">&quot;100 MiB&quot;</span>
<span class="token comment">## \u4FDD\u7559\u591A\u5C11\u4E2A\u65E7\u65E5\u5FD7\u6587\u4EF6</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A3</span>
<span class="token key property">maxbackups</span> <span class="token punctuation">=</span> <span class="token number">3</span>
<span class="token comment">## \u4FDD\u7559\u591A\u5C11\u5929\u4EE5\u524D\u7684\u65E5\u5FD7\u6587\u4EF6\uFF0C\u5355\u4F4D\uFF1A\u5929</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A7</span>
<span class="token key property">maxage</span> <span class="token punctuation">=</span> <span class="token number">7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="storage" tabindex="-1"><a class="header-anchor" href="#storage" aria-hidden="true">#</a> Storage</h2>`,2),_=s("\u53EF\u4EE5\u5728 "),f={href:"https://github.com/lindb/lindb/tree/main/config/storage.toml.example",target:"_blank",rel:"noopener noreferrer"},B=s("config/storage.toml.example"),S=s(" \u627E\u5230\u9ED8\u8BA4\u503C\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u91CD\u547D\u540D\u4E3A storage.toml \u5373\u53EF\u4F5C\u4E3A Storage \u542F\u52A8\u53C2\u6570\u6587\u4EF6\u3002"),T=t(`<div class="language-toml ext-toml line-numbers-mode"><pre class="language-toml"><code><span class="token comment">## \u72B6\u6001\u5B58\u50A8\u53CA\u534F\u8C03\u72B6\u6001\u76F8\u5173\u914D\u7F6E\u53C2\u6570</span>
<span class="token punctuation">[</span><span class="token table class-name">coordinator</span><span class="token punctuation">]</span>
<span class="token comment">## ETCD \u4E2D\u5B58\u50A8\u7684 Namespace\uFF0C\u901A\u8FC7 Namespace \u6765\u9694\u79BB\u5404\u7EC4\u4EF6\u7684\u5143\u6570\u636E</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A/lindb-cluster</span>
<span class="token key property">namespace</span> <span class="token punctuation">=</span> <span class="token string">&quot;/lindb-broker&quot;</span>
<span class="token comment">## ETCD \u5730\u5740</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A[&quot;http://localhost:2379&quot;]</span>
<span class="token key property">endpoints</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;http://localhost:2379&quot;</span><span class="token punctuation">]</span>
<span class="token comment">## \u7C7B\u4F3C Zookeeper \u4E34\u65F6\u8282\u70B9\u79DF\u7EA6\u8D85\u65F6\u65F6\u95F4\uFF0C\u4E0D\u80FD\u5C0F\u4E8E 5s</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A10s</span>
<span class="token key property">lease-ttl</span> <span class="token punctuation">=</span> <span class="token string">&quot;10s&quot;</span>
<span class="token comment">## \u5904\u7406 ETCD \u76F8\u5173\u6307\u4EE4\u8D85\u65F6\u65F6\u95F4</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A5s</span>
<span class="token key property">timeout</span> <span class="token punctuation">=</span> <span class="token string">&quot;5s&quot;</span>
<span class="token comment">## ETCD \u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A5s</span>
<span class="token key property">dial-timeout</span> <span class="token punctuation">=</span> <span class="token string">&quot;5s&quot;</span>
<span class="token comment">## ETCD \u8BA4\u8BC1\u7528\u6237\u540D</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A&quot;&quot;</span>
<span class="token key property">username</span> <span class="token punctuation">=</span> <span class="token string">&quot;&quot;</span>
<span class="token comment">## ETCD \u8BA4\u8BC1\u5BC6\u7801</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A&quot;&quot;</span>
<span class="token key property">password</span> <span class="token punctuation">=</span> <span class="token string">&quot;&quot;</span>

<span class="token comment">## \u901A\u7528\u67E5\u8BE2\u76F8\u5173\u914D\u7F6E\u53C2\u6570</span>
<span class="token punctuation">[</span><span class="token table class-name">query</span><span class="token punctuation">]</span>
<span class="token comment">## \u67E5\u8BE2\u8BF7\u6C42\u6700\u5927\u5904\u7406\u5E76\u53D1\u6570</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1Aruntime.GOMAXPROCS(-1) * 2</span>
<span class="token key property">query-concurrency</span> <span class="token punctuation">=</span> <span class="token number">16</span>
<span class="token comment">## \u67E5\u8BE2\u5904\u7406\u534F\u7A0B\u7A7A\u95F2\u65F6\u95F4\uFF0C\u8D85\u8FC7\u7A7A\u95F2\u65F6\u95F4\u534F\u7A0B\u5C06\u88AB\u56DE\u6536</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A5s</span>
<span class="token key property">idle-timeout</span> <span class="token punctuation">=</span> <span class="token string">&quot;5s&quot;</span>
<span class="token comment">## \u67E5\u8BE2\u8D85\u65F6\u65F6\u95F4</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A5s</span>
<span class="token key property">timeout</span> <span class="token punctuation">=</span> <span class="token string">&quot;5s&quot;</span>

<span class="token comment">## Storage \u76F8\u5173\u914D\u7F6E\u53C2\u6570</span>
<span class="token punctuation">[</span><span class="token table class-name">storage</span><span class="token punctuation">]</span>
<span class="token comment">## Storage \u8282\u70B9\u96C6\u7FA4\u5185\u552F\u4E00\u6807\u8BC6\uFF0C\u5FC5\u987B\u786E\u4FDD\u5176\u5728\u5F53\u524D\u5B58\u50A8\u96C6\u7FA4\u5185\u662F\u552F\u4E00\u7684</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A1</span>
<span class="token key property">indicator</span> <span class="token punctuation">=</span> <span class="token number">1</span>
<span class="token comment">## \bTTL \u4EFB\u52A1\u5904\u7406\u95F4\u9694\u65F6\u95F4</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A24h</span>
<span class="token key property">ttl-task-interval</span> <span class="token punctuation">=</span> <span class="token string">&quot;24h0m0s&quot;</span>
<span class="token comment">## Broker \u5BF9\u5E94\u7684 HTTP \u670D\u52A1\u5730\u5740\uFF0C\u7528\u4E8E Storage \u5B8C\u6210\u96C6\u7FA4\u81EA\u6CE8\u518C</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1Ahttp://localhost:9000</span>
<span class="token key property">broker-endpoint</span> <span class="token punctuation">=</span> <span class="token string">&quot;http://localhost:9000&quot;</span>

<span class="token comment">## Storage HTTP Server \u76F8\u5173\u914D\u7F6E\u53C2\u6570</span>
<span class="token punctuation">[</span><span class="token table class-name">storage.http</span><span class="token punctuation">]</span>
<span class="token comment">## HTTP Server \u76D1\u542C\u7AEF\u53E3</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A2892</span>
<span class="token key property">port</span> <span class="token punctuation">=</span> <span class="token number">2892</span>
<span class="token comment">## \u6700\u5927\u8FDE\u63A5\u7A7A\u95F2\u65F6\u95F4</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A2m</span>
<span class="token key property">idle-timeout</span> <span class="token punctuation">=</span> <span class="token string">&quot;2m0s&quot;</span>
<span class="token comment">## \u5199\u8BF7\u6C42\u54CD\u5E94\u8D85\u65F6\u65F6\u95F4</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A5s</span>
<span class="token key property">write-timeout</span> <span class="token punctuation">=</span> <span class="token string">&quot;5s&quot;</span>	
<span class="token comment">## \u8BFB\u8BF7\u6C42\u8D85\u65F6\u65F6\u95F4</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A5s</span>
<span class="token key property">read-timeout</span> <span class="token punctuation">=</span> <span class="token string">&quot;5s&quot;</span>

<span class="token comment">## Broker GRPC \u76F8\u5173\u914D\u7F6E\u53C2\u6570</span>
<span class="token punctuation">[</span><span class="token table class-name">storage.grpc</span><span class="token punctuation">]</span>
<span class="token comment">## GRPC \u76D1\u63A7\u7AEF\u53E3</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A2891</span>
<span class="token key property">port</span> <span class="token punctuation">=</span> <span class="token number">2891</span>
<span class="token comment">## GRPC \u6700\u5927\u5E76\u53D1 Streams\uFF0C\u5EFA\u8BAE\u8BE5\u53C2\u6570\u8BBE\u7F6E\u4E00\u4E2A\u6BD4\u8F83\u5927\u7684\u503C</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1Aruntime.GOMAXPROCS(-1) * 2</span>
<span class="token key property">max-concurrent-streams</span> <span class="token punctuation">=</span> <span class="token number">16</span>
<span class="token comment">## \u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A3s</span>
<span class="token key property">connect-timeout</span> <span class="token punctuation">=</span> <span class="token string">&quot;3s&quot;</span>

<span class="token comment">## Storage Write Ahead Log \u76F8\u5173\u914D\u7F6E\u53C2\u6570</span>
<span class="token punctuation">[</span><span class="token table class-name">storage.wal</span><span class="token punctuation">]</span>
<span class="token comment">## Write Ahead log \u5B58\u50A8\u76EE\u5F55</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A/tmp/lindb/storage/wal</span>
<span class="token key property">dir</span> <span class="token punctuation">=</span> <span class="token string">&quot;/tmp/lindb/storage/wal&quot;</span>
<span class="token comment">## \u5355\u4E2A WAL \u65E5\u5FD7\u6587\u4EF6\u7684\u5927\u5C0F\uFF0C\u53D6\u503C\u8303\u56F4\u4E3A [1MB, 1GB]</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A128 MiB</span>
<span class="token key property">data-size-limit</span> <span class="token punctuation">=</span> <span class="token string">&quot;500 MiB&quot;</span> 
<span class="token comment">## \u5904\u7406\u8FC7\u671F\u65E5\u5FD7\u95F4\u9694\u65F6\u95F4</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A1m</span>
<span class="token key property">remove-task-interval</span> <span class="token punctuation">=</span> <span class="token string">&quot;1m0s&quot;</span>

<span class="token comment">## Storage TSDB \u76F8\u5173\u914D\u7F6E\u53C2\u6570</span>
<span class="token punctuation">[</span><span class="token table class-name">storage.tsdb</span><span class="token punctuation">]</span>
<span class="token comment">## TSDB \u5B58\u50A8\u76EE\u5F55</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A/tmp/lindb/storage/data</span>
<span class="token key property">dir</span> <span class="token punctuation">=</span> <span class="token string">&quot;/tmp/lindb/storage/data&quot;</span>

<span class="token comment">## \u5237\u65B0\u4EFB\u52A1\u76F8\u5173\u53C2\u6570</span>
<span class="token comment">## </span>
<span class="token comment">## Memory Database \u6700\u5927\u5185\u5B58\u4F7F\u7528\u5927\u5C0F\uFF0C\u8D85\u8FC7\u8BE5\u5927\u5C0F\u4E4B\u540E\u6570\u636E\u88AB\u5237\u65B0\uFF0C\u8BBE\u7F6E\u592A\u5927\u4F1A\u5F71\u54CD\u67E5\u8BE2\u6027\u80FD</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A500 MiB</span>
<span class="token key property">max-memdb-size</span> <span class="token punctuation">=</span> <span class="token string">&quot;500 MiB&quot;</span>
<span class="token comment">## Memory Database \u521B\u5EFA\u4E4B\u540E\u591A\u4E45\u5176\u5185\u90E8\u7684\u6570\u636E\u9700\u8981\u88AB\u5237\u65B0</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A30min</span>
<span class="token key property">mutable-memdb-ttl</span> <span class="token punctuation">=</span> <span class="token string">&quot;30m0s&quot;</span>
<span class="token comment">## \u8D85\u8FC7\u5F53\u524D\u7CFB\u7EDF\u5185\u5B58\u767E\u5206\u4E4B\u591A\u5C11\u89E6\u53D1\u5237\u65B0\u64CD\u4F5C\uFF0C\u53D6\u503C\u8303\u56F4[0~1]</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A0.75</span>
<span class="token key property">max-mem-usage-before-flush</span> <span class="token punctuation">=</span> <span class="token number">0.75</span>
<span class="token comment">## \u4F4E\u4E8E\u524D\u7CFB\u7EDF\u5185\u5B58\u767E\u5206\u4E4B\u591A\u5C11\u4E0D\u4F1A\u89E6\u53D1\u5237\u65B0\u64CD\u4F5C\uFF0C\u53D6\u503C\u8303\u56F4[0~1]</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A0.60</span>
<span class="token key property">target-mem-usage-after-flush</span> <span class="token punctuation">=</span> <span class="token number">0.60</span>
<span class="token comment">## \u6570\u636E\u5237\u65B0\u5E76\u53D1\u6570</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1ACeil(runtime.GOMAXPROCS(-1) / 2)</span>
<span class="token key property">flush-concurrency</span> <span class="token punctuation">=</span> <span class="token number">2</span>

<span class="token comment">## \u5355\u6307\u6807\u4E0B\u76F8\u5173\u9650\u5236\u53C2\u6570</span>
<span class="token comment">## </span>
<span class="token comment">## \u5355\u4E2A Metric \u4E0B\u6700\u5927\u7684 Series \u6570</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A200000</span>
<span class="token key property">max-seriesIDs</span> <span class="token punctuation">=</span> <span class="token number">200000</span>
<span class="token comment">## \u5355\u4E2A Metric \u4E0B\u6700\u5927\u7684 Tag \u6570</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A23</span>
<span class="token key property">max-tagKeys</span> <span class="token punctuation">=</span> <span class="token number">32</span>

<span class="token comment">## \u81EA\u76D1\u63A7\u76F8\u5173\u914D\u7F6E\u53C2\u6570</span>
<span class="token punctuation">[</span><span class="token table class-name">monitor</span><span class="token punctuation">]</span>
<span class="token comment">## \u901A\u8FC7 HTTP \u65B9\u5F0F\u4E0A\u62A5\u6307\u6807\u8D85\u65F6\u65F6\u95F4</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A3s</span>
<span class="token key property">push-timeout</span> <span class="token punctuation">=</span> <span class="token string">&quot;3s&quot;</span>
<span class="token comment">## Default: 10s</span>
<span class="token comment">## \u76D1\u63A7\u6570\u636E (cpu/memory/disk/process/go runtime\u7B49) \u91C7\u96C6\u4E0A\u62A5\u95F4\u9694\uFF0C\u8BBE\u7F6E\u4E3A 0 \u65F6\u4E0D\u4E0A\u62A5\u76D1\u63A7\u6570\u636E</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A10s</span>
<span class="token key property">report-interval</span> <span class="token punctuation">=</span> <span class="token string">&quot;10s&quot;</span>
<span class="token comment">## \u76D1\u63A7\u6307\u6807\u4E0A\u62A5\u5730\u5740(Broker\u5199\u5165\u5730\u5740)</span>
<span class="token key property">url</span> <span class="token punctuation">=</span> <span class="token string">&quot;http://127.0.0.1:9000/api/flat/write?db=_internal&quot;</span>

<span class="token comment">## \u65E5\u5FD7\u76F8\u5173\u914D\u7F6E\u53C2\u6570</span>
<span class="token punctuation">[</span><span class="token table class-name">logging</span><span class="token punctuation">]</span>
<span class="token comment">## \u65E5\u5FD7\u5B58\u50A8\u76EE\u5F55</span>
<span class="token key property">dir</span> <span class="token punctuation">=</span> <span class="token string">&quot;/tmp/lindb/storage&quot;</span>
<span class="token comment">## \u65E5\u5FD7\u7EA7\u522B\uFF0C\u5BF9\u5E94\u7684\u53C2\u6570\u503C\uFF1Aerror/warn/info/debug</span>
<span class="token key property">level</span> <span class="token punctuation">=</span> <span class="token string">&quot;info&quot;</span>
<span class="token comment">## \u5355\u4E2A\u65E5\u5FD7\u6587\u4EF6\u5927\u5C0F</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A100 MiB.</span>
<span class="token key property">maxsize</span> <span class="token punctuation">=</span> <span class="token string">&quot;100 MiB&quot;</span>
<span class="token comment">## \u4FDD\u7559\u591A\u5C11\u4E2A\u65E7\u65E5\u5FD7\u6587\u4EF6</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A3</span>
<span class="token key property">maxbackups</span> <span class="token punctuation">=</span> <span class="token number">3</span>
<span class="token comment">## \u4FDD\u7559\u591A\u5C11\u5929\u4EE5\u524D\u7684\u65E5\u5FD7\u6587\u4EF6\uFF0C\u5355\u4F4D\uFF1A\u5929</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A7</span>
<span class="token key property">maxage</span> <span class="token punctuation">=</span> <span class="token number">7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="standalone" tabindex="-1"><a class="header-anchor" href="#standalone" aria-hidden="true">#</a> Standalone</h2>`,2),C=s("\u53EF\u4EE5\u5728 "),x={href:"https://github.com/lindb/lindb/tree/main/config/standalone.toml.example",target:"_blank",rel:"noopener noreferrer"},D=s("config/standalone.toml.example"),P=s(" \u627E\u5230\u9ED8\u8BA4\u503C\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u91CD\u547D\u540D\u4E3A standalone.toml \u5373\u53EF\u4F5C\u4E3A Standalone \u542F\u52A8\u53C2\u6570\u6587\u4EF6\u3002Standalone \u4F5C\u4E3A LinDB \u4E00\u79CD\u7279\u6B8A\u7684\u5355\u673A\u6A21\u5F0F\uFF0C\u5176\u5185\u90E8\u96C6\u6210\u4E86 Broker/Storage/ETCD \u7B49\u7EC4\u4EF6\uFF0C\u5176\u4E3A "),M=n("a",{href:"#broker"},"Broker",-1),E=s("/"),w=n("a",{href:"#storage"},"Storage",-1),G=s(" \u53C2\u6570\u5982\u4E0A\uFF0C\u8FD9\u91CC\u53EA\u4ECB\u7ECD\u4E0D\u5305\u542B Broker/Storage \u8FD9\u90E8\u5206\u53C2\u6570\u8BF4\u660E\u3002"),R=t(`<div class="language-toml ext-toml line-numbers-mode"><pre class="language-toml"><code><span class="token comment">## \u5185\u5D4C ETCD \u914D\u7F6E\u53C2\u8003</span>
<span class="token punctuation">[</span><span class="token table class-name">etcd</span><span class="token punctuation">]</span>
<span class="token comment">## ETCD \u6570\u636E\u5B58\u50A8\u76EE\u5F55</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1A/tmp/lindb/coordinator</span>
<span class="token key property">dir</span> <span class="token punctuation">=</span> <span class="token string">&quot;/tmp/lindb/coordinator&quot;</span>
<span class="token comment">## ETCD \u5BF9\u5916\u63D0\u4F9B\u670D\u52A1\u5730\u5740</span>
<span class="token comment">## \u9ED8\u8BA4\u503C\uFF1Ahttp://localhost:2379</span>
<span class="token key property">url</span> <span class="token punctuation">=</span> <span class="token string">&quot;http://localhost:2379&quot;</span>

<span class="token comment">## \u53C2\u8003 Broker/Storage \u534F\u8C03\u76F8\u5173\u5BF9\u5E94\u53C2\u6570</span>
<span class="token punctuation">[</span><span class="token table class-name">coordinator</span><span class="token punctuation">]</span>

<span class="token comment">## \u53C2\u8003 Broker/Storage \u67E5\u8BE2\u76F8\u5173\u5BF9\u5E94\u53C2\u6570</span>
<span class="token punctuation">[</span><span class="token table class-name">query</span><span class="token punctuation">]</span>

<span class="token punctuation">[</span><span class="token table class-name">broker</span><span class="token punctuation">]</span>

<span class="token comment">## \u53C2\u8003 Broker Ingestion \u76F8\u5173\u5BF9\u5E94\u53C2\u6570</span>
<span class="token punctuation">[</span><span class="token table class-name">broker.ingestion</span><span class="token punctuation">]</span>

<span class="token comment">## \u53C2\u8003 Broker Write \u76F8\u5173\u5BF9\u5E94\u53C2\u6570</span>
<span class="token punctuation">[</span><span class="token table class-name">broker.write</span><span class="token punctuation">]</span>

<span class="token comment">## \u53C2\u8003 Broker HTTP \u76F8\u5173\u5BF9\u5E94\u53C2\u6570</span>
<span class="token punctuation">[</span><span class="token table class-name">broker.http</span><span class="token punctuation">]</span>
k
<span class="token comment">## \u53C2\u8003 Broker GRPC \u76F8\u5173\u5BF9\u5E94\u53C2\u6570</span>
<span class="token punctuation">[</span><span class="token table class-name">broker.grpc</span><span class="token punctuation">]</span>

<span class="token comment">## \u53C2\u8003 Storage \u76F8\u5173\u5BF9\u5E94\u53C2\u6570</span>
<span class="token punctuation">[</span><span class="token table class-name">storage</span><span class="token punctuation">]</span>

<span class="token comment">## \u53C2\u8003 Storage HTTP \u76F8\u5173\u5BF9\u5E94\u53C2\u6570</span>
<span class="token punctuation">[</span><span class="token table class-name">storage.http</span><span class="token punctuation">]</span>

<span class="token comment">## \u53C2\u8003 Storage GRPC \u76F8\u5173\u5BF9\u5E94\u53C2\u6570</span>
<span class="token punctuation">[</span><span class="token table class-name">storage.grpc</span><span class="token punctuation">]</span>

<span class="token comment">## \u53C2\u8003 Storage WAL \u76F8\u5173\u5BF9\u5E94\u53C2\u6570</span>
<span class="token punctuation">[</span><span class="token table class-name">storage.wal</span><span class="token punctuation">]</span>

<span class="token comment">## \u53C2\u8003 Storage TSDB \u76F8\u5173\u5BF9\u5E94\u53C2\u6570</span>
<span class="token punctuation">[</span><span class="token table class-name">storage.tsdb</span><span class="token punctuation">]</span>

<span class="token comment">## \u65E5\u5FD7\u76F8\u5173\u7684\u914D\u7F6E\uFF0C\u53C2\u8003 Broker/Storage \u5BF9\u5E94\u7684\u914D\u7F6E</span>
<span class="token punctuation">[</span><span class="token table class-name">logging</span><span class="token punctuation">]</span>

<span class="token comment">## \u81EA\u76D1\u63A7\u76F8\u5173\u7684\u914D\u7F6E\uFF0C\u53C2\u8003 Broker/Storage \u5BF9\u5E94\u7684\u914D\u7F6E</span>
<span class="token punctuation">[</span><span class="token table class-name">monitor</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function O(A,H){const a=p("ExternalLinkIcon");return i(),o(c,null,[m,u,d,v,k,n("p",null,[b,n("a",y,[g,e(a)]),q]),h,n("p",null,[_,n("a",f,[B,e(a)]),S]),T,n("p",null,[C,n("a",x,[D,e(a)]),P,M,E,w,G]),R],64)}var N=l(r,[["render",O],["__file","configuration.html.vue"]]);export{N as default};
