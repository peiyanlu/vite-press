interface Options {
  transformX?: number;
  transformY?: number;
  zoom?: number;
  rotate?: number;
  callback: (...args: unknown[]) => void
}

export default class Transform {
  private readonly el: HTMLImageElement
  
  private oTransformX = 0
  private oTransformY = 0
  private transformX: number
  private transformY: number
  private zoom: number
  private rotate: number
  
  private STEP = 0.25
  private MIN_SCALE = 0.25
  private MAX_SCALE = 10
  private TRANSFORM_X = 0
  private TRANSFORM_Y = 0
  private ZOOM = 1
  private ROTATE = 0
  private readonly callback?: (...args: unknown[]) => void
  
  constructor(el: HTMLImageElement, options?: Options) {
    this.el = el
    
    this.transformX = options?.transformX || this.TRANSFORM_X
    this.transformY = options?.transformY || this.TRANSFORM_Y
    this.zoom = options?.zoom || this.ZOOM
    this.rotate = options?.rotate || this.ROTATE
    this.callback = options?.callback
    
    this.handleDefaultDraggable()
    this.onDraggable()
    this.onMouseWheel()
  }
  
  handleDefaultDraggable(): void {
    document.body.ondragstart = (ev) => {
      ev.returnValue = false
      ev.preventDefault()
      return false
    }
  }
  
  onDraggable(): void {
    this.el.onmousedown = (e: MouseEvent) => {
      const ox = e.clientX
      const oy = e.clientY
      document.onmousemove = (e1: MouseEvent) => {
        const disX = e1.clientX - ox
        const disY = e1.clientY - oy
        this.transformX = this.oTransformX + disX
        this.transformY = this.oTransformY + disY
        this.el.style.cursor = 'grabbing'
        this.setPosition()
      }
    }
    document.onmouseup = () => {
      document.onmousemove = null
      this.oTransformX = this.transformX
      this.oTransformY = this.transformY
      this.el.style.cursor = 'grab'
    }
  }
  
  onMouseWheel(): void {
    const handleWheel = this.throttle(this.setMouseWheel, 100)
    
    this.el.onwheel = (e) => {
      const value: number = e.deltaY || e.detail
      handleWheel(value)
    }
  }
  
  throttle(fn: (...args: any[]) => void, t: number) {
    let timer: NodeJS.Timeout | null = null
    return (...args: unknown[]) => {
      if (!timer) {
        timer = setTimeout(() => {
          timer = null
          fn.apply(this, args)
        }, t)
      }
    }
  }
  
  setMouseWheel(value: number): void {
    if (value < 0) {
      if (this.zoom >= this.MAX_SCALE) {
        this.el.style.cursor = 'not-allowed'
        return
      }
      this.el.style.cursor = 'zoom-in'
      this.setZoomIn(this.STEP)
    } else {
      if (this.zoom <= this.MIN_SCALE) {
        this.el.style.cursor = 'not-allowed'
        return
      }
      this.el.style.cursor = 'zoom-out'
      this.setZoomOut(this.STEP)
    }
    this.setPosition()
  }
  
  setZoomIn(step = this.STEP): void {
    this.zoom = Math.min(this.MAX_SCALE, this.zoom + step)
    this.setPosition()
    this.callback?.(this.zoom)
  }
  
  setZoomOut(step = this.STEP): void {
    this.zoom = Math.max(this.MIN_SCALE, this.zoom - step)
    this.setPosition()
    this.callback?.(this.zoom)
  }
  
  setZoomBest(): void {
    const isEven = (this.rotate / 0.25) % 2 === 0
    
    const { clientWidth: w, clientHeight: h } = this.el
    const { clientWidth: W = 0, clientHeight: H = 0 } = this.el.parentElement || {}
    
    const minmax = (...arg: number[]) => ([ Math.min(...arg), Math.max(...arg) ])
    
    const [ minE, maxE ] = minmax(w, h)
    const [ minP, maxP ] = minmax(W - 32, H - 32)
    
    const ratioP = +(W / H).toFixed(4)
    const ratioE = +(isEven ? w / h : h / w).toFixed(4)
    
    const scale = (ratioP > 1) && (ratioE > 1)
      ? ratioP > ratioE
        ? minP / minE
        : maxP / maxE
      : ratioP < ratioE
        ? ratioE > 1
          ? 1
          : minP / minE
        : ratioP > 1
          ? minP / maxE
          : minP / minE
    
    this.transformX = this.TRANSFORM_X
    this.transformY = this.TRANSFORM_Y
    this.zoom = Math.min(this.MAX_SCALE, scale)
    this.setPosition()
    this.callback?.(this.zoom)
  }
  
  setZoomOriginal(): void {
    this.reset()
    this.setPosition()
  }
  
  setRotate(): void {
    this.rotate += 0.25
    this.setPosition()
  }
  
  reset(): void {
    this.transformX = this.TRANSFORM_X
    this.transformY = this.TRANSFORM_Y
    this.oTransformX = this.transformX
    this.oTransformY = this.transformY
    this.zoom = this.ZOOM
    this.callback?.(this.zoom)
  }
  
  setPosition(): void {
    this.el.style.transform = `translate(${ this.transformX }px, ${ this.transformY }px) scale(${ this.zoom }) rotate(${ this.rotate }turn)`
  }
}
