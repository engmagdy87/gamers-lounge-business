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
          <CustomButton :setShowFiltersModal="setShowFiltersModal" />
        </div>
      </div>
      <MenuView
        :data="getCorrespondingData"
        :isGamesActive="isGamesActive"
        v-if="isMenuActive && isGamesDataFetched && isTournamentsDataFetched"
      />
      <ListView
        :data="getCorrespondingData"
        :isGamesActive="
          isGamesActive && isGamesDataFetched && isTournamentsDataFetched
        "
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
    <Filters
      :showFlag="showFiltersModal"
      :setShowFiltersModal="setShowFiltersModal"
      :gamesData="gamesData"
      :regionsData="regionsData"
    />
    <Spinner :smallLoader="false" />
    <Footer :sponsors="footerSponsorsData" />
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import store from "../../store/index";
import types from "../../store/types";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import Spinner from "../shared/Spinner";
import LoginModal from "../components/home/LoginModal";
import RegisterModal from "../components/home/RegisterModal";
import Filters from "../components/tournaments/Filters";
import MenuView from "../components/home/MenuView";
import ListView from "../components/home/ListView";
import CustomSwitch from "../shared/CustomSwitch";
import CustomButton from "../shared/CustomButton";

export default {
  data() {
    return {
      isGamesActive: true,
      isMenuActive: true,
      showLoginModal: false,
      showRegisterModal: false,
      showFiltersModal: false
    };
  },
  computed: {
    ...mapState({
      tournamentsData: state => state.tournaments.filteredTournamentsData,
      isTournamentsDataFetched: state =>
        state.tournaments.isTournamentsDataFetched,
      gamesData: state => state.games.gamesCardViewData,
      isGamesDataFetched: state => state.games.isGamesCardsViewDataFetched,
      regionsData: state => state.regions.dashboardRegionsData,
      isDashboardRegionsDataFetched: state =>
        state.regions.isDashboardRegionsDataFetched,
      footerSponsorsData: state => state.sponsors.footerSponsorsData,
      isFooterSponsorsDataFetched: state =>
        state.sponsors.isFooterSponsorsDataFetched
    }),
    ...mapGetters({
      isUserLoggedIn: types.user.getters.IS_USER_LOGGED_IN
    }),
    getCorrespondingData() {
      return this.isGamesActive ? this.gamesData : this.tournamentsData;
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
    ...mapActions({
      fetchGames: types.games.actions.FETCH_GAMES_CARD_VIEW,
      fetchTournaments: types.tournaments.actions.FETCH_TOURNAMENTS,
      fetchRegions: types.regions.actions.FETCH_REGIONS_FOR_DASHBOARD,
      fetchFooterSponsors: types.sponsors.actions.FETCH_FOOTER_SPONSORS
    }),
    setShowLoginModal(value = false) {
      this.showLoginModal = value;
    },
    setShowRegisterModal(value = false) {
      this.showRegisterModal = value;
    },
    setShowFiltersModal(value = false) {
      this.showFiltersModal = value;
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
    CustomButton,
    Filters
  },
  mounted() {
    store.commit(types.home.mutations.SET_SPINNER_FLAG, true);
    this.fetchGames();
    this.fetchTournaments();
    this.fetchRegions();
    this.fetchFooterSponsors();
  },
  updated() {
    if (
      this.isGamesDataFetched &&
      this.isTournamentsDataFetched &&
      this.isDashboardRegionsDataFetched &&
      this.isFooterSponsorsDataFetched
    )
      store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/containers/home.scss";
</style>
