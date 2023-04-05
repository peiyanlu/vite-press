import { Directive } from 'vue'

interface BindingValue {
  src: string;
  filename?: string;
}

const download = ({ src, filename }: BindingValue) => {
  const a = document.createElement('a')
  a.download = filename ?? `vite-press_${ Date.now() }.${ src.split('.').pop() }`
  a.setAttribute('href', src)
  a.setAttribute('style', 'display: none;')
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

const vFileDownload: Directive<HTMLElement, BindingValue> = {
  mounted(el, { value }): void {
    el.addEventListener('click', () => download(value))
  },
}

export default vFileDownload
