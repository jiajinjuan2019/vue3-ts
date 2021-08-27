<template>
  <home />
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
</template>


<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from "./components/HelloWorld.vue";
import home from "../src/view/home/index.vue";
export default {
  components: { home },
  setup() {
    return {};
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  width: 100vw;
  height: 100vh;
  background: url("../src/assets/bg.png") no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
  color: #fff;
}
</style>









