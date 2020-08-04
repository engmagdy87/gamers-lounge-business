<template>
  <div :class="['app-wrapper', { 'nav-open': $sidebar.showSidebar }]">
    <notifications></notifications>
    <router-view></router-view>
    <UnverifiedUser :showFlag="showUnverifiedUserModal" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import store from "./store/index";
import types from "./store/types";
import { getUserCookie } from "./website/helpers/CookieHelper";
import UnverifiedUser from "./website/components/profile/UnverifiedUser";

export default {
  data() {
    return {
      showUnverifiedUserModal: false
    };
  },
  components: {
    UnverifiedUser
  },
  computed: {
    ...mapState({
      userVerification: state => state.user.userVerification
    })
  },
  watch: {
    userVerification() {
      if (!this.userVerification.status) this.setShowUnverifiedUserModal(true);
    }
  },
  methods: {
    setShowUnverifiedUserModal(value) {
      this.showUnverifiedUserModal = value;
    }
  },
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
