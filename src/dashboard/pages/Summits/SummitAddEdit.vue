<template>
  <div v-if="showFormWhenDataFetched">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/dashboard/summits">Summits</a>
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
            v-model="summit.initial_title"
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
            v-model="summit.final_title"
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
              v-model="summit.initial_description"
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
              placeholder=""
              v-model="summit.final_description"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <base-input
            type="text"
            label="Location"
            placeholder="Enter Location"
            v-model="summit.location"
          >
          </base-input>
        </div>
        <div class="col-md-6">
          <base-input
            type="number"
            label="Attendess"
            placeholder="Enter Attendess"
            v-model="summit.attendess"
            min="0"
          >
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <base-input
            type="date"
            label="Start Date"
            placeholder="Enter Start Date"
            v-model="summit.start_date"
            :isInvalid="errors.start_date !== undefined"
            :isRequired="true"
            @change="checkDatesSequence"
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
            v-model="summit.end_date"
            :isInvalid="errors.end_date !== undefined"
            :isRequired="true"
            @change="checkDatesSequence"
          >
          </base-input>
          <p class="error-message" v-if="errors.end_date !== undefined">
            {{ errors.end_date }}
          </p>
        </div>
        <div class="col-md-2 offset-1 m-auto">
          <div class="custom-control custom-switch">
            <input
              type="checkbox"
              class="custom-control-input"
              id="customSwitch1"
              v-model="summit.active"
            />
            <label class="custom-control-label" for="customSwitch1"
              >Active</label
            >
          </div>
        </div>
      </div>
      <div class="row mt-3 mb-3">
        <div class="col-md-6 mt-auto mb-auto">
          <div class="custom-control custom-switch">
            <input
              type="checkbox"
              class="custom-control-input"
              id="has_cover_over"
              v-model="summit.has_cover_over"
            />
            <label class="custom-control-label" for="has_cover_over"
              >Cover Over Image</label
            >
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="cover-type">Cover Type</label>
            <select class="form-control" v-model="summit.cover_type">
              <option value="-1">--Please select cover type</option>
              <option
                v-for="(type, index) in coverTypes"
                :selected="summit.cover_type === type.value"
                :key="index"
                :value="type.value"
                >{{ type.label }}</option
              >
            </select>
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col">
          <base-input
            type="text"
            label="Initial Video"
            placeholder="Enter Initial Video"
            v-model="summit.vid_initial"
          >
          </base-input>
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
                  operation === 'Edit Summit' &&
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
                  (operation === 'Edit Summit' ||
                    (editData.images !== null &&
                      editData.images.img_media !== null))
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
              >Choose Cover Main Image</label
            >
            <input
              type="file"
              id="media-images"
              accept="image/png, image/jpeg"
              @change="e => setFile(e, 'img_cover_main')"
              ref="img_cover_main"
            />
            <br />
            <ImagePreview
              v-if="
                editData !== undefined &&
                  operation === 'Edit Summit' &&
                  editData.images !== null &&
                  editData.images.img_cover_main !== null
              "
              :image="editData.images.img_cover_main[0]"
              :setShowDeleteDialogFlag="setImageDataFlag"
              openedFor="img_cover_main"
            />
          </div>
        </div>
      </div>

      <div class="row mt-3 mb-3">
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
                  operation === 'Edit Summit' &&
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
                  operation === 'Edit Summit' &&
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
          <div>
            <label class="mr-5" for="media-images1"
              >Choose Cover Home Events Image</label
            >
            <input
              type="file"
              id="media-images1"
              accept="image/png, image/jpeg"
              @change="e => setFile(e, 'img_cover_home_events')"
              ref="img_cover_home_events"
            />
            <br />
            <ImagePreview
              v-if="
                editData !== undefined &&
                  operation === 'Edit Summit' &&
                  editData.images !== null &&
                  editData.images.img_cover_home_events !== null
              "
              :image="editData.images.img_cover_home_events"
              :setShowDeleteDialogFlag="setImageDataFlag"
              openedFor="img_cover_home_events"
            />
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col">
          <div>
            <label class="mr-5" for="media-images1"
              >Choose Cover Contact Us Image</label
            >
            <input
              type="file"
              id="media-images1"
              accept="image/png, image/jpeg"
              @change="e => setFile(e, 'img_cover_contact_us')"
              ref="img_cover_contact_us"
            />
            <br />
            <ImagePreview
              v-if="
                editData !== undefined &&
                  operation === 'Edit Summit' &&
                  editData.images !== null &&
                  editData.images.img_cover_contact_us !== null
              "
              :image="editData.images.img_cover_contact_us"
              :setShowDeleteDialogFlag="setImageDataFlag"
              openedFor="img_cover_contact_us"
            />
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col">
          <div>
            <label class="mr-5" for="media-images1"
              >Choose Cover Giveaways Image</label
            >
            <input
              type="file"
              id="media-images1"
              accept="image/png, image/jpeg"
              @change="e => setFile(e, 'img_cover_home_giveaways')"
              ref="img_cover_home_giveaways"
            />
            <br />
            <ImagePreview
              v-if="
                editData !== undefined &&
                  operation === 'Edit Summit' &&
                  editData.images !== null &&
                  editData.images.img_cover_home_giveaways !== null
              "
              :image="editData.images.img_cover_home_giveaways"
              :setShowDeleteDialogFlag="setImageDataFlag"
              openedFor="img_cover_home_giveaways"
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
                operation === 'Edit Summit' &&
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
import ImagePreview from "../../../website/shared/ImagePreview.vue";
import VideoPreview from "../../../website/shared/VideoPreview.vue";
import DeleteDialog from "../../../website/shared/DeleteDialog";
import store from "../../../store/index";
import types from "../../../store/types";
import {
  createSummit,
  editSummit
} from "../../../website/helpers/APIsHelper.js";
import isDatesInProperSequence from "../../../dashboard/helpers/DateHelper";
import editorOptions from "../../../dashboard/wysiwyg-factory/options";
import generateYoutubeUrl from "../../../dashboard/helpers/YoutubeUrlGeneration";

