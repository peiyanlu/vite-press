---
title: 资源请求
description: 请求中常见的相关内容
category: network
tags:
  - network
  - request
---


# {{ $frontmatter.title }}


## 跨域请求携带cookie

1. 前端请求时在 `request` 对象中配置 `withCredentials: true`；

2. 后端在 `response` 的 `header` 中配置 `Access-Control-Allow-Credentials: true`；`Access-Control-Allow-Origin: 具体地址`；

:::tip
默认情况下，`Cookie` 不包括在 `CORS` 请求之中。

- `Access-Control-Allow-Credentials` 的值是一个布尔值，表示是否允许发送 `Cookie`。设为 `true`，即表示服务器明确许可，`Cookie` 可以包含在请求中，一起发给服务器。
  这个值也只能设为 `true`，如果服务器不要浏览器发送 `Cookie`，删除该字段即可。

- 开发者必须在 `AJAX` 请求中打开 `withCredentials` 属性。否则，即使服务器同意发送 `Cookie`，浏览器也不会发送。或者，服务器要求设置 `Cookie`，浏览器也不会处理。
  
:::

## 预检请求


预检请求（Preflight Request）是在进行跨域资源共享（CORS）时发送的一种特殊的HTTP请求。在某些情况下，浏览器会在实际的跨域请求之前发送一个预检请求，以确定实际请求是否安全并得到服务器支持。


预检请求是根据跨域请求的情况自动发送的，具体条件如下：

- 使用了一些非简单的请求方法，例如 PUT、DELETE、CONNECT、OPTIONS、TRACE、PATCH。

- 发起跨域请求时，请求头中使用了一些非简单的自定义请求头，例如 Content-Type、Authorization 等。

- `Content-Type` 的值不属于下列之一: `application/x-www-form-urlencoded`、`multipart/form-data`、`text/plain`

- 请求中的任意 `XMLHttpRequestUpload` 对象均没有注册任何事件监听器；`XMLHttpRequestUpload` 对象可以使用 `XMLHttpRequest.upload` 属性访问

- 请求中没有使用 `ReadableStream` 对象


预检请求的执行过程如下：


- 浏览器发送一个 `OPTIONS` 方法的请求到目标服务器。

- 请求头中包含了跨域请求的相关信息，例如 `Origin`、`Access-Control-Request-Method`、`Access-Control-Request-Headers`。

- 服务器根据请求头中的信息进行检查，判断是否允许实际请求。

- 服务器返回一个带有响应头 `Access-Control-Allow-Origin`（允许的源）、`Access-Control-Allow-Methods`（允许的方法）、`Access-Control-Allow-Headers`（允许的请求头）的响应。

- 浏览器根据服务器返回的响应进行判断，如果允许实际请求，则发送实际请求；如果不允许，则终止请求。

通过预检请求，服务器可以控制哪些跨域请求是被允许的，从而增加了对跨域请求的安全性。同时，预检请求也可以用于传递额外的信息，例如请求头中的自定义信息。

:::warning
- 预检请求会在实际请求之前发送，所以会增加额外的网络开销和延迟。

- 为了避免频繁发送预检请求，可以在服务器端配置合适的跨域许可头信息，以减少预检请求的发送次数。
:::


## 简单请求头


简单请求头（`Simple Request Header`）是指在跨域请求中的请求头字段，满足特定条件的请求头被认为是简单请求头。对于简单请求头，浏览器会自动发送跨域请求，并不会触发预检请求。


判断请求头是否属于简单请求头的条件：

1. 请求方法（`HTTP Method`）为以下方法之一：`GET` `HEAD` `POST`

2. 请求头字段仅限于以下几种字段：`Accept` `Accept-Language` `Content-Language` `Content-Type`（仅限于下列三个值：`application/x-www-form-urlencoded`、`multipart/form-data`、`text/plain`）

如果请求头满足上述条件，则被认为是简单请求头，浏览器会直接发送跨域请求。在简单请求中，不需要进行预检请求，并且响应中的跨域许可头（例如 `Access-Control-Allow-Origin`）会被浏览器自动处理。

简单请求头的优点是发送请求的过程更加简单和高效，不会增加额外的网络开销和延迟。
