<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/dashboard/services">Services</a>
        </li>
        <li class="breadcrumb-item">
          <router-link
            :to="`/dashboard/services/sections/list/${serviceSections.id}`"
            >{{ serviceSections.title }} Service Sections</router-link
          >
        </li>
        <li class="breadcrumb-item">
          <router-link
            :to="`/dashboard/services/rows/list/${serviceRowsData.id}`"
            >Section {{ serviceRowsData.order }} Rows</router-link
          >
        </li>
        <li class="breadcrumb-item" aria-current="page">
          <router-link :to="`/dashboard/services/columns/list/${rowId}`">
            Columns
          </router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ operation }}
        </li>
      </ol>
    </nav>
    <div class="alert alert-primary" role="alert">
      <strong>Hint</strong> Total Width must be less than or equal<strong>
        100%</strong
      >
    </div>
    <div class="alert alert-dark w-100 m-0 p-0 d-flex" role="alert">
      <div
        class="alert alert-info m-0"
        :style="`width:${calculateTotalWidth()}%`"
        role="alert"
        v-if="calculateTotalWidth() > 0"
      >
        Used Width:
        <strong
          ><h2>{{ calculateTotalWidth() }}%</h2></strong
        >
      </div>
      <div
        class="alert alert-dark m-0 text-dark"
        :style="`width:${(100 - calculateTotalWidth()).toFixed(1)}%`"
        role="alert"
        v-if="(100 - calculateTotalWidth()).toFixed(1) > 0"
      >
        Remain Width:
        <strong
          ><h2>{{ (100 - calculateTotalWidth()).toFixed(1) }}%</h2></strong
        >
      </div>
    </div>
    <h4 slot="header" class="card-name">{{ operation }}</h4>
    <form>
      <div class="row d-flex m-0">
        <div
          :class="[
            'column',
            currentWidth() === 100 ? 'column--full' : 'column--not-full'
          ]"
          v-for="(col, i) in serviceRowData.columns"
          :key="i"
          :style="`width:${col.ratio}%`"
        >
          <p>{{ col.ratio }}%</p>
          <p v-if="col.fillable">{{ col.type }}</p>
          <p v-else></p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6">
          <base-input
            type="number"
            label="Order"
            placeholder="Enter Order"
            v-model="serviceColumn.order"
            :autofocus="true"
            :isRequired="true"
          >
          </base-input>
          <ErrorMessage :fieldErrors="errors.order" />
        </div>
        <div class="col-12 col-md-6">
          <div class="form-group">
            <label
              >Column Content Type<span class="error-message"> *</span></label
            >
            <select
              class="form-control"
              v-model="serviceColumn.type"
              @change="
                e => setRequiredFieldsAccrodingToContentType(e.target.value)
              "
            >
              <option value="-1">--Please choose content type</option>
              <option
                v-for="(type, i) in SERVICE_COLUMNS_CONTENT_TYPES"
                :key="i"
                ::selected="serviceColumn.type === type"
                :value="type"
                >{{ type.toLowerCase() }}</option
              >
            </select>
            <ErrorMessage :fieldErrors="errors.type" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-4">
          <base-input
            type="number"
            step="0.1"
            label="Width in %"
            placeholder="Enter Width in %"
            v-model="serviceColumn.ratio"
            :isRequired="true"
          >
          </base-input>
          <ErrorMessage :fieldErrors="errors.ratio" />
        </div>
        <div class="col-12 col-md-4 mt-auto mb-auto">
          <div class="custom-control custom-switch">
            <input
              type="checkbox"
              class="custom-control-input"
              id="fillable"
              v-model="serviceColumn.fillable"
            />
            <label class="custom-control-label" for="fillable"
              >Has Content</label
            >
          </div>
        </div>
        <div class="col-12 col-md-4 mt-auto mb-auto">
          <div class="custom-control custom-switch">
            <input
              type="checkbox"
              class="custom-control-input"
              id="isAutoPlay"
              v-model="serviceColumn.isAutoPlay"
              @change="updateVideoData"
            />
            <label class="custom-control-label" for="isAutoPlay"
              >Is Autoplay Video</label
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
            v-model="serviceColumn.title"
            :isRequired="
              serviceColumn.type === SERVICE_COLUMNS_CONTENT_TYPES.TITLE
            "
          >
          </base-input>
          <div
            v-if="serviceColumn.type === SERVICE_COLUMNS_CONTENT_TYPES.TITLE"
          >
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
                v-if="
                  serviceColumn.type ===
                    SERVICE_COLUMNS_CONTENT_TYPES.DESCRIPTION
                "
              >
                *</span
              ></label
            >
            <vue-pell-editor
              :actions="editorOptions"
              :style-with-css="false"
              placeholder=""
              v-model="serviceColumn.description"
            />
            <div
              v-if="
                serviceColumn.type === SERVICE_COLUMNS_CONTENT_TYPES.DESCRIPTION
              "
            >
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
                  serviceColumn.type === SERVICE_COLUMNS_CONTENT_TYPES.IMAGE ||
                    serviceColumn.type === SERVICE_COLUMNS_CONTENT_TYPES.SLIDER
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
              :multiple="
                serviceColumn.type === SERVICE_COLUMNS_CONTENT_TYPES.SLIDER
              "
              ref="img_content"
              @change="e => setFile(e, 'img_content')"
            />
            <br />
            <div
              v-if="
                editData !== undefined &&
                  (operation === 'Edit Service Column' ||
                    (editData.img_content !== null &&
                      editData.img_content !== null))
              "
              class="image-preview-list"
            >
              <ImagePreview
                v-for="(img, index) in editData.img_content"
                :key="img.id"
                :image="img"
                :setShowDeleteDialogFlag="setImageDataFlag"
                openedFor="img_content"
                :imageIndex="index"
              />
            </div>
            <div
              v-if="
                serviceColumn.type === SERVICE_COLUMNS_CONTENT_TYPES.IMAGE ||
                  serviceColumn.type === SERVICE_COLUMNS_CONTENT_TYPES.SLIDER
              "
            >
              <ErrorMessage :fieldErrors="errors.img_content" />
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
                v-if="
                  serviceColumn.type === SERVICE_COLUMNS_CONTENT_TYPES.VIDEO
                "
                class="error-message"
              >
                *</span
              ></label
            >
            <input
              type="file"
              id="logo"
              accept="video/*"
              ref="vid_content"
              @change="e => setFile(e, 'vid_content')"
            />
            <br />
            <div
              v-if="
                editData !== undefined &&
                  (operation === 'Edit Service Column' ||
                    (editData.vid_content !== null &&
                      editData.vid_content !== null))
              "
              class="image-preview-list"
            >
              <VideoPreview
                v-for="(vid, index) in editData.vid_content"
                :key="vid.id"
                :video="vid"
                :setShowDeleteDialogFlag="setVideoDataFlag"
                openedFor="vid_content"
                :videoIndex="index"
              />
            </div>
            <div
              v-if="serviceColumn.type === SERVICE_COLUMNS_CONTENT_TYPES.VIDEO"
            >
              <ErrorMessage :fieldErrors="errors.vid_content" />
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
import types from "../../../../store/types";
import isValidationErrorExist from "../../../../helpers/FormValidation";
import editorOptions from "../../../../dashboard/wysiwyg-factory/options";
import ImagePreview from "../../../../website/shared/ImagePreview.vue";
import VideoPreview from "../../../../website/shared/VideoPreview";
import DeleteDialog from "../../../../website/shared/DeleteDialog";
import { reformatHTMLString } from "../../../../helpers/StringsHelper";
import * as SERVICE_COLUMNS_CONTENT_TYPES from "../../../../constants/ColumnsContentTypes";

