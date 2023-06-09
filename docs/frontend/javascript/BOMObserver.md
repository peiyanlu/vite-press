---
title: 浏览器监听
description: 监听元素变化、浏览器干预行为
category: javascript
tags:
  - 浏览器
  - Observer
---

# 浏览器监听

监听用户的交互行为时我们会用 `addEventListener` 来监听 `click、mousedown、keydown、input` 等事件，但对于元素的变化、`performance` 的记录、浏览器干预行为这些不是用户交互的事件就要用 `XxxObserver` 的 `api` 了

## IntersectionObserver

`IntersectionObserver` 可以监听**一个元素和可视区域相交部分的比例**，然后在可视比例达到某个阈值的时候触发回调。

```ts
const intersectionObserver = new IntersectionObserver(
  (entries) => {
    console.log('info:')
    entries.forEach(item => {
      console.log(item.target, item.intersectionRatio)
    })
  },
  {
    threshold: [ 0.5, 1 ],
  },
)

intersectionObserver.observe(dom)
```

## MutationObserver

`MutationObserver` 可以监听**对元素的属性的修改、对它的子节点的增删改**。

```ts
const mutationObserver = new MutationObserver((mutationsList) => {
  console.log(mutationsList)
})

mutationObserver.observe(dom, {
  attributes: true,
  childList: true,
})
```

## ResizeObserver

`ResizeObserver` 监听**元素大小的改变**，当 `width`、`height` 被修改时会触发回调。

```ts
const resizeObserver = new ResizeObserver(entries => {
  console.log('当前大小', entries)
})
resizeObserver.observe(dom)
```

## PerformanceObserver

`PerformanceObserver` 用于监听记录 `performance` 数据的行为，一旦记录了就会触发回调，这样我们就可以在回调里把这些数据上报。

```ts
const performanceObserver = new PerformanceObserver(list => {
  list.getEntries().forEach(entry => {
    console.log(entry)// 上报
  })
})
performanceObserver.observe({ entryTypes: [ 'resource', 'mark', 'measure' ] })

// mark 方法记录某个时间点
performance.mark('registered-observer')

const measureClick = () => {
  // measure 方法记录某个时间段，后两个参数是时间点，不传代表从开始到现在。
  performance.measure('button clicked')
}
```

## ReportingObserver

`ReportingObserver` 监听过时的 `api`、浏览器的一些干预行为的报告，在回调里上报，这些是错误监听无法监听到但对了解网页运行情况很有用的数据。

* 当浏览器运行到过时（`deprecation`）的 `api` 的时候，会在控制台打印一个过时的报告

* 浏览器还会在一些情况下对网页行为做一些干预（`intervention`），比如会把占用 `cpu` 太多的广告的 `iframe` 删掉

* 会在网络比较慢的时候把图片替换为占位图片，点击才会加载

这些干预都是浏览器做的，会在控制台打印一个报告


```ts
const reportingObserver = new ReportingObserver(
  (reports, observer) => {
    for (const report of reports) {
      console.log(report.body) // 上报
    }
  },
  {
    types: [ 'intervention', 'deprecation' ],
  },
)

reportingObserver.observe()
```
