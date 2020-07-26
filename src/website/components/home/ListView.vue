<template>
  <div>
    <div class="list-view-wrapper" v-for="(card, index) in data" :key="index">
      <div class="list-view-wrapper__img">
        <img :src="card.logo" :alt="card.name + 'logo'" />
      </div>
      <div class="list-view-wrapper__content">
        <h1>{{ card.name }}</h1>
        <p>{{ card.tournament }} Tournaments</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data", "isGamesActive"]
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
    img {
      max-width: 100%;
      max-height: 100px;
      margin-top: auto;
      margin-bottom: auto;
      @include is-mobile {
        max-width: fit-content;
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
      padding-left: 40%;
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