const emptyColumnSection = {
  order: 1,
  type: "-1",
  title: "",
  description: "",
  ratio: 0,
  fillable: false,
  isAutoPlay: false,
  img_content: [],
  vid_content: []
};

export default {
  data() {
    return {
      editData: this.$router.history.current.params.data,
      operation: this.$route.name,
      serviceColumn: {
        ...emptyColumnSection
      },
      openedFor: "",
      contentType: "",
      imageIndex: null,
      showFlag: false,
      imageId: null,
      videoId: null,
      errors: {},
      validation: {
        order: { isRequired: true },
        type: { isRequired: true },
        title: { isRequired: true },
        description: { isRequired: true },
        ratio: { isRequired: true },
        fillable: { isRequired: true },
        "is auto play": { isRequired: false },
        "images content": { isRequired: true },
        "videos content": { isRequired: true }
      },
      aliases: {
        order: "order",
        type: "type",
        title: "title",
        description: "description",
        ratio: "ratio",
        fillable: "fillable",
        isAutoPlay: "is auto play",
        img_content: "images content",
        vid_content: "videos content"
      },
      editorOptions
    };
  },
  computed: {
    ...mapState({
      serviceRowData: state => state.services.serviceRow,
      serviceRowsData: state => state.services.serviceRows,
      serviceSections: state => state.services.serviceSections
    }),
    SERVICE_COLUMNS_CONTENT_TYPES() {
      return SERVICE_COLUMNS_CONTENT_TYPES;
    },
    rowId() {
      return this.$router.history.current.params.rowId;
    }
  },
  methods: {
    ...mapActions({
      fetchColumnsRows: types.services.actions.FETCH_SERVICE_COLUMNS,
      createColumn: types.services.actions.CREATE_SERVICE_COLUMN,
      updateColumn: types.services.actions.UPDATE_SERVICE_COLUMN,
      updateVideo: types.services.actions.UPDATE_VIDEO,
      deleteImage: types.app.actions.DELETE_IMAGE,
      deleteVideo: types.app.actions.DELETE_VIDEO
    }),
    updateVideoData: async function() {
      if (
        this.operation === "Edit Service Column" &&
        this.serviceColumn.type === SERVICE_COLUMNS_CONTENT_TYPES.VIDEO
      ) {
        const payload = {
          videoId: this.serviceColumn.vid_content[0].id,
          isAutoPlay: this.serviceColumn.isAutoPlay
        };
        await this.updateVideo(payload);
      }
    },
    setRequiredFieldsAccrodingToContentType(value) {
      let key;
      const targetKeys = [
        "title",
        "description",
        "images content",
        "videos content"
      ];
      switch (value) {
        case SERVICE_COLUMNS_CONTENT_TYPES.TITLE:
          key = "title";
          break;
        case SERVICE_COLUMNS_CONTENT_TYPES.DESCRIPTION:
          key = "description";
          break;
        case SERVICE_COLUMNS_CONTENT_TYPES.IMAGE:
          key = "images content";
          break;
        case SERVICE_COLUMNS_CONTENT_TYPES.SLIDER:
          key = "images content";
          break;
        case SERVICE_COLUMNS_CONTENT_TYPES.VIDEO:
          key = "videos content";
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
      this.serviceColumn[key] = files;
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
    currentWidth() {
      let sum = 0;
      if (this.operation === "Edit Service Column")
        this.serviceRowData.columns.forEach(col => {
          if (col.id !== this.editData.id) sum += Number.parseFloat(col.ratio);
        });
      else
        this.serviceRowData.columns.forEach(col => {
          sum += Number.parseFloat(col.ratio);
        });
      return sum.toFixed(1);
    },
    calculateTotalWidth() {
      let sum = Number.parseFloat(this.currentWidth());

      sum += Number.parseFloat(this.serviceColumn.ratio);

      return sum.toFixed(1);
    },
    saveData: async function() {
      const errorObject = isValidationErrorExist(
        this.serviceColumn,
        this.aliases,
        this.validation
      );
      this.errors = { ...errorObject.errors };
      if (errorObject.length !== 0) return;

      if (this.calculateTotalWidth() > 100) {
        this.notifyVue(
          "Row Width will be greater than 100%, Please adjust column width",
          "danger"
        );
        return;
      }
      try {
        let content = "";
        if (this.serviceColumn.type === SERVICE_COLUMNS_CONTENT_TYPES.TITLE)
          content = this.serviceColumn.title;
        if (
          this.serviceColumn.type === SERVICE_COLUMNS_CONTENT_TYPES.DESCRIPTION
        )
          content = reformatHTMLString(this.serviceColumn.description);
        let payload = {
          order: this.serviceColumn.order,
          type: this.serviceColumn.type,
          content,
          ratio: this.serviceColumn.ratio,
          fillable: this.serviceColumn.fillable,
          imagesData: {
            img_content: this.$refs.img_content.files
          },
          videosData: {
            vid_content: this.$refs.vid_content.files
          }
        };
        const rowId = this.$router.history.current.params.rowId;
        const { id } = this.serviceRowData;
        if (this.operation === "Edit Service Column") {
          await this.updateColumn({
            ...payload,
            columnId: this.editData.id,
            rowId
          });
          this.notifyVue("Service Column Updated Successfully", "success");
          this.serviceColumn = { ...emptyColumnSection };
          this.$router.push(`/dashboard/services/columns/list/${id}`);
        } else {
          await this.createColumn({
            ...payload,
            rowId,
            isAutoPlay: this.serviceColumn.isAutoPlay
          });
          const fetchPayload = {
            rowId: rowId,
            requestSource: "dashboard"
          };
          await this.fetchColumnsRows(fetchPayload);
          this.serviceColumn = { ...emptyColumnSection };
          this.notifyVue("Service Column Created Successfully", "success");
        }
      } catch (errors) {
        JSON.parse(errors).forEach(error => {
          this.notifyVue(error.message, "danger");
        });
      }
    },
    removeImage: async function() {
      const response = await this.deleteImage(this.imageId);

      switch (this.openedFor) {
        case "img_content":
          this.serviceColumn.img_content.splice(this.imageIndex, 1);
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
        case "vid_content":
          this.serviceColumn.vid_content.splice(this.videoIndex, 1);
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
      this.$route.name === "Edit Service Column"
    )
      this.$router.push({
        path: "/dashboard/services"
      });
  },
  mounted() {
    if (this.$route.name === "Edit Service Column") {
      this.serviceColumn.order = this.editData.order;
      this.serviceColumn.type = this.editData.type;
      this.serviceColumn.ratio = this.editData.ratio;
      this.serviceColumn.fillable = this.editData.fillable;
      this.serviceColumn.isAutoPlay = this.editData.vid_content[0]
        ? this.editData.vid_content[0].is_auto_play
        : false;
      this.serviceColumn.img_content = this.editData.img_content;
      this.serviceColumn.vid_content = this.editData.vid_content;
      if (this.editData.type === SERVICE_COLUMNS_CONTENT_TYPES.TITLE)
        this.serviceColumn.title = this.editData.content;
      if (this.editData.type === SERVICE_COLUMNS_CONTENT_TYPES.DESCRIPTION)
        this.serviceColumn.description = this.editData.content;
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
