import { Datum, WordCloud } from '@antv/g2plot'
import { onBeforeUnmount } from 'vue'

export default function useWordCloud<T extends Record<string, string | number>>(
  dom: HTMLElement,
  data: T[],
  onClickCallback?: (data: T) => void,
) {
  const wordCloud = new WordCloud(dom, {
    data: data,
    wordField: 'name',
    weightField: 'value',
    colorField: 'name',
    wordStyle: {
      fontFamily: 'Verdana',
      fontSize: [ 14, 35 ],
      rotation: 0,
    },
    // 返回值设置成一个 [0, 1) 区间内的值，
    // 可以让每次渲染的位置相同（前提是每次的宽高一致）。
    random: () => Math.random(),
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
  
  onBeforeUnmount(() => wordCloud.destroy())
}
