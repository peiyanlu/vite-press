<script setup lang="ts">
import { useNamespace } from '@theme/hooks/useNamespace'


const arr = [
  'div',
  'p',
  'a',
  'span',
  'a',
  'span',
  'a',
  'span',
  'a',
  'div',
  'p',
  'a',
  'p',
  'a',
  'span',
  'a',
  'span',
]


const ns = useNamespace('type-child')
</script>

<template>
  <div :class="ns.b()">
    <component
      v-for="(item, i) of arr"
      :is="item"
      :key="item+i"
      :class="ns.e('item')"
    >{{ item.slice(0,1) }}</component>
  </div>
</template>

<style scoped lang="scss">
.VPDoc-type-child {
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  justify-content: flex-start;
  width: 100%;
  height: 24px;
  gap: 10px;
  
  &__item {
    width: 24px;
    height: 100%;
    aspect-ratio: 1 / 1;
    background: var(--vp-c-brand-1);
    font-size: 12px;
    color: #ffffff;
    text-align: center;
    line-height: 24px;
  }
  
  &.aa {
    span:first-of-type {
      background: var(--vp-c-warning-3);
    }
  }
  
  &.bb {
    div:first-child {
      background: var(--vp-c-caution-3);
    }
  }
  
  &.cc {
    div:nth-child(n) {
      background: var(--vp-c-success-3);
    }
  }
  
  &.dd {
    a:nth-of-type(2n) {
      background: var(--vp-c-warning-3);
    }
  }
  
  &.ee {
    p:only-of-type {
      background: var(--vp-c-sponsor);
    }
  }
  
  &.ff {
    span:nth-last-of-type(2n) {
      background: var(--vp-c-caution-3);
    }
  }
  
  &.gg {
    a:nth-last-child(2n) {
      background: var(--vp-c-warning-3);
    }
  }
  
  &.hh {
    p:last-of-type {
      background: var(--vp-c-caution-3);
    }
  }
  
  
  &.ii {
    span:last-child {
      background: var(--vp-c-caution-3);
    }
  }
  
  
}
</style>
