<script lang="ts" setup>
import SvgIcon from '@theme/components/global/SvgIcon.vue'
import { getColor } from '@utils/index'
import { useMagicKeys } from '@vueuse/core'
import { computed, defineAsyncComponent, onMounted, reactive, ref, watch } from 'vue'
import { data, DocData, getTimeline, getUrlParams, isCurrentYear, resetUrl, tags } from './archive'
import DocShiCi from './DocShiCi.vue'
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
        <var-button
          size="mini"
          :color="getColor()"
          v-text="selected.type"
          :elevation="false"
          style="font-size: 12px;"
        />
      </div>
      <div>{{ `共 ${ count } 篇，持续更新中` }}</div>
    </div>
    
    <DocShiCi class="doc-shici" />
    
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
    
    <var-back-top :duration="300" :visibility-height="800" />
  </div>
</template>

<style lang="scss" scoped>
.doc-archive {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  gap: 28px;
  
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
  .doc-archive {
    gap: 24px;
    
    .doc-archive-title {
      font-size: 22px !important;
    }
  }
}
</style>
