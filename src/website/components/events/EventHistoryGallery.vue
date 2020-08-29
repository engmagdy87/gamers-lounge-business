<template>
  <div class="event-history-gallery">
    <div
      class="event-history-gallery__img-container"
      v-for="(image, i) in images"
      :key="i"
      @click="() => setClickedImageInMedia(image.path, i, currentEventIndex)"
    >
      <img :src="image.path" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["images", "setClickedImageInMedia", "currentEventIndex"]
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/color-palette.scss";
.event-history-gallery {
  width: 100%;
  max-width: 100%;
  height: 150px;
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  &::-webkit-scrollbar {
    height: 5px !important;
    background-color: $accent !important;
    border-radius: 10px !important;
  }
  &::-webkit-scrollbar-thumb {
    background-color: $primary !important;
    border-radius: 10px !important;
  }
  &__img-container {
    height: 100%;
    margin: 5px;
    cursor: pointer;
    img {
      height: 100%;
    }
  }
}
</style>
