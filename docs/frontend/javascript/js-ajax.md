---
title: Ajax
description: Ajax的了解和使用
category: javascript
tags:
  - Ajax
---


# Ajax

`Ajax`（`Asynchronous JavaScript And XML`）异步 `JavaScript` 和 `XML`，`Ajax` 本身不是一种技术，而是一种将一些现有技术结合起来使用的方法，包括：`HTML`
或 `XHTML`、`CSS`、`JavaScript`、`DOM`、`XML`、`XSLT`、以及最重要的 `XMLHttpRequest` 对象。当使用结合了这些技术的 `Ajax`
模型以后，网页应用能够快速地将增量更新呈现在用户界面上，而不需要重载（刷新）整个页面。

:::tip
尽管 `Ajax` 中的 `X` 代表 `XML`，但是 `JSON` 才是首选，因为它更加轻量，而且是用 `JavaScript` 编写的。在 `Ajax` 模型中，`JSON`
和 `XML` 都被用来包装信息。
:::

**优点**

- 浏览器默认支持（一般浏览器都是支持 `JavaScript` 的）

- 提高用户体验（不需要刷新整个页面，而只需要局部刷新）

- 提高页面的性能（只需要请求部分数据，所以数据量就明显下降了）

**缺点**

- 破坏了浏览器的前进和后退功能（`Ajax` 不会改变网页 `URL`，因此不会在浏览器记录前后页面）

- 对搜索引擎的支持较弱（搜索引擎无法监测到 `JS` 引起的数据变化）

## Ajax的使用

`Ajax` 的基本流程：创建 `XHR` 对象 => 发送数据 => 接收数据

### 基本使用

1. 创建一个 `xhr` 的实例对象

```js
const xhr = new XMLHttpRequest()
```

2. 创建一个请求

调用 `xhr` 对象上的 `open()` 方法创建请求。`open()` 方法接收三个参数：

- 第一个参数：请求的类型（例如 `get`、`post`）

- 第二个参数：请求的 `URL`

- 第三个参数：是否异步发送请求（默认为 `true`）

```js
xhr.open('get', 'example.php', 'true')
```

3. 发送请求

调用 `xhr` 对象上的 `send()` 方法创建请求。`send()` 方法接收一个参数：

- 参数：作为请求主体发送的数据（例如 `post` 请求携带的数据）

```js
xhr.send()
```

4. 获取数据

请求发送出去后，客户端需要接收服务器响应回来的数据，`xhr` 对象中有一些属性，它们存储着服务端返回来的一些数据信息，如下表所示：

| 属性名          | 含义              |
|--------------|-----------------|
| responseText | 	服务端返回的文本信息     |
| responseXML  | 服务端返回的XML DOM文档 |
| status       | HTTP状态码         |
| statusText   | HTTP状态码说明       |
| readyState   | xhr对象的请求响应阶段    |

既然我们要获取服务端返回的数据，我们就要知道服务端是何时返回数据的，可以通过 `readyState` 属性来判断。

`readyState` 属性一共有 `5` 个值，分别表示不同的请求响应阶段：

- `0`： 还未创建请求，即未调用 `open()` 方法

- `1`： 已调用 `open()` 方法，但未发送 `send()` 方法

- `2`： 已调用 `send()` 方法，但未接收到响应

- `3`： 已接收到部分响应

- `4`： 已接收到全部的响应

同时，`xhr` 对象可以绑定一个 `readystatechange` 事件，每当 `readyState` 属性发生改变，都会触发该事件，因此，该事件在一次请求中会被多次触发

```js
xhr.onreadystatechange = function () {
  console.log('readyState属性发生改变了')
}
```

所以，我们可以在 `readystatechange` 事件中判断一下 `readyState` 属性是否为 `4`，即是否已经接收所有的响应，然后还可以再继续判断一下
`status` 属性，看看状态码是否为 `200`，当上述都成立了，我们再去 `responseText` 属性 或 `responseXML` 属性中获取响应数据

```js
xhr.onreadystatechange = function () {
  // 判断是否已接收所有响应
  if (xhr.readyState === 4) {
    // 判断状态码是否为200
    if (xhr.status === 200) {
      console.log(xhr.responseText)
    }
  }
}
```

### get请求

`get` 请求所携带的数据是明文的，大小只有 `4k` 左右，而且它是写在 `URL` 的 `?` 后面的，例如这样
`example.php?query=4&em=0`，所以若是我们要在发送 `get` 请求时携带数据，只需要在调用 `open()`
方法时，将数据写在第二个参数的 `URL` 的 `?` 后面即可

