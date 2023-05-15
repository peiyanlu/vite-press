// 公共组件
import ImagePreview from '@theme/components/ImagePreview.vue'
import Live2dWidget from '@theme/components/Live2dWidget.vue'
// 依赖
import { Theme, useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h, nextTick, render } from 'vue'
import { isMobile } from '../common'

/**
 * 样式文件
 */
import './style/index'

/**
 * 渲染
 */
export default <Theme>{
  ...DefaultTheme,
  Layout: () => {
    const { frontmatter, isDark } = useData()
    
    nextTick(() => {
      imagePreviewFn()
      !isMobile() && live2dWidgetFn(isDark.value)
    }).catch(e => console.error(e))
    
    return h(
      DefaultTheme.Layout,
      {
        class: frontmatter.value?.layoutClass,
      },
    )
  },
}

const imagePreviewFn = () => {
  if (!globalThis.document) return
  
  const allImg = document.querySelectorAll('p > img')
  
  allImg.forEach(img => {
    const parent = img.parentElement
    
    if (!parent) return
    
    // 如果 p 下面只有一个 img，则 p 作为 container 渲染预览组件
    // 如果 p 下面有多个 img，则为每个 img 创建 div 作为 container 渲染预览组件，并将 container 添加到 p 中
    let container= parent
    if (parent.childNodes.length > 1) {
      container = document.createElement('div')
      parent.appendChild(container)
    }
    
    const vNode = h(
      ImagePreview,
      {
        src: img.getAttribute('src'),
      },
    )
    
    img.remove()
    
    render(vNode, container)
  })
}

const live2dWidgetFn = (isDark: boolean) => {
  if (!globalThis.document) return
  
  render(h(Live2dWidget, { isDark }), document.body)
}
