<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/dashboard/popups">Popups</a>
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
            label="Title"
            placeholder="Enter Title"
            v-model="popup.title"
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
            type="text"
            label="Link"
            placeholder="Enter Link"
            v-model="popup.link"
            :isInvalid="errors.link !== undefined"
            :isRequired="true"
          >
          </base-input>
          <p class="error-message" v-if="errors.link !== undefined">
            {{ errors.link }}
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="form-group">
            <label for="popupTplaces">Places</label>
            <multiselect
              v-model="popup.places"
              :options="PopupsPlaces"
              :multiple="true"
              :close-on-select="false"
              :clear-on-select="false"
              placeholder="Choose Popup Places"
            >
            </multiselect>
          </div>
        </div>
      </div>

      <div class="row mt-3 mb-3">
        <div class="col">
          <div>
            <label for="main" class="mr-5">Choose Main Image</label>
            <input
              type="file"
              id="main"
              accept="image/png, image/jpeg"
              @change="e => setFile(e, 'img_main')"
              ref="img_main"
            />
            <br />
            <ImagePreview
              v-if="
                editData !== undefined &&
                  operation === 'Edit Popup' &&
                  editData.images !== null &&
                  editData.images.img_main !== null
              "
              :image="editData.images.img_main"
              :setShowDeleteDialogFlag="setImageDataFlag"
              openedFor="img_main"
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
import Multiselect from "vue-multiselect";
import store from "../../../store/index";
import types from "../../../store/types";
import POPUPS_PLACES from "../../../website/constants/PopupsPlaces";
import ImagePreview from "../../../website/shared/ImagePreview.vue";
import DeleteDialog from "../../../website/shared/DeleteDialog";
import { createPopup, editPopup } from "../../../website/helpers/APIsHelper.js";

export default {
  components: {
    ImagePreview,
    Multiselect,
    DeleteDialog
  },
  data() {
    return {
      PopupsPlaces: POPUPS_PLACES,
      openedFor: "",
      imageIndex: null,
      showFlag: false,
      imageId: null,
      editData: this.$router.history.current.params.data || { images: null },
      operation: this.$route.name,
      popup: {
        title: "",
        link: "",
        places: [],
        img_main: ""
      },
      errors: {}
    };
  },
  methods: {
    ...mapActions({
      deleteImage: types.popups.actions.DELETE_POPUP_IMAGE
    }),
    clickAction() {
      this.operation === "Edit Popup"
        ? this.saveData(editPopup, "Popup Updated Successfully")
        : this.saveData(createPopup, "Popup Created Successfully");
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

      this.popup[key] = files[0];
    },
    saveData: async function(saveFunction, successMessage) {
      let formData = new FormData();
      formData.append("title", this.popup.title);
      formData.append("link", this.popup.link);
      formData.append("img_main", this.popup.img_main);

      if (this.popup.places.length === 0) formData.append("places[]", []);
      for (var i = 0; i < this.popup.places.length; i++) {
        formData.append("places[]", this.popup.places[i]);
      }

      try {
        store.commit(types.home.mutations.SET_SPINNER_FLAG, true);

        if (this.operation === "Edit Popup")
          await saveFunction(this.editData.id, formData);
        else await saveFunction(formData);

        store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
        this.notifyVue(successMessage, "success");
        this.$router.push("/dashboard/popups/list");
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
      const payload = { popupId: this.editData.id, imageId: this.imageId };
      const response = await this.deleteImage(payload);

      switch (this.openedFor) {
        case "img_main":
          this.editData.images.img_main = null;
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
      this.$route.name === "Edit Popup"
    )
      this.$router.push({
        path: "/dashboard/popups"
      });
  },
  mounted() {
    if (this.$route.name === "Edit Popup") {
      this.popup.title = this.editData.title;
      this.popup.link = this.editData.link;
      this.popup.places = this.editData.places.map(place => place.name);
      this.popup.img_main = this.editData.images.img_main;
    }
  }
};
</script>
