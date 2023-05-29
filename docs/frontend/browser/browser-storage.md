---
title: 数据存储
description: 浏览器中的数据存储方式
category: browser
tags:
  - browser
  - storage
---

# 浏览器存储

浏览器的本地存储主要分为 `Cookie`、`WebStorage` 和 `IndexedDB`，其中 `WebStorage` 又分为 `localStorage`（本地存储）和 `sessionStorage`（会话存储）

## cookie

`cookie` 最开始并不是用于本地存储的，而是为了弥补 `HTTP` 在状态管理上的不足：
`HTTP` 是一个无状态的协议，客户端向服务器发送请求，服务器返回响应，但是下一次发送请求时服务端就无法识别客户端的身份信息，故而产生了 `cookie`。

`cookie` 本质上是浏览器里面存储的一个很小的文本文件，内部以键值对的方式存储。向同一个域名下发送请求都会携带相同的 `cookie`
，服务器拿到 `cookie` 进行解析，就能拿到客户端的状态。也就是说，`cookie`
的作用就是用来做状态存储的。

**`cookie` 的具体实现过程：**

1. 当用户访问 `web` 服务器后，`web` 服务器会获取用户的状态并且返回一些数据（`cookie`）给浏览器，浏览器会自动储存这些数据（`cookie`)。

2. 当用户再次访问 `web` 服务器，浏览器会把 `cookie` 放到请求报文中发送给web服务器，`web` 服务器就会获取到了用户的状态。

3. 基于这次用户的状态方便用户进行其他业务的访问，并且 `web` 服务器可以设置浏览器保存 `cookie` 的时间，`cookie`
   是有域名的概念，只有访问同一个域名的时候才会把之前相同域名返回的 `cookie` 携带给该 `web` 服务器。

**缺陷：**

- 容量缺陷：`cookie` 的体积上限只有 `4KB`，只能用来存储少量的信息。

- 性能缺陷：`cookie` 是紧跟域名的，不管域名下面的某个地址需不需要这个 `cookie`，它都会携带上完整的 `cookie`
  。这样随着请求数据的增多，很容易造成性能上的浪费。

- 安全缺陷：由于 `cookie` 以纯文本的形式在浏览器和服务器中传递，很容易被非法用户截获，然后进行一系列的篡改，并在 `cookie`
  的有效期内重新发送给服务器。另外，在 `HTTPOnly` 为 `false`
  的情况下，`cookie` 信息能直接通过 `JS` 脚本读取。

**`cookie` 属性：**

| 属性       | 说明                                           |
|----------|----------------------------------------------|
| key      | cookie的键（名称）                                 |
| value    | cookie的值                                     |
| max_age  | cookie被保存的时间数，单位为秒。                          |
| expires  | 具体的过期时间，一个datetime对象或UNIX时间戳                 |
| path     | 限制cookie只在给定的路径可用，默认为整个域名下路径都可用              |
| domain   | 设置cookie可用的域名，默认是当前域名，子域名需要利用通配符domain=.当前域名 |
| secure   | 如果设为True，只有通过HTTPS才可以用                       |
| httponly | 如果设为True，禁止客户端JavaScript获取cookie             |

### session（后端）

`cookie` 和 `session` 都是用来跟踪浏览器用户的身份的方式，有以下区别：

1. 保存方式

- `cookie` 保存在浏览器端；

- `session` 保存在服务器端

2. 使用原理

- `cookie` 机制：如果不在浏览器中设置过期时间，`cookie` 被保存在内存中，生命周期随浏览器的关闭而结束，这种 `cookie`
  简称会话 `cookie`。如果在浏览器中设置了 `cookie` 的过期时间，`cookie`
  被保存在硬盘中，关闭浏览器后，`cookie` 数据仍然存在，直到过期时间结束才消失。

- `session` 机制：当服务器收到请求需要创建 `session` 对象时，首先会检查客户端请求中是否包含 `session id`
  。如果有 `session id`，服务器将根据该 `id`
  返回对应 `session` 对象。如果客户端请求中没有 `session id`，服务器会创建新的 `session` 对象，并把 `session id`
  在本次响应中返回给客户端。

3. 存储内容


- `cookie` 只能保存字符串类型，以文本的方式。

- `session` 通过类似与 `Hashtable` 的数据结构来保存，能支持任何类型的对象(`session` 中可含有多个对象)

4. 存储的大小


- `cookie`：单个 `cookie` 保存的数据不能超过 `4kb`。

- `session`：大小理论上没有限制。

5. 安全性

- `cookie`：针对 `cookie` 所存在的攻击：`cookie` 欺骗，`cookie` 截获；

- `session` 的安全性大于 `cookie`。

6. 应用场景

