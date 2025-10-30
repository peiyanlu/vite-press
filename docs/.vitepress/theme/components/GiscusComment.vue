<script lang="ts" setup>
import { inBrowser, useData } from 'vitepress'
import { computed, onMounted, ref, watchEffect } from 'vue'


const { title, isDark, site } = useData()

const theme = computed(() => `https://peiyanlu.github.io${ site.value.base }giscus/noborder_${ isDark.value ? 'dark' : 'light' }.css`)

</script>

<template>
  <div id="giscus">
    <component
      is="script"
      :key="title+isDark"
      :data-theme="theme"
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
    />
  </div>
</template>

<style lang="scss" scoped>

</style>
