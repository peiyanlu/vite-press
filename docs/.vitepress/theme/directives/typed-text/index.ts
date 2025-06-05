import Typed, { TypedOptions } from 'typed.js'
import type { Directive } from 'vue'


interface TypedHoverOptions extends TypedOptions {
  text: string | string[]// 要打字的文本
  once?: boolean // 是否只打字一次
  childSelector?: string | null // 生效的子元素
}

const vTypedText: Directive<HTMLElement, TypedHoverOptions> = {
  mounted(el, binding) {
    if (typeof window === 'undefined') return // SSR 保护
    
    const options = binding.value
    if (!options || !options.text) return
    
    const {
      text,
      once = false,
      typeSpeed = 50,
      showCursor = true,
      autoInsertCss = true,
      ...rest
    } = options
    
    let hasTyped = false
    let typed: Typed | null = null
    
    const target: HTMLElement = options.childSelector
      ? el.querySelector(options.childSelector) ?? el
      : el
    
    const resetContent = () => {
      target.innerText = [ text ].flat().join('\n')
    }
    
    const startTyping = () => {
      if (once && hasTyped) return
      
      hasTyped = true
      target.innerText = ''
      
      typed = new Typed(target, {
        strings: [ text ].flat(),
        typeSpeed,
        showCursor,
        autoInsertCss,
        ...rest,
        onComplete(self: Typed): void {
          self.destroy()
          resetContent()
          
          if (once) {
            el.removeEventListener('mouseenter', startTyping)
          }
        },
      })
    }
    
    el.addEventListener('mouseenter', startTyping)
    
    el.addEventListener('mouseleave', () => {
      typed?.destroy()
      resetContent()
    })
  },
}

export default vTypedText
