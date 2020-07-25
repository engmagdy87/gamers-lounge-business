<template>
  <div class="main-event-card-wrapper" @click="redirectTo">
    <div class="main-event-card-wrapper__outside">
      <div class="main-event-card-wrapper__inside">
        <img
          v-if="card.images.img_card !== null"
          :src="card.images.img_card.path"
          alt="background"
          class="main-event-card-wrapper__bg-img"
        />
        <div class="main-event-card-wrapper__overlay">
          <div class="row">
            <div class="col-7 d-flex align-items-end">
              <div class="main-event-card-wrapper__logo">
                <img
                  v-if="card.images.img_logo !== null"
                  :src="card.images.img_logo.path"
                  alt="logo"
                />
                <p>{{ card.initial_title }}</p>
              </div>
            </div>
            <div class="col-5">
              <div class="main-event-card-wrapper__content">
                <span class="badge badge-pill badge-secondary"
                  ><img src="website/img/group.svg" alt="group icon" />{{
                    card.tournaments.count
                  }}
                  teams</span
                >
                <img
                  class="main-event-card-wrapper__content__game-logo"
                  v-for="(img, index) in card.games"
                  :key="index"
                  :src="img.images.img_logo.path"
                  :alt="`game${img.images.img_logo.id}`"
                  v-if="isImageAvailbale(img.images.img_logo)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["card"],
  methods: {
    isImageAvailbale(logo) {
      return logo !== null;
    },
    redirectTo() {
      if (this.card.is_external) window.open(this.card.external_link, "_blank");
      else
        this.$router.push({
          path: `/events/event/${this.card.id}`
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/events/main-event-card.scss";
</style>
