# NPM包自定义导出

`exports` 定义了自定义导出规则，可以理解为**路径映射**

存在子路径时需要添加 `exports` 进行路径映射，并且 `export` 中的 `.` 配置会具有较高优先级，所以 `.` 对应的路径必须是真实存在的（此时，即使你在main/module中的路径写错了，也没关系）。


## 配置

假如我们为 `package.json` 做了如下配置，希望支持子路径

```json
{
  "name": "@pyl/core-test",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.mjs",
      "require": "./dist/index.js"
    },
    "./util": {
      "types": "./dist/util.d.ts",
      "import": "./dist/util.mjs",
      "require": "./dist/util.js"
    }
  }
}
```

## 使用

```js
import { Test } from '@pyl/core-test';
import { TestUtil } from '@pyl/core-test/util'; // [!code  error]
import '@pyl/core-test/dist/styles.css'; // [!code  error]
```

## 问题

* `build` 过程，无法识别 `@pyl/core-test/dist/styles.css` 路径

报错：

```markdown
Module not found: Error: Package path ./dist/styles.css is not exported from package...
```

解决方案：

```json
{
  "name": "@pyl/core-test",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.mjs",
      "require": "./dist/index.js"
    },
    "./util": {
      "types": "./dist/util.d.ts",
      "import": "./dist/util.mjs",
      "require": "./dist/util.js"
    },
    "./*": [
      "./*",
      "./*.d.ts"
    ]
  }
}
```

* `ts` 无法识别 `@pyl/core-test/util` 路径

报错：

```markdown
TS2307: Cannot find module '@cbe/core-editor/backend' or its corresponding type declarations. // [!code  error]
```

解决方案：

> dist 目录下需要保证 util.d.ts 存在，并且需要和 exports 中子路径名称一致，否则依然无法找到路径
> > 子路径对应的声明文件必须放到根目录，资源文件可以单独文件夹放置

```json
{
  "name": "@pyl/core-test",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.mjs",
      "require": "./dist/index.js"
    },
    "./util": {
      "types": "./dist/util.d.ts",
      "import": "./dist/util.mjs",
      "require": "./dist/util.js"
    },
    "./*": [
      "./*",
      "./*.d.ts"
    ],
    "typesVersions": {
      "*": {
        "*": [
          "./dist/*",
          "./*"
        ]
      }
    }
  }
}
```




