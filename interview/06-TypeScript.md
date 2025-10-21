---
url: /vite-press/interview/06-TypeScript.md
---

# {{ $frontmatter.title }}

### 基础概念篇

#### 1. TypeScript 与 JavaScript 的区别是什么？

TypeScript 是 JavaScript 的超集，它扩展了 JavaScript，主要区别包括：

* **类型系统**：TypeScript 提供静态类型检查
* **面向对象特性**：提供接口、泛型、枚举等特性
* **开发工具支持**：更好的 IDE 支持，包括代码补全、重构等
* **及早发现错误**：在编译时就能发现潜在问题
* **JavaScript 互操作性**：可以逐步将 JavaScript 代码迁移到 TypeScript

[示例代码](https://so.csdn.net/so/search?q=%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81\&spm=1001.2101.3001.7020)：

```ts
// JavaScript
function add(a, b) {
 return a + b;
}

// TypeScript
function add(a: number, b: number): number {
 return a + b;
}

// 使用接口
interface User {
 name: string;
 age: number;
}

function printUser(user: User) {
 console.log(`${user.name} is ${user.age} years old`);
}
```

#### 2. TypeScript 中的基本类型有哪些？

TypeScript 包含以下基本类型：

1. **基础类型**：

   * `number`：数字
   * `string`：字符串
   * `boolean`：布尔值
   * `null`和`undefined`
   * `void`：通常用于函数返回值
   * `any`：任意类型
   * `never`：永不存在的值的类型

2. **对象类型**：

   * `object`：对象类型
   * `array`：数组类型
   * `tuple`：元组类型

示例代码：

```ts
// 基础类型示例
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];

// 枚举类型
enum Color {
 Red,
 Green,
 Blue,
}
let c: Color = Color.Green;

// void 类型
function warnUser(): void {
 console.log("This is a warning message");
}

// any 类型
let notSure: any = 4;
notSure = "maybe a string";
```

#### 3. 什么是类型断言？如何使用？

类型断言用于告诉编译器"相信我，我知道自己在做什么"。它有两种形式：

1. 尖括号语法
2. as 语法（推荐，特别是在 JSX 中）

示例代码：

```ts
// 尖括号语法
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

// as 语法
let someValue2: any = "this is a string";
let strLength2: number = (someValue2 as string).length;

// 实际应用场景
interface Person {
 name: string;
 age: number;
}

const data: any = { name: "John", age: 30 };
const person = data as Person;

1234567891011121314151617;
```

### 进阶特性篇

#### 4. 什么是泛型？为什么要使用泛型？

泛型是一种在定义函数、接口或类时不预先指定具体类型，而在使用时再指定类型的特性。

优点：

* 代码复用
* 类型安全
* 减少冗余代码

示例代码：

```ts
// 泛型函数
function identity<T>(arg: T): T {
 return arg;
}

// 使用泛型函数
let output1 = identity<string>("myString");
let output2 = identity(42); // 类型推断为 number

// 泛型接口
interface GenericIdentityFn<T> {
 (arg: T): T;
}

// 泛型类
class GenericNumber<T> {
 zeroValue: T;
 add: (x: T, y: T) => T;
}

// 泛型约束
interface Lengthwise {
 length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
 console.log(arg.length);
 return arg;
}
```

#### 5. 装饰器是什么？如何使用？

装饰器是一种特殊类型的声明，可以附加到类、方法、访问符、属性或参数上。

示例代码：

```ts
// 类装饰器
function sealed(constructor: Function) {
 Object.seal(constructor);
 Object.seal(constructor.prototype);
}

@sealed
class Greeter {
 greeting: string;
 constructor(message: string) {
 this.greeting = message;
 }
 greet() {
 return "Hello, " + this.greeting;
 }
}

// 方法装饰器
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
 let originalMethod = descriptor.value;
 descriptor.value = function (...args: any[]) {
 console.log(`Calling ${propertyKey} with`, args);
 return originalMethod.apply(this, args);
 };
 return descriptor;
}

class Calculator {
 @log
 add(x: number, y: number) {
 return x + y;
 }
}
```

### 实战应用篇

#### 6. TypeScript 中如何实现接口继承？

接口继承允许我们从一个接口复制成员到另一个接口，实现代码重用。

示例代码：

```ts
interface Animal {
 name: string;
 age: number;
}

interface Pet extends Animal {
 breed: string;
}

interface Dog extends Pet {
 bark(): void;
}

const dog: Dog = {
 name: "Max",
 age: 3,
 breed: "Labrador",
 bark() {
 console.log("Woof!");
 },
};

class GoldenRetriever implements Dog {
 name: string;
 age: number;
 breed: string;

 constructor(name: string, age: number) {
 this.name = name;
 this.age = age;
 this.breed = "Golden Retriever";
 }

 bark() {
 console.log("Woof!");
 }
}
```

#### 7. 如何在 TypeScript 中处理异步操作？

TypeScript 完全支持现代 JavaScript 的异步特性，包括 Promise、async/await 等。

示例代码：

```ts
// Promise 示例
interface User {
 id: number;
 name: string;
}

function fetchUser(id: number): Promise<User> {
 return new Promise((resolve, reject) => {
 setTimeout(() => {
 resolve({
 id: id,
 name: "John Doe",
 });
 }, 1000);
 });
}

// async/await 示例
async function getUser(id: number): Promise<User> {
 try {
 const user = await fetchUser(id);
 console.log(user.name);
 return user;
 } catch (error) {
 console.error("Error fetching user:", error);
 throw error;
 }
}

// 实际应用
async function processUser(id: number) {
 const user = await getUser(id);
 // 处理用户数据
 return user;
}
```

### 高级特性篇

#### 8. 什么是条件类型？如何使用？

条件类型是 TypeScript 中的高级类型特性，允许我们基于类型关系进行类型选择。

示例代码：

```ts
type TypeName<T> = T extends string
 ? "string"
 : T extends number
 ? "number"
 : T extends boolean
 ? "boolean"
 : T extends undefined
 ? "undefined"
 : T extends Function
 ? "function"
 : "object";

// 使用示例
type T0 = TypeName<string>; // "string"
type T1 = TypeName<"hello">; // "string"
type T2 = TypeName<() => void>; // "function"

// 实际应用
type NonNullable<T> = T extends null | undefined ? never : T;
type Flatten<T> = T extends Array<infer U> ? U : T;
```

#### 9. 如何使用映射类型？

映射类型允许我们从现有类型创建新类型，通过映射现有类型的每个属性。

示例代码：

```ts
// 将所有属性变为可选
type Partial<T> = {
 [P in keyof T]?: T[P];
};

// 将所有属性变为只读
type Readonly<T> = {
 readonly [P in keyof T]: T[P];
};

// 实际应用
interface Person {
 name: string;
 age: number;
}

type PartialPerson = Partial<Person>;
// 等价于：
// {
// name?: string;
// age?: number;
// }

type ReadonlyPerson = Readonly<Person>;
// 等价于：
// {
// readonly name: string;
// readonly age: number;
// }
```

### 工程实践篇

#### 10. TypeScript 项目中如何处理模块化？

TypeScript 支持现代 JavaScript 的模块化语法，同时提供了额外的类型系统支持。

示例代码：

```ts
// math.ts
export interface MathOperations {
 add(x: number, y: number): number;
 subtract(x: number, y: number): number;
}

export class Calculator implements MathOperations {
 add(x: number, y: number): number {
 return x + y;
 }

 subtract(x: number, y: number): number {
 return x - y;
 }
}

// app.ts
import { Calculator, MathOperations } from "./math";

const calc = new Calculator();
console.log(calc.add(5, 3)); // 8
```

### 补充重点篇

#### 11. 什么是类型收窄（Type Narrowing）？

类型收窄是 TypeScript 中缩小类型范围的过程，有多种方式可以实现类型收窄。

示例代码：

```ts
// 使用类型守卫
function padLeft(padding: number | string, input: string) {
 if (typeof padding === "number") {
 // 这里 padding 的类型被收窄为 number
 return " ".repeat(padding) + input;
 }
 // 这里 padding 的类型被收窄为 string
 return padding + input;
}

// 使用 instanceof
class Bird {
 fly() {
 console.log("flying...");
 }
}

class Fish {
 swim() {
 console.log("swimming...");
 }
}

function move(animal: Bird | Fish) {
 if (animal instanceof Bird) {
 // 这里 animal 的类型被收窄为 Bird
 animal.fly();
 } else {
 // 这里 animal 的类型被收窄为 Fish
 animal.swim();
 }
}

// 使用 in 操作符
interface Admin {
 name: string;
 privileges: string[];
}

interface Employee {
 name: string;
 startDate: Date;
}

function printEmployeeInformation(emp: Admin | Employee) {
 if ("privileges" in emp) {
 // 这里 emp 的类型被收窄为 Admin
 console.log("Privileges: " + emp.privileges);
 }
 if ("startDate" in emp) {
 // 这里 emp 的类型被收窄为 Employee
 console.log("Start Date: " + emp.startDate);
 }
}
```

#### 12. TypeScript 中的 tsconfig.json 重要配置有哪些？

tsconfig.json 是 TypeScript 项目的配置文件，包含许多重要选项。

示例代码：

```json
{
 "compilerOptions": {
 // 目标 JavaScript 版本
 "target": "ES2020",

 // 模块系统
 "module": "CommonJS",

 // 严格类型检查
 "strict": true,

 // 允许从没有默认导出的模块中默认导入
 "allowSyntheticDefaultImports": true,

 // 生成声明文件
 "declaration": true,

 // 允许装饰器
 "experimentalDecorators": true,

 // 模块解析策略
 "moduleResolution": "node",

 // 基础目录
 "baseUrl": "./src",

 // 路径别名
 "paths": {
 "@/*": ["*"]
 }
 },
 "include": ["src/**/*"],
 "exclude": ["node_modules", "**/*.spec.ts"]
}
```

#### 13. 联合类型和交叉类型的区别是什么？

联合类型和交叉类型是 TypeScript 中两种重要的类型组合方式。

示例代码：

```ts
// 联合类型（Union Types）
// 表示可以是多种类型中的一种
type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
 if (typeof id === "string") {
 console.log(id.toUpperCase());
 } else {
 console.log(id);
 }
}

// 交叉类型（Intersection Types）
// 表示同时具有多种类型的特性
interface ErrorHandling {
 success: boolean;
 error?: { message: string };
}

interface ArtworksData {
 artworks: { title: string }[];
}

// 同时具有两个接口的所有属性
type ArtworksResponse = ArtworksData & ErrorHandling;

const response: ArtworksResponse = {
 artworks: [{ title: "Mona Lisa" }],
 success: true,
};
```

#### 14. TypeScript 4.x 和 5.x 有哪些重要新特性？

TypeScript 的新版本带来了许多有用的特性。

示例代码：

```ts
// TypeScript 4.0+: 可变元组类型
type Strings = [string, string];
type Numbers = [number, number];
type StringsAndNumbers = [...Strings, ...Numbers];

// TypeScript 4.3+: override 关键字
class Base {
 greet() {
 console.log("Hello");
 }
}

class Derived extends Base {
 override greet() {
 console.log("Hi");
 }
}

// TypeScript 4.4+: 控制流分析的改进
function example(value: string | number) {
 if (Math.random()) {
 value = "hello";
 }
 if (typeof value === "string") {
 // TypeScript 知道这里 value 一定是 string
 console.log(value.toUpperCase());
 }
}

// TypeScript 4.5+: Awaited 类型
type A = Awaited<Promise<string>>; // string
type B = Awaited<Promise<Promise<number>>>; // number

// TypeScript 4.9+: satisfies 操作符
const palette = {
 red: [255, 0, 0],
 green: "#00ff00",
} satisfies Record<string, string | number[]>;

// TypeScript 5.0+: const 类型参数
function first<const T extends readonly unknown[]>(arr: T) {
 return arr[0];
}

// TypeScript 5.2+: using 关键字和显式资源管理
class FileHandle implements Disposable {
 dispose() {
 // 清理资源
 }
}

{
 using handle = new FileHandle();
 // 使用 handle
 // 作用域结束时自动调用 dispose
}
```

#### 15. TypeScript 中的类型体操实战有哪些？

类型体操是 TypeScript 中高级类型的实际应用，经常出现在面试中。

示例代码：

```ts
// 实现 Pick 类型
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// 实现 Readonly 类型
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

// 实现深度 Readonly
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

// 实现 Partial 类型
type MyPartial<T> = {
  [P in keyof T]?: T[P];
};

// 实现 Required 类型
type MyRequired<T> = {
  [P in keyof T]-?: T[P];
};

// 实现 Record 类型
type MyRecord<K extends keyof any, T> = {
  [P in K]: T;
};

// 实现 Exclude 类型
type MyExclude<T, U> = T extends U ? never : T;

// 实现 Extract 类型
type MyExtract<T, U> = T extends U ? T : never;

// 实现 ReturnType 类型
type MyReturnType<T extends (...args: any) => any> = T extends (
    ...args: any
  ) => infer R
  ? R
  : any;

// 实际应用示例
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// 只读的 Todo 类型
type ReadonlyTodo = MyReadonly<Todo>;

// 可选的 Todo 类型
type PartialTodo = MyPartial<Todo>;

// 提取 Todo 中的字符串类型属性
type StringProps = MyExtract<keyof Todo, string>;
```

### 总结

本文涵盖了 TypeScript 面试中最常见的问题，从基础概念到高级特性，再到实际应用。建议：

1. **基础知识**

* 深入理解类型系统
* 掌握接口和类的使用
* 熟练运用泛型

2. **进阶技能**

* 理解装饰器原理
* 掌握高级类型操作
* 熟悉模块化开发

3. **实战经验**

* 多做项目练习
* 关注最佳实践
* 保持学习更新
