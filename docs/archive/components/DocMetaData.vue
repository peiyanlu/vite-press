<script lang="ts" setup>
import { getColor } from '@utils/index'
import SvgIcon from '@theme/components/global/SvgIcon.vue'
import { DocData } from '@theme/data/docs.data'
import { breakpointsTailwind, useBreakpoints, useDateFormat, useTimeAgo } from '@vueuse/core'
import { withBase } from 'vitepress'
import { tags } from './archive'


const breakpoints = useBreakpoints(breakpointsTailwind)
const smAndSmaller = breakpoints.smaller('sm')

defineProps<{
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
    <div class="title">
      <a :href="withBase( doc.url)" target="_blank" v-text="doc.title ?? doc.url" />
      <div v-text="doc.description" />
    </div>
    
    <div class="group">
      <div v-if="doc.tags?.length" class="tags">
        <svg-icon name="tags" />
        <div class="tag-list">
          <var-button
            v-for="tag of doc.tags"
            size="mini"
            @click="handleClick(tag)"
            :color="getColor()"
            v-text="tag"
            :elevation="false"
            style="font-size: 12px;"
          />
        </div>
      </div>
      
      <div class="time">
        <div class="item" :title="`创建于：${getTimeAgo(doc.createdDate)}`">
          <svg-icon name="create" />
          <div v-html="getDate(doc.createdDate)" />
        </div>
        <div class="item" :title="`更新于：${getDate(doc.updatedDate)}`">
          <svg-icon name="update" />
          <div v-html="getTimeAgo(doc.updatedDate)" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.doc-metadata {
  display: flex;
  overflow: hidden;
  flex-flow: column nowrap;
  justify-content: space-between;
  padding: 18px 18px;
  transition: all .3s ease;
  border-radius: 4px;
  gap: 18px;
  background-color: var(--vp-c-bg-soft);
  margin-bottom: 16px;
  position: relative;
  min-height: 118px;
  
  .title {
    font-size: 16px;
    line-height: 1.2;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    white-space: nowrap;
    letter-spacing: 0.02em;
    gap: 20px;
    backface-visibility: hidden;
    
    a {
      flex-shrink: 0;
      text-decoration: none;
    }
    
    div {
      font-size: 12px;
      overflow: hidden;
      flex: 1;
      white-space: nowrap;
      text-overflow: ellipsis;
      opacity: .5;
    }
  }
  
  .group {
    font-size: 12px;
    line-height: 1;
    display: flex;
    overflow: hidden;
    align-items: flex-start;
    flex-flow: column nowrap;
    justify-content: flex-start;
    gap: 8px;
    
    .time {
      display: flex;
      align-items: center;
      flex-flow: row nowrap;
      flex-shrink: 0;
      justify-content: flex-start;
      gap: 20px;
      opacity: .5;
      
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
      }
    }
    
    .tags {
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
  
  &::after {
    content: "VitePress";
    position: absolute;
    font-size: 82px;
    line-height: 82px;
    right: 46px;
    top: 50%;
    transform: rotate(-15deg) scale(1.5) translateX(-12px) translateY(-50%);
    mix-blend-mode: difference;
    opacity: 0;
    transition: .3s;
    z-index: -1;
    pointer-events: none;
    user-select: none;
    
    background-image: linear-gradient(45deg, rgba(189, 52, 154, .05), rgba(65, 209, 255, .05));
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  &:hover {
    transform: perspective(1px) scale(1.04);
    box-shadow: rgba(0, 0, 0, 0.2) 0 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
    border-radius: 22px;
    
    &::after {
      opacity: .5;
    }
  }
  
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
