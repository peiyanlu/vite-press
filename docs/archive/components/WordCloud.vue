<template>
  <div ref="wordCloudRef" class="word-cloud" />
</template>

<script lang="ts" setup>
import type { DocData } from '@theme/docs.data'
import useWordCloud from '@theme/hooks/useWordCloud'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { tags } from './archive'

const emit = defineEmits<{
  getSelected: [ tag: string | number, data: DocData[] ]
}>()

const initWordCloud = (tags: Record<string, DocData[]>) => Object.keys(tags).map(key => {
  return {
    name: key,
    value: tags[key].length,
  } as Record<string, string | number>
})

const wordCloudRef = ref<HTMLDivElement | null>(null)

onMounted(() => {
  const { destroy } = useWordCloud(
    wordCloudRef.value,
    initWordCloud(tags),
    (data) => {
      emit('getSelected', data.name, tags[data.name])
    },
  )
  onBeforeUnmount(() => destroy())
})
</script>

<style lang="scss">
.word-cloud {
  canvas {
    cursor: inherit !important;
  }

  .g2-tooltip-value {
    margin-left: 6px !important;
  }
}

html.dark {
  .word-cloud {
    .g2-tooltip {
      color: rgb(166, 166, 166) !important;
      background-color: rgb(31, 31, 31) !important;
      box-shadow: rgba(0, 0, 0, 0.5) 0 2px 4px !important;
    }
  }
}
</style>
