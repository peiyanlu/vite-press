---
title: 选择器
description: CSS选择器
category: css
tags:
  - CSS
  - 选择器
---

<script setup>
import NthChild from './components/NthChild.vue'
import TypeChild from './components/TypeChild.vue'
</script>

# CSS 选择器

## id选择器

```css
#app {}
```

## class选择器

```css
.app {}
```

## 标签选择器

```css
div {}
```

## 属性选择器

```css
div[title='app'] {}
```

`~=`、 `|=`、 `^=`、 `$=`、 `*=` 的区别：

- `value` 是完整单词：`~=`、 `|=`

- `value` 是拼接字符串：`*=`、 `^=`、 `$=`

---

1. `attribute` 属性中**包含** `value`

`~=`： 包含独立的单词

```
[title~=flower]  -->  <img title="tulip flower" />
```

`*=`： 包含这个词

```
[title*=flower]  -->  <img title="ffffflowerrrrrr" />
```

2. `attribute` 属性以 `value` **开头**

`|=`： 必须是完整且唯一的单词，或者以 `-` 分隔开

```
[lang|=en]  -->  <p lang="en">  <p lang="en-us">
```

`^=`： 前几个字母匹配就可以

```
[lang^=en]  -->  <p lang="ennn">
```

3. `attribute` 属性以 `value` **结尾**

`$=`： 后几个字母匹配就可以

```
[href$=".pdf"]  -->  <a href="/file.pdf" />
```

## 后代选择器

```css
.app p {}
```

## 子代选择器

```css
.app > div {}
```

## 相邻选择器

```css
div + p {}
```

## 兄弟选择器

```css
div ~ p {}
```

## 伪类选择器

```css
div:hover {}

div:active {}

div:disabled {}

div:first-letter {}

div:first-line {}

div:before {}

div:after {}
```

- span:first-of-type
<TypeChild class='aa'></TypeChild>

- div:first-child
<TypeChild class='bb'></TypeChild>

- div:nth-child(n)
<TypeChild class='cc'></TypeChild>

- a:nth-of-type(2n)
<TypeChild class='dd'></TypeChild>

- p:only-of-type
<TypeChild class='ee'></TypeChild>

- span:nth-last-of-type(2n)
<TypeChild class='ff'></TypeChild>

- a:nth-last-child(2n)
<TypeChild class='gg'></TypeChild>

- p:last-of-type
<TypeChild class='hh'></TypeChild>

- span:last-child
<TypeChild class='ii'></TypeChild>



### :nth-child

* 选择列表中的偶数标签

```css
:nth-child(2n)
```

<NthChild class='aa'></NthChild>

* 选择列表中的奇数标签

```css
:nth-child(2n-1)
```

<NthChild class='bb'></NthChild>

* 选择从第6个开始的，直到最后

```css
:nth-child(n+6)
```

<NthChild class='cc'></NthChild>

* 选择第1个到第6个

```css
:nth-child(-n+6)
```

<NthChild class='dd'></NthChild>

* 选择第6个到第9个

```css
:nth-child(n+6):nth-child(-n+9)
```

<NthChild class='ee'></NthChild>
