import { nextTick, ObjectDirective } from 'vue'

interface BaseOptions {
  maxWidth: number// 水平时最大宽度
  minWidth: number // 水平时最小宽度
  deg: number // 旋转的角度 0至-90之间
  marginRight: number// 每个水印的右间隔
  marginBottom: number// 每个水印的下间隔
  left: number// 整体背景距左边的距离
  top: number // 整体背景距上边的距离
  opacity: number  // 文字透明度
  position: 'fixed' | 'absolute'// 容器定位方式（值为absolute时，需要指定一个父元素非static定位）
  drawType: 'text' | 'img' // 使用文字还是图片
}

interface TextOptions extends BaseOptions {
  drawType: 'text'
  textArr: Array<string>  // 需要展示的文字，多行就多个元素【必填】
  font: string  // 字体样式
  fillStyle: string  // 描边样式
  lineHeight: number// 文字行高
}

interface ImgOptions extends BaseOptions {
  drawType: 'img'
  src: string
}

export type WaterMaskOptions = TextOptions | ImgOptions

// 将绘制好的canvas转成图片
const insertToDocument = (el: HTMLElement, imgData: string, settings: WaterMaskOptions) => {
  const id = 'vite-press__water-mask'
  
  const target = document.getElementById(id)
  if (target) return target
  
  const div = document.createElement('div')
  div.setAttribute('id', id)
  
  const { position, opacity, left, top } = settings
  const style = {
    position: position,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: 9999,
    pointerEvents: 'none',
    opacity: opacity,
    backgroundImage: `url( ${ imgData } )`,
    backgroundPosition: `${ left }px ${ top }px`,
    backgroundRepeat: 'repeat',
  }
  
  Object.assign(div.style, style)
  el.appendChild(div)
  
  return div
}

const observerWaterMaskDom = (node: Node, style: string | null)=>{
  // 禁止修改水印
  const observer = new MutationObserver((mutations: MutationRecord[]) => {
    mutations.forEach(mutation => {
      switch (mutation.type) {
        case 'childList':
          // 删除节点，直接从删除的节点数组中添加回来
          mutation.removedNodes.forEach(node => mutation.target?.appendChild(node))
          break
        case 'attributes':
          const target = mutation.target as HTMLElement
          if (target.getAttribute('style') !== style) {
            ;(mutation.target as HTMLElement).setAttribute('style', style ?? '')
          }
          break
        default:
          break
      }
    })
  })
  
  observer.observe(node, {
    attributes: true,
    childList: true,
    subtree: true,
    attributeOldValue: true,
  })
}

const drawText = async (context2D: CanvasRenderingContext2D, settings: TextOptions) => {
  // 寻找切换断点
  const findBreakPoint = (text: string, width: number, context: CanvasRenderingContext2D) => {
    let min = 0
    let max = text.length - 1
    while (min <= max) {
      // 二分字符串中点
      const middle = Math.floor((min + max) / 2)
      // measureText()方法是基于当前字型来计算字符串宽度的
      const middleWidth = context.measureText(text.substring(0, middle)).width
      const oneCharWiderThanMiddleWidth = context.measureText(text.substring(0, middle + 1)).width
      // 判断当前文本切割是否超了的临界点
      if (middleWidth <= width && oneCharWiderThanMiddleWidth > width) {
        return middle
      }
      // 如果没超继续遍历查找
      if (middleWidth < width) {
        min = middle + 1
      } else {
        max = middle - 1
      }
    }
    return -1
  }
  
  // 根据最大宽度切割文字
  const breakLinesForCanvas = (context: CanvasRenderingContext2D, text: string, width: number, font: string) => {
    const result = []
    let maxWidth = width
    
    context.font = font
    
    // 查找切割点
    let breakPoint = findBreakPoint(text, width, context)
    
    while (breakPoint !== -1) {
      // 切割点前的元素入栈
      result.push(text.substring(0, breakPoint))
      // 切割点后的元素
      text = text.substring(breakPoint)
      maxWidth = width
      // 查找切割点后的元素是否还有切割点
      breakPoint = findBreakPoint(text, width, context)
    }
    
    // 如果切割的最后文本还有文本就push
    if (text) {
      result.push(text)
      const lastTextWidth = context.measureText(text).width
      maxWidth = Math.max(width, lastTextWidth)
    }
    
    return {
      textArr: result,
      maxWidth: maxWidth,
    }
  }
  
  const { textArr, maxWidth, font, fillStyle, lineHeight } = settings
  
  // 切割超过最大宽度的文本并获取最大宽度
  let wordBreakTextArr: Array<string> = []
  const maxWidthArr: Array<number> = []
  
  // 遍历水印文本数组，判断每个元素的长度
  textArr.forEach((text) => {
    const { textArr: tr, maxWidth: mw } = breakLinesForCanvas(context2D, text, maxWidth, font)
    // 合并超出最大宽度的分割数组
    wordBreakTextArr = wordBreakTextArr.concat(tr)
    // 最大宽度
    maxWidthArr.push(mw)
  })
  
  // 根据需要切割结果，动态改变canvas的宽和高
  const width = Math.max(...maxWidthArr)
  const height = wordBreakTextArr.length * lineHeight
  
  const execute = () => {
    // 宽高重置后，样式也需重置
    context2D.font = font
    context2D.fillStyle = fillStyle
    context2D.textBaseline = 'hanging' // 默认是alphabetic,需改基准线为贴着线的方式
    
    // 绘制文本
    wordBreakTextArr.forEach((text, index) => {
      context2D.fillText(text, 0, lineHeight * index)
    })
  }
  
  return {
    width,
    height,
    execute,
  }
}
const drawImage = async (context2D: CanvasRenderingContext2D, settings: ImgOptions) => {
  const createImg = (src: string) => {
    return new Promise<HTMLImageElement>((resolve) => {
      const img = new Image()
      img.src = src
      img.onload = () => resolve(img)
    })
  }
  
  const { minWidth, maxWidth, src } = settings
  
  const image = await createImg(src)
  const { clientWidth, clientHeight } = image
  const scale = clientWidth / clientHeight
  image.width = Math.max(Math.min(clientWidth, maxWidth), minWidth)
  image.height = image.width * scale
  
  const execute = () => {
    context2D.drawImage(image, 0, 0)
  }
  
  return {
    width: image.width,
    height: image.height,
    execute,
  }
}

