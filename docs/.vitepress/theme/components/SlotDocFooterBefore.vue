<script lang="ts" setup>
import { useData, withBase } from 'vitepress'


const { frontmatter } = useData()

const handleRouter = () => {

}
</script>

<template>
  <div class="doc-footer-before">
    <div v-if="frontmatter.tags?.length" class="doc-tags">
      <svg-icon name="tags" />
      <div class="tag-list">
        <a
          v-for="tag of frontmatter.tags"
          :key="tag"
          :href="withBase(`/archive/?tag=${encodeURIComponent(tag)}`)"
        >
          <doc-tag
            :text="tag"
            @click="handleRouter"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.doc-footer-before {
  margin: 32px 0;
  
  .doc-tags {
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    flex-shrink: 0;
    justify-content: flex-start;
    margin: 12px 0;
    gap: 12px;
    
    :deep(.svg-icon) {
      flex-shrink: 0;
      width: 22px;
      height: 22px;
    }
    
    .tag-list {
      display: flex;
      align-items: center;
      flex: 1;
      flex-flow: row wrap;
      justify-content: flex-start;
      gap: 6px;
      
      .doc-tag {
        font-size: 12px;
      }
    }
  }
}
</style>
