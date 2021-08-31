<template>
  <!--vue3.0和Ts的模板 -->
  <div class="home">
    <div class="home-content">
      <div class="one">
        <!-- vue3饼图echarts -->
        <div class="vue3pie">
          <vue3pie />
        </div>
        <!-- element -->
        <div class="elementsele">
          <eleSelect />
        </div>
      </div>
      <div class="two"></div>
      <div class="three"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, ref } from "vue";

import vue3pie from "./module/vue3pie/index.vue";
import eleSelect from "./module/eleSelect.vue";
export default {
  components: {
    vue3pie,
    eleSelect,
  },
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  position: relative;
  .home-content {
    width: 100%;
    height: 100%;
    display: flex;
    margin: 20px;
    .one {
      width: 40%;
      height: 100%;
      .vue3pie,
      .elementsele {
        width: 100%;
        height: 30%;
        border: 1px solid lightblue;
      }
    }
  }
}
</style>
