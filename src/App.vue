<template>
  <div :class="['app-wrapper', { 'nav-open': $sidebar.showSidebar }]">
    <Header
      id="top"
      :activeItem="headerActiveItem"
      v-if="showHeaderAndFooter"
    />
    <notifications></notifications>
    <router-view></router-view>
    <Spinner :smallLoader="false" />
    <Footer v-if="showHeaderAndFooter" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import store from "./store/index";
import types from "./store/types";
import Header from "./website/shared/Header";
import Footer from "./website/shared/Footer";
import Spinner from "./website/shared/Spinner";
import { getTokenCookie } from "./helpers/CookieHelper";

export default {
  data() {
    return {
      headerActiveItem: null,
      showHeaderAndFooter: false
    };
  },
  components: {
    Header,
    Spinner,
    Footer
  },
  updated() {
    this.headerActiveItem = this.$route.name;
    this.showHeaderAndFooter = !(
      this.$route.path.includes("dashboard") ||
      this.$route.path.includes("login")
    );
  }
};
</script>
<style lang="scss">
@import "./assets/sass/website/app.scss";
</style>
