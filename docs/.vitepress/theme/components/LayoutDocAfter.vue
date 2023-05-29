<script lang="ts" setup>
import GiscusComment from '@theme/components/GiscusComment.vue'
import GitalkComment from '@theme/components/GitalkComment.vue'
import DocShici from '@theme/components/DocShici.vue'
import { useData } from 'vitepress'


const { frontmatter } = useData()


</script>

<template>
  <div class="doc-after">
    <DocShici />
    <GiscusComment />
  </div>
</template>

<style lang="scss" scoped>
.doc-after {
  margin-bottom: 32px;
}
</style>
