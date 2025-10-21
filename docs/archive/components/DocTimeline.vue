<script lang="ts" setup>
import DocShici from '@theme/components/global/DocShici.vue'
import DocTag from '@theme/components/global/DocTag.vue'
import SvgIcon from '@theme/components/global/SvgIcon.vue'
import { useMagicKeys } from '@vueuse/core'
import { computed, defineAsyncComponent, onMounted, reactive, ref, watch } from 'vue'
import { data, DocData, getTimeline, getUrlParams, isCurrentYear, resetUrl, tags } from './archive'
import DocTimelineItem from './DocTimelineItem.vue'
import EmptyBlock from './LoadingBlock.vue'


const AsyncDocWordCloud = defineAsyncComponent({
  loader: () => import('./DocWordCloud.vue'),
  loadingComponent: EmptyBlock,
})


const list = ref<Record<string, Record<string, DocData[]>>>({})
const isSelected = ref(false)
const selected = reactive({
  type: '',
  data: [] as DocData[],
})


const resetList = (data: DocData[]) => {
  list.value = getTimeline(data)
}

const resetPageData = (tag: string, data: DocData[] = []): void => {
  selected.type = tag
  selected.data = data
  
  resetList(data)
  resetUrl(tag ? `?tag=${ encodeURIComponent(tag) }` : '')
}


const { escape } = useMagicKeys()
watch(() => escape.value, (v) => {
  if (isSelected.value && v) {
    isSelected.value = false
    resetPageData('', data)
  }
})

onMounted(() => {
  const { tag } = getUrlParams()
  let decode: string = decodeURIComponent(tag)
  if (tag && tags[decode]) {
    handleSelectedTag(tag, tags[decode])
  } else {
    resetList(data)
  }
})


const navs = computed(() => {
  return Object.entries(list.value).map(([ key, value ]) => {
    return [ key, Object.keys(value) ]
  })
})

const handleSelectedTag = (tag: string | number, data: DocData[]) => {
  isSelected.value = true
  resetPageData(String(tag), data)
}

const count = computed(() => {
  return isSelected.value ? selected.data.length : data.length
})

</script>

<template>
  <div class="doc-archive">
    <AsyncDocWordCloud @get-selected="handleSelectedTag" />
    
    <div class="doc-archive-title">
      <div class="tag">
        <svg-icon name="tags" />
        <doc-tag :text="selected.type" />
      </div>
      <div>{{ `共 ${ count } 篇，持续更新中` }}</div>
    </div>
    
    <DocShici class="doc-shici" />
    
    <div class="doc-timeline">
      <DocTimelineItem
        v-for="(item, year) in list"
        :key="year"
        :year
        :item
        :class="[{ current: isCurrentYear(parseInt(year as string))}]"
        @get-selected="handleSelectedTag"
      />
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
        animation: dot 3s steps(3) infinite;
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
  
  .doc-timeline {
    display: flex;
    flex-flow: column nowrap;
  }
}

@media (max-width: 960px) {
  .doc-archive-title {
    font-size: 22px !important;
  }
}
</style>
