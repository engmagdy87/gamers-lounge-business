<template>
  <div>
    <div
      role="button"
      tabIndex="0"
      v-if="userCookie !== null"
      class="avatar-wrapper mr-3"
      @click="handleMenuVisibility"
    >
      <div>
        <img
          v-if="userCookie.user.images.img_profile !== null"
          :src="userCookie.user.images.img_profile.path"
        />
        <span v-else>{{ getUserAbbreviationName }}</span>
      </div>
    </div>
    <span
      :class="[
        'avatar-wrapper__menu',
        showMenu ? 'avatar-wrapper__menu--show' : 'avatar-wrapper__menu--hide'
      ]"
      @click="logoutUser"
    >
      Logout
    </span>
  </div>
</template>

<script>
import getFirstLettersOfString from "../../website/helpers/StringsHelper";
import { getUserCookie } from "../../website/helpers/CookieHelper";

export default {
  props: ["logoutUser"],
  data() {
    return {
      showMenu: false,
      userCookie: null
    };
  },
  methods: {
    handleMenuVisibility() {
      this.showMenu = !this.showMenu;
    }
  },
  mounted() {
    this.userCookie = getUserCookie();
  },
  computed: {
    getUserAbbreviationName() {
      return getFirstLettersOfString(
        `${this.userCookie.user.first_name} ${this.userCookie.user.last_name}`
      );
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/shared/avatar.scss";
</style>
