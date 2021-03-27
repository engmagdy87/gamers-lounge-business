<template>
  <div class="job-main-content-wrapper" v-if="isJobsFetched">
    <div
      v-if="isSettingsDataFetched"
      class="job-main-content-wrapper__bg"
      :style="`background-image: url(${settings.img_services_cover.url};`"
    ></div>
    <Hero page="services">
      <template #hero-content>
        <div class="row d-block job-main-content-wrapper__title">
          <h1>let's work together</h1>
          <p>
            We're always looking for fresh talents in eSports(Casters - Analysis
            - Designers - Video Editors ) if you're an eSports fan and think you
            have what it takes
          </p>
        </div>
      </template>
    </Hero>

    <div class="job-main-content-wrapper__container row">
      <div class="job-main-content-wrapper__jobs row">
        <div
          v-for="(job, index) in jobs"
          :key="job.id"
          class="job-main-content-wrapper__jobs__content col-12"
        >
          <div class="job-main-content-wrapper__job-title ">
            <h3>{{ job.department.name }}</h3>
            <p>{{ job.title }}</p>
          </div>

          <button
            class="job-main-content-wrapper__details-btn"
            @click="getSelectedJob(index)"
          >
            <router-link :to="`/job/${job.id}-${reformatURL(job.title)}`">
              <span @click="jobClicked">
                View
              </span>
            </router-link>
          </button>
        </div>
      </div>
    </div>
    <Modal
      :showModal="showModal"
      :setShowModal="setShowModal"
      :navigateTo="navigateTo"
      :isJobPage="true"
    />
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import types from "../../../store/types";
import Hero from "../../shared/Hero";
import { reformatStringToBeInURL } from "../../../helpers/StringsHelper";
import Modal from "../../shared/Modal";

export default {
  data() {
    return {
      showModal: false,
      selectedJob: null
    };
  },
  computed: {
    ...mapState({
      jobs: state => state.jobs.jobs,
      isJobsFetched: state => state.jobs.isJobsFetched,
      settings: state => state.settings.servicesSettings,
      isSettingsDataFetched: state =>
        state.settings.isServicesSettingsDataFetched
    })
  },
  methods: {
    ...mapActions({
      fetchJobs: types.jobs.actions.FETCH_JOBS,
      fetchHomeCoverImageAndTexts: types.settings.actions.FETCH_SETTINGS
    }),
    ...mapMutations({
      setShowHeaderFlag: types.app.mutations.SET_SHOW_HEADER_FLAG,
      setShowFooterFlag: types.app.mutations.SET_SHOW_FOOTER_FLAG,
      setIsJobFetched: types.jobs.mutations.SET_IS_JOB_FETCHED
    }),
    reformatURL(id) {
      return reformatStringToBeInURL(id);
    },
    getSelectedJob(id) {
      this.selectedJob = id;
    },
    navigateTo(dir) {
      this.setIsJobFetched(false);
      let job;
      if (dir == "next")
        this.selectedJob =
          this.selectedJob === this.jobs.length - 1 ? 0 : this.selectedJob + 1;
      else
        this.selectedJob =
          this.selectedJob === 0 ? this.jobs.length - 1 : this.selectedJob - 1;

      job = this.jobs[this.selectedJob];

      this.$router.replace(`/job/${job.id}-${this.reformatURL(job.title)}`);
    },
    setShowModal(flag) {
      this.showModal = flag;
    },
    jobClicked() {
      this.setIsJobFetched(false);
      this.setShowModal(true);
    }
  },
  components: {
    Hero,
    Modal
  },
  mounted() {
    const payload = { isEnabled: true, requestSource: "website" };
    if (!this.isJobsFetched) this.fetchJobs(payload);
    else {
      this.setShowHeaderFlag(true);
      this.setShowFooterFlag(true);
    }
    const flags = {
      isServiceTexts: true,
      isService: true
    };
    if (!this.isSettingsDataFetched) this.fetchHomeCoverImageAndTexts(flags);
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/jobs/jobs-main-content.scss";
</style>
