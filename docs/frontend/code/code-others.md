---
title: 其他应用
description: js实用技巧
category: code
tags:
  - code
---

# 应用

## 对象交换Key和Value

```ts
const obj: { [K: string]: number } = { a: 1, b: 2 };
const invert = Object
  .entries(obj)
  .reduce<Record<string, any>>((temp, [ key, value ]) => {
    temp[value] = key
    return temp
  }, {})
```

# 生成一个随机的RGBA颜色值

```ts
const getRandomColorRGBA = () => {
  const color = Math.floor(Math.random() * 0x1000000) // 生成一个随机的颜色数值
  const rgbaColor = '#' + ('000000' + color.toString(16)).slice(-6) // 将颜色数值转换为十六进制字符串
    
  const alpha = Math.random() // 生成0-1之间的随机透明度值
    
  return rgbaColor + Math.floor(alpha * 255).toString(16) // 将透明度转换为十六进制字符串并拼接到颜色值后面
};

// 浅色系
const color = () => {
  const r = () => Math.floor(Math.random() * 116) + 140
  return `rgba(${r()}, ${r()}, ${r()}, ${Math.random() * 0.75 + 0.25})`
};
```
