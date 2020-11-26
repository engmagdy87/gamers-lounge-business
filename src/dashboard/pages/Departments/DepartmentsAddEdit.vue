<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/dashboard/departments">Departments</a>
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
            label="Name"
            placeholder="Enter Name"
            v-model="department.name"
            :autofocus="true"
            :isRequired="true"
          >
          </base-input>
          <ErrorMessage :fieldErrors="errors.name" />
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
    </form>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import ErrorMessage from "../../../website/shared/ErrorMessage";
import store from "../../../store/index";
import types from "../../../store/types";
import { createDepartment } from "../../../helpers/APIsHelper";
import isValidationErrorExist from "../../../helpers/FormValidation";

const emptyDepartment = {
  name: ""
};

export default {
  data() {
    return {
      editData: this.$router.history.current.params.data,
      operation: this.$route.name,
      department: {
        ...emptyDepartment
      },
      errors: {},
      validation: {
        name: { isRequired: true }
      },
      aliases: {
        name: "name"
      }
    };
  },
  methods: {
    ...mapActions({
      createDepartment: types.departments.actions.CREATE_DEPARTMENT,
      updateDepartment: types.departments.actions.UPDATE_DEPARTMENT
    }),
    saveData: async function() {
      const errorObject = isValidationErrorExist(
        this.department,
        this.aliases,
        this.validation
      );
      this.errors = { ...errorObject.errors };
      if (errorObject.length !== 0) return;
      try {
        if (this.operation === "Edit Department") {
          const payload = {
            id: this.editData.id,
            name: this.department.name
          };
          await this.updateDepartment(payload);
          this.notifyVue("Department Updated Successfully", "success");
        } else {
          await this.createDepartment(this.department.name);
          this.notifyVue("Department Created Successfully", "success");
        }
        this.department = { ...emptyDepartment };
        this.$router.push("/dashboard/departments");
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
      this.$route.name === "Edit Department"
    )
      this.$router.push({
        path: "/dashboard/departments"
      });
  },
  mounted() {
    if (this.$route.name === "Edit Department") {
      this.department.name = this.editData.name;
    }
  },
  components: {
    ErrorMessage
  }
};
</script>
