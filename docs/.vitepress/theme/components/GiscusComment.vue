<script lang="ts" setup>
import { useData } from 'vitepress'


const { title, isDark } = useData()
</script>

<template>
  <div class="giscus-comment">
    <component
      is="script"
      :key="title"
      :data-theme="isDark ? 'dark_dimmed' : 'light'"
      async
      crossorigin="anonymous"
      data-category="Announcements"
      data-category-id="DIC_kwDOIahnTc4CWuOU"
      data-emit-metadata="1"
      data-input-position="top"
      data-lang="zh-CN"
      data-loading="lazy"
      data-mapping="title"
      data-reactions-enabled="1"
      data-repo="peiyanlu/vite-press"
      data-repo-id="R_kgDOIahnTQ"
      data-strict="1"
      src="https://giscus.app/client.js"
    >
    </component>
  </div>
</template>
