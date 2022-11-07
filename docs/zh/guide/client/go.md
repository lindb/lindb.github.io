# Go

使用 [Go Client](https://github.com/lindb/client_go) 写数据。

## 安装

- 安装 `go 1.18` 及以上版本；
- 添加在项目中添加 Client 依赖（go.mod）：
  ```sh:no-line-numbers
  go get github.com/lindb/client_go
  ```
- 在代码中引用 `github.com/lindb/client_go`；

## 例子

Client 提供异步方式写数据，具体写数据例子如下，[更多例子](https://github.com/lindb/client_go/tree/main/example)。

```go
package main

import (
	"context"
	"fmt"
	"time"

	lindb "github.com/lindb/client_go"
	"github.com/lindb/client_go/api"
)

func main() {
	// create write client with options
	cli := lindb.NewClientWithOptions(
		"http://localhost:9000",
		lindb.DefaultOptions().SetBatchSize(200).
			SetReqTimeout(60).
			SetRetryBufferLimit(100).
			SetMaxRetries(3),
	)
	// get write client
	w := cli.Write("_internal")
	// get error chan
	errCh := w.Errors()
	go func() {
		for err := range errCh {
			fmt.Printf("got err:%s\n", err)
		}
	}()

	// write some metric data
	for i := 0; i < 10; i++ {
		// write cpu data
		w.AddPoint(context.TODO(), api.NewPoint("cpu").
			AddTag("host", "host1").
			AddField(api.NewSum("load", 10.0)).
			AddField(api.NewLast("usage", 24.0)))
		// write memory data
		w.AddPoint(context.TODO(), api.NewPoint("memory").
			AddTag("host", "host1").
			AddField(api.NewLast("used", 10.0)).
			AddField(api.NewLast("total", 24.0)))
	}

	// close write client
	w.Close()
}
```
