<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="border-box"></div>
    
    <div class="mask-box-container">
      <div class="img"></div>
      <div class="mask-box"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 40px;
}


.border-box {
  width: 120px;
  height: 120px;
  
  --w: 3px;
  --h: 12px;
  --c1: transparent;
  --c2: #06CEAE;
  
  background: linear-gradient(to top, var(--c1), var(--c2)) left top no-repeat,
  linear-gradient(to left, var(--c1), var(--c2)) left top no-repeat,
  linear-gradient(to top, var(--c1), var(--c2)) right top no-repeat,
  linear-gradient(to right, var(--c1), var(--c2)) right top no-repeat,
  linear-gradient(to bottom, var(--c1), var(--c2)) left bottom no-repeat,
  linear-gradient(to left, var(--c1), var(--c2)) left bottom no-repeat,
  linear-gradient(to bottom, var(--c1), var(--c2)) right bottom no-repeat,
  linear-gradient(to right, var(--c1), var(--c2)) right bottom no-repeat;
  background-size: var(--w) var(--h), var(--h) var(--w), var(--w) var(--h), var(--h) var(--w);
}

.mask-box-container {
  position: relative;
  width: 90px;
  height: 90px;
  
  .img {
    width: 100%;
    height: 100%;
    background: var(--vp-c-brand-1);
  }
  
  .mask-box {
    --l: 12px; // 四角线长度
    --t: 3px; // 四角线厚度
    --g: 15px; // 四角线间隙
    --s: 90px; // 图片大小
    --x: 0px; // 图片左上角横坐标
    --y: 0px; // 图片左上角纵坐标
    
    width: calc(var(--s) + var(--g) * 2);
    height: calc(var(--s) + var(--g) * 2);
    border: var(--t) solid #06CEAE;
    
    position: absolute;
    left: calc(var(--x) - var(--g));
    top: calc(var(--y) - var(--g));
    
    transition: 0.2s;
    
    mask: conic-gradient(
        at var(--l) var(--l),
        transparent 75%,
        #06CEAE 75% 100%
    ) 0 0 / calc(100% - var(--l)) calc(100% - var(--l)) repeat;
  }
}
</style>