export default {
  components: {
    ImagePreview,
    DeleteDialog,
    VideoPreview
  },
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
      summit: {
        initial_title: "",
        final_title: "",
        initial_description: "",
        final_description: "",
        attendess: 0,
        location: "",
        start_date: "",
        end_date: "",
        active: false,
        has_cover_over: false,
        cover_type: "-1",
        vid_initial: "",
        img_logo: "",
        img_cover_over: "",
        img_card: "",
        img_cover_home_events: "",
        img_cover_contact_us: "",
        img_cover_home_giveaways: "",
        img_cover_main: "",
        vid_cover_main: ""
      },
      editorOptions,
      errors: {}
    };
  },
  methods: {
    ...mapActions({
      deleteImage: types.summits.actions.DELETE_SUMMIT_IMAGE,
      deleteVideo: types.summits.actions.DELETE_SUMMIT_VIDEO,
      fetchCoverTypes: types.events.actions.FETCH_EVENT_COVER_TYPES
    }),
    clickAction() {
      this.operation === "Edit Summit"
        ? this.saveData(editSummit, "Summit Updated Successfully")
        : this.saveData(createSummit, "Summit Created Successfully");
    },
    setImageDataFlag(flag, imageId, openedFor, imageIndex) {
      this.showFlag = flag;
      this.imageId = imageId;
      this.openedFor = openedFor;
      this.imageIndex = imageIndex;
    },
    setVideoDataFlag(flag, videoId, openedFor, contentType) {
      this.showFlag = flag;
      this.videoId = videoId;
      this.openedFor = openedFor;
      this.contentType = contentType;
    },
    getVideo() {
      this.summit.vid_cover_main = this.$refs.vid_cover_main.files[0];
    },
    setFile(e, key) {
      const files = e.target.files;

      if (!files.length) return;

      this.summit[key] = files[0];
    },
    checkDatesSequence() {
      if (
        isDatesInProperSequence(
          this.summit.start_date,
          this.summit.end_date
        ) === false
      ) {
        this.notifyVue("Please insert dates in proper sequence", "danger");
      }
    },
    saveData: async function(saveFunction, successMessage) {
      if (
        !isDatesInProperSequence(this.summit.start_date, this.summit.end_date)
      ) {
        this.notifyVue("Please insert dates in proper order", "danger");
      } else {
        let formData = new FormData();
        formData.append("initial_title", this.summit.initial_title);
        formData.append("final_title", this.summit.final_title);
        formData.append("initial_description", this.summit.initial_description);
        formData.append("final_description", this.summit.final_description);
        formData.append("attendess", this.summit.attendess);
        formData.append("location", this.summit.location);
        formData.append("start_date", this.summit.start_date);
        formData.append("end_date", this.summit.end_date);
        formData.append("has_cover_over", this.summit.has_cover_over ? 1 : 0);
        formData.append("cover_type", this.summit.cover_type);
        formData.append("active", this.summit.active ? 1 : 0);
        formData.append(
          "vid_initial",
          generateYoutubeUrl(this.summit.vid_initial)
        );
        formData.append("vid_cover_main", this.summit.vid_cover_main);
        formData.append("img_logo", this.summit.img_logo);
        formData.append("img_cover_over", this.summit.img_cover_over);
        formData.append("img_card", this.summit.img_card);
        formData.append(
          "img_cover_home_events",
          this.summit.img_cover_home_events
        );
        formData.append(
          "img_cover_contact_us",
          this.summit.img_cover_contact_us
        );
        formData.append(
          "img_cover_home_giveaways",
          this.summit.img_cover_home_giveaways
        );
        formData.append("img_cover_main", this.summit.img_cover_main);

        for (var i = 0; i < this.$refs.img_media.files.length; i++) {
          let file = this.$refs.img_media.files[i];
          formData.append("img_media[]", file);
        }

        try {
          store.commit(types.home.mutations.SET_SPINNER_FLAG, true);

          if (this.operation === "Edit Summit")
            await saveFunction(this.editData.id, formData);
          else await saveFunction(formData);

          store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
          this.notifyVue(successMessage, "success");
          this.$router.push("/dashboard/summits/list");
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
      const payload = { summitId: this.editData.id, imageId: this.imageId };
      const response = await this.deleteImage(payload);

      switch (this.openedFor) {
        case "img_logo":
          this.editData.images.img_logo = null;
          break;

        case "img_cover_main":
          this.editData.images.img_cover_main = null;
          break;

        case "img_cover_over":
          this.editData.images.img_cover_over = null;
          break;

        case "img_card":
          this.editData.images.img_card = null;
          break;

        case "img_cover_home_events":
          this.editData.images.img_cover_home_events = null;
          break;

        case "img_cover_contact_us":
          this.editData.images.img_cover_contact_us = null;
          break;

        case "img_cover_home_giveaways":
          this.editData.images.img_cover_home_giveaways = null;
          break;

        case "img_media":
          this.editData.images.img_media.splice(this.imageIndex, 1);
          break;

        default:
          break;
      }

      this.notifyVue("Image Deleted Successfully", "success");
      this.setImageDataFlag(false);
      store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
    },
    removeVideo: async function() {
      const payload = { summitId: this.editData.id, videoId: this.videoId };

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
      coverTypes: state => state.events.eventCoverTypes,
      isCoverTypesFetched: state => state.events.isEventCoverTypesFetched
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
      if (this.operation !== "Edit Summit") return this.isCoverTypesFetched;
      return true;
    }
  },
  beforeMount() {
    if (
      !this.$router.history.current.params.data &&
      this.$route.name === "Edit Summit"
    )
      this.$router.push({
        path: "/dashboard/summits"
      });
  },
  mounted() {
    store.commit(types.home.mutations.SET_SPINNER_FLAG, true);
    this.fetchCoverTypes();
    if (this.$route.name === "Edit Summit") {
      this.summit.initial_title = this.editData.initial_title || "";
      this.summit.final_title = this.editData.final_title || "";
      this.summit.initial_description = this.editData.initial_description || "";
      this.summit.final_description = this.editData.final_description || "";
      this.summit.attendess = this.editData.attendess || 0;
      this.summit.location = this.editData.location || "";
      this.summit.start_date = this.editData.start_date.split(" ")[0];
      this.summit.end_date = this.editData.end_date.split(" ")[0];
      this.summit.cover_type = this.editData.cover_type;
      this.summit.has_cover_over = this.editData.has_cover_over;

      this.summit.vid_cover_main =
        (this.editData.videos.vid_cover_main !== null &&
          this.editData.videos.vid_cover_main.path) ||
        "";

      this.summit.active = this.editData.active || false;
      this.summit.img_logo = this.editData.images.img_logo;
      this.summit.img_cover_main = this.editData.images.img_cover_main;
      this.summit.img_cover_over = this.editData.images.img_cover_over;
      this.summit.img_card = this.editData.images.img_card;
      this.summit.img_cover_home_events = this.editData.images.img_cover_home_events;
      this.summit.img_cover_contact_us = this.editData.images.img_cover_contact_us;
      this.summit.img_cover_home_giveaways = this.editData.images.img_cover_home_giveaways;

      this.summit.vid_initial = this.editData.videos.vid_initial
        ? this.editData.videos.vid_initial.path || ""
        : "";
    }
  },
  updated() {
    if (this.isCoverTypesFetched)
      store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
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
