<script lang="ts" setup>
import { slugify } from '@mdit-vue/shared'
import { NAV_DATA } from './navigation'

import SiteNavLink from './SiteNavLink.vue'
</script>

<template>
  <div v-for="group of NAV_DATA" class="site-nav-group">
    <h2 v-if="group.title" :id="slugify(group.title)" tabindex="-1">
      {{ group.title }}
      <a
        :aria-label='`Permalink to "${slugify(group.title)}"`'
        :href="`#${slugify(group.title)}`"
        class="header-anchor"
      />
    </h2>
    <div class="site-nav-links">
      <SiteNavLink
        v-for="{ icon, title, desc, link } in group.items"
        :key="link"
        :desc="desc"
        :icon="icon"
        :link="link"
        :title="title"
      />
    </div>
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
