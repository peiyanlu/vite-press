<script lang="ts" setup>
import DocShici from '@theme/components/DocShici.vue'
import DocTag from '@theme/components/DocTag.vue'
import { data, DocData } from '@theme/docs.data'
import { useNamespace } from '@theme/hooks/useNamespace'
import { useMagicKeys } from '@vueuse/core'
import { useData, withBase } from 'vitepress'
import { defineAsyncComponent, onBeforeMount, reactive, ref, watch } from 'vue'
import { getTimeline, getZodiac, getZodiacAlias } from './archive'
import DocMetaData from './DocMetaData.vue'
import EmptyBlock from './LoadingBlock.vue'


const AsyncWordCloud = defineAsyncComponent({
  // 加载函数
  loader: () => import('./WordCloud.vue'),
  // 展示加载组件前的延迟时间，默认为 200ms
  delay: 0,
  loadingComponent: EmptyBlock,
})

const { escape } = useMagicKeys()
const { isDark } = useData()

type TimelineData = Record<string, Record<string, DocData[]>>

const list = ref<TimelineData>({})
const isSelected = ref(false)
const selected = reactive({
  type: '',
  data: [] as DocData[],
})

const resetList = (data: DocData[]) => {
  list.value = getTimeline(data)
}

watch(() => escape.value, (v) => {
  if (isSelected.value && v) {
    isSelected.value = false
    
    selected.type = ''
    selected.data = []
    
    resetList(data)
  }
})

onBeforeMount(() => {
  resetList(data)
})

const handleSelectedTag = (tag, data) => {
  isSelected.value = true
  
  selected.type = tag
  selected.data = data
  
  resetList(data)
}

const isCurrentYear = (year: number) => {
  return new Date().getFullYear() === year
}

const shadow = isDark ? 'rgba(125, 125, 125, .1)' : 'rgba(0, 0, 0, .1)'

const ns = useNamespace('doc-timeline-item')
</script>

