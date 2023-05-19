<script lang="ts" setup>
import { DocData } from '@theme/docs.data'
import { useDateFormat, useTimeAgo } from '@vueuse/core'
import { defineProps } from 'vue'
import DocTag from './DocTag.vue'

const props = defineProps<{
  doc: DocData
}>()

const getTimeAgo = (date: number) => {
  return useTimeAgo(date).value
}
const getDate = (date: number) => {
  return useDateFormat(date, 'YYYY/MM/DD HH:mm:ss').value
}

// 生成一个随机的RGBA颜色值
function getRandomColorRGBA() {
  const color = Math.floor(Math.random() * 0x1000000) // 生成一个随机的颜色数值
  const rgbaColor = '#' + ('000000' + color.toString(16)).slice(-6) // 将颜色数值转换为十六进制字符串

  const alpha = Math.random() // 生成0-1之间的随机透明度值

  return rgbaColor + Math.floor(alpha * 255).toString(16) // 将透明度转换为十六进制字符串并拼接到颜色值后面
}

// 生成一个带透明度的随机浅色系颜色值
function getRandomLightColorWithOpacity() {
  const r = () => Math.floor(Math.random() * 156) + 100
  return `rgba(${ r() }, ${ r() }, ${ r() }, ${ Math.random() * 0.75 + 0.25 })`
}

</script>

<template>
  <div class="doc-metadata">
    <div class="item">
      <svg-icon name="create" />
      <div
        :title="getDate(doc.createdDate)"
        v-html="getDate(doc.createdDate)"
      />
    </div>
    <div class="item">
      <svg-icon name="update" />
      <div
        :title="getDate(doc.updatedDate)"
        v-html="getTimeAgo(doc.updatedDate)"
      />
    </div>
    <div class="item" v-if="doc.tags?.length">
      <svg-icon name="tags" />
      <div class="tag-list">
        <doc-tag
          v-for="tag of doc.tags"
          :text="tag"
          :key="tag"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.doc-metadata {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  font-size: 12px;
  line-height: 1;
  margin-top: 12px;
  overflow: hidden;

  .item {
    flex-shrink: 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;

    :deep(.svg-icon) {
      width: 16px;
      height: 16px;
    }

    .tag-list {
      flex: 1;
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      align-items: center;
      gap: 6px;
    }

    &:last-child {
      width: 0;
      flex: 1;
    }
  }
}
</style>
