<template>
  <div class="home-wrapper">
    <Hero>
      <template #hero-content> 
        <Carousel>
          <template #carouselSlide="{slide}">
            <!-- Slide Component uses "slide" prop 👆-->
            <div :slide="slide" style="background-color:black; color:red;"> <h1>HELLO HELLO</h1> </div>
            <div :slide="slide" style="background-color:orange; color:black;"> <h1>BYE BYE</h1> </div>
          </template>
          
          <template #carouselNavigationButtons="{goToPrev,goToNext}">
            <!-- Navigation Components uses "goToPrev" and "goToNext" props 👆-->
            <button :goToPrev="goToPrev"> Prev </button>
            <button :goToNext="goToNext"> Next </button>
          </template>
        </Carousel>
      </template>
    </Hero>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import store from "../../store/index";
import types from "../../store/types";
import Hero from "../shared/Hero";
import Carousel from '../shared/Carousel/Carousel.vue';

export default {
  components: {
    Hero,
    Carousel
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/containers/home.scss";
</style>
