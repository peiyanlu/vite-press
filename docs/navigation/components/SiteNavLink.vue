<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { slugify } from '@mdit-vue/shared'

import { NavLink } from './type'

const props = defineProps<{
  icon?: NavLink['icon']
  title?: NavLink['title']
  desc?: NavLink['desc']
  link: NavLink['link']
}>()

const formatTitle = computed(() => props.title ? slugify(props.title) : '')

const svg = computed(() => typeof props.icon !== 'string' ? props.icon.svg : '')

const imgError = ref<boolean>(false)
const handlerImgError = ()=> imgError.value = true

const setDisplayName = (nameValue: string, widthValue: number) => {
  const nameDisplay = ref<string>('')
  if (nameValue.length < 2) {
    nameDisplay.value = nameValue;
  } else {
    // 以中文开头显示最后两个字符
    if (/^[\u4e00-\u9fa5]/.test(nameValue)) {
      nameDisplay.value = nameValue.substr(nameValue.length - 2, 2);
      // 英文开头
    } else if (/^[A-Za-z]/.test(nameValue)) {
      // 含有两个及以上，包含空格，下划线，中划线分隔符的英文名取前两个字母的首字母
      if (/[_ -]/.test(nameValue)) {
        const str_before = nameValue.split(/_|-|\s+/)[0];
        const str_after = nameValue.split(/_|-|\s+/)[1];
        nameDisplay.value = str_before.substr(0, 1).toUpperCase() + str_after.substr(0, 1).toUpperCase();
      } else {
        // 一个英文名的情况显示前两个字母
        nameDisplay.value = nameValue.substr(0, 2).toUpperCase();
      }
    } else {
      // 非中英文开头默认取前两个字符
      nameDisplay.value = nameValue.substr(0, 2);
    }
  }
  if (widthValue < 30) {
    nameDisplay.value = nameValue.substr(0, 1).toUpperCase();
  }

  return nameDisplay
};
</script>

<template>
  <a v-if="link" class="site-nav-link" :href="link" target="_blank" rel="noreferrer">
    <article class="box">
      <div class="box-header">
        <div v-if="svg" class="icon" v-html="svg" />
        <div v-else-if="icon && typeof icon === 'string'" class="icon">
          <img v-if="!imgError" :src="icon" :alt="title" @error="handlerImgError" />
          <div v-else v-html="setDisplayName(title, 24).value"></div>
        </div>
        <h5 v-if="title" :id="formatTitle" class="title">{{ title }}</h5>
      </div>
      <p v-if="desc" class="desc">{{ desc }}</p>
    </article>
  </a>
</template>

<style lang="scss" scoped>
.site-nav-link {
  display: block;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 8px;
  height: 100%;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: var(--vp-c-bg-soft);
  }

  .box {
    display: flex;
    flex-direction: column;
    padding: 16px;
    height: 100%;
    color: var(--vp-c-text-1);
    &-header {
      display: flex;
      align-items: center;
    }
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 12px;
    border-radius: 6px;
    width: 48px;
    height: 48px;
    font-size: 24px;
    background-color: var(--vp-c-mute);
    transition: background-color 0.25s;

    :deep(svg) {
      width: 24px;
      fill: currentColor;
    }

    :deep(img) {
      border-radius: 4px;
      width: 24px;
    }

    :deep(div) {
      border-radius: 4px;
      width: 24px;
      height: 24px;
      font-size: 18px;
      line-height: 24px;
      text-align: center;
      background: linear-gradient(120deg, #bd34fe 30%, #41d1ff);
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
  }

  .desc {
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
  .site-nav-link {
    .box {
      padding: 8px;
    }
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
</style>
