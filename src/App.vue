<template>
  <div :class="['app-wrapper', { 'nav-open': $sidebar.showSidebar }]">
    <Header />
    <notifications></notifications>
    <router-view></router-view>
    <Spinner :smallLoader="false" />
    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import store from "./store/index";
import types from "./store/types";
import Header from "./website/shared/Header";
import Footer from "./website/shared/Footer";
import Spinner from "./website/shared/Spinner";
import { getUserCookie } from "./website/helpers/CookieHelper";

export default {
  components: {
    Header,
    Spinner,
    Footer
  }
};
</script>
<style lang="scss">
@import "./assets/sass/website/app.scss";
</style>
