---
title: 进程
description: node进程相关知识
category: node
tags:
  - node
  - process
order: 0
ignore: false
---


# {{ $frontmatter.title }}


`process` 是 `node` 的全局模块，作用比较直观。可以通过它来获得 `node` 进程相关的信息，比如运行 `node` 程序时的命令行参数，比如设置进程相关信息，比如设置环境变量。


## 环境变量


`process.env` 判断当前服务运行的环境

```js env.js
if (process.env.NODE_ENV === 'production') {
  console.log('生产环境');
} else {
  console.log('非生产环境');
}
```

```shell
NODE_ENV=production node env.js 
# 输出：非生产环境
```

## 异步


`process.nextTick(fn)` 将 `fn` 放到 `node` 事件循环的 下一个 `tick` 里；比 `setTimetout(fn, 0)` 性能高；


## 命令行参数


`process.argv` 返回一个数组，数组元素分别如下：

- 元素1：node

- 元素2：可执行文件的绝对路径

- 元素x：其他，比如参数等

```shell
NODE_ENV=dev node argv.js --env production
```

```md 
参数0: /Users/a/.nvm/versions/node/v6.1.0/bin/node
参数1: /Users/a/Documents/argv.js
参数2: --env
参数3: production
```

## node specific参数


`process.execArgv`：运行 `node` 程序特有的参数，比如 `--harmony`。这部分参数不会出现在 `process.argv` 里

```shell
node --harmony execArgv.js --nick chyingp
```

```js
process.execArgv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});
// 输出：
// 0: --harmony

process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});
// 输出：
// 0: /Users/a/.nvm/versions/node/v6.1.0/bin/node
// 1: /Users/a/Documents/execArgv.js
// 2: --nick
// 3: chyingp
```

## 工作路径

- `process.cwd()`：返回当前工作路径

- `process.chdir(directory)`：切换当前工作路径

```js
console.log('Starting directory: ' + process.cwd());
try {
  process.chdir('/tmp');
  console.log('New directory: ' + process.cwd());
} catch ( err ) {
  console.log('chdir: ' + err);
}

// 输出：
// Starting directory: /Users/a/Documents/2016.11.22-node-process
// New directory: /private/tmp
```

## IPC

- `process.connected`：如果当前进程是子进程，且与父进程之间通过 `IPC` 通道连接着，则为 `true`；

- `process.disconnect()`：断开与父进程之间的IPC通道，此时会将 `process.connected 置为` `false`；

```js
// connected.js
var child_process = require('child_process');

child_process.fork('./connectedChild.js', {
  stdio: 'inherit'
});

// connectedChild.js
console.log('process.connected: ' + process.connected);
process.disconnect();
console.log('process.connected: ' + process.connected);

// 输出：
// process.connected: true
// process.connected: false
```

## 标准输入输出


`process.stdin`、`process.stdout`、`process.stderr` 分别代表进程的标准输入、标准输出、标准错误输出。

```js
process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`data: ${ chunk }`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('end');
});
```

## 当前进程信息

- `process.pid`：返回进程 `id`。

- `process.title`：可以用它来修改进程的名字，当你用 `ps` 命令，同时有多个 `node` 进程在跑的时候，作用就出来了。

## 运行情况/资源占用情况

- `process.uptime()`：当前node进程已经运行了多长时间（单位是秒）。

- `process.memoryUsage()`：返回进程占用的内存，单位为字节。输出内容大致如下：

```txt
{
  rss: 19181568,
  heapTotal: 8384512, // V8占用的内容
  heapUsed: 4218408 // V8实际使用了的内存
}
```

- `process.cpuUsage([previousValue])`：`CPU` 使用时间耗时，单位为毫秒。`user` 表示用户程序代码运行占用的时间，`system` 表示系统占用时间。如果当前进程占用多个内核来执行任务，那么数值会比实际感知的要大。官方例子如下：

```js
const startUsage = process.cpuUsage();
// { user: 38579, system: 6986 }

// spin the CPU for 500 milliseconds
const now = Date.now();
while (Date.now() - now < 500) ;

console.log(process.cpuUsage(startUsage));
// { user: 514883, system: 11226 }
```

