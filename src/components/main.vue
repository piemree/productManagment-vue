<template>
  <div id="main" class="d-flex align-items-center justify-content-center ">
    <transition
    mode="out-in"
    enter-active-class="animate__animated  animate__backInLeft" 
    leave-active-class="animate__animated animate__backOutRight"
    >
    <router-view></router-view>
   </transition>
  </div>
</template>

<script>
export default {
  
};
</script>

<style scoped>

</style>