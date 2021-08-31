<template>
  <!-- 左侧菜单 -->
  <div
    class="home-leftnav centerbox"
    v-show="isShowNav"
    @mouseleave="isShowNav = false"
  >
    <transition name="slide-fade">
      <leftNav />
    </transition>
  </div>
  <div class="left-line" @mouseenter="toggleIsNav"></div>
  <router-view></router-view>
</template>


<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from "./components/HelloWorld.vue";
import { reactive, ref } from "vue";
import leftNav from "../src/components/leftBav.vue";
export default {
  components:{leftNav},
  setup() {
    let isShowNav = ref(false);
    function toggleIsNav() {
      isShowNav.value = true;
    }
    return {
      isShowNav,
      toggleIsNav,
    };
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
.left-line {
  width: 5px;
  height: 100px;
  background-color: #03c0ff;
  cursor: pointer;
  position: absolute;
  top: 40%;
  left: 0;
  z-index: 2;
}
.home-leftnav {
  width: 345px;
  height: 100%;
  position: absolute;
  transform: translateX(0px);
  z-index: 2;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-345px);
  opacity: 0;
}
</style>









