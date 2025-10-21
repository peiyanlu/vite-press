---
title: 选择器
description: CSS 选择器
tags:
  - CSS
  - 选择器
---

<script setup>
import NthChild from './components/NthChild.vue';
import TypeChild from './components/TypeChild.vue';
</script>


# CSS 选择器


## 权重值

1. 最高：`!important`

2. 第一：内联样式，权重值：`1000`

3. 第二：ID选择器，权重值：`0100`

4. 第三：类、伪类、属性选择器，权重值：`0010`

5. 第四：元素、伪元素选择器，权重值：`0001`

6. 第五：通配符、子选择器、相邻选择器、兄弟选择器、继承样式，权重值：`0000`

::: tip 权重计算

- `CSS` 自上而下执行，同权重的情况下后面的样式覆盖前面的样式

- 带有**上下文关系**的选择器比**单独**的选择器权重要高
  :::

## 选择器

| 分类     | 语法       | 说明           | 示例                             |
|--------|----------|--------------|--------------------------------|
| 通用选择器  | `*`      | 选中所有元素       | `* { margin: 0; }`             |
| 标签选择器  | `div`    | 选中指定标签       | `p { color: red; }`            |
| 类选择器   | `.class` | 选中 class 的元素 | `.box { padding: 10px; }`      |
| ID 选择器 | `#id`    | 选中 id 的元素    | `#header { height: 100px; }`   |
| 属性选择器  | `[attr]` | 选中具有该属性的元素   | `[disabled] { opacity: 0.5; }` |

### 🔗 关系选择器（组合选择器）

| 语法      | 名称    | 说明            | 示例           |
|---------|-------|---------------|--------------|
| `A B`   | 后代选择器 | B 是 A 的任意层后代  | `ul li {}`   |
| `A > B` | 子代选择器 | B 是 A 的直接子元素  | `div > p {}` |
| `A + B` | 相邻兄弟  | B 紧跟在 A 之后    | `h1 + p {}`  |
| `A ~ B` | 通用兄弟  | B 是 A 后面的任意兄弟 | `h1 ~ p {}`  |
| `A, B`  | 多个选择器 | 同时选中 A 和 B    | `h1, h2 {}`  |

---


### 🎯 属性选择器

| 选择器              | 说明               | 示例                  | 示例代码                                                    |
|------------------|------------------|---------------------|---------------------------------------------------------|
| `[attr]`         | 包含属性             | `[type]`            | `<input type="date" name="bday"> <input type="submit">` |
| `[attr=value]`   | 属性值等于            | `[type="text"]`     | `<input type="text">`                                   |
| `[attr~=value]`  | 属性包含某词（空格分隔）     | `[class~="flower"]` | `<img class="tulip flower" /> <img class="flower" />`   |
| `[attr*=value]`  | 属性包含 value 子串    | `[title*="关键词"]`    | `<img title="ffffflowerrrrrr" />`                       |
| `[attr\|=value]` | 属性等于或以 value- 开头 | `[lang\|="en"]`     | `<p lang="en">  <p lang="en-us">`                       |
| `[attr^=value]`  | 属性以 value 开头     | `[href^="https"]`   | `<p lang="ennn">`                                       |
| `[attr$=value]`  | 属性以 value 结尾     | `[src$=".jpg"]`     | `<a href="/file.pdf" />`                                |

::: info

`~=`、 `|=`、 `^=`、 `$=`、 `*=` 的区别：

- `value` 是完整单词：`~=`、 `|=`

- `value` 是拼接字符串：`*=`、 `^=`、 `$=`

---

- `attribute` 属性值中 **包含** `value`

`~=`： 包含独立的单词

```
[title~=flower]  -->  <img title="tulip flower" />
```

`*=`： 包含这个词

```
[title*=flower]  -->  <img title="ffffflowerrrrrr" />
```

- `attribute` 属性值以 `value` **开头**

`|=`： 必须是完整且唯一的单词，或者以 `-` 分隔开

```
[lang|=en]  -->  <p lang="en">  <p lang="en-us">
```

`^=`： 前几个字母匹配就可以

```
[lang^=en]  -->  <p lang="ennn">
```

- `attribute` 属性以 `value` **结尾**

`$=`： 后几个字母匹配就可以

```
[href$=".pdf"]  -->  <a href="/file.pdf" />
```

:::


### 🎭 伪类选择器（Pseudo-classes）


#### ▶ 用户交互

| 选择器              | 说明         |
|------------------|------------|
| `:hover`         | 鼠标悬停       |
| `:active`        | 激活状态       |
| `:focus`         | 获得焦点       |
| `:focus-visible` | 可视焦点       |
| `:focus-within`  | 自身或子元素获得焦点 |

#### ▶ 结构类

| 选择器                  | 说明       |
|----------------------|----------|
| `:first-child`       | 第一个子元素   |
| `:last-child`        | 最后一个子元素  |
| `:nth-child(n)`      | 第 n 个子元素 |
| `:nth-last-child(n)` | 倒数第 n 个  |
| `:only-child`        | 唯一子元素    |
| `:first-of-type`     | 第一个同类型   |
| `:nth-of-type(n)`    | 第 n 个同类型 |
| `:empty`             | 没有子节点    |

#### ▶ 表单状态

| 选择器                          | 说明      |
|------------------------------|---------|
| `:checked`                   | 被选中     |
| `:disabled`                  | 被禁用     |
| `:enabled`                   | 可用状态    |
| `:required` / `:optional`    | 必填 / 选填 |
| `:valid` / `:invalid`        | 校验通过与否  |
| `:read-only` / `:read-write` | 只读/可写   |

#### ▶ 否定/逻辑组合

| 选择器                  | 说明               |
|----------------------|------------------|
| `:not(sel)`          | 非某元素             |
| `:is(sel1, sel2)`    | 匹配任意一个           |
| `:where(sel1, sel2)` | 与 `:is` 类似但权重为 0 |
| `:has(sel)`          | 包含子元素（现代浏览器）     |

---


### 🎨 伪元素（Pseudo-elements）

| 选择器              | 说明      |
|------------------|---------|
| `::before`       | 元素前插入内容 |
| `::after`        | 元素后插入内容 |
| `::first-line`   | 第一行文本   |
| `::first-letter` | 首字母     |
| `::selection`    | 文本选中时样式 |

## 示例


#### 图例展示

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

- :nth-child(2n)
  <NthChild class='aa'></NthChild>

- :nth-child(2n-1)
  <NthChild class='bb'></NthChild>

- :nth-child(n+6)
  <NthChild class='cc'></NthChild>

- :nth-child(-n+6)
  <NthChild class='dd'></NthChild>

- :nth-child(n+6):nth-child(-n+9)
  <NthChild class='ee'></NthChild>
