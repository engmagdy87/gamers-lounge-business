<template>
  <div v-if="isDepartmentsDataFetched">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/dashboard/jobs">Jobs</a>
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
            label="Title"
            placeholder="Enter Title"
            v-model="job.title"
            :autofocus="true"
            :isRequired="true"
          >
          </base-input>
          <ErrorMessage :fieldErrors="errors.title" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="region"
              >Department<span class="error-message"> *</span></label
            >
            <select class="form-control" v-model="job.departmentId">
              <option value="-1">--Please select department</option>
              <option
                v-for="(department, index) in departmentsData"
                :selected="department.id == job.departmentId"
                :key="index"
                :value="department.id"
                >{{ department.name }}</option
              >
            </select>
            <ErrorMessage :fieldErrors="errors.departmentId" />
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
              v-model="job.description"
            />
            <ErrorMessage :fieldErrors="errors.description" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label>Requirements<span class="error-message"> *</span></label>
            <vue-pell-editor
              :actions="editorOptions"
              :style-with-css="false"
              placeholder=""
              v-model="job.requirements"
            />
            <ErrorMessage :fieldErrors="errors.requirements" />
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
    </form>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import ErrorMessage from "../../../website/shared/ErrorMessage";
import types from "../../../store/types";
import isValidationErrorExist from "../../../helpers/FormValidation";
import editorOptions from "../../../dashboard/wysiwyg-factory/options";

const emptyJob = {
  title: "",
  description: "",
  requirements: "",
  departmentId: "-1"
};

export default {
  data() {
    return {
      editData: this.$router.history.current.params.data,
      operation: this.$route.name,
      job: {
        ...emptyJob
      },
      errors: {},
      validation: {
        title: { isRequired: true },
        description: { isRequired: true },
        requirements: { isRequired: true },
        departmentId: { isRequired: true }
      },
      aliases: {
        title: "title",
        description: "description",
        requirements: "requirements",
        departmentId: "departmentId"
      },
      editorOptions
    };
  },
  computed: {
    ...mapState({
      departmentsData: state => state.departments.departments,
      isDepartmentsDataFetched: state =>
        state.departments.isDepartmentsDataFetched
    })
  },
  methods: {
    ...mapActions({
      createJob: types.jobs.actions.CREATE_JOB,
      updateJob: types.jobs.actions.UPDATE_JOB,
      fetchDepartments: types.departments.actions.FETCH_DEPARTMENTS
    }),
    saveData: async function() {
      const errorObject = isValidationErrorExist(
        this.job,
        this.aliases,
        this.validation
      );
      this.errors = { ...errorObject.errors };
      if (errorObject.length !== 0) return;
      try {
        const payload = {
          title: this.job.title,
          description: this.job.description,
          requirements: this.job.requirements,
          departmentId: this.job.departmentId
        };
        if (this.operation === "Edit Job") {
          await this.updateJob({ ...payload, jobId: this.editData.id });
          this.notifyVue("Job Updated Successfully", "success");
        } else {
          await this.createJob(payload);
          this.notifyVue("Job Created Successfully", "success");
        }
        this.job = { ...emptyJob };
        this.$router.push("/dashboard/jobs");
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
      this.$route.name === "Edit Job"
    )
      this.$router.push({
        path: "/dashboard/jobs"
      });
  },
  mounted() {
    this.fetchDepartments();
    if (this.$route.name === "Edit Job") {
      this.job.title = this.editData.title;
      this.job.description = this.editData.description;
      this.job.requirements = this.editData.requirements;
      this.job.departmentId = this.editData.department.id;
    }
  },
  components: {
    ErrorMessage
  }
};
</script>
