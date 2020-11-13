<template>
  <header class="header-wrapper">
    <div class="row header-wrapper__social-media">
      <div class="col-12 col-sm-6 d-flex justify-content-center d-sm-block">
        <HalfClippedOutlineButton text="GL Games" />
      </div>

      <div class="col-12 col-sm-6 d-none d-sm-flex justify-content-end">
        <div class="header-wrapper__social-media__logos">
          <img
            class="fb-logo"
            src="../../../public/images/facebook.svg"
            @click="goToLink('facebook')"
            alt=""
            srcset=""
          />
          <img
            src="../../../public/images/instagram.svg"
            @click="goToLink('instagram')"
            alt=""
            srcset=""
          />
          <img
            src="../../../public/images/twitter.svg"
            @click="goToLink('twitter')"
            alt=""
            srcset=""
          />
          <img
            src="../../../public/images/youtube.svg"
            @click="goToLink('youtube')"
            alt=""
            srcset=""
          />
        </div>
      </div>
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
                activeItem === 'home'
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
                activeItem === 'services'
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
                activeItem === 'about'
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
                activeItem === 'contact'
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
                activeItem === 'work'
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
                activeItem === 'jobs'
                  ? 'header-wrapper__navLinks--active'
                  : 'header-wrapper__navLinks--inactive'
              ]"
              href="/jobs"
              >Jobs</a
            >
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
                activeItem === 'home'
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
                activeItem === 'services'
                  ? 'header-wrapper__navLinks--active'
                  : ''
              ]"
            >
              <a href="/services" @click="closeNav">Our Services</a>
            </li>
            <li
              :class="[
                activeItem === 'about'
                  ? 'header-wrapper__navLinks--active'
                  : 'header-wrapper__navLinks--inactive'
              ]"
            >
              <a href="/about" @click="closeNav">About Us</a>
            </li>
            <li
              :class="[
                activeItem === 'contact'
                  ? 'header-wrapper__navLinks--active'
                  : 'header-wrapper__navLinks--inactive'
              ]"
            >
              <a href="/contact" @click="closeNav">Contact Us</a>
            </li>
            <li
              :class="[
                activeItem === 'work'
                  ? 'header-wrapper__navLinks--active'
                  : 'header-wrapper__navLinks--inactive'
              ]"
            >
              <a href="/work" @click="closeNav">Our Work</a>
            </li>
            <li
              :class="[
                activeItem === 'jobs'
                  ? 'header-wrapper__navLinks--active'
                  : 'header-wrapper__navLinks--inactive'
              ]"
            >
              <a href="/jobs" @click="closeNav">Jobs</a>
            </li>
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
import HalfClippedOutlineButton from "./HalfClippedOutlineButton";
import { removeCookie, getUserCookie } from "../helpers/CookieHelper";

export default {
  data() {
    return {
      userCookie: null
    };
  },
  props: ["activeItem", "setShowLoginModal", "isSolidHeader"],
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
    },
    goToLink(value) {
      window.open("https://" + value + ".com", "_blank");
    }
  },
  components: {
    HalfClippedOutlineButton
  },
  mounted() {
    if (getUserCookie() !== undefined) this.userCookie = getUserCookie();
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/shared/header.scss";
</style>
