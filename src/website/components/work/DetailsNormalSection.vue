<template>
  <div>
    <div v-for="row in section.rows" :key="row.id" class="row m-0 p-0">
      <div
        v-for="column in row.columns"
        :key="column.index"
        :style="{ width: getWidth(column.ratio) }"
      >
        <div
          v-if="column.type === WORK_COLUMNS_TYPES.TITLE && column.fillable"
          class="work-details-sections__title-normal"
        >
          {{ column.content }}
        </div>

        <div
          v-else-if="
            column.type === WORK_COLUMNS_TYPES.IMAGE && column.fillable
          "
          v-for="img in column.img_content"
          :key="img.id"
        >
          <img :src="img.url" width="100%" draggable="false" alt="" />
        </div>

        <div
          class="work-details-sections__video"
          v-else-if="
            column.type === WORK_COLUMNS_TYPES.VIDEO && column.fillable
          "
          v-for="video in column.vid_content"
          :key="video.id"
        >
          <video
            :id="`video${video.id}`"
            :src="video.url"
            width="100%"
            :style="{ cursor: video.is_auto_play ? 'pointer' : 'unset' }"
            :controls="!video.is_auto_play"
            :muted="video.is_auto_play"
            :loop="video.is_auto_play"
            :autoplay="video.is_auto_play"
            @click="e => toggleFullScreenMode(e, video)"
          ></video>
        </div>

        <div
          v-else-if="
            column.type === WORK_COLUMNS_TYPES.SLIDER && column.fillable
          "
        >
          <Carousel3d
            :autoplay="true"
            :autoplay-timeout="3000"
            :autoplayHoverPause="true"
            :height="400"
            :width="500"
            :border="0"
          >
            <Slide v-for="(img, i) in column.img_content" :index="i" :key="i">
              <img :src="img.url" draggable="false" />
            </Slide>
          </Carousel3d>
        </div>

        <div
          v-if="
            column.type === WORK_COLUMNS_TYPES.DESCRIPTION && column.fillable
          "
          class="work-details-sections__description"
        >
          {{ column.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
import isDeviceSmart from "../../../helpers/DetectIsDeviceSmart";
import * as WORK_COLUMNS_TYPES from "../../../constants/WorkColumnsContentTypes";
export default {
  props: ["section"],
  components: {
    Carousel3d,
    Slide
  },
  computed: {
    WORK_COLUMNS_TYPES() {
      return WORK_COLUMNS_TYPES;
    }
  },
  methods: {
    getWidth(ratio) {
      return isDeviceSmart() ? "100%" : ratio + "%";
    },
    toggleFullScreenMode(e, video) {
      if (video.is_auto_play) {
        e.preventDefault();
        let elem = document.getElementById(`video${video.id}`);

        if (!document.fullscreenElement) {
          elem.requestFullscreen().catch(err => {
            alert(
              `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
            );
          });
        } else {
          document.exitFullscreen();
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/work/work-details-section.scss";
</style>
