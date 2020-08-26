<template>
  <div class="tournament-item-wrapper">
    <div class="tournament-item-wrapper__logo-container">
      <div class="tournament-item-wrapper__outside">
        <div class="tournament-item-wrapper__inside">
          <img
            v-if="data.images.img_logo !== null"
            :src="data.images.img_logo.path"
            :alt="data.final_title"
          />
        </div>
      </div>
    </div>
    <div class="tournament-item-wrapper__info-container">
      <p class="tournament-item-wrapper__info">
        Name: <span>{{ data.final_title }}</span>
      </p>
      <p class="tournament-item-wrapper__info">
        Winner: <span>{{ data.winner }}</span>
      </p>
      <p class="tournament-item-wrapper__info">
        Prize: <span>{{ parseInt(data.price) }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"]
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/containers/story/tournament-item.scss";
</style>
