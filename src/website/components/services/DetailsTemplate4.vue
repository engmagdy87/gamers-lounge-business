<template>
  <div class="section-container sections-temp4">
    <HalfClippedShape>
      <template #content>
        <div class="section-container__template row m-0">
          <h1 class="col-12 p-0 m-0 section-container__title pb-5">
            {{ data.title }}
          </h1>

          <div
            class="col-12 col-lg-5 col-xl-5 section-container__media p-0 mb-5"
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
                  :key="img.id"
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

          <div
            class="col-sm-12 col-md-12 col-lg-7 col-xl-7 pb-3 pl-4 pr-0 mb-5 first-description"
          >
            <p class="pl-2" v-html="data.description_first"></p>
          </div>

          <div
            class="col-sm-12 col-md-12 col-lg-7 col-xl-7 pr-3 pr-4 order-2 order-lg-1 second-description pl-0"
          >
            <p class="pr-2" v-html="data.description_second"></p>
          </div>

          <div
            class="col-sm-12 col-md-12 col-lg-5 col-xl-5 section-container__media order-1 order-lg-2 p-0"
          >
            <div
              v-if="data.media_type_second === MEDIA_TYPES.IMG"
              class="section-container__media--img"
            >
              <img
                v-for="(img, i) in data.img_content_second"
                :key="i"
                :src="img.url"
              />
            </div>
            <div
              v-if="data.media_type_second === MEDIA_TYPES.SLIDER"
              class="section-container__media--slider"
            >
              <Carousel3d
                :autoplay="true"
                :autoplay-timeout="3000"
                :autoplayHoverPause="true"
              >
                <Slide
                  v-for="(img, i) in data.img_content_second"
                  :index="i"
                  :key="img.id"
                >
                  <img :src="img.url" />
                </Slide>
              </Carousel3d>
            </div>
            <div
              v-if="data.media_type_second === MEDIA_TYPES.VIDEO"
              class="section-container__media--video"
            >
              <video
                v-for="(video, i) in data.vid_content_second"
                :key="i"
                :src="video.url"
                controls
              />
            </div>
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
@import "../../../assets/sass/website/components/services/details-template4.scss";
</style>
