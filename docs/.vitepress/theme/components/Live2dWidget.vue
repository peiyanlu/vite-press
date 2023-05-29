<script lang="ts" setup>
import Live2dWidget from 'live2d-lib'
import { useData, useRoute, withBase } from 'vitepress'
import { ref, watchEffect } from 'vue'


const isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

const { isDark, site } = useData()
const { path } = useRoute()

const elRef = ref<HTMLDivElement | null>(null)
watchEffect(() => {
  if (elRef.value && !isMobile() && !path.endsWith(site.value.base)) {
    Live2dWidget.init({
      canvas: {
        width: 180,
        height: 180,
      },
      target: elRef.value,
      source: {
        path: withBase('/live2d/models'),
        models: isDark.value ? [ 'hijiki' ] : [ 'tororo' ],
      },
      cubismCorePath: withBase('/live2d/core/live2dCubismCore.min.js'),
    })
  }
})
</script>

<template>
  <div id="models" ref="elRef" />
</template>

<style lang="scss" scoped>
#models {
  position: fixed;
  z-index: var(--vp-z-index-footer);
  right: 0;
  bottom: 0;
}
</style>
