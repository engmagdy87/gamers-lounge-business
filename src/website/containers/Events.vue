<template>
  <div class="events-wrapper">
    <Header
      activeItem="events"
      :isSolidHeader="true"
      :setShowRegisterModal="setShowRegisterModal"
      :setShowLoginModal="setShowLoginModal"
    />
    <div
      class="events-wrapper__outside"
      v-if="
        isMainEventsFetched &&
          isSubEventsFetched &&
          isCoverHomeEventsImageFetched
      "
    >
      <div
        class="events-wrapper__inside"
        v-if="coverHomeEventsImage !== null"
        :style="`backgroundImage: url(${coverHomeEventsImage.path})`"
      ></div>
    </div>
    <div
      class="events-wrapper__content"
      v-if="
        isMainEventsFetched &&
          isSubEventsFetched &&
          (mainEventsData.length !== 0 || subEventsData.length !== 0)
      "
      id="main-events"
    >
      <h2 v-if="mainEventsData.length !== 0">Main Events</h2>
      <VueSlickCarousel
        v-if="mainEventsData.length !== 0"
        :arrows="true"
        :slidesToShow="isThisDeviceSmart ? 1 : 4"
        :slidesToScroll="1"
        autoplay
        infinite
      >
        <MainEventCard
          v-for="(card, index) in mainEventsData"
          :key="index"
          :card="card"
        />
      </VueSlickCarousel>

      <h2 v-if="subEventsData.length !== 0">Sub Events</h2>
      <EventsMenuView
        v-if="subEventsData.length !== 0"
        route="events"
        :data="subEventsData"
      />
    </div>
    <h2
      style="color:white; text-align: center;margin-top: 10%;"
      v-if="
        isMainEventsFetched &&
          isSubEventsFetched &&
          (mainEventsData.length === 0 || subEventsData.length === 0)
      "
    >
      There are no events now
    </h2>
    <LoginModal
      :showFlag="showLoginModal"
      :setShowLoginModal="setShowLoginModal"
    />
    <RegisterModal
      :showFlag="showRegisterModal"
      :setShowRegisterModal="setShowRegisterModal"
    />
    <Spinner :smallLoader="false" />
    <Footer
      v-if="
        isMainEventsFetched &&
          isSubEventsFetched &&
          isCoverHomeEventsImageFetched
      "
    />
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import store from "../../store/index";
import types from "../../store/types";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import Spinner from "../shared/Spinner";
import MainEventCard from "../components/events/MainEventCard";
import LoginModal from "../components/home/LoginModal";
import RegisterModal from "../components/home/RegisterModal";
import EventsMenuView from "../components/events/EventsMenuView";
import isDeviceSmart from "../helpers/DetectIsDeviceSmart";

import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  data() {
    return {
      showLoginModal: false,
      showRegisterModal: false
    };
  },
  computed: {
    ...mapGetters({
      isUserLoggedIn: types.user.getters.IS_USER_LOGGED_IN
    }),
    ...mapState({
      mainEventsData: state => state.events.mainEventsData,
      subEventsData: state => state.events.subEventsData,
      isMainEventsFetched: state => state.events.isMainEventsFetched,
      isSubEventsFetched: state => state.events.isSubEventsFetched,
      isCoverHomeEventsImageFetched: state =>
        state.summits.isCoverHomeEventsImageFetched,
      coverHomeEventsImage: state => state.summits.coverHomeEventsImage
    }),
    isThisDeviceSmart() {
      return isDeviceSmart();
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
      fetchMainEvents: types.events.actions.FETCH_MAIN_EVENTS,
      fetchSubEvents: types.events.actions.FETCH_SUB_EVENTS,
      fetchCoverHomeEventsImage:
        types.summits.actions.FETCH_COVER_HOME_EVENTS_IMAGE
    }),
    setShowLoginModal(value = false) {
      this.showLoginModal = value;
    },
    setShowRegisterModal(value = false) {
      this.showRegisterModal = value;
    }
  },
  components: {
    Header,
    LoginModal,
    RegisterModal,
    Footer,
    Spinner,
    MainEventCard,
    VueSlickCarousel,
    EventsMenuView
  },
  mounted() {
    store.commit(types.home.mutations.SET_SPINNER_FLAG, true);
    this.fetchMainEvents();
    this.fetchSubEvents();
    this.fetchCoverHomeEventsImage();
  },
  updated() {
    if (
      this.isMainEventsFetched &&
      this.isSubEventsFetched &&
      this.isCoverHomeEventsImageFetched
    )
      store.commit(types.home.mutations.SET_SPINNER_FLAG, false);

    if (this.isRandomPopupDataFetched)
      this.randomPopupData = this.randomPopup(POPUPS_PLACES.EVENTS);
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/containers/events.scss";
</style>
