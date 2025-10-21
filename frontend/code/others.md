---
url: /vite-press/frontend/code/others.md
description: js实用技巧
---

# 应用

## 交换对象的Key和Value

```ts
const obj: { [K: string]: number } = { a: 1, b: 2 };
const invert = Object
  .entries(obj)
  .reduce<Record<string, any>>((temp, [ key, value ]) => {
    temp[value] = key
    return temp
  }, {})
```

## 生成一个随机的RGBA颜色值

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
  return `rgba(${ r() }, ${ r() }, ${ r() }, ${ Math.random() * 0.75 + 0.25 })`
};
```

## 根据另一个数组对数组排序

```ts
const list = [
  { name: '张三', code: 'zhangsan', id: 45 },
  { name: '李四', code: 'lisi', id: 36 },
  { name: '王五', code: 'wangermazi111', id: 907 },
  { name: '赵六', code: 'wangermazi', id: 9087 }
];
const order = [ 9087, 36, 907, 45 ];
list.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
```

## 递归创建多级目录

```ts
const mkdirsSync = (dirname: string) => {
  if (fs.existsSync(dirname)) {
    return true;
  } else {
    if (mkdirsSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname);
      return true;
    }
  }
};

mkdirsSync('aa/bb/cc')
```

## 获取URL参数

```ts
// 将url中的查询条件转为对象
export const getUrlSearchToObject = (urlSearch = location.search) => Object.fromEntries(new URLSearchParams(urlSearch))
```

## 对象转URL字符串

```ts
const params: Record<string, string | number> = {
  a: 456,
  b: 'cd',
}

Object.keys(param).map(key => `${ key }=${ param[key] }`).join('&')
// a=456&b=cd

const queryString = Object
  .entries(params)
  .reduce((acc, [ key, value ]) => `${ acc }${ key }=${ value }&`, '?')
  .slice(0, -1);
// ?a=456&b=cd
```

## 修改URL参数不刷新

```ts
const newUrl = location.href.split(location.search || '?').shift()
history.replaceState('', '', nerUrl)
```
