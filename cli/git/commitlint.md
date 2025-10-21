---
url: /vite-press/cli/git/commitlint.md
description: git 提交约束
---

# {{ $frontmatter.title }}

* `husky`：触发 `Git Hooks`，执行脚本

* `lint-staged`：检测文件，只对暂存区中有改动的文件进行检测，可以在提交前进行 `Lint` 操作

* `commitizen`：使用规范化的 `message` 提交

* `commitlint`：检查 `message` 是否符合规范

* `cz-conventional-changelog`：适配器。提供 `conventional-changelog` 标准（约定式提交标准）。基于不同需要也可以使用不同适配器（比如：`cz-customizable`）

## commit 定制化

通过 `commitzen` 插件，可以帮助我们来实现 `git commit` 得统一性，只不过它是一个比较基础的插件，社区还有更多功能增强的插件。例如：

* `cz-customizable`：可以自定义 `git commit`，通过配置文件引导用户进行 `commit` 操作。

* `commitizen-emoji`：带有 `emoji` 表情的 `git Commit`，但是不能自定义配置，只能使用固定的格式。

为了定制化，我们使用 `cz-customizable` 来配置属于我们自己项目的 `commit` 规范。

```shell
pnpm add -D cz-customizable
```

新建 `.cz-config.js`，使用 `module` 模式则创建 `.cz-config.cjs`

```js .cz-config.js
module.exports = {
  // 引导用户输入的提示信息
  types: [
    { value: ":rocket: initial", name: "🎉 initial: 初始化项目" },
    { value: ":construction: wip", name: "🚧 wip: 工作进行中" },
    { value: ":sparkles: feat", name: "✨  feat: 新增一个功能" },
    { value: ":bug: fix", name: "🐛 fix: 修复一个Bug" },
    {
      value: ":hammer: refactor",
      name: "🔨 refactor: 重构（既不修复bug也不添加特性的代码更改）",
    },
    { value: ":pencil: docs", name: "📝 docs: 文档变更" },
    {
      value: ":white_check_mark: test",
      name: "✅  test: 添加缺失的测试或更正现有的测试",
    },
    {
      value: ":thought_balloon: chore",
      name: "💭 chore: 构建过程或辅助工具的变动",
    },
    { value: ":rewind: revert", name: "⏪  revert: 代码回退" },
    { value: ":zap: perf", name: "⚡️ perf: 提升性能" },
    { value: ":lipstick: ui", name: "💄 ui: 更新UI和样式" },
    { value: ":art: style", name: "🎨 style: 改进代码结构/代码格式" },
    { value: ":truck: mv", name: "🚚 mv: 移动重命名文件" },
    { value: ":fire: delete", name: "🔥 delete: 删除文件" },
    { value: ":arrow_up: up", name: "⬆️ up: 升级依赖" },
    { value: ":arrow_down: down", name: "⬇️ down: 降级依赖" },
    { value: ":whale: docker", name: "🐳 docker: docker相关" },
    { value: ":bookmark: tag", name: "🔖 tag: 发行/版本标签" },
    { value: ":ambulance: patch", name: "🚑 patch: 重要补丁" },
  ],
  // 选择scope的提示信息
  messages: {
    type: "请选择提交类型:",
    scope: "请输入修改范围(可选):",
    // allowCustomScopes为true时使用
    customScope: "请输入文件修改范围(可选):",
    subject: "请简要描述提交(必选):",
    body: "请输入详细描述，使用'|'换行(可选):",
    breaking: "列出任何突破性的变化(可选):",
    footer: "请输入要关闭的issue(可选)。例:#31,#34:",
    confirmCommit: "确定要继续执行上面的提交吗?",
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

配置 `package.json`

```json lines
{
  "script": {
    "commit": "cz-customizable"
  },
  "config": {
    "commitizen": {
      "path": "cz-customizable"
    }
  }
}
```

:::warning

* 使用 `git cz` 需要安装 `commitizen`

* 如果使用 `cjs` 需要手动指定配置文件，否则识别不到

```json lines
{
  "config": {
    "commitizen": {
      "path": "cz-customizable"
    },
    // [!code ++:4]
    "cz-customizable": {
      "config": ".cz-config.cjs"
    }
  }
}
```

:::

使用方法

```shell
git add .
pnpm commit
```

## 拦截 git commit

我们已经约束好啦 `Commit` 规范，但是开发者还是开始可以通过 `git commit` 命令提交约束之外的消息。这也使得我们的规范失去了意义。
因此需要在开发者 `commit` 的时候对其提交消息做一次拦截验证，只有符合规范的才能被正确的提交到`Git` 仓库，从而 `push` 到远端。
而 `husky` 则是专门做这种操作的，它支持所有的 `Git` 钩子，在触发钩子之前做一些额外的事情，例如 `commit` 校验、运行测试等等。

因为我们定制的 `commit` 是以 `emoji` 开头的，而 `commitlint` 中并没有提供匹配 `emoji` 开头的校验包，因此需要接入 `commitlint-config-gitmoji` 来完成 `commit` 检验。

* `commitlint`：检查你的提交消息是否符合常规的提交格式。

* `husky`：当你提交或推送时，使用它来整理你的提交信息、运行测试、`lint` 代码等。

* `commitlint-config-gitmoji`：当你的提交信息是以 `emoji` 开头的，通过它来校验。默认 `@commitlint/config-conventional`

```shell
pnpm add -D @commitlint/cli commitlint-config-gitmoji

pnpm dlx husky-init 

pnpm install
```

执行成功后，会在项目根目录下生成 `.husky` 的一个文件夹，里面包含 `pre-commit` 脚本，表示在 `commit` 之前，需要做的一些事情。(例如：运行 `pnpm run test`，如果失败，终止提交。)

***

添加 `commilint` 的 `husky` 钩子。

```shell
pnpm dlx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```

配置 `commitlint.config.js`

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

## lint-staged

```shell
pnpm add lint-staged -D
```

配置方式：

* `package.json` 中的 `lint-staged` 配置项

* `JSON` 风格或 `YML` 风格的 `.lintstagedrc`

```json
{
  "lint-staged": {
    "*.{js,jsx,less,md,json}": [
      "prettier --write"
    ],
    "*.ts?(x)": [
      "prettier --parser=typescript --write",
      "eslint --quiet"
    ]
  }
}
```

虽然配置好了 `lint-staged`，但目前还不能自动地使用它，因为通常它是放在 `Git` 的 `pre-commit` 阶段去执行，因此要在 `.husky/pre-commit` 文件中增加执行 `lint-staged` 的命令

```shell
# 如果使用的是 npm/yarn 且 npm 版本为 v8 及以下，就加下面的命令
npx lint-staged

# 如果使用的是 npm/yarn 且 npm 版本为 v9 及以上，就加下面的命令
npm exec lint-staged

# 如果使用的是 pnpm，就加下面的命令
pnpm exec lint-staged

# ! 注意，上面的这三个命令必须根据实际情况来选择，且只能存在一个
```

## 集成

`husky` 和 `lint-staged` 的官方都推荐了使用 `mrm` 这个库来同时集成 `husky` 和 `lint-staged`。

在项目根目录下，直接执行如下命令：

```shell
pnpx mrm lint-staged
```

执行命令之后，就会看到 `package.json` 里多了一个 `lint-staged` 配置项，且根目录下多了一个 `.husky` 目录，里面就包含了 `pre-commit` 文件，里面包含了一个最基础的命令：`npx lint-staged`。

在后续的开发工作中，任何需要在 `pre-commit` 阶段执行的命令，都可以添加到 `.husky/pre-commit` 文件中
