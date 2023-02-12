# Client libraries

基于 [LinDB API](../api.md) 提供各开发语言数据写入 SDK，目前已经支持的语言如下：

- [Go](go.md)
- [Java](java.md)

:::tip
欢迎提交其它语言的实现。
:::

## Client 如何写入

Client 写数据只是对 `Write API` 一个 `HTTP` 的封装，简单的方式直接通过对应语言的 `HTTP Client` 进行数据写入。

目前 `Go` 和 `Java` 实现了基于同步 `Client` 的异步数据写入。

下面以 `Proto Buffer` 协议来介绍如何通过自己的熟悉的开发语言实现一个 `LinDB Client` 数据写入。

:::tip
同一个 Metric 可以支持多个简单数据类型和一个复杂数据类型的字段，但两者不能并存。
:::

### 前提条件

- 了解 `LinDB` 基本的[数据模型概念](../concept.md)；
- 目前支持 `flat buffer`/`proto buffer`/`InfluxDB` 三种协议，推荐使用 `flat buffer`/`proto buffer`，具体安装请参考其官网说明；
	* [Proto Buffer](https://protobuf.dev/)
	* [Flat Buffer](https://google.github.io/flatbuffers/)
- `LinDB` 对应的数据模型定义如下；
	* [Proto Buffer Format](https://github.com/lindb/common/blob/main/proto/v1/linmetrics.proto)
	* [Flat Buffer Format](https://github.com/lindb/common/blob/main/proto/v1/metrics.fbs)
- 通过 `flat buffer` 或者 `proto buffer` 生成对应语言的协议文件；
- [Write API 定义](../../api/write.md)；

### 同步写入

其实同步写入就是通过 `HTTP` 把对应协议的数据通过 `Binary` 的方式发送到后端，下面是一个简单的伪代码。

```go
// put metric into metric list
metricList := &protoMetricsV1.MetricList{
	Metrics: []*protoMetricsV1.Metric{
		{
			Name:      "host_disk",
			Timestamp: timeutil.Now(), // ms
			Tags: []*protoMetricsV1.KeyValue{
				{Key: "host", Value: "127.0.0.1"},
				{Key: "disk", Value: "disk0"},
				{Key: "partition", Value: "partition0"},
			},
			SimpleFields: []*protoMetricsV1.SimpleField{
				{Name: "size", Type: protoMetricsV1.SimpleFieldType_DELTA_SUM, Value: 1}, // data point
				{Name: "usage", Type: protoMetricsV1.SimpleFieldType_LAST, Value: 0.83}, // data point
			},
		},
	},
}
// marshal metric list
body, _ := metricList.Marshal() // if use gzip compress body data, need set content_encoding=gzip
httpCli := resty.New()
r := httpCli.R()
r.Header.Set(headers.ContentType, constants.ContentTypeProto) // add content_type=application/protobuf
rs, err := r.SetBody(body).Put("http://127.0.0.1:4000/api/v1/write?db=_internal") // send http request
if err != nil {
	panic(err)
}
fmt.Println(rs)
```

### 异步写入

如果对写入性能有一定的要求可以根据对应语言的特性实现一个异步写入的 `Client`，下面是 `Go` 和 `Java` 异步写入的机制说明供参考。

![async_write](@images/design/async_client.png)

1. 对外提供统一的数据写入 `API`，数据通过该 `API` 写入到 `DataPointBuffer` 队列中；
2. 后台启动 2 个异步线程，一个线程消费 `DataPointBuffer` 中的数据并写入到 `SendBuffer` 队列中，另外一个线程消费 `SendBuffer` 中的数据，并通过 `HTTP` 的方式把数据写到后台；
3. 同时提供 `Callback` 的方式来监听异步处理中的异常；

:::tip
对应的 `Buffer` 需要通过时间和 `Size` 来控制；
- 对于数据写入很低频导致数据一直在 `Buffer` 中没有发送出去，通过时间来控制如果在一定时间内没有新数据也需要把 `Buffer` 中的数据发送到后台；
- 通过 `Size` 来控制每次发送多少个 `Metric`；
:::
