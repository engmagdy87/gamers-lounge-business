<template>
  <div>
    <HalfClippedShape>
      <template #content>
        <div class="contact-data-box-wrapper">
          <div class="contact-data-box-wrapper__img">
            <img :src="icon" />
          </div>
          <p class="contact-data-box-wrapper__title">{{ title }}</p>
          <p class="contact-data-box-wrapper__details">{{ content }}</p>
        </div>
      </template>
    </HalfClippedShape>
  </div>
</template>

<script>
import HalfClippedShape from "../../shared/HalfClippedShape";

export default {
  props: ["title", "icon", "content"],
  components: {
    HalfClippedShape
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/contact/contact-data-box.scss";
</style>
