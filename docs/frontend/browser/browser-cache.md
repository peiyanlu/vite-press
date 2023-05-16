# 浏览器缓存

浏览器缓存(`Brower Caching`)是指浏览器将之前请求的资源（如页面、图片、样式、脚本等）存储在本地，以便在用户再次访问同一资源时能够直接从本地读取而不需要重新请求。

浏览器缓存的主要特点包括：

1. 减少网络请求：浏览器缓存可以减少网络请求，从而缩短页面加载时间，提升用户体验。

2. 减少服务器压力：通过缓存，浏览器可以减少向服务器发送请求，降低服务器负载。

3. 降低带宽成本：通过缓存，浏览器可以减少网络流量，降低带宽成本。

4. 优化页面性能：由于缓存能够减少网络请求，所以能够提高页面性能，减少页面加载时间，从而提升用户体验。

5. 保证数据一致性：浏览器缓存遵循 `HTTP` 协议中的缓存机制，保证了资源的一致性和有效性，避免了因为缓存而导致数据不一致的问题。

总之，浏览器缓存是一种简单而有效的优化网站性能的方法，可以提升用户的访问体验，降低服务器负载，并降低带宽成本。

## 缓存方式

浏览器缓存主要有两类：缓存协商和彻底缓存，也有称之为协商缓存和强缓存。

### 强缓存

强缓存是指浏览器在请求资源时，通过判断缓存是否过期来决定是否使用缓存的一种方式。如果缓存未过期，浏览器直接从缓存中获取资源，不会向服务器发送请求，从而提高页面的加载速度。下面是强缓存的实现方式。

1. [`Cache-Control`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control)

`Cache-Control` 是 `http1.1` 提供的缓存控制机制，通过设置响应头部的 `Cache-Control` 字段，可以指定缓存的最长时间，单位为秒。比如，设置 `Cache-Control: max-age=3600` 表示资源可以被缓存 `1` 小时。浏览器再次请求该资源时，会判断缓存是否过期，如果未过期，直接从缓存中获取资源。

常见的 `Cache-Control` 指令有：

- `max-age`：缓存的最长时间，单位为秒。

- `public`：资源可以被任意缓存，包括客户端和 `CDN` 等公共缓存。

- `private`：资源只能被客户端缓存，不允许 `CDN` 等公共缓存。

- `no-cache`：不使用本地缓存。在发布缓存副本之前，强制要求缓存把请求提交给原始服务器进行验证 (协商缓存验证)。

- `no-store`：禁止缓存，每次请求都要向服务器发送请求。

::: code-group
```md [缓存请求指令]
Cache-Control: max-age=<seconds>
Cache-Control: max-stale[=<seconds>]
Cache-Control: min-fresh=<seconds>
Cache-control: no-cache
Cache-control: no-store
Cache-control: no-transform
Cache-control: only-if-cached
```

```md [缓存响应指令]
Cache-control: must-revalidate
Cache-control: no-cache
Cache-control: no-store
Cache-control: no-transform
Cache-control: public
Cache-control: private
Cache-control: proxy-revalidate
Cache-Control: max-age=<seconds>
Cache-control: s-maxage=<seconds>
```
:::


2. `Expires`

`Expires` 是 `HTTP/1.0` 提供的缓存控制机制，通过设置响应头部的 `Expires` 字段，可以指定一个绝对时间，表示资源的缓存过期时间。比如，设置 `Expires: Sat, 26 Jul 2025 05:00:00 GMT`
表示资源可以被缓存到 `2025年7月26日5点`。与 `Cache-Control` 不同的是，`Expires` 是一个绝对时间，不受本地时间影响。但是，由于浏览器与服务器可能存在时钟不一致的情况，因此该方式已经逐渐被 `Cache-Control` 所替代。


:::warning
`Cache-Control` 与 `Expires` 可以在服务端配置同时启用，同时启用的时候 `Cache-Control` 优先级高。使用 `Cache-Control` 比 `Expires` 更为常用。通过设置 `Cache-Control` 字段，可以更加灵活地控制缓存的过期时间，同时也避免了时钟不一致的问题。
:::

### 协商缓存

协商缓存是浏览器缓存机制的一种实现方式，用于在强缓存失效时向服务器发起请求验证资源是否发生变化，以决定是否使用缓存的一种方式。协商缓存主要包括两个部分：请求头和响应头。

在协商缓存机制中，浏览器会在请求头中添加一些条件来告诉服务器它上次请求的资源是否还有效，服务器则会根据这些条件判断资源是否更新，然后返回相应的状态码和资源。如果资源没有更新，则服务器返回 `304` 状态码，告诉浏览器可以使用缓存，否则返回 `200` 状态码和新的资源。

协商缓存主要有两种方式：`Last-Modified/If-Modified-Since` 和 `ETag/If-None-Match`。 

1. `Last-Modified/If-Modified-Since`

- `Last-Modified` 是响应头，表示服务器端资源的最后修改时间。比如：`Last-Modified: Tue, 15 Jun 2021 08:18:25 GMT`。浏览器第一次请求资源时，服务器会将 `Last-Modified`
  头部信息一并返回给浏览器，浏览器会将其缓存起来。下次请求时，浏览器会将该信息作为 `If-Modified-Since`
  的值发送给服务器，服务器会根据该值判断资源是否有修改，如果没有修改，则返回 `304 Not Modified` 状态码，告诉浏览器可以直接使用缓存，否则返回新的资源。

