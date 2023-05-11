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
