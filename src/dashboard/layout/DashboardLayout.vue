<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/dashboard/overview">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/dashboard/summits">
        <i class="nc-icon nc-planet"></i>
        <p>Summits</p>
      </sidebar-link>
      <sidebar-link to="/dashboard/events">
        <i class="nc-icon nc-notification-70"></i>
        <p>Events</p>
      </sidebar-link>
      <sidebar-link to="/dashboard/sponsors">
        <i class="nc-icon nc-money-coins"></i>
        <p>Sponsors</p>
      </sidebar-link>
      <sidebar-link to="/dashboard/games">
        <i class="nc-icon nc-controller-modern"></i>
        <p>Games</p>
      </sidebar-link>
      <sidebar-link to="/dashboard/platforms">
        <i class="nc-icon nc-tv-2"></i>
        <p>Platforms</p>
      </sidebar-link>
      <sidebar-link to="/dashboard/regions">
        <i class="nc-icon nc-square-pin"></i>
        <p>Regions</p>
      </sidebar-link>
      <sidebar-link to="/dashboard/tournaments">
        <i class="nc-icon nc-puzzle-10"></i>
        <p>Tournaments</p>
      </sidebar-link>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>
      <dashboard-content @click="toggleSidebar"> </dashboard-content>
    </div>
    <Spinner :smallLoader="false" />
  </div>
</template>
<style lang="scss"></style>
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
  }
  &::-webkit-scrollbar-thumb {
    background-color: $primary !important;
    border-radius: 20px !important;
  }
  &::-webkit-scrollbar {
    background-color: $accent !important;
    border-radius: 20px !important;
  }
}
</style>
