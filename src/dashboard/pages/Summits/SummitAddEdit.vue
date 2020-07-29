<template>
  <div>
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
          >
          </base-input>
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
            <label>Initial Description</label>
            <textarea
              rows="5"
              class="form-control border-input"
              placeholder="Enter Initial Description"
              v-model="summit.initial_description"
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
              v-model="summit.final_description"
            >
            </textarea>
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
            :min="minDate"
          >
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input
            type="date"
            label="End Date"
            placeholder="Enter End Date"
            v-model="summit.end_date"
            :min="minDate"
          >
          </base-input>
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
                  operation === 'Edit Summit' &&
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
                  (operation === 'Edit Summit' || editData.images !== null)
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
              @change="e => setFile(e, 'img_cover_main')"
              ref="img_cover_main"
            />
            <ImagePreview
              v-if="
                editData !== undefined &&
                  operation === 'Edit Summit' &&
                  editData.images !== null &&
                  editData.images.img_cover_main !== null
              "
              :image="editData.images.img_cover_main"
              :setShowDeleteDialogFlag="setShowFlag"
              openedFor="img_cover_main"
            />
          </div>
        </div>
        <div class="col-6">
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
                  operation === 'Edit Summit' &&
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

      <div class="row mb-3">
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
                  operation === 'Edit Summit' &&
                  editData.images !== null &&
                  editData.images.img_card !== null
              "
              :image="editData.images.img_card"
              :setShowDeleteDialogFlag="setShowFlag"
              openedFor="img_card"
            />
          </div>
        </div>
        <div class="col-6">
          <base-input
            type="text"
            label="Initial Video"
            placeholder="Enter Initial Video"
            v-model="summit.vid_initial"
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
import ImagePreview from "../../../website/shared/ImagePreview.vue";
import DeleteDialog from "../../../website/shared/DeleteDialog";
import store from "../../../store/index";
import types from "../../../store/types";
import {
  createSummit,
  editSummit
} from "../../../website/helpers/APIsHelper.js";

export default {
  components: {
    ImagePreview,
    DeleteDialog
  },
  data() {
    return {
      openedFor: "",
      imageIndex: null,
      showFlag: false,
      imageId: null,
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
        vid_initial: "",
        img_logo: "",
        img_cover_over: "",
        img_card: "",
        img_cover_main: ""
      }
    };
  },
  methods: {
    ...mapActions({
      deleteImage: types.summits.actions.DELETE_SUMMIT_IMAGE
    }),
    clickAction() {
      this.operation === "Edit Summit"
        ? this.saveData(editSummit, "Summit Updated Successfully")
        : this.saveData(createSummit, "Summit Created Successfully");
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

      this.summit[key] = files[0];
    },
    saveData: async function(saveFunction, successMessage) {
      let formData = new FormData();
      formData.append("initial_title", this.summit.initial_title);
      formData.append("final_title", this.summit.final_title);
      formData.append("initial_description", this.summit.initial_description);
      formData.append("final_description", this.summit.final_description);
      formData.append("attendess", this.summit.attendess);
      formData.append("location", this.summit.location);
      formData.append("start_date", this.summit.start_date);
      formData.append("end_date", this.summit.end_date);
      formData.append("active", this.summit.active ? 1 : 0);
      formData.append("vid_initial", this.summit.vid_initial);
      formData.append("img_logo", this.summit.img_logo);
      formData.append("img_cover_over", this.summit.img_cover_over);
      formData.append("img_card", this.summit.img_card);
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
        this.notifyVue("Error Happened", "danger");
        store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
      }
    },
    resetFields() {
      this.summit.initial_title = "";
      this.summit.final_title = "";
      this.summit.initial_description = "";
      this.summit.final_description = "";
      this.summit.attendess = 0;
      this.summit.location = "";
      this.summit.start_date = "";
      this.summit.end_date = "";
      this.summit.active = false;

      this.summit.img_logo = "";
      this.summit.img_cover_over = "";
      this.summit.img_card = "";
      this.summit.img_cover_main = "";

      this.summit.vid_initial = "";

      this.$refs.img_logo.value = null;
      this.$refs.img_cover_over.value = null;
      this.$refs.img_media.value = null;
      this.$refs.img_cover_main.value = null;
      this.$refs.img_card.value = null;
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

        case "img_media":
          this.editData.images.img_media.splice(this.imageIndex, 1);
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
    minDate() {
      var today = new Date();
      var date =
        today.getFullYear() +
        "-" +
        ("0" + (today.getMonth() + 1)).slice(-2) +
        "-" +
        today.getDate();
      return date;
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
    if (this.$route.name === "Edit Summit") {
      this.summit.initial_title = this.editData.initial_title || "";
      this.summit.final_title = this.editData.final_title || "";
      this.summit.initial_description = this.editData.initial_description || "";
      this.summit.final_description = this.editData.final_description || "";
      this.summit.attendess = this.editData.attendess || 0;
      this.summit.location = this.editData.location || "";
      this.summit.start_date = this.editData.start_date.split(" ")[0];
      this.summit.end_date = this.editData.end_date.split(" ")[0];

      this.summit.active = this.editData.active || false;
      this.summit.img_logo = this.editData.images.img_logo;
      this.summit.img_cover_main = this.editData.images.img_cover_main;
      this.summit.img_cover_over = this.editData.images.img_cover_over;
      this.summit.img_card = this.editData.images.img_card;

      this.summit.vid_initial = this.editData.videos.vid_initial
        ? this.editData.videos.vid_initial.path || ""
        : "";
    }
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