- `If-Modified-Since` 是请求头，表示上次请求时的 `Last-Modified` 时间，服务器会将该值与当前资源的最后修改时间进行比较，以判断资源是否有更新，如果没有更新，就返回 `304 Not Modified` 状态码，不返回 `Last-Modified`。

:::warning
`If-Modified-Since` 只可以用在 `GET` 或 `HEAD` 请求中。
:::

2. `ETag/If-None-Match`

- `ETag` 是响应头，表示服务器端资源的唯一标识符，比如：`ETag: W/"1234567890"`。浏览器第一次请求资源时，服务器会将 `ETag`
  头部信息一并返回给浏览器，浏览器会将其缓存起来。下次请求时，浏览器会将该信息作为 `If-None-Match`
  的值发送给服务器，服务器会根据该值判断资源是否有修改，如果没有修改，则返回 `304 Not Modified` 状态码，告诉浏览器可以直接使用缓存，否则返回新的资源。

- `If-None-Match` 是请求头，表示上次请求时的 `ETag` 值，服务器会将该值与当前资源的唯一标识符进行比较，以判断资源是否有更新，如果没有更新，就返回 `304 Not Modified` 状态码。

> 被浏览器缓存的文件会有不同的缓存来源，包括 `from memory cache` 和 `from disk cache`，前者指缓存来自内存，后者指缓存来自硬盘。决定缓存到内存还是硬盘的正是 `Etag`
字段。如果响应头有 `Etag` 字段，那么浏览器就会将本次缓存写入硬盘中。


:::warning
当与 `If-Modified-Since` 一同使用的时候，`If-None-Match` 优先级更高（假如服务器支持的话）。
:::

相比于 `Last-Modified/If-Modified-Since`，`ETag/If-None-Match` 更加精确，因为 `ETag` 可以基于内容生成，而 `Last-Modified` 只能以时间作为依据。但是 `ETag`
的生成会消耗一定的计算资源，因此在实际应用中需要考虑性能开销。


### 区别

| 缓存类型 | 获取资源形式 | 状态码               | 发送请求到服务器         |
|------|--------|-------------------|------------------|
| 强缓存  | 从缓存取   | 200（from cache）   | 否，直接从缓存取         |
| 协商缓存 | 从缓存取   | 304（Not Modified） | 否，通过服务器来告知缓存是否可用 |

## 缓存过程

浏览器在第一次请求发生后，再次请求时：

- 浏览器会先获取该资源缓存的 `header` 信息，根据其中的 `Expires` 和 `Cache-control` 判断是否命中强缓存，若命中则直接从缓存中获取资源，包括缓存的 `header` 信息，本次请求不会与服务器进行通信；

- 如果没有命中强缓存，浏览器会发送请求到服务器，该请求会携带第一次请求返回的有关缓存的 `header` 字段信息（`Last-Modified/IF-Modified-Since`、`Etag/IF-None-Match`
  ）,由服务器根据请求中的相关 `header` 信息来对比结果是否命中协商缓存，若命中，则服务器返回新的响应 `header` 信息更新缓存中的对应 `header` 信息，但是并不返回资源内容，它会告知浏览器可以直接从缓存获取；否则返回最新的资源内容。

## 不缓存

### no-store

强制缓存的 `Cache-control` 的指令 `no-store`，作用是不存储有关客户端请求或服务器响应的任何内容，即不使用任何缓存。`Cache-Control` 是通用消息头字段，既可以用于请求头，也可以用于响应头。

使用：

1. 关闭缓存

```
Cache-Control: no-store
```

2. 缓存静态资源

对于应用程序中不会改变的文件，你通常可以在发送响应头前添加积极缓存。这包括例如由应用程序提供的静态文件，例如图像，`CSS` 文件和 `JavaScrip` t文件。

```
Cache-Control: public, max-age=31536000
```

3. 需要重新验证

指定 `no-cache` 或 `max-age=0, must-revalidate` 表示客户端可以缓存资源，每次使用缓存资源前都必须重新验证其有效性。这意味着每次都会发起 `HTTP` 请求，但当缓存内容仍有效时可以跳过 `HTTP` 响应体的下载。

``` 
Cache-Control: no-cache

# 或者
Cache-Control: max-age=0, must-revalidate
```

:::warning
如果服务器关闭或失去连接，`Cache-Control: max-age=0` 可能会造成使用缓存。
:::

### 增加版本号

```html
<script type = "text/javascript" src = "../js/jquery.min.js?version=1.7.2" > </script>
```

### 使用随机数

既然在文件后面添加指纹可以让浏览器重新获取资源，那么我们可以在后面拼接随机数或者时间戳，这样也可以达到相同的目的，还省去了手动更改版本号的步骤。

```ts
const script = document.createElement("script");
script.src = "/resource/options/myjs.js?randomId=" + new Date().getTime();
document.body.appendChild(script);
```

浏览器发现文件名有更改，会重新获取静态资源，达到了不缓存文件的目的。

### HTML禁用缓存

`HTML` 也可以禁用缓存， 即在页面的 `head` 标签中加入 `meta` 标签。

```html
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate"/>
```

:::warning
虽能禁用缓存，但只有部分浏览器支持，而且由于代理不解析 `HTML` 文档，故代理服务器也不支持这种方式。该方法不适用于特定文件不缓存的要求。
:::














