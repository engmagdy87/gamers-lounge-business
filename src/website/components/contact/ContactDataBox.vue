<template>
  <div>
    <HalfClippedShape>
      <template #content>
        <div class="contact-data-box-wrapper">
          <div class="contact-data-box-wrapper__img">
            <img :src="icon" />
          </div>
          <p class="contact-data-box-wrapper__title">{{ title }}</p>
          <p class="contact-data-box-wrapper__details">
            <a :href="`mailto:${content}`" v-if="type === 'email'">{{
              content
            }}</a>
            <a
              :href="address"
              target="__blank"
              v-else-if="type === 'address'"
              >{{ content }}</a
            >
            <span v-else>{{ content }}</span>
          </p>
        </div>
      </template>
    </HalfClippedShape>
  </div>
</template>

<script>
import HalfClippedShape from "../../shared/HalfClippedShape";

export default {
  props: ["title", "icon", "type", "map", "content"],
  components: {
    HalfClippedShape
  },
  data() {
    return {
      address:
        "https://www.google.com.eg/maps/place/Gamers+Lounge/@30.0049123,31.4275752,17z/data=!3m1!4b1!4m5!3m4!1s0x14583cc723219aad:0x3cab9244af63e06e!8m2!3d30.0049077!4d31.4297639"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/contact/contact-data-box.scss";
</style>
