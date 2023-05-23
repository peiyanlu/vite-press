<script lang="ts" setup>
import { computed, ref, watchEffect } from 'vue'
import { NavLink } from './type'
import useObserver from '@theme/hooks/useObserver'


const props = defineProps<{
  icon?: NavLink['icon']
  title?: NavLink['title']
}>()

const setDisplayName = (nameValue: string, widthValue: number) => {
  const nameDisplay = ref<string>('')
  if (nameValue.length < 2) {
    nameDisplay.value = nameValue
  } else {
    // 以中文开头显示最后两个字符
    if (/^[\u4e00-\u9fa5]/.test(nameValue)) {
      nameDisplay.value = nameValue.substr(nameValue.length - 2, 2)
      // 英文开头
    } else if (/^[A-Za-z]/.test(nameValue)) {
      // 含有两个及以上，包含空格，下划线，中划线分隔符的英文名取前两个字母的首字母
      if (/[_ -]/.test(nameValue)) {
        const str_before = nameValue.split(/_|-|\s+/)[0]
        const str_after = nameValue.split(/_|-|\s+/)[1]
        nameDisplay.value = str_before.substr(0, 1).toUpperCase() + str_after.substr(0, 1).toUpperCase()
      } else {
        // 一个英文名的情况显示前两个字母
        nameDisplay.value = nameValue.substr(0, 2).toUpperCase()
      }
    } else {
      // 非中英文开头默认取前两个字符
      nameDisplay.value = nameValue.substr(0, 2)
    }
  }
  if (widthValue < 30) {
    nameDisplay.value = nameValue.substr(0, 1).toUpperCase()
  }

  return nameDisplay
}

const imgRef = ref<HTMLImageElement | null>(null)

watchEffect(() => {
  const observer = useObserver()
  if (imgRef.value) {
    observer?.observe(imgRef.value)
  }
})

const svgIcon = computed(() => typeof props.icon !== 'string' ? props.icon.svg : '')
const textIcon = setDisplayName(props.title, 24)
</script>

<template>
  <div v-if="svgIcon" class="icon" v-html="svgIcon" />
  <div v-else class="icon">
    <div v-if="!icon" v-html="textIcon" />
    <image-lazy-load
      v-else
      :src="icon as string"
    />
  </div>
</template>
