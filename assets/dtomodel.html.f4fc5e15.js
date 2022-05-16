import{_ as n,b as s}from"./app.1245c310.js";const a={},e=s(`<h1 id="dto-model" tabindex="-1"><a class="header-anchor" href="#dto-model" aria-hidden="true">#</a> DTO Model</h1><div class="language-protobuf ext-protobuf line-numbers-mode"><pre class="language-protobuf"><code>
<span class="token keyword">message</span> <span class="token class-name">MetricList</span> <span class="token punctuation">{</span>
    <span class="token keyword">repeated</span> <span class="token positional-class-name class-name">Metric</span> metrics <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">Metric</span> <span class="token punctuation">{</span>
    <span class="token builtin">string</span> namespace <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token builtin">string</span> name <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token builtin">int64</span> timestamp <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token keyword">repeated</span> <span class="token positional-class-name class-name">KeyValue</span> tags <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
    <span class="token comment">// xxhash.Sum64String(tags), broker side generate before write wal</span>
    <span class="token builtin">uint64</span> tags_hash <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
    <span class="token keyword">repeated</span> <span class="token positional-class-name class-name">SimpleField</span> simple_fields <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
    <span class="token positional-class-name class-name">CompoundField</span> compound_field <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">enum</span> <span class="token class-name">SimpleFieldType</span> <span class="token punctuation">{</span>
    SIMPLE_UNSPECIFIED <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    GAUGE <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    DELTA_SUM <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    CUMULATIVE_SUM <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">enum</span> <span class="token class-name">CompoundFieldType</span> <span class="token punctuation">{</span>
    COMPOUND_UNSPECIFIED <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    DELTA_HISTOGRAM <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    CUMULATIVE_HISTOGRAM <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">SimpleField</span> <span class="token punctuation">{</span>
    <span class="token builtin">string</span> name <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token positional-class-name class-name">SimpleFieldType</span> type <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">repeated</span> <span class="token positional-class-name class-name">Exemplar</span> exemplars <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token builtin">double</span> value <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// CompoundData is compound data used for histogram field.</span>
<span class="token keyword">message</span> <span class="token class-name">CompoundField</span> <span class="token punctuation">{</span>
    <span class="token positional-class-name class-name">CompoundFieldType</span> type <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">repeated</span> <span class="token positional-class-name class-name">Exemplar</span> exemplars <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token builtin">double</span> min <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token builtin">double</span> max <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
    <span class="token builtin">double</span> sum <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
    <span class="token builtin">double</span> count <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
    <span class="token comment">// same as open-telemetry metrics definition</span>
    <span class="token comment">// explicit_bounds specifies buckets with explicitly defined bounds for values.</span>
    <span class="token comment">//</span>
    <span class="token comment">// The boundaries for bucket at index i are:</span>
    <span class="token comment">//</span>
    <span class="token comment">// (-infinity, explicit_bounds[i]] for i == 0</span>
    <span class="token comment">// (explicit_bounds[i-1], explicit_bounds[i]] for 0 &lt; i &lt; size(explicit_bounds)</span>
    <span class="token comment">// (explicit_bounds[i-1], +infinity) for i == size(explicit_bounds)</span>
    <span class="token comment">//</span>
    <span class="token comment">// The values in the explicit_bounds array must be strictly increasing.</span>
    <span class="token comment">//</span>
    <span class="token comment">// Histogram buckets are inclusive of their upper boundary, except the last</span>
    <span class="token comment">// bucket where the boundary is at infinity. This format is intentionally</span>
    <span class="token comment">// compatible with the OpenMetrics histogram definition.</span>
    <span class="token keyword">repeated</span> <span class="token builtin">double</span> explicit_bounds <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
    <span class="token keyword">repeated</span> <span class="token builtin">double</span> values <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function p(t,i){return e}var o=n(a,[["render",p],["__file","dtomodel.html.vue"]]);export{o as default};
