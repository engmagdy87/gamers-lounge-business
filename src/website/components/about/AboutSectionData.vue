<template>
  <div class="about-section-wrapper">
    <div class="about-section-wrapper__container">
      <div
        v-for="(row, rowId) in section.rows"
        :key="row.id"
        class="row m-0 p-0 w-100"
      >
        <div
          v-for="column in row.columns"
          :key="column.index"
          :style="{ width: getWidth(column.ratio) }"
        >
          <div
            v-if="column.type === ABOUT_COLUMNS_TYPES.TITLE && column.fillable"
            class="work-details-sections__title-normal"
          >
            {{ column.content }}
          </div>
          <div
            v-else-if="
              column.type === ABOUT_COLUMNS_TYPES.IMAGE && column.fillable
            "
            v-for="(img, i) in column.img_content"
            :key="img.id"
            @click="openImageModal(rowId, i)"
            style="cursor:pointer"
            class="about-section-wrapper__inside--is-image"
            :style="{ 'background-image': 'url(' + img.url + ')' }"
          ></div>
          <div
            class="work-details-sections__video"
            v-else-if="
              column.type === ABOUT_COLUMNS_TYPES.VIDEO &&
                column.fillable &&
                column.is_vid_extenral_enabled
            "
          >
            <iframe
              width="100%"
              height="100%"
              :src="getLiveVideoEmbedFormatter(column.vid_extenral)"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            >
            </iframe>
          </div>
          <div
            class="work-details-sections__video"
            v-else-if="
              column.type === ABOUT_COLUMNS_TYPES.VIDEO &&
                column.fillable &&
                !column.is_vid_extenral_enabled
            "
            v-for="video in column.vid_content"
            :key="video.id"
          >
            <video
              preload="auto"
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
              column.type === ABOUT_COLUMNS_TYPES.SLIDER && column.fillable
            "
            class="work-details-sections__slider"
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
              column.type === ABOUT_COLUMNS_TYPES.DESCRIPTION && column.fillable
            "
            class="description-container about-section-wrapper__inside--is-text"
          >
            <div v-html="column.content" />
          </div>
        </div>
      </div>
      <ImageModal
        :showImageModal="showImageModal"
        :setShowImageModal="setShowImageModal"
        :imageUrl="targetImageUrl"
        :setImageIndex="setImageIndex"
      />
    </div>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
import ImageModal from "../../shared/ImageModal";
import isDeviceSmart from "../../../helpers/DetectIsDeviceSmart";
import redirectToNewTab from "../../../helpers/RedirectToNewTab";
import { liveVideoEmbedFormatter } from "../../../helpers/LiveVideoEmbedFormater";
import * as ABOUT_COLUMNS_TYPES from "../../../constants/ColumnsContentTypes";
export default {
  props: ["section"],
  data() {
    return {
      showImageModal: false,
      targetImageIndeces: {
        rowId: null,
        imageIndex: null
      },
      targetImageUrl: ""
    };
  },
  components: {
    Carousel3d,
    Slide,
    ImageModal
  },
  computed: {
    ABOUT_COLUMNS_TYPES() {
      return ABOUT_COLUMNS_TYPES;
    }
  },
  methods: {
    getLiveVideoEmbedFormatter(url) {
      return liveVideoEmbedFormatter(url);
    },
    getImages(rowId) {
      return this.section.rows[rowId].columns.filter(
        col => col.type === ABOUT_COLUMNS_TYPES.IMAGE
      );
    },
    getWidth(ratio) {
      return isDeviceSmart() ? "100%" : ratio + "%";
    },
    toggleFullScreenMode(e, video) {
      if (video.is_auto_play) {
        e.preventDefault();
        let elem = document.getElementById(`video${video.id}`);
        elem.addEventListener("fullscreenchange", () => {
          elem.muted = !document.fullscreenElement;
        });
        if (!document.fullscreenElement) {
          elem.muted = false;
          elem.requestFullscreen().catch(err => {
            alert(
              `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
            );
          });
        } else {
          elem.muted = true;
          document.exitFullscreen();
        }
      }
    },
    setShowImageModal(flag) {
      this.showImageModal = flag;
    },
    openImageModal(rowId, imageIndex) {
      this.targetImageIndeces = {
        ...this.targetImageIndeces,
        rowId,
        imageIndex
      };
      this.targetImageUrl = this.getImages(rowId)[
        imageIndex
      ].img_content[0].url;
      this.setShowImageModal(true);
    },
    setImageIndex(e, dir) {
      e.stopPropagation();
      const { rowId, imageIndex } = this.targetImageIndeces;
      const imagesLength = this.getImages(rowId).length;

      if (dir === "next")
        this.targetImageIndeces = {
          ...this.targetImageIndeces,
          imageIndex: imageIndex === imagesLength - 1 ? 0 : imageIndex + 1
        };
      else
        this.targetImageIndeces.imageIndex =
          imageIndex === 0 ? imagesLength - 1 : imageIndex - 1;

      this.targetImageUrl = this.getImages(rowId)[
        this.targetImageIndeces.imageIndex
      ].img_content[0].url;
    }
  },
  updated() {
    redirectToNewTab("description-container");
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/about/about-section-data.scss";
@import "../../../assets/sass/website/shared/work-service-sections/work-details-section.scss";
</style>
