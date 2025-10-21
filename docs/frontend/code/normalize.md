---
title: node 路径归一化
description: 
tags:
  - code
  - normalize
---


# {{ $frontmatter.title }}


```ts
import { posix } from 'path'


export const isPlatform = (platform: NodeJS.Platform) => {
  return process && platform === process.platform
}


export const isWin = isPlatform('win32')


export const normalizePath = (id: string): string => {
  const windowsSlashRE = /\\/g
  const slash = (p: string): string => p.replace(windowsSlashRE, '/')
  return posix.normalize(isWin ? slash(id) : id)
}

```
