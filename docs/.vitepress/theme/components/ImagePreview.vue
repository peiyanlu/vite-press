<script lang="ts" setup>
import { ImagePreviewDirective } from '@theme/directives/image-preview'

const vImagePreview = ImagePreviewDirective

const props = defineProps<{
  src: string
}>()
</script>

<template>
  <div v-image-preview="{scopeSelector: '.VPDoc .main'}" class="image-preview">
    <img :src="src" alt="" />
  </div>
</template>

<style lang="scss" scoped>
.image-preview {
  display: contents;
  position: relative;

  img {
    cursor: pointer;
  }
}
</style>
