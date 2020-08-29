<template>
  <div class="tournament-details-wrapper">
    <Header
      activeItem="tournaments"
      :isSolidHeader="true"
      :setShowRegisterModal="setShowRegisterModal"
      :setShowLoginModal="setShowLoginModal"
    />
    <div
      :class="[
        'tournament-details-wrapper__outside',
        tournamentDetails.cover_type === 'img'
          ? 'tournament-details-wrapper__outside--hexa-shape'
          : 'tournament-details-wrapper__outside--none'
      ]"
      v-if="showDetailsHero"
    >
      <div
        class="tournament-details-wrapper__inside"
        :class="[
          'tournament-details-wrapper__inside',
          tournamentDetails.cover_type === 'img'
            ? 'tournament-details-wrapper__inside--hexa-shape'
            : 'tournament-details-wrapper__inside--none'
        ]"
        v-if="
          (tournamentDetails.images.img_cover_main !== null &&
            tournamentDetails.images.img_cover_main.length !== 0) ||
            tournamentDetails.videos.vid_cover_main !== null
        "
        :style="
          tournamentDetails.cover_type === 'img'
            ? `backgroundImage: url(${tournamentDetails.images.img_cover_main[0].path})`
            : ''
        "
      >
        <img
          v-if="
            tournamentDetails.has_cover_over &&
              tournamentDetails.images.img_cover_over !== null
          "
          :src="tournamentDetails.images.img_cover_over.path"
        />
        <video
          autoplay
          muted
          loop
          id="myVideo"
          v-if="
            tournamentDetails.cover_type !== 'img' &&
              tournamentDetails.videos.vid_cover_main !== null
          "
          style="width: 100%;"
        >
          <source
            :src="tournamentDetails.videos.vid_cover_main.path"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
    <div
      class="tournament-details-wrapper__custom-btn-outside"
      v-if="showSponsors"
    >
      <a
        v-for="(sponsor, i) in tournamentDetails.sponsors.main"
        :key="`main${i}`"
        @click="goToSponor(sponsor.link)"
      >
        <img
          :class="[
            `tournament-details-wrapper__custom-btn-outside__sponsor ${getCssClassForSponsor(
              'main'
            )}`
          ]"
          :src="sponsor.images.img_logo.path"
          :alt="sponsor.name"
        />
      </a>
      <span
        class="tournament-details-wrapper__custom-btn-outside__divider"
        v-if="
          tournamentDetails.sponsors.main.length !== 0 &&
            tournamentDetails.sponsors.sub.length !== 0
        "
      ></span>
      <a
        v-for="(sponsor, i) in tournamentDetails.sponsors.sub"
        :key="`sub${i}`"
        @click="goToSponor(sponsor.link)"
      >
        <img
          :class="[
            `tournament-details-wrapper__custom-btn-outside__sponsor ${getCssClassForSponsor(
              'sub'
            )}`
          ]"
          :src="sponsor.images.img_logo.path"
          :alt="sponsor.name"
        />
      </a>
      <span
        class="tournament-details-wrapper__custom-btn-outside__divider"
        v-if="
          tournamentDetails.sponsors.sub.length !== 0 &&
            tournamentDetails.sponsors.extra_sub.length !== 0
        "
      ></span>
      <a
        v-for="(sponsor, i) in tournamentDetails.sponsors.extra_sub"
        :key="`extra_sub${i}`"
        @click="goToSponor(sponsor.link)"
      >
        <img
          :class="[
            `tournament-details-wrapper__custom-btn-outside__sponsor ${getCssClassForSponsor(
              'extra_sub'
            )}`
          ]"
          :src="sponsor.images.img_logo.path"
          :alt="sponsor.name"
        />
      </a>
    </div>
    <div class="tournament-details-wrapper__content" v-if="showDetailsHero">
      <div class="container">
        <div class="row mb-4 mb-md-0">
          <div class="col-12 d-flex align-items-center">
            <div class="tournament-details-wrapper__content__breadcrumb">
              <a
                v-for="(route, i) in tournamentShortDetails.tree"
                :href="route.path"
                :key="i"
                >{{ route.name }} >
              </a>
              <span>{{ tournamentDetails.initial_title }}</span>
            </div>
          </div>
          <div
            class="col-12 col-md-0 mt-4 tournament-details-wrapper__custom-button-wrapper"
            role="button"
          >
            <div
              class="tournament-details-wrapper__custom-button-wrapper__outside"
              @click="redirectTo"
            >
              REGISTER
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col mt-3 mt-md-5">
            <TournamentTabs
              :data="tournamentDetails"
              :redirectTo="redirectTo"
            />
          </div>
        </div>
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
    <Spinner :smallLoader="false" />
    <Footer v-if="showDetailsHero" />
    <Popup :data="randomPopupData" v-if="randomPopupData !== null" />
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import store from "../../../store/index";
import types from "../../../store/types";
import Header from "../../shared/Header";
import Footer from "../../shared/Footer";
import LoginModal from "../../components/home/LoginModal";
import RegisterModal from "../../components/home/RegisterModal";
import Spinner from "../../shared/Spinner";
import TournamentTabs from "../../shared/TournamentTabs";
import {
  getUserCookie,
  setTournamentCookie,
  getTournamentCookie
} from "../../helpers/CookieHelper";
import Popup from "../../shared/Popup";
import * as POPUPS_PLACES from "../../constants/PopupsPlaces";

