<template>
  <div class="sponsors-carousel-wrapper">
    <div class="sonsors-header">
      <h1 class="sonsors-header__title">OUR CLIENTS</h1>
    </div>
    <div class="sponsors-carousel-wrapper__body">
      <VueSlickCarousel v-bind="settings">
        <template #prevArrow="">
          <div class="custom-arrow">
            <img src="../../../../public/images/prev.svg" />
          </div>
        </template>
        <div
          class="sponsors-carousel-wrapper__slide"
          v-for="(sponsor, index) in homePageSponsors"
          :key="index"
          @click="goToUrl(sponsor.link)"
        >
          <img :src="sponsor.image.url" :alt="sponsor.name" />
        </div>
        <template #nextArrow="">
          <div class="custom-arrow">
            <img src="../../../../public/images/next.svg" />
          </div>
        </template>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  data() {
    return {
      settings: {
        dots: false,
        arrows: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        speed: 1000,
        // autoplaySpeed: 3000,
        // cssEase: "linear",
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 2
            }
          }
        ]
      }
    };
  },
  components: {
    VueSlickCarousel
  },
  computed: {
    ...mapState({
      homePageSponsors: state => state.sponsors.sponsors
    })
  },
  methods: {
    goToUrl(url) {
      window.open(url, "_blank");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/home/sponsors-carousel.scss";
.sonsors-header {
  text-align: center;
  &__title {
    color: $black-text;
    font-family: "Segoe UI Bold";
    font-size: 2.6rem;
    letter-spacing: 4px;
    margin-top: 0;
  }
}

.sponsors-carousel-wrapper > div.half-filled-box {
  padding: 20px 40px;
}

.custom-arrow {
  display: block;
  width: 50px;
  height: 50px;
  color: black;
  &::before {
    content: none;
  }
}
</style>
