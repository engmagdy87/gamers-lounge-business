<template>
  <div class="work-wrapper">
      <WorkMainPage/>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import store from "../../store/index";
import types from "../../store/types";
import WorkMainPage from "../components/work/WorkMainPage";
export default {
  components: {
    WorkMainPage
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/containers/work.scss";
</style>
