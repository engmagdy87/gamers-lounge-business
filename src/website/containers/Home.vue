<template>
  <div class="home-wrapper">
    <Hero>
      <template #hero-content> 
        <HeroCarousel />
      </template>
    </Hero>

    <ServicesCarousel />
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import store from "../../store/index";
import types from "../../store/types";
import Hero from "../shared/Hero";
import HeroCarousel from "../components/home/HeroCarousel"
import ServicesCarousel from "../components/home/ServicesCarousel"
export default {
  components: {
    Hero,
    HeroCarousel,
    ServicesCarousel
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/containers/home.scss";
</style>
