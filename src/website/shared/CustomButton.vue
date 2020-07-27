<template>
  <div class="custom-button-wrapper" @click="setShowFiltersModal(true)">
    <div class="custom-button-wrapper__outside">
      <div class="custom-button-wrapper__inside">
        <img :src="filterIcon" class="custom-button-wrapper__icon" /> Filter by
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["setShowFiltersModal"],
  data() {
    return {
      filterIcon: "website/img/filter-icon.svg"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/color-palette.scss";
@import "../../assets/sass/website/variables.scss";
@import "../../assets/sass/website/mixins.scss";

.custom-button-wrapper {
  width: 190px;
  height: 52px;
  cursor: pointer;
  margin: 0 0 20px 20px;

  &__outside {
    position: relative;
    width: 100%;
    height: 100%;
    background: $primary;
    @include create-hexagone-shape(10px);
  }

  &__inside {
    display: flex;
    position: absolute;
    top: $border-thickness;
    left: $border-thickness;
    right: $border-thickness;
    bottom: $border-thickness;
    background: black;
    color: $primary;
    font-size: 1.05rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease;
    @include create-hexagone-shape(10px);
    &:hover {
      background: rgba($color: #000000, $alpha: 0.95);
    }
  }

  &__icon {
    width: 15px;
    margin-right: 15px;
  }
}
</style>
