---
title: 打补丁
description: 修改依赖包之后对其打补丁
category: npm
tags:
  - NPM
  - patch
---

# 依赖包重新打包

## 设置package.json

```json
{
  "scripts": {
    "postinstall": "patch-package"
  }
}
```

```markdown
yarn install 时将会自动为依赖包打补丁

// yarn install --registry=http://nexus.simulate.com:8081/repository/npm-group/
```

## 1、安装依赖

```markdown
yarn add patch-package postinstall-postinstall

Notes：
yarn环境安装postinstall-postinstall是为了使用yarn remove后也可以重新执行postinstall hook
```

## 2、修改依赖包

```javascript
// javascript code
```

## 3、创建补丁

```markdown
// 为依赖包创建补丁
yarn patch-package packageName

// 为依赖包的依赖包创建补丁(通过 / 分割)
yarn patch-package packageName/packageName

eg: node_modules/package/node_modules/another-package
a、yarn patch-package package/another-package
b、yarn patch-package @my/package/@my/other-package  // scoped packages

Options:
--create-issue
对于源在 GitHub 上托管的包，此选项会根据您的差异在 Web 浏览器打开带有该问题的issue

--use-yarn
patch-package 默认是根据项目中的 lockfile 来决定使用 npm 还是 yarn，如果两种都有，则使用 npm，可以通过这个参数启用 yarn

--exclude <regexp>
创建补丁文件时，忽略与正则表达式匹配的路径，路径相对于要修改的依赖包的根目录，默认: package\\.json$

--include <regexp>
与 --exclude <regexp> 相反，创建补丁文件时仅考虑与正则表达式匹配的路径，默认: .*

--case-sensitive-path-filtering
使 --include 或 --exclude 中使用的正则表达式区分大小写

--patch-dir
指定放置补丁文件的目录
```

## 4、应用补丁

```markdown
yarn patch-package 不带参数应用所有补丁

Options：
--error-on-fail
失败后强制 patch-package 以代码 1 退出

--reverse
取消应用所有补丁。如果打补丁后，补丁文件被修改过，此操作将失败，此时可以重新安装 node_modules

--patch-dir
指定放置补丁文件的目录
```

## Dev-only

```markdown
打包 devDependencies 中的依赖

package-name+0.44.0.patch

to

package-name+0.44.0.dev.patch
```


