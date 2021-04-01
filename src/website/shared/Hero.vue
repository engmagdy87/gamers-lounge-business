<template>
  <div
    :class="page === 'home' ? 'hero-wrapper' : 'hero-wrapper-services'"
    :style="{ backgroundImage: `url(${heroImage})` }"
  >
    <slot name="hero-content"></slot>
  </div>
</template>

<script>
export default {
  props: {
    heroImage: {
      type: String,
      default: ""
    },
    page: {
      type: String,
      default: "home"
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/shared/hero.scss";
</style>
