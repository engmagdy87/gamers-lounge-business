<template>
  <div class="Job-main-content-wrapper">
    <div class="Job-main-content-wrapper__container row">
      <div class="col-12 p-0 Job-main-content-wrapper__title">
        <h1> let's work together</h1>
        <p> We're always looking for freah talents in eSports(Casters - Analysis - Designers - Video Editors ) if
          you're an eSports fan and think you have what it takes </p>
      </div>

      <div class="Job-main-content-wrapper__jobs row">
        <div v-for="job in jobsData" :key="job.id" class="Job-main-content-wrapper__jobs__content col-xs-12 col-sm-12 col-md-6 col-lg-4">

          <div class="Job-main-content-wrapper__job-title col-12">
            <p>{{ job.Department }}</p>
            <h3> {{job.jobTitle}}</h3>
          </div>

          <div class="Job-main-content-wrapper__detailsBtn col-12">
            <HalfClippedOutlineButton text="View" />
          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script>
import HalfClippedOutlineButton from "../../shared/HalfClippedOutlineButton";
export default {
    data() {
    return {
      jobsData: [
        {
          id:"1",
          Department: "Department name",
          jobTitle: "Job title"
        },
        {
          id:"2",
          Department: "Department name",
          jobTitle: "Job title"
        },
        {
          id:"3",
          Department: "Department name",
          jobTitle: "Job title"
        },
        {
          id:"4",
          Department: "Department name",
          jobTitle: "Job title"
        },
        {
          id:"5",
          Department: "Department name",
          jobTitle: "Job title"
        },
      ]
    };
  },
  components: {
    HalfClippedOutlineButton,
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/jobs/jobs-main-content.scss";
</style>
