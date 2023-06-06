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

promise.then(res=> {
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

- Promise.all

- Promise.allSettled

- Promise.race

- Promise.any

- Promise.reject

- Promise.resolve




