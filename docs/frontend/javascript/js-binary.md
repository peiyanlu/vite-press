---
title: 二进制
description: js中的二进制使用方法
category: javascript
tags:
  - Blob
---

# JS二进制

> Blob、File、FileReader、ArrayBuffer、Base64

![img.png](img/binary/img.png)

## 1、Blob

`Blob` 全称为 `binary large object` ，即二进制大对象，它是 `JavaScript` 中的一个对象，表示原始的类似文件的数据。下面是 `MDN`
中对 `Blob` 的解释：

> `Blob`
> 对象表示一个不可变、原始数据的类文件对象。它的数据可以按文本或二进制的格式进行读取，也可以转换成 [ReadableStream](https://developer.mozilla.org/zh-CN/docs/Web/API/ReadableStream)
> 来用于数据操作。

实际上，`Blob` 对象是包含有只读原始数据的类文件对象。简单来说，`Blob` 对象就是一个 **不可修改** 的二进制文件。

### Blob创建

```ts
const { size, type } = new Blob(array, options)

const blob = new Blob([ 'Hello World' ], { type: 'text/plain' })
console.log(blob.size) // 11
console.log(blob.type) // "text/plain"

const url = URL.createObjectURL(blob)
console.log(url) // blob:域名/uuid
```

* `array`：由 `ArrayBuffer`、`ArrayBufferView`、`Blob`、`DOMString` 等对象构成的，将会被放进 `Blob`；

* `options`：可选的 `BlobPropertyBag` 字典，它可能会指定如下两个属性

  * `type`：默认值为 ""，表示将会被放入到 `blob` 中的数组内容的 `MIME` 类型。
  
  * `endings`：默认值为 "`transparent`"，用于指定包含行结束符 `\n` 的字符串如何被写入，不常用。
  

| MIME类型           | 描述            |
|------------------|---------------|
| text/plain       | 纯文本文档         |
| text/html        | HTML 文档       |
| text/javascript  | JavaScript 文件 |
| text/css         | CSS 文件        |
| application/json | JSON文件        |
| application/pdf  | PDF文件         |
| application/xml  | XML 文件        |
| image/jpeg       | JPEG图像        |
| image/png        | PNG图像         |
| image/gif        | GIF 图像        |
| image/svg+xml    | SVG 图像        |
| audio/mpeg	      | MP3 文件        |
| video/mpeg       | MP4 文件        |

### Blob分片

除了使用 `Blob()` 构造函数来创建 `blob` 对象之外，还可以从 `blob` 对象中创建 `blob`，也就是将 `blob` 对象切片。`Blob` 对象内置了 `slice()`
方法用来将 `blob` 对象分片，其语法如下：

```ts
const instanceOfBlob = new Blob([ "Hello World" ], { type: "text/plain" })

// const blob = instanceOfBlob.slice([ start [, end [, contentType ]]]);
const blob = instanceOfBlob.slice(0, 5, "text/plain");
const url = URL.createObjectURL(blob);
```

## 2、File

文件（`File`）接口提供有关文件的信息，并允许网页中的 `JavaScript` 访问其内容。实际上，`File` 对象是特殊类型的 `Blob`，且可以用在任意的
`Blob` 类型的 `context` 中。`Blob` 的属性和方法都可以用于 `File` 对象。

> 注意：`File` 对象中只存在于浏览器环境中，在 `Node.js` 环境中不存在。

```ts
const file = new File([ str ], fileName, options)

// const file = new File([`<div><h1>下载成功！</h1></div>`],{type:'text/html'})
```

### File获取

在 `JavaScript` 中，主要有两种方法来获取 `File` 对象：

- `input` 元素上选择（`onchange`）文件后返回的 `FileList` 对象；
  `console.log(e.target.files)`

- 文件拖放操作（`ondrop`，`ondragover`）生成的 `DataTransfer` 对象；
  `console.log(e.dataTransfer.files)`

### File属性

每个 `File` 对象都包含文件的一些属性，这些属性都继承自 `Blob` 对象：

* `lastModified`：引用文件最后修改日期，为自 `1970年1月1日0:00` 以来的毫秒数；

* `lastModifiedDate`：引用文件的最后修改日期；

* `name`：引用文件的文件名；

* `size`：引用文件的文件大小；

* `type`：文件的媒体类型（`MIME`）；

* `webkitRelativePath`：文件的路径或 `URL`。

通常，我们在上传文件时，可以通过对比 `size` 属性来限制文件大小，通过对比 `type` 来限制上传文件的格式等。

### FileList

包含 `File` 文件集合的 `list`，通常来自的 `files` 属性

## 3、FileReader

`FileReader` 是一个异步 `API`，用于读取文件并提取其内容以供进一步使用。`FileReader` 可以将 `Blob` 读取为不同的格式。

> 注意：`FileReader` 仅用于以安全的方式从用户（远程）系统读取文件内容，不能用于从文件系统中按路径名简单地读取文件。

```ts
const reader = new FileReader();

reader.readAsDataURL(file)

reader.onload = () => {
  console.log(reader.result)
}
```

### FileReader属性

常用属性如下：

* `error`：表示在读取文件时发生的错误；

* `result`：文件内容。该属性仅在读取操作完成后才有效，数据的格式取决于使用哪个方法来启动读取操作。

* `readyState`：表示 `FileReader` 状态的数字。取值如下：

| 常量名     | 值 | 描述         |
|---------|---|------------|
| EMPTY   | 0 | 还没有加载任何数据  |
| LOADING | 1 | 数据正在被加载    |
| DONE    | 2 | 已完成全部的读取请求 |

### FileReader方法

`FileReader` 对象提供了以下方法来加载文件：

* `readAsArrayBuffer()`：读取指定 `Blob` 中的内容，完成之后，`result` 属性中保存的将是被读取文件的 `ArrayBuffer` 数据对象；

* `FileReader.readAsBinaryString()`：读取指定 `Blob` 中的内容，完成之后，`result` 属性中将包含所读取文件的原始二进制数据；

* `FileReader.readAsDataURL()`：读取指定 `Blob` 中的内容，完成之后，`result` 属性中将包含一个 `data: URL` 格式的 `Base64` 字符串以表示所读取文件的内容。

* `FileReader.readAsText()`：读取指定 `Blob` 中的内容，完成之后，`result` 属性中将包含一个字符串以表示所读取的文件内容。

### FileReader事件

`FileReader` 对象常用的事件如下：

* `abort`：该事件在读取操作被中断时触发；

* `error`：该事件在读取操作发生错误时触发；

* `load`：该事件在读取操作完成时触发；

* `progress`：该事件在读取 `Blob` 时触发。提供了两个属性：`loaded`（已读取量）和 `total`（需读取总量）。

可以使用 `on` 监听这些事件，由于 `FileReader` 对象继承自 `EventTarget`，因此还可以使用 `addEventListener()` 监听上述事件

## 4、ArrayBuffer

`ArrayBuffer` 对象用来表示通用的、固定长度的**原始二进制数据缓冲区**。`ArrayBuffer` 的内容不能直接操作，只能通过 `DataView` 对象或 `TypedArray` 对象来访问，这些对象用于读取和写入缓冲区内容。

`ArrayBuffer` 本身就是一个黑盒，不能直接读写所存储的数据，需要借助以下视图对象来读写：

* **TypedArray**：用来生成内存的视图，通过 `9` 个构造函数，可以生成9种数据格式的视图。是用来向网卡、声卡之类的本机设备传送数据，所以使用本机的字节序就可以了
* **DataViews**：用来生成内存的视图，可以自定义格式和字节序。是用来处理网络设备传来的数据，所以大端字节序或小端字节序是可以自行设定的

`TypedArray` 视图和 `DataView` 视图的区别主要是**字节序**，前者的数组成员都是同一个数据类型，后者的数组成员可以是不同的数据类型。

那 `ArrayBuffer` 与 `Blob` 有啥区别呢？

* 根据 `ArrayBuffer` 和 `Blob` 的特性，`Blob` 作为一个整体文件，适合用于传输；
* 当需要对二进制数据进行操作时（比如要修改某一段数据时），就可以使用 `ArrayBuffer`。

### ArrayBuffer

```ts
const buffer = new ArrayBuffer(bytelength)
```

`ArrayBuffer()` 构造函数可以分配指定字节数量的缓冲区，其参数和返回值如下：

* **参数**：它接受一个参数，即 `bytelength`，表示要创建数组缓冲区的大小（以字节为单位）；
* **返回值**：返回一个新的指定大小的 `ArrayBuffer` 对象，内容初始化为 `0`。

#### ArrayBuffer.prototype.byteLength

> 只读属性，表示 `ArrayBuffer` 的 `byte` 的大小，在 `ArrayBuffer` 构造完成时生成，不可改变

```ts
const buffer = new ArrayBuffer(16);
console.log(buffer.byteLength);  // 16
```

#### ArrayBuffer.prototype.slice()

> 该方法可以用来截取 `ArrayBuffer` 实例，它返回一个新的 `ArrayBuffer` ，它的内容是这个 `ArrayBuffer` 的字节副本。
>> 这个方法实际上有两步操作，首先会分配一段指定长度的内存，然后拷贝原来 `ArrayBuffer` 对象的置顶部分。

```ts
const buffer = new ArrayBuffer(16);
console.log(buffer.slice(0, 8));  // 16
```

#### ArrayBuffer.isView()

> 用来判断参数是否是 `TypedArray` 实例或者 `DataView` 实例
>> 如果参数是 `ArrayBuffer` 的视图实例则返回 `true`，例如类型数组对象或 `DataView` 对象；否则返回 `false`

```ts
const buffer = new ArrayBuffer(16);
ArrayBuffer.isView(buffer)   // false

const view = new Uint32Array(buffer);
ArrayBuffer.isView(view)     // true
```

### TypedArray

`TypedArray` 对象一共提供 `9` 种类型的视图，每一种视图都是一种构造函数。如下：

| 元素      | 类型化数组             | 字节 | 描述        |
|---------|-------------------|----|-----------|
| Int8    | Int8Array         | 1  | 8 位有符号整数  |
| Uint8   | Uint8Array        | 1  | 8 位无符号整数  |
| Uint8C  | Uint8ClampedArray | 1  | 8 位无符号整数  |
| Int16   | Int16Array        | 2  | 16 位有符号整数 |
| Uint16  | Uint16Array       | 2  | 16 位无符号整数 |
| Int32   | Int32Array        | 4  | 32 位有符号整数 |
| Uint32  | Uint32Array       | 4  | 32 位无符号整数 |
| Float32 | Float32Array      | 4  | 32 位浮点    |
| Float64 | Float64Array      | 8  | 64 位浮点    |

- `Uint8Array`：将 `ArrayBuffer` 中的每个字节视为一个整数，可能的值从 `0` 到 `255` （一个字节等于 `8` 位）。这样的值称为 `8` 位无符号整数。

- `Uint16Array`：将 `ArrayBuffer` 中任意两个字节视为一个整数，可能的值从 `0` 到 `65535`。 这样的值称为 `16` 位无符号整数。

- `Uint32Array`：将 `ArrayBuffer` 中任何四个字节视为一个整数，可能值从 `0` 到 `4294967295`，这样的值称为 `32` 位无符号整数。

> 这些构造函数生成的对象统称为 `TypedArray` 对象。
> > 它们和正常的数组很类似，都有 `length` 属性，都能用索引获取数组元素，所有数组的方法都可以在类型化数组上面使用。

**那类型化数组和数组有什么区别呢？**

* 类型化数组的元素都是连续的，不会为空；

* 类型化数组的所有成员的类型和格式相同；

* 类型化数组元素默认值为 `0`；

* 类型化数组本质上只是一个视图层，不会存储数据，数据都存储在更底层的 `ArrayBuffer` 对象中。

> `TypedArray` 只是一个概念，实际使用的是那 `9` 个对象

```ts
new Int8Array(length); // 通过分配指定长度内容进行分配
new Int8Array(typedArray); // 接收一个视图实例作为参数
new Int8Array(object); // 接收一个普通数组，eg：[1, 2, 3]
// new Int8Array(buffer [, byteOffset [, length]]); // new ArrayBuffer(8)

const view = new Int16Array(8);
view.length;      // 8
view.byteLength;  // 16
```

#### TypedArray.BYTES_PER_ELEMENT

每种视图的构造函数都有一个 `BYTES_PER_ELEMENT` 属性，表示这种数据类型占据的字节数

#### TypedArray.prototype.buffer

返回内存中对应的 ArrayBuffer对象，只读属性

#### TypedArray.prototype.slice()

返回一个指定位置的新的 TypedArray实例

### DataView

`DataView` 视图是一个可以从二进制 `ArrayBuffer` 对象中读写多种数值类型的底层接口，使用它时，不用考虑不同平台的字节序问题。
> `DataView` 视图提供更多操作选项，而且支持设定字节序。

```ts
// new DataView(buffer [, byteOffset [, byteLength]])

const buffer = new ArrayBuffer(24);
const view = new DataView(buffer);
```

* `buffer`：一个已经存在的 `ArrayBuffer` 对象，`DataView` 对象的数据源。

* `byteOffset`：可选，此 `DataView` 对象的第一个字节在 `buffer` 中的字节偏移。如果未指定，则默认从第一个字节开始。

* `byteLength`：可选，此 `DataView` 对象的字节长度。如果未指定，这个视图的长度将匹配 `buffer` 的长度。

#### 读取内存

`DataView` 实例提供了以下方法来读取内存，它们的参数都是一个字节序号，表示开始读取的字节位置：

* `getInt8`：读取 `1` 个字节，返回一个 `8` 位整数。

* `getUint8`：读取 `1` 个字节，返回一个无符号的 `8` 位整数。

* `getInt16`：读取 `2` 个字节，返回一个 `16` 位整数。

* `getUint16`：读取 `2` 个字节，返回一个无符号的 `16` 位整数。

* `getInt32`：读取 `4` 个字节，返回一个 `32` 位整数。

* `getUint32`：读取 `4` 个字节，返回一个无符号的 `32` 位整数。

* `getFloat32`：读取 `4` 个字节，返回一个 `32` 位浮点数。

* `getFloat64`：读取 `8` 个字节，返回一个 `64` 位浮点数。

#### 写入内存

`DataView` 实例提供了以下方法来写入内存，它们都接受两个参数，第一个参数表示开始写入数据的字节序号，第二个参数为写入的数据：

* `setInt8`：写入 `1` 个字节的 `8` 位整数。
* `setUint8`：写入 `1` 个字节的 `8` 位无符号整数。
* `setInt16`：写入 `2` 个字节的 `16` 位整数。
* `setUint16`：写入 `2` 个字节的 `16` 位无符号整数。
* `setInt32`：写入 `4` 个字节的 `32` 位整数。
* `setUint32`：写入 `4` 个字节的 `32` 位无符号整数。
* `setFloat32`：写入 `4` 个字节的 `32` 位浮点数。
* `setFloat64`：写入 `8` 个字节的 `64` 位浮点数。

## 5、Object URL

`Object URL`（`MDN` 定义名称）又称 `Blob URL`（`W3C` 定义名称），是 `HTML5` 中的新标准。它是一个用来表示 `File Object` 或 `Blob Object` 的 `URL`

> `Blob URL/Object URL` 是一种伪协议，允许将 `Blob` 和 `File` 对象用作图像、二进制数据下载链接等的 `URL` 源。

对于 `Blob/File` 对象，可以使用 `URL` 构造函数的 `createObjectURL()` 方法创建给出的对象的 `URL`。这个 `URL` 对象表示指定的 `File` 对象或
`Blob` 对象。我们可以在 `img`、 `script` 标签的 `src` 中或者 `a` 和 `link` 标签的 `href` 属性中使用这个 `URL`。

```ts
const objUrl = URL.createObjectURL(new File([ "" ], "filename"));
console.log(objUrl);
URL.revokeObjectURL(objUrl);
```

## 6、Base64

`Base64` 是一种基于 `64` 个可打印字符来表示二进制数据的表示方法。`Base64`
编码普遍应用于需要通过被设计为处理文本数据的媒介上储存和传输二进制数据而需要编码该二进制数据的场景。这样是为了保证数据的完整并且不用在传输过程中修改这些数据

在 `JavaScript` 中，有两个函数被分别用来处理解码和编码 `base64` 字符串：

* `atob()`：解码，解码一个 `Base64` 字符串；

* `btoa()`：编码，从一个字符串或者二进制数据编码一个 `Base64` 字符串。

```ts
btoa("JavaScript")       // 'SmF2YVNjcmlwdA=='
atob('SmF2YVNjcmlwdA==') // 'JavaScript'
```

### Base64应用

多数场景就是基于 `Data URL` 的。比如，使用 `canvas.toDataURL()` 和 `fileReader.readAsDataURL()` 生成 `base64` 图片

* `BlobURL` 的格式是 `blob:域名/uuid`

* `DataURL` 的格式是 `data:[mediatype[;base64,]]` // data:text/plain;base64,77bas8ux==

## 7、格式转换

### ArrayBuffer → blob

```ts
const blob = new Blob([ new Uint8Array(arrayBuffer, byteOffset, length) ]);
```

### ArrayBuffer → base64

```ts
const base64 = btoa(String.fromCharCode.apply(null, new Uint8Array(arrayBuffer)));
```

### base64 → blob

```ts
const base64toBlob = (base64Data, contentType, sliceSize) => {
  const byteCharacters = atob(base64Data);
  const byteArrays = [];
  
  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);
    
    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    
    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }
  
  const blob = new Blob(byteArrays, { type: contentType });
  return blob;
}
```

### blob → ArrayBuffer

```ts
const blobToArrayBuffer = blob => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = () => resolve(reader.result);
  reader.onerror = () => reject;
  reader.readAsArrayBuffer(blob);
})
```

### const objectUrl = URL.createObjectURL(blob);

```ts
const objectUrl = URL.createObjectURL(blob);
```
