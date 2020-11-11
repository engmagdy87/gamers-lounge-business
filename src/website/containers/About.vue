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

    <Aboutsection/>

    <Clients />
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import store from "../../store/index";
import types from "../../store/types";
import Hero from "../shared/Hero";
import HalfClippedShape from "../shared/HalfClippedShape";
import Aboutsection from "../components/about/Aboutsection";
import Clients from "../components/about/Clients";

export default {
  components: {
    Hero,
    HalfClippedShape,
    Aboutsection,
    Clients
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/containers/about.scss";
@import "../../assets/sass/website/color-palette.scss";

// $clipped-shape-width: 1260px;
// $clipped-shape-height: 400px;
// $clipped-length: $clipped-shape-height / 5;
// $clipped-shape-width-mobile: 700px;
// $clipped-shape-height-mobile: 400px;
// $clipped-length-mobile: $clipped-shape-height / 5;

// // use /deep/ to apply scss classes to the child components
// div /deep/ {
//   @include outline-half-clipped-shape(
//     $clipped-shape-width,
//     $clipped-shape-height,
//     $clipped-length,
//     $clipped-shape-width-mobile,
//     $clipped-shape-height-mobile,
//     $clipped-length-mobile,
//     $primary,
//     $accent
//   );
// }
</style>
