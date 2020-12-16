<template>
  <div class="section-container">
    <HalfClippedShape>
      <template #content>
        <div class="section-container__template row m-0">
          <h1 class="col-12 p-0 m-0 section-container__title ">
            {{ data.title }}
          </h1>
          <div
            class="col-sm-12 col-md-12 col-lg-6 col-xl-6 section-container__media p-0 pt-4"
          >
            <div
              v-if="data.media_type_first === MEDIA_TYPES.IMG"
              class="section-container__media--img"
            >
              <img
                v-for="(img, i) in data.img_content_first"
                :key="i"
                :src="img.url"
              />
            </div>
            <div
              v-if="data.media_type_first === MEDIA_TYPES.SLIDER"
              class="section-container__media--slider"
            >
              <Carousel3d
                :autoplay="true"
                :autoplay-timeout="3000"
                :autoplayHoverPause="true"
              >
                <Slide
                  v-for="(img, i) in data.img_content_first"
                  :index="i"
                  :key="i"
                >
                  <img :src="img.url" />
                </Slide>
              </Carousel3d>
            </div>
            <div
              v-if="data.media_type_first === MEDIA_TYPES.VIDEO"
              class="section-container__media--video"
            >
              <video
                v-for="(video, i) in data.vid_content_first"
                :key="i"
                :src="video.url"
                controls
              />
            </div>
          </div>

          <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 pl-4">
            <p class="p-2" v-html="data.description_first"></p>
          </div>
        </div>
      </template>
    </HalfClippedShape>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
import * as MEDIA_TYPES from "../../../constants/MediaTypes";
import HalfClippedShape from "../../shared/HalfClippedShape";
export default {
  props: ["data"],
  computed: {
    MEDIA_TYPES() {
      return MEDIA_TYPES;
    }
  },
  components: {
    Carousel3d,
    Slide,
    HalfClippedShape
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/services/details-section.scss";
</style>
