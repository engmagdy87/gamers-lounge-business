<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a :href="`/dashboard/services/sections/list/${servicesData.id}`"
            >{{ servicesData.title }} Service Sections</a
          >
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ operation }}
        </li>
      </ol>
    </nav>
    <h4 slot="header" class="card-name">{{ operation }}</h4>
    <form>
      <div class="row">
        <div class="col-12 col-md-6">
          <base-input
            type="text"
            label="Title"
            placeholder="Enter Title"
            v-model="serviceSection.title"
            :autofocus="true"
            :isRequired="true"
          >
          </base-input>
          <ErrorMessage :fieldErrors="errors.title" />
        </div>
      </div>
      <div class="row d-block">
        <div class="col d-flex justify-content-center align-items-center">
          <img
            v-for="i in 4"
            :key="i"
            :src="`/images/templates/template-${i}.png`"
            :alt="`template ${i}`"
            :class="[
              'm-3 section-templates-img',
              isTemplateActive(SERVICE_TEMPLATES[`TEMPLATE_${i}`])
            ]"
            @click="setActiveTemplate(SERVICE_TEMPLATES[`TEMPLATE_${i}`])"
          />
        </div>
        <div class="section-templates-img--error">
          <ErrorMessage :fieldErrors="errors.template" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label
              >First Description<span class="error-message"> *</span></label
            >
            <vue-pell-editor
              :actions="editorOptions"
              :style-with-css="false"
              placeholder=""
              v-model="serviceSection.description_first"
            />
            <ErrorMessage :fieldErrors="errors.description_first" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-group second-description">
            <label
              >Second Description<span
                v-if="validation['second description'].isRequired"
                class="error-message"
              >
                *</span
              ></label
            >
            <vue-pell-editor
              :actions="editorOptions"
              :style-with-css="false"
              placeholder=""
              v-model="serviceSection.description_second"
            />
            <div v-if="validation['second description'].isRequired">
              <ErrorMessage :fieldErrors="errors.description_second" />
            </div>
          </div>
        </div>
      </div>
      <!-- *********************** -->
      <div class="row">
        <div class="col-12 col-md-4">
          <div class="form-group">
            <label for="region"
              >First Media Type<span class="error-message"> *</span></label
            >
            <select
              class="form-control"
              v-model="serviceSection.media_type_first"
              @change="setRequiredFieldsAccrodingToMediaType('first')"
            >
              <option value="-1">--Please choose media type</option>
              <option
                ::selected="serviceSection.media_type_first === MEDIA_TYPES.IMG"
                :value="MEDIA_TYPES.IMG"
                >{{ MEDIA_TYPES.IMG.toLowerCase() }}</option
              >
              <option
                ::selected="serviceSection.media_type_first === MEDIA_TYPES.SLIDER"
                :value="MEDIA_TYPES.SLIDER"
                >{{ MEDIA_TYPES.SLIDER.toLowerCase() }}</option
              >
              <option
                ::selected="serviceSection.media_type_first === MEDIA_TYPES.VIDEO"
                :value="MEDIA_TYPES.VIDEO"
                >{{ MEDIA_TYPES.VIDEO.toLowerCase() }}</option
              >
            </select>
            <ErrorMessage :fieldErrors="errors.media_type_first" />
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="form-group">
            <label for="region"
              >Second Media Type<span
                v-if="validation['second media type'].isRequired"
                class="error-message"
              >
                *</span
              ></label
            >
            <select
              class="form-control"
              v-model="serviceSection.media_type_second"
              @change="setRequiredFieldsAccrodingToMediaType('second')"
              :disabled="!validation['second media type'].isRequired"
            >
              <option value="-1">--Please choose media type</option>
              <option
                ::selected="serviceSection.media_type_second === MEDIA_TYPES.IMG"
                :value="MEDIA_TYPES.IMG"
                >{{ MEDIA_TYPES.IMG.toLowerCase() }}</option
              >
              <option
                ::selected="serviceSection.media_type_second === MEDIA_TYPES.SLIDER"
                :value="MEDIA_TYPES.SLIDER"
                >{{ MEDIA_TYPES.SLIDER.toLowerCase() }}</option
              >
              <option
                ::selected="serviceSection.media_type_second === MEDIA_TYPES.VIDEO"
                :value="MEDIA_TYPES.VIDEO"
                >{{ MEDIA_TYPES.VIDEO.toLowerCase() }}</option
              >
            </select>
            <div v-if="validation['second media type'].isRequired">
              <ErrorMessage :fieldErrors="errors.media_type_second" />
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="form-group">
            <base-input
              type="number"
              label="Section Order"
              placeholder="Enter Section Order"
              v-model="serviceSection.order"
              :isRequired="true"
              min="1"
            >
            </base-input>
            <ErrorMessage :fieldErrors="errors.order" />
          </div>
        </div>
      </div>
      <!-- *********************** -->
      <div class="row mb-3">
        <div class="col">
          <div>
            <label class="mr-5"
              >Choose First Content Images<span
                v-if="validation['first images content'].isRequired"
                class="error-message"
              >
                *</span
              ></label
            >
            <input
              type="file"
              id="media-images"
              accept="image/png, image/jpeg"
              multiple
              ref="img_content_first"
              @change="e => setFile(e, 'img_content_first')"
            />
            <br />
            <div
              v-if="
                editData !== undefined &&
                  (operation === 'Edit Service Section' ||
                    (editData.img_content_first !== null &&
                      editData.img_content_first !== null))
              "
              class="image-preview-list"
            >
              <ImagePreview
                v-for="(img, index) in editData.img_content_first"
                :key="img.id"
                :image="img"
                :setShowDeleteDialogFlag="setImageDataFlag"
                openedFor="img_content_first"
                :imageIndex="index"
              />
            </div>
            <div v-if="validation['first images content'].isRequired">
              <ErrorMessage :fieldErrors="errors.img_content_first" />
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col">
          <div>
            <label class="mr-5"
              >Choose Second Content Images<span
                v-if="validation['second images content'].isRequired"
                class="error-message"
              >
                *</span
              ></label
            >
            <input
              type="file"
              id="media-images"
              accept="image/png, image/jpeg"
              multiple
              ref="img_content_second"
              @change="e => setFile(e, 'img_content_second')"
              :disabled="!validation['second images content'].isRequired"
            />
            <br />
            <div
              v-if="
                editData !== undefined &&
                  (operation === 'Edit Service Section' ||
                    (editData.img_content_second !== null &&
                      editData.img_content_second !== null))
              "
              class="image-preview-list"
            >
              <ImagePreview
                v-for="(img, index) in editData.img_content_second"
                :key="img.id"
                :image="img"
                :setShowDeleteDialogFlag="setImageDataFlag"
                openedFor="img_content_second"
                :imageIndex="index"
              />
            </div>
            <div v-if="validation['second images content'].isRequired">
              <ErrorMessage :fieldErrors="errors.img_content_second" />
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
              >Choose First Content Videos<span
                v-if="validation['first videos content'].isRequired"
                class="error-message"
              >
                *</span
              ></label
            >
            <input
              type="file"
              id="logo"
              accept="video/*"
              multiple
              ref="vid_content_first"
              @change="e => setFile(e, 'vid_content_first')"
            />
            <br />
            <div
              v-if="
                editData !== undefined &&
                  (operation === 'Edit Service Section' ||
                    (editData.vid_content_first !== null &&
                      editData.vid_content_first !== null))
              "
              class="image-preview-list"
            >
              <VideoPreview
                v-for="(vid, index) in editData.vid_content_first"
                :key="vid.id"
                :video="vid"
                :setShowDeleteDialogFlag="setVideoDataFlag"
                openedFor="vid_content_first"
                :videoIndex="index"
              />
            </div>
            <div v-if="validation['first videos content'].isRequired">
              <ErrorMessage :fieldErrors="errors.vid_content_first" />
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col">
          <div>
            <label class="mr-5"
              >Choose Second Content Videos<span
                v-if="validation['second videos content'].isRequired"
                class="error-message"
              >
                *</span
              ></label
            >
            <input
              type="file"
              id="logo"
              accept="video/*"
              multiple
              ref="vid_content_second"
              @change="e => setFile(e, 'vid_content_second')"
              :disabled="!validation['second videos content'].isRequired"
            />
            <br />
            <div
              v-if="
                editData !== undefined &&
                  (operation === 'Edit Service Section' ||
                    (editData.vid_content_second !== null &&
                      editData.vid_content_second !== null))
              "
              class="image-preview-list"
            >
              <VideoPreview
                v-for="(vid, index) in editData.vid_content_second"
                :key="vid.id"
                :video="vid"
                :setShowDeleteDialogFlag="setVideoDataFlag"
                openedFor="vid_content_second"
                :videoIndex="index"
              />
            </div>
            <div v-if="validation['second videos content'].isRequired">
              <ErrorMessage :fieldErrors="errors.vid_content_second" />
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
import ErrorMessage from "../../../../website/shared/ErrorMessage";
import store from "../../../../store/index";
import types from "../../../../store/types";
import isValidationErrorExist from "../../../../helpers/FormValidation";
import editorOptions from "../../../../dashboard/wysiwyg-factory/options";
import ImagePreview from "../../../../website/shared/ImagePreview.vue";
import VideoPreview from "../../../../website/shared/VideoPreview";
import DeleteDialog from "../../../../website/shared/DeleteDialog";
import { reformatHTMLString } from "../../../../helpers/StringsHelper";
import * as MEDIA_TYPES from "../../../../constants/MediaTypes";
import * as SERVICE_TEMPLATES from "../../../../constants/ServiceTemplates";

