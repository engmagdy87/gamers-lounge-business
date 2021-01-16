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
              <transition-group name="hero-title" appear>
                <h1
                  v-for="i in 10"
                  :key="i"
                  :class="`hero-carousel__title hero-carousel__title${i}`"
                >
                  {{ slide.title }}
                </h1>
              </transition-group>
              <transition-group name="hero-content" appear>
                <h4
                  v-for="i in 10"
                  :key="i"
                  :class="`hero-carousel__content hero-carousel__content${i}`"
                >
                  {{ slide.content }}
                </h4>
              </transition-group>
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
export default {
  components: {
    HeroSlider,
    HalfClippedShape
  },
  data() {
    return {
      slides: [
        {
          title: "SCULPTING A NEW ERA OF ESPORTS IN THE MENA",
          content: "HELLO123"
        },
        {
          title: "Begining456",
          content: "HELLO456"
        },
        {
          title: "Begining123",
          content: "HELLO789"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/home/hero-carousel.scss";
@import "../../../assets/sass/website/mixins.scss";

$time: 3s;
$delay: 4ms;
$offset: 0.3s;
$blur: 10px;

//********title*********
@for $i from 2 through 10 {
  .hero-carousel__title.hero-carousel__title#{$i} {
    opacity: 0;
  }
  .hero-title-leave-active.hero-carousel__title#{$i} {
    opacity: 0.1 !important;
  }
}
@for $i from 1 through 10 {
  .hero-title-enter-to.hero-carousel__title#{$i},
  .hero-title-enter.hero-carousel__title#{$i} {
    right: -100%;
    opacity: 0;
  }
  .hero-title-enter-active.hero-carousel__title#{$i} {
    @include generateTextAnimation($time, $delay, 0, $i, next-enter);
  }
  .hero-title-leave-active.hero-carousel__title#{$i} {
    @include generateTextAnimation($time, $delay, 0, $i, next-leave);
  }
}
//********content*********
.hero-carousel__content.hero-carousel__content1 {
  font-weight: bold;
}
@for $i from 2 through 10 {
  .hero-carousel__content.hero-carousel__content#{$i} {
    opacity: 0;
  }
  .hero-content-leave-active.hero-carousel__content#{$i} {
    opacity: 0.1 !important;
    font-weight: bold;
  }
}
@for $i from 1 through 10 {
  .hero-content-enter-to.hero-carousel__content#{$i},
  .hero-content-enter.hero-carousel__content#{$i} {
    right: -100%;
    opacity: 0;
  }
  .hero-content-enter-active.hero-carousel__content#{$i} {
    @include generateTextAnimation($time, $delay, $offset, $i, next-enter);
  }
  .hero-content-leave-active.hero-carousel__content#{$i} {
    @include generateTextAnimation($time, $delay, $offset, $i, next-leave);
  }
}

@keyframes next-enter {
  0% {
    right: -100%;
    opacity: 0;
  }
  100% {
    right: 0;
    opacity: 0.2;
  }
}
@keyframes next-leave {
  0% {
    right: 0;
    opacity: 0.2;
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
    opacity: 0.2;
  }
}
@keyframes prev-leave {
  0% {
    right: 0;
    opacity: 0.2;
  }
  100% {
    right: -100%;
    opacity: 0;
  }
}
</style>
