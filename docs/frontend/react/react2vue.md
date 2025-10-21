---
title: React vs Vue
description: React 对比 Vue3 API
tags:
  - React
---


# {{ $frontmatter.title }}


# Vue 3 Composition API ↔ React 18 Hooks API 对照文档


## ✅ 状态管理

| Vue 3        | React 18                      | 功能说明                                |
|--------------|-------------------------------|-------------------------------------|
| `ref()`      | `useState()`                  | Vue 的基本响应式单值；React 的基本状态钩子          |
| `reactive()` | `useState()` / `useReducer()` | Vue 深层响应；React 需使用对象/Reducer 管理复杂状态 |
| `readonly()` | 无                             | React 默认不变，Vue 可显式标注只读              |

---


## ✅ 派生状态（计算值）

| Vue 3                 | React 18                     | 功能说明                    |
|-----------------------|------------------------------|-------------------------|
| `computed(() => ...)` | `useMemo(() => ..., [deps])` | Vue 自动依赖收集，React 手动管理依赖 |

---


## ✅ 副作用监听

| Vue 3               | React 18                       | 功能说明                                      |
|---------------------|--------------------------------|-------------------------------------------|
| `watch(source, cb)` | `useEffect(() => ..., [deps])` | Vue 可监听 ref/reactive，React 监听 state/props |
| `watchEffect(cb)`   | `useEffect(() => ..., [deps])` | Vue 自动依赖追踪；React 需手动写 deps                |
| `onUnmounted(cb)`   | `useEffect` 的返回值清理函数           | 都在组件卸载时执行                                 |

---


## ✅ 生命周期对照

| 生命周期阶段  | Vue 3               | React 18                                   |
|---------|---------------------|--------------------------------------------|
| 挂载      | `onMounted()`       | `useEffect(() => {}, [])`                  |
| 卸载      | `onUnmounted()`     | `useEffect(() => { return () => {} }, [])` |
| 更新      | `onUpdated()`       | 无等价，`useEffect(() => {}, [deps])` 可近似      |
| 错误捕获    | `onErrorCaptured()` | `<ErrorBoundary>`（类组件）                     |
| DOM 更新后 | `nextTick()`        | `setTimeout(..., 0)` 或微任务                  |

---


## ✅ DOM 引用

| Vue 3                      | React 18                   | 功能说明          |
|----------------------------|----------------------------|---------------|
| `ref="el"` + `elRef.value` | `useRef()` + `ref={elRef}` | 都可访问原生 DOM 元素 |

---


## ✅ 依赖注入与共享

| Vue 3            | React 18                   | 功能说明                         |
|------------------|----------------------------|------------------------------|
| `provide/inject` | `createContext/useContext` | Vue 灵活支持跨层注入；React 组件树结构限制更大 |
| `pinia`          | Redux / Zustand 等          | 全局状态管理库，功能对等                 |

---


## ✅ Suspense/异步组件

| Vue 3                  | React 18       | 功能说明      |
|------------------------|----------------|-----------|
| `defineAsyncComponent` | `React.lazy()` | 支持懒加载组件   |
| `<Suspense>`           | `<Suspense>`   | 同名组件，用法类似 |

---


## ✅ 逻辑复用

| Vue 3                 | React 18            | 功能说明         |
|-----------------------|---------------------|--------------|
| Composable (`useXxx`) | 自定义 Hook (`useXxx`) | 封装逻辑复用方式完全一致 |

---


## ✅ 并发特性（React 专属）

| 功能                 | Vue 3 | React 18              |
|--------------------|-------|-----------------------|
| 并发渲染               | ❌     | ✅ `startTransition()` |
| `useTransition`    | ❌     | ✅                     |
| `useDeferredValue` | ❌     | ✅                     |

---


## 🧭 项目迁移建议（Vue → React）

* `ref` → `useState`
* `reactive` → `useState({})` 或 `useReducer`
* `computed` → `useMemo`
* `watch/watchEffect` → `useEffect`
* `onMounted/onUnmounted` → `useEffect(..., [])`
* `ref="el"` → `useRef()`
* 插槽 `<slot>` → `props.children`
* `provide/inject` → `Context.Provider` / `useContext`

---


## 🔗 参考


* Vue 官网：[https://vuejs.org](https://vuejs.org)
* React 官网：[https://react.dev](https://react.dev)
