<template>
  <div class="services-carousel">
    <div class="services-header">
      <h4 class="services-header__sub-text">What we Serve?</h4>
      <h1 class="services-header__title">OUR SERVICES</h1>
      <router-link to="/services" class="services-header__view-link">
        View all
      </router-link>
    </div>
    <HalfClippedShape>
      <template #content>
        <ServiceSlider
          :slides="homePageServices"
          :timeInMillisecond="4000"
          customBulletsStyleClass="hero-bullets"
          :changeAnimation="changeAnimation"
        >
          <template #carouselSlide="{slide,index}">
            <div class="row m-0 position-relative">
              <div class="col-12 col-md-6 services-carousel__text p-0">
                <transition :name="titleDirection" appear>
                  <h1
                    v-if="index"
                    class="services-carousel__title services-carousel__title"
                  >
                    {{ slide.title }}
                  </h1>
                </transition>

                <transition :name="contentDirection" appear>
                  <p
                    v-if="index"
                    class="description-container services-carousel__content services-carousel__content"
                    v-html="slide.description"
                  ></p>
                </transition>

                <router-link
                  :to="`/services/${slide.id}-${reformatURL(slide.title)}`"
                >
                  <div class="services-carousel__btn" v-if="index">
                    <HalfClippedOutlineButton
                      text="Read More"
                      :showMaskEffect="true"
                      :buttonMaskCSSStyle="buttonMaskCSSStyle"
                    />
                  </div>
                </router-link>
              </div>
              <transition :name="imageDirection" appear>
                <div
                  class="col-12 col-md-6 services-carousel__img-wrapper"
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
import HalfClippedOutlineButton from "../../shared/HalfClippedOutlineButton";
import { reformatStringToBeInURL } from "../../../helpers/StringsHelper";
import redirectToNewTab from "../../../helpers/RedirectToNewTab";

export default {
  components: {
    ServiceSlider,
    HalfClippedShape,
    HalfClippedOutlineButton
  },
  data() {
    return {
      titleDirection: "service-title-next",
      contentDirection: "service-content-next",
      imageDirection: "service-image-next",
      buttonMaskCSSStyle: "service-button-mask-next"
    };
  },
  computed: {
    ...mapState({
      homePageServices: state => state.services.homePageServices
    })
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
        }, 4000);
      } else {
        this.titleDirection = "service-title-next";
        this.contentDirection = "service-content-next";
        this.imageDirection = "service-image-next";
        this.buttonMaskCSSStyle = "service-button-mask-next";
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
@import "../../../assets/sass/website/color-palette.scss";
@import "../../../assets/sass/website/mixins.scss";
@import "../../../assets/sass/website/components/home/services-carousel.scss";

$time: 3s;
$delay: 0s;
$offset: 0.3s;

//********title************************************************************
.service-title-next-enter-active,
.service-content-next-enter-active {
  @include generateTextAnimation($time, next-enter-bluprint);
}
.service-title-next-leave-active,
.service-content-next-leave-active {
  @include generateTextAnimation($time, next-leave-bluprint);
}
.service-title-prev-enter-active,
.service-content-prev-enter-active {
  @include generateTextAnimation($time, prev-enter-bluprint);
}
.service-title-prev-leave-active,
.service-content-prev-leave-active {
  @include generateTextAnimation($time, prev-leave-bluprint);
}

@keyframes next-enter-bluprint {
  0% {
    right: -10%;
    opacity: 0;
  }
  100% {
    right: 0;
    opacity: 1;
  }
}
@keyframes next-leave-bluprint {
  0% {
    opacity: 1;
  }
  30% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@keyframes prev-enter-bluprint {
  0% {
    right: 10%;
    opacity: 0;
  }
  100% {
    right: 0;
    opacity: 1;
  }
}
@keyframes prev-leave-bluprint {
  0% {
    right: 0;
    opacity: 1;
  }
  30% {
    right: -10%;
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

// //*********************************************************************

.service-image-next-enter-active,
.service-image-prev-enter-active {
  animation: animateImageEnter;
}
.service-image-next-leave-active,
.service-image-prev-leave-active {
  animation: animateImageLeave;
}
.service-image-next-enter-active,
.service-image-next-leave-active,
.service-image-prev-enter-active,
.service-image-prev-leave-active {
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
