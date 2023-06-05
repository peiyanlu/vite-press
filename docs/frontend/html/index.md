# 浏览器地址栏


## 运行 JavaScript


> 浏览器地址栏可以直接运行 `JavaScript` 代码，做法是以 `javascript:` 开头后跟要执行的语句。

```js
javascript:alert('hello from address bar :)');
```

## 运行 HTML


> 非IE内核的浏览器地址栏可以直接运行HTML代码！做法是以 `data:text/html,` 开头后跟要显示的标签。

```html
data:text/html,<h1>Hello, world!</h1>
```

```html
data:text/html,
<html contenteditable>
```

## 实时 style

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width" />
  <title>Document title</title>
  <style>
    style {
      display: block;
    }
  </style>
</head>
<body>
<style contentEditable>
  body {
    color: blue
  }
</style>
</body>
</html>
```

## Web开发技巧


[Web开发技巧](https://www.runoob.com/w3cnote/web-app-tips.html)
