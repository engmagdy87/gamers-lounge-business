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
              <div class="col-12 col-md-6 services-carousel__text">
                <transition :name="titleDirection">
                  <h1 class="services-carousel__title" v-if="index">
                    {{ slide.title }}
                  </h1>
                </transition>
                <transition :name="contentDirection">
                  <p class="services-carousel__content" v-if="index">
                    {{ slide.text }}
                  </p>
                </transition>

                <div class="services-carousel__btn" v-if="index">
                  <HalfClippedOutlineButton
                    text="Read More"
                    :showMaskEffect="true"
                    :buttonMaskCSSStyle="buttonMaskCSSStyle"
                  />
                </div>
              </div>
              <transition :name="imageDirection">
                <div
                  class="col-12 col-md-6 services-carousel__img-wrapper"
                  v-show="index"
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
          img: "./images/pubgpic.png"
        }
      ],
      titleDirection: "service-title-next",
      contentDirection: "service-title-next",
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
@import "../../../assets/sass/website/components/home/services-carousel.scss";

$time: 3s;
$delay: 0.5s;
$blur: 10px;

.service-title-next-enter-active,
.service-title-next-leave-active {
  transition: opacity $time ease-in-out,
    transform $time cubic-bezier(0, 0.47, 0.36, 0.36), filter $time linear;
}
.service-title-next-enter {
  opacity: 0;
  transform: translateX(100%);
  filter: blur($blur);
}
.service-title-next-enter-to,
.service-title-next-leave {
  opacity: 1;
  transform: translateX(0);
  filter: blur(0);
}
.service-title-next-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  filter: blur($blur);
}
//********************* */
.service-title-prev-enter-active,
.service-title-prev-leave-active {
  transition: opacity $time ease-in-out,
    transform $time cubic-bezier(0, 0.47, 0.36, 0.36), filter $time linear,
    filter $time linear;
}
.service-title-prev-enter {
  opacity: 0;
  transform: translateX(-100%);
  filter: blur($blur);
}
.service-title-prev-leave-to {
  opacity: 0;
  transform: translateX(100%);
  filter: blur($blur);
}
.service-title-prev-enter-to,
.service-title-prev-leave {
  opacity: 1;
  transform: translateX(0);
  filter: blur(0);
}
//***********************************/
.service-content-next-enter-active,
.service-content-next-leave-active {
  transition: opacity $time ease-in-out,
    transform $time cubic-bezier(0, 0.47, 0.36, 0.36), filter $time linear,
    filter $time linear;
}
.service-content-next-enter {
  opacity: 0;
  transform: translateX(200%);
  filter: blur($blur);
}
.service-content-next-leave-to {
  opacity: 0;
  transform: translateX(-200%);
  filter: blur($blur);
}
.service-content-next-enter-to {
  transition-delay: $delay;
}
.service-content-next-enter-to,
.service-content-next-leave {
  opacity: 1;
  transform: translateX(0);
  filter: blur(0);
}
//***********************************/
.service-content-prev-enter-active,
.service-content-prev-leave-active {
  transition: opacity $time ease-in-out,
    transform $time cubic-bezier(0, 0.47, 0.36, 0.36), filter $time linear,
    filter $time linear;
}
.service-content-prev-enter {
  opacity: 0;
  transform: translateX(-200%);
  filter: blur($blur);
}
.service-content-prev-leave-to {
  opacity: 0;
  transform: translateX(200%);
  filter: blur($blur);
}
.service-content-prev-enter-to {
  transition-delay: $delay;
}
.service-content-prev-enter-to,
.service-content-prev-leave {
  opacity: 1;
  transform: translateX(0);
  filter: blur(0);
}
//***********************************/

.service-image-next-enter-active,
.service-image-next-leave-active {
  transition: opacity $time ease-in-out;
}
.service-image-next-enter {
  opacity: 0;
}
.service-image-next-leave {
  opacity: 0;
}
.service-image-next-enter-to {
  opacity: 1;
}
.service-image-next-leave-to {
  opacity: 0;
}
//***********************************/
.service-image-prev-enter-active,
.service-image-prev-leave-active {
  transition: opacity $time ease-in-out,
    transform $time cubic-bezier(0, 0.47, 0.36, 0.36), filter $time linear;
}
.service-image-prev-enter {
  opacity: 0;
}
.service-image-prev-leave,
.service-image-prev-enter-to {
  opacity: 1;
}
.service-image-prev-leave-to {
  opacity: 0;
}
//***********************************/

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
