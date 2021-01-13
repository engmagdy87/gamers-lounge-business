<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/dashboard/services">Services</a>
        </li>
        <li class="breadcrumb-item">
          <router-link
            :to="`/dashboard/services/sections/list/${serviceRowData.id}`"
            >{{ serviceSectionData.title }} Service Sections</router-link
          >
        </li>
        <li class="breadcrumb-item">
          <router-link
            :to="`/dashboard/services/rows/list/${serviceRowData.id}`"
            >Section {{ serviceRowData.order }} Rows</router-link
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
            label="Row Order"
            placeholder="Enter Row Order"
            v-model="serviceRow.order"
            :isRequired="true"
            min="1"
          >
          </base-input>
          <ErrorMessage :fieldErrors="errors.order" />
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

const emptyServiceRow = {
  order: 1
};

export default {
  data() {
    return {
      editData: this.$router.history.current.params.data,
      operation: this.$route.name,
      serviceRow: {
        ...emptyServiceRow
      },
      errors: {},
      validation: {
        order: { isRequired: true }
      },
      aliases: {
        order: "order"
      }
    };
  },
  computed: {
    ...mapState({
      serviceRowData: state => state.services.serviceRows,
      serviceSectionData: state => state.services.serviceSections
    }),
    sectionId() {
      return this.$router.history.current.params.sectionId;
    }
  },
  methods: {
    ...mapActions({
      createServiceRow: types.services.actions.CREATE_SERVICE_ROW,
      updateServiceRow: types.services.actions.UPDATE_SERVICE_ROW
    }),
    saveData: async function() {
      const errorObject = isValidationErrorExist(
        this.serviceRow,
        this.aliases,
        this.validation
      );
      this.errors = { ...errorObject.errors };
      if (errorObject.length !== 0) return;
      try {
        let payload = {
          order: this.serviceRow.order
        };
        const { sectionId } = this.$router.history.current.params;
        if (this.operation === "Edit Service Row") {
          await this.updateServiceRow({
            ...payload,
            rowId: this.editData.id,
            sectionId: sectionId
          });
          this.notifyVue("Service Row Updated Successfully", "success");
        } else {
          await this.createServiceRow({
            ...payload,
            sectionId: sectionId
          });
          this.notifyVue("Service Row Created Successfully", "success");
        }
        const { id } = this.serviceRowData;
        this.serviceRow = { ...emptyServiceRow };
        this.$router.push(`/dashboard/services/rows/list/${id}`);
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
      this.$route.name === "Edit Service Row"
    )
      this.$router.push({
        path: "/dashboard/services"
      });
  },
  mounted() {
    if (this.$route.name === "Edit Service Row") {
      this.serviceRow.order = this.editData.order;
    }
  },
  components: {
    ErrorMessage
  }
};
</script>
