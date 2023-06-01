import chokidar from 'chokidar'
import path from 'path'
import fs from 'fs'


const watcher = chokidar.watch('docs/**/*.md')

let isReady = false

watcher
  .on('ready', () => {
    isReady = true
  })
  .on('all', () => {
    if (isReady) {
      const file = path.join(process.cwd(), 'docs/.vitepress/helper/restart-trigger.ts')
      fs.writeFileSync(
        file,
        `// ${ new Date() }`,
      )
    }
  })

console.log(`\u001b[32mstart listening for MarkDown file changes.\u001b[39m`)


process.on('exit', async (code) => {
  await watcher.close()
})

process.on('SIGINT', () => {
  process.exit(1)
})
