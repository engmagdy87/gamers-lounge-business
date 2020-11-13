<template>
  <div class="about-wrapper">
      <Hero>
          <template #hero-content>
            <div class="row align-items-end h-100 justify-content-center about-container">
              <HalfClippedShape>
                  <template #content>
                    <div class="about-container__heroContent">
                      <h1>OUR VISION</h1>
                      <p>Bridge amateur, semi-pro & professional gamers via one platform <br>
                      to help develop the esports scene & gamer culture, while changing
                      the mindset towards esports in the</p>

                      <h1> OUR MISSION & OBJECTIVES</h1>
                      <p>Operate top notch eports tournaments & events, creating more opportunities for ameteurs
                        and semi-professionals to compete & evolve into professional gamers they aspire to be,
                        while fostering an inclusive enviroment for esports players across the region
                      </p>
                    </div>
                  </template>
              </HalfClippedShape>
              </div>
          </template>
      </Hero>

    <AboutSection/>

    <Clients />
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import store from "../../store/index";
import types from "../../store/types";
import Hero from "../shared/Hero";
import HalfClippedShape from "../shared/HalfClippedShape";
import AboutSection from "../components/about/AboutSection";
import Clients from "../components/about/Clients";

export default {
  components: {
    Hero,
    HalfClippedShape,
    AboutSection,
    Clients
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/containers/about.scss";
@import "../../assets/sass/website/color-palette.scss";

</style>
