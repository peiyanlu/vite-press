---
url: /vite-press/interview/08-React.md
---

# {{ $frontmatter.title }}

### 一、核心概念题

1. React 的核心思想是什么？Virtual DOM 的作用？

> React 采用声明式编程思想，核心在于组件化与单向数据流。Virtual DOM 是对真实 DOM 的抽象，在更新 UI 时通过 diff 算法比对新旧虚拟 DOM，找到最小变更，最终批量更新真实 DOM，提高性能。

2. React 的 Fiber 架构解决了什么问题？

> 传统 React 的更新是同步的，不能中断。Fiber 引入了一种增量更新机制，支持任务拆分与优先级调度，使得更新过程可中断、可恢复，提升了大应用下的响应性能。

3. 函数组件和类组件的区别？使用场景？

> 函数组件更轻量，配合 Hook 更易组织逻辑，推荐默认使用。类组件支持生命周期但较重，主要用于旧代码或高阶组件兼容。

### 二、Hooks 专题

1. useEffect 和 useLayoutEffect 的区别及场景？

> useEffect 是异步的，在 DOM 更新后执行；useLayoutEffect 是同步的，在 DOM 更新但渲染前执行，适合需要同步测量 DOM 的场景。

2. useCallback 和 useMemo 的区别？

> useMemo 缓存计算结果，useCallback 缓存函数引用。useCallback(fn, deps) 相当于 useMemo(() => fn, deps)。避免不必要的子组件 re-render。

3. 自定义 Hook 应用场景与封装实践？

> 用于逻辑复用，如封装 useDebounce、usePrevious、useLocalStorage 等，通过命名规范（useXxx）和组合 Hook 实现逻辑抽象。

### 三、状态管理

1. Redux 的原理？中间件如何工作？

> Redux 通过单一 Store 管理状态，reducer 纯函数处理 action 更新状态。中间件通过增强 dispatch，实现异步处理、日志记录等功能，应用于 dispatch 流程中间。

2. Context 和 Redux 的区别？

> Context 适合少量跨层传值，不支持复杂逻辑和性能优化。Redux 提供更强的状态组织能力，支持时间旅行、插件扩展和中间件体系。

3. Recoil、Zustand 设计理念有何不同？

> Recoil 类似于原子化状态管理，天然支持依赖追踪。Zustand 是轻量、函数式、无 Provider 的状态库，使用简单，性能优秀。

### 四、性能优化

1. React 性能优化手段有哪些？

> 包括：React.memo、useMemo/useCallback、避免匿名函数、虚拟列表、懒加载、拆分组件、减少状态提升、合并 setState 等。

2. React.memo、useMemo、useCallback 的使用陷阱？

> 滥用可能增加性能负担，依赖项错误会导致缓存无效或缓存错误，应结合实际渲染频率与组件结构合理使用。

3. 使用 Profiler 进行性能分析方法？

> 使用 React DevTools 的 Profiler 选项，记录每次渲染耗时、渲染原因、组件树变化，结合优化点对症下药。

### 五、组件设计

1. 如何实现高复用、低耦合组件？

> 关注职责单一、props 设计合理、逻辑分离（用 Hook）、组合优于继承，支持插槽、render props 或 children 作为扩展点。

2. 插槽实现方式（Slot 模拟）？

> 使用 `props.children`，或结合 `React.cloneElement` 实现具名插槽功能，提升组件可插拔能力。

3. 表单校验方案设计？

> 支持字段级、表单级校验，内置 rule 类型验证器，支持异步校验和自定义 message，可使用类 Yup/Zod/AsyncValidator 实现。

### 六、异步与数据流

1. React Query / SWR 的优势？

> 自动缓存、重试、聚合请求、刷新同步、状态自动管理，SWR 基于 stale-while-revalidate，React Query 更全面和重型。

2. 实现请求缓存与去重的策略？

> 可基于请求 key + Map 缓存结构实现，配合 AbortController 实现相同请求拦截；如 React Query 的 queryKey 原理。

