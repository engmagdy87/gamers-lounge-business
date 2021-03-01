<template>
  <div
    class="hero-carousel"
    v-if="isHeroSliderFetched && heroSlider.length > 0"
  >
    <SingleClippedShape>
      <template #content>
        <HeroSlider
          :autoPlay="false"
          :slides="heroSlider"
          customBulletsStyleClass="hero-bullets"
          :timeInMillisecond="4000"
        >
          <template #carouselSlide="{slide}">
            <div class="hero-carousel__wrapper">
              <div
                class="hero-carousel__text"
                :style="
                  slide.type === MEDIA_TYPES.NONE ? 'width:100% !important' : ''
                "
              >
                <transition name="hero-title" appear>
                  <h1 class="hero-carousel__title">
                    {{ slide.title }}
                  </h1>
                </transition>
                <transition name="hero-content" appear>
                  <h4
                    class="hero-carousel__content"
                    v-html="slide.description"
                  ></h4>
                </transition>
                <transition name="hero-content" appear>
                  <a
                    v-if="slide.url && slide.url !== ''"
                    class="hero-carousel__url"
                    :href="slide.url"
                    target="__blank"
                    >Register Now <span>&#187;</span></a
                  >
                </transition>
              </div>
              <div
                class="hero-carousel__media"
                :style="
                  slide.type === MEDIA_TYPES.NONE ? 'width:0% !important' : ''
                "
              >
                <img
                  v-if="slide.img_main && slide.type === MEDIA_TYPES.IMG"
                  :src="slide.img_main.url"
                />
                <video
                  preload="auto"
                  v-if="slide.vid_main && slide.type === MEDIA_TYPES.VIDEO"
                  :src="slide.vid_main.url"
                  width="100%"
                  height="100%"
                  :controls="!slide.vid_main.is_auto_play"
                  :muted="slide.vid_main.is_auto_play"
                  :loop="slide.vid_main.is_auto_play"
                  :autoplay="slide.vid_main.is_auto_play"
                />
              </div>
            </div>
          </template>
        </HeroSlider>
      </template>
    </SingleClippedShape>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import types from "../../../store/types";
import HeroSlider from "../../shared/Carousel/HeroSlider";
import SingleClippedShape from "../../shared/SingleClippedShape";
import * as MEDIA_TYPES from "../../../constants/MediaTypes";

export default {
  components: {
    HeroSlider,
    SingleClippedShape
  },
  computed: {
    ...mapState({
      heroSlider: state => state.home.heroSlider,
      isHeroSliderFetched: state => state.home.isHeroSliderFetched
    }),
    MEDIA_TYPES() {
      return MEDIA_TYPES;
    }
  },
  methods: {
    ...mapActions({
      fetchHomeHeroSlides: types.home.actions.FETCH_HERO_SLIDES
    })
  },
  mounted() {
    const payload = {
      showSpinner: true,
      requestSource: "website",
      data: { isEnabled: true }
    };
    this.fetchHomeHeroSlides(payload);
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
