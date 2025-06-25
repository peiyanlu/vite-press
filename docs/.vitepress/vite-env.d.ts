/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.md' {
  import type { PageData } from 'vitepress'
  import type { Component } from 'vue'
  
  const component: Component
  const __pageData: PageData
  
  export default component
  export { __pageData }
}