- **`cookie`：**
  
  - 判断用户是否登陆过网站，以便下次登录时能够实现自动登录（或者记住密码）。如果我们删除 `cookie`，则每次登录必须重新填写登录的相关信息。
  
  - 保存上次登录的时间等信息。
  
  - 保存上次查看的页面
  
  - 浏览计数

- **`session`：**`session` 用于保存每个用户的专用信息，变量的值保存在服务器端，通过 `session id` 来区分不同的客户。
  
  - 网上商城中的购物车
  
  - 保存用户登录信息
  
  - 将某些数据放入 `session` 中，供同一用户的不同页面使用
  
  - 防止用户非法登录

7. 缺点

- **`cookie`：**
  
  - 大小受限，不能超过 `4kb`；
  
  - 用户可以操作（禁用）`cookie`，使功能受限；
  
  - 安全性较低；
  
  - 有些状态不能保存在客户端；
  
  - 每次访问都要传送 `cookie` 给服务器，浪费带宽；
  
  - `cookie` 数据有路径（`path`）的概念，可以限制 `cookie` 只属于某个路径下。

- **`session`：**
  
  - `session` 保存的东西越多，就越占用服务器内存，对于用户在线人数较多的网站，服务器的内存压力会比较大。
  
  - 依赖于 `cookie`（`session id` 保存在 `cookie`），如果禁用 `cookie`，则要使用 `URL` 重写，不安全。
  
  - 创建 `session` 变量有很大的随意性，可随时调用，不需要开发者做精确地处理，所以，过度使用 `session` 变量将会导致代码不可读而且不好维护。

### 用法

