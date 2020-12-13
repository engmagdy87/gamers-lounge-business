<template>
  <div class="section-container">
    <div class="section-container__template row m-0">
      <h1 class="col-12 p-0 m-0 section-container__title pb-5">
        {{ data.title }}
      </h1>
      <div
        class="col-sm-12 col-md-12 col-lg-6 col-xl-6 section-container__media"
      >
        <div v-if="data.media_type_first === MEDIA_TYPES.IMG">
          <img
            v-for="(img, i) in data.img_content_first"
            :key="i"
            :src="img.url"
          />
        </div>
        <div v-if="data.media_type_first === MEDIA_TYPES.VIDEO">
          <video
            v-for="(video, i) in data.vid_content_first"
            :key="i"
            :src="video.url"
            controls
          />
        </div>
      </div>

      <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-0">
        <p v-html="data.description_first"></p>
      </div>
    </div>
  </div>
</template>

<script>
import * as MEDIA_TYPES from "../../../constants/MediaTypes";

export default {
  props: ["data"],
  computed: {
    MEDIA_TYPES() {
      return MEDIA_TYPES;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/services/details-section.scss";
</style>
