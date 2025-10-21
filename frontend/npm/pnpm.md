---
url: /vite-press/frontend/npm/pnpm.md
---

# {{ $frontmatter.title }}

### 安装最新版本

> Using Windows PowerShell:

```shell
iwr https://get.pnpm.io/install.ps1 -useb | iex
```

### 安装指定版本

```shell
$env:PNPM_VERSION = "7.32.2"; iwr https://get.pnpm.io/install.ps1 -useb | iex
```

```shell
$env:PNPM_VERSION = "9.15.5"; Invoke-WebRequest https://get.pnpm.io/install.ps1 -UseBasicParsing | Invoke-Expression
```