export default {
  data() {
    return {
      showLoginModal: false,
      showRegisterModal: false,
      registerLink: "",
      tournamentShortDetails: {},
      randomPopupData: {}
    };
  },
  computed: {
    ...mapGetters({
      isUserLoggedIn: types.user.getters.IS_USER_LOGGED_IN,
      randomPopup: types.popups.getters.GET_POPUP
    }),
    ...mapState({
      tournamentDetails: state => state.tournaments.tournamentDetailsData,
      tournamentTree: state => state.navigationTree.tournamentTree,
      isRandomPopupDataFetched: state => state.popups.isRandomPopupDataFetched
    }),
    showDetailsHero() {
      return Object.keys(this.tournamentDetails).length !== 0;
    },
    showSponsors() {
      return (
        this.tournamentDetails.sponsors !== undefined &&
        this.tournamentDetails.show_sponsors &&
        (Object.keys(this.tournamentDetails.sponsors.main).length !== 0 ||
          Object.keys(this.tournamentDetails.sponsors.sub).length !== 0 ||
          Object.keys(this.tournamentDetails.sponsors.extra_sub).length !== 0)
      );
    },
    formatSponsorsTypes() {
      let data = [];
      let nextData = [];
      const sponsorsData = this.tournamentDetails.sponsors;
      const types = Object.keys(sponsorsData);
      let newTypes = [];

      for (let i = 0; i < types.length; i++) {
        if (i < types.length - 1) nextData = sponsorsData[types[i + 1]];
        if (i < types.length - 1 && nextData.length > 0)
          newTypes = [...newTypes, types[i], "divider"];
        else newTypes = [...newTypes, types[i]];
      }
      return newTypes;
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
      fetchTournamentDetails:
        types.tournaments.actions.FETCH_TOURNAMENTS_DETAILS,
      fetchTournamentRegisterLink:
        types.tournaments.actions.FETCH_REGISTER_LINK,
      fetchRandomPopup: types.popups.actions.FETCH_RANDOM_POPUPS
    }),
    setShowLoginModal(value = false) {
      this.showLoginModal = value;
    },
    setShowRegisterModal(value = false) {
      this.showRegisterModal = value;
    },
    getLink: async function(tournamentId) {
      const result = await this.fetchTournamentRegisterLink(tournamentId);
      this.registerLink = result;
    },
    backTo() {
      const { previousPath } = this.$router.history.current.params;
      if (previousPath === "/" || !previousPath)
        this.$router.push({ name: "home", hash: "#tournaments" });
      else this.$router.push({ path: previousPath });
    },
    redirectTo() {
      // Temp: Allow guests to register in tournaments for now
      // const token = getUserCookie();
      // if (!token)
      //   this.notifyVue("Please login to register to tournament", "danger");
      if (
        this.tournamentDetails.is_register_available &&
        this.tournamentDetails.register_status === "open"
      )
        window.open(this.registerLink, "_blank");
      else if (this.tournamentDetails.register_status === "soon")
        this.notifyVue("Register coming soon", "warning");
      else if (this.tournamentDetails.register_status === "closed")
        this.notifyVue("Register was closed", "danger");
    },
    goToSponor(url) {
      if (url.includes("http")) window.open(url, "_blank");
      else window.open(`http://${url}`, "_blank");
    },
    notifyVue(message, color) {
      this.$notifications.notify({
        message: `<span>${message}</span>`,
        horizontalAlign: "right",
        verticalAlign: "top",
        type: color
      });
    },
    getCssClassForSponsor(sponsorType) {
      if (sponsorType === "main")
        return "tournament-details-wrapper__custom-btn-outside__sponsor--main";
      if (sponsorType === "sub")
        return "tournament-details-wrapper__custom-btn-outside__sponsor--sub";
      if (sponsorType === "extra_sub")
        return "tournament-details-wrapper__custom-btn-outside__sponsor--extra_sub";
    }
  },
  components: {
    Header,
    Footer,
    LoginModal,
    RegisterModal,
    Spinner,
    TournamentTabs,
    Popup
  },
  mounted() {
    const tournamentCookieData = getTournamentCookie();
    if (this.$router.history.current.params.data !== undefined) {
      this.tournamentShortDetails = this.$router.history.current.params.data;
      store.commit(
        types.navigationTree.mutations.SET_TOURNAMENT_TREE,
        this.tournamentShortDetails
      );
      setTournamentCookie(this.tournamentShortDetails);
    } else if (Object.keys(this.tournamentTree).length > 0) {
      this.tournamentShortDetails = this.tournamentTree;
    } else if (tournamentCookieData !== undefined) {
      this.tournamentShortDetails = tournamentCookieData;
      store.commit(
        types.navigationTree.mutations.SET_TOURNAMENT_TREE,
        this.tournamentShortDetails
      );
    }
    const tournamentId = this.$router.history.current.params.tournamentName.split(
      "-"
    )[0];
    this.fetchTournamentDetails(tournamentId);
    this.getLink(tournamentId);
    this.fetchRandomPopup();
  },
  updated() {
    if (this.isRandomPopupDataFetched)
      this.randomPopupData = this.randomPopup(POPUPS_PLACES.TOURNAMENT_DETAILS);
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/containers/tournaments/tournament-details.scss";
</style>
