<template>
  <div class="image-holder">
    <div
      :class="['image-holder__leftline', hideBorderLeftBorder && 'hide-border']"
    ></div>
    <img class="image-holder__image" :src="imageUrl" @click="sponsorLink" />
    <div
      :class="[
        'image-holder__rightline',
        hideBorderRightBorder && 'hide-border'
      ]"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: String,
    imageName: String,
    className: String,
    link: String,
    hideBorderLeftBorder: Boolean,
    hideBorderRightBorder: Boolean
  },
  methods: {
    sponsorLink() {
      window.open(this.link, "__blank");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/about/about-clients-data.scss";
</style>
