<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/dashboard/services">Services</a>
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
            label="Title"
            placeholder="Enter Title"
            v-model="service.title"
            :autofocus="true"
            :isRequired="true"
          >
          </base-input>
          <ErrorMessage :fieldErrors="errors.title" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label>Description<span class="error-message"> *</span></label>
            <vue-pell-editor
              :actions="editorOptions"
              :style-with-css="false"
              placeholder=""
              v-model="service.description"
            />
            <ErrorMessage :fieldErrors="errors.description" />
          </div>
        </div>
      </div>
      <div class="row mt-3 mb-3">
        <div class="col">
          <div>
            <label for="img_card" class="mr-5"
              >Choose Card Image<span class="error-message"> *</span></label
            >
            <input
              type="file"
              id="img_card"
              accept="image/png, image/jpeg"
              @change="e => setFile(e, 'img_card')"
              ref="img_card"
            />
            <br />
            <ImagePreview
              v-if="
                editData !== undefined &&
                  operation === 'Edit Service' &&
                  editData.img_card !== null
              "
              :image="editData.img_card"
              :setShowDeleteDialogFlag="setImageDataFlag"
              openedFor="img_card"
            />
            <ErrorMessage :fieldErrors="errors.img_card" />
          </div>
        </div>
      </div>
      <div class="row mt-3 mb-3">
        <div class="col">
          <div>
            <label for="logo" class="mr-5"
              >Choose Cover Image<span class="error-message"> *</span></label
            >
            <input
              type="file"
              id="logo"
              accept="image/png, image/jpeg"
              @change="e => setFile(e, 'img_cover')"
              ref="img_cover"
            />
            <br />
            <ImagePreview
              v-if="
                editData !== undefined &&
                  operation === 'Edit Service' &&
                  editData.img_cover !== null
              "
              :image="editData.img_cover"
              :setShowDeleteDialogFlag="setImageDataFlag"
              openedFor="img_cover"
            />
            <ErrorMessage :fieldErrors="errors.img_cover" />
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
import { mapActions, mapState } from "vuex";
import ErrorMessage from "../../../website/shared/ErrorMessage";
import store from "../../../store/index";
import types from "../../../store/types";
import { createService } from "../../../helpers/APIsHelper";
import isValidationErrorExist from "../../../helpers/FormValidation";
import editorOptions from "../../../dashboard/wysiwyg-factory/options";
import ImagePreview from "../../../website/shared/ImagePreview.vue";
import DeleteDialog from "../../../website/shared/DeleteDialog";
import { reformatHTMLString } from "../../../helpers/StringsHelper";

const emptyService = {
  title: "",
  description: "",
  img_card: "",
  img_cover: ""
};

export default {
  data() {
    return {
      editData: this.$router.history.current.params.data,
      operation: this.$route.name,
      service: {
        ...emptyService
      },
      openedFor: "",
      imageIndex: null,
      showFlag: false,
      imageId: null,
      errors: {},
      validation: {
        title: { isRequired: true },
        description: { isRequired: true },
        "card image": { isRequired: true },
        "cover image": { isRequired: true }
      },
      aliases: {
        title: "title",
        description: "description",
        img_card: "card image",
        img_cover: "cover image"
      },
      editorOptions
    };
  },
  computed: {
    ...mapState({
      servicesData: state => state.services.services
    })
  },
  methods: {
    ...mapActions({
      createService: types.services.actions.CREATE_SERVICE,
      updateService: types.services.actions.UPDATE_SERVICE,
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

      this.service[key] = files[0];
    },
    saveData: async function() {
      const errorObject = isValidationErrorExist(
        this.service,
        this.aliases,
        this.validation
      );
      this.errors = { ...errorObject.errors };
      if (errorObject.length !== 0) return;
      try {
        let payload = {
          title: this.service.title,
          description: reformatHTMLString(this.service.description)
        };

        if (this.operation === "Edit Service") {
          let imagesData = {};
          const { img_card, img_cover } = this.service;

          if (!img_card.url)
            imagesData = { ...imagesData, img_card: this.service.img_card };

          if (!img_cover.url)
            imagesData = { ...imagesData, img_cover: this.service.img_cover };

          if (Object.keys(imagesData).length > 0)
            payload = { ...payload, imagesData };
          await this.updateService({ ...payload, serviceId: this.editData.id });
          this.notifyVue("Service Updated Successfully", "success");
        } else {
          payload = {
            ...payload,
            imagesData: {
              img_card: this.service.img_card,
              img_cover: this.service.img_cover
            }
          };
          await this.createService(payload);
          this.notifyVue("Service Created Successfully", "success");
        }
        this.service = { ...emptyService };
        this.$router.push("/dashboard/services");
      } catch (errors) {
        JSON.parse(errors).forEach(error => {
          this.notifyVue(error.message, "danger");
        });
      }
    },
    removeImage: async function() {
      const response = await this.deleteImage(this.imageId);

      switch (this.openedFor) {
        case "img_card":
          this.service.img_card = null;
          break;

        case "img_cover":
          this.service.img_cover = null;
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
  beforeMount() {
    if (
      !this.$router.history.current.params.data &&
      this.$route.name === "Edit Service"
    )
      this.$router.push({
        path: "/dashboard/services"
      });
  },
  mounted() {
    if (this.$route.name === "Edit Service") {
      this.service.title = this.editData.title;
      this.service.description = this.editData.description;
      this.service.img_card = this.editData.img_card;
      this.service.img_cover = this.editData.img_cover;
    }
  },
  components: {
    ErrorMessage,
    ImagePreview,
    DeleteDialog
  }
};
</script>
