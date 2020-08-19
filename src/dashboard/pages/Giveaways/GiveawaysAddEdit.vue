<template>
  <div v-if="showFormWhenDataFetched">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/dashboard/giveaways">Giveaways</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ operation }}
        </li>
      </ol>
    </nav>
    <h4 slot="header" class="card-title">{{ operation }}</h4>
    <form>
      <div class="row">
        <div class="col-12">
          <base-input
            type="text"
            label="Title"
            placeholder="Enter Title"
            v-model="giveaway.title"
            :autofocus="true"
            :isInvalid="errors.title !== undefined"
            :isRequired="true"
          >
          </base-input>
          <p class="error-message" v-if="errors.title !== undefined">
            {{ errors.title }}
          </p>
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
              v-model="giveaway.description"
              :class="
                errors.description !== undefined
                  ? 'pell-content--is-invalid'
                  : ''
              "
            />
            <p class="error-message" v-if="errors.description !== undefined">
              {{ errors.description }}
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label>Email Template<span class="error-message"> *</span></label>
            <vue-pell-editor
              :actions="editorOptions"
              :style-with-css="false"
              placeholder=""
              v-model="giveaway.email_template"
              :class="
                errors.email_template !== undefined
                  ? 'pell-content--is-invalid'
                  : ''
              "
            />
            <p class="error-message" v-if="errors.email_template !== undefined">
              {{ errors.email_template }}
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <base-input
            type="date"
            label="Start Date"
            placeholder="Enter Start Date"
            v-model="giveaway.start_date"
            :min="minDate"
            :isInvalid="errors.start_date !== undefined"
            :isRequired="true"
          >
          </base-input>
          <p class="error-message" v-if="errors.start_date !== undefined">
            {{ errors.start_date }}
          </p>
        </div>
        <div class="col-md-4">
          <base-input
            type="date"
            label="End Date"
            placeholder="Enter End Date"
            v-model="giveaway.end_date"
            :min="minDate"
            :isInvalid="errors.end_date !== undefined"
            :isRequired="true"
          >
          </base-input>
          <p class="error-message" v-if="errors.end_date !== undefined">
            {{ errors.end_date }}
          </p>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label for="giveawayType"
              >Giveaway Type<span class="error-message"> *</span></label
            >
            <select
              class="form-control"
              v-model="giveaway.type"
              :class="
                errors.type !== undefined ? 'pell-content--is-invalid' : ''
              "
            >
              <option value="-1">--Please select giveaway type</option>
              <option
                v-for="(type, index) in giveawaysTypes"
                :selected="giveaway.type === type.value"
                :key="index"
                :value="type.value"
                >{{ type.label }}</option
              >
            </select>
            <p class="error-message" v-if="errors.type !== undefined">
              {{ errors.type }}
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-4 mt-auto mb-auto">
          <div class="custom-control custom-switch">
            <input
              type="checkbox"
              class="custom-control-input"
              id="has_cover_over"
              v-model="giveaway.has_cover_over"
            />
            <label class="custom-control-label" for="has_cover_over"
              >Cover Over Image</label
            >
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label for="cover-type">Cover Type</label>
            <select class="form-control" v-model="giveaway.cover_type">
              <option value="-1">--Please select cover type</option>
              <option
                v-for="(type, index) in giveawayCoverTypes"
                :selected="giveaway.cover_type === type.value"
                :key="index"
                :value="type.value"
                >{{ type.label }}</option
              >
            </select>
          </div>
        </div>

        <div class="col-12 col-md-4 mt-auto mb-auto">
          <div class="custom-control custom-switch">
            <input
              type="checkbox"
              class="custom-control-input"
              id="enabled"
              v-model="giveaway.enabled"
            />
            <label class="custom-control-label" for="enabled"
              >Publish Giveaway/Offer</label
            >
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="form-group">
            <label for="giveawayType">Events</label>
            <multiselect
              v-model="giveaway.events_ids"
              :options="dashboardEventsData"
              :multiple="true"
              :close-on-select="false"
              :clear-on-select="false"
              placeholder="Choose Events"
              label="initial_title"
              track-by="initial_title"
            >
            </multiselect>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <base-input
            type="number"
            label="Register Limit"
            placeholder="Enter Register Limit"
            v-model="giveaway.register_limit"
            min="0"
          >
          </base-input>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mt-auto mb-auto">
          <div class="custom-control custom-switch">
            <input
              type="checkbox"
              class="custom-control-input"
              id="is_external"
              v-model="giveaway.is_external"
            />
            <label class="custom-control-label" for="is_external"
              >External Giveaway</label
            >
          </div>
        </div>
        <div class="col-md-6">
          <base-input
            type="text"
            label="External Giveaway Link"
            placeholder="Enter External Giveaway Link"
            v-model="giveaway.external_link"
          >
          </base-input>
        </div>
      </div>

      <div class="row mt-4 mb-3">
        <div class="col-12">
          <div class="row mb-3">
            <div class="col-12 col-md-6">
              <label class="mr-5 ml-2" for="media-images"
                >Register Questions</label
              >
            </div>
            <div class="col-12 col-md-6">
              <button
                type="button"
                class="btn btn-secondary d-block ml-auto heading-margin"
                @click="() => setShowGiveawayRegisterQuestionModalFlag(true)"
              >
                Add Question
              </button>
            </div>
          </div>
        </div>
        <div class="col-12">
          <LTable
            class="table-hover table-striped"
            :columns="table.columns"
            :data="giveaway.register_questions"
            tableType="giveaways-register-question"
            :setShowDeleteDialogFlag="setRegisterQuestionFlag"
          >
          </LTable>
        </div>
      </div>
      <div class="row mt-4 mb-3">
        <div class="col">
          <div>
            <label class="mr-5" for="media-images"
              >Choose Cover Over Image</label
            >
            <input
              type="file"
              id="media-images"
              accept="image/png, image/jpeg"
              @change="e => setFile(e, 'img_cover_over')"
              ref="img_cover_over"
            />
            <br />
            <ImagePreview
              v-if="
                editData !== undefined &&
                  operation === 'Edit Giveaway' &&
                  editData.images !== null &&
                  editData.images.img_cover_over !== null
              "
              :image="editData.images.img_cover_over"
              :setShowDeleteDialogFlag="setImageDataFlag"
              openedFor="img_cover_over"
            />
          </div>
        </div>
      </div>
      <div class="row mt-3 mb-3">
        <div class="col">
          <div>
            <label for="logo" class="mr-5">Choose Logo Image</label>
            <input
              type="file"
              id="logo"
              accept="image/png, image/jpeg"
              @change="e => setFile(e, 'img_logo')"
              ref="img_logo"
            />
            <br />
            <ImagePreview
              v-if="
                editData !== undefined &&
                  operation === 'Edit Giveaway' &&
                  editData.images !== null &&
                  editData.images.img_logo !== null
              "
              :image="editData.images.img_logo"
              :setShowDeleteDialogFlag="setImageDataFlag"
              openedFor="img_logo"
            />
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col">
          <div>
            <label class="mr-5" for="media-images"
              >Choose Cover Main Images</label
            >
            <input
              type="file"
              id="media-images"
              accept="image/png, image/jpeg"
              multiple
              ref="img_cover_main"
            />
            <br />
            <div
              v-if="
                editData !== undefined &&
                  (operation === 'Edit Giveaway' ||
                    (editData.images !== null &&
                      editData.images.img_cover_main !== null))
              "
            >
              <ImagePreview
                v-for="(img, index) in editData.images.img_cover_main"
                :key="index"
                :image="img"
                :setShowDeleteDialogFlag="setImageDataFlag"
                openedFor="img_cover_main"
                :imageIndex="index"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col">
          <div>
            <label class="mr-5" for="media-images1">Choose Card Image</label>
            <input
              type="file"
              id="media-images1"
              accept="image/png, image/jpeg"
              @change="e => setFile(e, 'img_card')"
              ref="img_card"
            />
            <br />
            <ImagePreview
              v-if="
                editData !== undefined &&
                  operation === 'Edit Giveaway' &&
                  editData.images !== null &&
                  editData.images.img_card !== null
              "
              :image="editData.images.img_card"
              :setShowDeleteDialogFlag="setImageDataFlag"
              openedFor="img_card"
            />
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col">
          <label class="mr-5" for="media-images1"
            >Choose Cover Main Video</label
          >
          <input
            type="file"
            id="logo"
            accept="video/*"
            @change="getVideo"
            ref="vid_cover_main"
          />
          <br />
          <VideoPreview
            v-if="
              editData !== undefined &&
                operation === 'Edit Giveaway' &&
                editData.videos !== null &&
                editData.videos.vid_cover_main !== null
            "
            :video="editData.videos.vid_cover_main"
            :setShowDeleteDialogFlag="setVideoDataFlag"
            openedFor="vid_cover_main"
          />
        </div>
      </div>

      <div class="text-center">
        <button
          type="button"
          class="btn btn-info btn-fill float-right"
          @click="clickAction"
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
      <GiveawayRegisterQuestionModal
        :showGiveawayRegisterQuestionModalFlag="
          showGiveawayRegisterQuestionModalFlag
        "
        :setShowGiveawayRegisterQuestionModalFlag="
          setShowGiveawayRegisterQuestionModalFlag
        "
      />
    </form>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import Multiselect from "vue-multiselect";
