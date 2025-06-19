import { onMounted, onUnmounted } from 'vue'


type Target = HTMLElement | Document | Window

type EventMap<T extends Target> = T extends Window
  ? WindowEventMap
  : T extends Document
    ? DocumentEventMap
    : T extends HTMLElement
      ? HTMLElementEventMap
      : Record<string, Event>

export const useEventListener = <T extends Target, K extends keyof EventMap<T>>(
  target: T,
  event: K,
  listener: (ev: EventMap<T>[K]) => void,
  options?: boolean | EventListenerOptions,
) => {
  onMounted(() => target.addEventListener(event as string, listener as EventListener, options))
  onUnmounted(() => target.removeEventListener(event as string, listener as EventListener, options))
}
