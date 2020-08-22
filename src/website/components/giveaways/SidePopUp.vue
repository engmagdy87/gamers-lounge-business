<template>
  <div class="side-popup-wrapper">
    <h2>Giveaways & Offers</h2>
    <VueSlickCarousel
      :arrows="false"
      :slidesToShow="1"
      :slidesToScroll="1"
      :autoplaySpeed="4000"
      autoplay
      infinite
    >
      <div
        v-for="(card, index) in giveawaysAndOffersData"
        :key="index"
        @click="redirectTo(card)"
        role="button"
        class="side-popup-wrapper__card"
      >
        <img
          v-if="card.images.img_logo !== null"
          :src="card.images.img_logo.path"
          :alt="card.title"
        />
        <h3>{{ card.title }}</h3>
        <div class="col description-container" v-html="card.description"></div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import { reformatStringToBeInURL } from "../../helpers/StringsHelper";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  props: ["giveawaysAndOffersData", "tree"],
  components: {
    VueSlickCarousel
  },
  methods: {
    redirectTo(card) {
      if (card.is_external) window.open(card.external_link, "_blank");
      else
        this.$router.push({
          name: "giveaway",
          params: {
            giveawayName: reformatStringToBeInURL(card.title),
            data: {
              id: card.id,
              title: card.title,
              tree: this.tree
            }
          }
        });
    }
  },
  mounted() {
    console.log("====================================");
    console.log(this.giveawaysAndOffersData);
    console.log("====================================");
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/giveaways/side-popup.scss";
</style>
