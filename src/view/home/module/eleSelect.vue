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
    <!-- <div class="circle">111111111</div> -->
    <div class="centerbox">
      <div class="demo-cube">
        <ul class="cube-inner">
          <li class="top"></li>
          <li class="bottom"></li>
          <li class="front"></li>
          <li class="back"></li>
          <li class="right"></li>
          <li class="left"></li>
        </ul>
        <ul class="cube">
          <li class="top"></li>
          <li class="bottom"></li>
          <li class="front"></li>
          <li class="back"></li>
          <li class="right"></li>
          <li class="left"></li>
        </ul>
      </div>
      <div class="demo-cube perspective">
        <ul class="cube-inner">
          <li class="top"></li>
          <li class="bottom"></li>
          <li class="front"></li>
          <li class="back"></li>
          <li class="right"></li>
          <li class="left"></li>
        </ul>
        <ul class="cube">
          <li class="top"></li>
          <li class="bottom"></li>
          <li class="front"></li>
          <li class="back"></li>
          <li class="right"></li>
          <li class="left"></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
import request from "../../../utils/request";
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
    let $fetch = request.feach;
    let $instance = request.instance;
    let value = ref("选项1");
    function getRequestData() {
      console.log("基本接口配置");
      $fetch.get("/mock/70/home/jjbj").then((res) => {
        console.log(111111, res);
      });
    }
    function getRequestData2() {
      console.log("跨域接口配置");
      $instance.get("/api/warning/number").then((res) => {
        console.log(111111, res);
      });
    }
    return {
      options,
      value,
      getRequestData,
      getRequestData2,
    };
  },
};
</script>
<style lang="scss" scoped>
.eleSelect {
  width: 100%;
  height: 100%;
  .circle {
    width: 100px;
    height: 100px;
    background-color: aqua;
    clip-path: circle(80% at top);
  }
  ul {
    padding: 0;
    list-style: none;
  }
  .perspective {
    transform-style: preserve-3d;
    perspective: 200px;
    transform: rotateX(10deg);
  }
  .demo-cube {
    position: relative;
    width: 100%;
    height: 200px;
    margin: auto;
    .cube-inner {
      position: absolute;
      top: 50%;
      left: 50%;
      margin: -25px 0 0 -25px;
      transform-style: preserve-3d;
      transform-origin: 25px 25px;
      transform: rotateX(-33.5deg) rotateY(45deg);
      animation: fastspin 6s ease-in-out infinite 2s;
      li {
        position: absolute;
        display: block;
        width: 50px;
        height: 50px;
        background: #175d96;
        border: 1px solid #fff;
      }
      .top {
        transform: rotateX(90deg) translateZ(25px);
      }
      .bottom {
        transform: rotateX(-90deg) translateZ(25px);
      }
      .front {
        transform: translateZ(25px);
      }
      .back {
        transform: rotateX(-180deg) translateZ(25px);
      }
      .left {
        transform: rotateY(-90deg) translateZ(25px);
      }
      .right {
        transform: rotateY(90deg) translateZ(25px);
      }
    }
    .cube {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      margin: -50px 0 0 -50px;
      transform-style: preserve-3d;
      transform-origin: 50px 50px;
      transform: rotateX(-33.5deg) rotateY(45deg);
      animation: slowspin 6s ease-in-out infinite 2s;

      li {
        position: absolute;
        display: block;
        width: 100px;
        height: 100px;
        background: rgba(19, 27, 31, 0.7);
        border: 1px solid #fff;
      }
      .top {
        transform: rotateX(90deg) translateZ(50px);
      }
      .bottom {
        transform: rotateX(-90deg) translateZ(50px);
      }
      .front {
        transform: translateZ(50px);
      }
      .back {
        transform: rotateX(-180deg) translateZ(50px);
      }
      .left {
        transform: rotateY(-90deg) translateZ(50px);
      }
      .right {
        transform: rotateY(90deg) translateZ(50px);
      }
    }
  }
  @keyframes fastspin {
    0% {
      transform: rotateX(-33.5deg) rotateY(45deg);
    }
    40%,
    to {
      transform: rotateX(-33.5deg) rotateY(-315deg);
    }
  }
  @keyframes slowspin {
    0% {
      transform: rotateX(-33.5deg) rotateY(45deg);
    }
    40%,
    to {
      transform: rotateX(-33.5deg) rotateY(315deg);
    }
  }
}
</style>
