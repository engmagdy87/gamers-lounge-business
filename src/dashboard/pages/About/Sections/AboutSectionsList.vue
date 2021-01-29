<template>
  <div v-if="isAboutDataFetched">
    <div class="row">
      <div class="col-6 m-auto">
        <h2
          class="heading-margin heading-margin-sections"
          style="margin:0 !important;"
        >
          About Us
        </h2>
      </div>
      <div class="col-6">
        <button
          type="button"
          class="btn btn-secondary d-block ml-auto heading-margin-title"
          style="margin-bottom:10px !important"
          @click="toggleEditMode"
        >
          {{ editMode ? "Exit Edit Mode" : "Edit About Main Data" }}
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-12 d-flex">
        <h2 class="heading-margin">
          Our Vision<span class="error-message"> *</span>
        </h2>
      </div>
      <div class="col-12">
        <vue-pell-editor
          :actions="editorOptions"
          :style-with-css="false"
          placeholder=""
          v-model="about.vision"
          v-if="editMode"
          class="about-dashboard"
        />
        <div class="description" v-html="about.vision" v-else></div>
        <ErrorMessage :fieldErrors="errors.vision" />
      </div>
    </div>
    <div class="row">
      <div class="col-12 d-flex">
        <h2 class="heading-margin">
          Our Mission & Objectives<span class="error-message"> *</span>
        </h2>
      </div>
      <div class="col-12">
        <vue-pell-editor
          :actions="editorOptions"
          :style-with-css="false"
          placeholder=""
          v-model="about.mission"
          v-if="editMode"
          class="about-dashboard"
        />
        <div class="description" v-html="about.mission" v-else></div>
        <ErrorMessage :fieldErrors="errors.mission" />
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
            :disabled="!editMode"
          />
          <br />
          <ImagePreview
            v-if="about.img_cover !== '' && about.img_cover.url !== undefined"
            :image="about.img_cover"
            :setShowDeleteDialogFlag="setImageDataFlag"
            openedFor="img_cover"
            :disabled="!editMode"
          />
          <ErrorMessage :fieldErrors="errors.img_cover" />
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
    <div class="row">
      <div class="col-6 m-auto">
        <h2
          class="heading-margin heading-margin-sections"
          style="margin:0 !important;"
        >
          Sections ({{ sectionsLength }})
        </h2>
      </div>
      <div class="col-6">
        <router-link to="/dashboard/about/create">
          <button
            type="button"
            class="btn btn-secondary d-block ml-auto heading-margin-title"
            style="margin-bottom:10px !important"
            :disabled="isAboutDataExists()"
          >
            Add Section
          </button>
        </router-link>
      </div>
    </div>
    <Table
      class="table-hover table-striped"
      :columns="table.columns"
      :data="aboutSectionsData ? aboutSectionsData.data : []"
      tableType="aboutSections"
      :setShowDeleteDialogFlag="setAboutSectionDataFlags"
    >
    </Table>
    <DeleteDialog
      :showFlag="showFlag"
      :item="openedFor === 'img_cover' ? 'Image' : 'About Section'"
      :deleteAction="
        openedFor === 'img_cover' ? removeImage : removeAboutSection
      "
      :setShowDeleteDialogFlag="setAboutSectionDataFlags"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ErrorMessage from "../../../../website/shared/ErrorMessage";
import types from "../../../../store/types";
import Table from "../../../../dashboard/components/Table";
import DeleteDialog from "../../../../website/shared/DeleteDialog";
import ImagePreview from "../../../../website/shared/ImagePreview.vue";
import isValidationErrorExist from "../../../../helpers/FormValidation";
import editorOptions from "../../../../dashboard/wysiwyg-factory/options";

const emptyAbout = {
  mission: "",
  vision: "",
  img_cover: ""
};

