---
layoutClass: site-nav-layout
outline: [2, 3, 4]
---

<script setup>
import MNavLinks from './components/SiteNavLinkGroup.vue';
import { NAV_DATA } from './data';
</script>

<style lang="sass" src="./index.scss"></style>

# 前端导航

<MNavLinks 
  v-for="{title, items} in NAV_DATA" 
  :title="title" 
  :items="items"
/>
