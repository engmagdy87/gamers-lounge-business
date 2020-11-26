<template>
  <div v-if="isJobFetched">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/dashboard/jobs">Jobs</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ jobData.title }} Applicants
        </li>
      </ol>
    </nav>
    <div class="row">
      <div class="col-sm">
        <h2 class="heading-margin">
          {{ jobData.title }} Applicants ({{ jobData.applications.length }})
        </h2>
      </div>
      <div class="col-sm">
        <button
          type="button"
          class="btn btn-secondary d-block ml-auto heading-margin"
          @click="downloadCSV"
        >
          Download All Applicants
        </button>
      </div>
    </div>
    <Table
      class="table-hover table-striped"
      :columns="table.columns"
      tableType="job-applicants"
      :data="jobData"
    >
    </Table>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import types from "../../../store/types";
import Table from "../../../dashboard/components/Table";
import { downloadAllJobApplicantsCSV } from "../../helpers/DownloadCSV";

export default {
  data() {
    return {
      showFlag: false,
      targetId: null,
      locationInDataArray: null,
      table: {
        columns: [
          "Id",
          "Full Name",
          "Phone",
          "Email",
          "Country",
          "City",
          "Behance Link",
          "Linkedin Link",
          "Resume",
          "Actions"
        ]
      }
    };
  },
  computed: {
    ...mapState({
      jobData: state => state.jobs.job,
      isJobFetched: state => state.jobs.isJobFetched
    })
  },
  methods: {
    ...mapActions({
      fetchJob: types.jobs.actions.FETCH_JOB
    }),
    downloadCSV() {
      const { applications, title, department } = this.jobData;
      downloadAllJobApplicantsCSV(applications, title, department.name);
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
    Table
  },
  mounted() {
    const requestSource = {
      jobId: this.$route.params.jobId
    };
    this.fetchJob(requestSource);
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/lbd/heading.scss";
</style>
