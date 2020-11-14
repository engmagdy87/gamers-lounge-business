<template>
  <div class="Jobs-wrapper">
      <JobsPage/>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import store from "../../store/index";
import types from "../../store/types";
import JobsPage from "../components/jobs/JobsPage";
export default {
  components: {
    JobsPage,
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/containers/jobs.scss";
</style>
