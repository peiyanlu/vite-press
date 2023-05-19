---
title: NPM包版本号规范
tags:
  - NPM
  - SemVer
---

# NPM 包版本号规范

> SemVer：Semantic Versioning Specification, 语义化版本命名规范

## SemVer 是什么

`SemVer` 通常有两层含义：

* 语义化版本号标准：`Github` 起草的版本号规范，定义了一套语义化版本号应遵循的标准和规则。

* `Node` 的实现：`Node` 中对语义化版本号的具体实现。`npm` 包版本号就遵循了 `SemVer` 标准。

## SemVer 标准

### 标准版本号

标准版本号为三个部分组成，中间使用点 `.` 分隔。如当前 npm 的版本号为：1.3.2。三个部分含义为：

|       | 含义   | 描述                  | 示例 |
|-------|------|---------------------|----|
| Major | 主版本号 | 通常为重构或做了向下不兼容的API修改 | 1  |
| Minor | 次版本号 | 增加新功能，兼容之前的版本       | 3  |
| Patch | 修订号  | 向下兼容的问题修订           | 2  |

### 先行版本号

在标准版本号后面通过短中划线 `-` 加上 `alpha`、`beta`、`rc` 等词语，这种版本称为**先行版本**
> 最终发布版本（release）之前的版本，都可以理解为先行版本。

* **alpha**：内测版本。可能 bug 较多，需要继续修改
* **beta**：公测版本。相对 alpha 有很大的改进，没有严重错误，但是还存在着一些缺陷，需要经过多次测试来进一步消除
* **rc**：即 Release candidate，以前称为 gama，正式版本的候选版本。比较稳定，不会再加入新的功能

如果有多个先行版本，可以在后面加上 `.` 和 `数字`，如：1.0.0-alpha.1、1.0.0-alpha.2、1.1.1-rc.6 等。

## package 版本号

项目中使用到的依赖的版本号和当前项目的版本号

### 依赖的版本号

在依赖的包的版本号前面有一些符号，如：`^`、`~`、`*` 等。

* `^`：最左侧第一个非0的数字不变（Major 非0，可理解为 Major 固定），次版本号 Minor 和修订号 Patch 不小于该版本号
* `~`：主版本号 Major 和次版本号 Minor 固定，修订号 Patch 不小于该版本号
* `*`：始终最新版本
* `x.x.x`：x 能够代替 Major、Minor、Patch 中的任何一个位置。表示对应的位置可以更新

### 版本号升级

* 升级主版本号 Major

```shell
pnpm version major

# 1.0.0 -> 2.0.0
```

* 升级次版本号 Minor

```shell
pnpm version minor

# 1.0.0 -> 1.1.0
```

* 升级修订号 Patch

```shell
pnpm version patch

# 1.0.0 -> 1.0.1
```

## 版本号工具

```shell
pnpm add semver

#比较版本号
console.log(semver.lt('1.0.0', '1.1.0'))
console.log(semver.eq('1.0.0', '1.1.0'))
console.log(semver.gt('1.0.0', '1.1.0'))

#提取版本号
console.log(semver.major('1.2.3'))
console.log(semver.minor('1.2.3'))
console.log(semver.patch('1.2.3'))

#验证版本号
console.log(semver.clean('v1.0.0'))
console.log(semver.valid('v1.0.0'))
console.log(semver.valid('v1.0.a'))
```
