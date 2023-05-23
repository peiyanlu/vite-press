<script lang="ts" setup>
const props = defineProps<{
  text: string
}>()

const getColor = () => {
  const r = () => Math.floor(Math.random() * 116) + 140
  return `rgba(${ r() }, ${ r() }, ${ r() }, ${ Math.random() * 0.75 + 0.25 })`
};
</script>

<template>
  <div class="doc-tag">{{ text }}</div>
</template>

<style lang="scss" scoped>
.doc-tag {
  line-height: 1;
  padding: 6px 8px;
  white-space: nowrap;
  letter-spacing: 0.02em;
  border-radius: 4px;
  background: v-bind(getColor());
}
</style>
