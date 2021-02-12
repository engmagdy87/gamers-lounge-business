<template>
  <div class="hero-wrapper" :style="{ backgroundImage: `url(${heroImage})` }">
    <slot name="hero-content"></slot>
  </div>
</template>

<script>
export default {
  props: {
    heroImage: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/shared/hero.scss";
</style>
