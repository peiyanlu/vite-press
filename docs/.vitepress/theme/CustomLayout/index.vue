<script setup lang="ts">
import { ImagePreviewService } from '@theme/directives/image-preview'
import { StyleProvider, Themes } from '@varlet/ui'
import { useEventListener } from '@vueuse/core'
import { inBrowser, useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { onMounted, provide, watchEffect } from 'vue'
import { doThemeTransition } from './doThemeTransition'
import SlotDocAfter from './SlotDocAfter.vue'
import SlotDocFooterBefore from './SlotDocFooterBefore.vue'
import { createParticleSystem } from './spawnParticles'


const { isDark } = useData()


watchEffect(() => {
  if (inBrowser) {
    StyleProvider({
      ...(isDark.value ? Themes.dark : null),
      '--hsl-primary': '226, 55%, 45%',
    })
  }
})


const imagePreviewFn = () => {
  if (!inBrowser) return
  
  const scope = document.querySelector('.VPDoc .main')
  if (!scope) return
  
  const getUrl = (img: HTMLImageElement) => img.getAttribute('src') || ''
  const list = [ ...scope?.querySelectorAll('img') ].map(el => getUrl(el))
  
  document
    .querySelectorAll<HTMLImageElement>('p > img')
    .forEach((img) => {
      img.setAttribute('style', 'cursor: pointer;')
      useEventListener(img, 'click', () => {
        ImagePreviewService.open({
          url: getUrl(img),
          previewUrlList: list,
        })
      })
    })
}

provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  await doThemeTransition(
    { x, y },
    () => {
      isDark.value = !isDark.value
    },
    !isDark.value,
  )
})

onMounted(() => {
  const { spawnParticles } = createParticleSystem()
  useEventListener('click', (e) => {
    spawnParticles(e.clientX, e.clientY)
  })
  
  imagePreviewFn()
})
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-after>
      <SlotDocAfter />
    </template>
    
    <template #doc-footer-before>
      <SlotDocFooterBefore />
    </template>
    
    <template #layout-bottom></template>
  </DefaultTheme.Layout>
</template>

<style>
.VPSwitchAppearance {
  width: 22px !important;
  
  & .check {
    top: calc(3px / 2);
    left: calc(3px / 2);
    transform: none !important;
  }
}
</style>
