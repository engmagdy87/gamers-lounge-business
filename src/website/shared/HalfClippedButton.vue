<template>
  <div>
    <HalfClippedShape isButton :onClickAction="goToUrl">
      <template #content>
        {{ text }}
      </template>
    </HalfClippedShape>
  </div>
</template>

<script>
import HalfClippedShape from "./HalfClippedShape";

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
    HalfClippedShape
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/color-palette.scss";
@import "../../assets/sass/website/shared/half-clipped-shape.scss";

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
