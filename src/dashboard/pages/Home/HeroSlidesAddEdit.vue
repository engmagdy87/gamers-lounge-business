<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/dashboard/home-hero-slides">Home Hero Slides</a>
        </li>
      </ol>
    </nav>
    <h4 slot="header" class="card-name">{{ operation }}</h4>
    <form>
      <div class="row">
        <div class="col-12 col-md-6">
          <base-input
            type="number"
            label="Order"
            placeholder="Enter Order"
            v-model="slide.order"
            :autofocus="true"
          >
          </base-input>
          <ErrorMessage :fieldErrors="errors.order" />
        </div>
        <div class="col-12 col-md-6">
          <div class="form-group">
            <label>Media Type</label>
            <select
              class="form-control"
              v-model="slide.type"
              @change="
                e => setRequiredFieldsAccrodingToContentType(e.target.value)
              "
            >
              <option
                :selected="slide.type === MEDIA_TYPES.NONE"
                :value="MEDIA_TYPES.NONE"
                >none</option
              >
              <option
                :selected="slide.type === MEDIA_TYPES.IMG"
                :value="MEDIA_TYPES.IMG"
                >image</option
              >
              <option
                :selected="slide.type === MEDIA_TYPES.VIDEO"
                :value="MEDIA_TYPES.VIDEO"
                >video</option
              >
            </select>
            <ErrorMessage :fieldErrors="errors.type" />
          </div>
        </div>
      </div>

      <div class="row mt-3 mb-3">
        <div class="col-12 col-md-6">
          <base-input
            type="text"
            label="More Info URL"
            placeholder="Enter More Info URL"
            v-model="slide.url"
          >
          </base-input>
          <ErrorMessage :fieldErrors="errors.url" />
        </div>
        <div class="col-12 col-md-3 mt-auto mb-auto">
          <div class="custom-control custom-switch">
            <input
              type="checkbox"
              class="custom-control-input"
              id="isAutoPlay"
              v-model="slide.isAutoPlay"
              @change="updateVideoData"
            />
            <label class="custom-control-label" for="isAutoPlay"
              >Is Autoplay Video</label
            >
          </div>
        </div>
        <div class="col-12 col-md-3 mt-auto mb-auto">
          <div class="custom-control custom-switch">
            <input
              type="checkbox"
              class="custom-control-input"
              id="isEnabled"
              v-model="slide.isEnabled"
            />
            <label class="custom-control-label" for="isEnabled"
              >Published</label
            >
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <base-input
            type="text"
            label="Tile"
            placeholder="Enter Title"
            v-model="slide.title"
            :isRequired="slide.type === MEDIA_TYPES.TITLE"
          >
          </base-input>
          <div v-if="slide.type === MEDIA_TYPES.TITLE">
            <ErrorMessage :fieldErrors="errors.title" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="form-group">
            <label
              >Description<span
                class="error-message"
                v-if="slide.type === MEDIA_TYPES.DESCRIPTION"
              >
                *</span
              ></label
            >
            <vue-pell-editor
              :actions="editorOptions"
              :style-with-css="false"
              placeholder=""
              v-model="slide.description"
            />
            <div v-if="slide.type === MEDIA_TYPES.DESCRIPTION">
              <ErrorMessage :fieldErrors="errors.description" />
            </div>
          </div>
        </div>
      </div>
      <!-- *********************** -->
      <div class="row mb-3">
        <div class="col">
          <div>
            <label class="mr-5"
              >Choose Content Images<span
                v-if="
                  slide.type === MEDIA_TYPES.IMG ||
                    slide.type === MEDIA_TYPES.SLIDER
                "
                class="error-message"
              >
                *</span
              ></label
            >
            <input
              type="file"
              id="media-images"
              accept="image/png, image/jpeg, image/gif"
              :multiple="slide.type === MEDIA_TYPES.SLIDER"
              ref="img_main"
              @change="e => setFile(e, 'img_main')"
            />
            <br />
            <div
              v-if="
                editData !== undefined &&
                  operation === 'Edit Home Hero Slide' &&
                  editData.img_main !== null &&
                  editData.img_main !== ''
              "
              class="image-preview-list"
            >
              <ImagePreview
                :image="editData.img_main"
                :setShowDeleteDialogFlag="setImageDataFlag"
                openedFor="img_main"
              />
            </div>
            <div
              v-if="
                slide.type === MEDIA_TYPES.IMG ||
                  slide.type === MEDIA_TYPES.SLIDER
              "
            >
              <ErrorMessage :fieldErrors="errors.img_main" />
            </div>
          </div>
        </div>
      </div>
      <!-- *********************** -->
      <!-- *********************** -->
      <div class="row mb-3">
        <div class="col">
          <div>
            <label class="mr-5"
              >Choose Content Videos<span
                v-if="slide.type === MEDIA_TYPES.VIDEO"
                class="error-message"
              >
                *</span
              ></label
            >
            <input
              type="file"
              id="logo"
              accept="video/*"
              ref="vid_main"
              @change="e => setFile(e, 'vid_main')"
            />
            <br />
            <div
              v-if="
                editData !== undefined &&
                  operation === 'Edit Home Hero Slide' &&
                  editData.vid_main !== null &&
                  editData.vid_main !== ''
              "
              class="image-preview-list"
            >
              <VideoPreview
                :video="editData.vid_main"
                :setShowDeleteDialogFlag="setVideoDataFlag"
                openedFor="vid_main"
              />
            </div>
            <div v-if="slide.type === MEDIA_TYPES.VIDEO">
              <ErrorMessage :fieldErrors="errors.vid_main" />
            </div>
          </div>
        </div>
      </div>
      <!-- *********************** -->

      <div class="text-center">
        <button
          type="button"
          class="btn btn-info btn-fill float-right"
          @click="saveData"
        >
          Save
        </button>
      </div>
      <div class="clearfix"></div>
      <DeleteDialog
        :showFlag="showFlag"
        :setShowDeleteDialogFlag="
          contentType === 'video' ? setVideoDataFlag : setImageDataFlag
        "
        :item="contentType === 'video' ? 'Video' : 'Image'"
        :deleteAction="contentType === 'video' ? removeVideo : removeImage"
      />
    </form>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import ErrorMessage from "../../../website/shared/ErrorMessage";
