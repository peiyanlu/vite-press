<script lang="ts" setup>
import SvgIcon from '@theme/components/global/SvgIcon.vue'
import { useDebounceFn } from '@vueuse/core'
import { useData } from 'vitepress'
import { computed, ref, watchEffect } from 'vue'


interface ResultData {
  popularity: number;
  origin: {
    dynasty: string;
    author: string;
    title: string;
    content: string[];
    translate: string[] | null
  };
  matchTags: string[];
  cacheAt: string;
  recommendedReason: string;
  id: string;
  content: string
}

interface ShiCiResult {
  data: ResultData;
  ipAddress: string;
  status: 'success' | 'error';
  token: string;
}

const { title } = useData()

const result = ref<ResultData>()
const loaded = ref(false)
const loading = ref(false)

const getResult = (): Promise<ShiCiResult> => {
  return new Promise((resolve) => {
    (window as any).jinrishici.load((result: ShiCiResult) => resolve(result))
  })
}

const handleLoad = () => {
  loaded.value = true
}

const handleContent = useDebounceFn(async () => {
  loading.value = true
  const { data } = await getResult().catch()
  result.value = data
  loading.value = false
}, 300)


watchEffect(async () => {
  if (loaded.value) {
    await handleContent()
  }
})

const origin = computed(() => {
  if (!result.value) return
  const { origin: { author, dynasty } } = result.value
  return [ author, dynasty ].join(' · ')
})

const mTitle = computed(() => {
  return result.value?.origin?.title || ''
})
</script>

<template>
  <div class="shi-wrapper">
    <teleport to="body">
      <component
        is="script"
        :key="title"
        src="https://sdk.jinrishici.com/v2/browser/jinrishici.js"
        @load="handleLoad"
      />
    </teleport>
    
    <div
      v-if="result"
      class="shi-wrapper-content"
    >
      <svg-icon
        v-if="loading"
        style="font-size: 20px;"
        name="loading-DoubleRing"
      />
      
      <div
        v-else
        class="content"
        @click="handleContent"
        :title="mTitle"
      >
        <div v-text="result.content" />
        <sub v-text="origin" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.shi-wrapper {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  height: 16px;
  text-align: center;
  
  &-content {
    .content {
      line-height: 1;
      display: flex;
      align-items: flex-end;
      flex-flow: row wrap;
      justify-content: flex-start;
      height: 16px;
      cursor: pointer;
      color: var(--vp-c-text-light-2);
      gap: 6px;
    }
  }
}
</style>
