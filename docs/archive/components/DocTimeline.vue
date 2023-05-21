<script setup lang="ts">
import { withBase } from 'vitepress'
import { useNamespace } from '@theme/hooks/useNamespace'
import { data, DocData } from '@theme/docs.data'
import DocMetaData from './DocMetaData.vue'
import { onBeforeMount, reactive, ref, watch, defineAsyncComponent } from 'vue'
import DocTag from './DocTag.vue'
import { useMagicKeys } from '@vueuse/core'
import { getTimeline, getZodiac, getZodiacAlias } from './archive'

const AsyncWordCloud = defineAsyncComponent({
  // 加载函数
  loader: () => import('./WordCloud.vue'),
  // 展示加载组件前的延迟时间，默认为 200ms
  delay: 0,
})

const { escape } = useMagicKeys()

type TimelineData = Record<string, Record<string, DocData[]>>

const list = ref<TimelineData>({})
const isSelected = ref(false)
const selected = reactive({
  type: '',
  data: [] as DocData[],
})

const resetList = (data: DocData[]) => {
  list.value = getTimeline(data)
}

watch(() => escape.value, (v) => {
  if (isSelected.value && v) {
    isSelected.value = false

    selected.type = ''
    selected.data = []

    resetList(data)
  }
})

onBeforeMount(() => {
  resetList(data)
})

const handleSelectedTag = (tag, data) => {
  isSelected.value = true

  selected.type = tag
  selected.data = data

  resetList(data)
}

const isCurrentYear = (year: number) => {
  return new Date().getFullYear() === year
}

const ns = useNamespace('doc-timeline-item')
</script>

<template>
  <AsyncWordCloud @get-selected="handleSelectedTag" />
  <div class="doc-archive-title">
    <div class="tag">
      <svg-icon name="tags" />
      <doc-tag :text="selected.type"></doc-tag>
    </div>
    <div v-if="isSelected">{{ `共 ${ selected.data.length } 篇，持续更新中` }}</div>
    <div v-else>{{ `共 ${ data.length } 篇，持续更新中` }}</div>
  </div>
  <div class="doc-timeline">
    <div
      :class="[ns.b(), { current: isCurrentYear(parseInt(year as string))}]"
      v-for="(item, year) in list"
      :key="year"
    >
      <div :class="ns.e('line')">
        <div class="icon" :title="getZodiacAlias(parseInt(year as string))">
          <svg-icon :name="'zodiac-'+getZodiac(parseInt(year as string))" />
        </div>
        <div class="line" />
      </div>
      <div :class="ns.e('wrapper')">
        <div class="group-header">{{ year }}</div>
        <div
          class="group-content"
          v-for="(subItem, month) in item"
          :key="month"
        >
          <div class="subgroup-header">{{ month }}</div>
          <div
            class="subgroup-content"
            v-for="doc of subItem"
            :key="doc.path"
          >
            <div class="title">
              <a :href="withBase(doc.path)">{{doc.category}}{{ doc.category ? ' / ' : '' }}{{ doc.title }}</a>
              <div v-if="doc.description">-- {{ doc.description }}</div>
            </div>
            <DocMetaData :doc="doc" @get-selected="handleSelectedTag" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.doc-archive-title {
  letter-spacing: -0.02em;
  line-height: 40px;
  font-size: 32px;
  font-weight: 600;
  white-space: nowrap;
  margin: 48px 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;

  .tag {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;

    .doc-tag {
      font-size: 16px;
    }
  }

  &:not(.tag) {
    &:after {
      white-space: nowrap;
      position: relative;
      left: -10px;
      content: '...';
      animation: dot 2s steps(3) infinite;
    }

    @keyframes dot {
      33% {
        content: '.';
      }
      66% {
        content: '..';
      }
      100% {
        content: '...';
      }
    }
  }
}

.doc-timeline {
  display: flex;
  flex-flow: column nowrap;

  --size: 30px;
  --gap: 20px;
  .VPDoc-doc-timeline-item {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    gap: var(--gap);

    &__line {
      width: var(--size);
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-end;
      align-items: center;

      .icon {
        width: 100%;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        border: 2px solid var(--vp-c-brand);
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
      padding-bottom: 48px;

      .group-header {
        letter-spacing: -0.02em;
        line-height: var(--size);
        font-size: 24px;
      }

      .group-content {
        padding-left: var(--gap);

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
          display: flex;
          flex-flow: column nowrap;
          justify-content: flex-start;
          gap: 18px;

          .title {
            line-height: 1.2;
            font-size: 14px;
            display: flex;
            justify-content: flex-start;
            align-items: flex-end;
            gap: 20px;
            letter-spacing: 0.02em;
            transition: all 0.3s ease-in-out;
            white-space: nowrap;

            a {
              flex-shrink: 0;
            }

            div {
              flex: 1;
              opacity: 0;
              font-size: 12px;
              line-height: 1;
              transition: all 0.3s ease-in-out;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }

          &:hover {
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);

            .title {
              div {
                opacity: 0.33;
              }
            }
          }
        }
      }
    }

    &.current {
      .icon {
        border: 2px dashed var(--vp-c-brand);
      }

      .line {
        border-left: 2px dashed var(--vp-c-green-light);
      }
    }

    &:last-child {
      .line {
        border-image: linear-gradient(
                to top,
                var(--vp-c-green-light) 0,
                var(--vp-c-green-light) 5px,
                transparent 5px,
                transparent 10px,
                var(--vp-c-green-light) 10px,
                var(--vp-c-green-light) 15px,
                transparent 15px,
                transparent 20px,
                var(--vp-c-green-light) 20px,
                var(--vp-c-green-light) 25px,
                transparent 25px,
                transparent 30px,
                var(--vp-c-green-light) 30px,
                var(--vp-c-green-light) 100%
        ) 1;
      }
    }
  }
}

@media (max-width: 960px) {
  .doc-archive-title {
    margin: 32px 0;
    font-size: 22px !important;
  }

  .doc-timeline {
    --size: 24px;
    --gap: 14px;

    .VPDoc-doc-timeline-item {
      &__wrapper {
        padding-bottom: 32px;

        .group-header {
          font-size: 22px;
        }

        .group-content {
          .subgroup-header {
            padding-top: 24px;
            padding-bottom: 8px;
            line-height: 26px;
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>
