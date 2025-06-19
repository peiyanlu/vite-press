## [ES2022(ES13)](https://tc39.es/ecma262/2022/)


### Class 扩展

* 类字段定义

> 类字段可以在类的顶层被定义和初始化。在这之前，类的字段定义和初始化是在类的构造函数中完成的

:::tip
类公有字段通过 `Object.defineProperty` 定义
:::

```ts
class Person {
  name;
  age: 18;
}
```

* 类私有域

> 类属性在默认情况下是公有的，但可以使用增加哈希前缀 `#` 的方法来定义私有类属性

1. 私有字段：包括私有**实例字段**和私有**静态字段**

2. 私有方法：包括私有**实例方法**和私有**静态方法**

:::tip
`in` 操作符，如果指定的属性/字段在指定的对象/类中，则返回真，并且也能判断私有字段
::::

```ts
class Person {
  #privateField;
  static #PRIVATE_STATIC_FIELD;
  
  #privateMethod() {
    return 'hello world';
  }
  
  static #privateStaticMethod() {
    return 42;
  }
  
  static hasAttr() {
    return this.#PRIVATE_STATIC_FIELD in this
  }
}
```

* 类静态域

> 在类字段和私有字段基础上，增加了静态公共字段、静态私有方法和 静态私有字段

```ts
class Person {
  static name;
  
  static #age;
  
  static #getAge() {
    return this.#age
  }
}
```

* 静态块

> 可以访问修改私有静态字段和方法

```ts
class Counter {
  static #baseNum = 100;
  
  static getDoubleBaseNum() {
    return this.#baseNum * 2;
  }
  
  static {
    this.#baseNum = 200;
  }
}

console.log(Counter.getDoubleBaseNum());  // 400
```

### 数组扩展

* Array.prototype.at

> 接收一个整数值并返回该索引对应的元素，允许正数和负数。负整数从数组中的最后一个元素开始倒数。

```ts
// arr.at(index)

const cart = [ 'apple', 'banana', 'pear' ];

console.log(cart.at(0)) // apple
console.log(cart.at(-1)) // pear
```

### 字符串扩展

* String.prototype.at

> 接受一个整数值，并返回一个新的 `String`，该字符串由位于指定偏移量处的单个 `UTF-16` 码元组成。该方法允许正整数和负整数。负整数从字符串中的最后一个字符开始倒数。

```ts
// str.at(index)

const myString = 'Every green bus drives fast.';

console.log(myString.at(0)) // E
console.log(myString.at(-1)) // .
```

### 正则扩展

* `/d` 修饰符

> 利用 `/d` 标识符来表示想要匹配字符串的开始和结束索引
> > 通过 `/d` 标识符，匹配结果会多出一个属性 `.indices`

```ts
const re1 = /a+(z)?/d;

const s1 = "xaaaz";
const m1 = re1.exec(s1);

console.log(m1.indices[0]);               // [1, 5]
console.log(s1.slice(...m1.indices[0]));  // 'aaaz'
console.log(m1.indices[1]);               // [4, 5]
console.log(s1.slice(...m1.indices[1]));  // 'z'
```

### 对象扩展

* Object.hasOwn

> 如果指定的对象自身有指定的属性，则静态方法` Object.hasOwn()` 返回 `true`。如果属性是继承的或者不存在，该方法返回 `false`
> > `Object.hasOwn()` 旨在取代 `Object.prototype.hasOwnProperty()`

```ts
// Object.hasOwn(instance, prop)

const example = {};
Object.hasOwn(example, 'prop');   // false - 'prop' has not been defined

example.prop = 'exists';
Object.hasOwn(example, 'prop');   // true - 'prop' has been defined

example.prop = null;
Object.hasOwn(example, 'prop');   // true - own property exists with value of null

example.prop = undefined;
Object.hasOwn(example, 'prop');   // true - own property exists with value of undefined
```

### Error 扩展

* Error cause

> `Error` 实例中的 `cause` 数据属性指示导致该错误的具体原始原因。

在捕获错误时，我们可能会使用更具体或更加实用的信息对错误进行包装，再将其重新抛出。`cause` 属性就用于这一场景，以便仍然可以访问原始的错误。

:::tip
🎉 `Error cause` 是第一个由中国公司（阿里巴巴 `TC39` 代表 `legendecas`）代表主导推动的 `JavaScript` 达到 `stage 4` 的新特性提案！
:::

```ts
try {
  connectToDatabase();
} catch ( err ) {
  throw new Error('Connecting to database failed.', { cause: err });
}
```

### Promise 扩展

* 顶层 await

> 在模块的顶层，可以单独使用关键字 `await`（异步函数的外面）。也就是说一个模块如果包含用了 `await` 的子模块，该模块就会等待该子模块，这一过程并不会阻塞其他子模块

:::warning
在 `Class` 代码块或非 `async` 函数仍不支持
:::

任何文件只要导入这个模块，后面的代码就会等待，直到 `fetch` 完成。

```ts
// fetch request
const colors = fetch("../data/colors.json").then((response) => response.json());

export default await colors;
```
