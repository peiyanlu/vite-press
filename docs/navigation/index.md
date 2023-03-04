---
layoutClass: site-nav-layout
outline: [2, 3, 4]
---

<script setup>
import SiteNavLinks from './components/SiteNavLinkGroup.vue';
import { NAV_DATA } from './data';
</script>

<style lang="sass" src="./index.scss"></style>

<SiteNavLinks 
  v-for="{title, items} in NAV_DATA" 
  :title="title" 
  :items="items"
/>
