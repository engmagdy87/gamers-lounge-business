<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/dashboard/about">About</a>
        </li>
        <li class="breadcrumb-item">
          <router-link :to="`/dashboard/about/rows/list/${aboutRowData.id}`"
            >Section {{ aboutRowData.order }} Rows</router-link
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
            v-model="aboutRow.order"
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

const emptyAboutRow = {
  order: 1
};

export default {
  data() {
    return {
      editData: this.$router.history.current.params.data,
      operation: this.$route.name,
      aboutRow: {
        ...emptyAboutRow
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
      aboutRowData: state => state.about.aboutRows,
      aboutSectionData: state => state.about.aboutSections
    }),
    sectionId() {
      return this.$router.history.current.params.sectionId;
    }
  },
  methods: {
    ...mapActions({
      createAboutRow: types.about.actions.CREATE_ABOUT_ROW,
      updateAboutRow: types.about.actions.UPDATE_ABOUT_ROW
    }),
    saveData: async function() {
      const errorObject = isValidationErrorExist(
        this.aboutRow,
        this.aliases,
        this.validation
      );
      this.errors = { ...errorObject.errors };
      if (errorObject.length !== 0) return;
      try {
        let payload = {
          order: this.aboutRow.order
        };
        const { sectionId } = this.$router.history.current.params;
        if (this.operation === "Edit About Row") {
          await this.updateAboutRow({
            ...payload,
            rowId: this.editData.id,
            sectionId: sectionId
          });
          this.notifyVue("About Row Updated Successfully", "success");
        } else {
          await this.createAboutRow({
            ...payload,
            sectionId: sectionId
          });
          this.notifyVue("About Row Created Successfully", "success");
        }
        const { id } = this.aboutRowData;
        this.aboutRow = { ...emptyAboutRow };
        this.$router.push(`/dashboard/about/rows/list/${id}`);
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
      this.$route.name === "Edit About Row"
    )
      this.$router.push({
        path: "/dashboard/about"
      });
  },
  mounted() {
    if (this.$route.name === "Edit About Row") {
      this.aboutRow.order = this.editData.order;
    }
  },
  components: {
    ErrorMessage
  }
};
</script>
