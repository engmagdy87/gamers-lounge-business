<template>
  <div>
    <HalfClippedOutlinedShape isButton>
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
  components: {
    HalfClippedOutlinedShape
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/shared/half-clipped-outline-button.scss";
</style>
