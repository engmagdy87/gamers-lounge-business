<template>
  <div class="wrapper">
    <side-bar>
      <MobileMenu slot="content"></MobileMenu>
      <sidebar-link to="/dashboard/overview">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link
        to="/dashboard/home-hero-slides"
        v-if="isUserHasPermission('home_slider')"
      >
        <i class="nc-icon nc-home"></i>
        <p>Home Hero Slider</p>
      </sidebar-link>
      <sidebar-link
        to="/dashboard/departments"
        v-if="isUserHasPermission('job')"
      >
        <i class="nc-icon nc-vector"></i>
        <p>Departments</p>
      </sidebar-link>
      <sidebar-link to="/dashboard/jobs" v-if="isUserHasPermission('job')">
        <i class="nc-icon nc-bag"></i>
        <p>Jobs</p>
      </sidebar-link>
      <sidebar-link
        to="/dashboard/services"
        v-if="isUserHasPermission('service')"
      >
        <i class="nc-icon nc-layers-3"></i>
        <p>Services</p>
      </sidebar-link>
      <sidebar-link to="/dashboard/works" v-if="isUserHasPermission('work')">
        <i class="nc-icon nc-ruler-pencil"></i>
        <p>Work</p>
      </sidebar-link>
      <sidebar-link
        to="/dashboard/sponsors"
        v-if="isUserHasPermission('sponsor')"
      >
        <i class="nc-icon nc-money-coins"></i>
        <p>Sponsors</p>
      </sidebar-link>
      <sidebar-link
        to="/dashboard/about"
        v-if="isUserHasPermission('about_us')"
      >
        <i class="nc-icon nc-quote"></i>
        <p>About</p>
      </sidebar-link>
      <sidebar-link to="/dashboard/team" v-if="isUserHasPermission('team')">
        <i class="nc-icon nc-single-02"></i>
        <p>Team</p>
      </sidebar-link>
      <sidebar-link
        to="/dashboard/contact"
        v-if="isUserHasPermission('contact_us')"
      >
        <i class="nc-icon nc-mobile"></i>
        <p>Contact</p>
      </sidebar-link>
      <sidebar-link to="/dashboard/admins" v-if="isUserHasPermission('admin')">
        <i class="nc-icon nc-badge"></i>
        <p>Admins</p>
      </sidebar-link>
      <sidebar-link
        to="/dashboard/settings"
        v-if="isUserHasPermission('setting')"
      >
        <i class="nc-icon nc-settings-gear-64"></i>
        <p>Settings</p>
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
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu.vue";
import Spinner from "../../website/shared/Spinner";
import { getUserDataCookie } from "../../helpers/CookieHelper";

const userData = getUserDataCookie();

export default {
  components: {
    TopNavbar,
    DashboardContent,
    MobileMenu,
    Spinner
  },
  methods: {
    isUserHasPermission(route) {
      return userData.permissions.includes(`${route}.view`);
    },
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
