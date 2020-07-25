<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/dashboard/summits">Summits</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          Create Summit
        </li>
      </ol>
    </nav>
    <h4 slot="header" class="card-title">{{ operation }} Summit</h4>
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
          @click="postSummit"
        >
          Save
        </button>
      </div>
      <div class="clearfix"></div>
    </form>
  </div>
</template>
<script>
import store from "../../../store/index";
import types from "../../../store/types";
// import Card from "src/dashboard/components/Cards/Card.vue";
import { createSummit } from "../../../website/helpers/APIsHelper.js";

export default {
  components: {
    // Card
  },
  data() {
    return {
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
    setFile(e, key) {
      const files = e.target.files;

      if (!files.length) return;

      this.summit[key] = files[0];
    },
    postSummit: async function() {
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
        const response = await createSummit(formData);
        store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
        this.resetFields();
        this.notifyVue("Summit Created Successfully", "success");
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
      this.summit.vid_initial = "";
      this.summit.img_logo = "";
      this.summit.img_cover_over = "";
      this.summit.img_card = "";
      this.summit.img_cover_main = "";
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
