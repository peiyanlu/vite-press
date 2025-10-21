---
url: /vite-press/frontend/react/redux-toolkit.md
description: Redux Toolkit 示例代码
---

# {{ $frontmatter.title }}

## 📁 项目结构

```
src/
├── store/
│   ├── index.ts          # 创建 store
│   ├── counterSlice.ts   # createSlice 定义模块
│   └── userSlice.ts
├── App.tsx
└── main.tsx
```

## 🧩 store/index.ts

```ts
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import userReducer from './userSlice'


const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
```

## 📦 counterSlice.ts

```ts
import { createSlice } from '@reduxjs/toolkit'


interface CounterState {
  count: number
}

const initialState: CounterState = {
  count: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => { state.count += 1 },
    decrement: (state) => { state.count -= 1 },
  },
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer
```

## 👤 userSlice.ts

```ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface UserState {
  name: string
  loggedIn: boolean
}

const initialState: UserState = {
  name: '',
  loggedIn: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.name = action.payload
      state.loggedIn = true
    },
    logout: (state) => {
      state.name = ''
      state.loggedIn = false
    },
  },
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer
```

## 🎮 App.tsx

```tsx
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from './store'
import { increment, decrement } from './store/counterSlice'
import { login, logout } from './store/userSlice'


function App() {
  const count = useSelector((state: RootState) => state.counter.count)
  const user = useSelector((state: RootState) => state.user)
  const dispatch: AppDispatch = useDispatch()
  
  return (
    <div style={ { padding: 20 } }>
      <h2>Redux Toolkit Demo</h2>
      
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
  <Provider store={ store }>
    <App />
  </Provider>
)
```

## ✅ 特点对比

| 项目         | Redux Toolkit                     | 原始 Redux                 |
|------------|-----------------------------------|--------------------------|
| Store 创建   | configureStore                    | createStore              |
| Reducer 定义 | createSlice 自动生成 action + reducer | 手写 action + reducer + 常量 |
| 类型推导       | 自动推导                              | 手动定义类型                   |
| 异步处理       | 支持 createAsyncThunk               | 需要额外中间件 redux-thunk      |
