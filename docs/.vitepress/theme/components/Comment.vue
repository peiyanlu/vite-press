<script lang="ts" setup>
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'
import { onMounted, ref, watchEffect } from 'vue'
import { useData } from 'vitepress'
import md5 from 'md5'

const commentRef = ref<HTMLHtmlElement | null>(null)

const { page } = useData()

watchEffect(() => {
  if (!commentRef.value) return
  const gitalk = new Gitalk({
    clientID: 'd043e806d74ff3ecfa64',
    clientSecret: '66f2fa78f067e27de59b28156a4be87c79e1eb94',
    repo: 'vite-press',
    owner: 'peiyanlu',
    admin: [ 'peiyanlu' ],
    id: md5(page.value.relativePath),
    language: 'zh-CN',
    distractionFreeMode: false
  })

  gitalk.render(commentRef.value)
})
</script>

<template>
  <div id="" ref="commentRef" />
</template>

<style lang="less" scoped>

</style>
