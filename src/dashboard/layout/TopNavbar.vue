<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="/dashboard">Dashboard</a>
      <button
        type="button"
        class="navbar-toggler navbar-toggler-right"
        :class="{ toggled: $sidebar.showSidebar }"
        aria-controls="navigation-index"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleSidebar"
      >
        <span class="navbar-toggler-bar burger-lines"></span>
        <span class="navbar-toggler-bar burger-lines"></span>
        <span class="navbar-toggler-bar burger-lines"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" @click="logout">
            <a href="#" class="nav-link">
              Log out
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import store from "../../store/index";
import types from "../../store/types";
import { removeTokenCookie } from "../../helpers/CookieHelper";

export default {
  computed: {
    routeName() {
      const { name } = this.$route;
      return this.capitalizeFirstLetter(name);
    }
  },
  data() {
    return {
      activeNotifications: false
    };
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications;
    },
    closeDropDown() {
      this.activeNotifications = false;
    },
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false);
    },
    logout() {
      removeTokenCookie();
      this.$router.push({ path: "/login" });
    }
  }
};
</script>
