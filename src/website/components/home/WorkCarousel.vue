<template>
  <div class="services-carousel">
    <div class="services-header">
      <h1 class="services-header__title">OUR WORK</h1>
    </div>
    <HalfClippedShape>
      <template #content>
        <ServiceSlider
          :slides="homePageWorks"
          :timeInMillisecond="4000"
          customBulletsStyleClass="hero-bullets"
        >
          <template #carouselSlide="{slide,index}">
            <div class="row m-0 position-relative">
              <div class="col-12 col-md-8 services-carousel__text p-0">
                <transition appear name="slide-fade" mode="out-in">
                  <h1
                    v-if="index"
                    class="services-carousel__title services-carousel__title"
                  >
                    {{ slide.title }}
                  </h1>
                </transition>

                <transition appear name="slide-fade" mode="out-in">
                  <p
                    v-if="index"
                    class="description-container services-carousel__content services-carousel__content"
                    v-html="slide.short_description"
                  ></p>
                </transition>

                <router-link
                  :to="`/services/${slide.id}-${reformatURL(slide.title)}`"
                >
                  <button class="services-carousel__btn" v-if="index">
                    See More
                  </button>
                </router-link>
              </div>
              <transition appear name="slide-fade" mode="out-in">
                <div
                  class="col-12 col-md-4 services-carousel__img-wrapper p-0"
                  v-if="index"
                >
                  <img
                    class="services-carousel__img"
                    draggable="false"
                    :src="slide.img_slider.url"
                    :alt="slide.title"
                  />
                </div>
              </transition>
            </div>
          </template>

          <template #carouselNavigationButtons="{goToPrev,goToNext}">
            <div class="carousel-navigation">
              <button @click="goToPrev">
                <img src="../../../../public/images/prev.svg" />
              </button>
              <button @click="goToNext">
                <img src="../../../../public/images/next.svg" />
              </button>
            </div>
          </template>
        </ServiceSlider>
      </template>
    </HalfClippedShape>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ServiceSlider from "../../shared/Carousel/ServiceSlider";
import HalfClippedShape from "../../shared/HalfClippedShape";
import { reformatStringToBeInURL } from "../../../helpers/StringsHelper";
import redirectToNewTab from "../../../helpers/RedirectToNewTab";

export default {
  components: {
    ServiceSlider,
    HalfClippedShape
  },
  computed: {
    ...mapState({
      homePageWorks: state => state.works.homePageWorks
    })
  },
  methods: {
    reformatURL(id) {
      return reformatStringToBeInURL(id);
    }
  },
  updated() {
    redirectToNewTab("description-container");
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/color-palette.scss";
@import "../../../assets/sass/website/mixins.scss";
@import "../../../assets/sass/website/components/home/services-carousel.scss";

$time: 3s;

.slide-fade-enter-active {
  transition: all $time ease;
}
.slide-fade-leave-active {
  transition: all $time ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
</style>
