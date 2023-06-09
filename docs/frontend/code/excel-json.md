---
title: JSON导出EXCEL
description: json转出Excel以及解析Excel为json
category: code
tags:
  - JSON
  - EXCEL
---

# JSON 导出 EXCEL

```ts
// 安装依赖：pnpm add xlsx file-saver @types/file-saver -D

import FileSaver from 'file-saver'
import * as XLSX from 'xlsx'

export interface StringKeyValue {
  [key: string]: string
}

export type TableHeadProps = StringKeyValue

interface TreeDate {
  [key: string]: string | TreeDate[]
}

export interface TreeProps {
  id: string
  parentId: string
  children: string
}

class ExcelTransform {
  private readonly headProps: TableHeadProps = {}
  private readonly treeProps: TreeProps = {
    id: 'id',
    parentId: 'parentId',
    children: 'children',
  }
  private readonly indent?: boolean = true
  
  constructor(headProps: TableHeadProps, treeProps?: TreeProps, indent?: boolean) {
    this.headProps = headProps
    this.treeProps = {
      ...this.treeProps,
      ...treeProps,
    }
    this.indent = indent
  }
  
  get headPropsKeys(): string[] {
    return Object.keys(this.headProps)
  }
  
  get headPropsValues(): string[] {
    return Object.values(this.headProps)
  }
  
  jsonToExcel(data: TreeDate[], filename?: string): void {
    // 获取需要导出的数据，假设已经存储在 data 中
    // 定义表头
    const headers: string[] = [ ...this.headPropsValues ]
    
    // 定义表格数据
    const rows: string[][] = this.flattenData(data)
    
    // 将表头和表格数据组合成工作表
    const worksheet = XLSX.utils.aoa_to_sheet([ headers, ...rows ])
    
    // 将工作表添加到工作簿
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1')
    
    // 将工作簿转换为二进制数据流
    const excelData: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' })
    
    // 使用 file-saver 库保存文件
    const blob: Blob = new Blob([ excelData ], { type: 'application/octet-stream' })
    FileSaver.saveAs(blob, `${ filename ?? Date.now() }.xlsx`)
  }
  
  async excelToJson(file: Blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        const data = e.target?.result
        if (!data) reject(false)
        
        const workbook = XLSX.read(data, { type: 'binary' })
        // 读取第一个工作表
        const worksheet = workbook.Sheets[workbook.SheetNames[0]]
        // 将工作表转换为 JSON 对象
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: this.headPropsKeys })
        
        // 处理 JSON 数据
        resolve(this.restoreTree(jsonData.slice(1) as TreeDate[]))
      }
      reader.readAsBinaryString(file)
    })
  }
  
  private flattenData(data: TreeDate[], level: number = 1): string[][] {
    const rows: string[][] = []
    const fn: (data: TreeDate[], level: number) => void = (data, level: number): void => {
      data.forEach(item => {
        // 将每个节点展平成一行数据
        const row: string[] = Object
          .keys(this.headProps)
          .map((v: string, i: number): string => {
            let value = item[v]
            if (typeof value !== 'string') {
              value = value.toString()
            }
            
            const indent: string = '　'.repeat(level) // 使用全角空格缩进节点名
            
            return (i === 0 && this.indent) ? indent + value : value
          })
        
        rows.push([ ...row ])
        
        // 递归处理子节点
        const children = item[this.treeProps.children]
        if (children && typeof children !== 'string') {
          fn(children, level + 1)
        }
      })
    }
    fn(data, level)
    return rows
  }
  
  private restoreTree(list: TreeDate[]) {
    const map = new Map()
    list.forEach(node => {
      node[this.treeProps['children']] = []
      map.set(node[this.treeProps['id']], node)
    })
    list.forEach(node => {
      const parent = map.get(node[this.treeProps['parentId']])
      if (parent) {
        parent.children.push(node)
      }
    })
    return list.filter(node => !node[this.treeProps['parentId']])
  }
}
```
