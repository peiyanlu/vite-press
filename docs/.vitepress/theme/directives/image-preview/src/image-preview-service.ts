import { createApp } from 'vue';
import { ImagePreviewProps } from './image-preview-types';
import imagePreview from './image-preview.vue';


const createComponent = (props: ImagePreviewProps) => createApp(imagePreview, props)

class ImagePreviewService {
  static $body: HTMLElement | null = null;
  static $div: HTMLDivElement | null = null;
  static $id: string = 'vite-press__image-preview'
  // 禁止滚动穿透
  static $overflow = '';
  
  static open(props: ImagePreviewProps): void {
    this.$body = document.body;
    this.$div = document.createElement('div');
    this.$div.setAttribute('id', this.$id)
    this.$overflow = this.$body.style.overflow;
    this.$body.appendChild(this.$div);
    createComponent(props).mount(this.$div);
    
    this.$body.style.setProperty('overflow', 'hidden', 'important');
  }
  
  static close(): void {
    (this.$body ??= document.body).style.setProperty('overflow', this.$overflow);
    this.$overflow = '';
    
    const target = this.$div ?? document.getElementById(this.$id)
    target && this.$body.removeChild(target);
    this.$div = null;
  }
}

export default ImagePreviewService;
