<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/dashboard/works">Works</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ operation }}
        </li>
      </ol>
    </nav>
    <h4 slot="header" class="card-name">{{ operation }}</h4>
    <form>
      <div class="row">
        <div class="col-12 col-md-4">
          <base-input
            type="text"
            label="Title"
            placeholder="Enter Title"
            v-model="work.title"
            :autofocus="true"
            :isRequired="true"
          >
          </base-input>
          <ErrorMessage :fieldErrors="errors.title" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label
              >Short Description<span class="error-message"> *</span></label
            >
            <vue-pell-editor
              :actions="editorOptions"
              :style-with-css="false"
              placeholder=""
              v-model="work.short_description"
            />
            <ErrorMessage :fieldErrors="errors.short_description" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label>Description<span class="error-message"> *</span></label>
            <vue-pell-editor
              :actions="editorOptions"
              :style-with-css="false"
              placeholder=""
              v-model="work.description"
            />
            <ErrorMessage :fieldErrors="errors.description" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label>Statistics<span class="error-message"> *</span></label>
            <div class="row">
              <div class="col-10">
                <StatisticsInput
                  v-for="(item, i) in work.statistics"
                  :key="item.id"
                  :item="item"
                  :itemLocation="i"
                  v-on:updateStatistics="updateStatistics($event)"
                  v-on:removeStatistics="removeStatistics($event)"
                />
              </div>
              <div class="col-2">
                <button
                  type="button"
                  class="btn btn-info btn-fill float-right"
                  @click="addNewStatistic"
                >
                  Add
                </button>
              </div>
            </div>
            <ErrorMessage :fieldErrors="errors.statistics" />
          </div>
        </div>
      </div>
      <div class="row mt-3 mb-3">
        <div class="col">
          <div>
            <label for="img_card" class="mr-5"
              >Choose Card Image<span class="error-message"> *</span></label
            >
            <input
              type="file"
              id="img_card"
              accept="image/png, image/jpeg"
              @change="e => setFile(e, 'img_card')"
              ref="img_card"
            />
            <br />
            <ImagePreview
              v-if="
                editData !== undefined &&
                  operation === 'Edit Work' &&
                  editData.img_card !== ''
              "
              :image="editData.img_card"
              :setShowDeleteDialogFlag="setImageDataFlag"
              openedFor="img_card"
            />
            <ErrorMessage :fieldErrors="errors.img_card" />
          </div>
        </div>
      </div>
      <div class="row mt-3 mb-3">
        <div class="col">
          <div>
            <label for="logo" class="mr-5"
              >Choose Cover Image<span class="error-message"> *</span></label
            >
            <input
              type="file"
              id="logo"
              accept="image/png, image/jpeg"
              @change="e => setFile(e, 'img_cover')"
              ref="img_cover"
            />
            <br />
            <ImagePreview
              v-if="
                editData !== undefined &&
                  operation === 'Edit Work' &&
                  editData.img_cover !== ''
              "
              :image="editData.img_cover"
              :setShowDeleteDialogFlag="setImageDataFlag"
              openedFor="img_cover"
            />
            <ErrorMessage :fieldErrors="errors.img_cover" />
          </div>
        </div>
      </div>

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
        :setShowDeleteDialogFlag="setImageDataFlag"
        item="Image"
        :deleteAction="removeImage"
      />
    </form>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import ErrorMessage from "../../../website/shared/ErrorMessage";
import store from "../../../store/index";
import types from "../../../store/types";
import { createWork } from "../../../helpers/APIsHelper";
import isValidationErrorExist from "../../../helpers/FormValidation";
import editorOptions from "../../../dashboard/wysiwyg-factory/options";
import StatisticsInput from "../../components/Works/StatisticsInput";
import ImagePreview from "../../../website/shared/ImagePreview.vue";
import DeleteDialog from "../../../website/shared/DeleteDialog";
import {
  reformatHTMLString,
  reverseReformatHTMLString
} from "../../../helpers/StringsHelper";

const emptyWork = {
  title: "",
  short_description: "",
  description: "",
  statistics: [],
  img_card: "",
  img_cover: ""
};

