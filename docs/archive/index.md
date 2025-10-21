---
title: 归档
layout: doc
layoutClass: doc-archive
aside: false
lastUpdated: false
editLink: false
order: 6
---

<script setup>
import { defineAsyncComponent } from 'vue';
import EmptyBlock from './components/LoadingBlock.vue';


const AsyncComponent= defineAsyncComponent({
  loader: () => import('./components/DocTimeline.vue'),
  loadingComponent: EmptyBlock,
})

</script>

<style lang="css" src="./index.css"></style>

<AsyncComponent></AsyncComponent>
