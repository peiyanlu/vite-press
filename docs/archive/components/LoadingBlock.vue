<script lang="ts" setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'


const breakpoints = useBreakpoints(breakpointsTailwind)
const smAndSmaller = breakpoints.smaller('sm')

const height = smAndSmaller.value ? '200px' : '300px'
</script>

<template>
  <div class="empty-block">
    <div class="loader">
      <div class="outer" />
      <div class="middle" />
      <div class="inner" />
    </div>
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

.loader {
  position: relative;
}

.outer,
.middle,
.inner {
  position: absolute;
  top: 50%;
  left: 50%;
  border: 3px solid transparent;
  border-top-color: var(--vp-c-brand);
  border-right-color: var(--vp-c-brand);
  border-radius: 50%;
}

.outer {
  width: 3.5em;
  height: 3.5em;
  margin-top: -1.75em;
  margin-left: -1.75em;
  animation: spin 2s linear infinite;
}

.middle {
  width: 2.1em;
  height: 2.1em;
  margin-top: -1.05em;
  margin-left: -1.05em;
  animation: spin 1.75s linear reverse infinite;
}

.inner {
  width: 0.8em;
  height: 0.8em;
  margin-top: -0.4em;
  margin-left: -0.4em;
  animation: spin 1.5s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

</style>
