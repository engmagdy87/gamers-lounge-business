<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/dashboard/sponsors">Sponsors</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ operation }}
        </li>
      </ol>
    </nav>
    <h4 slot="header" class="card-name">{{ operation }}</h4>
    <form>
      <div class="row">
        <div class="col-12 col-md-4">
          <base-input
            type="text"
            label="Name"
            placeholder="Enter Name"
            v-model="sponsor.name"
            :autofocus="true"
            :isRequired="true"
          >
          </base-input>
          <ErrorMessage :fieldErrors="errors.name" />
        </div>
        <div class="col-12 col-md-4">
          <base-input
            type="number"
            label="Order"
            placeholder="Enter Sponsor Order"
            v-model="sponsor.order"
            :isRequired="true"
            min="1"
          >
          </base-input>
        </div>
        <div class="col-12 col-md-4 mt-auto mb-auto">
          <div class="custom-control custom-switch">
            <input
              type="checkbox"
              class="custom-control-input"
              id="enabled"
              v-model="sponsor.is_enabled"
            />
            <label class="custom-control-label" for="enabled"
              >Publish Sponsor</label
            >
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-8">
          <base-input
            type="url"
            label="Link"
            placeholder="Enter Link"
            v-model="sponsor.link"
            :isRequired="true"
          >
          </base-input>
          <ErrorMessage :fieldErrors="errors.link" />
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="form-group">
            <label>Places</label>
            <multiselect
              v-model="sponsor.places"
              :options="SPONSERS_PLACES"
              :multiple="true"
              :close-on-select="false"
              :clear-on-select="false"
              placeholder="Choose Sponsor Places"
            >
            </multiselect>
            <ErrorMessage :fieldErrors="errors.places" />
          </div>
        </div>
      </div>
      <div class="row mt-3 mb-3">
        <div class="col">
          <div>
            <label for="img_main" class="mr-5"
              >Choose Main Image<span class="error-message"> *</span></label
            >
            <input
              type="file"
              id="img_main"
              accept="image/png, image/jpeg, image/svg"
              @change="e => setFile(e, 'img_main')"
              ref="img_main"
            />
            <br />
            <ImagePreview
              v-if="
                editData !== undefined &&
                  operation === 'Edit Sponsor' &&
                  editData.image !== ''
              "
              :image="editData.image"
              :setShowDeleteDialogFlag="setImageDataFlag"
              openedFor="img_main"
            />
            <ErrorMessage :fieldErrors="errors.img_main" />
          </div>
        </div>
      </div>
      <div class="text-center">
        <button
          type="button"
          class="btn btn-info btn-fill float-right"
          @click="saveData"
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
import { mapActions } from "vuex";
import Multiselect from "vue-multiselect";
import ErrorMessage from "../../../website/shared/ErrorMessage";
import store from "../../../store/index";
import types from "../../../store/types";
import { createSponsor } from "../../../helpers/APIsHelper";
import isValidationErrorExist from "../../../helpers/FormValidation";
import ImagePreview from "../../../website/shared/ImagePreview.vue";
import DeleteDialog from "../../../website/shared/DeleteDialog";
import SPONSERS_PLACES from "../../../constants/SponsorsPlaces";

const emptySponsor = {
  name: "",
  order: 1,
  is_enabled: false,
  places: [],
  link: "",
  img_main: ""
};

export default {
  data() {
    return {
      editData: this.$router.history.current.params.data,
      operation: this.$route.name,
      sponsor: {
        ...emptySponsor
      },
      openedFor: "",
      imageIndex: null,
      showFlag: false,
      imageId: null,
      errors: {},
      validation: {
        name: { isRequired: true },
        order: { isRequired: true },
        enabled: { isRequired: true },
        places: { isRequired: true },
        link: { isRequired: true },
        "main image": { isRequired: true }
      },
      aliases: {
        name: "name",
        order: "order",
        places: "places",
        is_enabled: "enabled",
        link: "link",
        img_main: "main image"
      }
    };
  },
  methods: {
    ...mapActions({
      createSponsor: types.sponsors.actions.CREATE_SPONSOR,
      updateSponsor: types.sponsors.actions.UPDATE_SPONSOR,
      deleteImage: types.app.actions.DELETE_IMAGE
    }),
    setImageDataFlag(flag, imageId, openedFor, imageIndex) {
      this.showFlag = flag;
      this.imageId = imageId;
      this.openedFor = openedFor;
      this.imageIndex = imageIndex;
    },
    setFile(e, key) {
      const files = e.target.files;

      if (!files.length) return;

      this.sponsor[key] = files[0];
    },
    saveData: async function() {
      const errorObject = isValidationErrorExist(
        this.sponsor,
        this.aliases,
        this.validation
      );
      this.errors = { ...errorObject.errors };
      if (errorObject.length !== 0) return;
      try {
        let payload = {
          name: this.sponsor.name,
          order: this.sponsor.order,
          places: this.sponsor.places,
          isEnabled: this.sponsor.is_enabled,
          link: this.sponsor.link
        };
        if (this.operation === "Edit Sponsor") {
          const { img_main } = this.sponsor;

          if (!img_main.url) payload = { ...payload, img_main };

          await this.updateSponsor({ ...payload, id: this.editData.id });
          this.notifyVue("Sponsor Updated Successfully", "success");
        } else {
          payload = {
            ...payload,
            img_main: this.sponsor.img_main
          };
          await this.createSponsor(payload);
          this.notifyVue("Sponsor Created Successfully", "success");
        }
        this.sponsor = { ...emptySponsor };
        this.$router.push("/dashboard/sponsors");
      } catch (errors) {
        JSON.parse(errors).forEach(error => {
          this.notifyVue(error.message, "danger");
        });
      }
    },
    removeImage: async function() {
      const response = await this.deleteImage(this.imageId);

      switch (this.openedFor) {
        case "img_main":
          this.editData.image = "";
          this.sponsor.img_main = "";
          break;

        default:
          break;
      }

      this.notifyVue("Image Deleted Successfully", "success");
      this.setImageDataFlag(false, null, "", null);
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
    SPONSERS_PLACES() {
      return SPONSERS_PLACES;
    }
  },
  beforeMount() {
    if (
      !this.$router.history.current.params.data &&
      this.$route.name === "Edit Sponsor"
    )
      this.$router.push({
        path: "/dashboard/sponsors"
      });
  },
  mounted() {
    if (this.$route.name === "Edit Sponsor") {
      this.sponsor.name = this.editData.name;
      this.sponsor.order = this.editData.order;
      this.sponsor.places = this.editData.places;
      this.sponsor.is_enabled = this.editData.is_enabled;
      this.sponsor.link = this.editData.link;
      this.sponsor.img_main = this.editData.image || "";
    }
  },
  components: {
    ErrorMessage,
    ImagePreview,
    DeleteDialog,
    Multiselect
  }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
