import{_ as d}from"./forward_grouping.6fa852dd.js";import{_ as r,r as s,o as n,c as i,d as e,a,F as c,b as h,e as o}from"./app.1245c310.js";const l={},u=h(`<h1 id="index" tabindex="-1"><a class="header-anchor" href="#index" aria-hidden="true">#</a> index</h1><p>The main function is to facilitate the <code>Filtering/Grouping</code> operation of <code>Tags</code> under a <code>Metric</code>, and also to improve the overall query efficiency.</p><p>The entire index is an inverted structure, similar to <code>Lucene</code>, but it is simpler, because there is no need to do word segmentation in scenarios such as time series.</p><h2 id="structure" tabindex="-1"><a class="header-anchor" href="#structure" aria-hidden="true">#</a> structure</h2><h3 id="metadata" tabindex="-1"><a class="header-anchor" href="#metadata" aria-hidden="true">#</a> Metadata</h3><p>It mainly stores <code>string-&gt;uint32</code> data conversion, similar to the classic <code>OpenTSDB</code> design idea.</p><h4 id="namespace" tabindex="-1"><a class="header-anchor" href="#namespace" aria-hidden="true">#</a> Namespace</h4><table><thead><tr><th>Key</th><th>Value</th></tr></thead><tbody><tr><td>Namespace(string value)</td><td>Namespace ID(uint32)</td></tr></tbody></table><h4 id="metrics" tabindex="-1"><a class="header-anchor" href="#metrics" aria-hidden="true">#</a> Metrics</h4><table><thead><tr><th>Key</th><th>Value</th></tr></thead><tbody><tr><td>Namespace ID + Metric Name(string value)</td><td>Metric ID(uint32)</td></tr></tbody></table><h4 id="field" tabindex="-1"><a class="header-anchor" href="#field" aria-hidden="true">#</a> Field</h4><table><thead><tr><th>Key</th><th>Value</th></tr></thead><tbody><tr><td>Metric ID</td><td>Field List</td></tr></tbody></table><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">The structure of a single Field is as follows</span><span class="token punctuation">:</span>
<span class="token key atrule">Field ID</span><span class="token punctuation">:</span> It is unique under this metric<span class="token punctuation">,</span> and this ID is used when storing data
<span class="token key atrule">Field Name</span><span class="token punctuation">:</span> field name
<span class="token key atrule">Field Type</span><span class="token punctuation">:</span> Field type<span class="token punctuation">,</span> such as Sum/Min/Max<span class="token punctuation">,</span> etc.
</code></pre></div><h4 id="tag-key" tabindex="-1"><a class="header-anchor" href="#tag-key" aria-hidden="true">#</a> Tag Key</h4><table><thead><tr><th>Key</th><th>Value</th></tr></thead><tbody><tr><td>Metric ID</td><td>Tag Key List</td></tr></tbody></table><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">The structure of a single Tag Key is as follows</span><span class="token punctuation">:</span>
<span class="token key atrule">Tag Key ID</span><span class="token punctuation">:</span> It is unique under this Database<span class="token punctuation">,</span> and this ID is used when storing Index
<span class="token key atrule">Tag Key</span> <span class="token punctuation">:</span> Tag Key(string value)
</code></pre></div><h4 id="tag-value" tabindex="-1"><a class="header-anchor" href="#tag-value" aria-hidden="true">#</a> Tag Value</h4><table><thead><tr><th>Key</th><th>Value</th></tr></thead><tbody><tr><td>Tag Key ID</td><td>Tag Values \u200B\u200BTrie</td></tr></tbody></table><p>Among them, <code>Tag Value</code> stores all the values \u200B\u200Bof <code>Tag Value</code> under the <code>Tag Key</code> in the <code>Trie</code> structure, and generates a unique value under the <code>Tag Key</code> for each <code>Tag Value</code> through the structure of <code>Tag</code> <code>Tag Value ID</code>.</p><h3 id="index-1" tabindex="-1"><a class="header-anchor" href="#index-1" aria-hidden="true">#</a> Index</h3><p>Since the operation of <code>string-&gt;uint32</code> has been done in <code>Metadata</code>, it is actually stored by numbers in <code>Index</code>, which further reduces the storage space.</p><h4 id="forward" tabindex="-1"><a class="header-anchor" href="#forward" aria-hidden="true">#</a> Forward</h4><table><thead><tr><th>Key</th><th>Value</th></tr></thead><tbody><tr><td>Series IDs(Roaring Bitmap)</td><td>Tag Value IDs(Array)</td></tr></tbody></table><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>The Forward Index is different from the traditional index. The traditional index will store each piece of written data as a forward record. The corresponding time series are the corresponding Tags of the Time Series, and these Tags pass through the string- After the &gt;uint32 conversion, it becomes a string of data, so these data can be compressed into a Forward Index.</p></div><h4 id="inverted" tabindex="-1"><a class="header-anchor" href="#inverted" aria-hidden="true">#</a> Inverted</h4><table><thead><tr><th>Key</th><th>Value</th></tr></thead><tbody><tr><td>Tag Value ID</td><td>Series IDs(Roaring Bitmap)</td></tr></tbody></table><h2 id="inquire" tabindex="-1"><a class="header-anchor" href="#inquire" aria-hidden="true">#</a> Inquire</h2><p>The following is an example to illustrate <code>Filtering/Grouping</code>.</p><h3 id="filtering" tabindex="-1"><a class="header-anchor" href="#filtering" aria-hidden="true">#</a> Filtering</h3><p>The following table is the forward data corresponding to the <code>Tags</code> under a <code>Metric(cpu)</code>, there are <code>3</code> <code>Tags</code> which are <code>host/cpu/type</code></p><table><thead><tr><th>Tags</th><th>Series ID</th></tr></thead><tbody><tr><td>host=dev cpu=0 type=SCHED</td><td>1</td></tr><tr><td>host=dev cpu=1 type=SCHED</td><td>2</td></tr><tr><td>host=dev cpu=0 type=TIMER</td><td>3</td></tr><tr><td>host=dev cpu=1 type=TIMER</td><td>4</td></tr><tr><td>host=test cpu=0 type=SCHED</td><td>5</td></tr><tr><td>host=test cpu=1 type=SCHED</td><td>6</td></tr><tr><td>host=test cpu=2 type=SCHED</td><td>7</td></tr><tr><td>host=test cpu=3 type=SCHED</td><td>8</td></tr><tr><td>host=test cpu=0 type=TIMER</td><td>9</td></tr><tr><td>host=test cpu=1 type=TIMER</td><td>10</td></tr><tr><td>host=test cpu=2 type=TIMER</td><td>11</td></tr><tr><td>host=test cpu=3 type=TIMER</td><td>12</td></tr></tbody></table><p>If the data in the above table is inverted, the inverted structure of the following table is formed, and the <code>Posting List</code> is directly stored in the <code>Roaring Bitmap</code>.</p><table><thead><tr><th>Tag</th><th>Posting List</th></tr></thead><tbody><tr><td>host=dev</td><td>1, 2, 3, 4</td></tr><tr><td>host=test</td><td>5, 6, 7, 8, 9, 10, 11, 12</td></tr><tr><td>cpu=0</td><td>1, 3, 5, 9</td></tr><tr><td>cpu=1</td><td>2, 4, 6, 10</td></tr><tr><td>cpu=2</td><td>7, 11</td></tr><tr><td>cpu=3</td><td>8, 12</td></tr><tr><td>type=SCHED</td><td>1, 2, 5, 6, 7, 8</td></tr><tr><td>type=TIMER</td><td>3, 4, 9, 10, 11, 12</td></tr></tbody></table><p>At the same time, the <code>Tag Values</code> under <code>Tag</code> is stored in the form of a prefix tree to facilitate filtering operations on <code>Tag Value</code>, such as prefix filtering operations such as <code>host like dev*</code>. After adding the above inverted structure, it is very convenient for the conditional filtering operation. For example, the operation of multiple conditions only needs to do ** and <strong>/</strong> or ** operations on multiple <code>Posting List</code>, basically you can Filtering operations such as <code>And/Or/Not</code> that satisfy multiple daily conditions.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>E.g:</p><ul><li>Case 1: host = test or host = dev, which is the &quot;and&quot; operation of two Posting lists</li><li>Case 1: host != test, this is to find the Series IDs below the host and the Series IDs of host = test, and get an AntNot(Difference) operation for these two Posting lists.</li></ul></div><p>At the same time, based on this inverted structure, it may support some <code>Metadata</code> queries, such as wanting to know what <code>Value</code> is under the <code>Tag</code> of <code>host</code>.</p><h3 id="grouping" tabindex="-1"><a class="header-anchor" href="#grouping" aria-hidden="true">#</a> Grouping</h3><p>So, if the forward data is not stored, how to solve the <code>Group By</code> operation by pressing one or several <code>Tag Key</code>? If we need to segment the <code>Tag Value</code> like <code>Lucene</code>, it is basically impossible to deduce the forward data through the reverse, but in a scenario like <code>TSDB</code>, we do not need to <code>Tag Value</code> \`Do word segmentation, so it is still possible to reverse the forward data through the reverse data.</p><p>As shown in the figure below, the forward data of a single <code>Tag Key</code> has been restored to <code>Tag Key/Value =&gt; Series IDs</code> for easy understanding.</p><p><img src="`+d+'" alt="index forward"></p><p>Let&#39;s take the previous example to illustrate how to get the data of <code>Group By host, cpu</code> <code>2</code> <code>Tag Key</code>, as shown in the figure above, in fact, as you can see from the figure, the whole operation is a merge Operation, there are <code>2</code> methods.</p><ol><li>Because each data is sorted, it can be sorted by <code>2</code> heaps, that is, <code>host</code> and <code>cpu</code> are placed in one heap respectively, and each time a value is taken from each heap, If the values \u200B\u200Bare the same, it means that <code>2</code> is satisfied. For example, <code>host=dev, cpu=0</code> corresponding to <code>TSID = 0</code>, you can find the corresponding <code>Group By</code> data, and so on, after traversing <code>2</code> The data in each heap can be finally combined. This method will occupy <code>CPU</code> and occupy less memory;</li><li>Use something like <code>Counting Sort</code>, that is, pre-allocate a fixed-size array, and then put <code>Series IDs</code> in the corresponding array subscript, as follows: <code>1</code> also includes <code>2</code> tags The data of Key<code>is what we want, and so on, you can get all the data,</code>CPU` occupies less, but wastes memory;</li></ol><p>Combined with the structure of <code>Roaring Bitmap High/Low Container</code>, a <code>Container</code> can have up to <code>65536</code> <code>uint16</code> values, so the memory usage can also be controlled, so we use <code>Counting Sort</code> method to The corresponding forward data is derived, and the overall process can be processed in parallel by <code>Container</code>.</p><h4 id="references" tabindex="-1"><a class="header-anchor" href="#references" aria-hidden="true">#</a> References</h4>',44),p={href:"http://roaringbitmap.org/",target:"_blank",rel:"noopener noreferrer"},g=o("RoaringBitmap"),f={href:"https://akumuli.org/akumuli/2017/11/17/indexing/",target:"_blank",rel:"noopener noreferrer"},y=o("Akumuli Inverted Index"),m={href:"https://en.wikipedia.org/wiki/Counting_sort",target:"_blank",rel:"noopener noreferrer"},b=o("Counting Sort"),T={href:"https://en.wikipedia.org/wiki/Trie",target:"_blank",rel:"noopener noreferrer"},v=o("Trie"),w={href:"https://en.wikipedia.org/wiki/Succinct_data_structure",target:"_blank",rel:"noopener noreferrer"},k=o("Succinct Data Structure");function x(_,I){const t=s("ExternalLinkIcon");return n(),i(c,null,[u,e("ol",null,[e("li",null,[e("a",p,[g,a(t)])]),e("li",null,[e("a",f,[y,a(t)])]),e("li",null,[e("a",m,[b,a(t)])]),e("li",null,[e("a",T,[v,a(t)])]),e("li",null,[e("a",w,[k,a(t)])])])],64)}var V=r(l,[["render",x],["__file","index_.html.vue"]]);export{V as default};