import types from "../../../store/types";
import isValidationErrorExist from "../../../helpers/FormValidation";
import editorOptions from "../../../dashboard/wysiwyg-factory/options";
import ImagePreview from "../../../website/shared/ImagePreview.vue";
import VideoPreview from "../../../website/shared/VideoPreview";
import DeleteDialog from "../../../website/shared/DeleteDialog";
import { reformatHTMLString } from "../../../helpers/StringsHelper";
import * as MEDIA_TYPES from "../../../constants/MediaTypes";

const emptyHomeHeroSlide = {
  order: 1,
  type: MEDIA_TYPES.NONE,
  title: "",
  url: "",
  description: "",
  isAutoPlay: false,
  isEnabled: false,
  img_main: "",
  vid_main: ""
};

export default {
  data() {
    return {
      editData: this.$router.history.current.params.data,
      operation: this.$route.name,
      slide: {
        ...emptyHomeHeroSlide
      },
      openedFor: "",
      contentType: "",
      imageIndex: null,
      showFlag: false,
      imageId: null,
      videoId: null,
      errors: {},
      validation: {
        order: { isRequired: false },
        type: { isRequired: false },
        url: { isRequired: false },
        title: { isRequired: false },
        description: { isRequired: false },
        "is auto play": { isRequired: false },
        published: { isRequired: false },
        "images main": { isRequired: false },
        "videos main": { isRequired: false }
      },
      aliases: {
        order: "order",
        type: "type",
        title: "title",
        url: "url",
        description: "description",
        isAutoPlay: "is auto play",
        isEnabled: "published",
        img_main: "images main",
        vid_main: "videos main"
      },
      editorOptions
    };
  },
  computed: {
    MEDIA_TYPES() {
      return MEDIA_TYPES;
    }
  },
  methods: {
    ...mapActions({
      createHomeHeroSlide: types.home.actions.CREATE_HERO_SLIDER,
      updateHomeHeroSlide: types.home.actions.UPDATE_HERO_SLIDER,
      updateVideo: types.services.actions.UPDATE_VIDEO,
      deleteImage: types.app.actions.DELETE_IMAGE,
      deleteVideo: types.app.actions.DELETE_VIDEO
    }),
    updateVideoData: async function() {
      if (
        this.operation === "Edit Home Hero Slide" &&
        this.editData.type === MEDIA_TYPES.VIDEO
      ) {
        const payload = {
          videoId: this.slide.vid_main.id,
          isAutoPlay: this.slide.isAutoPlay
        };
        await this.updateVideo(payload);
      }
    },
    setRequiredFieldsAccrodingToContentType(value) {
      let key;
      const targetKeys = ["title", "description", "images main", "videos main"];
      switch (value) {
        case MEDIA_TYPES.TITLE:
          key = "title";
          break;
        case MEDIA_TYPES.DESCRIPTION:
          key = "description";
          break;
        case MEDIA_TYPES.IMG:
          key = "images main";
          break;
        case MEDIA_TYPES.SLIDER:
          key = "images main";
          break;
        case MEDIA_TYPES.VIDEO:
          key = "videos main";
          break;

        default:
          break;
      }
      targetKeys.forEach(item => {
        this.validation[item].isRequired = item === key;
      });
    },
    setFile(e, key) {
      const files = e.target.files;
      if (!files.length) return;
      this.slide[key] = files;
    },
    setImageDataFlag(flag, imageId, openedFor, imageIndex, contentType) {
      this.showFlag = flag;
      this.imageId = imageId;
      this.openedFor = openedFor;
      this.imageIndex = imageIndex;
      this.contentType = contentType;
    },
    setVideoDataFlag(flag, videoId, openedFor, videoIndex, contentType) {
      this.showFlag = flag;
      this.videoId = videoId;
      this.openedFor = openedFor;
      this.videoIndex = videoIndex;
      this.contentType = contentType;
    },
    saveData: async function() {
      const errorObject = isValidationErrorExist(
        this.slide,
        this.aliases,
        this.validation
      );
      this.errors = { ...errorObject.errors };
      if (errorObject.length !== 0) return;

      try {
        let payload = {
          title: this.slide.title,
          description: reformatHTMLString(this.slide.description),
          order: this.slide.order,
          url: this.slide.url,
          type: this.slide.type,
          isAutoPlay: this.slide.isAutoPlay,
          isEnabled: this.slide.isEnabled,
          imagesData: {
            img_main: this.$refs.img_main.files
          },
          videosData: {
            vid_main: this.$refs.vid_main.files
          }
        };
        if (this.operation === "Edit Home Hero Slide") {
          await this.updateHomeHeroSlide({
            ...payload,
            slideId: this.editData.id
          });
          this.notifyVue("Home Hero Slide Updated Successfully", "success");
        } else {
          await this.createHomeHeroSlide({
            ...payload,
            isAutoPlay: this.slide.isAutoPlay
          });
          this.notifyVue("Home Hero Slide Created Successfully", "success");
        }
        this.$router.push("/dashboard/home-hero-slides");
        this.slide = { ...emptyHomeHeroSlide };
        this.$refs.img_main.value = null;
        this.$refs.vid_main.value = null;
      } catch (errors) {
        JSON.parse(errors).forEach(error => {
          this.notifyVue(error.message, "danger");
        });
      }
    },
    removeImage: async function() {
      await this.deleteImage(this.imageId);

      switch (this.openedFor) {
        case "img_main":
          this.slide.img_main = "";
          this.editData.img_main = "";
          break;

        default:
          break;
      }
      this.notifyVue("Image Deleted Successfully", "success");
      this.setImageDataFlag(false, null, "", null, "");
    },
    removeVideo: async function() {
      await this.deleteVideo(this.videoId);

      switch (this.openedFor) {
        case "vid_main":
          this.slide.vid_main = "";
          this.editData.vid_main = "";
          break;

        default:
          break;
      }

      this.notifyVue("Video Deleted Successfully", "success");
      this.setVideoDataFlag(false, null, "", null, "");
    },
    notifyVue(message, color) {
      this.$notifications.notify({
        message: `<span>${message}</span>`,
        horizontalAlign: "right",
        verticalAlign: "top",
        type: color
      });
    }
  },
  beforeMount() {
    if (
      !this.$router.history.current.params.data &&
      this.$route.name === "Edit Home Hero Slide"
    )
      this.$router.push({
        path: "/dashboard/home-hero-slides"
      });
  },
  mounted() {
    if (this.$route.name === "Edit Home Hero Slide") {
      this.slide.title = this.editData.title;
      this.slide.description = this.editData.description;
      this.slide.order = this.editData.order;
      this.slide.url = this.editData.url || "";
      this.slide.type = this.editData.type;
      this.slide.isEnabled = this.editData.is_enabled;
      this.slide.isAutoPlay = this.editData.vid_main
        ? this.editData.vid_main.is_auto_play
        : false;
      this.slide.img_main = this.editData.img_main || "";
      this.slide.vid_main = this.editData.vid_main || "";
      this.setRequiredFieldsAccrodingToContentType(this.editData.type);
    }
  },
  components: {
    ErrorMessage,
    ImagePreview,
    DeleteDialog,
    VideoPreview
  }
};
</script>

<style lang="scss">
.section-templates-img {
  cursor: pointer;
  width: 150px;
  opacity: 0.4;
  &--active {
    opacity: 1;
  }
  &--error {
    margin: auto;
    width: fit-content;
  }
}
.column {
  height: 150px;
  text-align: center;
  border: 1px gray solid;
  &--not-full {
    background: lightgray;
    color: black;
  }
  &--full {
    background: #04ca04;
    color: white;
  }
  p {
    font-size: 30px;
    margin-top: 15px;
  }
}
</style>
