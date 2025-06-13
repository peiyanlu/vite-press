---
title: Promise
description: 详细介绍promise
category: javascript
tags:
  - javascript
  - promise
---


# {{ $frontmatter.title }}


`Promise` 是一个对象，它代表了一个异步操作的最终完成或者失败。`Promise` 是异步编程的一种解决方案，是一个构造函数


## 使用


`Promise` 实例化的时候传入的是一个函数，函数中接收两个函数参数：`resolve` 和 `reject`：

- `resolve`：把 `Promise` 的状态由进行中变为成功状态；

- `reject`：把 `Promise` 的状态由进行中变为失败状态。

```ts
const promise = new Promise((resolve, reject) => {
  resolve(true);
})

promise.then(res => {
  console.log(res) // trre
})
```

## 状态

- `pending`：进行中，表示 `Promise` 还在执行阶段，没有执行完成。

- `fulfilled`：成功状态，表示 `Promise` 成功执行**完成**。

- `rejected`：拒绝状态，表示 `Promise` 执行被拒绝，也就是**失败**。

`Promise` 的状态，只可能是其中一种状态，从进行中变为成功或失败状态之后，状态就固定了，不会再发生改变。


## 实例方法

- **`then`**

执行 `resolve` 时，`Promise` 状态从 `pending` 变为 `fulfilled` ，会执行 `.then `方法。`then` 方法接收的参数也是一个函数，函数中携带一个参数，该参数是 `resolve(res)` 返回的数据。

- **`catch`**

执行 `reject` 时，`Promise` 状态从 `pending` 变为 `rejected`，会执行 `.catch` 方法。`catch` 方法接收的也是一个函数，函数中携带一个参数，该参数为 `reject(err)` 返回的数据。

- **`finally`**

无论执行的结果是成功还是失败，最终都会执行 `.finally` 方法。`finally` 方法接收的也是一个函数。

`then` 和 `catch` 支持链式操作，因为返回的是**新的 Promise 对象**。


## 静态方法


### Promise.all


> `Promise.all` 等待**所有都完成**或**第一个失败**。
> > `Promise.all` **当且仅当**传入的可迭代对象**为空**时为**同步**

[Promise.all()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) 方法接收 `iterable` 类型数据并且返回一个 `Promise` 实例，返回值将会按照传入的顺序返回。

> 注：Array，String，Map，Set 都属于 ES6 的 iterable 类型。

- 同步返回：返回一个完成的 `Promise`。

当且仅当传入的参数是一个空的可迭代对象，返回一个已完成（`already resolved`）状态的 `Promise`。

```ts
console.log(Promise.all([])) // will be immediately resolved: Promise { <state>: "fulfilled", <value>: Array[0] }
```

- 异步返回：返回一个处理中（`pending`）的 `Promise`。

    - 如果传入的参数不包含任何 `promise`，则返回一个异步完成（`asynchronously resolved`）`Promise`。

      :::warning
      `Google Chrome 58` 在这种情况下返回一个已完成（`already resolved`）状态的 `Promise`。
      :::

    - 其他情况下这个返回的 `promise` 之后会在所有的 `promise` 都完成或有一个 `promise` 失败时异步地变为完成或失败。

```ts
const p1 = Promise.all([ 1337, "hi" ])
const p2 = Promise.all([ Promise.resolve(1337), "hi" ])
console.log(p1) // asynchronously: Promise { <state>: "pending" }
console.log(p2) // Promise { <state>: "pending" }

setTimeout(function () {
  console.log('the stack is now empty');
  console.log(p1); // Promise { <state>: "fulfilled", <value>: Array[2] }
  console.log(p2); // Promise { <state>: "fulfilled", <value>: Array[2] }
});
```

### Promise.allSettled


> `Promise.allSettled` 等待所有结果已敲定（成功或者失败）

[Promise.allSettled()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled) 方法接收 `iterable` 类型数据并且返回一个 `Promise`
实例，返回值是带有带有描述每个 `promsie` 结果的对象数组

- 同步返回：返回一个完成的 `Promise`。

当且仅当传入的参数是一个空的可迭代对象，返回一个已完成（`already resolved`）状态的 `Promise`。

```ts
console.log(Promise.allSettled([])) // will be immediately resolved: Promise { <state>: "fulfilled", <value>: Array[0] }
```

- 异步返回：返回一个处理中（`pending`）的 `Promise`。

返回的 `promise` 在给定的 `iterable` 中所有 `promise` 已经敲定时（要么已兑现，要么已拒绝）变为成功。

**每个结果对象都有以下的属性：**

- `status`：一个字符串，要么是 `fulfilled`，要么是 `rejected`，表示 `promise` 的最终状态。

