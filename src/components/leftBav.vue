<template>
  <div class="leftBav">
    <div>左侧菜单</div>
    <div class="itemNav centerbox" v-for="item of leftNav" :key="item.id" @click="getShowItem(item)">
      {{item.name}}
    </div>
  </div>
</template>
<script lang="ts">
import { reactive } from "vue";
import router from '../router';
import { RouteLocationRaw } from 'vue-router';
export default {
  setup() {
    let leftNav = [
      {
        id: 0,
        name: "样式合集",
        path: "/cssCompoment",
      },
    ];
    leftNav = reactive(leftNav);
    function getShowItem (item: { path: RouteLocationRaw; }){
      router.push(item.path)
    }
    return {
      leftNav,
      getShowItem
    };
  },
};
</script>
<style lang="scss" scoped>
.leftBav {
  width: 345px;
  height: 810px;
  background: url("../assets/nav_bg.png") no-repeat;
  background-size: 100% 100%;
  padding: 50px 20px;
  .itemNav{
    width: calc(100% - 13px);
    height: 60px;
    font-size: 18px;
    background-color: rgba(0,14,81,0.6);
    border-bottom: 1px solid #fff;
    cursor: pointer;
  }
}
</style>
