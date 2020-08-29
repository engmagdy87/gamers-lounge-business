<template>
  <div class="sub-event-card-wrapper" @click="redirectTo">
    <div class="sub-event-card-wrapper__outside">
      <div class="sub-event-card-wrapper__inside">
        <img
          v-if="card.images.img_card !== null"
          :src="card.images.img_card.path"
          alt="background"
          class="sub-event-card-wrapper__bg-img"
        />
        <div class="sub-event-card-wrapper__overlay">
          <div class="sub-event-card-wrapper__logo">
            <img
              v-if="card.images.img_logo !== null"
              :src="card.images.img_logo.path"
              alt="logo"
            />
          </div>
          <div class="sub-event-card-wrapper__content">
            <h1>{{ trimText(card.title) }}</h1>
            <span
              ><img src="website/img/group.svg" alt="group icon" />
              {{ card.tournaments.count }} tournaments</span
            >
            <br />
            <span
              v-if="card.show_sponsors"
              v-for="(sponsor, index) in card.sponsors.main.slice(0, 4)"
              :key="index"
              class="badge badge-pill badge-secondary sub-event-card-wrapper__content__game"
              >{{ sponsor.name }}
            </span>
            <span
              class="badge badge-pill badge-secondary sub-event-card-wrapper__content__game"
              v-if="card.sponsors.main.length > 4"
              >+{{ card.sponsors.main.length - 4 }} more</span
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
} from "../../helpers/StringsHelper";
export default {
  props: ["card"],
  methods: {
    redirectTo() {
      if (this.card.is_external) window.open(this.card.external_link, "_blank");
      else
        this.$router.push({
          name: "giveaway",
          params: {
            giveawayName: `${this.card.id}-${reformatStringToBeInURL(
              this.card.title
            )}`,
            data: {
              id: this.card.id,
              title: this.card.title,
              tree: [{ name: "Giveaways", path: "/giveaways" }]
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
@import "../../../assets/sass/website/components/events/sub-event-card.scss";
</style>
