<template>
  <div class="jobs-wrapper">
      <JobsMainPage/>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import store from "../../store/index";
import types from "../../store/types";
import JobsMainPage from "../components/jobs/JobsMainPage";
export default {
  components: {
    JobsMainPage,
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/containers/jobs.scss";
</style>
