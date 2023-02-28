# JS作用域

> 作用域：变量生效的范围；

共有 9 种作用域，都是调试得出的，是 JS 引擎执行代码时的真实作用域

* **Global 作用域**： 全局作用域，在浏览器环境下就是 window，在 node 环境下是 global
* **Local 作用域**：本地作用域，或者叫函数作用域
* **Block 作用域**：块级作用域
* **Script 作用域**：script 标签中使用 let、const 声明的全局变量会保存在 Script 作用域，这些变量可以直接访问，但却不能通过
  window.xx 访问
* **模块作用域**：其实严格来说这也是函数作用域，因为 node 执行它的时候会包一层函数，算是比较特殊的函数作用域，有
  module、exports、require 等变量
* **Catch Block 作用域**： catch 语句的作用域可以访问错误对象
* **With Block 作用域**：with 语句会把传入的对象的值放到单独的作用域里，这样 with 语句里就可以直接访问了
* **Closure 作用域**：函数返回函数的时候，会把用到的外部变量保存在 Closure 作用域里，这样再执行的时候该有的变量都有，这就是闭包。eval
  的闭包比较特殊，会把所有变量都保存到 Closure 作用域
* **Eval 作用域**：eval 代码声明的变量会保存在 Eval 作用域

## Global作用域

浏览器环境下用 var 全局声明的变量所在的作用域—— `Global作用域`，也就是全局作用域

> 在浏览器环境下，可以通过 `变量名` 访问全局变量，也可以通过 `window.变量名` 访问

```html

<script lang="js">
  var a = 'Global作用域'
  debugger
  
  console.log(a) // Global作用域
  console.log(window.a) // Global作用域
</script>
```

## Local作用域

函数内部的作用域—— `Local作用域`，也就是本地作用域，或者叫函数作用域

> `node` 环境下多了一种 `Local作用域`，叫做模块作用域

```html

<script lang="js">
  function test() {
    var a = 'Local作用域 a';
    const b = 'Local作用域 b';
    debugger
  }
  
  test()
  
  function aa() {
    var a = 'Local作用域 a';
    {
      var b = 'Local作用域 b'; // var 不形成块级作用域
    }
    debugger
  }
  
  aa()

</script>
```

## Block作用域

`ES6` 块语句 `{}` 生成的作用域—— `Block作用域`，也就是块级作用域

> `if、while、for` 等语句都会生成 `Block作用域`；
> > `var` 不会形成 `Block作用域`，需要使用 `let const`

```html

<script lang="js">
  {
    var a = 'Global作用域';
    const b = 'Block作用域';
    debugger
  }
  
  function bb() {
    const b = 'Local作用域 b';
    {
      var a = 'Local作用域 a';
      const b = 'Block作用域 b';
      const c = 'Block作用域 c';
      
      function x() {
        return 'Local作用域 x'
      }
      
      debugger
    }
    console.log(a) // 'Local作用域 a'
    console.log(b) // 'Local作用域 b'
    console.log(x()) // 'Local作用域 x'
    console.log(c) // 'Uncaught ReferenceError: c is not defined'
    
    debugger
  }
  
  bb()
</script>
```

## Script作用域

`浏览器` 环境下用 `let const` 声明全局变量时的特殊作用域—— `Script作用域`。可以直接访问这个全局变量，但是却不能通过 `window.xx` 访问

```html

<script lang="js">
  var a = 'Global作用域 a';
  let b = 'Script作用域 b';
  const c = 'Script作用域 c';
  
  console.log(a) // 'Global作用域 a'
  console.log(window.a) // 'Global作用域 a'
  
  console.log(b) // 'Script作用域 b'
  console.log(window.b) // undefined
  
  console.log(c) // 'Script作用域 c'
  console.log(window.c) // undefined
  
  debugger
</script>
```

## 模块作用域

`node` 环境下就没有了 `Script作用域`，但是多了一个 `Local作用域`，`Local作用域` 还有 module、exports、require
等变量，这个叫做 `模块作用域`

> 也是函数作用域

```js
var a = 'Local作用域 a'
let b = 'Local作用域 b'
const c = 'Local作用域 c'

debugger
```

## Catch block作用域

`catch` 语句也会生成一个特殊的作用域—— `Catch block作用域`，特点是能访问错误对象

> `finally` 语句中形成正常的 `Block作用域`

```html

<script lang="js">
  try {
    throw new Error('Catch block作用域')
  } catch ( e ) {
    debugger
  }
</script>
```

在 `node` 中也是一样

```js
try {
  throw new Error('Catch block作用域')
} catch ( e ) {
  debugger
}
```

## With block作用域

`with` 语句也会生成一个特殊的作用域—— `With block作用域`，特点是可以直接访问 with 对象的值

> 语句里面再声明的变量不属于 `With block作用域`

```html

<script lang="js">
  with ({ c: 3 }) {
    var a = 'Global作用域 a'
    const b = 'Block作用域 b'
    c = 'With block作用域 c' // With block作用域 的内容可直接访问
    
    debugger
    function f() {
      var d = 'Local作用域 d'
      const e = 'Local作用域 e'
      
      debugger
    }
  }
  
  f()
</script>
```

## Closure作用域

闭包是 JS 的常见概念，它是一个函数返回另一个函数的形式，返回的函数引用了外层函数的变量，就会以闭包的形式保存下来

> 通过 `Closure作用域` 保存了使用到的变量的值，这个 `Closure作用域` 就是闭包的核心

### 单层闭包

> 只将**用到的、外部作用域的**变量保存到 `Closure作用域`

```html

<script lang="js">
  function fn() {
    const a = 'Closure作用域 a';
    const b = 'Local作用域 b'; // 没用到，不保存到 Closure作用域
    
    debugger
    return function () {
      const c = 'Local作用域 c'; // 不是外部作用域，不保存到 Closure作用域
      
      debugger;
      console.log(a, c);
    };
  }
  
  fn()()
</script>
```

### 多层闭包

> 用到的外部变量分别在**不同的作用域**里，那就会生成多个 `Closure作用域`

```html

<script lang="js">
  function fun() {
    const a = 'Closure作用域 fun';
    const b = 'Local作用域 b';
    
    debugger
    return function () {
      const c = 'Closure作用域 c';
      const d = 'Local作用域 d';
      
      debugger;
      return function () {
        const e = 'Local作用域 e';
        
        debugger
        console.log(a, c, e);
      };
    };
  }
  
  fun()()()
</script>
```

### 闭包中的 eval

> 把所有外部的作用域的变量都保存到了 `Closure作用域`
> > `node` 环境下会包括 `模块作用域` 的变量

```html

<script lang="js">
  function fn() {
    const a = 'Closure作用域 a';
    const b = 'Local作用域 b';
    
    debugger
    return function () {
      const c = 'Local 作用域 c';
      
      debugger;
      eval("console.log(a, c);");
    };
  }
  
  fn()()
</script>
```

### node 执行中的闭包

> 之所以说**模块作用域**是特殊的**函数作用域**是因为与 node 模块的执行机制有关
> `node` 会把模块变为一个函数，它有 exports、require、module、__dirname、__filename
> 这五个参数，然后传入这五个参数来执行，模块里的函数引用模块作用域的变量，再执行，自然就形成了闭包

```js
function func() {
  require
  debugger;
}

func()
```

## Eval作用域

`eval` 的代码里声明的变量都在这个作用域里

> > `node` 环境下会将 `模块作用域` 的变量放入 `Closure作用域`

```html

<script lang="js">
  eval(`
    const a = 1;
    const b = 2;
    const c = 3;

    console.log(a,b,c);
    debugger;
`);
</script>
```
