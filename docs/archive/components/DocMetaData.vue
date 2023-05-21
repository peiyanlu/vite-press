<script lang="ts" setup>
import { DocData } from '@theme/docs.data'
import { useDateFormat, useTimeAgo } from '@vueuse/core'
import { defineProps } from 'vue'
import { tags } from './archive'
import DocTag from './DocTag.vue'
import {breakpointsTailwind, useBreakpoints} from '@vueuse/core'

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
      <div class="item">
        <svg-icon name="create"/>
        <div
          :title="getTimeAgo(doc.createdDate)"
          v-html="getDate(doc.createdDate)"
        />
      </div>
      <div class="item">
        <svg-icon name="update" title="gengxin"/>
        <div
          :title="getTimeAgo(doc.updatedDate)"
          v-html="getDate(doc.updatedDate)"
        />
      </div>
    </div>
    <div class="item" v-if="doc.tags?.length">
      <svg-icon name="tags" />
      <div class="tag-list">
        <doc-tag
          v-for="tag of doc.tags"
          :text="tag"
          :key="tag"
          @click="handleClick(tag)"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.doc-metadata {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  font-size: 12px;
  line-height: 1;
  overflow: hidden;

  .group {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    flex-shrink: 0;
  }

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
      flex-shrink: 0;
    }

    .tag-list {
      flex: 1;
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      align-items: center;
      gap: 6px;

      .doc-tag {
        cursor: pointer;
      }
    }
  }
}
</style>
