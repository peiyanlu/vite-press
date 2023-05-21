import { Datum, WordCloud } from '@antv/g2plot'
import {breakpointsTailwind, useBreakpoints} from '@vueuse/core'
const breakpoints = useBreakpoints(breakpointsTailwind)
const smAndSmaller = breakpoints.smaller('sm')

export default function useWordCloud<T extends Record<string, string | number>>(
  dom: HTMLElement,
  data: T[],
  onClickCallback?: (data: T) => void,
) {
  const wordCloud = new WordCloud(dom, {
    height: smAndSmaller.value ? 200 : 420,
    data: data,
    wordField: 'name',
    weightField: 'value',
    colorField: 'name',
    wordStyle: {
      rotation: [ -Math.PI / 2, Math.PI / 2 ],
      rotationSteps: 4,
      fontFamily: 'Inter var',
      fontSize: smAndSmaller.value ? [12, 18]: [ 18, 28 ],
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
  
  const destory = () => wordCloud.destroy()
  
  const darkTheme = () => wordCloud.update({ theme: 'dark' })
  const lightTheme = () => wordCloud.update({ theme: 'default' })
  
  return { destory, darkTheme, lightTheme }
}
