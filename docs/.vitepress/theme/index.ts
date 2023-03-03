import { Theme, useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'

// 样式文件
import './style/index'

// 公共组件


export default <Theme>{
  ...DefaultTheme,
  Layout: () => {
    // 获取 frontmatter
    const { frontmatter } = useData()
    
    return h(DefaultTheme.Layout, {
      /* 添加自定义 class */
      class: frontmatter.value?.layoutClass
    })
  },
  enhanceApp({ app }) {
    // app.component()
  },
}
