---
url: /vite-press/frontend/code/fetchWithTimeout.md
---

# {{ $frontmatter.title }}

```ts
export const fetchWithTimeout = async <T>(
  url: string,
  options: RequestInit = {},
  timeout: number = 1000,
  type: 'json' | 'text' | 'blob' | 'arrayBuffer' | 'bytes' | 'formData' = 'json',
): Promise<T | undefined> => {
  const c = new AbortController()
  const timer = setTimeout(() => c.abort(), timeout)
  
  try {
    const res = await fetch(url, { ...options, signal: c.signal })
    
    let data: unknown
    switch (type) {
      case 'json':
        data = await res.json()
        break
      case 'text':
        data = await res.text()
        break
      case 'blob':
        data = await res.blob()
        break
      case 'arrayBuffer':
        data = await res.arrayBuffer()
        break
      case 'formData':
        data = await res.formData()
        break
      case 'bytes':
        data = await res.bytes()
        break
    }
    
    return data as T
  } catch (e) {
    return void 0
  } finally {
    clearTimeout(timer)
  }
}


console.log(await fetchWithTimeout('https://example.com', {}, 5000, 'text'))
```

### get 请求传参

```ts
const getUrl = <T extends Record<any, any>>(url: string, record: T) => {
  const u = new URL(url)
  u.search = new URLSearchParams(Object.entries(record).filter(([ _, v ]) => Boolean(v))).toString()
  return u.toString()
}

// https://example.com?test=code
```

### post 请求传参

```ts
await fetch('/api/test', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ a: 1, b: 2 }),
})

```

```ts
const params = new URLSearchParams({ a: '1', b: '2' })
await fetch('/api/test', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: params.toString(),
})
```

```ts
const form = new FormData()
form.append('file', file)
form.append('user', 'test')

await fetch('/api/upload', {
  method: 'POST',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  body: form,
})
```

### useFetch 案例

```ts
import { router } from '@/router'
import { createFetch } from '@vueuse/core'


const baseUrl = import.meta.env.VITE_API_BASE || '/api'
const accessTokenKey = 'accessToken'
const refreshTokenKey = 'refreshToken'


const get = (key: string) => localStorage.getItem(key)
const set = (key: string, value: string) => localStorage.setItem(key, value)
const remove = (key: string) => localStorage.removeItem(key)

export const setToken = (accessToken: string, refreshToken: string) => {
  set(accessTokenKey, accessToken)
  set(refreshTokenKey, refreshToken)
}

export const clearToken = () => {
  remove(accessTokenKey)
  remove(refreshTokenKey)
}


// 刷新 token 的函数
const refreshToken = async () => {
  const exitToken = get(refreshTokenKey)
  if (!exitToken) return null
  
  const res = await fetch(`${ baseUrl }/auth/refresh`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${ exitToken }`,
    },
  })
  
  if (!res.ok) return null
  
  const { data: { accessToken, refreshToken } } = await res.json()
  
  setToken(accessToken, refreshToken)
  
  return accessToken
}


export const useFetchApi = createFetch({
  baseUrl,
  options: {
    async beforeFetch({ options }) {
      const token = get(accessTokenKey)
      
      if (token) {
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${ token }`,
        }
      }
      
      return { options }
    },
    
    async afterFetch(ctx) {
      // const { response, data } = ctx
      // console.log(data, response)
      
      return ctx
    },
    
    async onFetchError(ctx) {
      const { error, response, context: { options } } = ctx
      
      if (response) {
        const { status, url, statusText } = response
        switch (status) {
          case 401:
            const newToken = await refreshToken()
            if (newToken) {
              const retryRes = await fetch(url, {
                ...options,
                headers: {
                  ...options.headers,
                  Authorization: `Bearer ${ newToken }`,
                },
              })
              const retryData = await retryRes.json()
              
              return {
                response: retryRes,
                data: retryData,
              }
            } else {
              clearToken()
              await router.push('/login?from=fetchError')
              return {
                response,
                data: {},
              }
            }
          case 403:
            // 权限不足
            await router.push('/error/403?from=fetchError')
            return {
              response,
              data: {},
            }
          case 404:
            await router.push('/error/404?from=fetchError')
            return {
              response,
              data: {},
            }
          case 500:
            await router.push('/error/500?from=fetchError')
            return {
              response,
              data: {},
            }
        }
        
        console.log(status, url, statusText)
        console.info(`[API Error] ${ url } ${ statusText } ${ error.message }`)
      }
      
      return ctx
    },
    updateDataOnError: true,
  },
  fetchOptions: {
    credentials: 'include',
  },
})
```
