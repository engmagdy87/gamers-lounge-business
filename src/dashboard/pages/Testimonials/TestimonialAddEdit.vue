<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/dashboard/testimonials">Testimonials</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ operation }}
        </li>
      </ol>
    </nav>
    <h4 slot="header" class="card-name">{{ operation }}</h4>
    <form>
      <div class="row">
        <div class="col-md-6">
          <base-input
            type="text"
            label="Name"
            placeholder="Enter Name"
            v-model="testimonial.name"
            :autofocus="true"
            :isInvalid="errors.name !== undefined"
            :isRequired="true"
          >
          </base-input>
          <p class="error-message" v-if="errors.name !== undefined">
            {{ errors.name }}
          </p>
        </div>
        <div class="col-md-6">
          <base-input
            type="text"
            label="Company"
            placeholder="Enter Company"
            v-model="testimonial.company"
            :isInvalid="errors.company !== undefined"
            :isRequired="true"
          >
          </base-input>
          <p class="error-message" v-if="errors.company !== undefined">
            {{ errors.company }}
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <base-input
            type="text"
            label="Title"
            placeholder="Enter Title"
            v-model="testimonial.title"
            :autofocus="true"
            :isInvalid="errors.title !== undefined"
            :isRequired="true"
          >
          </base-input>
          <p class="error-message" v-if="errors.title !== undefined">
            {{ errors.title }}
          </p>
        </div>
        <div class="col-md-6">
          <base-input
            type="number"
            label="Vote"
            placeholder="Enter Vote"
            v-model="testimonial.vote"
            min="0"
            max="5"
          >
          </base-input>
          <p class="error-message" v-if="errors.vote !== undefined">
            {{ errors.vote }}
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label>Review<span class="error-message"> *</span></label>
            <vue-pell-editor
              :actions="editorOptions"
              :style-with-css="false"
              placeholder=""
              v-model="testimonial.review"
              :class="
                errors.review !== undefined ? 'pell-content--is-invalid' : ''
              "
            />
            <p class="error-message" v-if="errors.review !== undefined">
              {{ errors.review }}
            </p>
          </div>
        </div>
      </div>
      <div class="row mt-3 mb-3">
        <div class="col">
          <div>
            <label for="logo" class="mr-5">Choose Profile Image</label>
            <input
              type="file"
              id="logo"
              accept="image/png, image/jpeg"
              @change="e => setFile(e, 'img_profile')"
              ref="img_profile"
            />
            <br />
            <ImagePreview
              v-if="
                editData !== undefined &&
                  operation === 'Edit Testimonial' &&
                  editData.images !== null &&
                  editData.images.img_profile !== null
              "
              :image="editData.images.img_profile"
              :setShowDeleteDialogFlag="setImageDataFlag"
              openedFor="img_profile"
            />
          </div>
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
        :setShowDeleteDialogFlag="setImageDataFlag"
        item="Image"
        :deleteAction="removeImage"
      />
    </form>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import store from "../../../store/index";
import types from "../../../store/types";
import ImagePreview from "../../../website/shared/ImagePreview.vue";
import DeleteDialog from "../../../website/shared/DeleteDialog";
import {
  createTestimonial,
  editTestimonial
} from "../../../website/helpers/APIsHelper.js";
import editorOptions from "../../../dashboard/wysiwyg-factory/options";

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
      testimonial: {
        name: "",
        company: "",
        title: "",
        vote: 0,
        review: "",
        img_profile: ""
      },
      editorOptions,
      errors: {}
    };
  },
  methods: {
    ...mapActions({
      deleteImage: types.testimonials.actions.DELETE_TESTIMONIAL_IMAGE
    }),
    clickAction() {
      this.operation === "Edit Testimonial"
        ? this.saveData(editTestimonial, "Testimonial Updated Successfully")
        : this.saveData(createTestimonial, "Testimonial Created Successfully");
    },
    setImageDataFlag(flag, imageId, openedFor, imageIndex) {
      this.showFlag = flag;
      this.imageId = imageId;
      this.openedFor = openedFor;
      this.imageIndex = imageIndex;
    },
    setFile(e, key) {
      const files = e.target.files;

      if (!files.length) return;

      this.testimonial[key] = files[0];
    },
    saveData: async function(saveFunction, successMessage) {
      let formData = new FormData();
      formData.append("name", this.testimonial.name);
      formData.append("company", this.testimonial.company);
      formData.append("title", this.testimonial.title);
      formData.append("vote", this.testimonial.vote);
      formData.append("review", this.testimonial.review);

      formData.append("img_profile", this.testimonial.img_profile);

      try {
        store.commit(types.home.mutations.SET_SPINNER_FLAG, true);

        if (this.operation === "Edit Testimonial")
          await saveFunction(this.editData.id, formData);
        else await saveFunction(formData);

        store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
        this.notifyVue(successMessage, "success");
        this.$router.push("/dashboard/testimonials/list");
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
    removeImage: async function() {
      const payload = {
        testimonialId: this.editData.id,
        imageId: this.imageId
      };
      const response = await this.deleteImage(payload);

      switch (this.openedFor) {
        case "img_profile":
          this.editData.images.img_profile = null;
          break;

        default:
          break;
      }

      this.notifyVue("Image Deleted Successfully", "success");
      this.setImageDataFlag(false);
      store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
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
      this.$route.name === "Edit Testimonial"
    )
      this.$router.push({
        path: "/dashboard/testimonials"
      });
  },
  mounted() {
    if (this.$route.name === "Edit Testimonial") {
      this.testimonial.name = this.editData.name;
      this.testimonial.company = this.editData.company || "";
      this.testimonial.title = this.editData.title || "";
      this.testimonial.vote = this.editData.vote || 0;
      this.testimonial.review = this.editData.review || "";

      this.testimonial.img_profile = this.editData.images.img_profile;
    }
  }
};
</script>
