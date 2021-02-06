<template>
  <div class="work-carousel">
    <div class="work-header">
      <h4 class="work-header__sub-text">What we Do?</h4>
      <h1 class="work-header__title">OUR WORK</h1>
      <router-link to="/work" class="work-header__view-link">
        View all
      </router-link>
    </div>

    <div class="work-carousel__bg"></div>
    <!-- <div class="work-carousel__big-mask"></div> -->

    <div class="work-carousel__carousel-container">
      <WorkSlider
        :slides="homePageWorks"
        :timeInMillisecond="4000"
        customBulletsStyleClass="hero-bullets"
        :changeAnimation="changeAnimation"
      >
        <template #carouselSlide="{slide,index}">
          <div class="work-carousel__inside">
            <transition :name="imageDirection" appear>
              <div class="work-carousel__inside__img" v-if="index">
                <img
                  draggable="false"
                  :src="slide.img_slider.url"
                  :alt="slide.title"
                />
              </div>
            </transition>
            <div class="work-carousel__inside__text">
              <div class="work-carousel__inside__text-container">
                <transition :name="titleDirection" appear>
                  <h1 v-if="index" class="work-carousel__inside__title">
                    {{ slide.title }}
                  </h1>
                </transition>
                <transition :name="contentDirection" appear>
                  <p
                    v-if="index"
                    class="description-container work-carousel__inside__content"
                    v-html="slide.description"
                  ></p>
                </transition>
              </div>
            </div>
            <router-link :to="`/work/${slide.id}-${reformatURL(slide.title)}`">
              <div class="work-carousel__btn" v-if="index">
                <HalfClippedOutlineButton
                  text="See More"
                  :showMaskEffect="true"
                  :buttonMaskCSSStyle="buttonMaskCSSStyle"
                />
              </div>
            </router-link>
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
import { mapState } from "vuex";
import WorkSlider from "../../shared/Carousel/WorkSlider";
import HalfClippedShape from "../../shared/HalfClippedShape";
import HalfClippedOutlineButton from "../../shared/HalfClippedOutlineButton";
import { reformatStringToBeInURL } from "../../../helpers/StringsHelper";
import redirectToNewTab from "../../../helpers/RedirectToNewTab";

export default {
  components: {
    WorkSlider,
    HalfClippedOutlineButton
  },
  data() {
    return {
      titleDirection: "work-title-next",
      contentDirection: "work-content-next",
      imageDirection: "work-image-next",
      buttonMaskCSSStyle: "work-button-mask-next"
    };
  },
  computed: {
    ...mapState({
      homePageWorks: state => state.works.homePageWorks
    })
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
        }, 4000);
      } else {
        this.titleDirection = "work-title-next";
        this.contentDirection = "work-content-next";
        this.imageDirection = "work-image-next";
        this.buttonMaskCSSStyle = "work-button-mask-next";
      }
    },
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
@import "../../../assets/sass/website/components/home/work-carousel.scss";
@import "../../../assets/sass/website/color-palette.scss";
@import "../../../assets/sass/website/mixins.scss";

$time: 3s;
$delay: 0s;
$offset: 0.3s;

//********title************************************************************
.work-title-next-enter-active,
.work-content-next-enter-active {
  @include is-extra-small-mobile {
    @include generateTextAnimation($time, next-enter-bluprint-x-mob);
  }
  @include is-mobile {
    @include generateTextAnimation($time, next-enter-bluprint-mob);
  }
  @include is-tablet {
    @include generateTextAnimation($time, next-enter-bluprint-tab);
  }
  @include is-desktop {
    @include generateTextAnimation($time, next-enter-bluprint-dt);
  }
  @include is-large-desktop {
    @include generateTextAnimation($time, next-enter-bluprint-lg);
  }
  @include is-extra-large-desktop {
    @include generateTextAnimation($time, next-enter-bluprint-extra-lg);
  }
}
.work-title-next-leave-active,
.work-content-next-leave-active {
  @include is-extra-small-mobile {
    @include generateTextAnimation($time, next-leave-bluprint-x-mob);
  }
  @include is-mobile {
    @include generateTextAnimation($time, next-leave-bluprint-mob);
  }
  @include is-tablet {
    @include generateTextAnimation($time, next-leave-bluprint-tab);
  }
  @include is-desktop {
    @include generateTextAnimation($time, next-leave-bluprint-dt);
  }
  @include is-large-desktop {
    @include generateTextAnimation($time, next-leave-bluprint-lg);
  }
  @include is-extra-large-desktop {
    @include generateTextAnimation($time, next-leave-bluprint-extra-lg);
  }
}
.work-title-prev-enter-active,
.work-content-prev-enter-active {
  @include is-extra-small-mobile {
    @include generateTextAnimation($time, prev-enter-bluprint-x-mob);
  }
  @include is-mobile {
    @include generateTextAnimation($time, prev-enter-bluprint-mob);
  }
  @include is-tablet {
    @include generateTextAnimation($time, prev-enter-bluprint-tab);
  }
  @include is-desktop {
    @include generateTextAnimation($time, prev-enter-bluprint-dt);
  }
  @include is-large-desktop {
    @include generateTextAnimation($time, prev-enter-bluprint-lg);
  }
  @include is-extra-large-desktop {
    @include generateTextAnimation($time, prev-enter-bluprint-extra-lg);
  }
}
.work-title-prev-leave-active,
.work-content-prev-leave-active {
  @include is-extra-small-mobile {
    @include generateTextAnimation($time, prev-leave-bluprint-x-mob);
  }
  @include is-mobile {
    @include generateTextAnimation($time, prev-leave-bluprint-mob);
  }
  @include is-tablet {
    @include generateTextAnimation($time, prev-leave-bluprint-tab);
  }
  @include is-desktop {
    @include generateTextAnimation($time, prev-leave-bluprint-dt);
  }
  @include is-large-desktop {
    @include generateTextAnimation($time, prev-leave-bluprint-lg);
  }
  @include is-extra-large-desktop {
    @include generateTextAnimation($time, prev-leave-bluprint-extra-lg);
  }
}

