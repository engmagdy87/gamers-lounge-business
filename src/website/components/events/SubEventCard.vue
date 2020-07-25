<template>
  <div class="sub-event-card-wrapper">
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
            <h1>{{ card.initial_title }}</h1>
            <span
              ><img src="website/img/group.svg" alt="group icon" />{{
                card.tournaments.count
              }}
              teams</span
            >
            <br />
            <span
              v-for="(game, index) in card.games"
              :key="index"
              class="badge badge-pill badge-secondary"
              >{{ game.title }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["card"]
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/events/sub-event-card.scss";
</style>
