<template>
  <div>
    <div
      class="list-view-wrapper"
      v-for="(card, index) in data"
      :key="index"
      role="button"
      @click="redirectTo(card)"
    >
      <div class="list-view-wrapper__img">
        <img
          v-if="card.images.img_logo !== null"
          :src="card.images.img_logo.path"
          :alt="card.title || card.initial_title + 'logo'"
        />
      </div>
      <div class="list-view-wrapper__content">
        <h1>{{ card.title || card.initial_title }}</h1>
        <p v-if="isGamesActive">{{ card.tournaments.count }} Tournaments</p>
        <span v-else class="badge badge-pill"
          ><img
            src="/website/img/calendar.svg"
            alt="calendar icon"
            style="margin-right:5px"
          />{{ card.kick_off_date.split(" ")[0] }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { reformatStringToBeInURL } from "../../helpers/StringsHelper";

export default {
  props: ["data", "isGamesActive", "tree"],
  methods: {
    redirectTo(card) {
      let path = "";
      if (this.isGamesActive)
        this.$router.push({
          name: "game",
          params: {
            gameName: `${card.id}-${reformatStringToBeInURL(
              card.title || card.initial_title
            )}`,
            data: {
              id: card.id,
              title: card.title || card.initial_title
            }
          }
        });
      else
        this.$router.push({
          name: "tournament",
          params: {
            gameName: `${card.id}-${reformatStringToBeInURL(
              card.title || card.initial_title
            )}`,
            data: {
              id: card.id,
              title: card.title || card.initial_title,
              tree: [{ name: "Home", path: "/#tournaments" }]
            }
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/variables.scss";
@import "../../../assets/sass/website/mixins.scss";

.list-view-wrapper {
  height: 120px;
  width: 100%;
  display: flex;
  border-bottom: 1px solid rgba($color: #fff, $alpha: 0.4);
  &__img {
    width: 10%;
    display: flex;
    @include is-mobile {
      width: 40%;
    }
    img {
      max-width: 100%;
      max-height: 100px;
      margin-top: auto;
      margin-bottom: auto;
      @include is-mobile {
        max-height: 70px;
      }
    }
  }
  &__content {
    width: 80%;
    padding-left: 5%;
    color: white;
    margin-top: auto;
    margin-bottom: auto;
    @include is-mobile {
      width: 60%;
    }
    h1 {
      font-size: 1.5rem;
      margin-top: 20px;
    }
    p {
      font-size: 0.9rem;
      font-family: "Roboto Light";
    }
  }
}
</style>
