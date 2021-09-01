<template>
  <div class="styleComponents">
    <div class="hover-me">Hover Me</div>
    <div class="textbox">
      <div class="effectinput">Pure CSS Typing animation.</div>
    </div>
    <div class="conic">角向渐变</div>
    <div class="dynamicBorder"></div>
  </div>
</template>
<script lang="ts">
export default {
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.styleComponents {
  width: 100%;
  height: 100%;
  margin: 10px;
  display: flex;
  .textbox{
    width: 530px;
  }
}
</style>
