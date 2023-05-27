import fs from 'fs';
import path from 'path';
import { mkdirp } from 'mkdirp'


// const filePath = 'C:\\Users\\hdec\\Documents\\WeChat Files\\wxid_yxj0hb5cljh522\\FileStorage\\MsgAttach'
export function dat2img(filePath: string, outPath: string) {
  //读取目录下所有.dat文件
  const getDat = (filePath: string): string[] => {
    return fs.readdirSync(filePath).reduce<string[]>((list, file) => {
      const fullPath = path.join(filePath, file)
      if (fs.statSync(fullPath).isDirectory()) {
        return list.concat(getDat(fullPath))
      } else {
        if (path.extname(fullPath) === '.dat') {
          list.push(fullPath)
        }
      }
      return list
    }, [])
  }
  
  //.dat转化为.jpg图片
  const convert = (item: string) => {
    const { dir, base } = path.parse(item)
    const lastDir = dir.split(path.sep).at(-1)
    const writeDir = path.join(outPath, lastDir)
    if (!fs.existsSync(writeDir)) {
      mkdirp.sync(writeDir)
    }
    
    let imgPath = path.join(writeDir, `${ base }.jpg`);
    fs.readFile(item, (_err, content) => {
      if (content?.length) {
        const [ firstV, nextV ] = content
        const base = 0xFF
        const next = 0xD8
        const gifA = 0x47
        const gifB = 0x49
        const pngA = 0x89
        const pngB = 0x50
        
        const jT = firstV ^ base
        const jB = nextV ^ next
        const gT = firstV ^ gifA
        const gB = nextV ^ gifB
        const pT = firstV ^ pngA
        const pB = nextV ^ pngB
        
        let v = jT
        if (jT === jB) {
          v = jT
        } else if (gT === gB) {
          v = gT
        } else if (pT === pB) {
          v = pT
        }
        
        const bb = content.map(br => br ^ v)
        fs.writeFileSync(imgPath, bb)
      }
    })
  };
  
  const list = getDat(filePath)
  list.forEach((item, index) => {
    convert(item)
    process.stdout.write(`${ index + 1 }/${ list.length } \r`)
  })
}
