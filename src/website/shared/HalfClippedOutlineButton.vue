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
@import "../../assets/sass/website/shared/half-clipped-outline-button.scss";
</style>
