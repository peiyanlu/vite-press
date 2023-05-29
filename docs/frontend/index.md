---
title: 前端
tags:
 - HTML
 - JS
 - CSS
 - ES6
 - NPM
order: 2
sidebar: true
---

# FrontEnd

## 获取src属性

```html
<img src="a.png" alt="">

<script>
  console.log(img.getAttribute('src')) // a.png
  console.log(img.src) // http://xxx/a.png
</script>
```

- `dom.attribute('src')` 获取到的永远是 `HTML` 中的元素 `src`

- `dom.src` 获取解析之后的绝对 `URL`，即使 `HTML` 中的内容是相对 `URL`

- 该规则同样适用于 `script`、`link` 等带有 `src`、`href` 的元素
