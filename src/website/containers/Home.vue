<template>
  <div class="home-wrapper">
    <Header
      activeItem="home"
      :setShowRegisterModal="setShowRegisterModal"
      :setShowLoginModal="setShowLoginModal"
    />
    <img src="website/img/hero.jpg" class="home-wrapper__hero-img" />
    <div class="home-wrapper__content">
      <h2>Join The Battle</h2>
      <div class="row">
        <div class="col">
          <ul class="home-wrapper__navLinks">
            <li class="home-wrapper__navLinks--active">Games</li>
            <li>Tournament</li>
          </ul>
        </div>
        <div class="col d-flex justify-content-end">
          <CustomSwitch
            :isMenuActive="isMenuActive"
            :toggleIsMenuActive="toggleIsMenuActive"
          />
        </div>
      </div>
      <MenuView :data="data" v-if="isMenuActive" />
      <ListView :data="data" v-else />
    </div>
    <LoginModal
      :showFlag="showLoginModal"
      :setShowLoginModal="setShowLoginModal"
    />
    <RegisterModal
      :showFlag="showRegisterModal"
      :setShowRegisterModal="setShowRegisterModal"
    />
    <Spinner :smallLoader="false" />
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import types from "../../store/types";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import Spinner from "../shared/Spinner";
import LoginModal from "../components/home/LoginModal";
import RegisterModal from "../components/home/RegisterModal";
import MenuView from "../components/home/MenuView";
import ListView from "../components/home/ListView";
import CustomSwitch from "../shared/CustomSwitch";

export default {
  data() {
    return {
      isMenuActive: true,
      showLoginModal: false,
      showRegisterModal: false,
      data: [
        {
          background: "website/img/fifa-bg.jpg",
          logo: "website/img/fifa-logo.png",
          name: "FIFA 2020",
          tournament: 6
        },
        {
          background: "website/img/hearthstone-bg.jpg",
          logo: "website/img/hearthstone-logo.png",
          name: "Hearthstone",
          tournament: 6
        },
        {
          background: "website/img/dota-bg.png",
          logo: "website/img/dota-logo.png",
          name: "DOTA 2",
          tournament: 12
        }
      ]
    };
  },
  computed: {
    ...mapGetters({
      isUserLoggedIn: types.user.getters.IS_USER_LOGGED_IN
    })
  },
  watch: {
    isUserLoggedIn() {
      if (this.isUserLoggedIn) {
        this.setShowLoginModal(false);
        this.setShowRegisterModal(false);
      }
    }
  },
  methods: {
    setShowLoginModal(value = false) {
      this.showLoginModal = value;
    },
    setShowRegisterModal(value = false) {
      this.showRegisterModal = value;
    },
    toggleIsMenuActive() {
      this.isMenuActive = !this.isMenuActive;
    }
  },
  components: {
    Header,
    LoginModal,
    RegisterModal,
    Spinner,
    CustomSwitch,
    MenuView,
    ListView,
    Footer
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/containers/home.scss";
</style>
