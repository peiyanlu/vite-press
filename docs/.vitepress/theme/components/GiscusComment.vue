<script lang="ts" setup>
import { useData } from 'vitepress'
import { computed } from 'vue';


const { title, isDark, site } = useData()

const baseUrl = location.origin + site.value.base
const theme = computed(() => `${ baseUrl }${ isDark.value ? 'giscus/theme_dark.css' : 'giscus/theme_light.css' }`)
</script>

<template>
  <div class="giscus-comment">
    <component
      is="script"
      :key="title+Date.now()"
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
.giscus-comment {
  padding-top: 32px;
}
</style>
