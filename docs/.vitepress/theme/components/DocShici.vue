<script lang="ts" setup>
import { useData } from 'vitepress'
import { ref } from 'vue'


interface ShiciResult {
  data: Record<string, any>;
  ipAddress: string;
  status: 'success' | 'error';
  token: string;
}

const { title } = useData()
const content = ref<string>('')
const handleLoad = () => {
  console.log(title.value)
  globalThis.jinrishici.load((result: ShiciResult) => {
    const { data } = result
    content.value = data.content
    console.log(data)
  })
}
</script>

<template>
  <div id="jinrishici">{{ content }}</div>
  <component
    is="script"
    :key="title+Date.now()"
    async
    src="https://sdk.jinrishici.com/v2/browser/jinrishici.js"
    @load="handleLoad"
  />
</template>

<style lang="scss" scoped>

</style>
