<template>
  <div class="tournament-card-wrapper" @click="redirectTo">
    <div class="tournament-card-wrapper__outside">
      <div class="tournament-card-wrapper__inside">
        <img
          v-if="card.images.img_card !== null"
          :src="card.images.img_card.path"
          :alt="card.images.img_card.id + 'background'"
          class="tournament-card-wrapper__bg-img"
        />
        <div class="tournament-card-wrapper__overlay">
          <div class="tournament-card-wrapper__logo">
            <img
              v-if="card.images.img_logo !== null"
              :src="card.images.img_logo.path"
              :alt="card.images.img_logo.id + 'logo'"
            />
          </div>
          <div class="tournament-card-wrapper__content">
            <h1>{{ trimText(card.title || card.initial_title) }}</h1>
            <span class="badge badge-pill"
              ><img src="/website/img/calendar.svg" alt="calendar icon" />{{
                card.kick_off_date.split(" ")[0]
              }}</span
            >
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
  props: ["card", "tree"],
  methods: {
    redirectTo() {
      this.$router.push({
        name: "tournament",
        params: {
          tournamentName: reformatStringToBeInURL(this.card.initial_title),
          data: {
            id: this.card.id,
            title: this.card.initial_title,
            tree: this.tree
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
@import "../../assets/sass/website/components/events/tournament-card.scss";
</style>
