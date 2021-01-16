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
        :slides="slides"
        :timeInMillisecond="7000"
        customBulletsStyleClass="hero-bullets"
        :changeAnimation="changeAnimation"
      >
        <template #carouselSlide="{slide,index}">
          <div class="work-carousel__inside">
            <transition :name="imageDirection" appear>
              <div class="work-carousel__inside__img" v-if="index">
                <HalfClippedShape>
                  <template #content>
                    <img draggable="false" :src="slide.img" />
                  </template>
                </HalfClippedShape>
              </div>
            </transition>
            <div class="work-carousel__inside__text">
              <div class="work-carousel__inside__mask"></div>
              <div class="work-carousel__inside__text-container">
                <transition-group :name="titleDirection" appear>
                  <h1
                    v-if="index"
                    v-for="i in 10"
                    :key="i"
                    :class="
                      `work-carousel__inside__title work-carousel__inside__title${i}`
                    "
                  >
                    {{ slide.title }}
                  </h1>
                </transition-group>
                <transition-group :name="contentDirection" appear>
                  <p
                    v-if="index"
                    v-for="i in 10"
                    :key="i"
                    :class="
                      `work-carousel__inside__content work-carousel__inside__content${i}`
                    "
                  >
                    {{ slide.text }}
                  </p>
                </transition-group>
              </div>

              <div class="work-carousel__btn" v-if="index">
                <HalfClippedOutlineButton
                  text="Read More"
                  :showMaskEffect="true"
                  :buttonMaskCSSStyle="buttonMaskCSSStyle"
                />
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
      ],
      titleDirection: "work-title-next",
      contentDirection: "work-content-next",
      imageDirection: "work-image-next",
      buttonMaskCSSStyle: "work-button-mask-next"
    };
  },
  methods: {
    changeAnimation(dir) {
      if (dir === "prev") {
        this.titleDirection = "work-title-prev";
        this.contentDirection = "work-content-prev";
        this.imageDirection = "work-image-prev";
        this.buttonMaskCSSStyle = "work-button-mask-prev";
        setTimeout(() => {
          this.titleDirection = "work-title-next";
          this.contentDirection = "work-content-next";
          this.imageDirection = "work-image-next";
          this.buttonMaskCSSStyle = "work-button-mask-next";
        }, 7000);
      } else {
        this.titleDirection = "work-title-next";
        this.contentDirection = "work-content-next";
        this.imageDirection = "work-image-next";
        this.buttonMaskCSSStyle = "work-button-mask-next";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/home/work-carousel.scss";
@import "../../../assets/sass/website/color-palette.scss";
@import "../../../assets/sass/website/mixins.scss";

$time: 3s;
$delay: 4ms;
$offset: 0.3s;
$blur: 10px;

$enter-left: 100%;

//********title*********
@for $i from 2 through 10 {
  .work-carousel__inside__title.work-carousel__inside__title#{$i} {
    opacity: 0;
  }
}
@for $i from 1 through 10 {
  .work-title-next-enter-to.work-carousel__inside__title#{$i},
  .work-title-next-enter.work-carousel__inside__title#{$i} {
    left: $enter-left;
    opacity: 0;
  }
  .work-title-next-enter-active.work-carousel__inside__title#{$i} {
    @include generateTextAnimation($time, $delay, 0, $i, next-enter);
  }
  .work-title-next-leave-active.work-carousel__inside__title#{$i} {
    @include generateTextAnimation($time, $delay, 0, $i, next-leave);
  }
  .work-title-prev-enter-to.work-carousel__inside__title#{$i},
  .work-title-prev-enter.work-carousel__inside__title#{$i} {
    left: 0;
    opacity: 0;
  }
  .work-title-prev-enter-active.work-carousel__inside__title#{$i} {
    @include generateTextAnimation($time, $delay, 0, $i, prev-enter);
  }
  .work-title-prev-leave-active.work-carousel__inside__title#{$i} {
    @include generateTextAnimation($time, $delay, 0, $i, prev-leave);
  }
}
//********content*********
.work-carousel__inside__content.work-carousel__inside__content1 {
  font-weight: bold;
}
@for $i from 2 through 10 {
  .work-carousel__inside__content.work-carousel__inside__content#{$i} {
    opacity: 0;
  }
  .work-content-next-leave-active.work-carousel__inside__content#{$i} {
    font-weight: bold;
  }
}
@for $i from 1 through 10 {
  .work-content-next-enter-to.work-carousel__inside__content#{$i},
  .work-content-next-enter.work-carousel__inside__content#{$i} {
    left: $enter-left;
    opacity: 0;
  }
  .work-content-next-enter-active.work-carousel__inside__content#{$i} {
    @include generateTextAnimation($time, $delay, $offset, $i, next-enter);
  }
  .work-content-next-leave-active.work-carousel__inside__content#{$i} {
    @include generateTextAnimation($time, $delay, $offset, $i, next-leave);
  }
  .work-content-prev-enter-to.work-carousel__inside__content#{$i},
  .work-content-prev-enter.work-carousel__inside__content#{$i} {
    left: 0;
    opacity: 0;
  }
  .work-content-prev-enter-active.work-carousel__inside__content#{$i} {
    @include generateTextAnimation($time, $delay, $offset, $i, prev-enter);
  }
  .work-content-prev-leave-active.work-carousel__inside__content#{$i} {
    @include generateTextAnimation($time, $delay, $offset, $i, prev-leave);
  }
}

