<template>
  <div :class="['loading-wrapper', showLoading ? '' : 'loading-wrapper--hide']">
    <div class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["showLoading"]
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/shared/loading.scss";
</style>
