<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/dashboard/regions">Regions</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          Create Region
        </li>
      </ol>
    </nav>
    <h4 slot="header" class="card-name">{{ operation }} Region</h4>
    <form>
      <div class="row">
        <div class="col">
          <base-input
            type="text"
            label="Title"
            placeholder="Enter Title"
            v-model="region.title"
          >
          </base-input>
        </div>
      </div>

      <div class="text-center">
        <button
          type="button"
          class="btn btn-info btn-fill float-right"
          @click="postRegion"
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
import { createRegion } from "../../../website/helpers/APIsHelper.js";

export default {
  components: {
    // Card
  },
  data() {
    return {
      operation: this.$route.name,
      region: {
        title: ""
      }
    };
  },
  methods: {
    postRegion: async function() {
      let formData = new FormData();
      formData.append("title", this.region.title);

      try {
        store.commit(types.home.mutations.SET_SPINNER_FLAG, true);
        const response = await createRegion(formData);
        store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
        this.resetFields();
        this.notifyVue("Region Created Successfully", "success");
        this.$router.push("/dashboard/regions/list");
      } catch (error) {
        this.notifyVue("Error Happened", "danger");
        store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
      }
    },
    resetFields() {
      this.region.title = "";
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
