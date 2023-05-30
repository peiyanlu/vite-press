<script lang="ts" setup>
import GiscusComment from '@theme/components/GiscusComment.vue'
import { useData } from 'vitepress'


const { frontmatter } = useData()


</script>

<template>
  <div class="doc-after">
    <GiscusComment />
  </div>
</template>

<style lang="scss" scoped>
.doc-after {
  margin: 32px 0;
}
</style>
