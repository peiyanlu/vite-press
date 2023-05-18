<template>
  <div ref="wordCloudRef" />

  <div v-for="item of selectedTag">
    {{ item.title }}
  </div>
</template>

<script lang="ts" setup>
import { data, DocData } from '@theme/docs.data'
import useWordCloud from '@theme/hooks/useWordCloud'
import { computed, ref, watchEffect } from 'vue'

// 定义属性
// const props = defineProps({
//   dataList: {
//     type: Array,
//     default: () => [],
//   },
// })

const selectedTag = ref<DocData[]>([])

/**
 * 初始化词云数据
 * [{"name": xx, "value": xx}]
 */
const initWordCloud = (tags: Record<string, DocData[]>) => Object.keys(tags).map(key => {
  return {
    name: key,
    value: tags[key].length,
  } as Record<string, string | number>
})

/**
 * 初始化标签数据
 * {tagTitle1: [article1, article2, ...}
 */
const initTags = (docs: DocData[]) => docs
  .filter(k => k.tags?.length)
  .reduce<Record<string, DocData[]>>((tagsRecords, item) => {
    item.tags?.forEach(tag => {
      (tagsRecords[tag] ??= []).push(item)

      tagsRecords[tag].sort((a, b) => b.createdDate - a.createdDate)
    })
    return tagsRecords
  }, {})

const tags = computed(() => initTags(data))
const dataList = computed(() => initWordCloud(tags.value))

const wordCloudRef = ref<HTMLDivElement | null>(null)
watchEffect(() => {
  if (wordCloudRef.value) {
    useWordCloud(wordCloudRef.value, dataList.value, (data) => {
      selectedTag.value = tags.value[data.name]
    })
  }
})
</script>

<style lang="scss">
.g2-tooltip-value {
  margin-left: 6px !important;
}
</style>
