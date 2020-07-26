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
            <li
              :class="[isGamesActive ? 'home-wrapper__navLinks--active' : '']"
              @click="setIsGamesActive(true)"
            >
              Games
            </li>
            <li
              :class="[!isGamesActive ? 'home-wrapper__navLinks--active' : '']"
              @click="setIsGamesActive(false)"
            >
              Tournament
            </li>
          </ul>
        </div>
        <div class="col d-flex justify-content-end align-items-center">
          <CustomSwitch
            :isMenuActive="isMenuActive"
            :setIsMenuActive="setIsMenuActive"
          />
        </div>
      </div>
      <div class="row" v-if="!isGamesActive">
        <div class="col">
          <CustomButton
            :isMenuActive="isMenuActive"
            :setIsMenuActive="setIsMenuActive"
          />
        </div>
      </div>
      <MenuView
        :data="getCorrespondingData"
        :isGamesActive="isGamesActive"
        v-if="isMenuActive"
      />
      <ListView
        :data="getCorrespondingData"
        :isGamesActive="isGamesActive"
        v-else
      />
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
import CustomButton from "../shared/CustomButton";

const rawData = [
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
];

export default {
  data() {
    return {
      isGamesActive: true,
      isMenuActive: true,
      showLoginModal: false,
      showRegisterModal: false,
      games: rawData,
      tournament: [...rawData].reverse()
    };
  },
  computed: {
    ...mapGetters({
      isUserLoggedIn: types.user.getters.IS_USER_LOGGED_IN
    }),
    getCorrespondingData() {
      return this.isGamesActive ? this.games : this.tournament;
    }
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
    setIsMenuActive(flag) {
      this.isMenuActive = flag;
    },
    setIsGamesActive(flag) {
      this.isGamesActive = flag;
      this.isMenuActive = true;
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
    Footer,
    CustomButton
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/containers/home.scss";
</style>
