<template>
  <svg
    :height="size"
    :width="size"
    aria-hidden="true"
    class="svg-icon"
  >
    <use
      :fill="color"
      :href="symbolId"
    />
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  prefix: {
    type: String,
    default: 'icon',
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'currentColor',
  },
  size: {
    type: String,
    default: '1em',
  },
})

const symbolId = computed(() => `#${ props.prefix }-${ props.name }`)
</script>


<style lang="less" scoped>
.svg-icon {
  display: block;
  fill: currentColor;
}
</style>