```js
const xhr = new XMLHttpRequest()
xhr.open('get', 'example.php?query=4&em=0')
xhr.send()
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    }
  }
}
```

### post请求

发送 `post` 请求的过程几乎和 `get` 请求一样，唯一不一样的是数据的传递。大家都知道 `post`
请求的数据是放在请求体中的，因此我们需要调用 `xhr` 对象上的
`setRequestHeader()` 方法来模仿表单提交时的内容类型，`post` 请求要发送的数据就要作为 `send()` 的参数

```js
const xhr = new XMLHttpRequest()
xhr.open('post', 'example.php')
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
xhr.send('query=4&em=0')
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    }
  }
}
```

## Ajax的封装

### $.get

```js
let $ = {
	// 动态生成XHR对象的方法
	createXHR: function() {
		if(window.XMLHttpRequest) {
			return new XMLHttpRequest()
		} else {
			return new ActiveXObject()
		} 
	},
	get: function(url, data, callback, dataType) {
		// 避免dataType大小写的问题
		let dataType = dataType.toLowerCase()
		// 如果有传入data，则在url后面跟上参数
		if(data) {
			url += '?'
			Object.keys(data).forEach(key => url += `${key}=${data[key]}&`)
			url = url.slice(0, -1)
		}
		// 调用我们封装的方法生成XHR对象
		let xhr = this.createXHR()
		// 创建get请求
		xhr.open('get', url)
		// 发送请求
		xhr.send()
		xhr.onreadystatechange = function() {
			if(xhr.readyState === 4) {
				if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
					// 若dataType为json，则将返回的数据通过JSON.parse格式化
					let res = dataType === 'json' ? JSON.parse(xhr.responseText) : xhr.responseText
					// 调用回调函数，并把参数传进去
					callback(res, xhr.status, xhr)
				}
			}
		}
	},
}
```

### $.post

```js
let $ = {
	// 动态生成XHR对象的方法
	createXHR: function() {
		if(window.XMLHttpRequest) {
			return new XMLHttpRequest()
		} else {
			return new ActiveXObject()
		} 
	},
	post: function(url, data, callback, dataType) {
		// 避免dataType大小写的问题
		dataType = dataType.toLowerCase()
		// 调用我们封装的方法动态生成XHR对象
		let xhr = this.createXHR()
 
		let str = ''
		// 若传入参数，则将参数序列化
		if(data) {
			Object.keys(data).forEach(key => str += `${key}=${data[key]}&`)
			str = str.slice(0, -1)
		}
		// 设置头部信息
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
		// 发送请求，并携带参数
		xhr.send(str)
		xhr.onreadystatechange = function() {
			if(xhr.readyState === 4) {
				if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
					// 若dataType为json，则将返回的数据通过JSON.parse格式化
					let res = dataType === 'json' ? JSON.parse(xhr.responseText) : xhr.responseText
					// 调用回调函数，把对应参数传进去
					callback(res, xhr.status, xhr)
				}
			}
		}
	},
}
```

### $.ajax

```js
let $ = {
	createXHR: function() {
		if(window.XMLHttpRequest) {
			return new XMLHttpRequest()
		} else {
			return new ActiveXObject()
		} 
	},
	ajax: function(params) {
		// 初始化参数
		let type = params.type ? params.type.toLowerCase() : 'get'
		let isAsync = params.isAsync ? params.isAsync : 'true'
		let url = params.url
		let data = params.data ? params.data : {}
		let dataType = params.dataType.toLowerCase()
		// 用我们封装的方法动态生成XHR对象
		let xhr = this.createXHR()
		
		let str = ''
		
		// 拼接字符串
		Object.keys(data).forEach(key => str += `${key}=${data[key]}&`)
		str = str.slice(0, -1)
		// 如果是get请求就把携带参数拼接到url后面
		if(type === 'get') url += `?${str}`;
		// 返回promise对象，便于外部then和catch函数调用
		return new Promise((resolve, reject) => {
			// 创建请求
			xhr.open(type, url, isAsync)
			
			if(type === 'post') {
				xhr.setRequestHeader('Content-Type', 'application/x-www-form-rulencoded')
				xhr.send(str)
			} else {
				xhr.send()
			}
 
			xhr.onreadystatechange = function() {
				if(xhr.readyState === 4) {
					if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
						let res = dataType === 'json' ? JSON.parse(xhr.responseText) : xhr.responseText
						resolve(res) // 请求成功，返回数据
					} else {
						reject(xhr.status) // 请求失败，返回状态码
					}
				}
			}
		})	
	},
}
```
