<script lang="ts" setup>
import { useData } from 'vitepress'
import { onMounted, ref, watchEffect } from 'vue'


interface ShiciResult {
  data: Record<string, any>;
  ipAddress: string;
  status: 'success' | 'error';
  token: string;
}

const { title } = useData()

const content = ref('')
const loaded = ref(false)

const getResult = (): Promise<ShiciResult> => {
  return new Promise((resolve) => {
    globalThis.jinrishici?.load((result: ShiciResult) => resolve(result))
  })
}

const getContent = async () => {
  const { data } = await getResult()
  return data.content
}

const handleLoad = () => {
  loaded.value = true
}

const handleContent = async () => {
  content.value = await getContent()
}

watchEffect(async () => {
  if (loaded.value) {
    await handleContent()
  }
})
</script>

<template>
  <teleport to="body">
    <component
      is="script"
      :key="title"
      src="https://sdk.jinrishici.com/v2/browser/jinrishici.js"
      @load="handleLoad"
    />
  </teleport>
  <div class="jinrishici" @click="handleContent">{{ content }}</div>
</template>

<style lang="scss" scoped>
.jinrishici {
  text-align: center;
}
</style>