- `value`：仅当 `status` 为 `fulfilled`，才存在。在 `promise` 兑现时才有 `value`。

- `reason`：仅当 `status` 为 `rejected`，才存在，在 `promise` 拒绝时才有 `reason`。

:::tip

- `Promise.allSettled()` 方法是 `promise` 并发性方法的其中之一。在你有多个不依赖于彼此成功完成的异步任务时，或者你总是想知道每个 `promise` 的结果时，使用 `Promise.allSettled()`。

- 相比之下，如果任务相互依赖，或者如果你想立即拒绝其中任何任务，`Promise.all()` 返回的 `Promise` 可能更合适。

:::


### Promise.race


> `Promise.race` 等待任意一个兑现或拒绝

[Promise.race()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/race) 方法接收 `iterable` 类型数据并且返回一个 `Promise` 实例。

返回一个处理中（`pending`）的 `Promise`。迭代器中的任意一个 `promise` 解决或拒绝，返回的 `promise` 就会异步地解析或拒绝（一旦堆栈为空）。

- 如果传的迭代是空的，则返回的 `promise` 将永远等待。

- 传入的参数不包含任何 `promise` 或者是已解决/拒绝的 `promise`，则 `Promise.race` 将解析为迭代中找到的第一个值。

### Promise.any


> `Promise.any` 等待任意一个已兑现或全部拒绝

[Promise.any()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/any) 方法接收 `iterable` 类型数据并且返回一个 `Promise` 实例。

- 如果传入的可迭代对象是非空的，那么当可迭代对象内的任意一个 `promise` 兑现后，或者当可迭代对象内存在非 `promise` 值时，该方法所返回的 `promise` 都会异步的变成兑现状态。

- 如果传入了一个空的可迭代数组，那么该方法就会同步返回一个已经被拒 `promise`，其拒因是一个 `AggregateError` 实例，该实例的 `errors` 属性会是一个空数组。

### Promise.reject


`Promise.reject()` 方法返回一个带有拒绝原因的 `Promise` 对象

```ts
Promise.reject(false)

// 等同于
new Promise((resolve, reject) => {
  reject(false)
})
```

### Promise.resolve


`Promise.resolve()` 方法将给定的值 `resolves` 为 `Promise`。
如果值是一个 `thenable`，`Promise.resolve` 将调用 `then` 方法，并准备两个回调；否则，返回的 `Promise` 将以该值实现。

1. 如果参数本身就是一个 `Promise` 对象，则直接返回这个 `Promise` 对象。

2. 如果参数是一个 `thenable` 对象

`thenable` 对象指的是具有 `then` 方法的对象：

```ts
let thenable = {
  then: (resolve, reject) => {
    resolve(thenable)
  }
}
```

`Promise.resolve` 方法会将这个对象转为 `Promise` 对象，然后就立即执行 `thenable` 对象的 `then` 方法。

```ts
let thenable = {
  then: function (resolve, reject) {
    resolve(42);
  }
};

let p1 = Promise.resolve(thenable);
p1.then(function (value) {
  console.log(value);  // 42
});
```

`thenable` 对象的 `then` 方法执行后，对象 `p1` 的状态就变为 `resolved`，从而立即执行最后那个 `then` 方法指定的回调函数，输出 `42`

:::warning

- 不要在解析为自身的 `thenable` 上调用 `Promise.resolve`。这将导致无限递归，因为它试图展平无限嵌套的 `promise`

```ts
let thenable = {
  then: (resolve, reject) => {
    resolve(thenable)
  }
}

Promise.resolve(thenable) //这会造成一个死循环
```

:::

3. 如果参数不是具有then方法的对象或者是一个原始值

`Promise.resolve` 方法返回一个新的 `Promise` 对象，状态为 `resolved`。

4. 不带有任何参数

`Promise.resolve` 方法允许调用时不带参数，直接返回一个 `resolved` 状态的 `Promise` 对象。

:::warning

- 立即 `resolve` 的 `Promise` 对象，是在本轮 **事件循环** （event loop）的结束时执行执行，不是马上执行，也不是在下一轮 **事件循环** 的开始时执行

- 原因：传递到 `then()` 中的函数被置入了一个微任务队列，而不是立即执行，这意味着它是在 `JavaScript` 事件队列的所有运行时结束了，事件队列被清空之后，才开始执行
  :::

---
**resolve()本质作用**

- `resolve()` 是用来表示 `promise` 的状态为 `fulfilled`，相当于只是定义了一个有状态的 Promise，但是并没有调用它；

- `promise` 调用 `then` 的前提是 `promise` 的状态为 `fulfilled`；

