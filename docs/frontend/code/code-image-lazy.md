---
title: 图片懒加载
tags:
  - 懒加载
---

# 图片懒加载

```vue
<img
  ref="imgRef"
  :data-src="icon"
  :src="def"
  alt=""
/>
```

```ts
import { ref, watchEffect } from 'vue'

const icon = 'http://localhost:5173/vite-press/logo.svg'
const def = '/default.img'

const imgRef = ref<HTMLImageElement | null>(null)
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const lazyImg = entry.target as HTMLImageElement
      const src = lazyImg.dataset.src
      if (src) {
        lazyImg.src = src
        lazyImg.removeAttribute('data-src')
      }
      observer.unobserve(lazyImg)
    }
  })
})
watchEffect(() => {
  if (imgRef.value) {
    observer.observe(imgRef.value)
  }
})
```
