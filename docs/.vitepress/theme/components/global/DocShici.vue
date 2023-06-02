<script lang="ts" setup>
import { useDebounceFn } from '@vueuse/core'
import { useData } from 'vitepress'
import { ref, watchEffect } from 'vue'


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

interface ShiciResult {
  data: ResultData;
  ipAddress: string;
  status: 'success' | 'error';
  token: string;
}

const { title } = useData()

const result = ref<ResultData>()
const loaded = ref(false)

const getResult = (): Promise<ShiciResult> => {
  return new Promise((resolve) => {
    globalThis.jinrishici?.load((result: ShiciResult) => resolve(result))
  })
}

const handleLoad = () => {
  loaded.value = true
}


const handleContent = useDebounceFn(async () => {
  console.log(await getResult())
  const { data } = await getResult()
  result.value = data
}, 300)

watchEffect(async () => {
  if (loaded.value) {
    await handleContent()
  }
})
</script>

<template>
  <div class="jinrishici">
    <teleport to="body">
      <component
        is="script"
        :key="title"
        src="https://sdk.jinrishici.com/v2/browser/jinrishici.js"
        @load="handleLoad"
      />
    </teleport>
    <div v-if="result" class="jinrishici-content" @click="handleContent">
      <div>{{ result.content }}</div>
      <sub>{{ result.origin.dynasty }} · {{ result.origin.author }}</sub>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.jinrishici {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  height: 16px;
  text-align: center;

  &-content {
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
</style>
