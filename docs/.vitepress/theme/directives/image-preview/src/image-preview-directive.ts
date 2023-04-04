import { Directive } from 'vue'
import ImagePreviewService from './image-preview-service'
import { PreviewHTMLElement, BindingValue, ImagePreviewProps } from './image-preview-types'

const mountedPreviewImages = (props: ImagePreviewProps): void => {
  ImagePreviewService.open({
    url: props.url,
    previewUrlList: props.previewUrlList,
    zIndex: props.zIndex,
    backDropZIndex: props.backDropZIndex,
  })
}

const unmountedPreviewImages = () => {
  ImagePreviewService.close()
}

const getImgByEl = (el: PreviewHTMLElement): Array<string> => {
  let scope: HTMLElement | null = null
  if (el.scopeSelector) {
    scope = document.querySelector(el.scopeSelector)
  }
  
  const target = scope ? scope : el
  
  return [ ...target.querySelectorAll('img') ].map((item: HTMLImageElement) => item.getAttribute('preview-src') || item.getAttribute('src') || '')
}
const handleImg = (e: MouseEvent) => {
  e.stopPropagation()
  const el = e.currentTarget as PreviewHTMLElement
  const target = e.target as PreviewHTMLElement
  if (target?.nodeName?.toLowerCase() === 'img') {
    const urlList = getImgByEl(el)
    const url = target.getAttribute('src')!
    mountedPreviewImages({
      url,
      previewUrlList: urlList,
      zIndex: el?.zIndex,
      backDropZIndex: el?.backDropZIndex,
    })
  }
}

const handleImgByEl = (el: PreviewHTMLElement) => {
  el.addEventListener('click', handleImg)
}

const removeHandle = (el: PreviewHTMLElement) => {
  el.removeEventListener('click', handleImg)
}

const ImagePreviewDirective: Directive<PreviewHTMLElement, BindingValue> = {
  mounted(el, binding): void {
    if (!binding?.value) {
      return handleImgByEl(el)
    }
    
    const { custom, disableDefault, scopeSelector } = binding.value
    
    el.scopeSelector = scopeSelector
    
    if (custom) {
      custom.open = () => {
        const urlList = getImgByEl(el)
        mountedPreviewImages({
          url: urlList?.[0],
          previewUrlList: urlList,
          zIndex: el?.zIndex,
          backDropZIndex: el?.backDropZIndex,
        })
      }
      custom.close = () => unmountedPreviewImages()
    }
    
    if (disableDefault) {
      return
    }
    
    handleImgByEl(el)
  },
  unmounted(): void {
    unmountedPreviewImages()
  },
  updated(el, binding): void {
    el.zIndex = binding.value?.zIndex
    el.backDropZIndex = binding.value?.backDropZIndex
    
    if (binding.value) {
      const { value: { disableDefault }, oldValue } = binding
      const { disableDefault: oldDisableDefault } = oldValue || {}
      
      if (disableDefault !== oldDisableDefault) {
        if (disableDefault) {
          removeHandle(el)
        } else {
          handleImgByEl(el)
        }
      }
    }
  },
}

export default ImagePreviewDirective
