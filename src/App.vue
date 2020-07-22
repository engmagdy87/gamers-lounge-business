<template>
  <div :class="['app-wrapper', { 'nav-open': $sidebar.showSidebar }]">
    <notifications></notifications>
    <router-view></router-view>
  </div>
</template>

<script>
import store from "./store/index";
import types from "./store/types";
import { getUserCookie } from "./website/helpers/CookieHelper";

export default {
  mounted() {
    const userPersona = getUserCookie();
    if (userPersona)
      store.commit(types.user.mutations.SET_USER_PERSONA, userPersona);
  }
};
</script>
<style lang="scss">
@import "./assets/sass/website/app.scss";
</style>
