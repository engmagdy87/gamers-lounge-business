<template>
  <div class="testimonial-card-wrapper">
    <div class="testimonial-card-profile">
      <div class="testimonial-card-profile__outside">
        <div class="testimonial-card-profile__inside">
          <img
            v-if="card.images.img_profile !== null"
            :src="card.images.img_profile.path"
            :alt="card.images.img_profile.id + 'background'"
            class="testimonial-card-profile__bg-img"
          />
        </div>
      </div>
    </div>
    <div class="testimonial-card-wrapper__content">
      <h2>{{ card.name }}, {{ card.company }}, {{ card.title }}</h2>
      <StarRating
        :rating="card.vote"
        :read-only="true"
        :increment="0.5"
        :star-size="20"
        :rounded-corners="true"
        :show-rating="false"
        :star-points="[
          23,
          2,
          14,
          17,
          0,
          19,
          10,
          34,
          7,
          50,
          23,
          43,
          38,
          50,
          36,
          34,
          46,
          19,
          31,
          17
        ]"
      ></StarRating>
      <div class="description-container" v-html="card.review"></div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  props: ["card"],
  components: {
    StarRating
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/testimonials/testimonial-card.scss";
</style>
