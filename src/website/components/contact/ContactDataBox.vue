<template>
  <div>
    <HalfClippedShape>
      <template #content>
        <div class="contact-data-box-wrapper">
          <div class="contact-data-box-wrapper__img">
            <img :src="data.icon" />
          </div>
          <p class="contact-data-box-wrapper__title">{{ data.title }}</p>
          <p class="contact-data-box-wrapper__details">{{ data.details }}</p>
        </div>
      </template>
    </HalfClippedShape>
  </div>
</template>

<script>
import HalfClippedShape from "../../shared/HalfClippedShape";

export default {
  props: ["data"],
  components: {
    HalfClippedShape
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/color-palette.scss";
@import "../../../assets/sass/website/components/contact/contact-data-box.scss";
@import "../../../assets/sass/website/shared/half-clipped-shape.scss";

// All have vw as divide operation units must be the same for all
$clipped-length: 3vw;

$clipped-shape-width: 25vw;
$clipped-shape-height: 15vw;

// extra-small
$clipped-shape-width-xs: ($clipped-shape-width + 5vw) * 3;
$clipped-shape-height-xs: ($clipped-shape-height + 10vw) * 2;

// small
$clipped-shape-width-sm: ($clipped-shape-width + 5vw) * 2;
$clipped-shape-height-sm: ($clipped-shape-height + 5vw) * 2;

// medium
$clipped-shape-width-md: $clipped-shape-width + 5vw;
$clipped-shape-height-md: $clipped-shape-height * 2;

// large
$clipped-shape-width-lg: $clipped-shape-width + 5vw;
$clipped-shape-height-lg: $clipped-shape-height + 10vw;

// x-large
$clipped-shape-width-xlg: $clipped-shape-width + 5vw;
$clipped-shape-height-xlg: $clipped-shape-height + 10vw;

// xx-large
$clipped-shape-width-xxlg: $clipped-shape-width;
$clipped-shape-height-xxlg: $clipped-shape-height;

// use /deep/ to apply scss classes to the child components
div /deep/ {
  @include filled-half-clipped-shape(
    $clipped-length,
    $clipped-shape-width,
    $clipped-shape-height,
    $clipped-shape-width-xs,
    $clipped-shape-height-xs,
    $clipped-shape-width-sm,
    $clipped-shape-height-sm,
    $clipped-shape-width-md,
    $clipped-shape-height-md,
    $clipped-shape-width-lg,
    $clipped-shape-height-lg,
    $clipped-shape-width-xlg,
    $clipped-shape-height-xlg,
    $clipped-shape-width-xxlg,
    $clipped-shape-height-xxlg,
    rgba($primary, 0.7)
  );
}
</style>
