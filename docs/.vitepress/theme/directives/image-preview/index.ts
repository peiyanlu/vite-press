import type { App } from 'vue'
import vImagePreviewDirective from './src/image-preview-directive';
import ImagePreviewService from './src/image-preview-service';


export * from './src/image-preview-types';

export { vImagePreviewDirective, ImagePreviewService };

export default {
  title: 'ImagePreview 图片预览',
  install(app: App): void {
    app.directive('image-preview', vImagePreviewDirective);
    app.config.globalProperties.$imagePreviewService = ImagePreviewService;
  },
};