`cookie` 本身没有封装 `API`，需要手动封装或者使用已有的库 [js-cookie](https://www.npmjs.com/package/js-cookie)

```ts
// 设置cookie
const setCookie = (name: string, value: string, day: number) => {
  const date = new Date()
  date.setDate(date.getDate() + day)
  document.cookie = `${ name }=${ value };expires=${ date }`
}

// 获取cookie
const getCookie = (name: string) => {
  const entries = document.cookie.split('; ')
  for (const item of entries) {
    const [ key, value ] = item.split('=')
    if (key === name) {
      return value
    }
  }
}

// 移除cookie
const removeCookie = (name: string) => {
  setCookie(name, '1', -1)
}
```


## Web storage API

- `Web Storage` 存储机制是对 `HTML4` 中 `cookie` 存储机制的一个改善。由于 `cookie` 存储机制有很多缺点，`HTML5`
  不再使用它，转而使用改良后的 `Web Storage` 存储机制。

- `Web Storage` 提供两种类型的 `API`：`localStorage` 在本地永久性存储数据，除非显式将其删除或清空；`sessionStorage`
  存储的数据只在会话期间有效，关闭浏览器则自动删除。

### localStorage

`localStorage` 的存储都是字符串，如果是存储对象，那么在存储时就需要调用 `JSON.stringify` 方法，并且在取值时用 `JSON.parse`
来解析成对象。

与 `cookie` 的异同：

**同：** 针对一个域名，即在同一域名下，会存储同一段 `localStorage`。

**异：**

- 容量：`localStorage` 的容量上线为 `5MB`。

- 只存储在客户端，默认不参与与服务器端的通讯，这样就很好的避免了 `cookie` 带来的性能和安全问题。

- 接口封装：通过 `localStorage` 暴露在全局，并通过它的 `setItem` 和 `getItem` 等方法进行操作。

应用场景：
因为 `localStorage` 的较大容量和持久特性，可以利用 `localStorage` 存储一些内容稳定的资源；例如官网的 `logo`，存储 `Base64`
格式的图片资源。

### sessionStorage

将数据保存在 `session Storage` 对象中。

- 页面会话在浏览器打开期间一直保持，并且重新加载或恢复页面仍会保持原来的页面会话。

- 在新标签或窗口打开一个页面时会复制顶级浏览会话的上下文作为新会话的上下文，这点和 `session cookie` 的运行方式不同。

- 打开多个相同的 `URL` 的 `Tabs` 页面，会创建各自的 `sessionStorage`。

- 关闭对应浏览器标签或窗口，会清除对应的 `sessionStorage`。

与 `localStorage` 的异同：

**同：**

- 容量：`sessionStorage` 的容量上线也为 `5MB`。

- 只存储在客户端，默认不参与与服务器端的通讯。

- 接口封装：除了名字变化，`sessionStorage` 的存储方式和操作方式均和 `localStorage` 一样。

- `localStorage` 和 `sessionStorage` 只能存储字符串类型。

**异：**

- `sessionStorage` 将数据保存在 `Session` 对象中。而 `localStorage` 将数据保存在客户端本地的硬件设备，即使浏览器被关闭了该数据依然存在，下次打开浏览器访问网站时可以继续使用。

- `localStorage` 的生命周期是永久的，`sessionStorage` 的生命周期是在仅在当前会话下有效。

**应用场景：**

- 可以使用 `sessionStorage` 对表单进行维护，将表单信息存储在里面，即使刷新表单也能保证不会让之前的表单信息丢失。

- 可以使用 `sessionStorage` 来存储本次浏览记录，即那种关闭页面就不需要的浏览记录。

### 用法

```ts
// 新增数据
localStorage.setItem('myCat', 'Tom');

// 获取数据
let cat = localStorage.getItem('myCat');

// 移除数据
localStorage.removeItem('myCat');

// 移除所有
localStorage.clear();
```

## indexedDB

`IndexedDB` 是一个基于 `JavaScript` 的面向对象数据库。是一个事务型数据库系统。

当数据量不大时，我们可以通过 `sessionStorage` 或者 `localStorage`
来进行存储，但是当数据量较大，或符合一定的规范时，我们可以使用 `indexedDB` 数据库来进行数据的存储，`indexedDB`
数据库存储理论上没有大小的限制。

`IndexedDB` 鼓励使用的基本模式如下所示：

1. 创建数据仓库( `db.createObjectStore()` )

2. 创建一个事务，链接数据仓库( `db.transaction([storeName]).objectStore(storeName)` )

3. 对数据增删改查( `stroe.add()`、`store.put()`、`store.delete()`、`store.get()` )

4. 关闭数据库( `db.close()` )

**缺点：** `indexedDB` 属于非关系型数据库，操作繁琐，对新手不友好

### 用法

```ts
interface MsgProps {
  type: string,
  message: string | object
}

export default class DB {
  dbName: string
  db: any
  
  constructor(name: string) {
    this.dbName = name
  }
  
  open(storeName: string, keyPath: string, indexs?: Array<string>) {
    if (!window.indexedDB) {
      return alert('您的浏览器不支持该app，为了更好的体验，请使用新版chrome浏览器')
    }
    const request = window.indexedDB.open(this.dbName, new Date().getTime())
    return new Promise((resolve, rej) => {
      request.onerror = (e: any) => {
        this.onmessage({ type: '数据库连接失败', message: e })
        rej()
      }
      request.onsuccess = (e: any) => {
        this.db = e.target.result
        this.onmessage({ type: '数据库连接成功', message: '' })
        resolve()
      }
      request.onupgradeneeded = (e: any) => {
        const db = e.target.result
        if (!db.objectStoreNames.contains(storeName)) {
          const store = db.createObjectStore(storeName, { autoIncrement: true, keyPath })
          if (indexs && indexs.length) {
            indexs.map((v) => {
              store.createIndex(v, v, { unique: false })
            })
          }
          store.transaction.oncomplete = (ev: any) => {
            this.onmessage({ type: '创建对象仓库成功', message: '' })
          }
        }
      }
    })
  
  }
  
  onmessage(msg: MsgProps) {
    console.log(msg.type, msg.message)
  }
  
  update(storeName: string, data: object) {
    const store = this.db.transaction([ storeName ], 'readwrite').objectStore(storeName)
    return new Promise((resolve, rej) => {
      const request = store.put({
        ...data,
        lastModify: new Date().getTime(),
      })
      request.onsuccess = (e: any) => {
        this.onmessage({
          type: '更新成功',
          message: data,
        })
        resolve()
      }
      request.onerror = (e: any) => {
        this.onmessage({
          type: '更新失败',
          message: data,
        })
        rej()
      }
    })
  }
  
  getList(storeName: string) {
    const store = this.db.transaction([ storeName ]).objectStore(storeName)
    return new Promise((resolve, rej) => {
      store.getAll().onsuccess = (e: any) => {
        const res = e.target.result
        this.onmessage({
          type: '获取列表成功',
          message: res,
        })
        resolve(res)
      }
    })
  }
  
  getItem(storeName: string, key: string) {
    const store = this.db.transaction(storeName).objectStore(storeName)
    return new Promise((resolve, rej) => {
      const request = store.get(key)
      request.onsuccess = (e: any) => {
        resolve(e.target.result)
      }
      request.onerror = (e: any) => {
        rej()
      }
    })
  }
  
  delete(storeName: string, key: string) {
    const store = this.db.transaction([ storeName ], 'readwrite').objectStore(storeName)
    const request = store.delete(key)
    return new Promise((resolve, rej) => {
      request.onsuccess = (e: any) => {
        this.onmessage({
          type: '删除成功',
          message: key,
        })
        resolve()
      }
      request.onerror = (e: any) => {
        this.onmessage({
          type: '删除失败',
          message: data,
        })
        rej()
      }
    })
  
  }
  
  closeDB() {
    this.db.close()
  }
  
  deleteDB() {
    indexedDB.deleteDatabase(this.dbName)
  }

}
```


