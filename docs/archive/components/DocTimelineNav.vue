<script setup lang="ts">
import { useEventListener } from '@vueuse/core'
import { PropType, ref } from 'vue'


type NavItem = (string | string[])[]

const props = defineProps({
  navs: {
    type: Array as PropType<NavItem[]>,
    default: () => [],
  },
})

const show = ref(false)
useEventListener('scroll', (evt) => {
  show.value = window.scrollY > 333
})


const top = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

</script>

<template>
  <div class="wrapper">
    <div
      class="nav"
      v-for="([ year, months]) of navs"
      :key="year as string"
    >
      <a :href="`#${year}`">{{ year }}</a>
      
      <a
        v-for="month of months"
        :href="`#${month}`"
        :key="year+month"
      >{{ month }}</a>
    </div>
  </div>
  
  <div
    class="top"
    @click="top"
    v-show="show"
  >
    <div>Top</div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  position: fixed;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 9;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
  justify-content: center;
  height: 75%;
  padding: 64px 8px 8px;
  gap: 8px;
  border-radius: 8px;
  backdrop-filter: blur(2px);
  text-align: right;
  font-size: 14px;
  overflow-y: auto;
  
  .nav {
    display: flex;
    flex-flow: column nowrap;
    gap: 8px;
    
    a {
      text-decoration: none;
    }
  }
  
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
}

.top {
  position: fixed;
  right: 60px;
  bottom: 60px;
  z-index: 999;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  text-align: right;
  cursor: pointer;
  backdrop-filter: blur(2px);
  box-shadow: rgba(189, 52, 154, .5) 0 3px 1px -2px,
  rgba(65, 209, 255, .5) 0px 2px 2px 0px,
  rgba(189, 52, 154, .5) 0px 1px 5px 0px;
}
</style>

