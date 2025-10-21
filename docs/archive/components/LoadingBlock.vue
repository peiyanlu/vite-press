<script lang="ts" setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { computed, PropType } from 'vue'


const breakpoints = useBreakpoints(breakpointsTailwind)
const smAndSmaller = breakpoints.smaller('sm')

const height = computed(() => (smAndSmaller.value ? 200 : 300) + 'px')


defineProps({
  size: {
    type: Number,
    default: 48,
  },
  type: {
    type: String as PropType<'DoubleRing' | 'DualBall' | 'Spinner'>,
    default: 'DualBall',
  }
})
</script>

<template>
  <div class="empty-block">
    <svg-icon
      :size
      :name="`loading-${type}`"
    />
    <div class="text">数据加载中...</div>
  </div>
</template>

<style lang="scss" scoped>
.empty-block {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  height: v-bind(height);
  
  .text {
    font-size: inherit;
    letter-spacing: inherit;
  }
}
</style>
