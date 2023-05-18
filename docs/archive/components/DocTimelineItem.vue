<script setup lang="ts">
import { useNamespace } from '../../.vitepress/theme/hooks/useNamespace'
import { data } from '../../.vitepress/theme/docs.data'

const list = {}

data.sort((a, b) => b.createdDate - a.createdDate)
  .forEach(item => {
    const year = new Date(item.createdDate).getFullYear() + '_'
    const month = (new Date(item.createdDate).getMonth() + 1) + '_'

    list[year] ??= {}

    ;(list[year][month] ??= []).push(item)
  })
console.log(data)
const ns = useNamespace('doc-timeline-item')
</script>

<template>
  <div :class="ns.b()" v-for="(item, year) in list">
    <h2>{{ year }}年</h2>
    <div v-for="(subItem, month) in item">
      <h3>{{ month }}月</h3>
      <div class="title" v-for="aa of subItem">
        <div>{{ aa.title }}</div>
        <div>{{ aa.path }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.VPDoc-doc-timeline-item {
  padding-left: 30px;
  border-left: 1px solid var(--vp-c-brand);
}
</style>

