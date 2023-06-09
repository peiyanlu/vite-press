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


`then` 和 `catch` 支持链式操作


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
import { createCancelablePromise } from '@algolia/autocomplete-core/dist/esm/utils'
import { resolve } from 'pathe'
import reject = createCancelablePromise.reject


Promise.reject(false)

// 等同于
new Promise((resolve, reject)=>{
  reject(false)
})
```

### Promise.resolve

`Promise.resolve()` 方法将给定的值 `resolves` 为 `Promise`。如果参数本身就是一个 `Promise` 对象，则直接返回这个 `Promise` 对象。如果值是一个 `thenable`，`Promise.resolve` 将调用 `then` 方法，并准备两个回调；否则，返回的承诺将以该值实现。

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

