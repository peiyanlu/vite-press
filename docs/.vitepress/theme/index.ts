// 组件/公共组件
import ImageLazyLoad from '@theme/components/ImageLazyLoad.vue';
import Live2dWidget from '@theme/components/Live2dWidget.vue'
import SvgIcon from '@theme/components/SvgIcon.vue'
import { ImagePreviewService } from '@theme/directives/image-preview';
import { useEventListener } from '@vueuse/core';
import 'virtual:svg-icons-names'
import 'virtual:svg-icons-register'
import GiscusComment from '@theme/components/GiscusComment.vue'

// 依赖
import { Theme, useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h, nextTick } from 'vue'

// 样式文件
import './style/index'


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
        'doc-after': () => h(GiscusComment),
      },
    )
  },
  enhanceApp(ctx) {
    ctx.app.component('svg-icon', SvgIcon)
    ctx.app.component('image-lazy-load', ImageLazyLoad)
  },
}

const imagePreviewFn = () => {
  if (!globalThis.document) return
  
  const scope = document.querySelector('.VPDoc .main')
  if (!scope) return
  
  const getUrl = (img: HTMLImageElement) => img.getAttribute('src') || '';
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

