<template>
  <div id="wordcloud-container" ref="wordCloudRef"></div>
</template>

<script lang="ts" setup>
import { onMounted, onBeforeUnmount, watchEffect, ref, computed } from 'vue'
import { WordCloud, WordCloudOptions } from '@antv/g2plot'
import { data, DocData } from '@theme/docs.data'

const wordCloudRef = ref<HTMLDivElement | null>(null)

// 定义属性
// const props = defineProps({
//   dataList: {
//     type: Array,
//     default: () => [],
//   },
// })

const tags = computed(() => initTags(data))
console.log(tags.value)
const dataList = computed(() => initWordCloud(tags))

/**
 * 初始化词云数据
 * [{"name": xx, "value": xx}]
 */
function initWordCloud(tags) {
  const dataList = []
  for (let tag in tags.value) {
    dataList.push({ 'name': tag, 'value': tags.value[tag]?.length })
  }
  return dataList
}

/**
 * 初始化标签数据
 * {tagTitle1: [article1, article2, ...}
 */
function initTags(articleData: DocData[]) {
  console.log(articleData)
  const tags: any = {}
  for (let i = 0; i < articleData.length; i++) {
    const article = articleData[i]
    const articleTags = article.tags
    if (Array.isArray(articleTags)) {
      articleTags.forEach((articleTag) => {
        if (!tags[articleTag]) {
          tags[articleTag] = []
        }
        tags[articleTag].push(article)
        // 文章按发布时间降序排序
        // tags[articleTag].sort((a, b) => b.date.localeCompare(a.date))
      })
    }
  }
  return tags
}

// 渲染 WordCloud
let wordCloud: WordCloud
console.log(dataList.value)
watchEffect(() => {
  if (wordCloudRef.value) {
    wordCloud = new WordCloud(wordCloudRef.value, {
      data: dataList.value as any,
      wordField: 'name',
      weightField: 'value',
      colorField: 'name',
      wordStyle: {
        fontFamily: 'Verdana',
        fontSize: [ 14, 35 ],
        rotation: 0,
      },
      // 返回值设置成一个 [0, 1) 区间内的值，
      // 可以让每次渲染的位置相同（前提是每次的宽高一致）。
      random: () => Math.random(),
    } as WordCloudOptions)

    wordCloud.render()
  }
})

onBeforeUnmount(() => {
  wordCloud.destroy()
})
</script>
