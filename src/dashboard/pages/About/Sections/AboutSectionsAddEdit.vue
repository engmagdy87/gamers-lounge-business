<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/dashboard/about">About</a>
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
            type="number"
            label="Section Order"
            placeholder="Enter Section Order"
            v-model="aboutSection.order"
            :isRequired="true"
            min="1"
          >
          </base-input>
          <ErrorMessage :fieldErrors="errors.order" />
        </div>
        <div class="col-12 col-md-6 mt-auto mb-auto">
          <div class="custom-control custom-switch">
            <input
              type="checkbox"
              class="custom-control-input"
              id="enabled"
              v-model="aboutSection.enabled"
            />
            <label class="custom-control-label" for="enabled"
              >Publish Section</label
            >
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
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ErrorMessage from "../../../../website/shared/ErrorMessage";
import types from "../../../../store/types";
import isValidationErrorExist from "../../../../helpers/FormValidation";
import * as SERVICE_SECTIONS_TYPES from "../../../../constants/SectionsTypes";

const emptyAboutSection = {
  order: 1,
  enabled: false
};

export default {
  data() {
    return {
      editData: this.$router.history.current.params.data,
      operation: this.$route.name,
      aboutSection: {
        ...emptyAboutSection
      },
      errors: {},
      validation: {
        order: { isRequired: true },
        enabled: { isRequired: false }
      },
      aliases: {
        order: "order",
        enabled: "enabled"
      }
    };
  },
  computed: {
    ...mapState({
      aboutSectionData: state => state.about.aboutSections,
      aboutData: state => state.about.about
    })
  },
  methods: {
    ...mapActions({
      createAboutSection: types.about.actions.CREATE_ABOUT_SECTION,
      updateAboutSection: types.about.actions.UPDATE_ABOUT_SECTION
    }),
    saveData: async function() {
      const errorObject = isValidationErrorExist(
        this.aboutSection,
        this.aliases,
        this.validation
      );
      this.errors = { ...errorObject.errors };
      if (errorObject.length !== 0) return;
      try {
        let payload = {
          order: this.aboutSection.order,
          type: SERVICE_SECTIONS_TYPES.NORMAL,
          enabled: this.aboutSection.enabled,
          sectionType: "ABOUT_US"
        };
        if (this.operation === "Edit About Section") {
          await this.updateAboutSection({
            ...payload,
            sectionId: this.editData.id,
            id: this.aboutData.id
          });
          this.notifyVue("About Section Updated Successfully", "success");
        } else {
          await this.createAboutSection({
            ...payload,
            id: this.aboutData.id
          });
          this.notifyVue("About Section Created Successfully", "success");
        }
        this.aboutSection = { ...emptyAboutSection };
        this.$router.push(`/dashboard/about/list`);
      } catch (errors) {
        JSON.parse(errors).forEach(error => {
          this.notifyVue(error.message, "danger");
        });
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
      this.$route.name === "Edit About Section"
    )
      this.$router.push({
        path: "/dashboard/about"
      });
  },
  mounted() {
    if (this.$route.name === "Edit About Section") {
      this.aboutSection.order = this.editData.order;
      this.aboutSection.enabled = this.editData.enabled;
    }
  },
  components: {
    ErrorMessage
  }
};
</script>
