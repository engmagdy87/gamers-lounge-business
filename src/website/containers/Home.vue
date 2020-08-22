<template>
  <div class="home-wrapper" @scroll="detectScroll">
    <Header
      activeItem="home"
      :setShowRegisterModal="setShowRegisterModal"
      :setShowLoginModal="setShowLoginModal"
    />
    <VueSlickCarousel
      v-if="filteredMainEventsData.length !== 0 && isMainEventsFetched"
      :arrows="false"
      :dots="true"
      :pauseOnHover="false"
      :slidesToShow="1"
      :slidesToScroll="1"
      autoplay
      infinite
      :autoplaySpeed="5000"
    >
      <img
        v-for="(event, index) in filteredMainEventsData"
        :key="index"
        :src="event.images.img_cover_home.path"
        alt=""
        class="home-wrapper__slide"
        @click="redirectTo(event.id, event.initial_title)"
      />
    </VueSlickCarousel>
    <div class="home-wrapper__content" id="home">
      <div
        v-if="
          isGamesDataFetched &&
            isTournamentsDataFetched &&
            isDashboardRegionsDataFetched &&
            isMainEventsFetched
        "
      >
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
                :class="[
                  !isGamesActive ? 'home-wrapper__navLinks--active' : ''
                ]"
                @click="setIsGamesActive(false)"
              >
                Tournaments
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
          :tree="tree"
        />
        <ListView
          :data="getCorrespondingData"
          :isGamesActive="
            isGamesActive && isGamesDataFetched && isTournamentsDataFetched
          "
          :tree="tree"
          v-else
        />
      </div>
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
    <Footer
      :sponsors="footerSponsorsData"
      :events="filteredMainEventsData"
      :showFooter="footerCssClass"
    />
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import VueSlickCarousel from "vue-slick-carousel";
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
import { reformatStringToBeInURL } from "../helpers/StringsHelper";

export default {
  data() {
    return {
      isGamesActive: true,
      isMenuActive: true,
      showLoginModal: false,
      showRegisterModal: false,
      showFiltersModal: false,
      footerCssClass: "hide",
      tree: [{ name: "Home", path: "/" }]
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
        state.sponsors.isFooterSponsorsDataFetched,
      mainEventsData: state => state.events.mainEventsData,
      isMainEventsFetched: state => state.events.isMainEventsFetched
    }),
    ...mapGetters({
      isUserLoggedIn: types.user.getters.IS_USER_LOGGED_IN
    }),
    getCorrespondingData() {
      return this.isGamesActive ? this.gamesData : this.tournamentsData;
    },
    filteredMainEventsData() {
      return this.mainEventsData.filter(
        event => event.images.img_cover_home !== null
      );
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
      fetchFooterSponsors: types.sponsors.actions.FETCH_FOOTER_SPONSORS,
      fetchMainEvents: types.events.actions.FETCH_MAIN_EVENTS
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
    },
    redirectTo(id, title) {
      this.$router.push({
        name: "event",
        params: {
          eventName: `${id}-${reformatStringToBeInURL(title)}`,
          data: { id, title, tree: [{ name: "Home", path: "/" }] }
        }
      });
    },
    detectScroll(e) {
      if (e.target.scrollTop <= 120) this.footerCssClass = "hide";
      else if (
        e.target.scrollTop > 120 &&
        e.target.scrollTop + e.target.offsetHeight < e.target.scrollHeight
      )
        this.footerCssClass = "show-small";
      else if (
        e.target.scrollTop + e.target.offsetHeight ===
        e.target.scrollHeight
      )
        this.footerCssClass = "show-large";
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
    Filters,
    VueSlickCarousel
  },
  mounted() {
    store.commit(types.home.mutations.SET_SPINNER_FLAG, true);
    this.fetchGames();
    this.fetchTournaments();
    this.fetchRegions();
    this.fetchFooterSponsors();
    this.fetchMainEvents();
    const scrollId = this.$router.history.current.hash.split("#")[1];
    if (scrollId && document.getElementById("home") !== null)
      document.getElementById("home").scrollIntoView();
    if (scrollId === "tournaments") this.isGamesActive = false;
    if (scrollId === "games") this.isGamesActive = true;
  },
  updated() {
    if (
      this.isGamesDataFetched &&
      this.isTournamentsDataFetched &&
      this.isDashboardRegionsDataFetched &&
      this.isFooterSponsorsDataFetched &&
      this.isMainEventsFetched
    )
      store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/containers/home.scss";
</style>
