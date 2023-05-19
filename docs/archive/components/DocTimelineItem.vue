<script setup lang="ts">
import { withBase } from 'vitepress'
import { useNamespace } from '@theme/hooks/useNamespace'
import { data } from '@theme/docs.data'
import DocMetaData from './DocMetaData.vue'

const list = {}

data.sort((a, b) => b.createdDate - a.createdDate)
  .forEach(item => {
    const year = new Date(item.createdDate).getFullYear() + '_'
    const month = (new Date(item.createdDate).getMonth() + 1) + '_'

    list[year] ??= {}

    ;(list[year][month] ??= []).push(item)
  })

/**
 * 获取生肖图标
 *
 * @param year 年份
 */
const getChineseZodiac = year => {
  const arr = [ 'monkey', 'rooster', 'dog', 'pig', 'rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'goat' ];
  return arr[year % 12];
}

/**
 * 获取生肖名称
 *
 * @param year 年份
 */
const getZodiacAlias = year => {
  const arr = [ '猴年', '鸡年', '狗年', '猪年', '鼠年', '牛年', '虎年', '兔年', '龙年', '蛇年', '马年', '羊年' ];
  return arr[year % 12];
}

const ns = useNamespace('doc-timeline-item')
</script>

<template>
  <div class="doc-timeline">
    <div :class="ns.b()" v-for="(item, year) in list" :key="year">
      <div :class="ns.e('line')">
        <div class="icon">
          <svg-icon :name="'zodiac-'+getChineseZodiac(parseInt(year))" />
        </div>
        <div class="line" />
      </div>
      <div :class="ns.e('wrapper')">
        <div class="group-header">{{ parseInt(year) }}年</div>
        <div class="group-content" v-for="(subItem, month) in item" :key="month">
          <div class="subgroup-header">{{ parseInt(month as string) }}月</div>
          <div class="subgroup-content" v-for="doc of subItem" :key="doc.path">
            <div class="title"><a :href="withBase(doc.path)">{{ doc.title }}</a></div>
            <DocMetaData :doc="doc"></DocMetaData>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.doc-timeline {
  display: flex;
  flex-flow: column nowrap;
}
.VPDoc-doc-timeline-item {
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  gap: 20px;

  &__line {
    width: 30px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;
    align-items: center;

    .icon {
      width: 100%;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      border: 2px dashed var(--vp-c-brand);
      padding: 2px;

      :deep(.svg-icon) {
        width: 100%;
        height: 100%;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        object-fit: contain;
      }
    }

    .line {
      height: 100%;
      border-left: 2px solid var(--vp-c-green-light);
    }
  }

  &__wrapper {
    width: 0;
    flex: 1;
    padding-bottom: 50px;

    .group-header {
      letter-spacing: -0.02em;
      line-height: 30px;
      font-size: 24px;
    }

    .group-content {
      padding-left: 20px;

      .subgroup-header {
        padding-top: 32px;
        padding-bottom: 16px;
        letter-spacing: -0.01em;
        line-height: 28px;
        font-size: 20px;
      }

      .subgroup-content {
        border-radius: 4px;
        overflow: hidden;
        transition: .3s;
        padding: 18px 18px;

        .title {
          font-size: 14px;
          margin-bottom: 16px;
        }

        &:hover {
          box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
        }
      }
    }
  }

  &:first-child {
    .line {
      border-left: 2px dashed var(--vp-c-green-light);
    }
  }
}
</style>

