# State

## Configuration

返回当前节点的配置信息。

```plaintext
GET /api/v1/config
```

Example request:

```shell
curl -G http://localhost:9000/api/v1/config
```

Example response:

```json
{
  "config": "toml config",
  "node": {
    "hostIp": "192.168.0.108",
    "hostName": "192.168.0.108",
    "grpcPort": 9001,
    "httpPort": 4000,
    "version": "0.2.0",
    "onlineTime": 1675002153969
  }
}
```

## List logs

返回当前节点的日志文件。

```plaintext
GET /api/v1/log/list
```

Example request:

```shell
curl -G http://localhost:9000/api/v1/log/list
```

Example response:

```json
[
  {
    "name": "lind-standalone.log",
    "size": 21351
  }
]
```

## View log

返回日志文件中的内容。

```plaintext
GET /api/v1/log/view
```

参数:
| 参数              | 类型           | 描述                                                                    |
|:------------------|:---------------|:------------------------------------------------------------------------|
| `file`            | string         | 文件名                                                                  |
| `size`            | int            | 返回最新日志的大小                                                      |

Example request:

```shell
curl -G http://localhost:9000/api/v1/log/view?file=lind-standalone.log&size=262144
```

Example response:

```plaintext
2023-01-29 22:42:19.208	INFO	lind/runner.go:47	[       CMD] [Main]: maxprocs: Leaving GOMAXPROCS=[12]: CPU quota undefined
2023-01-29 22:42:20.760	INFO	standalone/runtime.go:210	[Standalone] [Runtime]: etcd server is ready
2023-01-29 22:42:20.763	INFO	state/etcd.go:73	[standalone] [ETCD]: new etcd client successfully	{"endpoints": ["http://localhost:2379"]}
2023-01-29 22:42:20.782	INFO	state/etcd.go:73	[standalone] [ETCD]: new etcd client successfully	{"endpoints": ["http://localhost:2379"]}
2023-01-29 22:42:20.801	INFO	broker/runtime.go:167	[    Broker] [Runtime]: starting broker	{"host": "192.168.0.108", "ip": "192.168.0.108", "http": 9000, "grpc": 9001}
2023-01-29 22:42:20.803	INFO	state/etcd.go:73	[    broker] [ETCD]: new etcd client successfully	{"endpoints": ["http://localhost:2379"]}
2023-01-29 22:42:20.803	INFO	broker/runtime.go:400	[    Broker] [Runtime]: start broker state repository successfully
2023-01-29 22:42:20.803	INFO	broker/runtime.go:423	[    Broker] [Runtime]: starting GRPC server
2023-01-29 22:42:20.804	INFO	discovery/registry.go:80	[Coordinator] [Registry]: starting register node	{"path": "/live/nodes/192.168.0.108:9001"}
2023-01-29 22:42:20.804	INFO	discovery/discovery.go:65	[Coordinator] [Discovery]: create new discovery	{"watch": "/master/elected"}
2023-01-29 22:42:20.804	INFO	rpc/server.go:94	[        RPC] [GRPCServer]: GRPCServer start serving	{"address": ":9001"}
2023-01-29 22:42:20.804	INFO	coordinator/master_controller.go:243	[     Master] [MasterController]: new master finished election	{"node": "{\"hostIp\":\"192.168.0.108\",\"hostName\":\"192.168.0.108\",\"grpcPort\":9001,\"httpPort\":9000,\"version\":\"v0.2.0\",\"onlineTime\":1675003305032}"}
2023-01-29 22:42:20.804	INFO	broker/runtime.go:246	[     Broker] [Runtime]: waiting broker state machine start
2023-01-29 22:42:20.815	INFO	elect/election.go:135	[Coordinator] [Election]: try elect master	{"node": "192.168.0.108:9001"}
```
