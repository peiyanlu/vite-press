import { useEventListener } from '@theme/hooks/useEventListener'
import { ref } from 'vue'


export const useMouse = () => {
  const x = ref(0)
  const y = ref(0)
  
  useEventListener(window, 'mousemove', (e: MouseEvent) => {
    x.value = e.pageX
    y.value = e.pageY
  })
  
  return { x, y }
}
