# Client libraries

Implement write data SDK based on [LinDB API](../api.md)，the following LinDB client libraries are available:

- [Go](go.md)
- [Java](java.md)

:::tip
Welcome to contribute implementations in other languages.
:::

## How to write

Writing data is just a `HTTP` encapsulation of `Write API`, and the simple way is to write data directly through the `HTTP Client`.

Currently `Go` and `Java` implement asynchronous data writing based on synchronous `Client`.

The following uses the `Proto Buffer` protocol to introduce how to implement a `LinDB Client` data writing.

:::tip
The same metric can support fields of multiple simple data types and one complex data type, but the two cannot co-exist.
:::

### Prerequisites

- Understand [the basic data model concept](../concept.md);
- Currently supports `flat buffer`/`proto buffer`/`InfluxDB` three protocols, it is recommended to use `flat buffer`/`proto buffer`, please refer to its official website for specific installation instructions;
	* [Proto Buffer](https://protobuf.dev/)
	* [Flat Buffer](https://google.github.io/flatbuffers/)
- The data model corresponding to `LinDB` is defined as follows;
	* [Proto Buffer Format](https://github.com/lindb/common/blob/main/proto/v1/linmetrics.proto)
	* [Flat Buffer Format](https://github.com/lindb/common/blob/main/proto/v1/metrics.fbs)
- Generate the protocol file of the corresponding language through `flat buffer` or `proto buffer`;
- [Write API Definition](../../api/write.md);

### Synchronous 

In fact, synchronous writing is to send the data of the corresponding protocol to the backend through `Binary` via `HTTP`, the following is a simple pseudo-code.

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

### Asynchronous 

For writing performance, can implement a `Client` for asynchronous writing according to the specific language. The following is a description of the asynchronous writing mechanism of `Go` and `Java` for reference.

![async_write](@images/design/async_client.png)

1. Provide a unified data writing `API`, and the data is written into the `DataPointBuffer` queue via the `API`;
2. Start two asynchronous threads in the background, one thread consumes the data in `DataPointBuffer` and writes it to the `SendBuffer` queue, and the other thread consumes the data in `SendBuffer`, and writes the data to `LinDB Broker` via 'HTTP';
3. At the same time, provide `Callback` method to monitor exceptions in asynchronous processing;

:::tip
The corresponding `Buffer` needs to be controlled by `Time` and `Size`;
- The low frequency of data writing leads to the fact that the data has not been sent out in `Buffer`, and it is controlled by time. If there is no new data within a certain period of time, the data in `Buffer` needs to be sent;
- Use `Size` to control how many `Metric` to send each time;
:::
