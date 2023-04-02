<script setup lang="ts">
import { ImagePreviewDirective } from '@theme/directives/image-preview'
const vImagePreview = ImagePreviewDirective
import WaterMask from '@theme/directives/water-mask'
const vWaterMask = WaterMask

const props = defineProps<{
  src: string
}>()
</script>

<template>
  <div class="image-preview" v-image-preview="{scopeSelector: '.VPDoc .main'}">
    <img :src="src" alt=""  />
  </div>
  <div class="image-water-mask" v-water-mask />
</template>

<style lang="scss" scoped>
.image-preview {
  display: contents;
  position: relative;

  img {
    cursor: pointer;
  }
}
.image-water-mask {
  display: contents;
  position: relative;
}
</style>
