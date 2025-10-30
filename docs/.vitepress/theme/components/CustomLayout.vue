<script setup lang="ts">
import SlotDocAfter from '@theme/components/SlotDocAfter.vue'
import SlotDocFooterBefore from '@theme/components/SlotDocFooterBefore.vue'
import { ImagePreviewService } from '@theme/directives/image-preview'
import { getColor } from '@utils/index'
import { StyleProvider, Themes } from '@varlet/ui'
import { useEventListener } from '@vueuse/core'
import { inBrowser, useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { onMounted, provide, watchEffect } from 'vue'


const { isDark } = useData()


watchEffect(() => {
  StyleProvider({
    ...(isDark.value ? Themes.dark : null),
    '--hsl-primary': '226, 55%, 45%',
  })
})

const spawnParticles = (x: number, y: number, count: number = 50) => {
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div')
    const length = 4 + Math.random() * 4
    Object.assign(particle.style, {
      position: 'fixed',
      left: `${ x - length * .5 }px`,
      top: `${ y - length * .5 }px`,
      width: `${ length }px`,
      height: `${ length }px`,
      borderRadius: '50%',
      pointerEvents: 'none',
      background: getColor(),
      zIndex: '99999',
    })
    document.body.appendChild(particle)
    
    const distance = 80 + Math.random() * 40
    const angle = Math.random() * Math.PI * 2
    const destX = Math.cos(angle) * distance
    const destY = Math.sin(angle) * distance
    particle
      .animate(
        [
          { transform: 'translate(0, 0)', opacity: 1 },
          { transform: `translate(${ destX }px, ${ destY }px)`, opacity: 0 },
        ],
        {
          easing: 'ease-out',
          duration: 700 + Math.random() * 300,
        },
      )
      .onfinish = () => particle.remove()
  }
}

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

const doThemeTransition = async (location: { x: number; y: number }, toggleFn: () => void, isDark: boolean) => {
  const style = document.createElement('style')
  style.innerHTML = `
    ::view-transition-old(root),
    ::view-transition-new(root) {
      animation: none;
      mix-blend-mode: normal;
    }
    
    ::view-transition-old(root),
    .dark::view-transition-new(root) {
      z-index: 1;
    }
    
    ::view-transition-new(root),
    .dark::view-transition-old(root) {
      z-index: 9999;
    }
  `
  document.head.appendChild(style)
  
  const enableTransitions = () => 'startViewTransition' in document &&
    window.matchMedia('(prefers-reduced-motion: no-preference)').matches
  
  if (!enableTransitions()) {
    toggleFn()
    return
  }
  
  const transition = document.startViewTransition(async () => {
    toggleFn()
    await Promise.resolve()
  })
  await transition.ready
  
  const { x, y } = location
  const maxRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  )
  const clipPath = [
    `circle(0px at ${ x }px ${ y }px)`,
    `circle(${ maxRadius }px at ${ x }px ${ y }px)`,
  ]
  document.documentElement.animate(
    {
      clipPath: isDark ? clipPath.reverse() : clipPath,
    },
    {
      duration: 300,
      easing: 'ease-in',
      fill: 'forwards',
      pseudoElement: `::view-transition-${ isDark ? 'old' : 'new' }(root)`,
    },
  )
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

useEventListener('click', (e) => {
  spawnParticles(e.clientX, e.clientY)
})

onMounted(() => {
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
