<template>
  <div
    :class="[
      'side-popup-container',
      showEventPopup
        ? 'side-popup-container--show'
        : 'side-popup-container--hide'
    ]"
  >
    <div class="side-popup-wrapper">
      <h2>Giveaways & Offers</h2>
      <div
        class="side-popup-wrapper__arrow-container"
        @click="toggleEventPopup"
      >
        <img
          src="/website/img/arrow.svg"
          alt="arrow"
          :class="[
            'side-popup-wrapper__arrow',
            showEventPopup
              ? 'side-popup-wrapper__arrow--reverse'
              : 'side-popup-wrapper__arrow--normal'
          ]"
        />
      </div>
      <VueSlickCarousel
        :arrows="false"
        :slidesToShow="1"
        :slidesToScroll="1"
        :autoplaySpeed="4000"
        :dots="true"
        autoplay
        infinite
      >
        <div
          v-for="(card, index) in giveawaysAndOffersData"
          :key="index"
          @click="redirectTo(card)"
          role="button"
          class="side-popup-wrapper__card"
          v-if="card.enabled"
        >
          <img
            v-if="card.images.img_logo !== null"
            :src="card.images.img_logo.path"
            :alt="card.title"
          />
          <h3>{{ card.title }}</h3>
          <div
            class="col description-container side-popup-wrapper__card__text"
            v-html="card.short_description"
          ></div>
        </div>
      </VueSlickCarousel>
    </div>
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
  data() {
    return {
      showEventPopup: true
    };
  },
  components: {
    VueSlickCarousel
  },
  methods: {
    toggleEventPopup() {
      this.showEventPopup = !this.showEventPopup;
    },
    redirectTo(card) {
      if (card.is_external) window.open(card.external_link, "_blank");
      else
        this.$router.push({
          name: "giveaway",
          params: {
            giveawayName: `${card.id}-${reformatStringToBeInURL(card.title)}`,
            data: {
              id: card.id,
              title: card.title,
              tree: this.tree
            }
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/giveaways/event-popup.scss";
</style>
