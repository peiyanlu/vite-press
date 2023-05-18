---
title: FrontEnd
tags:
 - HTML
 - JS
 - CSS
 - ES6
 - NPM
---

# FrontEnd

<script setup>
import {data} from '../.vitepress/theme/docs.data';
import WordCloud from '@theme/components/WordCloud.vue';
import { useData } from 'vitepress';

const d = useData();

</script>  
<WordCloud></WordCloud>

<pre>{{ data }}</pre>

