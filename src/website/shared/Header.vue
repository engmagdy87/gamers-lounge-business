<template>
  <header
    :class="[
      'header-wrapper',
      isSolidHeader ? 'header-wrapper--solid' : 'header-wrapper--gradient'
    ]"
  >
    <div class="header-wrapper__logo">
      <img src="website/img/ess-logo.png" alt="medaf typeface" />
    </div>
    <!-- DESKTOP UI -->
    <nav class="header-wrapper--desktop">
      <ul class="header-wrapper__navLinks">
        <li
          :class="[
            activeItem === 'home' ? 'header-wrapper__navLinks--active' : ''
          ]"
        >
          <a href="/">Home</a>
        </li>
        <li
          :class="[
            activeItem === 'events' ? 'header-wrapper__navLinks--active' : ''
          ]"
        >
          <a href="#">Events</a>
        </li>
        <li
          :class="[
            activeItem === 'giveaways' ? 'header-wrapper__navLinks--active' : ''
          ]"
        >
          <a href="#">Giveaways</a>
        </li>
        <li
          :class="[
            activeItem === 'story' ? 'header-wrapper__navLinks--active' : ''
          ]"
        >
          <a href="/story">Our Story</a>
        </li>
        <li
          :class="[
            activeItem === 'testimonial'
              ? 'header-wrapper__navLinks--active'
              : ''
          ]"
        >
          <a href="#">Testimonial</a>
        </li>
        <li
          :class="[
            activeItem === 'contact' ? 'header-wrapper__navLinks--active' : ''
          ]"
        >
          <a href="#">Contact Us</a>
        </li>
        <li
          class="float-right"
          @click="setShowRegisterModal(true)"
          v-if="!isUserLoggedIn"
        >
          <a href="#">Register</a>
        </li>
        <li
          class="float-right"
          @click="setShowLoginModal(true)"
          v-if="!isUserLoggedIn"
        >
          <a href="#">Login</a>
        </li>
        <li class="float-right" v-if="isUserLoggedIn" @click="logoutUser">
          <a href="#">
            Logout
          </a>
        </li>
        <li class="float-right" v-if="isUserLoggedIn && isUserAdmin">
          <a href="/dashboard">
            Dashboard
          </a>
        </li>
      </ul>
    </nav>

    <!-- MOBILE UI -->
    <div class="header-wrapper--mobile">
      <div ref="myNav" class="overlay">
        <a class="closebtn" @click="closeNav">
          &times;
        </a>

        <div class="overlay-content">
          <li
            :class="[
              activeItem === 'home' ? 'header-wrapper__navLinks--active' : ''
            ]"
          >
            <a href="/" @click="closeNav">
              Home
            </a>
          </li>
          <li
            :class="[
              activeItem === 'events' ? 'header-wrapper__navLinks--active' : ''
            ]"
          >
            <a href="#" @click="closeNav">Events</a>
          </li>
          <li
            :class="[
              activeItem === 'giveaways'
                ? 'header-wrapper__navLinks--active'
                : ''
            ]"
          >
            <a href="#" @click="closeNav">Giveaways</a>
          </li>
          <li
            :class="[
              activeItem === 'story' ? 'header-wrapper__navLinks--active' : ''
            ]"
          >
            <a href="#" @click="closeNav">Our Story</a>
          </li>
          <li
            :class="[
              activeItem === 'testimonial'
                ? 'header-wrapper__navLinks--active'
                : ''
            ]"
          >
            <a href="#" @click="closeNav">Testimonial</a>
          </li>
          <li
            :class="[
              activeItem === 'contact' ? 'header-wrapper__navLinks--active' : ''
            ]"
          >
            <a href="#" @click="closeNav">Contact Us</a>
          </li>
        </div>
      </div>

      <span class="hamburger-menu" @click="openNav">
        &#9776;
      </span>
    </div>
  </header>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import store from "../../store/index";
import types from "../../store/types";
import { removeCookie } from "../helpers/CookieHelper";

export default {
  props: [
    "activeItem",
    "setShowRegisterModal",
    "setShowLoginModal",
    "isSolidHeader"
  ],
  methods: {
    openNav() {
      this.$refs.myNav.style.height = "100%";
    },
    closeNav() {
      this.$refs.myNav.style.height = "0%";
    },
    logoutUser() {
      removeCookie();
      store.commit(types.user.mutations.SET_USER_PERSONA, {});
    }
  },
  computed: {
    ...mapGetters({
      isUserLoggedIn: types.user.getters.IS_USER_LOGGED_IN,
      isUserAdmin: types.user.getters.IS_USER_ADMIN
    })
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/shared/header.scss";
</style>
