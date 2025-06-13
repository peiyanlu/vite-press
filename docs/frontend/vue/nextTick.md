---
title: nextTick
description: Vue nextTick 作用与原理
category: vue
tags:
  - vue
  - nextTick
---


# Vue {{ $frontmatter.title }} 原理解析


`Vue.nextTick(cb)` 会将 `cb` 推迟到 **DOM 更新完成之后** 再执行。

```js
this.msg = 'new value'
this.$nextTick(() => {
  // 此时 DOM 已更新
  console.log(this.$el.textContent)
})
```

| 点      | 内容                         |
|--------|----------------------------|
| 为什么异步？ | 避免多次重复更新，合并数据变更，优化性能       |
| 何时执行？  | 当前调用栈清空后，DOM 更新完成前后        |
| 如何实现？  | 使用微任务（Promise）优先调度回调队列     |
| 作用     | 保证在数据变更后访问 DOM 时 DOM 是最新状态 |

## 使用场景

* DOM 更新后获取最新状态
* 操作依赖更新后 DOM 的第三方库（如图表、动画）
* 单元测试中等待 Vue 完成渲染
* Vue 生命周期内异步任务处理（如 mounted 后立即访问 DOM）

## 为何需要


Vue 的响应式系统是**异步更新 DOM**。当你修改数据后：

```js
vm.message = 'Hello'
```

Vue 并不会立即更新 DOM，而是将更新放入一个 **队列** 中，等当前同步任务完成后，**统一执行 DOM 更新**。
这时，如果你立即去访问 DOM，得到的可能是旧值。

```js
vm.message = 'Hello'
console.log(vm.$el.textContent) // ❌ 旧值

Vue.nextTick(() => {
  console.log(vm.$el.textContent) // ✅ 新值
})
```

## Vue 2 VS Vue 3

| 版本    | 实现方式                        | 返回值支持                         |
|-------|-----------------------------|-------------------------------|
| Vue 2 | 自定义微任务队列                    | 回调方式为主                        |
| Vue 3 | 基于 `Promise.resolve().then` | 支持 Promise、`await nextTick()` |

Vue 3 的 `nextTick` 更加现代化，支持：

```ts
import { nextTick } from 'vue'


await nextTick()
console.log('DOM updated')
```

## 实现原理（源码级简化分析）


### 微任务队列优先级判断

```ts
if (typeof Promise !== 'undefined') {
  timerFunc = () => {
    Promise.resolve().then(flushCallbacks)
  }
} else if (typeof MutationObserver !== 'undefined') {
  // fallback to MutationObserver
} else if (typeof setImmediate !== 'undefined') {
  // fallback to setImmediate
} else {
  // fallback to setTimeout
}
```

> 异步任务机制从快到慢：`Promise` > `MutationObserver` > `setImmediate` > `setTimeout`


### 异步更新队列

```ts
let callbacks = []
let pending = false

function nextTick(cb) {
  callbacks.push(cb)
  if (!pending) {
    pending = true
    timerFunc()  // 异步调度 flushCallbacks
  }
}

function flushCallbacks() {
  pending = false
  const copies = callbacks.slice(0)
  callbacks.length = 0
  for (let cb of copies) {
    cb()
  }
}
```

### Vue 3 `nextTick` 更现代

```ts
export function nextTick<T = void>(fn?: () => T): Promise<void> {
  return fn ? Promise.resolve().then(fn) : Promise.resolve()
}
```

## 和 DOM 更新的关系

* 修改响应式数据时，不立即更新 DOM
* 所有修改统一在一个事件循环中完成
* DOM 更新完成后执行 `nextTick` 的回调

