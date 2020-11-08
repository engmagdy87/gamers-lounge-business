<template>
  <div></div>
</template>

<style lang="scss" scoped>
@import "../../assets/sass/website/color-palette.scss";
@import "../../assets/sass/website/shared/fully-clipped-shape.scss";
$clipped-shape-width: 30vw;
$clipped-shape-height: 20vw;
$clipped-length: 2vw;
$clipped-shape-width-mobile: 30vw;
$clipped-shape-height-mobile: 20vw;
$clipped-length-mobile: 10vw;

@include filled-fully-clipped-shape(
  $clipped-shape-width,
  $clipped-shape-height,
  $clipped-length,
  $clipped-shape-width-mobile,
  $clipped-shape-height-mobile,
  $clipped-length-mobile,
  $primary
);
</style>
