/// <reference types="vite/client" />

export {}

declare global {
  interface NodeJS {
    Gitalk?: any;
    jinrishici?: any;
  }
  
  interface Window {
    Gitalk: any
    jinrishici: any
  }
  
  interface globalThis {
    Gitalk: any
    jinrishici: any
  }
}
