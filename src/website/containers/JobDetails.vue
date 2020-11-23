<template>
  <div class="job-details-wrapper pb-5" v-if="isJobFetched">
    <div class="container">
      <div class="row">
        <div class="col-12 pt-5"><Breadcrumb :tree="breadcrumbTree" /></div>
        <div class="col-12 col-lg-6 job-details-wrapper__details">
          <h2>{{ job.department.name }}</h2>
          <h1>{{ job.title }}</h1>
          <hr />
          <p>
            {{ job.description }}
          </p>
          <h3>Job requirements</h3>
          <p>
            {{ job.requirements }}
          </p>
        </div>
        <div class="col-12 col-lg-6">
          <JobForm :job="job" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import types from "../../store/types";
import JobForm from "../components/jobs/JobForm";
import Breadcrumb from "../shared/Breadcrumb";
import { getEntityId } from "../../helpers/StringsHelper";

export default {
  data() {
    return {
      breadcrumbTree: [{ title: "Jobs", path: "/jobs" }]
    };
  },
  computed: {
    ...mapState({
      job: state => state.jobs.job,
      isJobFetched: state => state.jobs.isJobFetched
    })
  },
  methods: {
    ...mapActions({
      fetchJob: types.jobs.actions.FETCH_JOB
    })
  },
  components: {
    JobForm,
    Breadcrumb
  },
  mounted() {
    this.fetchJob(getEntityId(this.$route.params.jobName));
    this.breadcrumbTree.push({ title: this.job.title, path: this.$route.path });
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/containers/job-details.scss";
</style>
