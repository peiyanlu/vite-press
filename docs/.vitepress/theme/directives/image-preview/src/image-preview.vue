<script lang="ts" setup>
import { useNamespace } from '@theme/hooks/useNamespace'
import { computed, onMounted, onUnmounted, PropType, ref, watch } from 'vue'
import icons from './image-preview-icons'
import ImagePreviewService from './image-preview-service'
import Transform from './transform'

const props = defineProps({
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
})

const ns = useNamespace('image-preview')
let transform: Transform | null = null
const index = ref(0)
const url = computed(() => props.previewUrlList[index.value])

const imageStyle = props.zIndex ? { zIndex: props.zIndex } : {}
const bgStyle = props.backDropZIndex ? { zIndex: props.backDropZIndex } : {}

const initTransform = () => {
  const imageElement: HTMLImageElement = document.querySelector(`.${ ns.e('main-image') }`)!
  transform = new Transform(imageElement)
}

const initIndex = () => {
  index.value = props.previewUrlList.findIndex((curUrl: string) => curUrl === props.url)
}

const onPrev = () => {
  index.value = index.value <= 0 ? props.previewUrlList.length - 1 : index.value - 1
  transform?.setZoomOriginal()
}

const onNext = () => {
  index.value = index.value >= props.previewUrlList.length - 1 ? 0 : index.value + 1
  transform?.setZoomOriginal()
}

const onClose = () => {
  ImagePreviewService.close()
}

const onZoomIn = () => transform?.setZoomIn()

const onZoomOut = () => transform?.setZoomOut()

const onRotate = () => transform?.setRotate()

const onZoomBest = () => transform?.setZoomBest()

const onZoomOriginal = () => transform?.setZoomOriginal()

const onKeyDown = (event: KeyboardEvent) => {
  if (event.defaultPrevented) {
    return
  }

  if (event.code === 'Escape') {
    onClose()
  } else if (event.code === 'ArrowLeft') {
    onPrev()
  } else if (event.code === 'ArrowRight') {
    onNext()
  }
}

const initKeyboard = () => {
  document.addEventListener('keydown', onKeyDown, false)
}

const unKeyBoard = () => {
  document.removeEventListener('keydown', onKeyDown, false)
}

onMounted(() => {
  initIndex()
  initTransform()
  initKeyboard()
})
onUnmounted(() => {
  unKeyBoard()
})
const span = `<span>78</span>`
</script>

<template>
  <div :class="ns.b()" :style="imageStyle">
    <!--{/* 预览图 */}-->
    <img :class="ns.e('main-image')" :src="url" alt="" />
    <!--{/* 按钮区 */}-->
    <div :class="ns.e('toolbar')">
      <div :class="ns.e('toolbar-left')">
        <button @click="onPrev" v-html="icons.left" />
        <button>{{ index + 1 }} / {{ props.previewUrlList.length }}</button>
        <button @click="onNext" v-html="icons.right" />
      </div>

      <div :class="ns.e('toolbar-middle')">
        <button @click="onZoomIn" v-html="icons.zoomIn" />
        <button @click="onZoomOut" v-html="icons.zoomOut" />
        <button @click="onRotate" v-html="icons.rotate" />
        <button @click="onZoomOriginal" v-html="icons.best" />
        <button @click="onZoomBest" v-html="icons.reset" />
        <button @click="onZoomBest" v-html="icons.download" />
        <button @click="onZoomBest" v-html="span" />
      </div>

      <div :class="ns.e('toolbar-right')">
        <button @click="onClose" v-html="icons.close" />
      </div>
    </div>
  </div>
  <div :class="ns.e('bg')" :style="bgStyle" />
</template>

<style lang="scss" scoped>
$doc-prefix: VPDoc;
$v-z-index: 1080;

.#{$doc-prefix}-image-preview {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: $v-z-index;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  user-select: none;

  &__main-image {
    width: auto;
    height: auto;
    max-width: 90%;
    max-height: 90%;
    cursor: grab;
    background: #ffffff;
    border-radius: 4px;
    transform: translate3d(0, 0, 0);
    animation: img 0.1s steps(120);
  }

  @keyframes img {
    0% {
      opacity: 0;
      transform: translate3d(0, 0, 0) scale(0.0);
    }
    50% {
      opacity: 0.6;
      transform: translate3d(0, 0, 0) scale(0.5);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0) scale(1.0);
    }
  }

  //@mixin fixed-button() {}
  //@include fixed-button();

  &__toolbar {
    min-width: 460px;
    height: 50px;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 16px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    background: rgba(0, 0, 0, 0.8);
    color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(5px);

    &-left,
    &-middle,
    &-right, {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;

      button {
        width: 36px;
        height: 36px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: none;
        background-color: transparent;
        cursor: pointer;
        outline: 0;
        font-size: 16px;

        &:has(svg) {
          width: 36px;
          height: 36px;
          padding: 6px;
          border-radius: 30%;
          transition: all 0.15s ease;

          &:hover {
            background: rgba(66, 66, 66, 1);
            color: rgba(255, 255, 255, 1);
          }
        }
      }
    }
  }
}

.#{$doc-prefix}-image-preview__bg {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: calc($v-z-index - 1);
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  animation: bg 0.15s ease-in-out;
  transform: translate3d(0, 0, 0);
}
@keyframes bg {
  0% {
    backdrop-filter: blur(0px);
    background: rgba(0, 0, 0, 0);
  }
  50% {
    backdrop-filter: blur(2px);
    background: rgba(0, 0, 0, 0.3);
  }
  100% {
    backdrop-filter: blur(5px);
    background: rgba(0, 0, 0, 0.8);
  }
}
</style>
