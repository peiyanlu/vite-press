<script lang="ts" setup>
import Live2dWidget from 'live2d-lib'
import { computed, ref, watchEffect } from 'vue'
import { withBase } from 'vitepress'

const props = defineProps<{
  isDark: boolean
}>()

const com = computed(() => props.isDark)
const elRef = ref<HTMLDivElement | null>(null)

watchEffect(() => {
  if (elRef.value) {
    Live2dWidget.init({
      target: elRef.value,
      source: {
        path: withBase('/live2d/models'),
        models: com.value ? [ 'hijiki' ] : [ 'tororo' ],
      },
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
  right: 0;
  bottom: 0;
  z-index: 999;
}
</style>