const createWaterMaskImg = async (canvas: HTMLCanvasElement, settings: WaterMaskOptions) => {
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  
  const { width, height, execute } = settings.drawType === 'text'
    ? await drawText(ctx, settings)
    : await drawImage(ctx, settings)
  
  const canvasNew = updateCanvas(canvas, width, height, settings)
  
  execute()
  
  return canvas2img(canvasNew)
}
const canvas2img = (canvas: HTMLCanvasElement) => {
  const img = canvas.toDataURL('image/png')
  
  canvas.parentNode?.removeChild(canvas)
  
  return img
}
const createCanvas = () => {
  const canvasElement = document.createElement('canvas')
  canvasElement.style.display = 'none'
  document.body.appendChild(canvasElement)
  return canvasElement
}
const updateCanvas = (canvas: HTMLCanvasElement, width: number, height: number, settings: WaterMaskOptions) => {
  const { deg, marginRight, marginBottom } = settings
  
  const degToPI = (Math.PI * deg) / 180
  const absDeg = Math.abs(degToPI)
  // 根据旋转后的矩形计算最小画布的宽高
  const hSinDeg = height * Math.sin(absDeg)
  const hCosDeg = height * Math.cos(absDeg)
  const wSinDeg = width * Math.sin(absDeg)
  const wCosDeg = width * Math.cos(absDeg)
  
  canvas.width = Math.round(hSinDeg + wCosDeg + marginRight)
  canvas.height = Math.round(wSinDeg + hCosDeg + marginBottom)
  
  // 移动并旋转画布
  const ctx = canvas.getContext('2d')
  ctx?.translate(0, wSinDeg)
  ctx?.rotate(degToPI)
  
  return canvas
}

const defaultSettings: WaterMaskOptions = {
  textArr: [ 'vite-press', '开发笔记' ],
  font: '200 12px Helvetica',
  fillStyle: 'rgba(170,170,170,0.5)',
  maxWidth: 200,
  minWidth: 120,
  lineHeight: 16,
  deg: -45,
  marginRight: 120,
  marginBottom: 40,
  left: 20,
  top: 20,
  opacity: .75,
  position: 'absolute',
  drawType: 'text',
}

const WaterMask: ObjectDirective<HTMLElement, WaterMaskOptions> = {
  async beforeMount(el: HTMLElement, { value }) {
    const settings: WaterMaskOptions = { ...defaultSettings, ...value }
    const canvas = createCanvas()
    const img = await createWaterMaskImg(canvas, settings)
    const dom = insertToDocument(el, img || '', settings) // 转化图像
    
    observerWaterMaskDom(el, dom.getAttribute('style'))
  },
}
export default WaterMask
