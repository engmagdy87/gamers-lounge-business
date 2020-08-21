<template>
  <div class="game-card-wrapper" @click="redirectTo">
    <div class="game-card-wrapper__outside">
      <div class="game-card-wrapper__inside">
        <img
          v-if="card.images.img_card !== null"
          :src="card.images.img_card.path"
          :alt="card.title + 'background'"
          class="game-card-wrapper__bg-img"
        />
        <div class="game-card-wrapper__overlay">
          <div class="game-card-wrapper__logo">
            <img
              v-if="card.images.img_logo !== null"
              :src="card.images.img_logo.path"
              :alt="card.title + 'logo'"
            />
          </div>
          <div class="game-card-wrapper__content">
            <h1>{{ trimText(card.title || card.initial_title) }}</h1>
            <p>{{ card.tournaments.count }} Tournaments</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  truncateText,
  reformatStringToBeInURL
} from "../helpers/StringsHelper";

export default {
  props: ["card", "isGamesActive"],
  methods: {
    redirectTo() {
      this.$router.push({
        name: "game",
        params: {
          gameName: reformatStringToBeInURL(this.card.title),
          data: {
            id: this.card.id,
            title: this.card.title,
            tree: [{ name: "Home", path: "/" }]
          }
        }
      });
    },
    trimText(text) {
      return truncateText(text);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/shared/game-card.scss";
</style>
