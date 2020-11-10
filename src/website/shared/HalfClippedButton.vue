<template>
  <div>
    <HalfClippedShape isButton :onClickAction="sendMessage">
      <template #content> {{ text }}</template>
    </HalfClippedShape>
  </div>
</template>

<script>
import HalfClippedShape from "./HalfClippedShape";

export default {
  props: ["text"],
  methods: {
    sendMessage() {
      console.log("====================================");
      console.log("send Message");
      console.log("====================================");
    }
  },
  components: {
    HalfClippedShape
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/shared/half-clipped-button.scss";
</style>
