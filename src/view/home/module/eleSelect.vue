<template>
  <div class="eleSelect">
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      >
      </el-option>
    </el-select>
    <button @click="getRequestData">请求接口</button>
    <button @click="getRequestData2">跨域接口</button>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
import request  from '../../../utils/request'
export default {
  setup() {
    let options = [
      {
        value: "选项1",
        label: "黄金糕",
      },
      {
        value: "选项2",
        label: "双皮奶",
        disabled: true,
      },
      {
        value: "选项3",
        label: "蚵仔煎",
      },
      {
        value: "选项4",
        label: "龙须面",
      },
      {
        value: "选项5",
        label: "北京烤鸭",
      },
    ];
    let $fetch = request.feach
    let $instance = request.instance
    let value = ref("选项1");
    function getRequestData() {
      console.log('基本接口配置');
      $fetch.get("/mock/70/home/jjbj").then((res) => {
        console.log(111111, res);
      });
    }
    function getRequestData2() {
      console.log('跨域接口配置');
      $instance.get("/api/warning/number").then((res) => {
        console.log(111111, res);
      });
    }
    return {
      options,
      value,
      getRequestData,
      getRequestData2
    };
  },
};
</script>
<style lang="scss" scoped>
.eleSelect {
  width: 100%;
  height: 100%;
}
</style>
