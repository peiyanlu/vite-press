// 公共组件
import ImagePreview from '@theme/components/ImagePreview.vue'
import { Theme, useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { createVNode, h, nextTick, render } from 'vue'

// 样式文件
import './style/index'


export default <Theme>{
  ...DefaultTheme,
  Layout: () => {
    const { frontmatter } = useData()
    
    nextTick(imagePreviewFn).catch(e => console.error(e))
    
    return h(
      DefaultTheme.Layout,
      {
        class: frontmatter.value?.layoutClass,
      },
    )
  },
  enhanceApp({ app, router, siteData }) {
  
  },
  setup() {
  
  },
}

const imagePreviewFn = () => {
  const allImg = document.querySelectorAll('p>img')
  
  allImg.forEach(img => {
    const p = img.parentElement

    if (!p) return

    let container
    if (p.childNodes.length > 1) {
      container = document.createElement('div')
      p.appendChild(container)
    } else {
      container = p
    }

    const vNode = createVNode(
      ImagePreview,
      {
        src: img.getAttribute('src'),
      },
    )

    img.remove()

    render(vNode, container)
  })
}
