---
title: 元素位置
description: 获取元素位置和鼠标位置
category: javascript
tags:
  - scroll
  - client
  - offset
---

# 元素位置

## scroll

> scrollWidth 和 scrollHeight、scrollTop 和 scrollLeft

* `scrollWidth` 的实际宽度：获取指定标签内容层的真实宽度（可视区域宽度+被隐藏区域宽度）

```js
scrollWidth = dom?.scrollWidth
```

* `scrollHeight` 的实际高度：获取指定标签内容层的真实高度（可视区域高度+被隐藏区域高度）

```js
scrollHeight = dom?.scrollHeight
```

* `scrollTop`：内容层顶部 到 可视区域顶部的距离。（被隐藏区域高度）

```js
scrollTop = dom?.scrollTop
```

* `scrollLeft`：内容层左端 到 可视区域左端的距离。（被隐藏区域宽度）

```js
scrollLeft = dom?.scrollLeft
```

## client

> clientWidth 和 clientHeight、clientTop 和 clientLeft

* `clientWidth` 的实际宽度：`width` + 左右 `padding`。 （可视区域宽度）

```js
clientWidth = dom?.clientWidth
```

* `clientHeight` 的实际高度：`height` + 上下 `padding`。 （可视区域高度）

```js
clientHeight = dom?.clientHeight
```

* `clientTop`：`border.top`(上边框的宽度)

```js
clientTop = dom?.clientTop
```

* `clientLeft`：`border.left`(左边框的宽度)

```js
clientLeft = dom?.clientLeft
```

## offset

> offsetWidth 和 offsetHeight、offsetTop 和 offsetLeft

* `offsetWidth` 的实际宽度：`width` + 左右 `padding` + 左右 `border`

```js
offsetWidth = dom?.offsetWidth
```

* `offsetHeight` 的实际高度：`height` + 上下 `padding` + 上下 `border`

```js
offsetHeight = dom?.offsetHeight
```

* `offsetTop`：当前元素 **上边框外边缘** 到最近的已定位父级（offsetParent） **上边框内边缘** 的距离。如果父级都没有定位，则是到 **body顶部** 的距离

```js
offsetTop = dom?.offsetTop
```

* `offsetLeft`：当前元素 **左边框外边缘** 到最近的已定位父级（offsetParent）**左边框内边缘** 的距离。如果父级都没有定位，则是到 **body左边** 的距离

```js
offsetLeft = dom?.offsetLeft
```

## event

### screen

* `screenX`：返回当某个事件被触发时，鼠标指针相对于显示器的水平坐标。
* `screenY`：返回当某个事件被触发时，鼠标指针相对于显示器的垂直坐标。

```js
evt?.screenX
evt?.screenY
```

### page

* `pageX`：鼠标到文档左边的距离，包括滚动隐藏区域
* `pageY`：鼠标到文档顶部的距离，包括滚动隐藏区域

```js
evt?.pageX
evt?.pageY
```

### offset

* `offsetX`：鼠标到事件源左边框内侧的距离
* `offsetY`：鼠标到事件源上边框内侧的距离

```js
evt?.offsetX
evt?.offsetY
```

### client

* `clientX`：鼠标到文档左边的距离，不包括滚动隐藏区域
* `clientY`：鼠标到文档顶部的距离，不包括滚动隐藏区域

```js
evt?.clientX
evt?.clientY
```

## 应用

* 计算元素距离**浏览器左上角**的距离

```js
const getOffsetLeft = (dom) => {
  let tmp = dom.offsetLeft
  let val = dom.offsetParent
  while (val != null) {
    tmp += val.offsetLeft
    val = val.offsetParent
  }
  return tmp
}

const getOffsetTop = (dom) => {
  let tmp = dom.offsetTop
  let val = dom.offsetParent
  while (val != null) {
    tmp += val.offsetTop
    val = val.offsetParent
  }
  return tmp
}
```