const emptyServiceSection = {
  title: "",
  template: "",
  order: 1,
  description_first: "",
  description_second: "",
  media_type_first: "-1",
  media_type_second: "-1",
  img_content_first: [],
  img_content_second: [],
  vid_content_first: [],
  vid_content_second: []
};

export default {
  data() {
    return {
      editData: this.$router.history.current.params.data,
      operation: this.$route.name,
      serviceSection: {
        ...emptyServiceSection
      },
      openedFor: "",
      contentType: "",
      imageIndex: null,
      showFlag: false,
      imageId: null,
      videoId: null,
      errors: {},
      validation: {
        title: { isRequired: true },
        template: { isRequired: true },
        order: { isRequired: true },
        "first description": { isRequired: true },
        "second description": { isRequired: false },
        "first media type": { isRequired: true },
        "second media type": { isRequired: false },
        "first images content": { isRequired: true },
        "second images content": { isRequired: false },
        "first videos content": { isRequired: true },
        "second videos content": { isRequired: false }
      },
      aliases: {
        title: "title",
        description_first: "first description",
        description_second: "second description",
        template: "template",
        order: "order",
        media_type_first: "first media type",
        media_type_second: "second media type",
        img_content_first: "first images content",
        img_content_second: "second images content",
        vid_content_first: "first videos content",
        vid_content_second: "second videos content"
      },
      editorOptions
    };
  },
  computed: {
    ...mapState({
      servicesData: state => state.services.serviceSections
    }),
    MEDIA_TYPES() {
      return MEDIA_TYPES;
    },
    SERVICE_TEMPLATES() {
      return SERVICE_TEMPLATES;
    }
  },
  methods: {
    ...mapActions({
      createServiceSection: types.services.actions.CREATE_SERVICE_SECTION,
      updateServiceSection: types.services.actions.UPDATE_SERVICE_SECTION,
      deleteImage: types.app.actions.DELETE_IMAGE,
      deleteVideo: types.app.actions.DELETE_VIDEO
    }),
    setActiveTemplate(template) {
      this.serviceSection.template = template;
      this.setRequiredFieldsAccrodingToTemplate(template);
    },
    setRequiredFieldsAccrodingToMediaType(order) {
      const mediaType = this.serviceSection[`media_type_${order}`];
      const isImage =
        mediaType === MEDIA_TYPES.IMG || mediaType === MEDIA_TYPES.SLIDER;
      this.validation[`${order} images content`].isRequired = isImage;
      this.validation[`${order} videos content`].isRequired = !isImage;
    },
    setRequiredFieldsAccrodingToTemplate(template) {
      const isTemplateHasTwoSections =
        template === SERVICE_TEMPLATES.TEMPLATE_4;
      this.validation[
        "second description"
      ].isRequired = isTemplateHasTwoSections;
      this.validation[
        "second media type"
      ].isRequired = isTemplateHasTwoSections;

      this.validation["first images content"].isRequired =
        this.serviceSection.media_type_first === this.MEDIA_TYPES.IMG ||
        this.serviceSection.media_type_first === this.MEDIA_TYPES.SLIDER;

      this.validation["first videos content"].isRequired =
        this.serviceSection.media_type_first === this.MEDIA_TYPES.VIDEO;

      this.validation["second images content"].isRequired =
        isTemplateHasTwoSections &&
        (this.serviceSection.media_type_second === this.MEDIA_TYPES.IMG ||
          this.serviceSection.media_type_second === this.MEDIA_TYPES.SLIDER);

      this.validation["second videos content"].isRequired =
        isTemplateHasTwoSections &&
        this.serviceSection.media_type_second === this.MEDIA_TYPES.VIDEO;

      document
        .querySelector(".second-description .vp-editor .pell-content")
        .setAttribute("contenteditable", isTemplateHasTwoSections);
    },
    isTemplateActive(template) {
      if (this.serviceSection.template === template)
        return "section-templates-img--active";
    },
    setFile(e, key) {
      const files = e.target.files;
      if (!files.length) return;
      this.serviceSection[key] = files;
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
        this.serviceSection,
        this.aliases,
        this.validation
      );
      this.errors = { ...errorObject.errors };
      if (errorObject.length !== 0) return;
      try {
        let payload = {
          title: this.serviceSection.title,
          template: this.serviceSection.template,
          order: this.serviceSection.order,
          description_first: reformatHTMLString(
            this.serviceSection.description_first
          ),
          media_type_first: this.serviceSection.media_type_first,
          imagesData: {
            img_content_first: this.$refs.img_content_first.files,
            img_content_second: this.$refs.img_content_second.files
          },
          videosData: {
            vid_content_first: this.$refs.vid_content_first.files,
            vid_content_second: this.$refs.vid_content_second.files
          }
        };
        const secondTemplate = this.serviceSection.template;
        if (secondTemplate === SERVICE_TEMPLATES.TEMPLATE_4)
          payload = {
            ...payload,
            media_type_second: this.serviceSection.media_type_second,
            description_second: reformatHTMLString(
              this.serviceSection.description_second
            )
          };
        if (this.operation === "Edit Service Section") {
          await this.updateServiceSection({
            ...payload,
            serviceSectionId: this.editData.id
          });
          this.notifyVue("Service Section Updated Successfully", "success");
        } else {
          await this.createServiceSection({
            ...payload,
            serviceId: this.$router.history.current.params.serviceId
          });
          this.notifyVue("Service Section Created Successfully", "success");
        }
        const { id } = this.servicesData;
        this.serviceSection = { ...emptyServiceSection };
        this.$router.push(`/dashboard/services/sections/list/${id}`);
      } catch (errors) {
        JSON.parse(errors).forEach(error => {
          this.notifyVue(error.message, "danger");
        });
      }
    },
    removeImage: async function() {
      const response = await this.deleteImage(this.imageId);

      switch (this.openedFor) {
        case "img_content_first":
          this.serviceSection.img_content_first.splice(this.imageIndex, 1);
          break;

        case "img_content_second":
          this.serviceSection.img_content_second.splice(this.imageIndex, 1);
          break;

        default:
          break;
      }

      this.notifyVue("Image Deleted Successfully", "success");
      this.setImageDataFlag(false, null, "", null, "");
    },
    removeVideo: async function() {
      const response = await this.deleteVideo(this.videoId);

      switch (this.openedFor) {
        case "vid_content_first":
          this.serviceSection.vid_content_first.splice(this.videoIndex, 1);
          break;

        case "vid_content_second":
          this.serviceSection.vid_content_second.splice(this.videoIndex, 1);
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
      this.$route.name === "Edit Service Section"
    )
      this.$router.push({
        path: "/dashboard/services"
      });
  },
  mounted() {
    if (this.$route.name === "Edit Service Section") {
      this.serviceSection.title = this.editData.title;
      this.serviceSection.description_first = this.editData.description_first;
      this.serviceSection.description_second =
        this.editData.description_second || "";
      this.serviceSection.template = this.editData.type;
      this.serviceSection.order = this.editData.order;
      this.serviceSection.media_type_first =
        this.editData.media_type_first || "-1";
      this.serviceSection.media_type_second =
        this.editData.media_type_second || "-1";
      this.serviceSection.img_content_first = this.editData.img_content_first;
      this.serviceSection.img_content_second = this.editData.img_content_second;
      this.serviceSection.vid_content_first = this.editData.vid_content_first;
      this.serviceSection.vid_content_second = this.editData.vid_content_second;
      this.setRequiredFieldsAccrodingToTemplate(this.editData.type);
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
</style>
