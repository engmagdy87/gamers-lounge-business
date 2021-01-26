<template>
  <div class="job-details-wrapper pb-5" v-if="isJobFetched">
    <div class="container">
      <div class="row">
        <div class="col-12 pt-5"><Breadcrumb :tree="breadcrumbTree" /></div>
        <div class="col-12 col-lg-6 job-details-wrapper__details">
          <h2>{{ job.department.name }}</h2>
          <h1>{{ job.title }}</h1>
          <hr />
          <div class="description-container" v-html="job.description"></div>
          <h3>Job requirements</h3>
          <div class="description-container" v-html="job.requirements"></div>
        </div>
        <div class="col-12 col-lg-6">
          <JobForm :job="job" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import types from "../../store/types";
import JobForm from "../components/jobs/JobForm";
import Breadcrumb from "../shared/Breadcrumb";
import { getEntityId, getEntityName } from "../../helpers/StringsHelper";
import redirectToNewTab from "../../helpers/RedirectToNewTab";

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
    }),
    ...mapMutations({
      setIsJobFetched: types.jobs.mutations.SET_IS_JOB_FETCHED
    })
  },
  components: {
    JobForm,
    Breadcrumb
  },
  beforeMount() {
    this.setIsJobFetched(false);
  },
  mounted() {
    const requestSource = {
      jobId: getEntityId(this.$route.params.jobName),
      requestSource: "website"
    };
    this.breadcrumbTree.push({
      title: getEntityName(this.$route.params.jobName),
      path: ""
    });

    this.fetchJob(requestSource);
  },
  updated() {
    redirectToNewTab("description-container");
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/containers/job-details.scss";
</style>
