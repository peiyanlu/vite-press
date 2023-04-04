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

export interface TextOptions extends BaseOptions {
  drawType: 'text'
  textArr: Array<string>  // 需要展示的文字，多行就多个元素【必填】
  font: string  // 字体样式
  fillStyle: string  // 描边样式
  lineHeight: number// 文字行高
}

export interface ImgOptions extends BaseOptions {
  drawType: 'img'
  src: string
}

export type WaterMaskOptions = TextOptions | ImgOptions
