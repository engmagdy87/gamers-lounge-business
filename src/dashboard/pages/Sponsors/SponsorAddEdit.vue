<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/dashboard/sponsors">Sponsors</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          Create Sponsor
        </li>
      </ol>
    </nav>
    <h4 slot="header" class="card-name">{{ operation }} Sponsor</h4>
    <form>
      <div class="row">
        <div class="col-md-6">
          <base-input
            type="text"
            label="Name"
            placeholder="Enter Name"
            v-model="sponsor.name"
          >
          </base-input>
        </div>
        <div class="col-md-6">
          <base-input
            type="text"
            label="Link"
            placeholder="Enter Link"
            v-model="sponsor.link"
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
          </div>
        </div>
      </div>

      <div class="text-center">
        <button
          type="button"
          class="btn btn-info btn-fill float-right"
          @click="postSponsor"
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
import { createSponsor } from "../../../website/helpers/APIsHelper.js";

export default {
  components: {
    // Card
  },
  data() {
    return {
      operation: this.$route.name,
      sponsor: {
        name: "",
        link: "",
        img_logo: ""
      }
    };
  },
  methods: {
    setFile(e, key) {
      const files = e.target.files;

      if (!files.length) return;

      this.sponsor[key] = files[0];
    },
    postSponsor: async function() {
      let formData = new FormData();
      formData.append("name", this.sponsor.name);
      formData.append("link", this.sponsor.link);
      formData.append("img_logo", this.sponsor.img_logo);

      try {
        store.commit(types.home.mutations.SET_SPINNER_FLAG, true);
        const response = await createSponsor(formData);
        store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
        this.resetFields();
        this.notifyVue("Sponsor Created Successfully", "success");
        this.$router.push("/dashboard/sponsors/list");
      } catch (error) {
        this.notifyVue("Error Happened", "danger");
        store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
      }
    },
    resetFields() {
      this.sponsor.name = "";
      this.sponsor.link = "";
      this.sponsor.img_logo = "";
      this.$refs.img_logo.value = null;
    },
    notifyVue(message, color) {
      this.$notifications.notify({
        message: `<span>${message}</span>`,
        horizontalAlign: "right",
        verticalAlign: "top",
        type: color
      });
    }
  }
};
</script>
