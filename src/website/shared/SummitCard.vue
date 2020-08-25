<template>
  <div class="summit-card-wrapper" @click="redirectTo">
    <div class="summit-card-wrapper__outside">
      <div class="summit-card-wrapper__inside">
        <img
          v-if="card.images.img_card !== null"
          :src="card.images.img_card.path"
          :alt="card.images.img_card.id + 'background'"
          class="summit-card-wrapper__bg-img"
        />
        <div class="summit-card-wrapper__overlay">
          <div class="summit-card-wrapper__content">
            <h1>{{ card.year }}</h1>
            <h1>{{ trimText(card.final_title) }}</h1>
            <span class="badge badge-pill badge-secondary mb-1"
              ><img src="/website/img/calendar.svg" alt="calendar icon" />{{
                card.end_date.split(" ")[0]
              }}</span
            >
            <span class="badge badge-pill badge-secondary mb-1"
              ><img src="/website/img/pin.svg" alt="calendar icon" />{{
                card.location
              }}</span
            >
            <span class="badge badge-pill badge-secondary"
              ><img src="/website/img/white-user.svg" alt="calendar icon" />{{
                card.attendess
              }}
              attendess</span
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
        name: "summit",
        params: {
          summitName: `${this.card.id}-${reformatStringToBeInURL(
            this.card.final_title
          )}`,
          data: {
            id: this.card.id,
            title: this.card.final_title,
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
@import "../../assets/sass/website/containers/story/summit-card.scss";
</style>
