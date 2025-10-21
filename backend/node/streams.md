---
url: /vite-press/backend/node/streams.md
description: 读写流处理大数据、文件、网络通信等常用方式
---

# {{ $frontmatter.title }}（Readable/Writable Streams）

**读写流（Readable/Writable Stream）** 是处理大数据、文件、网络通信等常用方式。它们是 Node.js 核心模块 `stream` 中定义的四种流类型中的两种，另外还有 `Duplex`（双工）和 `Transform`（转换）流。

| 类型        | 说明                |
|-----------|-------------------|
| Readable  | 可读流，如读取文件、请求体     |
| Writable  | 可写流，如写入文件、响应体     |
| Duplex    | 可读可写，如 TCP socket |
| Transform | 对数据进行转换，如 zlib、加密 |

### 可读流（Readable）

```ts
import { createReadStream } from 'fs'


const readStream = createReadStream('./input.txt', {
  encoding: 'utf-8',
  highWaterMark: 64 * 1024, // 每次读取 64KB，默认是 64KB
})

readStream.on('data', chunk => {
  console.log('读取到数据：', chunk)
})

readStream.on('end', () => {
  console.log('读取完毕')
})

readStream.on('error', err => {
  console.error('读取出错：', err)
})
```

### 可写流（Writable）

```ts
import { createWriteStream } from 'fs'


const writeStream = createWriteStream('./output.txt', {
  encoding: 'utf-8',
  highWaterMark: 16 * 1024, // 默认 16KB
})

writeStream.write('第一行数据\n')
writeStream.write('第二行数据\n')

writeStream.end('最后一行') // 通知流写入结束
```

### 管道（pipe）读写流组合

最常见的操作之一是将读取流通过 `.pipe()` 写入到写入流中。

```ts
import { createReadStream, createWriteStream } from 'fs'


const readStream = createReadStream('./input.txt')
const writeStream = createWriteStream('./output.txt')

readStream.pipe(writeStream)
```

这会 **自动处理背压（backpressure）** 问题，不需要你手动 `pause/resume`。`.pipe()` 内部已经实现了背压逻辑：

* 自动判断写入是否阻塞

* 自动暂停/恢复读取流

* 极大简化了开发工作

### 背压（Backpressure）

背压是指：当可写流的写入速度跟不上可读流的读取速度时，系统自动对读取进行限制，从而防止内存堆积过多未处理的数据。

简单来说，**背压是一种流量控制机制**，确保数据生产者（Readable）不会压垮数据消费者（Writable）。工作原理:

* Node.js 的可写流内部有一个缓冲区 writableHighWaterMark

* 每次调用 write(chunk)，Node 会将数据写入缓冲区

* 如果缓冲区超过阈值，write() 会返回 false

* 开发者应暂停读取流，直到触发 drain 事件再恢复

```ts
// 实例代码

const ok = writeStream.write(chunk)
if (!ok) {
  readStream.pause() // 暂停读取
  writeStream.once('drain', () => {
    readStream.resume() // 写入缓冲区 drained 后再继续读取
  })
}
```

### 大文件拷贝工具

```ts
import { createReadStream, createWriteStream } from 'fs'


const copyFile = (src: string, dest: string) => {
  const rs = createReadStream(src)
  const ws = createWriteStream(dest)
  
  rs.pipe(ws)
  
  ws.on('finish', () => console.log('复制完成'))
}

copyFile('./big.mp4', './copy.mp4')
```

### Stream 优势

* 支持**边读边处理**（节省内存）
* 自动处理**背压**
* 适合处理**大文件、音视频、网络流**
