<template>
  <div class="about-section-wrapper">
    <h1 :class="['about-section-wrapper__title', getCssStyle(title)]">
      {{ title }}
    </h1>
    <div class="about-section-wrapper__container">
      <div
        v-for="(row, rowId) in section.rows"
        :key="row.id"
        class="row m-0 p-0 w-100"
      >
        <div
          v-for="(column, colId) in row.columns"
          :key="column.index"
          :style="{ width: getWidth(column.ratio) }"
        >
          <div
            v-if="column.type === ABOUT_COLUMNS_TYPES.TITLE && column.fillable"
            class="about-section-wrapper__title"
          >
            {{ column.content }}
          </div>
          <div
            v-else-if="
              column.type === ABOUT_COLUMNS_TYPES.IMAGE && column.fillable
            "
            v-for="img in column.img_content"
            :key="img.id"
            @click="openImageModal(rowId, colId, null, column.type)"
            style="cursor:pointer"
            class="about-section-wrapper__image"
            :style="{ 'background-image': 'url(' + img.url + ')' }"
          ></div>
          <div
            class="about-section-wrapper__video"
            v-else-if="
              column.type === ABOUT_COLUMNS_TYPES.VIDEO &&
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
            class="about-section-wrapper__video"
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
            class="about-section-wrapper__slider"
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
                <img :src="img.url" draggable="false" />
              </Slide>
            </Carousel3d>
          </div>

          <div
            v-if="
              column.type === ABOUT_COLUMNS_TYPES.DESCRIPTION && column.fillable
            "
            class="description-container about-section-wrapper__description"
          >
            <div v-html="column.content" />
          </div>
        </div>
      </div>
      <ImageModal
        :showImageModal="showImageModal"
        :setShowImageModal="setShowImageModal"
        :imageUrl="targetImageUrl"
        :setImageIndex="
          contentType === ABOUT_COLUMNS_TYPES.IMAGE
            ? setImageIndex
            : setImageForSliderIndex
        "
        :showNavigation="showNavigation"
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
  props: ["section", "title"],
  data() {
    return {
      sectionImages: {},
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
    ABOUT_COLUMNS_TYPES() {
      return ABOUT_COLUMNS_TYPES;
    }
  },
  methods: {
    getCssStyle(title) {
      switch (title) {
        case "our story":
        case "our vision":
          return "";

        case "Meet the founders":
        case "Testimonials":
          return "about-section-wrapper__title--center";

        // case "our vision":
        //   return "about-section-wrapper__title--right";

        default:
          break;
      }
    },
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
      const completeIndex = `${rowId}-${colId}`;
      let keys = Object.keys(this.sectionImages);
      let nextIndex;

      const currentIndex = keys.indexOf(completeIndex);
      if (dir === "next")
        nextIndex = currentIndex === keys.length - 1 ? 0 : currentIndex + 1;
      else nextIndex = currentIndex === 0 ? keys.length - 1 : currentIndex - 1;
      const newRowId = keys[nextIndex].split("-")[0];
      const newColId = keys[nextIndex].split("-")[1];
      this.targetImageIndeces = {
        ...this.targetImageIndeces,
        rowId: newRowId,
        colId: newColId
      };
      this.targetImageUrl = this.sectionImages[keys[nextIndex]];
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
  },
  mounted() {
    this.section.rows.forEach((row, rowId) => {
      row.columns.forEach((col, colId) => {
        if (col.type === this.ABOUT_COLUMNS_TYPES.IMAGE && col.fillable)
          this.sectionImages = {
            ...this.sectionImages,
            [`${rowId}-${colId}`]: col.img_content[0].url
          };
      });
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/about/about-section-data.scss";
@import "../../../assets/sass/website/shared/work-service-sections/work-details-section.scss";
</style>
