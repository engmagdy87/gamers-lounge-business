<template>
  <div class="work-carousel">
    <div class="work-header">
      <h4 class="work-header__sub-text">What we Do?</h4>
      <h1 class="work-header__title">OUR WORK</h1>
      <router-link to="/" class="work-header__view-link">
        View all
      </router-link>
    </div>

    <div class="work-carousel__bg"></div>

    <div class="work-carousel__carousel-container">
      <WorkSlider
        :autoPlay="false"
        :slides="slides"
        customBulletsStyleClass="hero-bullets"
      >
        <template #carouselSlide="{slide}">
          <div class="work-carousel__inside">
            <div class="work-carousel__inside--img">
              <HalfClippedShape>
                <template #content>
                  <img draggable="false" :src="slide.img" />
                </template>
              </HalfClippedShape>
            </div>

            <div class="work-carousel__inside--text">
              <div class="work-carousel__inside--text-container">
                <h1 class="work-carousel__inside--title">{{ slide.title }}</h1>
                <p class="work-carousel__inside--content">{{ slide.text }}</p>
              </div>

              <div class="work-carousel__btn">
                <HalfClippedOutlineButton text="Read More" />
              </div>
            </div>
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
      </WorkSlider>
    </div>
  </div>
</template>

<script>
import WorkSlider from "../../shared/Carousel/WorkSlider";
import HalfClippedShape from "../../shared/HalfClippedShape";
import HalfClippedOutlineButton from "../../shared/HalfClippedOutlineButton";

export default {
  components: {
    WorkSlider,
    HalfClippedShape,
    HalfClippedOutlineButton
  },
  data() {
    return {
      slides: [
        {
          title: "Esports Tournaments1",
          text:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam e  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam e",
          img: "./images/hero.jpg"
        },
        {
          title: "Esports Tournaments2",
          text:
            " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam e  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam e Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam e",
          img: "./images/hero.jpg"
        },
        {
          title: "Esports Tournaments3",
          text:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam e",
          img: "./images/hero.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/home/work-carousel.scss";
</style>
