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
        <div class="col-12 col-md-6">
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
        <div class="col-12 col-md-3">
          <base-input
            type="number"
            label="Order"
            placeholder="Enter Order"
            v-model="service.order"
            :isRequired="true"
          >
          </base-input>
          <ErrorMessage :fieldErrors="errors.order" />
        </div>
        <div class="col-12 col-md-3 mt-auto mb-auto">
          <div class="custom-control custom-switch">
            <input
              type="checkbox"
              class="custom-control-input"
              id="is_featured"
              v-model="service.is_featured"
              @change="setIsSliderImageRequired"
            />
            <label class="custom-control-label" for="is_featured"
              >Featured</label
            >
          </div>
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
                  editData.img_card !== ''
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
                  editData.img_cover !== ''
              "
              :image="editData.img_cover"
              :setShowDeleteDialogFlag="setImageDataFlag"
              openedFor="img_cover"
            />
            <ErrorMessage :fieldErrors="errors.img_cover" />
          </div>
        </div>
      </div>
      <div class="row mt-3 mb-3">
        <div class="col">
          <div>
            <label for="logo" class="mr-5"
              >Choose Slider Image<span
                v-if="service.is_featured"
                class="error-message"
              >
                *</span
              ></label
            >
            <input
              type="file"
              id="logo"
              accept="image/png, image/jpeg"
              @change="e => setFile(e, 'img_slider')"
              ref="img_slider"
            />
            <br />
            <ImagePreview
              v-if="
                editData !== undefined &&
                  operation === 'Edit Service' &&
                  editData.img_slider !== null
              "
              :image="editData.img_slider"
              :setShowDeleteDialogFlag="setImageDataFlag"
              openedFor="img_slider"
            />
            <ErrorMessage
              v-if="service.is_featured"
              :fieldErrors="errors.img_slider"
            />
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
import ErrorMessage from "../../../website/shared/ErrorMessage";
import types from "../../../store/types";
import isValidationErrorExist from "../../../helpers/FormValidation";
import editorOptions from "../../../dashboard/wysiwyg-factory/options";
import ImagePreview from "../../../website/shared/ImagePreview.vue";
import DeleteDialog from "../../../website/shared/DeleteDialog";
import { reformatHTMLString } from "../../../helpers/StringsHelper";

const emptyService = {
  title: "",
  order: 1,
  description: "",
  is_featured: false,
  img_card: "",
  img_cover: "",
  img_slider: ""
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
        order: { isRequired: true },
        is_featured: { isRequired: false },
        description: { isRequired: true },
        "card image": { isRequired: true },
        "cover image": { isRequired: true },
        "slider image": { isRequired: false }
      },
      aliases: {
        title: "title",
        order: "order",
        is_featured: "is_featured",
        description: "description",
        img_card: "card image",
        img_cover: "cover image",
        img_slider: "slider image"
      },
      editorOptions
    };
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
          order: this.service.order,
          isFeatured: this.service.is_featured,
          description: reformatHTMLString(this.service.description)
        };

        if (this.operation === "Edit Service") {
          let imagesData = {};
          const { img_card, img_cover, img_slider } = this.service;

          if (!img_card.url)
            imagesData = { ...imagesData, img_card: this.service.img_card };

          if (!img_cover.url)
            imagesData = { ...imagesData, img_cover: this.service.img_cover };

          if (!img_slider.url && this.service.is_featured)
            imagesData = { ...imagesData, img_slider: this.service.img_slider };

          if (Object.keys(imagesData).length > 0)
            payload = { ...payload, imagesData };
          await this.updateService({ ...payload, id: this.editData.id });
          this.notifyVue("Service Updated Successfully", "success");
        } else {
          payload = {
            ...payload,
            imagesData: {
              img_card: this.service.img_card,
              img_cover: this.service.img_cover,
              img_slider: this.service.img_slider
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
      await this.deleteImage(this.imageId);

      switch (this.openedFor) {
        case "img_card":
          this.editData.img_card = "";
          this.service.img_card = "";
          break;

        case "img_cover":
          this.editData.img_cover = "";
          this.service.img_cover = "";
          break;

        case "img_slider":
          this.editData.img_slider = "";
          this.service.img_slider = "";
          break;

        default:
          break;
      }

      this.notifyVue("Image Deleted Successfully", "success");
      this.setImageDataFlag(false, null, "", null);
    },
    setIsSliderImageRequired(e) {
      this.validation["slider image"].isRequired = e.target.checked;
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
      this.service.order = this.editData.order;
      this.service.is_featured = this.editData.is_featured;
      this.service.description = this.editData.description || "";
      this.service.img_card = this.editData.img_card || "";
      this.service.img_cover = this.editData.img_cover || "";
      this.service.img_slider = this.editData.img_slider || "";
      this.validation["slider image"].isRequired = this.editData.is_featured;
    }
  },
  components: {
    ErrorMessage,
    ImagePreview,
    DeleteDialog
  }
};
</script>
