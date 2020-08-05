<template>
  <div v-if="showFormWhenDataFetched">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/dashboard/events">Events</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ operation }}
        </li>
      </ol>
    </nav>
    <h4 slot="header" class="card-title">{{ operation }}</h4>
    <form>
      <div class="row">
        <div class="col-md-6">
          <base-input
            type="text"
            label="Initial Title"
            placeholder="Enter Initial Title"
            v-model="event.initial_title"
            :autofocus="true"
            :isInvalid="errors.initial_title !== undefined"
            :isRequired="true"
          >
          </base-input>
          <p class="error-message" v-if="errors.initial_title !== undefined">
            {{ errors.initial_title }}
          </p>
        </div>
        <div class="col-md-6">
          <base-input
            type="text"
            label="Final Title"
            placeholder="Enter Final Title"
            v-model="event.final_title"
          >
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div class="form-group">
            <label
              >Initial Description<span class="error-message"> *</span></label
            >
            <vue-pell-editor
              :actions="editorOptions"
              :style-with-css="false"
              placeholder=""
              v-model="event.initial_description"
              :class="
                errors.initial_description !== undefined
                  ? 'pell-content--is-invalid'
                  : ''
              "
            />
            <p
              class="error-message"
              v-if="errors.initial_description !== undefined"
            >
              {{ errors.initial_description }}
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label>Final Description</label>
            <vue-pell-editor
              :actions="editorOptions"
              :style-with-css="false"
              default-paragraph-separator="p"
              v-model="event.final_description"
              placeholder=""
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="form-group">
            <label for="summit">Summit</label>
            <select class="form-control" v-model="event.summit_id">
              <option value="-1">--Please select summit</option>
              <option
                v-for="(summit, index) in summitsListData"
                :selected="event.summit_id === summit.id"
                :key="index"
                :value="summit.id"
                >{{ summit.initial_title }}({{
                  summit.active ? "Active" : ""
                }})</option
              >
            </select>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label for="cover-type">Cover Type</label>
            <select class="form-control" v-model="event.cover_type">
              <option value="-1">--Please select cover type</option>
              <option
                v-for="(type, index) in eventCoverTypes"
                :selected="event.cover_type === type.value"
                :key="index"
                :value="type.value"
                >{{ type.label }}</option
              >
            </select>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label for="eventType"
              >Event Type<span class="error-message"> *</span></label
            >
            <select
              class="form-control"
              v-model="event.event_type"
              :class="
                errors.type !== undefined ? 'pell-content--is-invalid' : ''
              "
            >
              <option value="-1">--Please select event type</option>
              <option
                v-for="(type, index) in eventsTypes"
                :selected="event.event_type === type.value"
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
        <div class="col-md-6">
          <div class="form-group">
            <label for="eventType">Main Sponsors</label>
            <multiselect
              v-model="event.main_sponsors_ids"
              :options="dashboardSponsorsData"
              :multiple="true"
              :close-on-select="false"
              :clear-on-select="false"
              placeholder="Choose Main Sponsors"
              label="name"
              track-by="name"
            >
            </multiselect>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="eventType">Sub Sponsors</label>
            <multiselect
              v-model="event.sub_sponsors_ids"
              :options="dashboardSponsorsData"
              :multiple="true"
              :close-on-select="false"
              :clear-on-select="false"
              placeholder="Choose Sub Sponsors"
              label="name"
              track-by="name"
            >
            </multiselect>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mt-auto mb-auto">
          <div class="custom-control custom-switch">
            <input
              type="checkbox"
              class="custom-control-input"
              id="is_external"
              v-model="event.is_external"
            />
            <label class="custom-control-label" for="is_external"
              >External Event</label
            >
          </div>
        </div>
        <div class="col-md-6">
          <base-input
            type="text"
            label="External Event Link"
            placeholder="Enter External Event Link"
            v-model="event.external_link"
          >
          </base-input>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <base-input
            type="date"
            label="Start Date"
            placeholder="Enter Start Date"
            v-model="event.start_date"
            :min="minDate"
            :isInvalid="errors.start_date !== undefined"
            :isRequired="true"
            @change="checkDatesSequence"
          >
          </base-input>
          <p class="error-message" v-if="errors.start_date !== undefined">
            {{ errors.start_date }}
          </p>
        </div>
        <div class="col-md-6">
          <base-input
            type="date"
            label="End Date"
            placeholder="Enter End Date"
            v-model="event.end_date"
            :min="minDate"
            :isInvalid="errors.end_date !== undefined"
            :isRequired="true"
            @change="checkDatesSequence"
          >
          </base-input>
          <p class="error-message" v-if="errors.end_date !== undefined">
            {{ errors.end_date }}
          </p>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-6">
          <base-input
            type="text"
            label="Initial Video"
            placeholder="Enter Initial Video"
            v-model="event.vid_initial"
          >
          </base-input>
        </div>
        <div class="col-6">
          <base-input
            type="text"
            label="Final Video"
            placeholder="Enter Final Video"
            v-model="event.vid_final"
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
              id="has_cover_over"
              v-model="event.has_cover_over"
            />
            <label class="custom-control-label" for="has_cover_over"
              >Cover Over Image</label
            >
          </div>
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
                  operation === 'Edit Event' &&
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
                  operation === 'Edit Event' &&
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
      <div class="row mt-3 mb-3">
        <div class="col">
          <div>
            <label for="logo" class="mr-5">Choose Cover Home Image</label>
            <input
              type="file"
              id="logo"
              accept="image/png, image/jpeg"
              @change="e => setFile(e, 'img_cover_home')"
              ref="img_cover_home"
            />
            <br />
            <ImagePreview
              v-if="
                editData !== undefined &&
                  operation === 'Edit Event' &&
                  editData.images !== null &&
                  editData.images.img_cover_home !== null
              "
              :image="editData.images.img_cover_home"
              :setShowDeleteDialogFlag="setImageDataFlag"
              openedFor="img_cover_home"
            />
          </div>
        </div>
      </div>
      <div class="row mt-3 mb-3">
        <div class="col">
          <div>
            <label class="mr-5" for="media-images">Choose Media Images</label>
            <input
              type="file"
              id="media-images"
              accept="image/png, image/jpeg"
              multiple
              ref="img_media"
            />
            <br />
            <div
              v-if="
                editData !== undefined &&
                  (operation === 'Edit Event' || editData.images !== null)
              "
            >
              <ImagePreview
                v-for="(img, index) in editData.images.img_media"
                :key="index"
                :image="img"
                :setShowDeleteDialogFlag="setImageDataFlag"
                openedFor="img_media"
                :imageIndex="index"
              />
            </div>
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
                  (operation === 'Edit Event' || editData.images !== null)
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
                  operation === 'Edit Event' &&
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
                operation === 'Edit Event' &&
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
    </form>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import Multiselect from "vue-multiselect";
