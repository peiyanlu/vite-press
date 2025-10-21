---
title: 奇淫巧技
description: 一看就会，一写就废
tags:
  - css
  - mask
---


# {{ $frontmatter.title }}


<script setup>
import BorderBox from './components/BorderBox.vue';
</script>

## 四个角边框

<BorderBox />

```css
/* 方法一 */
div {
  --w: 3px;
  --h: 12px;
  --c1: transparent;
  --c2: #06CEAE;
  
  width: 120px;
  height: 120px;
  background: linear-gradient(to top, var(--c1), var(--c2)) left top no-repeat,
  linear-gradient(to left, var(--c1), var(--c2)) left top no-repeat,
  linear-gradient(to top, var(--c1), var(--c2)) right top no-repeat,
  linear-gradient(to right, var(--c1), var(--c2)) right top no-repeat,
  linear-gradient(to bottom, var(--c1), var(--c2)) left bottom no-repeat,
  linear-gradient(to left, var(--c1), var(--c2)) left bottom no-repeat,
  linear-gradient(to bottom, var(--c1), var(--c2)) right bottom no-repeat,
  linear-gradient(to right, var(--c1), var(--c2)) right bottom no-repeat;
  background-size: var(--w) var(--h), var(--h) var(--w), var(--w) var(--h), var(--h) var(--w);
}

/* 方法二 */
div {
  --l: 12px; 
  --t: 3px;
  --g: 15px;
  --s: 90px;
  --x: 0px;
  --y: 0px;
  width: calc(var(--s) + var(--g) * 2);
  height: calc(var(--s) + var(--g) * 2);
  border: var(--t) solid #06CEAE;
  
  position: absolute;
  left: calc(var(--x) - var(--g));
  top: calc(var(--y) - var(--g));
  
  transition: 0.2s;
  
  mask: conic-gradient(
    at var(--l) var(--l),
    transparent 75%,
    #06CEAE 75% 100%
  ) 0 0 / calc(100% - var(--l)) calc(100% - var(--l)) repeat;
}
```