- 只有 `promise` 调用 `then` 的时候，`then` 里面的函数才会被推入微任务中；

## async/await


> `async/await` 是 JavaScript（ES2017 引入）中基于 `Promise` 的语法糖。`await` 的作用相当于在 `.then()` 中获取结果。它使异步代码更接近同步流程写法。

**async**：用于声明一个异步函数，函数会隐式返回一个 `Promise`。

**await**：只能在 `async` 函数中使用，等待 `Promise` 对象的解析结果。如果不是 `Promise`，它会被自动包装成一个 `Promise.resolve(...)`。


### 注意事项

- await 会阻塞当前 async 函数内部后续代码的执行，直到 Promise 完成。

- 异步函数默认返回一个 Promise，可以使用 .then() 继续链式调用。

- 不能在顶层作用域直接使用 await（除非是在模块中，或者环境支持顶层 await，比如 Node.js v14+ / 浏览器模块）。

### await 支持

| 表达式                   | 是否被 `await` 支持 | 说明                  |
|-----------------------|----------------|---------------------|
| `Promise.resolve(1)`  | ✅              | 等待其完成               |
| `123` / `"str"`       | ✅              | 自动包装成 Promise       |
| `asyncFn()`           | ✅              | 返回的是 Promise        |
| `Promise.reject(err)` | ✅（需捕获）         | 会抛出异常               |
| `{ then() { ... } }`  | ✅              | 被当作 Thenable 处理     |
| `null` / `undefined`  | ✅              | 自动包装为 Promise       |
| `throw new Error()`   | ✅（需捕获）         | 表达式本身抛出同步异常也会 catch |

### 应用

- 重试

```ts
async function retry<T>(fn: () => Promise<T>, times: number): Promise<T> {
  let error;
  for (let i = 0; i < times; i++) {
    try {
      return await fn();
    } catch (e) {
      error = e;
    }
  }
  throw error;
}
```

- 顺序执行

```ts
async function runSequential(tasks: (() => Promise<any>)[]) {
  for (const task of tasks) {
    await task();
  }
}
```

- sleep

```ts
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
```

- 并发

```ts
export async function asyncPool<T>(
  limit: number,                          // 并发限制数，比如最多同时执行 3 个任务
  tasks: (() => Promise<T>)[]            // 任务列表，都是返回 Promise 的函数
): Promise<T[]> {
  const results: T[] = []                // 存储每个任务的返回结果（按顺序）
  const executing: Promise<void>[] = []  // 当前正在执行的任务（用于 await 所有）
  
  let index = 0                          // 当前要处理的任务下标
  
  // 定义一个内部函数，用来递归启动后续任务
  const runNext = async () => {
    if (index >= tasks.length) return    // 边界条件：所有任务都已处理完
    
    const i = index++                    // 拿到当前任务索引并自增
    const task = tasks[i]                // 拿到当前要执行的任务函数
    
    try {
      const result = await task()        // 执行任务并等待其完成
      results[i] = result                // 将结果存入对应位置（保证顺序）
    } catch (e) {
      // 也可以选择忽略错误或用 null 占位
      results[i] = Promise.reject(e) as any  // 捕获错误，放入对应位置
    }
    
    // 递归执行下一个任务（一个完成就继续下一个）
    await runNext()
  }
  
  // 启动前 limit 个任务（最多不超过任务总数）
  for (let i = 0; i < Math.min(limit, tasks.length); i++) {
    const p = runNext()                  // 启动一个任务链
    executing.push(p)                    // 加入执行中的 Promise 列表
  }
  
  await Promise.all(executing)           // 等待所有任务完成
  return results                         // 返回最终的任务结果数组
}

```

| 位置                       | 说明                                   |
|--------------------------|--------------------------------------|
| `index++`                | 控制当前任务编号并推进，下一个任务编号就是递增后的值。是任务调度的核心。 |
| `runNext()`              | 每个任务完成后会调用自己，从而形成递归，继续推进下一个任务。       |
| `Promise.all(executing)` | 控制整个“任务启动器”流程在所有并发任务链执行完后再返回结果。      |
| `results[i] = ...`       | 保证了结果数组的顺序性（即结果和任务顺序一致），而不是异步完成顺序。   |

🔄 并发流程示意图（假设 limit = 2）

```text
初始任务队列: [task0, task1, task2, task3, task4]

⏱ 第1轮：
- task0 开始（runNext0）——等待
- task1 开始（runNext1）——等待

🟢 task0 完成后 → runNext0 启动 task2
🟢 task1 完成后 → runNext1 启动 task3
🟢 task2 完成后 → runNext0 启动 task4
🟢 task3、task4 完成 → 所有执行完成

```
