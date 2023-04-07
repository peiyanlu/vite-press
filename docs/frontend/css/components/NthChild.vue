<script setup lang="ts">
import { useNamespace } from '@theme/hooks/useNamespace'
const ns = useNamespace('nth-child')
</script>

<template>
<div :class="ns.b()">
  <div
    :class="ns.e('item')"
    v-for="i of 10"
    :key="i"
  ></div>
</div>
</template>

<style lang="scss" scoped>
.VPDoc-nth-child {
  width: 100%;
  height: 30px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 20.5px;

  &__item {
    width: 30px;
    height: 30px;
    background: var(--vp-c-green);
    display: inline-flex;
  }

  &.aa {
    div:nth-child(2n) {
      background: var(--vp-c-yellow-lighter);
    }
  }
  &.bb {
    div:nth-child(2n-1) {
      background: var(--vp-c-yellow);
    }
  }
  &.cc {
    div:nth-child(n+6) {
      background: var(--vp-c-red-dimm-3);
    }
  }
  &.dd {
    div:nth-child(-n+6) {
      background: var(--vp-c-yellow-dark);
    }
  }
  &.ee {
    div:nth-child(n + 6):nth-child(-n + 9) {
      background: var(--vp-c-red);
    }
  }
}
</style>
