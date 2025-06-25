<template>
  <div ref="wordCloudRef" class="word-cloud" />
</template>

<script lang="ts" setup>
import { Datum, WordCloud } from '@antv/g2plot'
import type { DocData } from '@theme/data/docs.data'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { onBeforeUnmount, onMounted, useTemplateRef } from 'vue'
import { tags } from './archive'


const breakpoints = useBreakpoints(breakpointsTailwind)
const smAndSmaller = breakpoints.smaller('sm')


const emit = defineEmits<{
  getSelected: [ tag: string | number, data: DocData[] ]
}>()


const useWordCloud = <T extends Record<string, string | number>>(
  dom: HTMLElement,
  data: T[],
  onClickCallback?: (data: T) => void,
) => {
  const wordCloud = new WordCloud(dom, {
    height: smAndSmaller.value ? 200 : 300,
    data: data,
    wordField: 'name',
    weightField: 'value',
    colorField: 'name',
    wordStyle: {
      rotation: [ -Math.PI / 2, Math.PI / 2 ],
      rotationSteps: 4,
      fontFamily: 'Inter var',
      fontSize: smAndSmaller.value ? [ 12, 18 ] : [ 18, 28 ],
      padding: 8,
    },
    spiral: 'rectangular',
    tooltip: {
      formatter: (datum: Datum) => {
        return { name: datum.text + ' ', value: datum.value + ' 篇' }
      },
    },
  })
  wordCloud.render().catch(err => console.error(err))
  
  const onClick = (event: { data: { data: { datum: T; }; }; }) => {
    onClickCallback?.(event.data.data.datum)
  }
  wordCloud.on('element:click', onClick)
  
  // 给 tooltip 添加点击事件
  wordCloud.on('tooltip:show', () => {
    dom?.setAttribute('style', 'cursor: pointer !important')
  })
  
  wordCloud.on('tooltip:hide', () => {
    dom?.setAttribute('style', 'cursor: default')
  })
  
  onBeforeUnmount(() => wordCloud.destroy())
}


const initWordCloud = (tags: Record<string, DocData[]>) => Object.keys(tags)
  .map<Record<string, string | number>>(key => {
    return {
      name: key,
      value: tags[key].length,
    }
  })

const wordCloudRef = useTemplateRef('wordCloudRef')
onMounted(() => {
  if (wordCloudRef.value) {
    useWordCloud(
      wordCloudRef.value,
      initWordCloud(tags),
      (data) => {
        emit('getSelected', data.name, tags[data.name])
      },
    )
  }
})
</script>

<style lang="scss">
.word-cloud {
  canvas {
    cursor: inherit !important;
  }
  
  .g2-tooltip-value {
    margin-left: 6px !important;
  }
}

html.dark {
  .word-cloud {
    .g2-tooltip {
      color: rgb(166, 166, 166) !important;
      background-color: rgb(31, 31, 31) !important;
      box-shadow: rgba(0, 0, 0, 0.5) 0 2px 4px !important;
    }
  }
}
</style>
