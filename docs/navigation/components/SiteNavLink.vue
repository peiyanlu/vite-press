<script lang="ts" setup>
import { slugify } from '@mdit-vue/shared'
import { useNamespace } from '@theme/hooks/useNamespace'
import { computed } from 'vue'
import ImageIcon from './ImageIcon.vue'

import { NavLink } from './navigation'


const props = defineProps<{
  icon?: NavLink['icon']
  title?: NavLink['title']
  desc?: NavLink['desc']
  link: NavLink['link']
}>()

const formatTitle = computed(() => props.title ? slugify(props.title) : '')

const ns = useNamespace('site-nav-link')
</script>

<template>
  <a v-if="link" :class="ns.b()" :href="link" rel="noreferrer" target="_blank">
    <div :class="ns.e('header')">
      <ImageIcon :icon="icon" :title="title" />
      <h5 v-if="title" :id="formatTitle" class="title">{{ title }}</h5>
    </div>
    <p v-if="desc" :class="ns.e('footer')">{{ desc }}</p>
  </a>
</template>

<style lang="scss" scoped>
.VPDoc-site-nav-link {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 16px;
  cursor: pointer;
  user-select: none;
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 8px;
  
  &:hover {
    text-decoration: unset;
    background-color: var(--vp-c-bg-soft);
    
    .title {
      &::after {
        animation: show 1s steps(24, end) forwards;
      }
    }
  }
  
  @keyframes show {
    from {
      transform: scaleX(1.15);
    }
    to {
      transform: scaleX(0);
    }
  }
  
  &__header {
    display: flex;
    align-items: center;
    
    .icon {
      font-size: 24px;
      display: flex;
      align-items: center;
      flex-shrink: 0;
      justify-content: center;
      width: 48px;
      height: 48px;
      margin-right: 12px;
      transition: background-color 0.25s;
      border-radius: 6px;
      background-color: var(--vp-c-mute);
      
      :deep(svg) {
        width: 24px;
        aspect-ratio: 1 / 1;
        fill: currentColor;
      }
      
      :deep(img) {
        width: 24px;
        border-radius: 4px;
        aspect-ratio: 1 / 1;
        object-fit: fill;
      }
      
      :deep(div) {
        font-size: 18px;
        font-weight: 800;
        line-height: 24px;
        width: 24px;
        text-align: center;
        border-radius: 4px;
        aspect-ratio: 1 / 1;
      }
    }
    
    .title {
      font-size: 16px;
      font-weight: 600;
      line-height: 48px;
      overflow: hidden;
      flex-grow: 1;
      white-space: nowrap;
      text-overflow: ellipsis;
      
      &::after {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        content: "";
        transform: scaleX(0);
        transform-origin: center right;
        background-color: var(--vp-c-bg-soft);
      }
    }
  }
  
  &__footer {
    font-size: 12px;
    line-height: 20px;
    display: -webkit-box;
    overflow: hidden;
    flex-grow: 1;
    margin: 10px 0 0;
    text-overflow: ellipsis;
    color: var(--vp-c-text-2);
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}

@media (max-width: 960px) {
  .VPDoc-site-nav-link {
    &__box {
      padding: 8px;
      
      .icon {
        width: 40px;
        height: 40px;
      }
      
      .title {
        font-size: 14px;
        line-height: 40px;
      }
    }
  }
}
</style>
