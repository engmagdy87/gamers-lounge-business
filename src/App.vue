<template>
  <div :class="['app-wrapper', { 'nav-open': $sidebar.showSidebar }]">
    <notifications></notifications>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from "vuex";
import store from "./store/index";
import types from "./store/types";
import { getUserCookie } from "./website/helpers/CookieHelper";

export default {};
</script>
<style lang="scss">
@import "./assets/sass/website/app.scss";
</style>
