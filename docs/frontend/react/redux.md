---
title: Redux 使用示例
description: Redux
tags:
  - react
  - redux
---


# {{ $frontmatter.title }}

- **Redux 是一个管理全局应用状态的库**
    - Redux 通常与 React-Redux 库一起使用，把 Redux 和 React 集成在一起
    - Redux Toolkit 是编写 Redux 逻辑的推荐方式
- **Redux 使用 "单向数据流"**
    - State 描述了应用程序在某个时间点的状态，视图基于该 state 渲染
    - 当应用程序中发生某些事情时：
        - 视图 dispatch 一个 action
        - store 调用 reducer，随后根据发生的事情来更新 state
        - store 将 state 发生了变化的情况通知 UI
    - 视图基于新 state 重新渲染
- **Redux 有这几种类型的代码**
    - _Action_ 是有 `type` 字段的纯对象，描述发生了什么
    - _Reducer_ 是纯函数，基于先前的 state 和 action 来计算新的 state
    - 每当 dispatch 一个 action 后，_store_ 就会调用 root reducer

## 📁 项目结构

```
src/
├── store/
│   ├── index.ts          # 创建 store
│   ├── rootReducer.ts    # combineReducers 汇总
│   ├── counter/
│   │   ├── reducer.ts
│   │   ├── actions.ts
│   │   └── types.ts
│   └── user/
│       ├── reducer.ts
│       ├── actions.ts
│       └── types.ts
├── App.tsx
└── main.tsx
```

## 🧩 store/index.ts

```ts
import { legacy_createStore as createStore } from 'redux'
import rootReducer from './rootReducer'


const store = createStore(rootReducer)

export default store
```

## 🧩 store/rootReducer.ts

```ts
import { combineReducers } from 'redux'
import counterReducer from './counter/reducer'
import userReducer from './user/reducer'


const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
```

## 📦 counter 模块


#### counter/types.ts

```ts
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export interface CounterState {
  count: number
}

interface IncrementAction {
  type: typeof INCREMENT
}

interface DecrementAction {
  type: typeof DECREMENT
}

export type CounterAction = IncrementAction | DecrementAction
```

#### counter/actions.ts

```ts
import { INCREMENT, DECREMENT, CounterAction } from './types'


export const increment = (): CounterAction => ({ type: INCREMENT })
export const decrement = (): CounterAction => ({ type: DECREMENT })
```

#### counter/reducer.ts

```ts
import { CounterAction, CounterState, INCREMENT, DECREMENT } from './types'


const initialState: CounterState = { count: 0 }

export default function counterReducer(state = initialState, action: CounterAction): CounterState {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 }
    case DECREMENT:
      return { count: state.count - 1 }
    default:
      return state
  }
}
```

## 👤 user 模块


#### user/types.ts

```ts
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export interface UserState {
  name: string
  loggedIn: boolean
}

interface LoginAction {
  type: typeof LOGIN
  payload: { name: string }
}

interface LogoutAction {
  type: typeof LOGOUT
}

export type UserAction = LoginAction | LogoutAction
```

#### user/actions.ts

```ts
import { LOGIN, LOGOUT, UserAction } from './types'


export const login = (name: string): UserAction => ({
  type: LOGIN,
  payload: { name },
})

export const logout = (): UserAction => ({ type: LOGOUT })
```

#### user/reducer.ts

```ts
import { UserState, UserAction, LOGIN, LOGOUT } from './types'


const initialState: UserState = {
  name: '',
  loggedIn: false,
}

export default function userReducer(state = initialState, action: UserAction): UserState {
  switch (action.type) {
    case LOGIN:
      return { name: action.payload.name, loggedIn: true }
    case LOGOUT:
      return { ...initialState }
    default:
      return state
  }
}
```

## 🎮 App.tsx

```tsx
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './store/rootReducer'
import { increment, decrement } from './store/counter/actions'
import { login, logout } from './store/user/actions'


function App() {
  const count = useSelector((state: RootState) => state.counter.count)
  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()
  
  return (
    <div style={ { padding: 20 } }>
      <h2>Redux combineReducers Demo</h2>
      
      <section>
        <h3>Counter: { count }</h3>
        <button onClick={ () => dispatch(increment()) }>+</button>
        <button onClick={ () => dispatch(decrement()) }>-</button>
      </section>
      
      <section style={ { marginTop: 20 } }>
        <h3>User: { user.loggedIn ? user.name : 'Guest' }</h3>
        { user.loggedIn ? (
          <button onClick={ () => dispatch(logout()) }>Logout</button>
        ) : (
          <button onClick={ () => dispatch(login('延路裴')) }>Login</button>
        ) }
      </section>
    </div>
  )
}

export default App
```

## 🛠️ main.tsx

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
)
