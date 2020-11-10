<template>
  <div>
    <HalfClippedOutlinedShape isButton :onClickAction="goToUrl">
      <template #content>
        {{ text }}
      </template>
    </HalfClippedOutlinedShape>
  </div>
</template>

<script>
import HalfClippedOutlinedShape from "./HalfClippedOutlinedShape";

export default {
  props: ["text"],
  methods: {
    goToUrl() {
      console.log("====================================");
      console.log("Go To GL GAMES");
      console.log("====================================");
    }
  },
  components: {
    HalfClippedOutlinedShape
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/color-palette.scss";
@import "../../assets/sass/website/shared/half-clipped-outline-shape.scss";

$clipped-shape-width: 150px;
$clipped-shape-height: 40px;
$clipped-length: $clipped-shape-height / 2;
$clipped-shape-width-mobile: 144px;
$clipped-shape-height-mobile: 42px;
$clipped-length-mobile: $clipped-shape-height / 2;

// use /deep/ to apply scss classes to the child components
div /deep/ {
  @include outline-half-clipped-shape(
    $clipped-shape-width,
    $clipped-shape-height,
    $clipped-length,
    $clipped-shape-width-mobile,
    $clipped-shape-height-mobile,
    $clipped-length-mobile,
    $primary,
    $accent
  );
}
</style>