### 七、测试与工程化

1. React Testing Library 和 Enzyme 区别？

> RTL 强调以用户为中心，不依赖内部实现；Enzyme 偏重组件结构测试（mount/shallow），已不推荐使用。

2. 如何测试异步 Hook？

> 使用 RTL 的 `waitFor`、`act` 包装，mock 异步请求，结合 jest.fn() 模拟行为与结果。

***

## 手写代码题（建议使用 TypeScript）

### 1. 实现一个 useDebounce Hook

```ts
function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}
```

> 答案解析：通过定时器延迟更新值，在组件卸载或值更新时清除上一个定时器，实现防抖功能。

### 2. 实现一个简易的 Redux

```ts
function createStore(reducer, initialState) {
  let state = initialState;
  const listeners = [];

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach(l => l());
  }

  function subscribe(listener) {
    listeners.push(listener);
    return () => listeners.filter(l => l !== listener);
  }

  function getState() {
    return state;
  }

  dispatch({ type: '__INIT__' });
  return { dispatch, subscribe, getState };
}
```

> 答案解析：核心思想是单一状态源、纯函数 reducer 管理状态变化，通过订阅发布机制通知 UI 层刷新。

### 3. 实现一个虚拟列表组件（VirtualList）

```tsx
function VirtualList({ itemHeight, height, items, renderItem }) {
  const [scrollTop, setScrollTop] = useState(0);
  const totalHeight = items.length * itemHeight;
  const start = Math.floor(scrollTop / itemHeight);
  const visibleCount = Math.ceil(height / itemHeight);
  const visibleItems = items.slice(start, start + visibleCount);

  return (
    <div
      style={{ height, overflowY: 'auto' }}
      onScroll={e => setScrollTop(e.currentTarget.scrollTop)}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        {visibleItems.map((item, i) => (
          <div
            key={start + i}
            style={{
              position: 'absolute',
              top: (start + i) * itemHeight,
              height: itemHeight,
              width: '100%'
            }}
          >
            {renderItem(item, start + i)}
          </div>
        ))}
      </div>
    </div>
  );
}
```

> 答案解析：通过控制渲染的起始索引与数量，只渲染可视区域内的元素，提升长列表性能。

***

## 项目实战模拟题

### 1. 实现一个权限控制系统：

* 使用 React Router 和 Context 管理登录态
* 定义权限码如 `user:list`、`user:add`
* 设计 `AuthRoute` 组件，仅允许有权限的用户访问

> 答案参考：通过 context 提供用户权限信息，AuthRoute 包装 Route，判断权限后决定是否重定向或渲染内容。

### 2. 封装一套组件库（支持按需引入）

* 基于 TypeScript + Rollup/Vite
* 实现 Button、Input、Modal 三个通用组件
* 提供 `useTheme` 主题上下文切换能力

> 答案参考：各组件使用 TS 泛型定义 props，打包配置开启 treeshaking，useTheme 用 Context 封装皮肤状态。

### 3. 前端埋点系统

* 利用自定义 Hook 捕捉用户行为（点击、页面切换）
* 使用 useEffect 实现自动上报
* 模拟发送到服务端 API

> 答案参考：封装 useTrack Hook，监听点击事件或路由变化，上报事件到打点服务。

### 4. 复杂表单配置化设计

* 使用 JSON Schema 渲染表单结构
* 支持联动、校验、默认值设置
* 提供统一状态管理和 onChange 回调

> 答案参考：解析 JSONSchema 生成 UI 结构，通过 field 类型映射组件，状态由 useReducer 管理。

### 5. 实现 React + WebSocket 的聊天系统

* 使用 Context 管理连接状态
* 使用 useEffect 管理连接与重连
* 聊天记录持久化到 localStorage

> 答案参考：封装 socket 实例并提供上下文，通过 useEffect 管理事件监听与状态更新。

***

如需答题详解或演示项目结构，可继续补充。
