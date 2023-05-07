# 防抖与节流

## 防抖
```ts
const debounce = (fn: functions, wait: number, immediate: boolean, callback?: functions) => {
  let timer: NodeJS.Timeout | undefined = undefined
  let startTimeStamp = 0
  let args: any[]
  
  // 优化返回值
  const callbackFn = () => {
    const res = fn.apply(this, args)
    callback?.(res)
  }
  
  // 优化取消
  const clear = () => {
    clearTimeout(timer)
    timer = undefined
  }
  
  const run = (timerInterval: number, isInvoke: boolean = false) => {
    timer = setTimeout(() => {
      const now = Date.now()
      // 定时器执行时间 - 最近一次点击时间
      const interval = now - startTimeStamp
      
      // 如果在当前定时器等待时间内，重置等待时间
      if (interval < timerInterval) {
        // 如果在等待区间内再次点击，时间重置为点击时间
        startTimeStamp = now
        run(wait - interval)
      } else {
        // 如果 立即执行已执行
        if (!isInvoke) callbackFn()
        clear()
      }
    }, timerInterval)
  }
  
  const handler = (...arg: any[]): void => {
    startTimeStamp = Date.now()
    args = arg
    
    // 如果已经有任务 return
    if (timer) return
    
    // 标记是否执行了第一次
    let isInvoke: boolean = false
    if (immediate) {
      callbackFn()
      isInvoke = true
    }
    
    run(wait, isInvoke)
  }
  
  handler.cancel = () => clear()
  
  return handler
}
```

## 节流
```ts
const throttle = (fn: functions, wait: number, last: boolean, callback?: functions) => {
  let args: any[]
  let lastTime: number = 0
  
  // 优化最后一次执行
  let timer: NodeJS.Timeout | undefined = undefined
  let startTimeStamp: number = 0
  
  // 优化返回值
  const callbackFn = () => {
    const res = fn.apply(this, args)
    callback?.(res)
  }
  
  // 优化取消
  const clear = () => {
    clearTimeout(timer)
    timer = undefined
  }
  
  const run = (timerInterval: number) => {
    timer = setTimeout(() => {
      const now = Date.now()
      const interval = now - startTimeStamp
      
      if (interval < timerInterval) {
        startTimeStamp = now
        run(wait - interval)
      } else {
        callbackFn()
        clear()
      }
    }, timerInterval)
  }
  
  const handler = (...arg: any[]) => {
    const now = startTimeStamp = Date.now()
    args = arg
    
    if (now - lastTime > wait) {
      callbackFn()
      lastTime = now
    } else {
      if (!timer && last) {
        run(wait)
      }
    }
  }
  
  handler.cancel = () => clear()
  
  return handler
}
```
