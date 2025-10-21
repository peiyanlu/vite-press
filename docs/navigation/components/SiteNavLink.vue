<script lang="ts" setup>
import { slugify } from '@mdit-vue/shared'
import vTypedText from '@theme/directives/typed-text'
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
  <a
    v-if="link"
    :class="ns.b()"
    :href="link"
    rel="noreferrer"
    target="_blank"
    v-typed-text="{
      text: title ?? '',
      childSelector: `#${formatTitle}`
    }"
  >
    <div :class="ns.e('header')">
      <ImageIcon :icon="icon" :title="title" />
      <span
        v-if="title"
        :id="formatTitle"
        class="title"
        v-text="title"
      />
    </div>
    <p
      v-if="desc"
      :class="ns.e('footer')"
      v-text="desc"
    />
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
  border-radius: 8px;
  text-decoration: none;
  background-color: var(--vp-c-bg-soft);
  background-image: linear-gradient(90deg, rgba(159, 219, 252, 0.025) 3%, transparent 0px),
  linear-gradient(1turn, rgba(159, 219, 252, 0.025) 3%, transparent 0px);
  background-size: 20px 20px;
  background-position: 50% center;
  transition: .15s transform linear;
  
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
      white-space: nowrap;
      text-overflow: ellipsis;
      // flex-grow: 1;
      
      // &::after {
      //   position: absolute;
      //   z-index: 1;
      //   top: 0;
      //   left: 0;
      //   width: 100%;
      //   height: 100%;
      //   content: "";
      //   transform: scaleX(0);
      //   transform-origin: center right;
      //   background-color: var(--vp-c-bg-soft);
      // }
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
  
  &:hover {
    transform: scale(1.05);
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
