<template>
  <div class="jobs-wrapper">
    <JobsMainPage />
  </div>
</template>

<script>
import JobsMainPage from "../components/jobs/JobsMainPage";

export default {
  components: {
    JobsMainPage
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/containers/jobs.scss";
</style>
