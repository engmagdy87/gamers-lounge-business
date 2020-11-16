<template>
  <div>
    <HalfClippedShape isButton :onClickAction="onClickAction">
      <template #content> {{ text }}</template>
    </HalfClippedShape>
  </div>
</template>

<script>
import HalfClippedShape from "./HalfClippedShape";

export default {
  props: ["text", "onClickAction"],
  components: {
    HalfClippedShape
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/shared/half-clipped-button.scss";
</style>
