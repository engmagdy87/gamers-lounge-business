<template>
  <div>
    <HalfClippedShape>
      <template #content>
        <div class="contact-data-box-wrapper">
          <div class="contact-data-box-wrapper__img">
            <img :src="data.icon" />
          </div>
          <p class="contact-data-box-wrapper__title">{{ data.title }}</p>
          <p class="contact-data-box-wrapper__details">{{ data.details }}</p>
        </div>
      </template>
    </HalfClippedShape>
  </div>
</template>

<script>
import HalfClippedShape from "../../shared/HalfClippedShape";

export default {
  props: ["data"],
  components: {
    HalfClippedShape
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/contact/contact-data-box.scss";
</style>
