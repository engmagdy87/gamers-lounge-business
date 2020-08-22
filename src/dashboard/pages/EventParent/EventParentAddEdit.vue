<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/dashboard/event-parent">Event Parent</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ operation }}
        </li>
      </ol>
    </nav>
    <h4 slot="header" class="card-name">{{ operation }}</h4>
    <form>
      <div class="row">
        <div class="col">
          <base-input
            type="text"
            label="Title"
            placeholder="Enter Title"
            v-model="eventParent.title"
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
    </form>
  </div>
</template>
<script>
import store from "../../../store/index";
import types from "../../../store/types";
import {
  createEventParent,
  editEventParent
} from "../../../website/helpers/APIsHelper.js";

export default {
  data() {
    return {
      editData: this.$router.history.current.params.data || { images: null },
      operation: this.$route.name,
      eventParent: {
        title: ""
      },
      errors: {}
    };
  },
  methods: {
    clickAction() {
      this.operation === "Edit Event Parent"
        ? this.saveData(editEventParent, "EventParent Updated Successfully")
        : this.saveData(createEventParent, "EventParent Created Successfully");
    },
    saveData: async function(saveFunction, successMessage) {
      let formData = new FormData();
      formData.append("title", this.eventParent.title);

      try {
        store.commit(types.home.mutations.SET_SPINNER_FLAG, true);

        if (this.operation === "Edit Event Parent")
          await saveFunction(this.editData.id, formData);
        else await saveFunction(formData);

        store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
        this.notifyVue(successMessage, "success");
        this.$router.push("/dashboard/event-parent/list");
      } catch (error) {
        this.errors = { ...error.data.errors };
        Object.keys(error.data.errors).forEach(err => {
          const errorMessage = error.data.errors[err][0];
          this.notifyVue(errorMessage, "danger");
          this.errors = { ...this.errors, [err]: errorMessage };
        });
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
    }
  },
  beforeMount() {
    if (
      !this.$router.history.current.params.data &&
      this.$route.name === "Edit Event Parent"
    )
      this.$router.push({
        path: "/dashboard/event-parent"
      });
  },
  mounted() {
    if (this.$route.name === "Edit Event Parent") {
      this.eventParent.title = this.editData.title;
    }
  }
};
</script>
