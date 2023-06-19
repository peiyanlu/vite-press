---
title: 问题记录
description: npm遇到的各种牛鬼蛇神
category: npm
tags:
  - npm
  - FAQ
order: 99
---


# {{ $frontmatter.title }}

## Unable to authenticate, need: BASIC

**问题**：登录公司私有仓库时，发现正确输入账号密码依然报错：`Unable to authenticate, need: BASIC realm="Sonatype Nexus Repository Manager"`

**解决**：打开 `npm` 配置文件（`C:\Users\username\.npmrc`），找到类似下面的内容，删掉 `auth` 相关内容，然后再次登录账号和密码

```txt
registry=https://registry.npmjs.org/
scripts-prepend-node-path=true
//nexus.simulate.com/repository/npm-hosted/:_authToken=NpmToken.af7603db-9aee-3d5c-8016-d4c835b43542  // [!code --]
```

