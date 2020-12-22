<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/dashboard/works">Works</a>
        </li>
        <li class="breadcrumb-item">
          <router-link :to="`/dashboard/works/sections/list/${workRowData.id}`"
            >{{ workSectionData.title }} Work Sections</router-link
          >
        </li>
        <li class="breadcrumb-item">
          <router-link :to="`/dashboard/works/rows/list/${workRowData.id}`"
            >Section {{ workRowData.order }} Rows</router-link
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
            v-model="workRow.order"
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

const emptyWorkRow = {
  order: 1
};

export default {
  data() {
    return {
      editData: this.$router.history.current.params.data,
      operation: this.$route.name,
      workRow: {
        ...emptyWorkRow
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
      workRowData: state => state.works.workRows,
      workSectionData: state => state.works.workSections
    }),
    workSectionId() {
      return this.$router.history.current.params.workSectionId;
    }
  },
  methods: {
    ...mapActions({
      createWorkRow: types.works.actions.CREATE_WORK_ROW,
      updateWorkRow: types.works.actions.UPDATE_WORK_ROW
    }),
    saveData: async function() {
      const errorObject = isValidationErrorExist(
        this.workRow,
        this.aliases,
        this.validation
      );
      this.errors = { ...errorObject.errors };
      if (errorObject.length !== 0) return;
      try {
        let payload = {
          order: this.workRow.order
        };
        const { workSectionId } = this.$router.history.current.params;
        if (this.operation === "Edit Work Row") {
          await this.updateWorkRow({
            ...payload,
            workRowId: this.editData.id,
            workSectionId
          });
          this.notifyVue("Work Row Updated Successfully", "success");
        } else {
          await this.createWorkRow({
            ...payload,
            workSectionId
          });
          this.notifyVue("Work Row Created Successfully", "success");
        }
        const { id } = this.workRowData;
        this.workRow = { ...emptyWorkRow };
        this.$router.push(`/dashboard/works/rows/list/${id}`);
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
      this.$route.name === "Edit Work Row"
    )
      this.$router.push({
        path: "/dashboard/works"
      });
  },
  mounted() {
    if (this.$route.name === "Edit Work Row") {
      this.workRow.order = this.editData.order;
    }
  },
  components: {
    ErrorMessage
  }
};
</script>