import ImagePreview from "../../../website/shared/ImagePreview.vue";
import VideoPreview from "../../../website/shared/VideoPreview.vue";
import GiveawayRegisterQuestionModal from "../../components/GiveawayRegisterQuestionModal";
import LTable from "src/dashboard/components/Table.vue";
import DeleteDialog from "../../../website/shared/DeleteDialog";
import store from "../../../store/index";
import types from "../../../store/types";
import {
  createGiveaway,
  editGiveaway
} from "../../../website/helpers/APIsHelper.js";
import editorOptions from "../../../dashboard/wysiwyg-factory/options";
import isDatesInProperSequence from "../../../dashboard/helpers/DateHelper";
import generateYoutubeUrl from "../../../dashboard/helpers/YoutubeUrlGeneration";

export default {
  data() {
    return {
      openedFor: "",
      contentType: "",
      imageIndex: null,
      showFlag: false,
      showGiveawayRegisterQuestionModalFlag: false,
      imageId: null,
      videoId: null,
      questionId: null,
      editData: this.$router.history.current.params.data || { images: null },
      operation: this.$route.name,
      giveaway: {
        title: "",
        description: "",
        email_template: "",
        start_date: "",
        end_date: "",
        type: "-1",
        cover_type: "-1",
        register_limit: 0,
        has_cover_over: false,
        events_ids: [],
        register_questions: [],
        is_external: false,
        external_link: "",
        enabled: false,
        img_cover_over: "",
        img_logo: "",
        img_card: "",
        vid_cover_main: ""
      },
      editorOptions,
      errors: {},
      table: {
        columns: ["Id", "Title", "Type", "Data", "Actions"]
      }
    };
  },
  methods: {
    ...mapActions({
      deleteImage: types.giveaways.actions.DELETE_GIVEAWAY_IMAGE,
      deleteVideo: types.giveaways.actions.DELETE_GIVEAWAY_VIDEO,
      fetchEventsList: types.events.actions.FETCH_EVENT_LIST,
      fetchGiveawayType: types.giveaways.actions.FETCH_GIVEAWAY_TYPE,
      fetchCoverTypes: types.giveaways.actions.FETCH_GIVEAWAY_COVER_TYPES
    }),
    clickAction() {
      this.operation === "Edit Giveaway"
        ? this.saveData(editGiveaway, "Giveaway Updated Successfully")
        : this.saveData(createGiveaway, "Giveaway Created Successfully");
    },
    setShowGiveawayRegisterQuestionModalFlag(flag) {
      this.showGiveawayRegisterQuestionModalFlag = flag;
    },
    setImageDataFlag(flag, imageId, openedFor, imageIndex, contentType) {
      this.showFlag = flag;
      this.imageId = imageId;
      this.openedFor = openedFor;
      this.imageIndex = imageIndex;
      this.contentType = contentType;
    },
    setVideoDataFlag(flag, videoId, openedFor, contentType) {
      this.showFlag = flag;
      this.videoId = videoId;
      this.openedFor = openedFor;
      this.contentType = contentType;
    },
    setRegisterQuestionFlag(flag, questionId, openedFor, contentType) {
      this.showFlag = flag;
      this.questionId = questionId;
      this.openedFor = openedFor;
    },
    getVideo() {
      this.giveaway.vid_cover_main = this.$refs.vid_cover_main.files[0];
    },
    setFile(e, key) {
      const files = e.target.files;

      if (!files.length) return;

      this.giveaway[key] = files[0];
    },
    saveData: async function(saveFunction, successMessage) {
      if (
        isDatesInProperSequence(
          this.giveaway.start_date,
          this.giveaway.end_date
        ) === false
      ) {
        this.notifyVue("Please insert dates in proper sequence", "danger");
      } else {
        let formData = new FormData();

        formData.append("title", this.giveaway.title);
        formData.append("description", this.giveaway.description);
        formData.append("email_template", this.giveaway.email_template);
        formData.append("start_date", this.giveaway.start_date);
        formData.append("end_date", this.giveaway.end_date);
        formData.append("type", this.giveaway.type);
        formData.append("cover_type", this.giveaway.cover_type);
        formData.append("register_limit", this.giveaway.register_limit);
        formData.append("has_cover_over", this.giveaway.has_cover_over ? 1 : 0);
        formData.append("is_external", this.giveaway.is_external ? 1 : 0);
        formData.append("external_link", this.giveaway.external_link);
        formData.append("enabled", this.giveaway.enabled ? 1 : 0);
        formData.append("img_cover_over", this.giveaway.img_cover_over);
        formData.append("img_logo", this.giveaway.img_logo);
        formData.append("img_card", this.giveaway.img_card);
        formData.append("vid_cover_main", this.giveaway.vid_cover_main);

        if (this.giveaway.events_ids.length === 0)
          formData.append("events_ids[]", []);
        for (var i = 0; i < this.giveaway.events_ids.length; i++) {
          formData.append("events_ids[]", this.giveaway.events_ids[i].id);
        }

        for (var i = 0; i < this.$refs.img_cover_main.files.length; i++) {
          let file = this.$refs.img_cover_main.files[i];
          formData.append("img_cover_main[]", file);
        }

        try {
          store.commit(types.home.mutations.SET_SPINNER_FLAG, true);

          if (this.operation === "Edit Giveaway")
            await saveFunction(this.editData.id, formData);
          else await saveFunction(formData);

          store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
          this.notifyVue(successMessage, "success");
          this.$router.push("/dashboard/giveaways/list");
        } catch (error) {
          this.errors = { ...error.data.errors };
          Object.keys(error.data.errors).forEach(err => {
            const errorMessage = error.data.errors[err][0];
            this.notifyVue(errorMessage, "danger");
            this.errors = { ...this.errors, [err]: errorMessage };
          });
          store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
        }
      }
    },
    notifyVue(message, color) {
      this.$notifications.notify({
        message: `<span>${message}</span>`,
        horizontalAlign: "right",
        verticalAlign: "top",
        type: color
      });
    },
    removeImage: async function() {
      const payload = { giveawayId: this.editData.id, imageId: this.imageId };

      const response = await this.deleteImage(payload);

      switch (this.openedFor) {
        case "img_logo":
          this.editData.images.img_logo = null;
          break;

        case "img_card":
          this.editData.images.img_card = null;
          break;

        case "img_cover_over":
          this.editData.images.img_cover_over = null;
          break;

        case "img_cover_main":
          this.editData.images.img_cover_main.splice(this.imageIndex, 1);
          break;

        default:
          break;
      }

      this.notifyVue("Image Deleted Successfully", "success");
      this.setImageDataFlag(false);
      store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
    },
    removeVideo: async function() {
      const payload = { giveawayId: this.editData.id, videoId: this.videoId };

      const response = await this.deleteVideo(payload);

      switch (this.openedFor) {
        case "vid_cover_main":
          this.editData.videos.vid_cover_main = null;
          break;

        default:
          break;
      }

      this.notifyVue("Video Deleted Successfully", "success");
      this.setVideoDataFlag(false);
      store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
    }
  },
  computed: {
    ...mapState({
      dashboardEventsData: state => state.events.eventsList,
      isEventsListFetched: state => state.events.isEventsListFetched,
      giveawaysTypes: state => state.giveaways.giveawaysTypes,
      isGiveawayTypeFetched: state => state.giveaways.isGiveawayTypeFetched,
      giveawayCoverTypes: state => state.giveaways.giveawayCoverTypes,
      isGiveawayCoverTypesFetched: state =>
        state.giveaways.isGiveawayCoverTypesFetched
    }),
    minDate() {
      var today = new Date();
      var date =
        today.getFullYear() +
        "-" +
        ("0" + (today.getMonth() + 1)).slice(-2) +
        "-" +
        today.getDate();
      return date;
    },
    showFormWhenDataFetched() {
      if (this.operation !== "Edit Giveaway")
        return (
          this.isEventsListFetched &&
          this.isGiveawayTypeFetched &&
          this.isGiveawayCoverTypesFetched
        );
      return true;
    }
  },
  beforeMount() {
    if (
      !this.$router.history.current.params.data &&
      this.$route.name === "Edit Giveaway"
    )
      this.$router.push({
        path: "/dashboard/giveaways"
      });
  },
  mounted() {
    store.commit(types.home.mutations.SET_SPINNER_FLAG, true);
    this.fetchEventsList();
    this.fetchGiveawayType();
    this.fetchCoverTypes();
    if (this.$route.name === "Edit Giveaway") {
      this.giveaway.title = this.editData.title || "";
      this.giveaway.description = this.editData.description || "";
      this.giveaway.email_template = this.editData.email_template || "";
      this.giveaway.start_date = this.editData.start_date.split(" ")[0];
      this.giveaway.register_limit = this.editData.register_limit || 0;
      this.giveaway.end_date = this.editData.end_date.split(" ")[0];
      this.giveaway.type = this.editData.type;
      this.giveaway.cover_type = this.editData.cover_type;
      this.giveaway.has_cover_over = this.editData.has_cover_over;
      this.giveaway.is_external = this.editData.is_external;
      this.giveaway.external_link = this.editData.external_link || "";
      this.giveaway.enabled = this.editData.enabled;
      this.giveaway.img_cover_over = this.editData.images.img_cover_over;
      this.giveaway.img_logo = this.editData.images.img_logo;
      this.giveaway.img_card = this.editData.images.img_card;
      this.giveaway.img_cover_main = this.editData.images.img_cover_main;

      this.giveaway.vid_cover_main =
        (this.editData.videos.vid_cover_main !== null &&
          this.editData.videos.vid_cover_main.path) ||
        "";
      this.giveaway.events_ids = this.editData.events_ids;
    }
  },
  updated() {
    if (
      this.isEventsListFetched &&
      this.isGiveawayTypeFetched &&
      this.isGiveawayCoverTypesFetched
    )
      store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
  },
  components: {
    ImagePreview,
    DeleteDialog,
    Multiselect,
    VideoPreview,
    LTable,
    GiveawayRegisterQuestionModal
  }
};
</script>
<style lang="scss" scoped>
@import "../../../assets/sass/website/color-palette.scss";

.custom-control-input:checked ~ .custom-control-label::before {
  border-color: $primary !important;
  background-color: $primary !important;
}
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
