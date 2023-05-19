<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps<{
  text: string
}>()

function color() {
  const r = () => Math.floor(Math.random() * 136) + 120
  return `rgba(${ r() }, ${ r() }, ${ r() }, ${ Math.random() * 0.75 + 0.25 })`
}
</script>

<template>
<div class="doc-tag">{{ text }}</div>
</template>

<style lang="scss" scoped>
.doc-tag {
  padding: 4px 6px;
  border-radius: 2px;
  white-space: nowrap;
  background: v-bind(color());
}
</style>
