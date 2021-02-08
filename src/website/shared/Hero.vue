<template>
  <div
    :class="['hero-wrapper', !heroImage.includes('http') && 'bg-image']"
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
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/shared/hero.scss";
.bg-image {
  background-image: url("/images/hero.jpg") !important;
}
</style>
