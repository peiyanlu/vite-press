<script lang="ts" setup>
import ImageLazyLoad from '@theme/components/ImageLazyLoad.vue'
import vFileDownload from '@theme/directives/file-download'
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
const zoom = ref(1)

const imageStyle = props.zIndex ? { zIndex: props.zIndex } : {}
const bgStyle = props.backDropZIndex ? { zIndex: props.backDropZIndex } : {}

const initTransform = () => {
  const imageElement: HTMLImageElement = document.querySelector(`.${ ns.e('main-image') }`)!
  transform = new Transform(imageElement, {
    callback: args => {
      zoom.value = args as number
    },
  })
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

const onClose = () => ImagePreviewService.close()

const onZoomIn = () => transform?.setZoomIn()

const onZoomOut = () => transform?.setZoomOut()

const onRotate = () => transform?.setRotate()

const onZoomBest = () => transform?.setZoomBest()

const onZoomOriginal = () => transform?.setZoomOriginal()

const onKeyDown = (event: KeyboardEvent) => {
  if (event.defaultPrevented) return

  if (event.code === 'Escape') {
    onClose()
  } else if (event.code === 'ArrowLeft') {
    onPrev()
  } else if (event.code === 'ArrowRight') {
    onNext()
  }
}

const initKeyboard = () => document.addEventListener('keydown', onKeyDown, false)

const unKeyBoard = () => document.removeEventListener('keydown', onKeyDown, false)

const handleSwitch = (i: number) => {
  index.value = i
}

const showThumbnail = ref(false)
const handleModule = () => {
  showThumbnail.value = !showThumbnail.value
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
    <div :class="ns.e('toolbar')">
      <div :class="ns.e('toolbar-left')">
        <button :disabled="index === 0" @click="onPrev" v-html="icons.left" />
        <button><span>{{ index + 1 }}/{{ props.previewUrlList.length }}</span></button>
        <button :disabled="index === props.previewUrlList?.length - 1" @click="onNext" v-html="icons.right" />
        <button v-if="props.previewUrlList?.length > 2" @click="handleModule"><i v-html="icons.modular" /></button>
      </div>

      <div :class="ns.e('toolbar-middle')">
        <button :disabled="zoom >= 2.5" @click="onZoomIn" v-html="icons.zoomIn" />
        <button><span>{{ Math.round(zoom * 100) }}%</span></button>
        <button :disabled="zoom <= 0.2" @click="onZoomOut" v-html="icons.zoomOut" />
        <button @click="onRotate" v-html="icons.rotate" />
        <button @click="onZoomOriginal" v-html="icons.best" />
        <button @click="onZoomBest" v-html="icons.reset" />
        <button v-file-download="{src: url}" v-html="icons.download" />
      </div>

      <div :class="ns.e('toolbar-right')">
        <button @click="onClose" v-html="icons.close" />
      </div>
    </div>
    <!--{/* 缩略图 */}-->
    <Transition name="thumbnail">
      <div
        v-if="showThumbnail"
        :class="ns.e('thumbnail')"
      >
        <template v-for="(item, i) of props.previewUrlList" :key="item">
          <div
            :class="[ns.e('thumbnail-item'),  i === index ?'active' : '']"
            @click="handleSwitch(i)"
          >
            <image-lazy-load :src="item" />
            <span>{{ i + 1 }}</span>
          </div>
        </template>
      </div>
    </Transition>
  </div>
  <div :class="ns.e('bg')" :style="bgStyle" />
</template>

<style lang="scss" scoped>
.VPDoc-image-preview {
  position: fixed;
  z-index: 1080;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  user-select: none;

  &__main-image {
    width: auto;
    max-width: 90%;
    height: auto;
    max-height: 90%;
    cursor: grab;
    transform: translate3d(0, 0, 0);
    animation: img 0.1s steps(120);
    border-radius: 4px;
    background: #ffffff;
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

  --toolbar-height: 42px;

  &__toolbar {
    position: fixed;
    z-index: 2;
    top: 0;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: var(--toolbar-height);
    padding: 0 8px;
    transform: translateX(-50%);
    color: rgba(255, 255, 255, 0.8);
    border-radius: 8px;
    background: rgba(0, 0, 0, 0.8);
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.3);
    gap: 24px;
    backdrop-filter: blur(5px);

    &-left,
    &-middle,
    &-right {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      gap: 8px;

      --size: 32px;

      button {
        font-size: 12px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: var(--size);
        height: var(--size);
        cursor: pointer;
        border: none;
        outline: 0;
        background-color: transparent;

        &:has(svg) {
          overflow: hidden;
          transition: all 0.15s ease;
          border-radius: 30%;

          &:hover:not(:disabled) {
            color: rgba(255, 255, 255, 1);
            background: rgba(66, 66, 66, 1);
          }
        }

        &:has(span) {
          display: inline-flex;
          min-width: 48px;
          margin-right: -8px;
          margin-left: -8px;
          cursor: auto;
          white-space: nowrap;
        }

        &:has(i > svg) {
          display: inline-flex;
          width: var(--size);
          margin-left: -10px;
        }

        :deep(svg) {
          width: var(--size);
          height: var(--size);
          padding: 6px;
          border-radius: 30%;
          aspect-ratio: 1 / 1;
        }

        &:disabled {
          cursor: not-allowed;
          filter: brightness(0.5);
        }
      }
    }
  }

  &__thumbnail {
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    display: grid;
    overflow-y: overlay;
    width: 100%;
    min-height: 120px;
    max-height: max(33%, 260px);
    transform: translate3d(0, 0, 0);
    background: rgba(0, 0, 0, 0.8);
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));
    grid-gap: 4px;
    backdrop-filter: blur(3px);

    &-item {
      position: relative;
      display: block;
      overflow: hidden;
      width: 100%;
      cursor: pointer;
      background: white;
      aspect-ratio: 5 / 4;
      object-fit: fill;

      img {
        object-fit: cover;
      }

      span {
        font-size: 12px;
        line-height: 1;
        position: absolute;
        bottom: 0;
        left: 0;
        display: block;
        min-width: 20px;
        padding: 4px 4px;
        text-align: center;
        color: white;
        border-radius: 0 10px 0 0;
        background: rgba(0, 0, 0, 0.6);
        text-shadow: 0 0 white;
      }

      &.active {
        &:before {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          content: "";
          border: 3px solid var(--vp-c-green);
          background: var(--vp-c-green-dimm-2);
        }
      }
    }
  }

  .thumbnail-enter-active {
    animation: show 0.3s ease-in-out;
  }

  .thumbnail-leave-active {
    animation: show 0.8s ease-in-out reverse;
  }

  @keyframes show {
    0% {
      bottom: -100%;
    }
    50% {
      bottom: -50%;
    }
    100% {
      bottom: 0;
    }
  }
}

.VPDoc-image-preview__bg {
  position: fixed;
  z-index: calc(1080 - 1);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translate3d(0, 0, 0);
  animation: bg 0.15s ease-in-out;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
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

@media (max-width: 750px) {
  .VPDoc-image-preview {
    --toolbar-height: 36px;

    &__toolbar {
      padding: 0 4px;
      border-radius: 4px;
      gap: 4px;

      &-left,
      &-middle,
      &-right {
        gap: 4px;

        --size: 26px;

        button {
          &:has(span) {
            min-width: 38px;
            margin-right: -6px;
            margin-left: -6px;
          }

          &:has(i > svg) {
            margin-left: -8px;
          }

          :deep(svg) {
            padding: 4px;
          }
        }
      }
    }
  }
}
</style>
