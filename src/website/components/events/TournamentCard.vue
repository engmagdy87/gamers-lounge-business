<template>
  <div class="tournament-card-wrapper">
    <div class="tournament-card-wrapper__outside">
      <div class="tournament-card-wrapper__inside">
        <img
          v-if="
            card.images.img_card !== null && card.images.img_card !== undefined
          "
          :src="card.images.img_card.path"
          :alt="card.images.img_card.id + 'background'"
          class="tournament-card-wrapper__bg-img"
        />
        <div class="tournament-card-wrapper__overlay">
          <div class="tournament-card-wrapper__logo">
            <img
              v-if="
                card.images.img_loog !== null &&
                  card.images.img_logo !== undefined
              "
              :src="card.game.images.img_logo.path"
              :alt="card.game.images.img_logo.id + 'logo'"
            />
          </div>
          <div class="tournament-card-wrapper__content">
            <h1>{{ card.title }}</h1>
            <span class="badge badge-pill"
              ><img src="/website/img/calendar.svg" alt="calendar icon" />{{
                card.kick_off_date
              }}</span
            >
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
@import "../../../assets/sass/website/components/events/tournament-card.scss";
</style>
