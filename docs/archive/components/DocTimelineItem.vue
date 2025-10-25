<script setup lang="ts">
import SvgIcon from '@theme/components/global/SvgIcon.vue'
import { useNamespace } from '@theme/hooks/useNamespace'
import { DocData, getZodiac, getZodiacAlias } from './archive'
import DocMetaData from './DocMetaData.vue'


defineProps<{
  year: string
  item: Record<string, DocData[]>
}>()
const emit = defineEmits<{
  getSelected: [ tag: string | number, data: DocData[] ]
}>()


const handleSelectedTag = (tag: string | number, data: DocData[]) => {
  emit('getSelected', tag, data)
}

const ns = useNamespace('doc-timeline-item')

</script>

<template>
  <div :class="[ns.b()]">
    <div :class="ns.e('line')">
      <div :title="getZodiacAlias(parseInt(year as string))" class="icon">
        <a :href="`#${year}`">
          <svg-icon :name="`zodiac-${getZodiac(parseInt(year as string))}`" />
        </a>
      </div>
      <div class="line" />
    </div>
    
    <div :class="ns.e('wrapper')">
      <div class="group-header" :id="year">{{ year }}</div>
      
      <div
        v-for="(subItem, month) in item"
        :key="month"
        class="group-content"
      >
        <div class="subgroup-header" :id="month">{{ month }}</div>
        <template
          v-for="doc of subItem"
          :key="doc.url"
        >
          <DocMetaData :doc @get-selected="handleSelectedTag" />
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.VPDoc-doc-timeline-item {
  --gap: 36px;
  --size: 30px;
  
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  gap: var(--gap);
  
  &__line {
    display: flex;
    align-items: center;
    flex-flow: column nowrap;
    justify-content: flex-end;
    width: var(--size);
    
    .icon {
      width: 100%;
      padding: 2px;
      border: 2px solid var(--vp-c-brand);
      border-radius: 50%;
      aspect-ratio: 1 / 1;
      position: sticky;
      top: 66px;
      backdrop-filter: blur(20px);
      
      :deep(.svg-icon) {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        aspect-ratio: 1 / 1;
        object-fit: contain;
      }
    }
    
    .line {
      height: 100%;
      border-left: 2px solid var(--vp-c-brand-3);
    }
  }
  
  &__wrapper {
    flex: 1;
    width: 0;
    padding-bottom: 48px;
    
    .group-header {
      font-size: 24px;
      line-height: var(--size);
      letter-spacing: -0.02em;
    }
    
    .group-content {
      padding-left: var(--gap);
      padding-right: var(--gap);
      
      .subgroup-header {
        font-size: 20px;
        line-height: 28px;
        padding-top: 32px;
        padding-bottom: 16px;
        letter-spacing: -0.01em;
        margin-left: calc(var(--gap) / 2 - var(--gap));
      }
      
      .subgroup-content {
        display: flex;
        overflow: hidden;
        flex-flow: column nowrap;
        justify-content: flex-start;
        padding: 18px 18px;
        transition: .3s;
        border-radius: 4px;
        gap: 18px;
        
        .title {
          font-size: 14px;
          line-height: 1.2;
          display: flex;
          align-items: flex-end;
          justify-content: flex-start;
          transition: all 0.3s ease-in-out;
          white-space: nowrap;
          letter-spacing: 0.02em;
          gap: 20px;
          
          a {
            flex-shrink: 0;
          }
          
          div {
            font-size: 12px;
            line-height: 1;
            overflow: hidden;
            flex: 1;
            transition: all 0.3s ease-in-out;
            white-space: nowrap;
            text-overflow: ellipsis;
            opacity: 0;
          }
        }
        
        &:hover {
          box-shadow: rgba(0, 0, 0, 0.2) 0 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
          
          .title {
            div {
              opacity: 0.4;
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
      border-left: 2px dashed var(--vp-c-brand-3);
    }
  }
  
  &:last-child {
    .line {
      border-image: linear-gradient(
          to top,
          var(--vp-c-brand-3) 0,
          var(--vp-c-brand-3) 5px,
          transparent 5px,
          transparent 10px,
          var(--vp-c-brand-3) 10px,
          var(--vp-c-brand-3) 15px,
          transparent 15px,
          transparent 20px,
          var(--vp-c-brand-3) 20px,
          var(--vp-c-brand-3) 25px,
          transparent 25px,
          transparent 30px,
          var(--vp-c-brand-3) 30px,
          var(--vp-c-brand-3) 100%
      ) 1;
    }
  }
}

@media (max-width: 960px) {
  .VPDoc-doc-timeline-item {
    --gap: 14px;
    --size: 24px;
    
    &__wrapper {
      padding-bottom: 32px;
      
      .group-header {
        font-size: 22px;
      }
      
      .group-content {
        padding-right: calc(var(--gap) * 2);
        
        .subgroup-header {
          font-size: 18px;
          line-height: 26px;
          padding-top: 24px;
          padding-bottom: 8px;
        }
      }
    }
  }
}
</style>
