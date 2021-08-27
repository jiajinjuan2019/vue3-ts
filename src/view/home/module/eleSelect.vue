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
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    let options= [
      {
        value: "选项1",
        label: "黄金糕"
      },
      {
        value: "选项2",
        label: "双皮奶",
        disabled: true
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
        label: "北京烤鸭"
      }
    ];
    let value = ref("选项1");
    return {
     options,
      value
      
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
