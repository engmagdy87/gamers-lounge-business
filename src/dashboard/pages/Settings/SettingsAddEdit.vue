<template>
  <div v-if="isSettingsFetched">
    <div class="row">
      <div class="col-6 m-auto">
        <h2
          class="heading-margin heading-margin-sections"
          style="margin:0 0 40px 0 !important;"
        >
          Settings
        </h2>
      </div>
      <div class="col-6">
        <button
          type="button"
          class="btn btn-secondary d-block ml-auto heading-margin-title"
          style="margin-bottom:10px !important"
          @click="toggleEditMode"
        >
          {{ editMode ? "Exit Edit Mode" : "Edit Settings Data" }}
        </button>
      </div>
    </div>
    <form>
      <div class="row">
        <div class="col-12 col-md-6">
          <base-input
            type="text"
            label="Title"
            placeholder="Enter Title"
            v-model="settings.title"
            :autofocus="true"
            :disabled="!editMode"
          >
          </base-input>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label>Description</label>
            <vue-pell-editor
              :actions="editorOptions"
              :style-with-css="false"
              placeholder=""
              v-model="settings.description"
              v-if="editMode"
              class="about-dashboard"
            />
            <div class="description" v-html="settings.description" v-else></div>
          </div>
        </div>
      </div>
      <div class="row mt-3 mb-3">
        <div class="col">
          <div>
            <label for="logo" class="mr-5">Choose Services Cover Image</label>
            <input
              type="file"
              id="logo"
              accept="image/png, image/jpeg"
              @change="e => setFile(e, 'img_services_cover')"
              ref="img_services_cover"
              :disabled="!editMode"
            />
            <br />
            <ImagePreview
              v-if="
                settings.img_services_cover !== '' &&
                  settings.img_services_cover !== null &&
                  settings.img_services_cover.url !== undefined
              "
              :image="settings.img_services_cover"
              :setShowDeleteDialogFlag="setImageDataFlag"
              openedFor="img_services_cover"
              :disabled="!editMode"
            />
            <!-- <ErrorMessage :fieldErrors="errors.img_services_cover" /> -->
          </div>
        </div>
      </div>
      <div class="row mt-3 mb-3">
        <div class="col">
          <div>
            <label for="logo" class="mr-5">Choose Home Cover Image</label>
            <input
              type="file"
              id="logo"
              accept="image/png, image/jpeg"
              @change="e => setFile(e, 'img_home_cover')"
              ref="img_home_cover"
              :disabled="!editMode"
            />
            <br />
            <ImagePreview
              v-if="
                settings.img_home_cover !== '' &&
                  settings.img_home_cover !== null &&
                  settings.img_home_cover.url !== undefined
              "
              :image="settings.img_home_cover"
              :setShowDeleteDialogFlag="setImageDataFlag"
              openedFor="img_home_cover"
              :disabled="!editMode"
            />
            <!-- <ErrorMessage :fieldErrors="errors.img_home_cover" /> -->
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12" style="height:60px">
          <div class="text-center">
            <button
              type="button"
              class="btn btn-info btn-fill float-right mt-2"
              @click="saveData"
              v-show="editMode"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
    <DeleteDialog
      :showFlag="showFlag"
      item="Image"
      :deleteAction="removeImage"
      :setShowDeleteDialogFlag="setImageDataFlag"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
// import ErrorMessage from "../../../website/shared/ErrorMessage";
import editorOptions from "../../../dashboard/wysiwyg-factory/options";
import DeleteDialog from "../../../website/shared/DeleteDialog";
import ImagePreview from "../../../website/shared/ImagePreview.vue";
import isValidationErrorExist from "../../../helpers/FormValidation";
import { reformatHTMLString } from "../../../helpers/StringsHelper";
import types from "../../../store/types";

const emptySettings = {
  title: "",
  description: "",
  img_services_cover: "",
  img_home_cover: ""
};

