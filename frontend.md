---
url: /frontend.md
---

# FrontEnd

## 获取 src 属性

```html
<img src="a.png" alt="">

<script>
  console.log(img.getAttribute('src')) // a.png
  console.log(img.src) // http://xxx/a.png
</script>
```

* `dom.attribute('src')` 获取到的永远是 `HTML` 中的元素 `src`

* `dom.src` 获取解析之后的绝对 `URL`，即使 `HTML` 中的内容是相对 `URL`

* 该规则同样适用于 `script`、`link` 等带有 `src`、`href` 的元素

## 指定 Node 版本

`package.json` 中设置 `engines` 属性来指定版本范围

```json lines
// 指定范围
{
  "engines": {
    "node": ">=14.19.1 <=17.9.0"
  }
}
// 指定版本
{
  "engines": {
    "node": "~14.19.1"
  }
}

```

> \[!IMPORTANT]
> 一般在使用 yarn 和 pnpm 时有效，使用 npm 时无效， 因为 engine-strict 默认是 false

`.npmrc` 文件中设置：

```text
engine-strict=true
```
