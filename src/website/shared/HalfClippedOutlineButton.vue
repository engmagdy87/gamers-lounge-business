<template>
  <div>
    <HalfClippedOutlinedShape isButton>
      <template #content class="position-relative">
        <span class="text">
          {{ text }}
        </span>
        <div :class="buttonMaskCSSStyle" v-if="showMaskEffect"></div>
      </template>
    </HalfClippedOutlinedShape>
  </div>
</template>

<script>
import HalfClippedOutlinedShape from "./HalfClippedOutlinedShape";

export default {
  props: {
    text: {
      type: String,
      default: ""
    },
    buttonMaskCSSStyle: {
      type: String,
      default: ""
    },
    showMaskEffect: {
      type: Boolean,
      default: false
    }
  },
  components: {
    HalfClippedOutlinedShape
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/shared/half-clipped-outline-button.scss";
.text {
  z-index: 10;
}
</style>
