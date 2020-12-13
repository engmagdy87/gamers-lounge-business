<template>
  <div class="section-container sections-temp3">
    <div class="section-container__template row m-0">
      <h1 class="col-12 p-0 m-0 section-container__title pb-5">
        {{ data.title }}
      </h1>

      <div class="col-12 section-container__media">
        <div
          v-if="data.media_type_first === MEDIA_TYPES.IMG"
          class="sections-temp3__list"
        >
          <img
            v-for="(img, i) in data.img_content_first"
            :style="{
              width:
                data.img_content_first.length < 4
                  ? `${100 / data.img_content_first.length}%`
                  : '33.33%'
            }"
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

      <div class="col-12 pt-3">
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
