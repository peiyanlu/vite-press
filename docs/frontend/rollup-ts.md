# 使用 rollup 构建一个 ts 库

## 1、初始化 项目

>创建文件夹，初始化项目

```shell
mkdir "dirname"

cd "dirname"

yarn init
```


## 2、初始化 ts

>安装typescript，并且初始化 tsconfig.json

```shell
yarn add typescript -D

tsc --init

```

>生成声明文件的方法

```text
1、tsc --emitDeclarationOnly // 不会捆绑.d.ts
2、rollup-plugin-dts // 捆绑.d.ts

*使用 插件 配合 tsconfig.json 生成声明文件时，声明文件输出文件夹要在 rollup 输出文件夹内 
```


## 3、初始化 rollup

>安装rollup，以及支持TS、路径处理和commonjs的插件

```shell
yarn add rollup -D
yarn add @rollup/plugin-typescript -D
yarn add @rollup/plugin-node-resolve -D
yarn add @rollup/plugin-commonjs -D

*esbuild rollup-plugin-esbuild: 可以替代rollup-plugin-typescript2, @rollup/plugin-typescript and rollup-plugin-terser
```

>配置rollup.config.js

```javascript
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
// 用于生成类型声名文件
import dts from 'rollup-plugin-dts';

export default [
  {
    input: 'source/index.ts', // 入口文件
    output: {
      // file: 'bundle.js', // 输出单个文件时使用
      dir: 'lib', // 输出多个文件时使用
      format: 'es', // 输出模式
      exports: 'named' // 入口文件有多个导出时，取消警告
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      typescript()
    ],
    external: [
    
    ]
  },
  {
    input: 'source/index.ts', // 入口文件
    output: {
      dir: 'types',
      format: 'es'
    },
    plugins: [
      dts()
    ]
  }
]

```


## 4、初始化 eslint

```shell
yarn add eslint -D

eslint --init
```

```javascript
module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
      // 规则
    }
}
```


## 5、Prettier (可选)

```shell
yarn add prettier -D
```

```json lines
{
  "printWidth": 100, //单行长度
  "tabWidth": 2, //缩进长度
  "useTabs": false, //使用空格代替tab缩进
  "semi": true, //句末使用分号
  "singleQuote": true, //使用单引号
  "bracketSpacing": true, //在对象前后添加空格-eg: { foo: bar }
  "arrowParens": "avoid" //单参数箭头函数参数周围使用圆括号-eg: (x) => x
}
```
[Prettier配置参考](https://prettier.io/docs/en/options.html)


## 6、Git 提交约束 (可选)

>引入 Husky 作为 Git commit 提交前做一个自动格式化暂存区内的文件，以及校验是否符合 Eslint 规则，引入 commitlint 工具，用于校验提交的 message 格式是否符合规范

```shell
yarn add husky@3.1.0 -D
yarn add lint-staged -D
yarn add @commitlint/cli -D
yarn add @commitlint/config-conventional -D
```

```json lines
{
  // other
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "commitlint": {
    "extends": [
      "@commitlint/config-conventional"
    ]
  },
  "lint-staged": {
    "*.{ts,js}": [
      "node --max_old_space_size=8192 ./node_modules/.bin/prettier -w",
      "node --max_old_space_size=8192 ./node_modules/.bin/eslint --fix --color",
      "git add"
    ]
  },
}
```
>git commit 时，会首先调用 lint-staged 字段中命令，首先是 prettier 格式化，然后是 ESlint 校验并修复，然后将修改后的文件存入暂存区。 然后是校验 commit message 是否符合规范，符合规范后才会成功 commit。

## 7、publish 约束

```json lines
{
  "scripts": {
    "prepublishOnly": "yarn version && yarn build"
  },
}
```


## 8、提交代码

```shell
git add -A
git commit -m "feat: init"
git remote add origin "https://xxxx.com/xx/xx.git"
git push -u origin master
```