---
title: 严格模式
tags:
  - javascript
  - strict-mode
---


# {{ $frontmatter.title }}


JavaScript 的 **严格模式（Strict Mode）** 是 ECMAScript 5 引入的一种运行模式。它通过更严格的语法和运行行为，帮助开发者编写更安全、规范的代码。


> 严格模式通过“限制不安全写法 + 明确报错”让 JavaScript 更接近强类型语言，提高了代码安全性和可维护性。


可通过以下方式启用：

```js
'use strict';
```

> 可应用于整个脚本或单个函数级别。


## 严格模式的主要特点


### 1. 变量必须声明后使用

```js
'use strict';
x = 10; // ❌ 报错：x 未声明
```

### 2. 禁止删除变量、函数、对象的属性

```js
'use strict';
let obj = {};
delete obj;      // ❌ 报错
delete obj.x;    // ✅ 删除不存在的属性允许，但无效果
```

### 3. 禁止重复命名参数或属性

```js
'use strict';

function foo(a, a) {} // ❌ 报错：重复参数
```

### 4. 禁止使用 `with` 语句

```js
'use strict';
with (obj) { } // ❌ 报错：with 在严格模式中被禁用
```

### 5. 静默失败变为抛错

```js
'use strict';
Object.defineProperty({}, 'x', { value: 10, writable: false });
obj.x = 20; // ❌ 报错（非严格模式下无提示）
```

### 6. `this` 不再默认绑定为全局对象

```js
'use strict';

function test() {
  console.log(this); // ❌ undefined（非严格模式为 window）
}

test();
```

### 7. 禁止使用八进制字面量

```js
'use strict';
let num = 012; // ❌ 报错（0 开头的八进制）
```

### 8. 限制 `eval` 和 `arguments`

- 不可将其作为变量名
- `eval` 创建的变量不会泄露到外部作用域

```js
'use strict';
let eval = 10;        // ❌ 报错
let arguments = 20;   // ❌ 报错
```

### 9. 函数声明不能出现在块级作用域中（ES5 限制）

```js
'use strict';
if (true) {
  function foo() {} // ❌ 报错（浏览器兼容性不同）
}
```

### 10. 禁止使用未来保留字作为标识符


以下关键字在严格模式中禁止作为变量名：

```js
'use strict';
let implements, interface, package, private, protected, public, static, yield; // ❌ 报错
```
