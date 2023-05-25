import fs from 'fs';
import path from 'path';


const base = 0xFF
const next = 0xD8
const gifA = 0x47
const gifB = 0x49
const pngA = 0x89
const pngB = 0x50


export default function () {
  //扫描路劲
  const filePath = 'C:\\Users\\hdec\\Documents\\WeChat Files\\wxid_yxj0hb5cljh522\\FileStorage\\MsgAttach\\25bcab41d73a4a1af22b3b77ef98e6c5\\Image\\2023-05'
  
  //转化后输出图片的路径
  const outPath = 'E:\\vxphoto\\'
  
  //读取目录下所有.dat文件
  const files = fs.readdirSync(filePath)
  const datArry: string[] = []
  files.forEach(function (item) {
    if (path.extname(item) == '.dat') {
      datArry.push(item);
    }
  })
  
  // 将所有.dat文件依次转化为.jpg文件，输出路径为上面的outPath
  for (let i = 0; i < datArry.length; i++) {
    convert(datArry[i])
    process.stdout.write(`${ i + 1 }/${ datArry.length } \r`)
  }
  
  //.dat转化为.jpg图片
  function convert(item: string) {
    let absPath = path.join(filePath, item);
    let imgPath = path.join(outPath, item + '.jpg');
    fs.readFile(absPath, (_err, content) => {
      if (content?.length) {
        let firstV = content[0]
        let nextV = content[1]
        let jT = firstV ^ base
        let jB = nextV ^ next
        let gT = firstV ^ gifA
        let gB = nextV ^ gifB
        let pT = firstV ^ pngA
        let pB = nextV ^ pngB
        let v = firstV ^ base
        if (jT == jB) {
          v = jT
        } else if (gT == gB) {
          v = gT
        } else if (pT == pB) {
          v = pT
        }
        
        let bb = content.map(br => {
          return br ^ v
        })
        fs.writeFileSync(imgPath, bb)
      }
    })
  }
}
