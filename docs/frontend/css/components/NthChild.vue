<script lang="ts" setup>
import { useNamespace } from '@theme/hooks/useNamespace'


const ns = useNamespace('nth-child')
</script>

<template>
  <div :class="ns.b()">
    <div
      v-for="i of 17"
      :key="i"
      :class="ns.e('item')"
      v-text="i"
    />
  </div>
</template>

<style lang="scss" scoped>
.VPDoc-nth-child {
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  justify-content: flex-start;
  width: 100%;
  height: 30px;
  gap: 10px;
  font-size: 12px;
  color: #FFFFFF;
  text-align: center;
  line-height: 30px;

  &__item {
    width: 30px;
    height: 30px;
    background: var(--vp-c-brand-1);
  }

  &.aa {
    div:nth-child(2n) {
      background: var(--vp-c-warning-3);
    }
  }

  &.bb {
    div:nth-child(2n-1) {
      background: var(--vp-c-warning-3);
    }
  }

  &.cc {
    div:nth-child(n+6) {
      background: var(--vp-c-caution-3);
    }
  }

  &.dd {
    div:nth-child(-n+6) {
      background: var(--vp-c-warning-3);
    }
  }

  &.ee {
    div:nth-child(n + 6):nth-child(-n + 9) {
      background: var(--vp-c-success-3);
    }
  }
}
</style>
