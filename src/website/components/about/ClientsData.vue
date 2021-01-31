<template>
  <div class="image-holder">
    <div class="image-holder__leftline bottomgrid" ></div>
    <img
      class="image-holder__image"
      :src="imageUrl"
      @click="sponserLink"
    />
    <div class="image-holder__rightline bottomgrid" >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: String,
    imageName: String,
    className: String,
    link: String,
  },
  methods: {
    sponserLink() {
        window.open(this.link, '__blank');
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/about/about-clients-data.scss";
</style>
