<script lang="ts" setup>
import { computed, handleError, ref, watchEffect } from 'vue'
import { NavLink } from './type'

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
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const lazyImg = entry.target as HTMLImageElement
      const src = lazyImg.dataset.src
      if (src) {
        lazyImg.src = src
        lazyImg.removeAttribute('data-src')
      }
      observer.unobserve(lazyImg)
    }
  })
})
watchEffect(() => {
  if (imgRef.value) {
    observer.observe(imgRef.value)
  }
})

const svgIcon = computed(() => typeof props.icon !== 'string' ? props.icon.svg : '')
const textIcon = setDisplayName(props.title, 24)
const def = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAERBJREFUeF7tnQmT3DQQRr2cgRASAoFsyH39/99DyAE5uRKOZCFACPUMqp11LKutGc1I7q+rppKqlT3W134jqdWS9g4ODl53MikgBUYV2BMgejOkQFwBAaK3QwpMKCBA9HpIAQGid0AK5CmgFiRPN13lRAEB4sTRqmaeAgIkTzdd5UQBAeLE0apmngICJE83XeVEAQHixNGqZp4CAiRPN13lRAEB4sTRqmaeAgIkTzdd5UQBAeLE0apmngICJE83XeVEAQHixNGqZp4CAiRPN13lRAEB4sTRqmaeAgIkTzdd5UQBAeLE0apmngICJE83XeVEAQHixNGqZp4CAiRPN13lRAEB4sTRqmaeAgIkTzdd5UQBAeLE0apmngICJE83XeVEAQHixNGqZp4CAiRPN13lRAEB4sTRqmaeAgIkTzdd5UQBAeLE0apmngICJE83XeVEAQHixNGqZp4CAiRPN13lRAEB4sTRqmaeAgIkTzdd5UQBAeLE0apmngIuAfntt9+6P/74o3v16lX/+euvv7q///67++eff/JUXPBVb731Vvf2229377zzTv/h/++//3534sSJjr8t3dwAAhQvXrzonj9/LhA29FYDyfHjx7uPPvposbAsGhBah59//rn79ddf+1ZCVkYBWhJgOXXqVN+6LMkWCUgA45dffum7TrLtKXDy5MlFgbI4QH766adOYGwPiNg3AcqZM2ea73otCpDvvvuuh0NWhwLvvfdet7+/33S3axGAEH168OBBH5mS1acAkDBGadGaBwQovv3222ztQxgz/Jt9o4VeyI8PH8Z1/Pv69eusmn722Wfd6dOns67d5UVNA0Jk6u7du7P1C6FJ+smyeQocHBx0hMwJlwPNHPvyyy/7sHBL1jQgt2/fNjtpb2+v/wX7+OOPu3fffbclH1X5rLQmgPLs2bPuzz//ND/j5cuXO8YmrVizgDx8+LCf+LMY8Xk+LTnGUq8aytCKEBhhvskSUufH6eLFi/2MfAvWJCA//PBD/8uVMoD4/PPPuw8//DBVVH9fU4GXL192RBEtgRJm3s+dO7fmN27n8uYA+f3337v79+8n1aErdfbs2WQ5FdisAkQTGaekjDmSTz75JFVs539vDpBHjx71A8Qp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'
</script>

<template>
  <div v-if="svgIcon" class="icon" v-html="svgIcon" />
  <div v-else class="icon">
    <div v-if="!icon" v-html="textIcon" />
    <img
      v-else
      ref="imgRef"
      :data-src="icon"
      :src="def"
      alt=""
      @error="(e) => e.target.src = '/logo.svg'"
    />
  </div>
</template>
