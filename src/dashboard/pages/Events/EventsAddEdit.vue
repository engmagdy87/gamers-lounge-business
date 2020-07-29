<template>
  <div
    v-if="
      isSummitsListFetched &&
        isEventTypeFetched &&
        isEventCoverTypesFetched &&
        isDashboardSponsorsDataFetched
    "
  >
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
          >
          </base-input>
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
            <label>Initial Description</label>
            <textarea
              rows="5"
              class="form-control border-input"
              placeholder="Enter Initial Description"
              v-model="event.initial_description"
            >
            </textarea>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label>Final Description</label>
            <textarea
              rows="5"
              class="form-control border-input"
              placeholder="Enter Final Description"
              v-model="event.final_description"
            >
            </textarea>
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
            <label for="eventType">Event Type</label>
            <select class="form-control" v-model="event.event_type">
              <option value="-1">--Please select event type</option>
              <option
                v-for="(type, index) in eventsTypes"
                :selected="event.event_type === type.value"
                :key="index"
                :value="type.value"
                >{{ type.label }}</option
              >
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="eventType">Main Sponsors</label>
            <select
              class="form-control"
              name="main_sponsors_ids"
              multiple
              v-model="event.main_sponsors_ids"
            >
              <option
                v-for="(sponsor, index) in dashboardSponsorsData"
                :key="index"
                :value="sponsor.id"
                >{{ sponsor.name }}</option
              >
            </select>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="eventType">Sub Sponsors</label>
            <select
              class="form-control"
              name="sub_sponsors_ids"
              multiple
              v-model="event.sub_sponsors_ids"
            >
              <option
                v-for="(sponsor, index) in dashboardSponsorsData"
                :key="index"
                :value="sponsor.id"
                >{{ sponsor.name }}</option
              >
            </select>
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
          >
          </base-input>
        </div>
        <div class="col-md-6">
          <base-input
            type="date"
            label="End Date"
            placeholder="Enter End Date"
            v-model="event.end_date"
            :min="minDate"
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
        <div class="col-md-6">
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
            <ImagePreview
              v-if="
                editData !== undefined &&
                  operation === 'Edit Event' &&
                  editData.images !== null &&
                  editData.images.img_cover_over !== null
              "
              :image="editData.images.img_cover_over"
              :setShowDeleteDialogFlag="setShowFlag"
              openedFor="img_cover_over"
            />
          </div>
        </div>
      </div>

      <div class="row mt-3 mb-3">
        <div class="col-6">
          <div>
            <label for="logo" class="mr-5">Choose Logo Image</label>
            <input
              type="file"
              id="logo"
              accept="image/png, image/jpeg"
              @change="e => setFile(e, 'img_logo')"
              ref="img_logo"
            />
            <ImagePreview
              v-if="
                editData !== undefined &&
                  operation === 'Edit Event' &&
                  editData.images !== null &&
                  editData.images.img_logo !== null
              "
              :image="editData.images.img_logo"
              :setShowDeleteDialogFlag="setShowFlag"
              openedFor="img_logo"
            />
          </div>
        </div>
        <div class="col-6">
          <div>
            <label class="mr-5" for="media-images">Choose Media Images</label>
            <input
              type="file"
              id="media-images"
              accept="image/png, image/jpeg"
              multiple
              ref="img_media"
            />
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
                :setShowDeleteDialogFlag="setShowFlag"
                openedFor="img_media"
                :imageIndex="index"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-6">
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
                :setShowDeleteDialogFlag="setShowFlag"
                openedFor="img_cover_main"
                :imageIndex="index"
              />
            </div>
          </div>
        </div>
        <div class="col-6">
          <div>
            <label class="mr-5" for="media-images1">Choose Card Image</label>
            <input
              type="file"
              id="media-images1"
              accept="image/png, image/jpeg"
              @change="e => setFile(e, 'img_card')"
              ref="img_card"
            />
            <ImagePreview
              v-if="
                editData !== undefined &&
                  operation === 'Edit Event' &&
                  editData.images !== null &&
                  editData.images.img_card !== null
              "
              :image="editData.images.img_card"
              :setShowDeleteDialogFlag="setShowFlag"
              openedFor="img_card"
            />
          </div>
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
        :setShowDeleteDialogFlag="setShowFlag"
        item="Image"
        :deleteAction="removeImage"
      />
    </form>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import Multiselect from "vue-multiselect";
import ImagePreview from "../../../website/shared/ImagePreview.vue";
import DeleteDialog from "../../../website/shared/DeleteDialog";
import store from "../../../store/index";
import types from "../../../store/types";
import { createEvent, editEvent } from "../../../website/helpers/APIsHelper.js";

export default {
  data() {
    return {
      openedFor: "",
      imageIndex: null,
      showFlag: false,
      imageId: null,
      editData: this.$router.history.current.params.data || { images: null },
      operation: this.$route.name,
      value: [],
      options: [
        { name: "Vue.js", language: "JavaScript" },
        { name: "Adonis", language: "JavaScript" },
        { name: "Rails", language: "Ruby" },
        { name: "Sinatra", language: "Ruby" },
        { name: "Laravel", language: "PHP" },
        { name: "Phoenix", language: "Elixir" }
      ],
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
        img_card: "",
        vid_initial: "",
        vid_final: "",
        main_sponsors_ids: [],
        sub_sponsors_ids: []
      }
    };
  },
  methods: {
    ...mapActions({
      deleteImage: types.events.actions.DELETE_EVENT_IMAGE,
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
    setShowFlag(flag, imageId, openedFor, imageIndex) {
      this.showFlag = flag;
      this.imageId = imageId;
      this.openedFor = openedFor;
      this.imageIndex = imageIndex;
    },
    setFile(e, key) {
      const files = e.target.files;

      if (!files.length) return;

      this.event[key] = files[0];
    },
    saveData: async function(saveFunction, successMessage) {
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
      formData.append("img_card", this.event.img_card);
      formData.append("vid_initial", this.event.vid_initial);
      formData.append("vid_final", this.event.vid_final);

      for (var i = 0; i < this.event.main_sponsors_ids.length; i++) {
        formData.append("main_sponsors_ids[]", this.event.main_sponsors_ids[i]);
      }
      for (var i = 0; i < this.event.sub_sponsors_ids.length; i++) {
        formData.append("sub_sponsors_ids[]", this.event.sub_sponsors_ids[i]);
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
        this.notifyVue("Error Happened", "danger");
        store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
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

        case "img_card":
          this.editData.images.img_card = null;
          break;

        case "img_cover_over":
          this.editData.images.img_cover_over.splice(this.imageIndex, 1);
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
      this.setShowFlag(false);
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
      this.event.img_card = this.editData.images.img_card;
      this.event.vid_initial = this.editData.videos.vid_initial.path || "";
      this.event.vid_final = this.editData.videos.vid_final.path || "";
      this.event.main_sponsors_ids = this.editData.main_sponsors.map(
        sponsor => sponsor.id
      );
      this.event.sub_sponsors_ids = this.editData.sub_sponsors.map(
        sponsor => sponsor.id
      );
    } else {
      store.commit(types.home.mutations.SET_SPINNER_FLAG, true);
      this.fetchSummitsList();
      this.fetchEventType();
      this.fetchCoverTypes();
      this.fetchSponsorsData();
    }
  },
  updated() {
    if (this.isSummitsListFetched && this.isEventTypeFetched)
      store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
  },
  components: {
    ImagePreview,
    DeleteDialog
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
