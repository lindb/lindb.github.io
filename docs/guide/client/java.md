# Java

Use [Java Client](https://github.com/lindb/client_java) write data.

## Installation

This clients are hosted in `Maven central Repository`.

If you want to use it with the Maven, you have to add only the dependency on the artifact.

Download the latest version:

### Maven 

```XML:no-line-numbers
<dependency>
    <groupId>io.lindb</groupId>
    <artifactId>lindb-client</artifactId>
    <version>0.0.1</version>
</dependency>
```

### Gradle

```groovy:no-line-numbers
dependencies {
    implementation "io.lindb:lindb-client:0.0.1"
}
```

## Example

Write data use asynchronous, example as below, [more examples](https://github.com/lindb/client_java/tree/main/src/test/java/io/lindb/client/example)。

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
