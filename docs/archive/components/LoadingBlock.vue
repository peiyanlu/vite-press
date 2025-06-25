<script lang="ts" setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { computed } from 'vue'


const breakpoints = useBreakpoints(breakpointsTailwind)
const smAndSmaller = breakpoints.smaller('sm')

const height = computed(() => {
  return smAndSmaller.value ? '200px' : '300px'
})

withDefaults(
  defineProps<{
    type?: 'DoubleRing' | 'DualBall' | 'Spinner',
    size?: string,
  }>(),
  {
    type: 'DualBall',
    size: '48',
  },
)
</script>

<template>
  <div class="empty-block">
    <svg-icon :size :name="`loading-${type}`" />
  </div>
</template>

<style lang="scss" scoped>
.empty-block {
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  justify-content: center;
  width: 100%;
  height: v-bind(height);
}
</style>
