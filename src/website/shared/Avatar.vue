<template>
  <div v-if="userCookie">
    <div
      role="button"
      tabIndex="0"
      class="avatar-wrapper"
      @click="handleMenuVisibility"
    >
      <div>
        <span>{{ getUserAbbreviationName }}</span>
      </div>
    </div>
    <span
      :class="[
        'avatar-wrapper__menu',
        showMenu ? 'avatar-wrapper__menu--show' : 'avatar-wrapper__menu--hide'
      ]"
    >
      <ul class="avatar-wrapper__navLinks">
        <li>
          <a href="/profile">Profile</a>
        </li>
        <li @click="logout">
          <a>Logout</a>
        </li>
      </ul>
    </span>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import {
  removeTokenCookie,
  removeUserDataCookie,
  getUserDataCookie
} from "../../helpers/CookieHelper";
import { getFirstLettersOfString } from "../../helpers/StringsHelper";
import types from "../../store/types";

export default {
  data() {
    return {
      showMenu: false,
      userCookie: null
    };
  },
  methods: {
    ...mapMutations({
      setUserPersona: types.user.mutations.SET_USER_PERSONA
    }),
    handleMenuVisibility() {
      this.showMenu = !this.showMenu;
    },
    logout() {
      removeTokenCookie();
      removeUserDataCookie();
      this.handleMenuVisibility();
      this.userCookie = null;
      this.setUserPersona({});
    }
  },
  computed: {
    getUserAbbreviationName() {
      return getFirstLettersOfString(
        `${this.userCookie.first_name} ${this.userCookie.last_name}`
      );
    }
  },
  mounted() {
    this.userCookie = getUserDataCookie();
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/shared/avatar.scss";
</style>
