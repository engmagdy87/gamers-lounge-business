<template>
  <div class="sponsors-carousel-wrapper">
    <HalfClippedShape>
      <template #content>
        <VueSlickCarousel v-bind="settings">
          <div
            class="sponsors-carousel-wrapper__slide"
            v-for="(sponsor, index) in homePageSponsors"
            :key="index"
            @click="goToUrl(sponsor.link)"
          >
            <img :src="sponsor.image.url" :alt="sponsor.name" />
          </div>
        </VueSlickCarousel>
      </template>
    </HalfClippedShape>
  </div>
</template>

<script>
import { mapState } from "vuex";
import VueSlickCarousel from "vue-slick-carousel";
import HalfClippedShape from "../../shared/HalfClippedShape";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  data() {
    return {
      settings: {
        dots: false,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
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
    VueSlickCarousel,
    HalfClippedShape
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
</style>
