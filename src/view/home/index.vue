<template>
  <!--vue3.0和Ts的模板 -->
  <div class="home">
    <!-- 左侧菜单 -->
    <div class="home-leftnav centerbox" v-show="isShowNav" @mouseleave="isShowNav = false">
      <transition name="slide-fade">
        <leftNav />
      </transition>
    </div>
    <div class="left-line" @mouseenter="toggleIsNav"></div>
    <div class="home-content">
      <div class="one">
        <!-- vue3饼图echarts -->
        <div class="vue3pie">
          <vue3pie/>
        </div>
        <!-- element -->
        <div class="elementsele">
          <eleSelect/>
        </div>
      </div>
      <div class="two"></div>
      <div class="three"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, ref } from "vue";
import leftNav from "../../components/leftBav.vue";
import vue3pie from './module/vue3pie/index.vue'
import eleSelect from './module/eleSelect.vue'
export default {
  components: {
    leftNav,
    vue3pie,
    eleSelect
  },
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
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  position: relative;
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
  .home-content {
    width: 100%;
    height: 100%;
    display: flex;
    margin: 20px;
    z-index: 3;
    .one{
      width: 40%;
      height: 100%;
      .vue3pie, .elementsele{
        width: 100%;
        height: 30%;
        border: 1px solid lightblue;
      }
    }
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
}
</style>
