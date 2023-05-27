<script lang="ts" setup>
import { DocData } from '@theme/docs.data'
import { breakpointsTailwind, useBreakpoints, useDateFormat, useTimeAgo } from '@vueuse/core'
import { tags } from './archive'
import DocTag from './DocTag.vue'


const breakpoints = useBreakpoints(breakpointsTailwind)
const smAndSmaller = breakpoints.smaller('sm')


const props = defineProps<{
  doc: DocData
}>()
const emit = defineEmits<{
  getSelected: [ tag: string | number, data: DocData[] ]
}>()

const getTimeAgo = (date: number) => {
  return useTimeAgo(date).value
}
const getDate = (date: number) => {
  return useDateFormat(date, smAndSmaller.value ? 'MM/DD HH:mm' : 'YYYY/MM/DD HH:mm:ss').value
}

const handleClick = (tag: string) => {
  emit('getSelected', tag, tags[tag])
}
</script>

<template>
  <div class="doc-metadata">
    <div class="group">
      <div :title="`创建于：${getTimeAgo(doc.createdDate)}`" class="item">
        <svg-icon name="create" />
        <div v-html="getDate(doc.createdDate)" />
      </div>
      <div :title="`更新于：${getDate(doc.updatedDate)}`" class="item">
        <svg-icon name="update" />
        <div v-html="getTimeAgo(doc.updatedDate)" />
      </div>
    </div>
    <div v-if="doc.tags?.length" class="item">
      <svg-icon name="tags" />
      <div class="tag-list">
        <doc-tag
          v-for="tag of doc.tags"
          :key="tag"
          :text="tag"
          @click="handleClick(tag)"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.doc-metadata {
  font-size: 12px;
  line-height: 1;
  display: flex;
  overflow: hidden;
  align-items: flex-start;
  flex-flow: column nowrap;
  justify-content: flex-start;
  gap: 8px;
  
  .group {
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    flex-shrink: 0;
    justify-content: flex-start;
    gap: 20px;
  }
  
  .item {
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    flex-shrink: 0;
    justify-content: flex-start;
    gap: 8px;
    
    :deep(.svg-icon) {
      flex-shrink: 0;
      width: 16px;
      height: 16px;
    }
    
    .tag-list {
      display: flex;
      align-items: center;
      flex: 1;
      flex-flow: row wrap;
      justify-content: flex-start;
      gap: 6px;
      
      .doc-tag {
        cursor: pointer;
      }
    }
  }
}
</style>
