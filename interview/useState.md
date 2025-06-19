---
url: /interview/useState.md
---
# React useState 是同步还是异步？性能调度详解

## 一、useState 是同步还是异步？

> useState 是 **同步赋值，异步更新 UI**。

* `setState` 会立即创建一个“更新任务”加入调度队列。
* 但组件不会立刻重新渲染，而是在下一轮调度中统一处理。

### 示例：

```tsx
const [count, setCount] = useState(0)

const handleClick = () => {
  setCount(count + 1)
  console.log(count) // 打印的是旧值
}
```

***

## 二、useState 调度机制流程

```text
调用 setState
    ↓
创建更新任务（Update）
    ↓
调度更新（Scheduler）→ 判断优先级
    ↓
标记组件为 dirty（需更新）
    ↓
组件重新渲染（Re-render）
    ↓
commit 阶段 → 更新真实 DOM
```

### 状态更新是同步调度

```tsx
setCount(prev => {
  console.log('设置新值') // 同步执行
  return prev + 1
})
```

***

## 三、React 18 的批处理机制（Batching）

> React 18 开始，**所有 setState 默认批处理**，无论在同步还是异步中。

### 示例：

```tsx
const handleClick = async () => {
  setCount(count + 1)
  setValue('new')
  // React 18 中会合并为一次 render
}
```

### 哪些会批处理：

| 场景                       | 是否批处理           |
| ------------------------ | --------------- |
| 同步事件（如 onClick）          | ✅ 是             |
| async/await、Promise.then | ✅ 是（React 18 起） |
| setTimeout/setInterval   | ✅ 是（React 18 起） |
| 原生 DOM 事件                | ❌ 否（需手动批处理）     |

***

## 四、手动批处理（flushSync）

```tsx
import { flushSync } from 'react-dom'

flushSync(() => {
  setCount(count + 1)
})
```

不建议频繁使用，仅用于性能或同步 DOM 需求场景。

***

## 五、面试答题模板

> `useState` 的更新是同步调度的，但不会立即触发 UI 更新。`setState` 会将变更放入 React 的调度系统中，UI 会在之后的 commit 阶段统一更新。
>
> React 18 引入了**自动批处理机制（automatic batching）**，使得即便在异步代码中调用多个 `setState`，也只会触发一次渲染，从而提高性能。
>
> 如果需要立即更新 UI，可以使用 `flushSync` 强制同步渲染。

***

## 六、总结

* `useState` 是同步设置状态，异步更新 UI。
* React 会合并多个更新，进行批处理优化。
* React 18 后默认支持异步批处理。
* 组件更新流程分为：调度 → diff → commit。
* 正确获取最新状态应使用函数式更新或副作用（`useEffect`）。
