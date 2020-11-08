<template>
  <header class="header-wrapper">
    <div class="header-wrapper__social-media">
      <HalfClippedButton text="GL Games" />
    </div>
    <div class="header-wrapper__main">
      <div class="header-wrapper__logo">
        <a href="/" alt="gamers lounge business" style="width: 100%;">
          <!-- <img src="/website/img/ess-logo.png" alt="ess logo" /> -->
        </a>
      </div>
      <!-- DESKTOP UI -->
      <nav class="header-wrapper--desktop">
        <ul class="header-wrapper__navLinks">
          <li>
            <a
              :class="[
                activeItem === '/'
                  ? 'header-wrapper__navLinks--active'
                  : 'header-wrapper__navLinks--inactive'
              ]"
              href="/"
              >Home</a
            >
          </li>
          <li>
            <a
              :class="[
                activeItem === '/services'
                  ? 'header-wrapper__navLinks--active'
                  : 'header-wrapper__navLinks--inactive'
              ]"
              href="/services"
              >Our Services</a
            >
          </li>
          <li>
            <a
              :class="[
                activeItem === '/about'
                  ? 'header-wrapper__navLinks--active'
                  : 'header-wrapper__navLinks--inactive'
              ]"
              href="/about"
              >About Us</a
            >
          </li>
          <li>
            <a
              :class="[
                activeItem === '/contact'
                  ? 'header-wrapper__navLinks--active'
                  : 'header-wrapper__navLinks--inactive'
              ]"
              href="/contact"
              >Contact Us</a
            >
          </li>
          <li>
            <a
              :class="[
                activeItem === '/work'
                  ? 'header-wrapper__navLinks--active'
                  : 'header-wrapper__navLinks--inactive'
              ]"
              href="/work"
              >Our Work</a
            >
          </li>
          <li>
            <a
              :class="[
                activeItem === '/jobs'
                  ? 'header-wrapper__navLinks--active'
                  : 'header-wrapper__navLinks--inactive'
              ]"
              href="/jobs"
              >Jobs</a
            >
          </li>

          <!-- <li
          class="float-right header-wrapper__user-section"
          v-if="userCookie === null"
        >
          <span class="header-wrapper__user-section">/</span
          ><a class="header-wrapper__user-section" href="#">Create Account</a>
        </li>
        <li
          class="float-right"
          @click="setShowLoginModal(true)"
          v-if="userCookie === null"
        >
          <a class="header-wrapper__user-section" href="#">Login</a>
        </li> -->
          <!-- <img
          v-if="userCookie === null"
          class="float-right float-right header-wrapper__user-section-icon"
          src="../../../public/website/img/user.svg"
          alt="user"
        /> -->
          <!-- <li class="float-right" v-if="userCookie !== null">
          <Avatar :logoutUser="logoutUser" :userCookie="userCookie" />
        </li> -->
          <a href="/dashboard">
            <li v-if="userCookie !== null" class="float-right">
              <img
                class="header-wrapper__dashboard-img"
                src="/website/img/dashboard.svg"
                alt="dashboard"
              />
            </li>
          </a>
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
                activeItem === '/'
                  ? 'header-wrapper__navLinks--active'
                  : 'header-wrapper__navLinks--inactive'
              ]"
            >
              <a href="/" @click="closeNav">
                Home
              </a>
            </li>
            <li
              :class="[
                activeItem === '/services'
                  ? 'header-wrapper__navLinks--active'
                  : ''
              ]"
            >
              <a href="/services" @click="closeNav">Our Services</a>
            </li>
            <li
              :class="[
                activeItem === '/about'
                  ? 'header-wrapper__navLinks--active'
                  : 'header-wrapper__navLinks--inactive'
              ]"
            >
              <a href="/about" @click="closeNav">About Us</a>
            </li>
            <li
              :class="[
                activeItem === '/contact'
                  ? 'header-wrapper__navLinks--active'
                  : 'header-wrapper__navLinks--inactive'
              ]"
            >
              <a href="/contact" @click="closeNav">Contact Us</a>
            </li>
            <li
              :class="[
                activeItem === '/work'
                  ? 'header-wrapper__navLinks--active'
                  : 'header-wrapper__navLinks--inactive'
              ]"
            >
              <a href="/work" @click="closeNav">Our Work</a>
            </li>
            <li
              :class="[
                activeItem === '/jobs'
                  ? 'header-wrapper__navLinks--active'
                  : 'header-wrapper__navLinks--inactive'
              ]"
            >
              <a href="/jobs" @click="closeNav">Jobs</a>
            </li>
            <!-- <li v-if="userCookie === null">
            <a href="#" @click="closeNav">Register</a>
          </li>
          <li @click="setShowLoginModal(true)" v-if="userCookie === null">
            <a href="#" @click="closeNav">Login</a>
          </li>
          <li v-if="userCookie !== null">
            <a href="/profile">
              Profile
            </a>
          </li> -->
            <li v-if="userCookie !== null">
              <a href="/dashboard">
                Dashboard
              </a>
            </li>
            <!-- <li v-if="userCookie !== null" @click="logoutUser">
            <a href="#">
              Logout
            </a>
          </li> -->
          </div>
        </div>

        <span class="hamburger-menu" @click="openNav">
          &#9776;
        </span>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import store from "../../store/index";
import types from "../../store/types";
import HalfClippedButton from "./HalfClippedButton";
import { removeCookie, getUserCookie } from "../helpers/CookieHelper";

export default {
  data() {
    return {
      userCookie: null,
      activeItem: this.$route.path
    };
  },
  props: ["setShowLoginModal", "isSolidHeader"],
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
      this.closeNav();
    }
  },
  components: {
    HalfClippedButton
  },
  mounted() {
    if (getUserCookie() !== undefined) this.userCookie = getUserCookie();
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/shared/header.scss";
</style>
