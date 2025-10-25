<template>
  <div ref="wordCloudRef" />
</template>

<script lang="ts" setup>
import { Chart } from '@antv/g2'
import type { DocData } from '@theme/data/docs.data'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { onBeforeUnmount, onMounted, useTemplateRef } from 'vue'
import { tags } from './archive'


const breakpoints = useBreakpoints(breakpointsTailwind)
const smAndSmaller = breakpoints.smaller('sm')


const emit = defineEmits<{
  getSelected: [ tag: string | number, data: DocData[] ]
}>()


interface WordCloudData {
  text: string
  value: string | number
}

const useWordCloud = <T extends WordCloudData>(
  dom: HTMLElement,
  data: T[],
  onClickCallback?: (data: T) => void,
) => {
  const isSmaller = smAndSmaller.value
  
  const chart = new Chart({
    container: dom,
    autoFit: true,
    theme: 'classicDark',
    height: isSmaller ? 200 : 300,
    padding: 0,
    clip: false,
  })
  
  chart
    .wordCloud()
    .legend(false)
    .data(data)
    .layout({
      spiral: 'archimedean',
      font: 'Inter var',
      fontSize: isSmaller ? [ 12, 18 ] : [ 16, 28 ],
      padding: 4,
      rotate: (_d) => (Math.random() * 4 - 2) * 2,
    })
    .encode('color', 'text')
    .style({ cursor: 'pointer' })
    .tooltip({
      title: (d) => `${ d.text.toUpperCase() }`,
      items: [
        (data) => ({
          name: data.text,
          value: `共计 ${ data.value } 篇`,
        }),
      ],
    })
  
  chart.render()
  
  chart.on('element:click', (event) => onClickCallback?.(event.data.data))
  
  onBeforeUnmount(() => chart.destroy())
}


const initData = (tags: Record<string, DocData[]>) => Object
  .keys(tags)
  .map<WordCloudData>(key => ({ text: key, value: tags[key].length }))

const wordCloudRef = useTemplateRef<HTMLDivElement>('wordCloudRef')
onMounted(() => {
  if (wordCloudRef.value) {
    useWordCloud(
      wordCloudRef.value,
      initData(tags),
      (data) => {
        emit('getSelected', data.text, tags[data.text])
      },
    )
  }
})
</script>

<style lang="scss">

</style>
