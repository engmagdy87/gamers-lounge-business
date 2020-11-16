<template>
  <div class="job-main-content-wrapper">
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
          v-for="job in jobsData"
          :key="job.id"
          class="job-main-content-wrapper__jobs__content col-xs-12 col-sm-12 col-md-6 col-lg-4"
        >
          <div class="job-main-content-wrapper__job-title col-12">
            <p>{{ job.department }}</p>
            <h3>{{ job.jobTitle }}</h3>
          </div>

          <div class="job-main-content-wrapper__details-btn col-12">
            <router-link :to="`/job/${job.id}-${reformatURL(job.jobTitle)}`">
              <HalfClippedOutlineButton text="View" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HalfClippedOutlineButton from "../../shared/HalfClippedOutlineButton";
import { reformatStringToBeInURL } from "../../helpers/StringsHelper";

export default {
  data() {
    return {
      jobsData: [
        {
          id: "1",
          department: "Department name",
          jobTitle: "Job title"
        },
        {
          id: "2",
          department: "Department name",
          jobTitle: "Job title"
        },
        {
          id: "3",
          department: "Department name",
          jobTitle: "Job title"
        },
        {
          id: "4",
          department: "Department name",
          jobTitle: "Job title"
        },
        {
          id: "5",
          department: "Department name",
          jobTitle: "Job title"
        }
      ]
    };
  },
  components: {
    HalfClippedOutlineButton
  },
  methods: {
    reformatURL(id) {
      return reformatStringToBeInURL(id);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/jobs/jobs-main-content.scss";
</style>
