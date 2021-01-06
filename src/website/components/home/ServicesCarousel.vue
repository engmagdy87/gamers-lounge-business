<template>
  <div class="services-carousel">
    <div class="services-header">
      <h4 class="services-header__sub-text">What we Serve?</h4>
      <h1 class="services-header__title">OUR SERVICES</h1>
      <router-link to="/" class="services-header__view-link">
        View all
      </router-link>
    </div>
    <HalfClippedShape>
      <template #content>
        <ServiceSlider
          :slides="slides"
          :timeInMillisecond="7000"
          customBulletsStyleClass="hero-bullets"
          :changeAnimation="changeAnimation"
        >
          <template #carouselSlide="{slide,index}">
            <div class="row m-0 position-relative">
              <div class="col-12 col-md-6 services-carousel__text p-0">
                <transition-group :name="titleDirection" appear>
                  <h1
                    v-if="index"
                    v-for="i in 20"
                    :key="i"
                    :class="
                      `services-carousel__title services-carousel__title${i}`
                    "
                  >
                    {{ slide.title }}
                  </h1>
                </transition-group>

                <transition-group :name="contentDirection" appear>
                  <p
                    v-if="index"
                    v-for="i in 20"
                    :key="i"
                    :class="
                      `services-carousel__content services-carousel__content${i}`
                    "
                  >
                    {{ slide.text }}
                  </p>
                </transition-group>

                <div class="services-carousel__btn" v-if="index">
                  <HalfClippedOutlineButton
                    text="Read More"
                    :showMaskEffect="true"
                    :buttonMaskCSSStyle="buttonMaskCSSStyle"
                  />
                </div>
              </div>
              <transition :name="imageDirection" appear>
                <div
                  class="col-12 col-md-6 services-carousel__img-wrapper"
                  v-if="index"
                >
                  <img
                    class="services-carousel__img"
                    draggable="false"
                    :src="slide.img"
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
import ServiceSlider from "../../shared/Carousel/ServiceSlider";
import HalfClippedShape from "../../shared/HalfClippedShape";
import HalfClippedOutlineButton from "../../shared/HalfClippedOutlineButton";

export default {
  components: {
    ServiceSlider,
    HalfClippedShape,
    HalfClippedOutlineButton
  },
  data() {
    return {
      slides: [
        {
          title: "Esports Tournaments1",
          text:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam e Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eLorem ipsum dolor sit amet, consetetur sadipscing elitr",
          img: "./images/pubgpic.png"
        },
        {
          title: "Esports Tournaments2",
          text:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam e",
          img: "./images/hero.jpg"
        },
        {
          title: "Esports Tournaments3",
          text:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam e",
          img: "./images/fifa-logo.png"
        }
      ],
      titleDirection: "service-title-next",
      contentDirection: "service-content-next",
      imageDirection: "service-image-next",
      buttonMaskCSSStyle: "button-mask-next"
    };
  },
  methods: {
    changeAnimation(dir) {
      if (dir === "prev") {
        this.titleDirection = "service-title-prev";
        this.contentDirection = "service-content-prev";
        this.imageDirection = "service-image-prev";
        this.buttonMaskCSSStyle = "button-mask-prev";
      } else {
        this.titleDirection = "service-title-next";
        this.contentDirection = "service-content-next";
        this.imageDirection = "service-image-next";
        this.buttonMaskCSSStyle = "button-mask-next";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/color-palette.scss";
@import "../../../assets/sass/website/mixins.scss";
@import "../../../assets/sass/website/components/home/services-carousel.scss";

$time: 3s;
$delay: 8ms;
$offset: 0.3s;
$blur: 10px;

//********title*********
@for $i from 1 through 20 {
  .service-title-next-enter-to.services-carousel__title#{$i},
  .service-title-next-enter.services-carousel__title#{$i} {
    right: -100%;
    opacity: 0;
  }
  .service-title-next-enter-active.services-carousel__title#{$i} {
    @include generateTextAnimation($time, $delay, 0, $i, next-enter);
  }
  .service-title-next-leave-active.services-carousel__title#{$i} {
    @include generateTextAnimation($time, $delay, 0, $i, next-leave);
  }
  .service-title-prev-enter-to.services-carousel__title#{$i},
  .service-title-prev-enter.services-carousel__title#{$i} {
    right: 100%;
    opacity: 0;
  }
  .service-title-prev-enter-active.services-carousel__title#{$i} {
    @include generateTextAnimation($time, $delay, 0, $i, prev-enter);
  }
  .service-title-prev-leave-active.services-carousel__title#{$i} {
    @include generateTextAnimation($time, $delay, 0, $i, prev-leave);
  }
}
//********content*********
@for $i from 1 through 20 {
  .service-content-next-enter-to.services-carousel__content#{$i},
  .service-content-next-enter.services-carousel__content#{$i} {
    right: -100%;
    opacity: 0;
  }
  .service-content-next-enter-active.services-carousel__content#{$i} {
    @include generateTextAnimation($time, $delay, $offset, $i, next-enter);
  }
  .service-content-next-leave-active.services-carousel__content#{$i} {
    @include generateTextAnimation($time, $delay, $offset, $i, next-leave);
  }
  .service-content-prev-enter-to.services-carousel__content#{$i},
  .service-content-prev-enter.services-carousel__content#{$i} {
    right: 100%;
    opacity: 0;
  }
  .service-content-prev-enter-active.services-carousel__content#{$i} {
    @include generateTextAnimation($time, $delay, $offset, $i, prev-enter);
  }
  .service-content-prev-leave-active.services-carousel__content#{$i} {
    @include generateTextAnimation($time, $delay, $offset, $i, prev-leave);
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

// //***********************************/

.service-image-next-enter-active,
.service-image-next-leave-active {
  animation: animateImage;
  animation-duration: 10s;
  animation-timing-function: cubic-bezier(0.4, 0.3, 0.5, 1);
  transition: all 3s;
}
.service-image-next-enter {
  opacity: 0;
}
.service-image-next-leave-to {
  opacity: 0;
}
// //***********************************/
.service-image-prev-enter-active,
.service-image-prev-leave-active {
  animation: reverseAnimateImage;
  animation-duration: 10s;
  animation-timing-function: cubic-bezier(0.4, 0.3, 0.5, 1);
  transition: all 3s;
}
.service-image-prev-enter {
  opacity: 0;
}
.service-image-prev-leave-to {
  opacity: 0;
}
@keyframes animateImage {
  0% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes reverseAnimateImage {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.8);
  }
}

// //***********************************/

/deep/ .button-mask-next {
  width: 200px;
  height: 200px;
  background-color: $dark-accent;
  position: absolute;
  right: 0;
  animation: button-mask-animation-next;
  animation-duration: 1.8 * $time;
  transform: translateX(200px);
  z-index: 9;
}

@keyframes button-mask-animation-next {
  0% {
    transform: rotate(30deg) translateX(200px);
  }
  100% {
    transform: rotate(30deg) translateX(-200px);
  }
}

/deep/ .button-mask-prev {
  width: 200px;
  height: 200px;
  background-color: $dark-accent;
  position: absolute;
  right: 0;
  animation: button-mask-animation-prev;
  animation-duration: 1.8 * $time;
  transform: translateX(-200px);
  z-index: 9;
}

@keyframes button-mask-animation-prev {
  0% {
    transform: rotate(30deg) translateX(-200px);
  }
  100% {
    transform: rotate(30deg) translateX(200px);
  }
}
</style>