export default {
  data() {
    return {
      editData: this.$router.history.current.params.data,
      operation: this.$route.name,
      work: {
        ...emptyWork
      },
      openedFor: "",
      imageIndex: null,
      showFlag: false,
      imageId: null,
      errors: {},
      validation: {
        title: { isRequired: true },
        "short description": { isRequired: true },
        description: { isRequired: true },
        statistics: { isRequired: true },
        "card image": { isRequired: true },
        "cover image": { isRequired: true }
      },
      aliases: {
        title: "title",
        short_description: "short description",
        description: "description",
        statistics: "statistics",
        img_card: "card image",
        img_cover: "cover image"
      },
      editorOptions
    };
  },
  methods: {
    ...mapActions({
      createWork: types.works.actions.CREATE_WORK,
      updateWork: types.works.actions.UPDATE_WORK,
      deleteImage: types.app.actions.DELETE_IMAGE
    }),
    setImageDataFlag(flag, imageId, openedFor, imageIndex) {
      this.showFlag = flag;
      this.imageId = imageId;
      this.openedFor = openedFor;
      this.imageIndex = imageIndex;
    },
    setFile(e, key) {
      const files = e.target.files;

      if (!files.length) return;

      this.work[key] = files[0];
    },
    saveData: async function() {
      const errorObject = isValidationErrorExist(
        this.work,
        this.aliases,
        this.validation
      );
      this.errors = { ...errorObject.errors };
      if (errorObject.length !== 0) return;
      try {
        let payload = {
          title: this.work.title,
          shortDescription: reformatHTMLString(this.work.short_description),
          description: reformatHTMLString(this.work.description),
          statistics: reformatHTMLString(JSON.stringify(this.work.statistics))
        };

        if (this.operation === "Edit Work") {
          let imagesData = {};
          const { img_card, img_cover } = this.work;

          if (!img_card.url)
            imagesData = { ...imagesData, img_card: this.work.img_card };

          if (!img_cover.url)
            imagesData = { ...imagesData, img_cover: this.work.img_cover };

          if (Object.keys(imagesData).length > 0)
            payload = { ...payload, imagesData };
          await this.updateWork({ ...payload, workId: this.editData.id });
          this.notifyVue("Work Updated Successfully", "success");
        } else {
          payload = {
            ...payload,
            imagesData: {
              img_card: this.work.img_card,
              img_cover: this.work.img_cover
            }
          };
          await this.createWork(payload);
          this.notifyVue("Work Created Successfully", "success");
        }
        this.work = { ...emptyWork };
        this.$router.push("/dashboard/works");
      } catch (errors) {
        JSON.parse(errors).forEach(error => {
          this.notifyVue(error.message, "danger");
        });
      }
    },
    removeImage: async function() {
      const response = await this.deleteImage(this.imageId);

      switch (this.openedFor) {
        case "img_card":
          this.editData.img_card = "";
          this.work.img_card = "";
          break;

        case "img_cover":
          this.editData.img_cover = "";
          this.work.img_cover = "";
          break;

        default:
          break;
      }

      this.notifyVue("Image Deleted Successfully", "success");
      this.setImageDataFlag(false, null, "", null);
    },
    updateStatistics(payload) {
      this.work.statistics[payload.itemLocation] = {
        ...this.work.statistics[payload.itemLocation],
        key: payload.name,
        value: payload.value
      };
    },
    removeStatistics(itemIndex) {
      this.work.statistics.splice(itemIndex, 1);
    },
    addNewStatistic() {
      const statisticsLength = this.work.statistics.length;
      const id =
        statisticsLength === 0
          ? 1
          : this.work.statistics[statisticsLength - 1].id + 1;
      this.work.statistics.push({
        id,
        key: "",
        value: null
      });
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
      this.$route.name === "Edit Work"
    )
      this.$router.push({
        path: "/dashboard/works"
      });
  },
  mounted() {
    if (this.$route.name === "Edit Work") {
      this.work.title = this.editData.title;
      this.work.short_description = this.editData.short_description;
      this.work.description = this.editData.description;
      this.work.statistics = JSON.parse(
        reverseReformatHTMLString(this.editData.statistics)
      );
      this.work.img_card = this.editData.img_card || "";
      this.work.img_cover = this.editData.img_cover || "";
    }
  },
  components: {
    ErrorMessage,
    ImagePreview,
    DeleteDialog,
    StatisticsInput
  }
};
</script>
