<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/dashboard/works">Works</a>
        </li>
        <li class="breadcrumb-item">
          <router-link
            :to="`/dashboard/works/sections/list/${workSectionData.id}`"
            >{{ workSectionData.title }} Work Sections</router-link
          >
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
            v-model="workSection.order"
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
              v-model="workSection.enabled"
            />
            <label class="custom-control-label" for="enabled"
              >Publish Section</label
            >
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-4">
          <div class="form-group">
            <label>Section Type<span class="error-message"> *</span></label>
            <select class="form-control" v-model="workSection.type">
              <option value="-1">--Please choose media type</option>
              <option
                v-for="(type, i) in WORK_SECTIONS_TYPES"
                :key="i"
                ::selected="workSection.type === type"
                :value="type"
                >{{ type.toLowerCase() }}</option
              >
            </select>
            <ErrorMessage :fieldErrors="errors.type" />
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
import store from "../../../../store/index";
import types from "../../../../store/types";
import isValidationErrorExist from "../../../../helpers/FormValidation";
import { reformatHTMLString } from "../../../../helpers/StringsHelper";
import * as WORK_SECTIONS_TYPES from "../../../../constants/WorkSectionsTypes";

const emptyWorkSection = {
  order: 1,
  enabled: false,
  type: "-1"
};

export default {
  data() {
    return {
      editData: this.$router.history.current.params.data,
      operation: this.$route.name,
      workSection: {
        ...emptyWorkSection
      },
      errors: {},
      validation: {
        order: { isRequired: true },
        type: { isRequired: true },
        enabled: { isRequired: false }
      },
      aliases: {
        order: "order",
        type: "type",
        enabled: "enabled"
      }
    };
  },
  computed: {
    ...mapState({
      workSectionData: state => state.works.workSections
    }),
    WORK_SECTIONS_TYPES() {
      return WORK_SECTIONS_TYPES;
    }
  },
  methods: {
    ...mapActions({
      createWorkSection: types.works.actions.CREATE_WORK_SECTION,
      updateWorkSection: types.works.actions.UPDATE_WORK_SECTION
    }),
    saveData: async function() {
      const errorObject = isValidationErrorExist(
        this.workSection,
        this.aliases,
        this.validation
      );
      this.errors = { ...errorObject.errors };
      if (errorObject.length !== 0) return;
      try {
        let payload = {
          order: this.workSection.order,
          type: this.workSection.type,
          enabled: this.workSection.enabled
        };
        if (this.operation === "Edit Work Section") {
          await this.updateWorkSection({
            ...payload,
            workSectionId: this.editData.id,
            workId: this.$router.history.current.params.workId
          });
          this.notifyVue("Work Section Updated Successfully", "success");
        } else {
          await this.createWorkSection({
            ...payload,
            workId: this.$router.history.current.params.workId
          });
          this.notifyVue("Work Section Created Successfully", "success");
        }
        const { id } = this.workSectionData;
        this.workSection = { ...emptyWorkSection };
        this.$router.push(`/dashboard/works/sections/list/${id}`);
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
      this.$route.name === "Edit Work Section"
    )
      this.$router.push({
        path: "/dashboard/works"
      });
  },
  mounted() {
    if (this.$route.name === "Edit Work Section") {
      this.workSection.order = this.editData.order;
      this.workSection.type = this.editData.type;
      this.workSection.enabled = this.editData.enabled;
    }
  },
  components: {
    ErrorMessage
  }
};
</script>
