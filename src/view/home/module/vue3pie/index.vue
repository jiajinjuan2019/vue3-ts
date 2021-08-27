<template>
  <div class="con">
    <div v-for="item in data" :key="item.id" class="conpie">
      <pie :itemData="item.data" />
    </div>
  </div>
</template>
<script lang="ts">
import pie from "./pie.vue";
interface arr {
  value: number;
  name: string;
}
interface pieList {
  id: number;
  name: string;
  data: arr[];
}
export default {
  components: {
    pie,
  },
  setup() {
    let data: pieList[] = [
      {
        id: 0,
        name: "已巡检",
        data: [
          {
            value: 100,
            name: "未执行",
          },
          {
            value: 100,
            name: "已执行",
          },
          {
            value: 90,
            name: "执行中",
          },
        ],
      },
      {
        id: 1,
        name: "未巡检",
        data: [
          {
            value: 100,
            name: "未执行",
          },
          {
            value: 100,
            name: "已执行",
          },
          {
            value: 90,
            name: "执行中",
          },
        ],
      },
    ];
    return {
      data,
    };
  },
};
</script>
<style lang="scss" scoped>
.con {
  width: 100%;
  height: 100%;
  display: flex;
  .conpie {
    width: 50%;
    height: 100%;
  }
}
</style>
