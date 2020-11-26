<template>
  <div class="wrapper">
    <side-bar>
      <MobileMenu slot="content"></MobileMenu>
      <sidebar-link to="/dashboard/overview">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/dashboard/departments">
        <i class="nc-icon nc-vector"></i>
        <p>Departments</p>
      </sidebar-link>
      <sidebar-link to="/dashboard/jobs">
        <i class="nc-icon nc-bag"></i>
        <p>Jobs</p>
      </sidebar-link>
    </side-bar>
    <div class="main-panel">
      <TopNavbar></TopNavbar>
      <DashboardContent @click="toggleSidebar"></DashboardContent>
    </div>
    <Spinner :smallLoader="false" />
  </div>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";
// import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu.vue";
import Spinner from "../../website/shared/Spinner";

export default {
  components: {
    TopNavbar,
    // ContentFooter,
    DashboardContent,
    MobileMenu,
    Spinner
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/color-palette.scss";
.main-panel {
  &::-webkit-scrollbar {
    width: 5px !important;
    background-color: $accent !important;
    border-radius: 20px !important;
  }
  &::-webkit-scrollbar-thumb {
    background-color: $primary !important;
    border-radius: 20px !important;
  }
}
</style>
