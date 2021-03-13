<template>
  <header class="header-wrapper" v-if="isContactFetched">
    <div class="header-wrapper__main">
      <div class="header-wrapper__logo">
        <a href="/">
          <img src="../../../public/images/logo.png" alt="gamers lounge logo" />
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
                activeItem === 'services' || activeItem === 'service'
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
                activeItem === 'work' || activeItem === 'works'
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
                activeItem === 'jobs' || activeItem === 'job'
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
                activeItem === 'services' || activeItem === 'service'
                  ? 'header-wrapper__navLinks--active'
                  : ''
              ]"
            >
              <a href="/services" @click="closeNav">Our Services</a>
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
                activeItem === 'jobs' || activeItem === 'job'
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

      <div class="row header-wrapper__social-media">
        <!-- <div class="col-12 col-sm-6 d-flex justify-content-center d-sm-block">
        <a href="https://www.google.com" target="__blank" v-if="false">
          <HalfClippedOutlineButton text="GL Games" />
        </a>
      </div> -->
        <div class="w-100 d-none d-sm-flex justify-content-end">
          <div class="header-wrapper__social-media__logos">
            <img
              class="fb-logo"
              :src="contact.img_facebook.url"
              @click="goToLink(contact.information.facebook_link)"
              alt="facebook"
              v-if="
                contact.img_facebook && contact.information.facebook_link !== ''
              "
            />
            <img
              :src="contact.img_instagram.url"
              @click="goToLink(contact.information.instagram_link)"
              alt="instagram"
              v-if="
                contact.img_instagram &&
                  contact.information.instagram_link !== ''
              "
            />
            <img
              :src="contact.img_twitter.url"
              @click="goToLink(contact.information.twitter_link)"
              alt="twitter"
              v-if="
                contact.img_twitter && contact.information.twitter_link !== ''
              "
            />
            <img
              :src="contact.img_youtube.url"
              @click="goToLink(contact.information.youtube_link)"
              alt="youtube"
              v-if="
                contact.img_youtube && contact.information.youtube_link !== ''
              "
            />
            <img
              :src="contact.img_twitch.url"
              @click="goToLink(contact.information.twitch_link)"
              alt="twitch"
              v-if="
                contact.img_twitch && contact.information.twitch_link !== ''
              "
            />
          </div>
          <div class="header-wrapper__avatar">
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState, mapActions } from "vuex";
import types from "../../store/types";
import HalfClippedOutlineButton from "./HalfClippedOutlineButton";
import Avatar from "./Avatar";

export default {
  props: ["activeItem", "setShowLoginModal", "isSolidHeader"],
  computed: {
    ...mapState({
      contact: state => state.contact.contact,
      isContactFetched: state => state.contact.isContactFetched
    })
  },
  methods: {
    ...mapActions({
      fetchContactUsData: types.contact.actions.FETCH_CONTACT
    }),
    openNav() {
      this.$refs.myNav.style.height = "100%";
    },
    closeNav() {
      this.$refs.myNav.style.height = "0%";
    },
    goToLink(url) {
      window.open(url, "_blank");
    }
  },
  components: {
    HalfClippedOutlineButton,
    Avatar
  },
  mounted() {
    if (!this.isContactFetched) {
      const requestSource = {
        requestSource: "website",
        showSpinner: true
      };
      this.fetchContactUsData(requestSource);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/shared/header.scss";
</style>
