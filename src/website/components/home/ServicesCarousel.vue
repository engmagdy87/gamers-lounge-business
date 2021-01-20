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
                    v-for="i in 5"
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
                    v-for="i in 5"
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
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam e Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam e",
          img: "./images/fifa-logo.png"
        }
      ],
      titleDirection: "service-title-next",
      contentDirection: "service-content-next",
      imageDirection: "service-image-next",
      buttonMaskCSSStyle: "service-button-mask-next"
    };
  },
  methods: {
    changeAnimation(dir) {
      if (dir === "prev") {
        this.titleDirection = "service-title-prev";
        this.contentDirection = "service-content-prev";
        this.imageDirection = "service-image-prev";
        this.buttonMaskCSSStyle = "service-button-mask-prev";
        setTimeout(() => {
          this.titleDirection = "service-title-next";
          this.contentDirection = "service-content-next";
          this.imageDirection = "service-image-next";
          this.buttonMaskCSSStyle = "service-button-mask-next";
        }, 7000);
      } else {
        this.titleDirection = "service-title-next";
        this.contentDirection = "service-content-next";
        this.imageDirection = "service-image-next";
        this.buttonMaskCSSStyle = "service-button-mask-next";
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
// $delay: 0.04s;
$delay: 0s;
$offset: 0.3s;

//********title************************************************************
.service-title-next-enter.services-carousel__title1,
.service-title-next-enter-to.services-carousel__title1 {
  right: -100%;
  opacity: 0;
}
.service-title-next-leave.services-carousel__title1 {
  right: 0;
  opacity: 1;
}
.service-title-next-leave-to.services-carousel__title1 {
  right: 100%;
  opacity: 1;
}
.service-title-prev-enter.services-carousel__title1 {
  right: 100%;
  opacity: 1;
}
.service-title-prev-leave.services-carousel__title1 {
  right: 0;
  opacity: 1;
}
.service-title-next-enter-active.services-carousel__title1 {
  @include generateTextAnimation($time, $delay, 0, 1, next-enter-bluprint);
}
.service-title-next-leave-active.services-carousel__title1 {
  @include generateTextAnimation($time, $delay, 0, 1, next-leave-bluprint);
}
.service-title-prev-enter-active.services-carousel__title1 {
  @include generateTextAnimation($time, $delay, 0, 1, prev-enter-bluprint);
}
.service-title-prev-leave-active.services-carousel__title1 {
  @include generateTextAnimation($time, $delay, 0, 1, prev-leave-bluprint);
}
@for $i from 2 through 5 {
  .service-title-next-enter.services-carousel__title#{$i} {
    right: -100%;
    opacity: 0;
  }
  .service-title-next-enter-to.services-carousel__title#{$i} {
    right: -100%;
    opacity: 0;
  }
  .service-title-next-leave.services-carousel__title#{$i} {
    right: 0;
    opacity: 1;
  }
  .service-title-next-leave-to.services-carousel__title#{$i} {
    right: 100%;
    opacity: 0;
  }
  .service-title-next-enter-active.services-carousel__title#{$i} {
    @include generateTextAnimation($time, $delay, 0, $i, next-enter-replica);
  }
  .service-title-next-leave-active.services-carousel__title#{$i} {
    @include generateTextAnimation($time, $delay, 0, $i, next-leave-replica);
  }
  .service-title-prev-enter.services-carousel__title#{$i} {
    right: 100%;
    opacity: 0;
  }
  .service-title-prev-leave.services-carousel__title#{$i} {
    right: 0;
    opacity: 1;
  }
  .service-title-prev-enter-active.services-carousel__title#{$i} {
    @include generateTextAnimation($time, $delay, 0, $i, prev-enter-replica);
  }
  .service-title-prev-leave-active.services-carousel__title#{$i} {
    @include generateTextAnimation($time, $delay, 0, $i, prev-leave-replica);
  }
}
//********content************************************************************
.service-content-next-enter-to {
  opacity: 0;
}
.service-content-next-enter-active {
  right: 120%;
}
.service-content-prev-enter-active {
  right: 120%;
}
.service-content-next-enter.services-carousel__content1,
.service-content-next-enter-to.services-carousel__content1 {
  right: -100%;
  opacity: 0;
}
.service-content-next-leave.services-carousel__content1 {
  right: 0;
  opacity: 1;
}
.service-content-prev-enter.services-carousel__content1 {
  right: 120%;
  opacity: 0;
}
.service-content-prev-leave.services-carousel__content1 {
  right: 0;
  opacity: 1;
}
.service-content-next-enter-active.services-carousel__content1 {
  @include generateTextAnimation(
    $time,
    $delay,
    $offset,
    1,
    next-enter-bluprint
  );
}
.service-content-next-leave-active.services-carousel__content1 {
  @include generateTextAnimation(
    $time,
    $delay,
    $offset,
    1,
    next-leave-bluprint
  );
}
.service-content-prev-enter-active.services-carousel__content1 {
  @include generateTextAnimation(
    $time,
    $delay,
    $offset,
    1,
    prev-enter-bluprint
  );
}
.service-content-prev-leave-active.services-carousel__content1 {
  @include generateTextAnimation(
    $time,
    $delay,
    $offset,
    1,
    prev-leave-bluprint
  );
}
@for $i from 2 through 5 {
  .service-content-next-enter.services-carousel__content#{$i} {
    right: -100%;
    opacity: 0;
  }
  .service-content-next-enter-to.services-carousel__content#{$i} {
    right: -100%;
    opacity: 0;
  }
  .service-content-next-leave.services-carousel__content#{$i} {
    right: 0;
    opacity: 1;
  }
  .service-content-next-enter-active.services-carousel__content#{$i} {
    @include generateTextAnimation(
      $time,
      $delay,
      $offset,
      $i,
      next-enter-replica
    );
  }
  .service-content-next-leave-active.services-carousel__content#{$i} {
    @include generateTextAnimation(
      $time,
      $delay,
      $offset,
      $i,
      next-leave-replica
    );
  }
  .service-content-prev-enter.services-carousel__content#{$i} {
    right: 120%;
    opacity: 0;
  }
  .service-content-prev-leave.services-carousel__content#{$i} {
    right: 0;
    opacity: 1;
  }
  .service-content-prev-enter-active.services-carousel__content#{$i} {
    @include generateTextAnimation(
      $time,
      $delay,
      $offset,
      $i,
      prev-enter-replica
    );
  }
  .service-content-prev-leave-active.services-carousel__content#{$i} {
    @include generateTextAnimation(
      $time,
      $delay,
      $offset,
      $i,
      prev-leave-replica
    );
  }
}
//***************************************************************************
// next animation
@keyframes next-enter-replica {
  0% {
    right: -100%;
    opacity: 0;
  }
  25% {
    opacity: 0.25;
  }
  50% {
    opacity: 0.5;
  }
  75% {
    opacity: 0.75;
  }
  100% {
    right: 0;
    opacity: 1;
  }
}
@keyframes next-leave-replica {
  0% {
    right: 0;
    opacity: 1;
  }
  20% {
    opacity: 0.8;
  }
  40% {
    opacity: 0.6;
  }
  60% {
    opacity: 0.4;
  }
  80% {
    opacity: 0.2;
  }
  100% {
    right: 120%;
    opacity: 0;
  }
}
@keyframes next-enter-bluprint {
  0% {
    right: -100%;
  }
  100% {
    right: 0;
  }
}
@keyframes next-leave-bluprint {
  0% {
    right: 0;
  }
  100% {
    right: 120%;
  }
}
// previous animation
@keyframes prev-enter-replica {
  0% {
    right: 120%;
    opacity: 1;
  }
  25% {
    opacity: 0.75;
  }
  50% {
    opacity: 0.5;
  }
  75% {
    opacity: 0.25;
  }
  100% {
    right: 0;
    opacity: 0;
  }
}
@keyframes prev-leave-replica {
  0% {
    right: 0;
    opacity: 1;
  }
  20% {
    opacity: 0.8;
  }
  40% {
    opacity: 0.6;
  }
  60% {
    opacity: 0.4;
  }
  80% {
    opacity: 0.2;
  }
  100% {
    right: -100%;
    opacity: 0;
  }
}
@keyframes prev-enter-bluprint {
  0% {
    right: 120%;
  }
  100% {
    right: 0;
  }
}
@keyframes prev-leave-bluprint {
  0% {
    right: 0;
    opacity: 1;
  }
  100% {
    right: -100%;
    opacity: 0;
  }
}

// //*********************************************************************

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
  animation: animateImage;
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

// //***********************************/

/deep/ .service-button-mask-next {
  width: 200px;
  height: 200px;
  background-color: $dark-accent;
  position: absolute;
  right: 0;
  animation: service-button-mask-animation-next;
  animation-duration: 1.8 * $time;
  transform: translateX(200px);
  z-index: 9;
}

@keyframes service-button-mask-animation-next {
  0% {
    transform: rotate(30deg) translateX(200px);
  }
  100% {
    transform: rotate(30deg) translateX(-200px);
  }
}

/deep/ .service-button-mask-prev {
  width: 200px;
  height: 200px;
  background-color: $dark-accent;
  position: absolute;
  right: 0;
  animation: service-button-mask-animation-prev;
  animation-duration: 1.8 * $time;
  transform: translateX(-200px);
  z-index: 9;
}

@keyframes service-button-mask-animation-prev {
  0% {
    transform: rotate(30deg) translateX(-200px);
  }
  100% {
    transform: rotate(30deg) translateX(200px);
  }
}
</style>
