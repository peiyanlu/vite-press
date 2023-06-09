---
title: 实际应用
description: 实际开发中用到的网络内容
category: network
tags:
  - network
  - FAQ
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


预检请求，即 `OPTIONS` 请求，主要用于获知服务端支持的 `HTTP` 请求方法。跨域资源共享(`CORS`)标准新增了一组 `HTTP` 首部字段，配合预检请求可获知服务器允许哪些源站通过浏览器有权限访问哪些资源。


当发生以下情况时，客户端就会自动发起 `OPTIONS` 预检请求：

- 使用以下任一 `HTTP` 方法：`PUT/DELETE/CONNECT/OPTIONS/TRACE/PATCH`

- 设置了以下头部字段以外的自定义字段：`Accept/Accept-Language/Content-Language/Content-Type/DPR/Downlink/Save-Data/Viewport-Width/Width`

- `Content-Type` 的值不属于下列之一: `application/x-www-form-urlencoded`、`multipart/form-data`、`text/plain`

- 请求中的任意 `XMLHttpRequestUpload` 对象均没有注册任何事件监听器；`XMLHttpRequestUpload` 对象可以使用 `XMLHttpRequest.upload` 属性访问

- 请求中没有使用 `ReadableStream` 对象
