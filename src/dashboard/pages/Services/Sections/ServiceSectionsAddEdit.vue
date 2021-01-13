<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/dashboard/services">Services</a>
        </li>
        <li class="breadcrumb-item">
          <router-link
            :to="`/dashboard/services/sections/list/${serviceSectionData.id}`"
            >{{ serviceSectionData.title }} Service Sections</router-link
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
            v-model="serviceSection.order"
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
              v-model="serviceSection.enabled"
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
            <select class="form-control" v-model="serviceSection.type">
              <option value="-1">--Please choose media type</option>
              <option
                v-for="(type, i) in SERVICE_SECTIONS_TYPES"
                :key="i"
                ::selected="serviceSection.type === type"
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
import * as SERVICE_SECTIONS_TYPES from "../../../../constants/SectionsTypes";

const emptyServiceSection = {
  order: 1,
  enabled: false,
  type: "-1"
};

export default {
  data() {
    return {
      editData: this.$router.history.current.params.data,
      operation: this.$route.name,
      serviceSection: {
        ...emptyServiceSection
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
      serviceSectionData: state => state.services.serviceSections
    }),
    SERVICE_SECTIONS_TYPES() {
      return SERVICE_SECTIONS_TYPES;
    }
  },
  methods: {
    ...mapActions({
      createServiceSection: types.services.actions.CREATE_SERVICE_SECTION,
      updateServiceSection: types.services.actions.UPDATE_SERVICE_SECTION
    }),
    saveData: async function() {
      const errorObject = isValidationErrorExist(
        this.serviceSection,
        this.aliases,
        this.validation
      );
      this.errors = { ...errorObject.errors };
      if (errorObject.length !== 0) return;
      try {
        let payload = {
          order: this.serviceSection.order,
          type: this.serviceSection.type,
          enabled: this.serviceSection.enabled,
          sectionType: "OUR_SERVICE"
        };
        if (this.operation === "Edit Service Section") {
          await this.updateServiceSection({
            ...payload,
            sectionId: this.editData.id,
            id: this.$router.history.current.params.id
          });
          this.notifyVue("Service Section Updated Successfully", "success");
        } else {
          await this.createServiceSection({
            ...payload,
            id: this.$router.history.current.params.id
          });
          this.notifyVue("Service Section Created Successfully", "success");
        }
        const { id } = this.serviceSectionData;
        this.serviceSection = { ...emptyServiceSection };
        this.$router.push(`/dashboard/services/sections/list/${id}`);
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
      this.$route.name === "Edit Service Section"
    )
      this.$router.push({
        path: "/dashboard/services"
      });
  },
  mounted() {
    if (this.$route.name === "Edit Service Section") {
      this.serviceSection.order = this.editData.order;
      this.serviceSection.type = this.editData.type;
      this.serviceSection.enabled = this.editData.enabled;
    }
  },
  components: {
    ErrorMessage
  }
};
</script>
