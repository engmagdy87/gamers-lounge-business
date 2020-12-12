<template>
  <div class="services-wrapper">
      <Hero>
          <template #hero-content>
            <div class="row align-items-end h-100 justify-content-center services-container">
              <HalfClippedShape>
                  <template #content>
                    <div class="services-container__heroContent">
                      <h1>FEEL THE EXCITEMENT OF OUR GAMES</h1>
                      <p>Gamers Lounge is the main catalyst to establish the Esports scene In the Middle 
                        East & North Africa regions, Playing an important role to unify the gaming community</p>
                    </div>
                  </template>
              </HalfClippedShape>
              </div>
          </template>
      </Hero>

    <ServicesSection />

  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import store from "../../store/index";
import types from "../../store/types";
import Hero from "../shared/Hero";
import HalfClippedShape from "../shared/HalfClippedShape";
import ServicesSection from "../components/services/ServicesSection";

export default {
  components: {
    Hero,
    HalfClippedShape,
    ServicesSection
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/containers/services.scss";
@import "../../assets/sass/website/color-palette.scss";

</style>

