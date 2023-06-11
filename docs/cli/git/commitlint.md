---
title: CommitLint
description: git 提交约束
category: git
tags:
  - git
  - commit
order: 0
ignore: false
---


# {{ $frontmatter.title }}


## Commit 定制化


通过 commitzen 插件，可以帮助我们来实现 Git commit 得统一性，只不过它是一个比较基础的插件，社区还有更多功能增强的插件。例如：

cz-customizable：可以自定义 Git commit，通过配置文件引导用户进行 commit 操作。
commitizen-emoji：带有 emoji 表情的 Git Commit，但是不能自定义配置，只能使用固定的格式。

为了定制化，我们使用 cz-customizable 来配置属于我们自己项目的 Commit 规范。

```shell
pnpm add -D cz-customizable
```

如果你是 TypeScript 项目，使用 module 模式，创建.cz-config.cjs

```js .cz-config.js
module.exports = {
  // 引导用户输入的提示信息
  types: [
    { value: ":rocket: initial", name: "🎉 initial:   初始化项目" },
    { value: ":construction: wip", name: "🚧 wip:       工作进行中" },
    { value: ":sparkles: feat", name: "✨  feat:      新增一个功能" },
    { value: ":bug: fix", name: "🐛 fix:       修复一个Bug" },
    {
      value: ":hammer: refactor",
      name: "🔨 refactor:  重构（既不修复bug也不添加特性的代码更改）",
    },
    { value: ":pencil: docs", name: "📝 docs:      文档变更" },
    {
      value: ":white_check_mark: test",
      name: "✅  test:      添加缺失的测试或更正现有的测试",
    },
    {
      value: ":thought_balloon: chore",
      name: "🗯 chore:     构建过程或辅助工具的变动",
    },
    { value: "revert", name: "⏪  revert:    代码回退" },
    { value: ":zap: perf", name: "⚡️ perf:      提升性能" },
    { value: ":lipstick: ui", name: "💄 ui:        更新UI和样式" },
    { value: ":art: style", name: "🎨 style:     改进代码结构/代码格式" },
    { value: ":truck: mv", name: "🚚 mv:        移动重命名文件" },
    { value: ":fire: delte", name: "🔥 delte:     删除文件" },
    { value: ":fire: up", name: "⬆️ up:        升级依赖" },
    { value: ":fire: down", name: "⬇️ down:      降级依赖" },
    { value: ":whale: docker", name: "🐳 ocker:    docker相关" },
    { value: ":bookmark: tag", name: "🔖 tag:       发行/版本标签" },
    { value: ":ambulance: patch", name: "🚑 patch:     重要补丁" },
  ],
  // 选择scope的提示信息
  messages: {
    type: "请选择您要提交的类型:",
    scope: "请输入修改范围(可选):",
    // allowCustomScopes为true时使用
    customScope: "请输入文件修改范围(可选):",
    subject: "请简要描述提交(必选):",
    body: "请输入详细描述，使用'|'换行(可选):",
    breaking: "列出任何突破性的变化(可选)",
    footer: "请输入要关闭的issue(可选)。例:#31，#34:",
    confirmCommit: "您确定要继续执行上面的提交吗?",
  },
  scopes: [
    "user",
    "login",
    "home",
    "order",
    "product",
    "cart",
    "address",
    "pay",
    "coupon",
    "search",
    "category",
    "detail",
    "other",
  ],
  // 跳过某些问题
  skipQuestions: [],
  allowCustomScopes: true,
  allowBreakingChanges: [ "feat", "fix" ],
  subjectLimit: 100,
};
```

```json
{
  "script": {
    "commit": "cz-customizable"
  },
  "config": {
    "cz-commitizen": {
      "path": "cz-customizable"
    }
  }
}
```

```shell
git add ./src/login
pnpm commit
```

## 拦截不符合规范的 Commit

- commitlint：检查你的提交消息是否符合常规的提交格式。

- husky：当你提交或推送时，使用它来整理你的提交信息、运行测试、lint 代码等。

- commitlint-config-gitmoji：当你的提交信息是以 emoji 开头的，通过高它来校验。

## 安装

```shell
pnpm add -D @commitlint/cli commitlint-config-gitmoji

pnpm dlx husky-init && pnpm install
```

执行成功后，会在项目更目录下生成.husky的一个文件夹，里面包含一些可执行脚本。

例如pre-commit，表示在 commit 之前，需要做的一些事情。(例如：运行pnpm run test，如果失败，终止提交。)

添加 commilint 的 husky 钩子。

```shell
pnpm dlx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```

```js
module.exports = {
  extends: [ "gitmoji" ],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "initial",
        "build",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
        "chore",
        "wip",
        "mv",
        "delete",
        "ui",
        "up",
        "down",
        "docker",
      ],
    ],
  },
};
```
