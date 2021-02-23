<template>
  <div class="job-main-content-wrapper" v-if="isJobsFetched">
    <div class="job-main-content-wrapper__container row">
      <div class="col-12 p-0 job-main-content-wrapper__title">
        <h1>let's work together</h1>
        <p>
          We're always looking for freah talents in eSports(Casters - Analysis -
          Designers - Video Editors ) if you're an eSports fan and think you
          have what it takes
        </p>
      </div>

      <div class="job-main-content-wrapper__jobs row m-0">
        <div
          v-for="job in jobs"
          :key="job.id"
          class="job-main-content-wrapper__jobs__content col-xs-12 col-sm-12 col-md-6 col-lg-4"
        >
          <div class="job-main-content-wrapper__job-title col-12">
            <p>{{ job.department.name }}</p>
            <h3>{{ job.title }}</h3>
          </div>

          <div class="job-main-content-wrapper__details-btn col-12">
            <router-link :to="`/job/${job.id}-${reformatURL(job.title)}`">
              <HalfClippedOutlineButton text="View" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import types from "../../../store/types";
import HalfClippedOutlineButton from "../../shared/HalfClippedOutlineButton";
import { reformatStringToBeInURL } from "../../../helpers/StringsHelper";

export default {
  computed: {
    ...mapState({
      jobs: state => state.jobs.jobs,
      isJobsFetched: state => state.jobs.isJobsFetched
    })
  },
  methods: {
    ...mapActions({
      fetchJobs: types.jobs.actions.FETCH_JOBS
    }),
    ...mapMutations({
      setShowHeaderFlag: types.app.mutations.SET_SHOW_HEADER_FLAG,
      setShowFooterFlag: types.app.mutations.SET_SHOW_FOOTER_FLAG
    }),
    reformatURL(id) {
      return reformatStringToBeInURL(id);
    }
  },
  components: {
    HalfClippedOutlineButton
  },
  mounted() {
    const payload = { isEnabled: true, requestSource: "website" };
    if (!this.isJobsFetched) this.fetchJobs(payload);
    else {
      this.setShowHeaderFlag(true);
      this.setShowFooterFlag(true);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/jobs/jobs-main-content.scss";
</style>
