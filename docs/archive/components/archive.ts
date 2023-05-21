import { data, DocData } from '@theme/docs.data'

type TimelineData = Record<string, Record<string, DocData[]>>

export const tags = data
  .filter(k => k.tags?.length)
  .reduce<Record<string, DocData[]>>((tagsRecords, item) => {
    item.tags?.forEach(tag => {
      (tagsRecords[tag] ??= []).push(item)
      
      tagsRecords[tag].sort((a, b) => b.createdDate - a.createdDate)
    })
    return tagsRecords
  }, {})

export const getTimeline = (list: DocData[] = data)=>{
  return list.sort((a, b) => b.createdDate - a.createdDate)
    .reduce<TimelineData>((list, item) => {
      const year: string = `${ new Date(item.createdDate).getFullYear() }年`
      const month: string = `${ new Date(item.createdDate).getMonth() + 1 }月`
      
      list[year] ??= {}
      
      ;(list[year][month] ??= []).push(item)
      
      return list
    }, {})
}

/**
 * 获取生肖图标
 *
 * @param year 年份
 */
export const getZodiac = (year: number) => {
  return [ 'monkey', 'rooster', 'dog', 'pig', 'rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'goat' ].at(year % 12)
}

/**
 * 获取生肖名称
 *
 * @param year 年份
 */
export const getZodiacAlias = (year: number) => {
  return [ '猴年', '鸡年', '狗年', '猪年', '鼠年', '牛年', '虎年', '兔年', '龙年', '蛇年', '马年', '羊年' ].at(year % 12)
}
