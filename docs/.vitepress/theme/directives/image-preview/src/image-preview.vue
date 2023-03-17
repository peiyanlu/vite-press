<script lang="ts" setup>
import { useNamespace } from '@theme/hooks/useNamespace'
import { computed, onMounted, onUnmounted, PropType, ref } from 'vue'
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
}

const onNext = () => {
  index.value = index.value >= props.previewUrlList.length - 1 ? 0 : index.value + 1
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
</script>

<template>
  <div :class="ns.b()" :style="imageStyle">
    <!--{/* 预览图 */}-->
    <img :class="ns.e('main-image')" :src="url" alt="" />
    <!--{/* 按钮区 */}-->
    <button :class="ns.e('close-btn')" @click="onClose" v-html="icons.close" />
    <button :class="ns.e('arrow-left')" @click="onPrev" v-html="icons.left" />
    <button :class="ns.e('arrow-right')" @click="onNext" v-html="icons.right" />
    <!--{/* 底部固定区 */}-->
    <div :class="ns.e('toolbar')">
      <button @click="onZoomIn" v-html="icons.zoomIn" />
      <button @click="onZoomOut" v-html="icons.zoomOut" />
      <button @click="onRotate" v-html="icons.rotate" />
      <button @click="onPrev" v-html="icons.left" />
      <div :class="ns.e('index')">{{ index + 1 }}:{{ props.previewUrlList.length }}</div>
      <button @click="onNext" v-html="icons.right" />
      <button @click="onZoomBest" v-html="icons.reset" />
      <button @click="onZoomOriginal" v-html="icons.best" />
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
    margin-top: -20px;
    cursor: grab;
    background: #ffffff;
    box-shadow: 0 0 20px 2px var(--vp-c-text-inverse-3);
    border-radius: 4px;
  }

  @mixin fixed-button() {
    position: fixed;
    z-index: $v-z-index;
    cursor: pointer;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: none;
    background: var(--vp-c-text-inverse-2);
    box-shadow: 0 0 6px 0 var(--vp-c-text-inverse-3);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--vp-c-text-2);
    transition: all 0.15s ease-in-out;
    backdrop-filter: blur(10px);

    &:hover {
      background: var(--vp-c-text-inverse-1);
      color: var(--vp-c-text-1);
    }

    :deep(svg) {
      height: 18px;
    }
  }

  &__close-btn {
    @include fixed-button();

    top: 15px;
    right: 20px;
  }

  &__arrow-left {
    @include fixed-button();

    top: 50%;
    left: 20px;
    transform: translateY(-50%);
  }

  &__arrow-right {
    @include fixed-button();

    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  &__toolbar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background: var(--vp-c-text-inverse-2);
    box-shadow: 0 0 6px 0 var(--vp-c-text-inverse-3);
    color: var(--vp-c-text-2);
    backdrop-filter: blur(10px);

    button {
      display: inline-flex;
      width: 24px;
      height: 24px;
      align-items: center;
      justify-content: center;
      border: none;
      background-color: transparent;
      cursor: pointer;
      outline: 0;
      padding: 0;
    }

    .#{$doc-prefix}-image-preview__index {
      display: inline-flex;
      width: 100px;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    & > * {
      transition: color 0.15s ease-in;

      &:hover {
        color: var(--vp-c-text-1);
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
  //background: var(--vp-c-text-3);
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
}
</style>
