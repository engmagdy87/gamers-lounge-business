<template>
  <div>
    <div v-for="(row, rowId) in section.rows" :key="row.id" class="row m-0 p-0">
      <div
        v-for="(column, colId) in row.columns"
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
          @click="openImageModal(rowId, colId, null, column.type)"
          style="cursor:pointer"
        >
          <img
            :src="img.url"
            width="100%"
            draggable="false"
            alt=""
            class="image-placeholder"
          />
        </div>

        <div
          class="work-details-sections__video"
          v-else-if="
            column.type === WORK_COLUMNS_TYPES.VIDEO &&
              column.fillable &&
              column.is_vid_extenral_enabled
          "
        >
          <iframe
            width="100%"
            :height="getHeight(column.ratio, row.columns.length)"
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
            column.type === WORK_COLUMNS_TYPES.VIDEO &&
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
            :onMainSlideClick="
              e => openImageModal(rowId, colId, e.index, column.type)
            "
          >
            <Slide v-for="(img, i) in column.img_content" :index="i" :key="i">
              <img :src="img.url" draggable="false" class="image-placeholder" />
            </Slide>
          </Carousel3d>
        </div>

        <div
          v-if="
            column.type === WORK_COLUMNS_TYPES.DESCRIPTION && column.fillable
          "
          class="description-container work-details-sections__description"
          v-html="column.content"
        />
      </div>
    </div>
    <ImageModal
      :showImageModal="showImageModal"
      :setShowImageModal="setShowImageModal"
      :imageUrl="targetImageUrl"
      :setImageIndex="
        contentType === WORK_COLUMNS_TYPES.IMAGE
          ? setImageIndex
          : setImageForSliderIndex
      "
      :showNavigation="showNavigation"
    />
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
import ImageModal from "../../shared/ImageModal";
import isDeviceSmart from "../../../helpers/DetectIsDeviceSmart";
import redirectToNewTab from "../../../helpers/RedirectToNewTab";
import { liveVideoEmbedFormatter } from "../../../helpers/LiveVideoEmbedFormater";
import * as WORK_COLUMNS_TYPES from "../../../constants/ColumnsContentTypes";

export default {
  props: ["section"],
  data() {
    return {
      showImageModal: false,
      showNavigation: false,
      targetImageIndeces: {
        rowId: null,
        colId: null,
        imgId: null
      },
      targetImageUrl: "",
      contentType: ""
    };
  },
  components: {
    Carousel3d,
    Slide,
    ImageModal
  },
  computed: {
    WORK_COLUMNS_TYPES() {
      return WORK_COLUMNS_TYPES;
    }
  },
  methods: {
    getLiveVideoEmbedFormatter(url) {
      return liveVideoEmbedFormatter(url);
    },
    getImages(rowId) {
      return this.section.rows[rowId].columns;
    },
    getWidth(ratio) {
      return isDeviceSmart() ? "100%" : ratio + "%";
    },
    getHeight(ratio, columnsCount) {
      if (columnsCount === 1)
        return isDeviceSmart()
          ? "300px"
          : (document.body.clientHeight * ratio) / 120 + "px";
      else return "100%";
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
    openImageModal(rowId, colId, imgId, type) {
      this.showNavigation = true;
      this.contentType = type;
      this.targetImageIndeces = {
        ...this.targetImageIndeces,
        rowId,
        colId,
        imgId
      };
      this.targetImageUrl = this.getImages(rowId)[colId].img_content[0].url;
      this.setShowImageModal(true);
    },
    setImageIndex(e, dir) {
      e.stopPropagation();
      const { rowId, colId } = this.targetImageIndeces;
      const columns = this.getImages(rowId);
      let newColId;
      if (dir === "next") {
        newColId = colId === columns.length - 1 ? 0 : colId + 1;
        let newCol = this.getImages(rowId)[newColId];
        while (1) {
          if (newCol.type === WORK_COLUMNS_TYPES.IMAGE) break;

          newColId = newColId === columns.length - 1 ? 0 : newColId + 1;
          newCol = this.getImages(rowId)[newColId];
        }
      } else {
        newColId = colId === 0 ? columns.length - 1 : colId - 1;
        let newCol = this.getImages(rowId)[newColId];
        while (1) {
          if (newCol.type === WORK_COLUMNS_TYPES.IMAGE) break;

          newColId = newColId === 0 ? columns.length - 1 : newColId - 1;
          newCol = this.getImages(rowId)[newColId];
        }
      }
      this.targetImageIndeces.colId = newColId;
      this.targetImageUrl = this.getImages(rowId)[newColId].img_content[0].url;
    },
    setImageForSliderIndex(e, dir) {
      e.stopPropagation();
      const { rowId, colId, imgId } = this.targetImageIndeces;
      const images = this.getImages(rowId)[colId].img_content;
      let newImgId;
      if (dir === "next")
        newImgId = imgId === images.length - 1 ? 0 : imgId + 1;
      else newImgId = imgId === 0 ? images.length - 1 : imgId - 1;

      this.targetImageIndeces.imgId = newImgId;
      this.targetImageUrl = images[newImgId].url;
    }
  },
  updated() {
    redirectToNewTab("description-container");
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/shared/work-service-sections/work-details-section.scss";
</style>
