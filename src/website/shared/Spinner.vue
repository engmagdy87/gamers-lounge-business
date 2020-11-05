<template>
  <div
    :class="[
      'spinner-wrapper',
      showSpinnerFlag ? '' : 'spinner-wrapper--hide',
      smallLoader
        ? 'spinner-wrapper--small-loader'
        : 'spinner-wrapper--large-loader'
    ]"
  >
    <div class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["smallLoader", "showSpinnerFlag"]
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/shared/spinner.scss";
</style>
