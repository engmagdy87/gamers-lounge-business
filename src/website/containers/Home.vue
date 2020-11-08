<template>
  <div class="home-wrapper">
    <Hero />
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import store from "../../store/index";
import types from "../../store/types";
import Hero from "../components/home/Hero";

export default {
  components: {
    Hero
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/containers/home.scss";
</style>
