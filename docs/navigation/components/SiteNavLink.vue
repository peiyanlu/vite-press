<script lang="ts" setup>
import { slugify } from '@mdit-vue/shared'
import { computed } from 'vue'
import { useNamespace } from '../../.vitepress/theme/hooks/useNamespace'
import ImageIcon from './ImageIcon.vue'

import { NavLink } from './type'

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
  <a v-if="link" :href="link" :class="ns.b()" rel="noreferrer" target="_blank">
    <div :class="ns.e('header')">
      <ImageIcon :icon="icon" :title="title" />
      <h5 v-if="title" :id="formatTitle" class="title">{{ title }}</h5>
    </div>
    <p v-if="desc" :class="ns.e('footer')">{{ desc }}</p>
  </a>
</template>

<style lang="scss" scoped>
$doc-prefix: VPDoc;

.#{$doc-prefix}-site-nav-link {
  display: flex;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 8px;
  height: 100%;
  cursor: pointer;
  transition: transform 0.3s ease;
  flex-direction: column;
  padding: 16px;
  color: var(--vp-c-text-1);

  &:hover {
    background-color: var(--vp-c-bg-soft);
    transform: scale(1.05);
    text-decoration: unset;

    .title {
      &::after {
        animation: show 1s steps(24, end) forwards;
        animation-fill-mode: forwards;
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
  }

  &__header {
    display: flex;
    align-items: center;

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      margin-right: 12px;
      border-radius: 6px;
      width: 48px;
      height: 48px;
      font-size: 24px;
      background-color: var(--vp-c-mute);
      transition: background-color 0.25s;

      :deep(svg) {
        width: 24px;
        aspect-ratio: 1 / 1;
        fill: currentColor;
      }

      :deep(img) {
        border-radius: 4px;
        width: 24px;
        aspect-ratio: 1 / 1;
        object-fit: fill;
      }

      :deep(div) {
        border-radius: 4px;
        width: 24px;
        aspect-ratio: 1 / 1;
        font-size: 18px;
        font-weight: 800;
        line-height: 24px;
        text-align: center;
        background: linear-gradient(120deg, rgb(189 52 253 / 50%) 30%, rgb(65 209 255));
        -webkit-background-clip: text;
        -webkit-text-fill-color: var(--vp-home-hero-name-color);
      }
    }

    .title {
      overflow: hidden;
      flex-grow: 1;
      white-space: nowrap;
      text-overflow: ellipsis;
      line-height: 48px;
      font-size: 16px;
      font-weight: 600;

      &::after {
        content: "";
        position: absolute;
        background-color: var(--vp-c-bg-soft);
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: scaleX(0);
        transform-origin: center right;
        z-index: 999;
      }
    }
  }

  &__footer {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-grow: 1;
    margin: 10px 0 0;
    line-height: 20px;
    font-size: 12px;
    color: var(--vp-c-text-2);
  }
}


@media (max-width: 960px) {
  .#{$doc-prefix}-site-nav-link {
    &__box {
      padding: 8px;

      .icon {
        width: 40px;
        height: 40px;
      }

      .title {
        line-height: 40px;
        font-size: 14px;
      }
    }
  }
}
</style>
