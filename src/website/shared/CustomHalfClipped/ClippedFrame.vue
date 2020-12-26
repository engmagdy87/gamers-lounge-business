<template>
  <div class="top-clip-container" :class="[topFrame ? '' : 'bottomframe']">
    <div class="top-clip-container__shape"></div>
    <div class="top-clip-container__shape-body"></div>
  </div>
</template>

<script>
export default {
  props: ["topFrame"]
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/shared/custom-half-clipped/clipped-frame.scss";
</style>
