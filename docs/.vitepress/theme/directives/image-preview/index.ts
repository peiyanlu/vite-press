import type { App } from 'vue'
import ImagePreviewDirective from './src/image-preview-directive';
import ImagePreviewService from './src/image-preview-service';

export * from './src/image-preview-types';

export { ImagePreviewDirective, ImagePreviewService };

export default {
  title: 'ImagePreview 图片预览',
  install(app: App): void {
    app.directive('image-preview', ImagePreviewDirective);
    app.config.globalProperties.$imagePreviewService = ImagePreviewService;
  }
};
