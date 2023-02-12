# Write

## Ingest

写指标数据，支持 `flat buffer`/`proto buffer`/`InfluxDB`。

支持 `content-type` 如下；

- application/flatbuffer
- application/protobuf
- application/influx

支持 `content-encoding` 如下；

- gzip

建议 [LinDB client](../guide/client/) 写数据。

```plaintext
PUT|PUST /api/v1/write
```

参数:
| 参数              | 类型           | 描述                                                                    |
|:------------------|:---------------|:------------------------------------------------------------------------|
| `db`              | string         | 数据库名                                                                |
| `ns`              | string         | Namespace，默认为: default-ns                                           |

Body:

`Metric Data`

Example request(InfluxDB):

更多关于 [InfluxDB line protocol](https://docs.influxdata.com/influxdb/v1.8/write_protocols/line_protocol_reference/).

```shell
curl -XPOST --header "Content-Type: application/influx" http://localhost:9000/api/v1/write?db=_internal --data-binary 'host.cpu,host=192.169.0.1 value=12'
```