<template>
  <div class="doc-archive">
    <AsyncWordCloud @get-selected="handleSelectedTag" />
    
    <div class="doc-archive-title">
      <div class="tag">
        <svg-icon name="tags" />
        <doc-tag :text="selected.type" />
      </div>
      <div v-if="isSelected">{{ `共 ${ selected.data.length } 篇，持续更新中` }}</div>
      <div v-else>{{ `共 ${ data.length } 篇，持续更新中` }}</div>
    </div>
    
    <DocShici class="doc-shici" />
    
    <div class="doc-timeline">
      <div
        v-for="(item, year) in list"
        :key="year"
        :class="[ns.b(), { current: isCurrentYear(parseInt(year as string))}]"
      >
        <div :class="ns.e('line')">
          <div :title="getZodiacAlias(parseInt(year as string))" class="icon">
            <svg-icon :name="`zodiac-${getZodiac(parseInt(year as string))}`" />
          </div>
          <div class="line" />
        </div>
        <div :class="ns.e('wrapper')">
          <div class="group-header">{{ year }}</div>
          <div
            v-for="(subItem, month) in item"
            :key="month"
            class="group-content"
          >
            <div class="subgroup-header">{{ month }}</div>
            <div
              v-for="doc of subItem"
              :key="doc.path"
              class="subgroup-content"
            >
              <div class="title">
                <a :href="withBase(doc.path)">{{ doc.category ? `${ doc.category } / ` : '' }}{{ doc.title }}</a>
                <div v-if="doc.description">-- {{ doc.description }}</div>
              </div>
              <DocMetaData :doc="doc" @get-selected="handleSelectedTag" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.doc-archive {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  gap: 32px;
  
  .doc-archive-title {
    font-size: 32px;
    font-weight: 600;
    line-height: 40px;
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    justify-content: flex-start;
    white-space: nowrap;
    letter-spacing: -0.02em;
    gap: 12px;
    
    .tag {
      display: flex;
      align-items: center;
      flex-flow: row nowrap;
      justify-content: flex-start;
      gap: 12px;
      
      .doc-tag {
        font-size: 16px;
      }
    }
    
    &:not(.tag) {
      &:after {
        position: relative;
        left: -10px;
        content: "...";
        animation: dot 2s steps(3) infinite;
        white-space: nowrap;
      }
      
      @keyframes dot {
        33% {
          content: ".";
        }
        66% {
          content: "..";
        }
        100% {
          content: "...";
        }
      }
    }
  }
  
  .doc-shici {
  
  }
  
  .doc-timeline {
    display: flex;
    flex-flow: column nowrap;
    
    --gap: 20px;
    --size: 30px;
    
    .VPDoc-doc-timeline-item {
      position: relative;
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      gap: var(--gap);
      
      &__line {
        display: flex;
        align-items: center;
        flex-flow: column nowrap;
        justify-content: flex-end;
        width: var(--size);
        
        .icon {
          width: 100%;
          padding: 2px;
          border: 2px solid var(--vp-c-brand);
          border-radius: 50%;
          aspect-ratio: 1 / 1;
          
          :deep(.svg-icon) {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            aspect-ratio: 1 / 1;
            object-fit: contain;
          }
        }
        
        .line {
          height: 100%;
          border-left: 2px solid var(--vp-c-green-light);
        }
      }
      
      &__wrapper {
        flex: 1;
        width: 0;
        padding-bottom: 48px;
        
        .group-header {
          font-size: 24px;
          line-height: var(--size);
          letter-spacing: -0.02em;
        }
        
        .group-content {
          padding-left: var(--gap);
          
          .subgroup-header {
            font-size: 20px;
            line-height: 28px;
            padding-top: 32px;
            padding-bottom: 16px;
            letter-spacing: -0.01em;
          }
          
          .subgroup-content {
            display: flex;
            overflow: hidden;
            flex-flow: column nowrap;
            justify-content: flex-start;
            padding: 18px 18px;
            transition: .3s;
            border-radius: 4px;
            gap: 18px;
            
            .title {
              font-size: 14px;
              line-height: 1.2;
              display: flex;
              align-items: flex-end;
              justify-content: flex-start;
              transition: all 0.3s ease-in-out;
              white-space: nowrap;
              letter-spacing: 0.02em;
              gap: 20px;
              
              a {
                flex-shrink: 0;
              }
              
              div {
                font-size: 12px;
                line-height: 1;
                overflow: hidden;
                flex: 1;
                transition: all 0.3s ease-in-out;
                white-space: nowrap;
                text-overflow: ellipsis;
                opacity: 0;
              }
            }
            
            &:hover {
              box-shadow: 0 2px 12px 0 v-bind(shadow);
              
              .title {
                div {
                  opacity: 0.4;
                }
              }
            }
          }
        }
      }
      
      &.current {
        .icon {
          border: 2px dashed var(--vp-c-brand);
        }
        
        .line {
          border-left: 2px dashed var(--vp-c-green-light);
        }
      }
      
      &:last-child {
        .line {
          border-image: linear-gradient(
              to top,
              var(--vp-c-green-light) 0,
              var(--vp-c-green-light) 5px,
              transparent 5px,
              transparent 10px,
              var(--vp-c-green-light) 10px,
              var(--vp-c-green-light) 15px,
              transparent 15px,
              transparent 20px,
              var(--vp-c-green-light) 20px,
              var(--vp-c-green-light) 25px,
              transparent 25px,
              transparent 30px,
              var(--vp-c-green-light) 30px,
              var(--vp-c-green-light) 100%
          ) 1;
        }
      }
    }
  }
}

@media (max-width: 960px) {
  .doc-archive-title {
    font-size: 22px !important;
  }
  
  .doc-timeline {
    --gap: 14px;
    --size: 24px;
    
    .VPDoc-doc-timeline-item {
      &__wrapper {
        padding-bottom: 32px;
        
        .group-header {
          font-size: 22px;
        }
        
        .group-content {
          .subgroup-header {
            font-size: 18px;
            line-height: 26px;
            padding-top: 24px;
            padding-bottom: 8px;
          }
        }
      }
    }
  }
}
</style>
