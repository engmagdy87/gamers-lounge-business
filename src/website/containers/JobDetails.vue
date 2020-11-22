<template>
  <div class="job-details-wrapper pb-5">
    <div class="container">
      <div class="row">
        <div class="col-12 pt-5"><Breadcrumb :tree="breadcrumbTree" /></div>
        <div class="col-12 col-lg-6 job-details-wrapper__details">
          <h2>Department name</h2>
          <h1>Job title</h1>
          <hr />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima eum
            debitis id dolorem neque quod eos laboriosam repellendus porro
            magnam, esse quibusdam dolor adipisci iusto enim aperiam veritatis
            suscipit doloribus?
          </p>
          <h3>Job requirements</h3>
          <p>
            Must have's Bachelors Degree 5+ year work experience Previous
            experience working with brands in a client-facing capacity Skills
            Personable Able to navigate difficult conversations with clients and
            internal teams Detail-oriented and organized Able to handle
            high-pressure situations Willingness to travel frequently and
            internationally
          </p>
        </div>
        <div class="col-12 col-lg-6">
          <JobForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JobForm from "../components/jobs/JobForm";
import Breadcrumb from "../shared/Breadcrumb";
import { getEntityId } from "../../helpers/StringsHelper";

export default {
  data() {
    return {
      jobId: getEntityId(this.$route.params.jobName),
      breadcrumbTree: [{ title: "Jobs", path: "/jobs" }]
    };
  },
  components: {
    JobForm,
    Breadcrumb
  },
  mounted() {
    this.breadcrumbTree.push({ title: "Job Title", path: this.$route.path });
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/containers/job-details.scss";
</style>
