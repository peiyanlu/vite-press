<script lang="ts" setup>
import Live2dWidget from 'live2d-lib'
import { withBase } from 'vitepress'
import { computed, ref, watchEffect } from 'vue'


const props = defineProps<{
  isDark: boolean
}>()

const dark = computed(() => localStorage.getItem('vitepress-theme-appearance') === 'dark' || props.isDark)

const elRef = ref<HTMLDivElement | null>(null)
watchEffect(() => {
  if (elRef.value) {
    Live2dWidget.init({
      canvas: {
        width: 180,
        height: 180,
      },
      target: elRef.value,
      source: {
        path: withBase('/live2d/models'),
        models: dark.value ? [ 'hijiki' ] : [ 'tororo' ],
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
