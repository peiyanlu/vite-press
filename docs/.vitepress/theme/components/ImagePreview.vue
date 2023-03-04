<script setup lang="ts">
import * as DevUI from 'vue-devui'
const vImagePreview = DevUI.ImagePreviewDirective


const props = defineProps<{
  src: string
}>()
</script>

<template>
<div class="image-preview" v-image-preview>
  <img :src="src" alt="" />
</div>
</template>

<style lang="scss" scoped>
.image-preview {
  display: contents;

  img {
    cursor: pointer;
  }
}
</style>