@keyframes next-enter-bluprint-dt {
  0% {
    left: 50%;
    opacity: 0;
  }
  100% {
    left: 10%;
    opacity: 1;
  }
}
@keyframes next-enter-bluprint-lg {
  0% {
    left: 50%;
    opacity: 0;
  }
  100% {
    left: 20%;
    opacity: 1;
  }
}
@keyframes next-enter-bluprint-extra-lg {
  0% {
    left: 50%;
    opacity: 0;
  }
  100% {
    left: 30%;
    opacity: 1;
  }
}
@keyframes next-enter-bluprint-tab {
  0% {
    left: 50%;
    opacity: 0;
  }
  100% {
    left: 30%;
    opacity: 1;
  }
}
@keyframes next-enter-bluprint-x-mob {
  0% {
    left: 50%;
    opacity: 0;
  }
  100% {
    left: 30%;
    opacity: 1;
  }
}
@keyframes next-enter-bluprint-mob {
  0% {
    left: 50%;
    opacity: 0;
  }
  100% {
    left: 30%;
    opacity: 1;
  }
}

@keyframes next-leave-bluprint-dt {
  0% {
    opacity: 1;
    left: 10%;
  }
  30% {
    opacity: 0;
    left: 5%;
  }
  100% {
    opacity: 0;
  }
}
@keyframes next-leave-bluprint-lg {
  0% {
    opacity: 1;
    left: 20%;
  }
  30% {
    opacity: 0;
    left: 10%;
  }
  100% {
    opacity: 0;
  }
}
@keyframes next-leave-bluprint-extra-lg {
  0% {
    opacity: 1;
    left: 30%;
  }
  30% {
    opacity: 0;
    left: 10%;
  }
  100% {
    opacity: 0;
  }
}
@keyframes next-leave-bluprint-tab {
  0% {
    opacity: 1;
    left: 30%;
  }
  30% {
    opacity: 0;
    left: 10%;
  }
  100% {
    opacity: 0;
  }
}
@keyframes next-leave-bluprint-mob {
  0% {
    opacity: 1;
    left: 30%;
  }
  30% {
    opacity: 0;
    left: 10%;
  }
  100% {
    opacity: 0;
  }
}
@keyframes next-leave-bluprint-x-mob {
  0% {
    opacity: 1;
    left: 30%;
  }
  30% {
    opacity: 0;
    left: 10%;
  }
  100% {
    opacity: 0;
  }
}

@keyframes prev-enter-bluprint-dt {
  0% {
    left: 5%;
    opacity: 0;
  }
  100% {
    left: 10%;
    opacity: 1;
  }
}
@keyframes prev-enter-bluprint-lg {
  0% {
    left: 10%;
    opacity: 0;
  }
  100% {
    left: 20%;
    opacity: 1;
  }
}
@keyframes prev-enter-bluprint-tab {
  0% {
    left: 10%;
    opacity: 0;
  }
  100% {
    left: 30%;
    opacity: 1;
  }
}
@keyframes prev-enter-bluprint-mob {
  0% {
    left: 10%;
    opacity: 0;
  }
  100% {
    left: 30%;
    opacity: 1;
  }
}
@keyframes prev-enter-bluprint-x-mob {
  0% {
    left: 10%;
    opacity: 0;
  }
  100% {
    left: 30%;
    opacity: 1;
  }
}
@keyframes prev-enter-bluprint-extra-lg {
  0% {
    left: 10%;
    opacity: 0;
  }
  100% {
    left: 30%;
    opacity: 1;
  }
}

@keyframes prev-leave-bluprint-dt {
  0% {
    left: 10%;
    opacity: 1;
  }
  30% {
    left: 50%;
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@keyframes prev-leave-bluprint-lg {
  0% {
    left: 20%;
    opacity: 1;
  }
  30% {
    left: 50%;
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@keyframes prev-leave-bluprint-extra-lg {
  0% {
    left: 30%;
    opacity: 1;
  }
  30% {
    left: 50%;
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes prev-leave-bluprint-tab {
  0% {
    left: 30%;
    opacity: 1;
  }
  30% {
    left: 50%;
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes prev-leave-bluprint-mob {
  0% {
    left: 30%;
    opacity: 1;
  }
  30% {
    left: 50%;
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes prev-leave-bluprint-x-mob {
  0% {
    left: 30%;
    opacity: 1;
  }
  30% {
    left: 50%;
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

// //*********************************************************************

.work-image-next-enter-active,
.work-image-prev-enter-active {
  animation: animateImageEnter;
}
.work-image-next-leave-active,
.work-image-prev-leave-active {
  animation: animateImageLeave;
}
.work-image-next-enter-active,
.work-image-next-leave-active,
.work-image-prev-enter-active,
.work-image-prev-leave-active {
  animation-duration: 5s;
  transition: all 3s;
  animation-timing-function: cubic-bezier(0.4, 0.3, 0.5, 1);
}
@keyframes animateImageEnter {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes animateImageLeave {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
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
