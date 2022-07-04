# 自监控

LinDB 各组件提供了自监控指标以了解各组件当前的运行状态，本文主要对各项指标进行详细说明。

LinDB 默认会定期把自监控的指标数据存储在 `_internal` 这个数据库下。

主要分为如下几类指标：

- [通用](#通用): 通用指标，如CPU、Mem、网络等，适用与 Broker、Storage；
- [Broker](#broker): Broker 内部监控指标；
- [Storage](#storage): Storage 内部监控指标；

所有的指标都会打上如下标签：

- node: 表示当前节点信息；

:::tip
由于 LinDB 支持一个计算集群(Broker)下可以管理多个存储集群(Storage)，为了更好的区分存储集群，针对 Storage 下面的指标额外增外了 `namesapce` 以区分是哪个存储集群。
:::

## 通用

### Go Runtime

<table>
    <thead>
        <tr>
            <th>Metric Name</th>
            <th>Tags</th>
            <th>Fields</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=2>lindb.runtime</td>
            <td rowspan=2>-</td>
            <td>go_goroutines</td>
            <td>the number of goroutines</td>
        </tr>
        <tr>
            <td>go_threads</td>
            <td>the number of records in the thread creation profile</td>
        </tr>
        <tr>
            <td rowspan=24>lindb.runtime.mem</td>
            <td rowspan=24>-</td>
            <td>alloc</td>
            <td>bytes of allocated heap objects</td>
        </tr>
        <tr>
            <td>total_alloc</td>
            <td>cumulative bytes allocated for heap objects</td>
        </tr>
        <tr>
            <td>sys</td>
            <td>the total bytes of memory obtained from the OS</td>
        </tr>
        <tr>
            <td>lookups</td>
            <td>the number of pointer lookups performed by the runtime</td>
        </tr>
        <tr>
            <td>mallocs</td>
            <td>the cumulative count of heap objects allocated</td>
        </tr>
        <tr>
            <td>frees</td>
            <td>the cumulative count of heap objects freed</td>
        </tr>
        <tr>
            <td>heap_alloc</td>
            <td>bytes of allocated heap objects</td>
        </tr>
        <tr>
            <td>heap_sys</td>
            <td>bytes of heap memory obtained from the OS</td>
        </tr>
        <tr>
            <td>heap_idle</td>
            <td>bytes in idle (unused) spans</td>
        </tr>
        <tr>
            <td>heap_inuse</td>
            <td>bytes in in-use spans</td>
        </tr>
        <tr>
            <td>heap_released</td>
            <td>bytes of physical memory returned to the OS</td>
        </tr>
        <tr>
            <td>heap_objects</td>
            <td>the number of allocated heap objects</td>
        </tr>
        <tr>
            <td>stack_inuse</td>
            <td>bytes in stack spans</td>
        </tr>
        <tr>
            <td>stack_sys</td>
            <td>bytes of stack memory obtained from the OS</td>
        </tr>
        <tr>
            <td>mspan_inuse</td>
            <td>bytes of allocated mspan structures</td>
        </tr>
        <tr>
            <td>mspan_sys</td>
            <td>bytes of memory obtained from the OS for mspan</td>
        </tr>
        <tr>
            <td>mcache_inuse</td>
            <td>bytes of allocated mcache structures</td>
        </tr>
        <tr>
            <td>mcache_sys</td>
            <td>bytes of memory obtained from the OS for mcache structures</td>
        </tr>
        <tr>
            <td>buck_hash_sys</td>
            <td>bytes of memory in profiling bucket hash tables</td>
        </tr>
        <tr>
            <td>gc_sys</td>
            <td>bytes of memory in garbage collection metadata</td>
        </tr>
        <tr>
            <td>other_sys</td>
            <td>bytes of memory in miscellaneous off-heap</td>
        </tr>
        <tr>
            <td>next_gc</td>
            <td>the target heap size of the next GC cycle</td>
        </tr>
        <tr>
            <td>last_gc</td>
            <td>the time the last garbage collection finished</td>
        </tr>
        <tr>
            <td>gc_cpu_fraction</td>
            <td>the fraction of this program's available  CPU time used by the GC since the program started</td>
        </tr>
    </tbody>
</table>

### System

<table>
    <thead>
        <tr>
            <th>Metric Name</th>
            <th>Tags</th>
            <th>Fields</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=8>lindb.monitor.system.cpu_stat</td>
            <td rowspan=8>-</td>
            <td>idle</td>
            <td>CPU time that's not actively being used</td>
        </tr>
        <tr>
            <td>nice</td>
            <td>CPU time used by processes that have a positive niceness</td>
        </tr>
        <tr>
            <td>system</td>
            <td>CPU time used by the kernel</td>
        </tr>
        <tr>
            <td>user</td>
            <td>CPU time used by user space processes</td>
        </tr>
        <tr>
            <td>irq</td>
            <td>Interrupt Requests</td>
        </tr>
        <tr>
            <td>steal</td>
            <td>The percentage of time a virtual CPU waits for a real CPU</td>
        </tr>
        <tr>
            <td>softirq</td>
            <td>The kernel is servicing interrupt requests (IRQs)</td>
        </tr>
        <tr>
            <td>iowait</td>
            <td>It marks time spent waiting for input or output operations</td>
        </tr>
        <tr>
            <td rowspan=4>lindb.monitor.system.mem_stat</td>
            <td rowspan=4>-</td>
            <td>total</td>
            <td>Total amount of RAM on this system</td>
        </tr>
        <tr>
            <td>used</td>
            <td>RAM used by programs</td>
        </tr>
        <tr>
            <td>free</td>
            <td>Free RAM</td>
        </tr>
        <tr>
            <td>usage</td>
            <td>Percentage of RAM used by programs</td>
        </tr>
        <tr>
            <td rowspan=4>lindb.monitor.system.disk_usage_stats</td>
            <td rowspan=4>-</td>
            <td>total</td>
            <td>Total amount of disk</td>
        </tr>
        <tr>
            <td>used</td>
            <td>Disk used by programs</td>
        </tr>
        <tr>
            <td>free</td>
            <td>Free disk</td>
        </tr>
        <tr>
            <td>usage</td>
            <td>Percentage of disk used by programs</td>
        </tr>
        <tr>
            <td rowspan=4>lindb.monitor.system.disk_inodes_stats</td>
            <td rowspan=4>-</td>
            <td>total</td>
            <td>Total amount of inode</td>
        </tr>
        <tr>
            <td>used</td>
            <td>INode used by programs</td>
        </tr>
        <tr>
            <td>free</td>
            <td>Free inode</td>
        </tr>
        <tr>
            <td>usage</td>
            <td>Percentage of inode used by programs</td>
        </tr>
        <tr>
            <td rowspan=8>lindb.monitor.system.net_stat</td>
            <td rowspan=8>interface</td>
            <td>bytes_sent</td>
            <td>number of bytes sent</td>
        </tr>
        <tr>
            <td>bytes_recv</td>
            <td>number of bytes received</td>
        </tr>
        <tr>
            <td>packets_sent</td>
            <td>number of packets sent</td>
        </tr>
        <tr>
            <td>packets_recv</td>
            <td>number of packets received</td>
        </tr>
        <tr>
            <td>errin</td>
            <td>total number of errors while receiving</td>
        </tr>
        <tr>
            <td>errout</td>
            <td>total number of errors while sending</td>
        </tr>
        <tr>
            <td>dropin</td>
            <td>total number of incoming packets which were dropped</td>
        </tr>
        <tr>
            <td>dropout</td>
            <td>total number of outgoing packets which were dropped (always 0 on OSX and BSD)</td>
        </tr>
    </tbody>
</table>

### Network

<table>
    <thead>
        <tr>
            <th>Metric Name</th>
            <th>Tags</th>
            <th>Fields</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=11>lindb.traffic.tcp</td>
            <td rowspan=11>addr</td>
            <td>accept_conns</td>
            <td>accept total count</td>
        </tr>
        <tr>
            <td>accept_failures</td>
            <td>accept failure</td>
        </tr>
        <tr>
            <td>active_conns</td>
            <td>current active connections</td>
        </tr>
        <tr>
            <td>reads</td>
            <td>read total count</td>
        </tr>
        <tr>
            <td>read_bytes</td>
            <td>read byte size</td>
        </tr>
        <tr>
            <td>read_failures</td>
            <td>read failure</td>
        </tr>
        <tr>
            <td>writes</td>
            <td>write total count</td>
        </tr>
        <tr>
            <td>write_bytes</td>
            <td>write byte size</td>
        </tr>
        <tr>
            <td>write_failures</td>
            <td>write failure</td>
        </tr>
        <tr>
            <td>close_conns</td>
            <td>close total count</td>
        </tr>
        <tr>
            <td>close_failures</td>
            <td>close failure</td>
        </tr>
        <tr>
            <td>lindb.traffic.grpc_client.unary</td>
            <td>grpc_service<br/>grpc_method</td>
            <td>failures</td>
            <td>grpc unary client handle msg failure</td>
        </tr>
        <tr>
            <td>lindb.traffic.grpc_client.unary.duration</td>
            <td>grpc_service<br/>grpc_method</td>
            <td>histogram</td>
            <td>grpc unary client handle msg duration</td>
        </tr>
        <tr>
            <td>lindb.traffic.grpc_server.unary</td>
            <td>grpc_service<br/>grpc_method</td>
            <td>failures</td>
            <td>grpc unary server handle msg failure</td>
        </tr>
        <tr>
            <td>lindb.traffic.grpc_server.unary.duration</td>
            <td>grpc_service<br/>grpc_method</td>
            <td>histogram</td>
            <td>grpc unary server handle msg duration</td>
        </tr>
        <tr>
            <td rowspan=2>lindb.traffic.grpc_client.stream</td>
            <td rowspan=2>grpc_service<br/>grpc_service<br/>grpc_method</td>
            <td>msg_received_failures</td>
            <td>grpc cliet receive msg failure</td>
        </tr>
        <tr>
            <td>msg_sent_failures</td>
            <td>grpc cliet send msg failure</td>
        </tr>
        <tr>
            <td>lindb.traffic.grpc_client.stream.received_duration</td>
            <td>grpc_service<br/>grpc_service<br/>grpc_method</td>
            <td>histogram</td>
            <td>grpc client receive msg duration, include receive total count/handle duration</td>
        </tr>
        <tr>
            <td>lindb.traffic.grpc_client.stream.sent_duration</td>
            <td>grpc_service<br/>grpc_service<br/>grpc_method</td>
            <td>histogram</td>
            <td>grpc client send msg duration, include send total count</td>
        </tr>
        <tr>
            <td rowspan=2>lindb.traffic.grpc_server.stream</td>
            <td rowspan=2>grpc_service<br/>grpc_service<br/>grpc_method</td>
            <td>msg_received_failures</td>
            <td>grpc server receive msg failure</td>
        </tr>
        <tr>
            <td>msg_sent_failures</td>
            <td>grpc server send msg failure</td>
        </tr>
        <tr>
            <td>lindb.traffic.grpc_server.stream.received_duration</td>
            <td>grpc_service<br/>grpc_service<br/>grpc_method</td>
            <td>histogram</td>
            <td>grpc server receive msg duration, include receive total count/handle duration</td>
        </tr>
        <tr>
            <td>lindb.traffic.grpc_server.stream.sent_duration</td>
            <td>grpc_service<br/>grpc_service<br/>grpc_method</td>
            <td>histogram</td>
            <td>grpc server send msg duration, include send total count</td>
        </tr>
        <tr>
            <td>lindb.traffic.grpc_server</td>
            <td>-</td>
            <td>panics</td>
            <td>panic when grpc server handle request</td>
        </tr>
    </tbody>
</table>

### Concurrent

## Broker

## Storage