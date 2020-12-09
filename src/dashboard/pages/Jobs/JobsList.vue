<template>
  <div>
    <div class="row">
      <div class="col-sm">
        <h2 class="heading-margin">Jobs ({{ jobsData.length }})</h2>
      </div>
      <div class="col-sm">
        <router-link to="/dashboard/jobs/create">
          <button
            type="button"
            class="btn btn-secondary d-block ml-auto heading-margin"
          >
            Add Job
          </button>
        </router-link>
      </div>
    </div>
    <Table
      class="table-hover table-striped"
      :columns="table.columns"
      :data="jobsData"
      tableType="jobs"
      :setShowDeleteDialogFlag="setJobDataFlags"
    >
    </Table>
    <DeleteDialog
      :showFlag="showFlag"
      item="Job"
      :deleteAction="removeJob"
      :setShowDeleteDialogFlag="setJobDataFlags"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import types from "../../../store/types";
import Table from "../../../dashboard/components/Table";
import DeleteDialog from "../../../website/shared/DeleteDialog";

export default {
  data() {
    return {
      showFlag: false,
      targetId: null,
      locationInDataArray: null,
      table: {
        columns: [
          "Id",
          "Title",
          "Description",
          "Requirements",
          "Department",
          "Actions"
        ]
      }
    };
  },
  computed: {
    ...mapState({
      jobsData: state => state.jobs.jobs
    })
  },
  methods: {
    ...mapActions({
      fetchJobs: types.jobs.actions.FETCH_JOBS,
      deleteJob: types.jobs.actions.DELETE_JOB
    }),
    async removeJob() {
      const payload = {
        jobId: this.targetId,
        locationInDataArray: this.locationInDataArray
      };
      try {
        await this.deleteJob(payload);
        this.setJobDataFlags(false, null, null);
        this.notifyVue("Job Deleted Successfully", "success");
      } catch (error) {
        this.notifyVue("Error Happened", "danger");
      }
    },
    setJobDataFlags(flag, id, locationInDataArray) {
      this.showFlag = flag;
      this.targetId = id;
      this.locationInDataArray = locationInDataArray;
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
    DeleteDialog
  },
  mounted() {
    this.fetchJobs();
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/lbd/heading.scss";
</style>
