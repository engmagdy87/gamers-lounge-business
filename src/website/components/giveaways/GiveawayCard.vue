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
            <div class="col-12 main-event-card-wrapper__first-section">
              <div class="main-event-card-wrapper__content">
                <div class="main-event-card-wrapper__content__game-logos">
                  <img
                    class="main-event-card-wrapper__content__game-logo"
                    v-for="(img, index) in card.sponsors.main.slice(
                      0,
                      card.sponsors.main.length > 9
                        ? 8
                        : card.sponsors.main.length
                    )"
                    :key="index"
                    :src="img.images.img_logo.path"
                    :alt="`game${img.images.img_logo.id}`"
                    v-if="isImageAvailbale(img.images.img_logo)"
                  />
                  <span
                    class="badge badge-pill badge-secondary mt-3 ml-auto mr-auto"
                    v-if="card.sponsors.main.length > 9"
                    >+{{ card.sponsors.main.length - 8 }} more</span
                  >
                </div>
              </div>
            </div>
            <div
              class="col-12 d-flex align-items-end  main-event-card-wrapper__second-section"
            >
              <div class="main-event-card-wrapper__logo">
<!--                <img-->
<!--                  v-if="card.images.img_logo !== null"-->
<!--                  :src="card.images.img_logo.path"-->
<!--                  alt="logo"-->
<!--                />-->
                <p>{{ card.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reformatStringToBeInURL } from "../../helpers/StringsHelper";

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
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/events/main-event-card.scss";
</style>
