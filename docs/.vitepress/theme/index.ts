import 'virtual:svg-icons-names'
import 'virtual:svg-icons-register'
import { Theme, useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { AsyncComponentLoader, defineAsyncComponent, h, nextTick } from 'vue'
import './style/index'
import CustomLayout from './CustomLayout/index.vue'


export default {
  extends: DefaultTheme,
  Layout: () => {
    const { frontmatter } = useData()
    
    return h(
      CustomLayout,
      {
        class: [ frontmatter.value?.layoutClass, 'test' ],
      },
      {},
    )
  },
  async enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    
    await nextTick()
    
    const components: Record<string, AsyncComponentLoader> = import.meta.glob('./components/global/*.vue')
    Object
      .entries(components)
      .forEach(([ key, value ]) => {
        const name = key.split('/').at(-1)?.split('.').at(0) as string
        ctx.app.component(name, defineAsyncComponent(value))
      })
  },
} satisfies Theme


