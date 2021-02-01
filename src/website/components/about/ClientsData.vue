<template>
  <div class="image-holder">
    <div
      :class="['image-holder__leftline', showBottomGuard && 'bottomgrid']"
    ></div>
    <img class="image-holder__image" :src="imageUrl" @click="sponsorLink" />
    <div
      :class="['image-holder__rightline', showBottomGuard && 'bottomgrid']"
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
    showBottomGuard: Boolean
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
