<template>
  <div class="hexa-card-wrapper">
    <img
      src="website/img/border.png"
      alt="border"
      class="hexa-card-wrapper__border-img"
    />
    <img
      :src="card.background"
      :alt="card.name + 'background'"
      class="hexa-card-wrapper__bg-img"
    />
    <div class="hexa-card-wrapper__overlay">
      <div class="hexa-card-wrapper__logo">
        <img :src="card.logo" :alt="card.name + 'logo'" />
      </div>
      <div class="hexa-card-wrapper__content">
        <h1>{{ card.name }}</h1>
        <p>{{ card.tournament }} Tournaments</p>
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
@import "../../assets/sass/website/shared/hexa-card.scss";
</style>
