<template>
  <div class="hero-carousel">
    <HalfClippedShape>
      <template #content>
        <HeroSlider
          :slides="slides"
          customBulletsStyleClass="hero-bullets"
          :timeInMillisecond="7000"
        >
          <template #carouselSlide="{slide}">
            <div class="hero-carousel__text">
              <transition name="hero-title" appear>
                <h1 class="hero-carousel__title">
                  {{ slide.title }}
                </h1>
              </transition>
              <transition name="hero-content" appear>
                <h4 class="hero-carousel__content">
                  {{ slide.content }}
                </h4>
              </transition>
            </div>
          </template>
        </HeroSlider>
      </template>
    </HalfClippedShape>
  </div>
</template>

<script>
import HeroSlider from "../../shared/Carousel/HeroSlider";
import HalfClippedShape from "../../shared/HalfClippedShape";
import heroCarouselData from "../../../assets/json/HeroCarousel.json";

export default {
  components: {
    HeroSlider,
    HalfClippedShape
  },
  data() {
    return {
      slides: heroCarouselData
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/home/hero-carousel.scss";
@import "../../../assets/sass/website/mixins.scss";

$time: 3s;
$delay: 0s;
$offset: 0.3s;

.hero-title-enter-active,
.hero-content-enter-active {
  @include generateTextAnimation($time, next-enter);
}
.hero-title-leave-active,
.hero-content-leave-active {
  @include generateTextAnimation($time, next-leave);
}

@keyframes next-enter {
  0% {
    right: -100%;
    opacity: 0;
  }
  100% {
    right: 0;
    opacity: 1;
  }
}
@keyframes next-leave {
  0% {
    right: 0;
    opacity: 1;
  }
  100% {
    right: 100%;
    opacity: 0;
  }
}

@keyframes prev-enter {
  0% {
    right: 100%;
    opacity: 0;
  }
  100% {
    right: 0;
    opacity: 1;
  }
}
@keyframes prev-leave {
  0% {
    right: 0;
    opacity: 1;
  }
  100% {
    right: -100%;
    opacity: 0;
  }
}
</style>