@keyframes next-enter {
  0% {
    left: $enter-left;
    opacity: 0;
  }
  100% {
    left: 0;
    opacity: 0.2;
  }
}
@keyframes next-leave {
  0% {
    left: 0;
    opacity: 0.2;
  }
  100% {
    left: $enter-left * -1;
    opacity: 0;
  }
}

@keyframes prev-enter {
  0% {
    left: $enter-left * -1;
    opacity: 0;
  }
  100% {
    left: 0;
    opacity: 0.2;
  }
}
@keyframes prev-leave {
  0% {
    left: 0;
    opacity: 0.2;
  }
  100% {
    left: $enter-left;
    opacity: 0;
  }
}

// //***********************************/

.work-image-next-enter-active,
.work-image-next-leave-active {
  animation: animateImage;
  animation-duration: 10s;
  animation-timing-function: cubic-bezier(0.4, 0.3, 0.5, 1);
  transition: all 3s;
}
.work-image-next-enter {
  opacity: 0;
}
.work-image-next-leave-to {
  opacity: 0;
}
// //***********************************/
.work-image-prev-enter-active,
.work-image-prev-leave-active {
  animation: animateImage;
  animation-duration: 10s;
  animation-timing-function: cubic-bezier(0.4, 0.3, 0.5, 1);
  transition: all 3s;
}
.work-image-prev-enter {
  opacity: 0;
}
.work-image-prev-leave-to {
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

/deep/ .work-button-mask-next {
  width: 200px;
  height: 200px;
  background-color: $primary;
  position: absolute;
  right: 0;
  animation: work-button-mask-animation-next;
  animation-duration: 1.8 * $time;
  transform: translateX(200px);
  z-index: 9;
}

@keyframes work-button-mask-animation-next {
  0% {
    transform: rotate(30deg) translateX(200px);
  }
  100% {
    transform: rotate(30deg) translateX(-200px);
  }
}

/deep/ .work-button-mask-prev {
  width: 200px;
  height: 200px;
  background-color: $primary;
  position: absolute;
  right: 0;
  animation: work-button-mask-animation-prev;
  animation-duration: 1.8 * $time;
  transform: translateX(-200px);
  z-index: 9;
}

@keyframes work-button-mask-animation-prev {
  0% {
    transform: rotate(30deg) translateX(-200px);
  }
  100% {
    transform: rotate(30deg) translateX(200px);
  }
}
</style>
