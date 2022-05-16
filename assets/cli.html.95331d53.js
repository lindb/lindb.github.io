import{_ as p,r as e,o,c as t,d as r,a as l,w as c,F as k,b as a,e as s}from"./app.1245c310.js";const i={},u=a(`<h1 id="cli" tabindex="-1"><a class="header-anchor" href="#cli" aria-hidden="true">#</a> CLI</h1><p>LinDB Command-Line Client\uFF08\u4EE5\u4E0B\u7B80\u79F0 cli\uFF09\u662F LinDB \u81EA\u5E26\u7684\u547D\u4EE4\u884C\u5DE5\u5177\uFF0C\u7528\u4E8E\u7BA1\u7406\u67E5\u8BE2\u96C6\u7FA4\u5185\u5404\u7EC4\u4EF6\u72B6\u6001\u53CA\u6570\u636E\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>./lind-cli -help
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code>Usage of ./lind-cli:
  -endpoint string
        Broker HTTP Endpoint <span class="token punctuation">(</span>default <span class="token string">&quot;http://localhost:9000&quot;</span><span class="token punctuation">)</span>
</code></pre></div>`,4),d=s("cli \u76EE\u524D\u53EA\u63D0\u4F9B\u4E86\u4E00\u4E2A\u547D\u4EE4\u884C\u53C2\u6570\uFF0C\u5373\u5BF9\u5E94 Broker \u63D0\u4F9B HTTP \u670D\u52A1\u7684\u5730\u5740\uFF0C\u7528\u4E8E\u8FDE\u63A5 Broker \u8282\u70B9\uFF0C\u5E76\u901A\u8FC7 LQL \u6765\u67E5\u8BE2\u76F8\u5173\u72B6\u6001\u53CA\u6570\u636E\u3002\u4E0B\u9762\u4E3E\u51E0\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\uFF0C\u66F4\u591A\u72B6\u6001\u53CA\u6570\u636E\u67E5\u8BE2\u8BF7\u67E5\u770B "),m=s("LQL"),b=s(" \u3002"),h=a(`<div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u53EF\u4EE5\u901A\u8FC7\u4E0A\u4E0B\u65B9\u5411\u5EFA\u5FEB\u901F\u6D4F\u89C8\u5386\u53F2\u6267\u884C\u4E2D\u7684 LQL\u3002</p></div><h5 id="\u542F\u52A8-cli" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8-cli" aria-hidden="true">#</a> \u542F\u52A8 cli</h5><div class="language-bash ext-sh"><pre class="language-bash"><code>./lind-cli
Welcome to the LinDB.
Server version: <span class="token number">0.0</span>.1
lin@localhost:900<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span>
</code></pre></div><h5 id="\u67E5\u770B\u6570\u636E\u5E93\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6570\u636E\u5E93\u5217\u8868" aria-hidden="true">#</a> \u67E5\u770B\u6570\u636E\u5E93\u5217\u8868</h5><div class="language-bash ext-sh"><pre class="language-bash"><code>lin@localhost:900<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> show databases<span class="token punctuation">;</span>
+-----------+
<span class="token operator">|</span> Database  <span class="token operator">|</span>
+-----------+
<span class="token operator">|</span> _internal <span class="token operator">|</span>
+-----------+
<span class="token number">1</span> rows <span class="token keyword">in</span> sets <span class="token punctuation">(</span><span class="token number">4</span>.218862ms<span class="token punctuation">)</span>
</code></pre></div><h5 id="\u67E5\u770B\u6570\u636E\u5E93-schema" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6570\u636E\u5E93-schema" aria-hidden="true">#</a> \u67E5\u770B\u6570\u636E\u5E93 Schema</h5><div class="language-bash ext-sh"><pre class="language-bash"><code>lin@localhost:900<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> show schemas<span class="token punctuation">;</span>
+-----------+----------------+------------------------------------------------------------------------+
<span class="token operator">|</span> Name      <span class="token operator">|</span> Storage        <span class="token operator">|</span> Desc                                                                   <span class="token operator">|</span>
+-----------+----------------+------------------------------------------------------------------------+
<span class="token operator">|</span> _internal <span class="token operator">|</span> /lindb-cluster <span class="token operator">|</span> create database _internal with shard <span class="token number">1</span>, replica <span class="token number">1</span>, intervals <span class="token punctuation">[</span>10s-<span class="token operator">&gt;</span>1M<span class="token punctuation">]</span> <span class="token operator">|</span>
+-----------+----------------+------------------------------------------------------------------------+
<span class="token number">1</span> rows <span class="token keyword">in</span> sets <span class="token punctuation">(</span><span class="token number">7</span>.747045ms<span class="token punctuation">)</span>
</code></pre></div><h5 id="\u96C6\u7FA4\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#\u96C6\u7FA4\u72B6\u6001" aria-hidden="true">#</a> \u96C6\u7FA4\u72B6\u6001</h5><ul><li>\u67E5\u770B\u5F53\u524D Master \u72B6\u6001</li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code>lin@localhost:900<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> show master<span class="token punctuation">;</span>
+-------------+---------------------+
<span class="token operator">|</span> Desc        <span class="token operator">|</span> Value               <span class="token operator">|</span>
+-------------+---------------------+
<span class="token operator">|</span> Elect Time  <span class="token operator">|</span> <span class="token number">2022</span>-05-15 <span class="token number">16</span>:52:48 <span class="token operator">|</span>
<span class="token operator">|</span> Online Time <span class="token operator">|</span> <span class="token number">2022</span>-05-15 <span class="token number">16</span>:52:48 <span class="token operator">|</span>
<span class="token operator">|</span> Host IP     <span class="token operator">|</span> <span class="token number">192.168</span>.0.112       <span class="token operator">|</span>
<span class="token operator">|</span> Host Name   <span class="token operator">|</span> woker0              <span class="token operator">|</span>
<span class="token operator">|</span> HTTP Port   <span class="token operator">|</span> <span class="token number">9000</span>                <span class="token operator">|</span>
<span class="token operator">|</span> GRPC Port   <span class="token operator">|</span> <span class="token number">9001</span>                <span class="token operator">|</span>
+-------------+---------------------+
<span class="token number">1</span> rows <span class="token keyword">in</span> sets <span class="token punctuation">(</span><span class="token number">4</span>.675873ms<span class="token punctuation">)</span>
</code></pre></div><ul><li>\u67E5\u770B\u5F53\u524D Master \u72B6\u6001</li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code>lin@localhost:900<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> show broker alive<span class="token punctuation">;</span>
+---------------------+---------------+-----------+-----------------+---------+
<span class="token operator">|</span> Online <span class="token function">time</span>         <span class="token operator">|</span> Host IP       <span class="token operator">|</span> Host Name <span class="token operator">|</span> Port<span class="token punctuation">(</span>HTTP/GRPC<span class="token punctuation">)</span> <span class="token operator">|</span> Version <span class="token operator">|</span>
+---------------------+---------------+-----------+-----------------+---------+
<span class="token operator">|</span> <span class="token number">2022</span>-05-15 <span class="token number">16</span>:52:48 <span class="token operator">|</span> <span class="token number">192.168</span>.0.112 <span class="token operator">|</span> worker0   <span class="token operator">|</span> <span class="token number">9000</span>/9001       <span class="token operator">|</span> <span class="token number">0.0</span>.1   <span class="token operator">|</span>
+---------------------+---------------+-----------+-----------------+---------+
<span class="token number">1</span> rows <span class="token keyword">in</span> sets <span class="token punctuation">(</span><span class="token number">1</span>.38066ms<span class="token punctuation">)</span>
</code></pre></div><h5 id="\u67E5\u8BE2\u6570\u636E\u5E93\u4E2D\u7684\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u6570\u636E\u5E93\u4E2D\u7684\u6570\u636E" aria-hidden="true">#</a> \u67E5\u8BE2\u6570\u636E\u5E93\u4E2D\u7684\u6570\u636E</h5><ul><li>\u5207\u6362\u67E5\u8BE2\u6570\u636E\u5E93</li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code>lin@localhost:900<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> use _internal<span class="token punctuation">;</span>
Database changed<span class="token punctuation">(</span>current:_internal<span class="token punctuation">)</span>
</code></pre></div><ul><li>\u67E5\u770B\u6709\u54EA\u4E9B\u6307\u6807\u540D</li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code>lin@localhost:900<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> show metrics<span class="token punctuation">;</span>
+----------------------------------------------------+
<span class="token operator">|</span> Metric                                             <span class="token operator">|</span>
+----------------------------------------------------+
<span class="token operator">|</span> lindb.broker.database.write                        <span class="token operator">|</span>
<span class="token operator">|</span> lindb.broker.family.write                          <span class="token operator">|</span>
<span class="token operator">|</span> lindb.broker.query                                 <span class="token operator">|</span>
<span class="token operator">|</span>                      <span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>                        <span class="token operator">|</span>
<span class="token operator">|</span> lindb.traffic.tcp                                  <span class="token operator">|</span>
<span class="token operator">|</span> lindb.tsdb.shard                                   <span class="token operator">|</span>
<span class="token operator">|</span> lindb.tsdb.shard.indexdb_flush_duration            <span class="token operator">|</span>
<span class="token operator">|</span> lindb.tsdb.shard.memdb_flush_duration              <span class="token operator">|</span>
+----------------------------------------------------+
<span class="token number">50</span> rows <span class="token keyword">in</span> sets <span class="token punctuation">(</span><span class="token number">6</span>.495605ms<span class="token punctuation">)</span>
</code></pre></div><ul><li>\u67E5\u770B\u67D0\u4E2A\u6307\u6807\u540D\u4E0B\u6709\u54EA\u4E9B Field</li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code>lin@localhost:900<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> show fields from lindb.tsdb.shard<span class="token punctuation">;</span>
+-----------------------------+-------+
<span class="token operator">|</span> Name                        <span class="token operator">|</span> Type  <span class="token operator">|</span>
+-----------------------------+-------+
<span class="token operator">|</span> write_metrics_failures      <span class="token operator">|</span> <span class="token function">sum</span>   <span class="token operator">|</span>
<span class="token operator">|</span> active_memdbs               <span class="token operator">|</span> gauge <span class="token operator">|</span>
<span class="token operator">|</span> lookup_metric_meta_failures <span class="token operator">|</span> <span class="token function">sum</span>   <span class="token operator">|</span>
<span class="token operator">|</span> write_metrics               <span class="token operator">|</span> <span class="token function">sum</span>   <span class="token operator">|</span>
<span class="token operator">|</span> write_batches               <span class="token operator">|</span> <span class="token function">sum</span>   <span class="token operator">|</span>
<span class="token operator">|</span> write_fields                <span class="token operator">|</span> <span class="token function">sum</span>   <span class="token operator">|</span>
<span class="token operator">|</span> memdb_total_size            <span class="token operator">|</span> gauge <span class="token operator">|</span>
<span class="token operator">|</span> memdb_flush_failures        <span class="token operator">|</span> <span class="token function">sum</span>   <span class="token operator">|</span>
<span class="token operator">|</span> indexdb_flush_failures      <span class="token operator">|</span> <span class="token function">sum</span>   <span class="token operator">|</span>
<span class="token operator">|</span> active_families             <span class="token operator">|</span> gauge <span class="token operator">|</span>
+-----------------------------+-------+
<span class="token number">10</span> rows <span class="token keyword">in</span> sets <span class="token punctuation">(</span><span class="token number">7</span>.448755ms<span class="token punctuation">)</span>
</code></pre></div><ul><li>\u67E5\u770B\u67D0\u4E2A\u6307\u6807\u540D\u4E0B\u6709\u54EA\u4E9B Tag Key</li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code>lin@localhost:900<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> show tag keys from lindb.tsdb.shard<span class="token punctuation">;</span>
+-----------+
<span class="token operator">|</span> Tag Key   <span class="token operator">|</span>
+-----------+
<span class="token operator">|</span> db        <span class="token operator">|</span>
<span class="token operator">|</span> namespace <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token function">node</span>      <span class="token operator">|</span>
<span class="token operator">|</span> role      <span class="token operator">|</span>
<span class="token operator">|</span> shard     <span class="token operator">|</span>
+-----------+
<span class="token number">5</span> rows <span class="token keyword">in</span> sets <span class="token punctuation">(</span><span class="token number">7</span>.065156ms<span class="token punctuation">)</span>
</code></pre></div><ul><li>\u67E5\u770B\u6307\u6807\u540D\u4E0B\u67D0\u4E2A Tag Key \u4E0B\u6709\u54EA\u4E9B Tag Value</li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code>lin@localhost:900<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> show tag values from lindb.tsdb.shard with <span class="token assign-left variable">key</span><span class="token operator">=</span><span class="token string">&#39;db&#39;</span><span class="token punctuation">;</span>
+-----------+
<span class="token operator">|</span> Tag Value <span class="token operator">|</span>
+-----------+
<span class="token operator">|</span> _internal <span class="token operator">|</span>
+-----------+
<span class="token number">1</span> rows <span class="token keyword">in</span> sets <span class="token punctuation">(</span><span class="token number">5</span>.984711ms<span class="token punctuation">)</span>
</code></pre></div><ul><li>\u67E5\u770B\u67D0\u4E2A\u6307\u6807\u4E0B\u7684\u6307\u6807\u6570\u636E</li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code>lin@localhost:900<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> <span class="token keyword">select</span> write_fields from lindb.tsdb.shard where time<span class="token operator">&gt;</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span>-2m group by db,node<span class="token punctuation">;</span>
+-----------+--------------------+---------------------+--------------+
<span class="token operator">|</span> db        <span class="token operator">|</span> <span class="token function">node</span>               <span class="token operator">|</span> timestamp           <span class="token operator">|</span> write_fields <span class="token operator">|</span>
+-----------+--------------------+---------------------+--------------+
<span class="token operator">|</span> _internal <span class="token operator">|</span> <span class="token number">192.168</span>.0.112:2891 <span class="token operator">|</span> <span class="token number">2022</span>-05-15 <span class="token number">17</span>:05:50 <span class="token operator">|</span>         <span class="token number">1061</span> <span class="token operator">|</span>
<span class="token operator">|</span> _internal <span class="token operator">|</span> <span class="token number">192.168</span>.0.112:2891 <span class="token operator">|</span> <span class="token number">2022</span>-05-15 <span class="token number">17</span>:06:00 <span class="token operator">|</span>         <span class="token number">1805</span> <span class="token operator">|</span>
<span class="token operator">|</span> _internal <span class="token operator">|</span> <span class="token number">192.168</span>.0.112:2891 <span class="token operator">|</span> <span class="token number">2022</span>-05-15 <span class="token number">17</span>:06:10 <span class="token operator">|</span>         <span class="token number">1806</span> <span class="token operator">|</span>
<span class="token operator">|</span> _internal <span class="token operator">|</span> <span class="token number">192.168</span>.0.112:2891 <span class="token operator">|</span> <span class="token number">2022</span>-05-15 <span class="token number">17</span>:06:20 <span class="token operator">|</span>         <span class="token number">1805</span> <span class="token operator">|</span>
<span class="token operator">|</span> _internal <span class="token operator">|</span> <span class="token number">192.168</span>.0.112:2891 <span class="token operator">|</span> <span class="token number">2022</span>-05-15 <span class="token number">17</span>:06:30 <span class="token operator">|</span>         <span class="token number">1805</span> <span class="token operator">|</span>
<span class="token operator">|</span> _internal <span class="token operator">|</span> <span class="token number">192.168</span>.0.112:2891 <span class="token operator">|</span> <span class="token number">2022</span>-05-15 <span class="token number">17</span>:06:40 <span class="token operator">|</span>         <span class="token number">1807</span> <span class="token operator">|</span>
<span class="token operator">|</span> _internal <span class="token operator">|</span> <span class="token number">192.168</span>.0.112:2891 <span class="token operator">|</span> <span class="token number">2022</span>-05-15 <span class="token number">17</span>:06:50 <span class="token operator">|</span>         <span class="token number">1807</span> <span class="token operator">|</span>
<span class="token operator">|</span> _internal <span class="token operator">|</span> <span class="token number">192.168</span>.0.112:2891 <span class="token operator">|</span> <span class="token number">2022</span>-05-15 <span class="token number">17</span>:07:00 <span class="token operator">|</span>         <span class="token number">1807</span> <span class="token operator">|</span>
<span class="token operator">|</span> _internal <span class="token operator">|</span> <span class="token number">192.168</span>.0.112:2891 <span class="token operator">|</span> <span class="token number">2022</span>-05-15 <span class="token number">17</span>:07:10 <span class="token operator">|</span>         <span class="token number">1805</span> <span class="token operator">|</span>
<span class="token operator">|</span> _internal <span class="token operator">|</span> <span class="token number">192.168</span>.0.112:2891 <span class="token operator">|</span> <span class="token number">2022</span>-05-15 <span class="token number">17</span>:07:20 <span class="token operator">|</span>         <span class="token number">1806</span> <span class="token operator">|</span>
<span class="token operator">|</span> _internal <span class="token operator">|</span> <span class="token number">192.168</span>.0.112:2891 <span class="token operator">|</span> <span class="token number">2022</span>-05-15 <span class="token number">17</span>:07:30 <span class="token operator">|</span>         <span class="token number">1807</span> <span class="token operator">|</span>
<span class="token operator">|</span> _internal <span class="token operator">|</span> <span class="token number">192.168</span>.0.112:2891 <span class="token operator">|</span> <span class="token number">2022</span>-05-15 <span class="token number">17</span>:07:40 <span class="token operator">|</span>         <span class="token number">1807</span> <span class="token operator">|</span>
<span class="token operator">|</span> _internal <span class="token operator">|</span> <span class="token number">192.168</span>.0.112:2891 <span class="token operator">|</span> <span class="token number">2022</span>-05-15 <span class="token number">17</span>:07:50 <span class="token operator">|</span>         <span class="token number">1811</span> <span class="token operator">|</span>
+-----------+--------------------+---------------------+--------------+
<span class="token number">1</span> rows <span class="token keyword">in</span> sets <span class="token punctuation">(</span><span class="token number">8</span>.235714ms<span class="token punctuation">)</span>
</code></pre></div>`,25);function g(_,f){const n=e("RouterLink");return o(),t(k,null,[u,r("p",null,[d,l(n,{to:"/zh/guide/lql.html"},{default:c(()=>[m]),_:1}),b]),h],64)}var v=p(i,[["render",g],["__file","cli.html.vue"]]);export{v as default};
