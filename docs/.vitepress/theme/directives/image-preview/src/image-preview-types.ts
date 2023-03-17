import type { PropType, ExtractPropTypes } from 'vue';

const imagePreviewProps = {
  url: {
    type: String,
    default: '',
    required: true,
  },
  previewUrlList: {
    type: Array as PropType<string[]>,
    default: () => [],
    required: true,
  },
  zIndex: {
    type: Number,
    required: false,
  },
  backDropZIndex: {
    type: Number,
    required: false,
  },
} as const;

export interface BindingValue {
  custom?: Record<string, unknown>;
  disableDefault?: boolean;
  zIndex?: number;
  backDropZIndex?: number;
  scopeSelector?: string;
}

export type ImagePreviewProps = ExtractPropTypes<typeof imagePreviewProps>;
