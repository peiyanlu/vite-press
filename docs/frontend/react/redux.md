---
title: Redux 使用示例
description: Redux
category: react
tags:
  - react
  - redux
---


# {{ $frontmatter.title }}


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
