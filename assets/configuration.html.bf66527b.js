import{_ as n,b as s}from"./app.1245c310.js";const a={},e=s(`<h1 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h1><h2 id="broker" tabindex="-1"><a class="header-anchor" href="#broker" aria-hidden="true">#</a> Broker</h2><div class="language-toml ext-toml line-numbers-mode"><pre class="language-toml"><code><span class="token comment">## Coordinator related configuration.</span>
<span class="token punctuation">[</span><span class="token table class-name">coordinator</span><span class="token punctuation">]</span>
<span class="token comment">## Coordinator coordinates reads/writes operations between different nodes</span>
<span class="token comment">## namespace organizes etcd keys into a isolated complete keyspaces for coordinator</span>
<span class="token comment">## Default: /lindb-cluster</span>
<span class="token key property">namespace</span> <span class="token punctuation">=</span> <span class="token string">&quot;/lindb-cluster&quot;</span>
<span class="token comment">## Endpoints config list of ETCD cluster</span>
<span class="token comment">## Default: [&quot;http://localhost:2379&quot;]</span>
<span class="token key property">endpoints</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;http://localhost:2379&quot;</span><span class="token punctuation">]</span>
<span class="token comment">## Lease-TTL is a number in seconds.</span>
<span class="token comment">## It controls how long a ephemeral node like zookeeper will be removed when heartbeat fails.</span>
<span class="token comment">## lease expiration will cause a re-elect.</span>
<span class="token comment">## Min: 5s</span>
<span class="token comment">## Default: 10s</span>
<span class="token key property">lease-ttl</span> <span class="token punctuation">=</span> <span class="token string">&quot;10s&quot;</span>
<span class="token comment">## Timeout is the timeout for failing to executing a etcd command.</span>
<span class="token comment">## Default: 5s</span>
<span class="token key property">timeout</span> <span class="token punctuation">=</span> <span class="token string">&quot;5s&quot;</span>
<span class="token comment">## DialTimeout is the timeout for failing to establish a etcd connection.</span>
<span class="token comment">## Default: 5s</span>
<span class="token key property">dial-timeout</span> <span class="token punctuation">=</span> <span class="token string">&quot;5s&quot;</span>
<span class="token comment">## Username is a user name for etcd authentication.</span>
<span class="token comment">## Default: &quot;&quot;</span>
<span class="token key property">username</span> <span class="token punctuation">=</span> <span class="token string">&quot;&quot;</span>
<span class="token comment">## Password is a password for etcd authentication.</span>
<span class="token comment">## Default: &quot;&quot;</span>
<span class="token key property">password</span> <span class="token punctuation">=</span> <span class="token string">&quot;&quot;</span>

<span class="token comment">## Query related configuration.</span>
<span class="token punctuation">[</span><span class="token table class-name">query</span><span class="token punctuation">]</span>
<span class="token comment">## Number of queries allowed to execute concurrently</span>
<span class="token comment">## Default: 8</span>
<span class="token key property">query-concurrency</span> <span class="token punctuation">=</span> <span class="token number">8</span>
<span class="token comment">## Idle worker will be canceled in this duration</span>
<span class="token comment">## Default: 5s</span>
<span class="token key property">idle-timeout</span> <span class="token punctuation">=</span> <span class="token string">&quot;5s&quot;</span>
<span class="token comment">## Maximum timeout threshold for query.</span>
<span class="token comment">## Default: 5s</span>
<span class="token key property">timeout</span> <span class="token punctuation">=</span> <span class="token string">&quot;5s&quot;</span>

<span class="token comment">## Broker related configuration.</span>
<span class="token punctuation">[</span><span class="token table class-name">broker</span><span class="token punctuation">]</span>

<span class="token comment">## Controls how HTTP Server are configured.</span>
<span class="token punctuation">[</span><span class="token table class-name">broker.http</span><span class="token punctuation">]</span>
<span class="token comment">## port which the HTTP Server is listening on</span>
<span class="token comment">## Default: 9000</span>
<span class="token key property">port</span> <span class="token punctuation">=</span> <span class="token number">9000</span>
<span class="token comment">## maximum duration the server should keep established connections alive.</span>
<span class="token comment">## Default: 2m0s</span>
<span class="token key property">idle-timeout</span> <span class="token punctuation">=</span> <span class="token string">&quot;2m0s&quot;</span>
<span class="token comment">## maximum duration before timing out for server writes of the response</span>
<span class="token comment">## Default: 5s</span>
<span class="token key property">write-timeout</span> <span class="token punctuation">=</span> <span class="token string">&quot;5s&quot;</span>
<span class="token comment">## maximum duration for reading the entire request, including the body.</span>
<span class="token comment">## Default: 5s</span>
<span class="token key property">read-timeout</span> <span class="token punctuation">=</span> <span class="token string">&quot;5s&quot;</span>

<span class="token comment">## Ingestion configuration for broker handle ingest request.</span>
<span class="token punctuation">[</span><span class="token table class-name">broker.ingestion</span><span class="token punctuation">]</span>
<span class="token comment">## How many goroutines can write metrics at the same time.</span>
<span class="token comment">## If writes requests exceeds the concurrency,</span>
<span class="token comment">## ingestion HTTP API will be throttled.</span>
<span class="token comment">## Default: 8</span>
<span class="token key property">max-concurrency</span> <span class="token punctuation">=</span> <span class="token number">8</span>
<span class="token comment">## maximum duration before timeout for server ingesting metrics</span>
<span class="token comment">## Default: 5s</span>
<span class="token key property">ingest-timeout</span> <span class="token punctuation">=</span> <span class="token string">&quot;5s&quot;</span>

<span class="token comment">## Write configuration for writing replication block.</span>
<span class="token punctuation">[</span><span class="token table class-name">broker.write</span><span class="token punctuation">]</span>
<span class="token comment">## Broker will write at least this often,</span>
<span class="token comment">## even if the configured batch-size if not reached.</span>
<span class="token comment">## Default: 2s</span>
<span class="token key property">batch-timeout</span> <span class="token punctuation">=</span> <span class="token string">&quot;2s&quot;</span>
<span class="token comment">## Broker will sending block to storage node in this size</span>
<span class="token comment">## Default: 256 KiB</span>
<span class="token key property">batch-block-size</span> <span class="token punctuation">=</span> <span class="token string">&quot;256 KiB&quot;</span>
<span class="token comment">## interval for how often expired write write family garbage collect task execute</span>
<span class="token comment">## Default: 1m0s</span>
<span class="token key property">gc-task-interval</span> <span class="token punctuation">=</span> <span class="token string">&quot;1m0s&quot;</span>

<span class="token comment">## Controls how GRPC Server are configured.</span>
<span class="token punctuation">[</span><span class="token table class-name">broker.grpc</span><span class="token punctuation">]</span>
<span class="token comment">## port which the GRPC Server is listening on</span>
<span class="token comment">## Default: 9001</span>
<span class="token key property">port</span> <span class="token punctuation">=</span> <span class="token number">9001</span>
<span class="token comment">## max-concurrent-streams limits the number of concurrent streams to each ServerTransport</span>
<span class="token comment">## Default: 80 </span>
<span class="token key property">max-concurrent-streams</span> <span class="token punctuation">=</span> <span class="token number">80</span>
<span class="token comment">## connect-timeout sets the timeout for connection establishment.</span>
<span class="token comment">## Default: 3s</span>
<span class="token key property">connect-timeout</span> <span class="token punctuation">=</span> <span class="token string">&quot;3s&quot;</span>

<span class="token comment">## Config for the Internal Monitor</span>
<span class="token punctuation">[</span><span class="token table class-name">monitor</span><span class="token punctuation">]</span>
<span class="token comment">## time period to process an HTTP metrics push call</span>
<span class="token comment">## Default: 3s</span>
<span class="token key property">push-timeout</span> <span class="token punctuation">=</span> <span class="token string">&quot;3s&quot;</span>
<span class="token comment">## monitor won&#39;t start when interval is sets to 0</span>
<span class="token comment">## such as cpu, memory, and disk, process and go runtime</span>
<span class="token comment">## Default: 10s</span>
<span class="token key property">report-interval</span> <span class="token punctuation">=</span> <span class="token string">&quot;10s&quot;</span>
<span class="token comment">## URL is the target of broker native ingestion url</span>
<span class="token comment">## Default: http://127.0.0.1:9000/api/flat/write?db=_internal</span>
<span class="token key property">url</span> <span class="token punctuation">=</span> <span class="token string">&quot;http://127.0.0.1:9000/api/flat/write?db=_internal&quot;</span>

<span class="token comment">## logging related configuration.</span>
<span class="token punctuation">[</span><span class="token table class-name">logging</span><span class="token punctuation">]</span>
<span class="token comment">## Dir is the output directory for log-files</span>
<span class="token comment">## Default: /tmp/lindb/log</span>
<span class="token key property">dir</span> <span class="token punctuation">=</span> <span class="token string">&quot;/tmp/lindb/log&quot;</span>
<span class="token comment">## Determine which level of logs will be emitted.</span>
<span class="token comment">## error, warn, info, and debug are available</span>
<span class="token comment">## Default: info</span>
<span class="token key property">level</span> <span class="token punctuation">=</span> <span class="token string">&quot;info&quot;</span>
<span class="token comment">## MaxSize is the maximum size in megabytes of the log file before it gets rotated. </span>
<span class="token comment">## Default: 100 MiB</span>
<span class="token key property">maxsize</span> <span class="token punctuation">=</span> <span class="token string">&quot;100 MiB&quot;</span>
<span class="token comment">## MaxBackups is the maximum number of old log files to retain. The default</span>
<span class="token comment">## is to retain all old log files (though MaxAge may still cause them to get deleted.)</span>
<span class="token comment">## Default: 3</span>
<span class="token key property">maxbackups</span> <span class="token punctuation">=</span> <span class="token number">3</span>
<span class="token comment">## MaxAge is the maximum number of days to retain old log files based on the</span>
<span class="token comment">## timestamp encoded in their filename.  Note that a day is defined as 24 hours</span>
<span class="token comment">## and may not exactly correspond to calendar days due to daylight savings, leap seconds, etc.</span>
<span class="token comment">## The default is not to remove old log files based on age.</span>
<span class="token comment">## Default: 7</span>
<span class="token key property">maxage</span> <span class="token punctuation">=</span> <span class="token number">7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="storage" tabindex="-1"><a class="header-anchor" href="#storage" aria-hidden="true">#</a> Storage</h2><div class="language-toml ext-toml line-numbers-mode"><pre class="language-toml"><code><span class="token comment">## Coordinator related configuration.</span>
<span class="token punctuation">[</span><span class="token table class-name">coordinator</span><span class="token punctuation">]</span>
<span class="token comment">## Coordinator coordinates reads/writes operations between different nodes</span>
<span class="token comment">## namespace organizes etcd keys into a isolated complete keyspaces for coordinator</span>
<span class="token comment">## Default: /lindb-cluster</span>
<span class="token key property">namespace</span> <span class="token punctuation">=</span> <span class="token string">&quot;/lindb-cluster&quot;</span>
<span class="token comment">## Endpoints config list of ETCD cluster</span>
<span class="token comment">## Default: [&quot;http://localhost:2379&quot;]</span>
<span class="token key property">endpoints</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;http://localhost:2379&quot;</span><span class="token punctuation">]</span>
<span class="token comment">## Lease-TTL is a number in seconds.</span>
<span class="token comment">## It controls how long a ephemeral node like zookeeper will be removed when heartbeat fails.</span>
<span class="token comment">## lease expiration will cause a re-elect.</span>
<span class="token comment">## Min: 5s</span>
<span class="token comment">## Default: 10s</span>
<span class="token key property">lease-ttl</span> <span class="token punctuation">=</span> <span class="token string">&quot;10s&quot;</span>
<span class="token comment">## Timeout is the timeout for failing to executing a etcd command.</span>
<span class="token comment">## Default: 5s</span>
<span class="token key property">timeout</span> <span class="token punctuation">=</span> <span class="token string">&quot;5s&quot;</span>
<span class="token comment">## DialTimeout is the timeout for failing to establish a etcd connection.</span>
<span class="token comment">## Default: 5s</span>
<span class="token key property">dial-timeout</span> <span class="token punctuation">=</span> <span class="token string">&quot;5s&quot;</span>
<span class="token comment">## Username is a user name for etcd authentication.</span>
<span class="token comment">## Default: &quot;&quot;</span>
<span class="token key property">username</span> <span class="token punctuation">=</span> <span class="token string">&quot;&quot;</span>
<span class="token comment">## Password is a password for etcd authentication.</span>
<span class="token comment">## Default: &quot;&quot;</span>
<span class="token key property">password</span> <span class="token punctuation">=</span> <span class="token string">&quot;&quot;</span>

<span class="token comment">## Query related configuration.</span>
<span class="token punctuation">[</span><span class="token table class-name">query</span><span class="token punctuation">]</span>
<span class="token comment">## Number of queries allowed to execute concurrently</span>
<span class="token comment">## Default: 8</span>
<span class="token key property">query-concurrency</span> <span class="token punctuation">=</span> <span class="token number">8</span>
<span class="token comment">## Idle worker will be canceled in this duration</span>
<span class="token comment">## Default: 5s</span>
<span class="token key property">idle-timeout</span> <span class="token punctuation">=</span> <span class="token string">&quot;5s&quot;</span>
<span class="token comment">## Maximum timeout threshold for query.</span>
<span class="token comment">## Default: 5s</span>
<span class="token key property">timeout</span> <span class="token punctuation">=</span> <span class="token string">&quot;5s&quot;</span>

<span class="token comment">## Storage related configuration</span>
<span class="token punctuation">[</span><span class="token table class-name">storage</span><span class="token punctuation">]</span>
<span class="token comment">## Indicator is a unique id for identifing each storage node</span>
<span class="token comment">## Make sure indicator on each node is different</span>
<span class="token comment">## Default: 1</span>
<span class="token key property">indicator</span> <span class="token punctuation">=</span> <span class="token number">1</span>
<span class="token comment">## interval for how often do ttl job</span>
<span class="token comment">## Default: 24h0m0s</span>
<span class="token key property">ttl-task-interval</span> <span class="token punctuation">=</span> <span class="token string">&quot;24h0m0s&quot;</span>
<span class="token comment">## Broker http endpoint which storage self register address</span>
<span class="token comment">## Default: http://localhost:9000</span>
<span class="token key property">broker-endpoint</span> <span class="token punctuation">=</span> <span class="token string">&quot;http://localhost:9000&quot;</span>

<span class="token comment">## Storage HTTP related configuration.</span>
<span class="token punctuation">[</span><span class="token table class-name">storage.http</span><span class="token punctuation">]</span>
<span class="token comment">## port which the HTTP Server is listening on</span>
<span class="token comment">## Default: 2892</span>
<span class="token key property">port</span> <span class="token punctuation">=</span> <span class="token number">2892</span>
<span class="token comment">## maximum duration the server should keep established connections alive.</span>
<span class="token comment">## Default: 2m0s</span>
<span class="token key property">idle-timeout</span> <span class="token punctuation">=</span> <span class="token string">&quot;2m0s&quot;</span>
<span class="token comment">## maximum duration before timing out for server writes of the response</span>
<span class="token comment">## Default: 5s</span>
<span class="token key property">write-timeout</span> <span class="token punctuation">=</span> <span class="token string">&quot;5s&quot;</span>
<span class="token comment">## maximum duration for reading the entire request, including the body.</span>
<span class="token comment">## Default: 5s</span>
<span class="token key property">read-timeout</span> <span class="token punctuation">=</span> <span class="token string">&quot;5s&quot;</span>

<span class="token comment">## Storage GRPC related configuration.</span>
<span class="token punctuation">[</span><span class="token table class-name">storage.grpc</span><span class="token punctuation">]</span>
<span class="token comment">## port which the GRPC Server is listening on</span>
<span class="token comment">## Default: 2891</span>
<span class="token key property">port</span> <span class="token punctuation">=</span> <span class="token number">2891</span>
<span class="token comment">## max-concurrent-streams limits the number of concurrent streams to each ServerTransport</span>
<span class="token comment">## Default: 160 </span>
<span class="token key property">max-concurrent-streams</span> <span class="token punctuation">=</span> <span class="token number">160</span>
<span class="token comment">## connect-timeout sets the timeout for connection establishment.</span>
<span class="token comment">## Default: 3s</span>
<span class="token key property">connect-timeout</span> <span class="token punctuation">=</span> <span class="token string">&quot;3s&quot;</span>

<span class="token comment">## Write Ahead Log related configuration.</span>
<span class="token punctuation">[</span><span class="token table class-name">storage.wal</span><span class="token punctuation">]</span>
<span class="token comment">## WAL mmaped log directory</span>
<span class="token comment">## Default: /tmp/lindb/storage/wal</span>
<span class="token key property">dir</span> <span class="token punctuation">=</span> <span class="token string">&quot;/tmp/lindb/storage/wal&quot;</span>
<span class="token comment">## data-size-limit is the maximum size in megabytes of the page file before a new</span>
<span class="token comment">## file is created. It defaults to 512 megabytes, available size is in [1MB, 1GB]</span>
<span class="token comment">## Default: 128 MiB</span>
<span class="token key property">data-size-limit</span> <span class="token punctuation">=</span> <span class="token string">&quot;128 MiB&quot;</span>
<span class="token comment">## interval for how often remove expired write ahead log</span>
<span class="token comment">## Default: 1m0s</span>
<span class="token key property">remove-task-interval</span> <span class="token punctuation">=</span> <span class="token string">&quot;1m0s&quot;</span>

<span class="token comment">## TSDB related configuration.</span>
<span class="token punctuation">[</span><span class="token table class-name">storage.tsdb</span><span class="token punctuation">]</span>
<span class="token comment">## The TSDB directory where the time series data and meta file stores.</span>
<span class="token comment">## Default: /tmp/lindb/storage/data</span>
<span class="token key property">dir</span> <span class="token punctuation">=</span> <span class="token string">&quot;/tmp/lindb/storage/data&quot;</span>

<span class="token comment">## Flush configuration</span>
<span class="token comment">## </span>
<span class="token comment">## The amount of data to build up in each memdb, </span>
<span class="token comment">## before it is queueing to the immutable list for flushing.</span>
<span class="token comment">## larger memdb may improve query performance.</span>
<span class="token comment">## Default: 500 MiB</span>
<span class="token key property">max-memdb-size</span> <span class="token punctuation">=</span> <span class="token string">&quot;500 MiB&quot;</span>
<span class="token comment">## Mutable memdb will switch to immutable this often,</span>
<span class="token comment">## event if the configured memdb-size is not reached.</span>
<span class="token comment">## Default: 30m0s</span>
<span class="token key property">mutable-memdb-ttl</span> <span class="token punctuation">=</span> <span class="token string">&quot;30m0s&quot;</span>
<span class="token comment">## Global flush operation will be triggered</span>
<span class="token comment">## when system memory usage is higher than this ratio.</span>
<span class="token comment">## Default: 0.75</span>
<span class="token key property">max-mem-usage-before-flush</span> <span class="token punctuation">=</span> <span class="token number">0.75</span>
<span class="token comment">## Global flush operation will be stopped </span>
<span class="token comment">## when system memory usage is lower than this ration.</span>
<span class="token comment">## Default: 0.60</span>
<span class="token key property">target-mem-usage-after-flush</span> <span class="token punctuation">=</span> <span class="token number">0.60</span>
<span class="token comment">## concurrency of goroutines for flushing.</span>
<span class="token comment">## Default: 2</span>
<span class="token key property">flush-concurrency</span> <span class="token punctuation">=</span> <span class="token number">2</span>

<span class="token comment">## Time Series limitation</span>
<span class="token comment">## </span>
<span class="token comment">## Limit for time series of metric.</span>
<span class="token comment">## Default: 200000</span>
<span class="token key property">max-seriesIDs</span> <span class="token punctuation">=</span> <span class="token number">200000</span>
<span class="token comment">## Limit for tagKeys</span>
<span class="token comment">## Default: 32</span>
<span class="token key property">max-tagKeys</span> <span class="token punctuation">=</span> <span class="token number">32</span>

<span class="token comment">## Config for the Internal Monitor</span>
<span class="token punctuation">[</span><span class="token table class-name">monitor</span><span class="token punctuation">]</span>
<span class="token comment">## time period to process an HTTP metrics push call</span>
<span class="token comment">## Default: 3s</span>
<span class="token key property">push-timeout</span> <span class="token punctuation">=</span> <span class="token string">&quot;3s&quot;</span>
<span class="token comment">## monitor won&#39;t start when interval is sets to 0</span>
<span class="token comment">## such as cpu, memory, and disk, process and go runtime</span>
<span class="token comment">## Default: 10s</span>
<span class="token key property">report-interval</span> <span class="token punctuation">=</span> <span class="token string">&quot;10s&quot;</span>
<span class="token comment">## URL is the target of broker native ingestion url</span>
<span class="token comment">## Default: http://127.0.0.1:9000/api/flat/write?db=_internal</span>
<span class="token key property">url</span> <span class="token punctuation">=</span> <span class="token string">&quot;http://127.0.0.1:9000/api/flat/write?db=_internal&quot;</span>

<span class="token comment">## logging related configuration.</span>
<span class="token punctuation">[</span><span class="token table class-name">logging</span><span class="token punctuation">]</span>
<span class="token comment">## Dir is the output directory for log-files</span>
<span class="token comment">## Default: /tmp/lindb/log</span>
<span class="token key property">dir</span> <span class="token punctuation">=</span> <span class="token string">&quot;/tmp/lindb/log&quot;</span>
<span class="token comment">## Determine which level of logs will be emitted.</span>
<span class="token comment">## error, warn, info, and debug are available</span>
<span class="token comment">## Default: info</span>
<span class="token key property">level</span> <span class="token punctuation">=</span> <span class="token string">&quot;info&quot;</span>
<span class="token comment">## MaxSize is the maximum size in megabytes of the log file before it gets rotated. </span>
<span class="token comment">## Default: 100 MiB</span>
<span class="token key property">maxsize</span> <span class="token punctuation">=</span> <span class="token string">&quot;100 MiB&quot;</span>
<span class="token comment">## MaxBackups is the maximum number of old log files to retain. The default</span>
<span class="token comment">## is to retain all old log files (though MaxAge may still cause them to get deleted.)</span>
<span class="token comment">## Default: 3</span>
<span class="token key property">maxbackups</span> <span class="token punctuation">=</span> <span class="token number">3</span>
<span class="token comment">## MaxAge is the maximum number of days to retain old log files based on the</span>
<span class="token comment">## timestamp encoded in their filename.  Note that a day is defined as 24 hours</span>
<span class="token comment">## and may not exactly correspond to calendar days due to daylight savings, leap seconds, etc.</span>
<span class="token comment">## The default is not to remove old log files based on age.</span>
<span class="token comment">## Default: 7</span>
<span class="token key property">maxage</span> <span class="token punctuation">=</span> <span class="token number">7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="standalone" tabindex="-1"><a class="header-anchor" href="#standalone" aria-hidden="true">#</a> Standalone</h2><div class="language-toml ext-toml line-numbers-mode"><pre class="language-toml"><code><span class="token comment">## Embed ETCD related configuration.</span>
<span class="token punctuation">[</span><span class="token table class-name">etcd</span><span class="token punctuation">]</span>
<span class="token comment">## Where the ETCD data is stored</span>
<span class="token comment">## Default: /tmp/lindb/coordinator</span>
<span class="token key property">dir</span> <span class="token punctuation">=</span> <span class="token string">&quot;/tmp/lindb/coordinator&quot;</span>
<span class="token comment">## URL to listen on for client traffic </span>
<span class="token comment">## If 0.0.0.0 if specified as the IP, </span>
<span class="token comment">## etcd listens to the given port on all interfaces.</span>
<span class="token comment">## If an IP address is given as well as a port, </span>
<span class="token comment">## etcd will listen on the given port and interface.</span>
<span class="token comment">## Default: http://localhost:2379</span>
<span class="token key property">url</span> <span class="token punctuation">=</span> <span class="token string">&quot;http://localhost:2379&quot;</span>

<span class="token comment">## Reference to the configuration of Broker/Storage.</span>
<span class="token punctuation">[</span><span class="token table class-name">coordinator</span><span class="token punctuation">]</span>

<span class="token comment">## Reference to the configuration of Broker/Storage.</span>
<span class="token punctuation">[</span><span class="token table class-name">query</span><span class="token punctuation">]</span>

<span class="token comment">## Reference to the configuration of Broker.</span>
<span class="token punctuation">[</span><span class="token table class-name">broker</span><span class="token punctuation">]</span>

<span class="token comment">## Reference to the configuration of Broker&#39;s HTTP.</span>
<span class="token punctuation">[</span><span class="token table class-name">broker.http</span><span class="token punctuation">]</span>

<span class="token comment">## Reference to the configuration of Broker&#39;s Ingestion.</span>
<span class="token punctuation">[</span><span class="token table class-name">broker.ingestion</span><span class="token punctuation">]</span>

<span class="token comment">## Reference to the configuration of Broker&#39;s Write.</span>
<span class="token punctuation">[</span><span class="token table class-name">broker.write</span><span class="token punctuation">]</span>

<span class="token comment">## Reference to the configuration of Broker&#39;s GRPC.</span>
<span class="token punctuation">[</span><span class="token table class-name">broker.grpc</span><span class="token punctuation">]</span>

<span class="token comment">## Reference to the configuration of Storage.</span>
<span class="token punctuation">[</span><span class="token table class-name">storage</span><span class="token punctuation">]</span>
<span class="token comment">## Indicator is a unique id for identifing each storage node</span>

<span class="token comment">## Reference to the configuration of Storage&#39;s HTTP.</span>
<span class="token punctuation">[</span><span class="token table class-name">storage.http</span><span class="token punctuation">]</span>

<span class="token comment">## Reference to the configuration of Storage&#39;s GRPC.</span>
<span class="token punctuation">[</span><span class="token table class-name">storage.grpc</span><span class="token punctuation">]</span>

<span class="token comment">## Reference to the configuration of Storage&#39;s WAL.</span>
<span class="token punctuation">[</span><span class="token table class-name">storage.wal</span><span class="token punctuation">]</span>

<span class="token comment">## Reference to the configuration of Storage&#39;s TSDB.</span>
<span class="token punctuation">[</span><span class="token table class-name">storage.tsdb</span><span class="token punctuation">]</span>

<span class="token comment">## Reference to the configuration of Broker/Storage&#39;s logging.</span>
<span class="token punctuation">[</span><span class="token table class-name">logging</span><span class="token punctuation">]</span>

<span class="token comment">## Reference to the configuration of Broker/Storage&#39;s monitor.</span>
<span class="token punctuation">[</span><span class="token table class-name">monitor</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function t(i,o){return e}var c=n(a,[["render",t],["__file","configuration.html.vue"]]);export{c as default};
