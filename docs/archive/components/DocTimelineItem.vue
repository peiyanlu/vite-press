<script setup lang="ts">
import SvgIcon from '@theme/components/global/SvgIcon.vue'
import { useNamespace } from '@theme/hooks/useNamespace'
import { onMounted, ref } from 'vue'
import { DocData, getZodiac, getZodiacAlias } from './archive'
import DocMetaData from './DocMetaData.vue'


const props = defineProps<{
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


const collapseRef = ref(null)
const collapseSubRef = ref(null)
const value = ref<string[]>([])
const subValue = ref<string[]>([])

const styleVars = ref({
  '--collapse-header-padding': '0px',
  '--collapse-background': 'transparent',
  '--collapse-content-padding': '0px',
})

onMounted(() => {
  value.value = [ props.year ]
  subValue.value = Object.keys(props.item).map((k) => props.year + k)
})
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
      <var-style-provider :style-vars="styleVars">
        <var-collapse v-model="value" ref="collapseRef" :elevation="false">
          <var-collapse-item :name="year">
            <template #title>
              <div class="group-header" :id="year">{{ year }}</div>
            </template>
            
            <div
              v-for="(subItem, month) in item"
              :key="month"
              class="group-content"
            >
              <var-collapse v-model="subValue" ref="collapseSubRef" :elevation="false">
                <var-collapse-item :name="year+month">
                  <template #title>
                    <div class="subgroup-header" :id="month">{{ month }}</div>
                  </template>
                  
                  <div class="subgroup-content">
                    <template
                      v-for="doc of subItem"
                      :key="doc.url"
                    >
                      <DocMetaData :doc @get-selected="handleSelectedTag" />
                    </template>
                  </div>
                </var-collapse-item>
              </var-collapse>
            </div>
          </var-collapse-item>
        </var-collapse>
      </var-style-provider>
    </div>
  </div>
</template>

<style scoped lang="scss">
.VPDoc-doc-timeline-item {
  --gap: 28px;
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
      line-height: 1.25;
      letter-spacing: -0.02em;
    }
    
    .group-content {
      padding: calc(var(--gap) / 2) var(--gap);
      
      .subgroup-header {
        font-size: 20px;
        line-height: 1.25;
        letter-spacing: -0.02em;
      }
      
      .subgroup-content {
        padding: calc(var(--gap) / 2) var(--gap);
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
        padding-right: calc(var(--gap) * 3);
        
        .subgroup-header {
          font-size: 18px;
        }
      }
    }
  }
}
</style>
