<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps<{
  text: string
}>()

const color = () => {
  const r = () => Math.floor(Math.random() * 116) + 140
  return `rgba(${ r() }, ${ r() }, ${ r() }, ${ Math.random() * 0.75 + 0.25 })`
};
</script>

<template>
<div class="doc-tag">{{ text }}</div>
</template>

<style lang="scss" scoped>
.doc-tag {
  padding: 6px 8px;
  border-radius: 4px;
  white-space: nowrap;
  line-height: 1;
  letter-spacing: 0.02em;
  background: v-bind(color());
}
</style>
