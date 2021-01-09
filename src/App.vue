<template>
  <div id="app">
    <app-header></app-header>
    <app-main></app-main>
  </div>
</template>

<script>
import header from "./components/header";
import main from "./components/main";

export default {
  components: {
    appHeader: header,
    appMain: main
   
  },
};
</script>

<style>
#app {
  background-color: rgb(207, 197, 216);
  min-height: 100vh;
  min-width: 360px;
  
}
</style>
