<template>
  <div>
    <div
      role="button"
      tabIndex="0"
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
    >
      <ul class="avatar-wrapper__navLinks">
        <li>
          <a href="/profile">Profile</a>
        </li>
        <li @click="logoutUser">
          <a href="#">Logout</a>
        </li>
      </ul>
    </span>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getFirstLettersOfString } from "../../website/helpers/StringsHelper";

export default {
  props: ["logoutUser", "userCookie"],
  data() {
    return {
      showMenu: false
    };
  },
  computed: {
    getUserAbbreviationName() {
      return getFirstLettersOfString(
        `${this.userCookie.user.first_name} ${this.userCookie.user.last_name}`
      );
    }
  },
  methods: {
    handleMenuVisibility() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/shared/avatar.scss";
</style>
