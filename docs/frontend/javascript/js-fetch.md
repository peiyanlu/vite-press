# Fetch API

> Fetch API 是基于 promise 的异步获取资源接口，支持 promise
> 的所有方法，[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API)

## 参数

> 第一个参数：获取资源的URL。

> 第二个参数：options对象，包括：

- `method`: 请求使用的方法，如 `GET、POST`。

- `headers`: 请求的头信息，形式为 `Headers` 的对象或包含 `ByteString` 值的对象字面量。

- `body`: 请求的 body 信息：可能是一个 `Blob`、 `BufferSource`、`FormData`、 `URLSearchParams` 或者 `USVString` 对象。**注意
  GET 或 HEAD
  方法的请求不能包含 body 信息。**

- `mode`: 请求的模式，如 `cors`、 `no-cors` 或者 `same-origin`。

- `credentials`: 请求的 credentials，如 `omit`、 `same-origin` 或者 `include`。为了在当前域名内自动发送 cookie ， 必须提供这个选项，
  从 Chrome 50 开始， 这个属性也可以接受 `FederatedCredential` 实例或是一个 `PasswordCredential` 实例。

- `cache`: 请求的 cache 模式: `default`、 `no-store` 、 `reload` 、 `no-cache` 、 `force-cache` 或者 `only-if-cached`。

- `redirect`: 可用的 redirect 模式: `follow` (自动重定向), `error` (如果产生重定向将自动终止并且抛出一个错误),
  或者 `manual` (手动处理重定向). 在Chrome中，Chrome 47之前的默认值是 follow，从 Chrome 47开始是 manual。

- `referrer`: 一个 `USVString` ，可以是 `no-referrer` 、 `client` 或一个 `URL`。默认是 `client`。

- `referrerPolicy`: 指定引用 HTTP 标头的值。可能是以下之一 `no-referrer`、 `no-referrer-when-downgrade`、
  `origin`、 `origin-when-cross-origin`、 `unsafe-url`.

- `integrity`:
  包括请求的 [subresource integrity](https://developer.mozilla.org/zh-CN/docs/Web/Security/Subresource_Integrity)
  值（例如： `sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`）。

> > 上面诸多 **option** 中，其实常用的就是 **method、headers、body** 以及 **mode** 等

### headers

可以为 Headers 对象，也可以是一个对象字面量，通常情况下对象字面量就足够

```ts
const url = 'https://......';

const headers = {
  Accept: 'image/jpeg',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
};

fetch(url, { headers }).then(function () {
  // ...
})
```

### mode

- `same-origin` 表示必须同源，绝对禁止跨域，这个是老版本浏览器默认的安全策略。

- `cors`
  表示允许跨域，顾名思义它是以CORS的形式跨域；当然该模式也可以同域请求。只需要服务器的响应头中带有 `Access-Control-Allow-Origin: *`
  就行。

- `no-cors`
  这个就很特殊了，字面意思是禁止以 `CORS` 的形式跨域，其实它的效果是，对外域的请求可以发送，外域服务器无论设不设 `Access-Control-Allow-Origin: *`
  都会接收请求并处理请求，但是浏览器不接收响应，即使外域返回了内容，浏览器也当做没接到。 这个no-cors的用途是保证数据安全。

## Response

传给then的回调函数可以接收一个参数，这个参数就是Response，它的属性基本上是只读属性。

- `Response.clone()` 创建一个Response对象的克隆

- `Response.error()` 返回一个绑定了网络错误的新的Response对象

- `Response.redirect()` 用另一个URL创建一个新的 response.

- `Response.arrayBuffer()`
  读取 Response对象并且将它设置为已读（因为Responses对象被设置为了 stream 的方式，所以它们只能被读取一次）
  ,并返回一个被解析为 `ArrayBuffer` 格式的promise对象

- `Response.blob()`
  读取 Response对象并且将它设置为已读（因为Responses对象被设置为了 stream 的方式，所以它们只能被读取一次）
  ,并返回一个被解析为 `Blob` 格式的promise对象

- `Response.formData()`
  读取Response对象并且将它设置为已读（因为Responses对象被设置为了 stream 的方式，所以它们只能被读取一次）
  ,并返回一个被解析为 `FormData` 格式的promise对象

- `Response.json()`
  读取 Response对象并且将它设置为已读（因为Responses对象被设置为了 stream 的方式，所以它们只能被读取一次）
  ,并返回一个被解析为 `JSON` 格式的promise对象

- `Response.text()`
  读取 Response对象并且将它设置为已读（因为Responses对象被设置为了 stream 的方式，所以它们只能被读取一次）
  ,并返回一个被解析为 `USVString` 格式的promise对象
