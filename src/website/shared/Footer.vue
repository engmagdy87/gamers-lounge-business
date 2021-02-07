<template>
  <div class="footer-section" v-if="isContactFetched">
    <div class="footer-section__container">
      <div class="row justify-content-center">
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6 footer-leftside">
          <router-link to="/"
            ><img
              src="../../../public/images/GL-logo.png"
              style="max-width: 200px;"
            />
          </router-link>
          <br /><br />
          <p>
            the first official esports organization in Egypt, founded by <br />
            experienced gamers to develop esports in Middle-Easy & North Africa.
          </p>
          <br />
          <p>
            <img src="../../../public/images/pin-white.svg" />
            {{ contact.information.address }}
          </p>
          <p v-if="contact.information.phone !== ''">
            <img src="../../../public/images/phone-white.svg" />
            {{ contact.information.phone }}
          </p>
          <p>
            <img src="../../../public/images/mail-white.svg" />
            <a :href="`mailto:${contact.information.email}`">{{
              contact.information.email
            }}</a>
          </p>
        </div>

        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6 footer-social-media">
          <h5 class="footer-followus">Follow US</h5>

          <div class="social-media row">
            <div
              class="social-logos-container"
              @click="goToLink(contact.information.facebook_link)"
              v-if="
                contact.img_facebook && contact.information.facebook_link !== ''
              "
            >
              <img
                class="fb-logo"
                :src="contact.img_facebook.url"
                alt="facebook"
              />
            </div>

            <div
              class="social-logos-container"
              @click="goToLink(contact.information.instagram_link)"
              v-if="
                contact.img_instagram &&
                  contact.information.instagram_link !== ''
              "
            >
              <img :src="contact.img_instagram.url" alt="instagram" />
            </div>

            <div
              class="social-logos-container"
              @click="goToLink(contact.information.twitter_link)"
              v-if="
                contact.img_twitter && contact.information.twitter_link !== ''
              "
            >
              <img :src="contact.img_twitter.url" alt="twitter" />
            </div>

            <div
              class="social-logos-container"
              @click="goToLink(contact.information.youtube_link)"
              v-if="
                contact.img_youtube && contact.information.youtube_link !== ''
              "
            >
              <img :src="contact.img_youtube.url" alt="youtube" />
            </div>
          </div>
        </div>
      </div>

      <div class="row footer-nav">
        <ul class="nav justify-content-center col-sm-12 col-md-12 col-lg-12">
          <router-link to="/" tag="li" active-class="active" exact="">
            <a class="nav-link"> Home </a>
          </router-link>
          <router-link to="/services" tag="li" active-class="active">
            <a class="nav-link">Our Services</a>
          </router-link>
          <router-link to="about" tag="li" active-class="active">
            <a class="nav-link">About Us</a>
          </router-link>
          <router-link to="/contact" tag="li" active-class="active">
            <a class="nav-link">Contact Us</a>
          </router-link>
          <router-link to="/ourwork" tag="li" active-class="active">
            <a class="nav-link">Our Work</a>
          </router-link>
          <router-link to="/jobs" tag="li" active-class="active">
            <a class="nav-link">Jobs</a>
          </router-link>
        </ul>
      </div>
    </div>

    <div class="row copyrights m-0 p-0">
      <h5>
        Copyright © 2020 <a href="#"> Gamers lounge </a> For Esports E.S.C All
        Rights Reserved
      </h5>
    </div>

    <a href="#top">
      <div class="scroll-top-wrapper">
        <div>
          <img src="../../../public/images/top-arrow.svg" alt="up arrow" />
          <img src="../../../public/images/top-arrow.svg" alt="up arrow" />
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import types from "../../store/types";

export default {
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
    goToLink(url) {
      window.open(url, "_blank");
    }
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
@import "../../assets/sass/website/shared/footer.scss";
@import "../../assets/sass/website/shared/half-clipped-button.scss";
</style>
