<script lang="ts" setup>
import { useDebounceFn, useFetch } from '@vueuse/core'
import { computed, onMounted, ref, unref } from 'vue'


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
  content: string;
}

interface ShiCiResult {
  data: ResultData;
  ipAddress: string;
  status: 'success' | 'error';
  token: string;
}

const loading = ref(false)
const result = ref<ResultData>()
const tokenCache = ref<string>('VOdlQy7mK2kuULsBfAEh8bgVpXaYf62i') // https://v2.jinrishici.com/token


const getUrl = <T extends Record<any, any>>(url: string, record: T) => {
  const u = new URL(url)
  u.search = new URLSearchParams(Object.entries(record).filter(([ _, v ]) => Boolean(v))).toString()
  return u.toString()
}

const getResult = async () => {
  const url = getUrl(
    'https://v2.jinrishici.com/one.json',
    { 'client': 'npm-sdk/1.0', 'X-User-Token': tokenCache.value },
  )
  
  const { data } = await useFetch(url, { method: 'GET' }, { refetch: true }).json()
  return unref<ShiCiResult>(data)
}

const handleContent = useDebounceFn(async () => {
  loading.value = true
  const { data, token } = await getResult().catch()
  result.value = data
  tokenCache.value = token
  loading.value = false
}, 500)


const origin = computed(() => {
  if (!result.value) return
  const { origin: { author, dynasty } } = result.value
  return [ author, dynasty ].join(' · ')
})

const mTitle = computed(() => {
  return result.value?.origin?.title || ''
})

onMounted(() => {
  handleContent()
})
</script>

<template>
  <div class="shi-wrapper">
    <div class="shi-wrapper-content">
      <template v-if="result">
        <svg-icon
          v-if="loading"
          style="font-size: 20px;"
          name="loading-DoubleRing"
        />
        
        <div
          class="line"
          :title="mTitle"
          @click="handleContent"
        >
          <div v-text="result.content" />
          <sub v-text="origin" />
        </div>
      </template>
      
      <div
        v-else
        class="error"
        @click="handleContent"
        v-text="'点击重新加载'"
      />
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
  line-height: 1;
  
  &-content {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    user-select: none;
    
    .line {
      display: flex;
      align-items: flex-end;
      flex-flow: row wrap;
      justify-content: flex-start;
      height: 16px;
      color: var(--vp-c-text-light-1);
      gap: 6px;
    }
    
    .error {
      color: var(--vp-c-danger-1);
      opacity: .4;
    }
  }
}
</style>
