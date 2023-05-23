<script lang="ts" setup>
import { computed } from 'vue'
import { slugify } from '@mdit-vue/shared'

import SiteNavLink from './SiteNavLink.vue'
import type { NavLink } from './type'


const props = defineProps<{
  title: string
  items: NavLink[]
}>()

const formatTitle = computed(() => (slugify(props.title)))
</script>

<template>
  <h2 v-if="title" :id="formatTitle" tabindex="-1">
    {{ title }}
    <a
      :aria-label='`Permalink to "${formatTitle}"`'
      :href="`#${formatTitle}`"
      class="header-anchor"
    />
  </h2>
  <div class="site-nav-links">
    <SiteNavLink
      v-for="{ icon, title, desc, link } in items"
      :key="link"
      :desc="desc"
      :icon="icon"
      :link="link"
      :title="title"
    />
  </div>
</template>

<style lang="scss" scoped>
.site-nav-links {
  display: grid;
  justify-content: center;
  margin-top: var(--gap);
  --gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-row-gap: var(--gap);
  grid-column-gap: var(--gap);
  grid-auto-flow: row dense;
}

@each $media, $size in (500px: 140px, 640px: 155px, 768px: 175px, 960px: 200px, 1440px: 240px) {
  @media (min-width: $media) {
    .site-nav-links {
      grid-template-columns: repeat(auto-fill, minmax($size, 1fr));
    }
  }
}

@media (min-width: 960px) {
  .site-nav-links {
    --gap: 20px;
  }
}
</style>