export default {
  data() {
    return {
      settings: {
        ...emptySettings
      },
      openedFor: "",
      showFlag: false,
      editMode: false,
      imageId: null,
      errors: {},
      validation: {
        title: { isRequired: false },
        description: { isRequired: false },
        "home cover image": { isRequired: false },
        "serives cover image": { isRequired: false }
      },
      aliases: {
        title: "title",
        description: "description",
        img_home_cover: "home cover image",
        img_services_cover: "serives cover image"
      },
      editorOptions
    };
  },
  computed: {
    ...mapState({
      settingsData: state => state.settings.settings,
      isSettingsFetched: state => state.settings.isSettingsDataFetched
    })
  },
  watch: {
    settingsData() {
      if (this.settingsData) {
        this.settings.title = this.settingsData.services_title || "";
        this.settings.description =
          this.settingsData.services_description || "";
        this.settings.img_home_cover = this.settingsData.img_home_cover || "";
        this.settings.img_services_cover =
          this.settingsData.img_services_cover || "";
      }
    }
  },
  methods: {
    ...mapActions({
      fetchSettings: types.settings.actions.FETCH_SETTINGS,
      createSettings: types.settings.actions.CREATE_SETTING,
      updateSettings: types.settings.actions.UPDATE_SETTING,
      deleteImage: types.app.actions.DELETE_IMAGE
    }),
    toggleEditMode() {
      this.editMode = !this.editMode;
    },
    setImageDataFlag(flag, imageId, openedFor) {
      this.showFlag = flag;
      this.imageId = imageId;
      this.openedFor = openedFor;
    },
    saveData: async function() {
      let response;
      const errorObject = isValidationErrorExist(
        this.settings,
        this.aliases,
        this.validation
      );
      this.errors = { ...errorObject.errors };
      if (errorObject.length !== 0) return;
      try {
        let payload = {
          services_title: this.settings.title,
          services_description: reformatHTMLString(this.settings.description)
        };
        if (Object.keys(this.settingsData).length !== 0) {
          let imagesData = {};
          const { img_home_cover, img_services_cover } = this.settings;

          if (!img_home_cover.url && img_home_cover !== "")
            imagesData = { ...imagesData, img_home_cover };

          if (!img_services_cover.url && img_services_cover !== "")
            imagesData = {
              ...imagesData,
              img_services_cover
            };

          if (Object.keys(imagesData).length > 0)
            payload = { ...payload, imagesData };

          response = await this.updateSettings({
            ...payload,
            id: this.settingsData.id
          });
          this.notifyVue("Settings Updated Successfully", "success");
        } else {
          let imagesData = {};
          const { img_home_cover, img_services_cover } = this.settings;

          if (!img_home_cover.url && img_home_cover !== "")
            imagesData = { ...imagesData, img_home_cover };

          if (!img_services_cover.url && img_services_cover !== "")
            imagesData = {
              ...imagesData,
              img_services_cover
            };

          if (Object.keys(imagesData).length > 0)
            payload = {
              ...payload,
              imagesData
            };

          response = await this.createSettings(payload);
          this.notifyVue("Settings Created Successfully", "success");
        }
        this.editMode = false;
        this.errors = {};
        const {
          img_home_cover,
          img_services_cover,
          services_title,
          services_description
        } = response;
        this.$refs.img_home_cover.value = null;
        this.$refs.img_services_cover.value = null;

        this.settings = {
          title: services_title,
          description: services_description,
          img_home_cover,
          img_services_cover
        };
      } catch (errors) {
        JSON.parse(errors).forEach(error => {
          this.notifyVue(error.message, "danger");
        });
      }
    },
    removeImage: async function() {
      await this.deleteImage(this.imageId);

      switch (this.openedFor) {
        case "img_home_cover":
          this.settingsData.img_home_cover = "";
          this.settings.img_home_cover = "";
          this.$refs.img_home_cover.value = null;
          break;

        case "img_services_cover":
          this.settingsData.img_services_cover = "";
          this.settings.img_services_cover = "";
          this.$refs.img_services_cover.value = null;
          break;

        default:
          break;
      }

      this.notifyVue("Image Deleted Successfully", "success");
      this.setImageDataFlag(false, null, "", null);
    },
    setFile(e, key) {
      const files = e.target.files;

      if (!files.length) return;

      this.settings[key] = files[0];
    },
    isSettingsDataExists() {
      return Object.keys(this.settingsData).length === 0;
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
  mounted() {
    const requestSource = {
      isService: true,
      isHome: true,
      isProfile: true,
      isServiceTexts: true
    };
    this.fetchSettings(requestSource);
  },
  updated() {
    if (this.isSettingsDataExists()) this.editMode = true;
  },
  components: {
    // ErrorMessage,
    DeleteDialog,
    ImagePreview
  }
};
</script>
