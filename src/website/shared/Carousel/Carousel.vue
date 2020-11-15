<template>
  <div class="carousel-wrapper">
    <transition-group name="slide">
      <div
        @mouseover="stopTimer"
        @mouseleave="resetTimer"
        v-for="(slide, i) in slides"
        :key="i"
        v-if="isSlideVisible(i)"
        class="carousel-wrapper__slide"
      >
        <slot name="carouselSlide" :slide="slide"></slot>
      </div>
    </transition-group>
    <div class="carousel-wrapper__bullets" v-if="showBullets">
      <button
        v-for="(slide, i) in slides"
        :key="i"
        :class="isSlideVisible(i) && 'carousel-wrapper__bullets--active'"
        @click="() => setSlide(i)"
      ></button>
    </div>
    <slot
      name="carouselNavigationButtons"
      :goToPrev="goToPrev"
      :goToNext="goToNext"
    ></slot>
  </div>
</template>

<script>
export default {
  props: {
    timeInMillisecond: {
      type: Number,
      default: 5000
    },
    slides: {
      type: Array,
      default: () => []
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    showBullets: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      currentSlide: 0,
      timer: null
    };
  },
  methods: {
    initializeTimer(time) {
      if (!this.autoPlay) return null;

      return setInterval(() => {
        this.goToNext();
      }, time);
    },
    nextSlide() {
      if (this.currentSlide === this.slides.length - 1) this.currentSlide = 0;
      else this.currentSlide++;
    },
    prevSlide() {
      if (this.currentSlide === 0) this.currentSlide = this.slides.length - 1;
      else this.currentSlide--;
    },
    goToNext() {
      this.nextSlide();
      this.resetTimer();
    },
    goToPrev() {
      this.prevSlide();
      this.resetTimer();
    },
    isSlideVisible(i) {
      return i === this.currentSlide;
    },
    setSlide(i) {
      this.resetTimer();
      this.currentSlide = i;
    },
    stopTimer() {
      clearInterval(this.timer);
    },
    resetTimer() {
      this.stopTimer();
      this.timer = this.initializeTimer(this.timeInMillisecond);
    }
  },
  mounted() {
    this.timer = this.initializeTimer(this.timeInMillisecond);
  },
  destroyed() {
    this.stopTimer();
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/color-palette.scss";
@import "../../assets/sass/website/variables.scss";
@import "../../assets/sass/website/mixins.scss";

.carousel-wrapper {
  @include initializePageStyle;
  position: relative;
  margin: 50px;
  background-color: #eee;
  height: 50vh;
  min-height: 50vh;
  &__slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /deep/ & > * {
      width: 100%;
      height: 100%;
    }
  }
  &__bullets {
    position: absolute;
    bottom: 50px;
    left: 50%;
    & > button {
      background-color: gray;
      border: none;
      border-radius: 50%;
      width: 13px;
      height: 13px;
      margin: 5px;
      outline: none;
    }
  }
}

button.carousel-wrapper__bullets--active {
  background-color: cyan;
  width: 56px;
  height: 13px;
  border-radius: 11px;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
}
.slide-enter-active {
  transition-delay: 0.5s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
}
.slide-enter-to,
.slide-leave {
  opacity: 1;
}
</style>