export default {
  data() {
    return {
      about: { ...emptyAbout },
      showFlag: false,
      openedFor: "",
      targetId: null,
      locationInDataArray: null,
      table: {
        columns: ["Id", "Order", "Template", "Published", "Actions"]
      },
      editMode: false,
      errors: {},
      validation: {
        mission: { isRequired: true },
        vision: { isRequired: true },
        "cover image": { isRequired: true }
      },
      aliases: {
        mission: "mission",
        vision: "vision",
        img_cover: "cover image"
      },
      editorOptions
    };
  },
  computed: {
    ...mapState({
      aboutData: state => state.about.about,
      aboutSectionsData: state => state.about.aboutSections,
      isAboutDataFetched: state => state.about.isAboutFetched
    }),
    sectionsLength() {
      if (!this.aboutSectionsData || !this.aboutSectionsData.data) return 0;
      return this.aboutSectionsData.data.length;
    }
  },
  watch: {
    aboutData() {
      this.about.mission = this.aboutData.mission || "";
      this.about.vision = this.aboutData.vision || "";
      this.about.img_cover = this.aboutData.img_cover || "";
    }
  },
  methods: {
    ...mapActions({
      fetchAbout: types.about.actions.FETCH_ABOUT,
      createAbout: types.about.actions.CREATE_ABOUT,
      updateAbout: types.about.actions.UPDATE_ABOUT,
      deleteImage: types.app.actions.DELETE_IMAGE
    }),
    isAboutDataExists() {
      return Object.keys(this.aboutData).length === 0;
    },
    toggleEditMode() {
      this.editMode = !this.editMode;
    },
    saveData: async function() {
      let response;
      const errorObject = isValidationErrorExist(
        this.about,
        this.aliases,
        this.validation
      );
      this.errors = { ...errorObject.errors };
      if (errorObject.length !== 0) return;
      try {
        let payload = {
          mission: this.about.mission,
          vision: this.about.vision
        };

        if (Object.keys(this.aboutData).length !== 0) {
          let imagesData = {};
          const { img_cover } = this.about;

          if (!img_cover.url)
            imagesData = { ...imagesData, img_cover: this.about.img_cover };

          if (Object.keys(imagesData).length > 0)
            payload = { ...payload, imagesData };
          response = await this.updateAbout({
            ...payload,
            id: this.aboutData.id
          });
          this.notifyVue("About Updated Successfully", "success");
        } else {
          payload = {
            ...payload,
            imagesData: {
              img_cover: this.about.img_cover
            }
          };
          response = await this.createAbout(payload);
          this.notifyVue("About Created Successfully", "success");
        }
        this.editMode = false;
        this.errors = {};
        const { id, ...restOfData } = response;
        this.$refs.img_cover.value = null;
        this.about = { ...this.about, ...restOfData };
      } catch (errors) {
        JSON.parse(errors).forEach(error => {
          this.notifyVue(error.message, "danger");
        });
      }
    },
    removeImage: async function() {
      await this.deleteImage(this.imageId);

      switch (this.openedFor) {
        case "img_cover":
          this.aboutData.img_cover = "";
          this.about.img_cover = "";
          this.$refs.img_cover.value = null;
          break;

        default:
          break;
      }

      this.notifyVue("Image Deleted Successfully", "success");
      this.setImageDataFlag(false, null, "", null);
    },
    async removeAboutSection() {
      const payload = {
        sectionId: this.targetId,
        locationInDataArray: this.locationInDataArray
      };
      try {
        await this.deleteAboutSection(payload);
        this.setAboutSectionDataFlags(false, null, null);
        this.notifyVue("About Section Deleted Successfully", "success");
      } catch (error) {
        this.notifyVue("Error Happened", "danger");
      }
    },
    setAboutSectionDataFlags(flag, id, locationInDataArray) {
      this.showFlag = flag;
      this.targetId = id;
      this.locationInDataArray = locationInDataArray;
      this.deletedType = "section";
    },
    setImageDataFlag(flag, imageId, openedFor) {
      this.showFlag = flag;
      this.imageId = imageId;
      this.openedFor = openedFor;
    },
    setFile(e, key) {
      const files = e.target.files;

      if (!files.length) return;

      this.about[key] = files[0];
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
  components: {
    Table,
    DeleteDialog,
    ErrorMessage,
    ImagePreview
  },
  mounted() {
    const data = {
      first: 100,
      page: 1
    };
    const requestSource = {
      data,
      requestSource: "dashboard",
      showSpinner: true
    };
    this.fetchAbout(requestSource);
  },
  updated() {
    if (this.isAboutDataExists()) this.editMode = true;
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/sass/lbd/heading.scss";
.heading-margin {
  font-size: 1.4rem;
}
.heading-margin-title {
  margin-top: 15px !important;
  margin-bottom: 30px !important;
}

.heading-margin-sections {
  font-size: 1.4rem;
  margin-top: 60px !important;
}
.description {
  font-size: 1rem;
  height: 181px;
  max-height: 181px;
  overflow-y: auto;
  background: white;
  padding: 5px 10px;
}
.edit-icon {
  margin: 5px 10px;
  cursor: pointer;
}
</style>
