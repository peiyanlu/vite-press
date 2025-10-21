---
url: /vite-press/frontend/code/EventLoop.md
description: EventLoop
---

# {{ $frontmatter.title }}

## Node

::: code-group

```TypeScript
import { readFile } from 'node:fs'

// 同步
console.log('🟢 [sync] start')

// ✅ process.nextTick 微任务
process.nextTick(() => {
  console.log('🔁 [nextTick]')
})

// ✅ Promise 微任务
Promise.resolve().then(() => {
  console.log('🧩 [Promise.then]')
})

// ✅ setTimeout (timers)
setTimeout(() => {
  console.log('⏰ [setTimeout]')
  
  // 👀 setImmediate inside setTimeout
  setImmediate(() => {
    console.log('⚡ [setImmediate in setTimeout]')
  })
  
  process.nextTick(() => {
    console.log('🔁 [nextTick in setTimeout]')
  })
  
  Promise.resolve().then(() => {
    console.log('🧩 [Promise in setTimeout]')
  })
}, 0)

// ✅ setImmediate (check)
setImmediate(() => {
  console.log('⚡ [setImmediate]')
})

// ✅ fs.readFile (poll)
readFile('.', () => {
  console.log('📄 [fs.readFile callback]')
  
  setImmediate(() => {
    console.log('⚡ [setImmediate in fs.readFile]')
  })
  
  setTimeout(() => {
    console.log('⏰ [setTimeout in fs.readFile]')
    
    // 👀 setImmediate inside setTimeout
    setImmediate(() => {
      console.log('⚡ [setImmediate in fs.readFile - setTimeout]')
    })
    
    process.nextTick(() => {
      console.log('🔁 [nextTick in fs.readFile - setTimeout]')
    })
    
    Promise.resolve().then(() => {
      console.log('🧩 [Promise in fs.readFile - setTimeout]')
    })
  }, 0)
  
  process.nextTick(() => {
    console.log('🔁 [nextTick in fs.readFile]')
  })
  
  Promise.resolve().then(() => {
    console.log('🧩 [Promise in fs.readFile]')
  })
})

// 同步
console.log('🟢 [sync] end')
```

```text
🟢 [sync] start
🟢 [sync] end
🧩 [Promise.then]
🔁 [nextTick]
⚡ [setImmediate]
⏰ [setTimeout]
🔁 [nextTick in setTimeout]
🧩 [Promise in setTimeout]
⚡ [setImmediate in setTimeout]
📄 [fs.readFile callback]
🔁 [nextTick in fs.readFile]
🧩 [Promise in fs.readFile]
⚡ [setImmediate in fs.readFile]
⏰ [setTimeout in fs.readFile]
🔁 [nextTick in fs.readFile - setTimeout]
🧩 [Promise in fs.readFile - setTimeout]
⚡ [setImmediate in fs.readFile - setTimeout]
```

```text
🟢 Sync
  ├─ console.log('start')
  └─ console.log('end')
  
🧩 Promise microtasks
  └─ [Promise.then]
  
🔁 nextTick queue
  └─ [nextTick]

⏰ timers phase
  └─ [setTimeout]
      ├─ nextTick → [nextTick in setTimeout]
      ├─ Promise → [Promise in setTimeout]
      └─ schedule setImmediate → [setImmediate in setTimeout]

⚡ check phase
  ├─ [setImmediate]
  └─ [setImmediate in setTimeout]

📄 poll phase (fs.readFile callback)
  ├─ nextTick → [nextTick in fs.readFile]
  ├─ Promise → [Promise in fs.readFile]
  ├─ setImmediate → [setImmediate in fs.readFile]
  └─ setTimeout → [setTimeout in fs.readFile]
                   ├─ nextTick → [nextTick in fs.readFile - setTimeout]
                   ├─ Promise → [Promise in fs.readFile - setTimeout]
                   └─ setImmediate → [setImmediate in fs.readFile - setTimeout]

⚡ check phase (fs.readFile 内 setTimeout 排的 setImmediate)
  └─ [setImmediate in fs.readFile - setTimeout]
```

:::

## Browser

::: code-group

```TypeScript
// 同步
console.log('🟢 [sync] start')

// ✅ Promise 微任务
Promise.resolve().then(() => {
  console.log('🧩 [Promise.then]')
})

// ✅ setTimeout (timers)
setTimeout(() => {
  console.log('⏰ [setTimeout]')
  
  Promise.resolve().then(() => {
    console.log('🧩 [Promise in setTimeout]')
  })
}, 0)

// 同步
console.log('🟢 [sync] end')
```

```text
🟢 [sync] start
🟢 [sync] end
🧩 [Promise.then]
⏰ [setTimeout]
🧩 [Promise in setTimeout]
```

:::
