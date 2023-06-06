<script lang="ts" setup>
import { useData } from 'vitepress'


const { frontmatter } = useData()


</script>

<template>
  <div class="doc-footer-before">
    <div v-if="frontmatter.tags?.length" class="doc-tags">
      <svg-icon name="tags"/>
      <div class="tag-list">
        <doc-tag
          v-for="tag of frontmatter.tags"
          :key="tag"
          :text="tag"
        />
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
    gap: 12px;
    margin: 12px 0;

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