- `process.hrtime()`：一般用于做性能基准测试。返回一个数组，数组里的值为 `[[seconds, nanoseconds]` （`1` 秒等 `10` 的**九次方毫微秒**）。
  注意，这里返回的值，是相对于过去一个随机的时间，所以本身没什么意义。仅当你将上一次调用返回的值做为参数传入，才有实际意义。 把官网的例子稍做修改：

```js
var time = process.hrtime();

setInterval(() => {
  var diff = process.hrtime(time);
  
  console.log(`Benchmark took ${ diff[0] * 1e9 + diff[1] } nanoseconds`);
}, 1000);
```

## node可执行程序相关信息

- `process.version`：返回当前 `node` 的版本，比如 `v6.1.0`。

- `process.versions`：返回 `node` 的版本，以及依赖库的版本，如下所示。

```txt
{ 
  http_parser: '2.7.0',
  node: '6.1.0',
  v8: '5.0.71.35',
  uv: '1.9.0',
  zlib: '1.2.8',
  ares: '1.10.1-DEV',
  icu: '56.1',
  modules: '48',
  openssl: '1.0.2h' 
}
```

- `process.release`：返回当前 `node` 发行版本的相关信息，大部分时候不会用到。具体字段含义：

```txt
{
  name: 'node',
  lts: 'Argon',
  sourceUrl: 'https://nodejs.org/download/release/v4.4.5/node-v4.4.5.tar.gz',
  headersUrl: 'https://nodejs.org/download/release/v4.4.5/node-v4.4.5-headers.tar.gz',
  libUrl: 'https://nodejs.org/download/release/v4.4.5/win-x64/node.lib'
}
```

- `process.config`：返回当前 `node` 版本 编译时的参数，同样很少会用到，一般用来查问题。

- `process.execPath`：`node` 可执行程序的绝对路径，比如 `/usr/local/bin/node`

## 进程运行所在环境

- `process.arch`：返回当前系统的处理器架构（字符串），比如 `arm`, `ia32`, or `x64`。

- `process.platform`：返回关于平台描述的字符串，比如 `darwin`、`win32` 等。

## 警告信息


`process.emitWarning(warning)` 是 `v6.0.0` 新增的接口，可以用来抛出警告信息

```js
process.emitWarning('Something happened!');
// (node:50215) Warning: Something happened!

process.emitWarning('Something Happened!', 'CustomWarning');
// (node:50252) CustomWarning: Something Happened!

process.on('warning', (warning) => {
  console.warn(warning.name);
  console.warn(warning.message);
  console.warn(warning.stack);
});
```

## 向进程发送信号


`process.kill(pid, signal)` 它并不是用来杀死进程的，而是用来向进程发送信号。举个例子：

```js
console.log('hello');

process.kill(process.pid, 'SIGHUP');

console.log('world');
```

## 终止进程

- `process.exit([exitCode])` 可以用来立即退出进程。即使当前有操作没执行完，比如 `process.exit()` 的代码逻辑，或者未完成的异步逻辑。

- 写数据到 `process.stdout` 之后，立即调用 `process.exit()` 是不保险的，因为在 `node` 里面，往 `stdout`
  写数据是非阻塞的，可以跨越多个事件循环。于是，可能写到一半就跪了。比较保险的做法是，通过 `process.exitCode` 设置退出码，然后等进程自动退出。

- 如果程序出现异常，必须退出不可，那么，可以抛出一个未被捕获的 `error`，来终止进程，这个比 `process.exit()` 安全。来段官网的例子镇楼：

```js
// How to properly set the exit code while letting
// the process exit gracefully.
if (someConditionNotMet()) {
  printUsageToStdout()
  process.exitCode = 1
}
```

## 事件

- `beforeExit`：进程退出之前触发，参数为 `exitCode`。（此时 `eventLoop` 已经空了）如果是显式调用 `process.exit()` 退出，或者未捕获的异常导致退出，那么 `beforeExit` 不会触发。（我要，这事件有何用。。。）

- `exit`：进程退出时触发







