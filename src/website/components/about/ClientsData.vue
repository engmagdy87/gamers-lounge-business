<template>
  <div class="image-holder">
    <div class="image-holder__leftline" :class="className"></div>
    <img
      class="image-holder__image"
      :src="'./images/clients/' + imageName"
      alt=""
    />
    <div class="image-holder__rightline" :class="className"></div>
  </div>
</template>

<script>
export default {
  props: {
    imageName: String,
    className: String
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/about/about-clients-data.scss";
</style>
