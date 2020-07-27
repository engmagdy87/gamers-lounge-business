<template>
  <div class="hexa-card-wrapper" @click="redirectTo">
    <div class="hexa-card-wrapper__outside">
      <div class="hexa-card-wrapper__inside">
        <img
          v-if="card.images.img_card !== null"
          :src="card.images.img_card.path"
          :alt="card.title + 'background'"
          class="hexa-card-wrapper__bg-img"
        />
        <div class="hexa-card-wrapper__overlay">
          <div class="hexa-card-wrapper__logo">
            <img
              v-if="card.images.img_logo !== null"
              :src="card.images.img_logo.path"
              :alt="card.title + 'logo'"
            />
          </div>
          <div class="hexa-card-wrapper__content">
            <h1>{{ card.title || card.initial_title }}</h1>
            <p>{{ card.tournaments.count }} Tournaments</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["card", "isGamesActive"],
  methods: {
    redirectTo() {
      this.$router.push({
        path: `/games/game/${this.card.id}`
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/shared/hexa-card.scss";
</style>