import ImagePreview from "../../../website/shared/ImagePreview.vue";
import VideoPreview from "../../../website/shared/VideoPreview.vue";
import DeleteDialog from "../../../website/shared/DeleteDialog";
import store from "../../../store/index";
import types from "../../../store/types";
import { createEvent, editEvent } from "../../../website/helpers/APIsHelper.js";
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
      imageId: null,
      videoId: null,
      editData: this.$router.history.current.params.data || { images: null },
      operation: this.$route.name,
      event: {
        initial_title: "",
        final_title: "",
        initial_description: "",
        final_description: "",
        summit_id: "-1",
        cover_type: "-1",
        event_type: "-1",
        is_external: false,
        external_link: "",
        start_date: "",
        end_date: "",
        has_cover_over: false,
        img_cover_over: "",
        img_logo: "",
        img_cover_home: "",
        img_card: "",
        vid_initial: "",
        vid_final: "",
        vid_cover_main: "",
        main_sponsors_ids: [],
        sub_sponsors_ids: []
      },
      editorOptions,
      errors: {}
    };
  },
  methods: {
    ...mapActions({
      deleteImage: types.events.actions.DELETE_EVENT_IMAGE,
      deleteVideo: types.events.actions.DELETE_EVENT_VIDEO,
      fetchSummitsList: types.summits.actions.FETCH_SUMMITS_LIST,
      fetchEventType: types.events.actions.FETCH_EVENT_TYPE,
      fetchCoverTypes: types.events.actions.FETCH_EVENT_COVER_TYPES,
      fetchSponsorsData: types.sponsors.actions.FETCH_SPONSORS_FOR_DASHBOARD
    }),
    clickAction() {
      this.operation === "Edit Event"
        ? this.saveData(editEvent, "Event Updated Successfully")
        : this.saveData(createEvent, "Event Created Successfully");
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
    getVideo() {
      this.event.vid_cover_main = this.$refs.vid_cover_main.files[0];
    },
    setFile(e, key) {
      const files = e.target.files;

      if (!files.length) return;

      this.event[key] = files[0];
    },
    checkDatesSequence() {
      if (
        isDatesInProperSequence(this.event.start_date, this.event.end_date) ===
        false
      ) {
        this.notifyVue("Please insert dates in proper sequence", "danger");
      }
      if (
        isDatesInProperSequence(
          this.summitsListData[0].start_date.split(" ")[0],
          this.event.start_date
        ) === false
      ) {
        this.notifyVue(
          "Please insert start date to be after summit start date " +
            this.summitsListData[0].start_date.split(" ")[0],
          "danger"
        );
      }
      if (
        isDatesInProperSequence(
          this.event.end_date,
          this.summitsListData[0].end_date.split(" ")[0]
        ) === false
      ) {
        this.notifyVue(
          "Please insert end date to be before summit end date " +
            this.summitsListData[0].end_date.split(" ")[0],
          "danger"
        );
      }
    },
    saveData: async function(saveFunction, successMessage) {
      if (
        isDatesInProperSequence(this.event.start_date, this.event.end_date) ===
        false
      ) {
        this.notifyVue("Please insert dates in proper sequence", "danger");
      } else if (
        isDatesInProperSequence(
          this.summitsListData[0].start_date.split(" ")[0],
          this.event.start_date
        ) === false
      ) {
        this.notifyVue(
          "Please insert start date to be after summit start date " +
            this.summitsListData[0].start_date.split(" ")[0],
          "danger"
        );
      } else if (
        isDatesInProperSequence(
          this.event.end_date,
          this.summitsListData[0].end_date.split(" ")[0]
        ) === false
      ) {
        this.notifyVue(
          "Please insert end date to be before summit end date " +
            this.summitsListData[0].end_date.split(" ")[0],
          "danger"
        );
      } else {
        let formData = new FormData();

        formData.append("initial_title", this.event.initial_title);
        formData.append("final_title", this.event.final_title);
        formData.append("initial_description", this.event.initial_description);
        formData.append("final_description", this.event.final_description);
        formData.append("summit_id", this.event.summit_id);
        formData.append("cover_type", this.event.cover_type);
        formData.append("type", this.event.event_type);
        formData.append("is_external", this.event.is_external ? 1 : 0);
        formData.append("external_link", this.event.external_link);
        formData.append("start_date", this.event.start_date);
        formData.append("end_date", this.event.end_date);
        formData.append("has_cover_over", this.event.has_cover_over ? 1 : 0);
        formData.append("img_cover_over", this.event.img_cover_over);
        formData.append("img_logo", this.event.img_logo);
        formData.append("img_cover_home", this.event.img_cover_home);
        formData.append("img_card", this.event.img_card);
        formData.append(
          "vid_initial",
          generateYoutubeUrl(this.event.vid_initial)
        );
        formData.append("vid_final", generateYoutubeUrl(this.event.vid_final));
        formData.append("vid_cover_main", this.event.vid_cover_main);

        for (var i = 0; i < this.event.main_sponsors_ids.length; i++) {
          formData.append(
            "main_sponsors_ids[]",
            this.event.main_sponsors_ids[i].id
          );
        }
        for (var i = 0; i < this.event.sub_sponsors_ids.length; i++) {
          formData.append(
            "sub_sponsors_ids[]",
            this.event.sub_sponsors_ids[i].id
          );
        }
        for (var i = 0; i < this.$refs.img_media.files.length; i++) {
          let file = this.$refs.img_media.files[i];
          formData.append("img_media[]", file);
        }
        for (var i = 0; i < this.$refs.img_cover_main.files.length; i++) {
          let file = this.$refs.img_cover_main.files[i];
          formData.append("img_cover_main[]", file);
        }

        try {
          store.commit(types.home.mutations.SET_SPINNER_FLAG, true);

          if (this.operation === "Edit Event")
            await saveFunction(this.editData.id, formData);
          else await saveFunction(formData);

          store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
          this.notifyVue(successMessage, "success");
          this.$router.push("/dashboard/events/list");
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
      const payload = { eventId: this.editData.id, imageId: this.imageId };

      const response = await this.deleteImage(payload);

      switch (this.openedFor) {
        case "img_logo":
          this.editData.images.img_logo = null;
          break;

        case "img_cover_home":
          this.editData.images.img_cover_home = null;
          break;

        case "img_card":
          this.editData.images.img_card = null;
          break;

        case "img_cover_over":
          this.editData.images.img_cover_over = null;
          break;

        case "img_media":
          this.editData.images.img_media.splice(this.imageIndex, 1);
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
      const payload = { eventId: this.editData.id, videoId: this.videoId };

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
      summitsListData: state => state.summits.summitsListData,
      isSummitsListFetched: state => state.summits.isSummitsListFetched,
      eventsTypes: state => state.events.eventsTypes,
      isEventTypeFetched: state => state.events.isEventTypeFetched,
      eventCoverTypes: state => state.events.eventCoverTypes,
      isEventCoverTypesFetched: state => state.events.isEventCoverTypesFetched,
      dashboardSponsorsData: state => state.sponsors.dashboardSponsorsData,
      isDashboardSponsorsDataFetched: state =>
        state.sponsors.isDashboardSponsorsDataFetched
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
    getSonsors() {
      return this.dashboardSponsorsData.map(sponsor => sponsor.name);
    },
    showFormWhenDataFetched() {
      if (this.operation !== "Edit Event")
        return (
          this.isSummitsListFetched &&
          this.isEventTypeFetched &&
          this.isEventCoverTypesFetched &&
          this.isDashboardSponsorsDataFetched
        );
      return true;
    }
  },
  beforeMount() {
    if (
      !this.$router.history.current.params.data &&
      this.$route.name === "Edit Event"
    )
      this.$router.push({
        path: "/dashboard/events"
      });
  },
  mounted() {
    store.commit(types.home.mutations.SET_SPINNER_FLAG, true);
    this.fetchSummitsList();
    this.fetchEventType();
    this.fetchCoverTypes();
    this.fetchSponsorsData();
    if (this.$route.name === "Edit Event") {
      this.event.initial_title = this.editData.initial_title || "";
      this.event.final_title = this.editData.final_title || "";
      this.event.initial_description = this.editData.initial_description || "";
      this.event.final_description = this.editData.final_description || "";
      this.event.summit_id = this.editData.summit.id;
      this.event.cover_type = this.editData.cover_type;
      this.event.event_type = this.editData.type;
      this.event.is_external = this.editData.is_external;
      this.event.external_link = this.editData.external_link || "";
      this.event.start_date = this.editData.start_date.split(" ")[0];
      this.event.end_date = this.editData.end_date.split(" ")[0];
      this.event.has_cover_over = this.editData.has_cover_over;
      this.event.img_cover_over = this.editData.images.img_cover_over;
      this.event.img_logo = this.editData.images.img_logo;
      this.event.img_cover_home = this.editData.images.img_cover_home;
      this.event.img_card = this.editData.images.img_card;
      this.event.vid_initial =
        (this.editData.videos.vid_initial !== null &&
          this.editData.videos.vid_initial.path) ||
        "";
      this.event.vid_final =
        (this.editData.videos.vid_final !== null &&
          this.editData.videos.vid_final.path) ||
        "";

      this.event.vid_cover_main =
        (this.editData.videos.vid_cover_main !== null &&
          this.editData.videos.vid_cover_main.path) ||
        "";

      this.event.main_sponsors_ids = this.editData.main_sponsors;
      this.event.sub_sponsors_ids = this.editData.sub_sponsors;
    }
  },
  updated() {
    if (this.isSummitsListFetched && this.isEventTypeFetched)
      store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
  },
  components: {
    ImagePreview,
    DeleteDialog,
    Multiselect,
    VideoPreview
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
