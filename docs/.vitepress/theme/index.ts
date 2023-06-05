// 组件/公共组件
import Live2dWidget from '@theme/components/Live2dWidget.vue'
import SlotDocAfter from '@theme/components/SlotDocAfter.vue'
// 依赖
import { ImagePreviewService } from '@theme/directives/image-preview'
import { useEventListener } from '@vueuse/core'
import { useRegisterSW } from 'virtual:pwa-register/vue'
import 'virtual:svg-icons-names'
import 'virtual:svg-icons-register'
import { Theme, useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { AsyncComponentLoader, defineAsyncComponent, h, nextTick } from 'vue'
// 样式文件
import './style/index'


try {
  useRegisterSW()
} catch ( e ) {

}


// 渲染
export default <Theme>{
  ...DefaultTheme,
  Layout: () => {
    const { frontmatter } = useData()
    
    nextTick(() => {
      imagePreviewFn()
    }).catch(e => console.error(e))
    
    return h(
      DefaultTheme.Layout,
      {
        class: frontmatter.value?.layoutClass,
      },
      {
        'layout-bottom': () => h(Live2dWidget),
        'doc-after': () => h(SlotDocAfter),
      },
    )
  },
  enhanceApp(ctx) {
    const components: Record<string, AsyncComponentLoader> = import.meta.glob('./components/global/*.vue')
    Object
      .entries(components)
      .forEach(([ key, value ]) => {
        const name = key.split('/').pop()?.split('.').shift() as string
        ctx.app.component(name, defineAsyncComponent(value))
      })
  },
}

const imagePreviewFn = () => {
  const scope = globalThis.document?.querySelector('.VPDoc .main')
  if (!scope) return
  
  const getUrl = (img: HTMLImageElement) => img.getAttribute('src') || ''
  const list = [ ...scope?.querySelectorAll('img') ].map(el => getUrl(el))
  
  globalThis.document
    ?.querySelectorAll<HTMLImageElement>('p > img')
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

