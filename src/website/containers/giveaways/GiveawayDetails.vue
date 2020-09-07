<template>
  <div class="event-details-wrapper">
    <Header
      activeItem="giveaways"
      :isSolidHeader="true"
      :setShowRegisterModal="setShowRegisterModal"
      :setShowLoginModal="setShowLoginModal"
    />
    <div
      :class="[
        'event-details-wrapper__outside',
        giveawayDetails.cover_type === 'img'
          ? 'event-details-wrapper__outside--hexa-shape'
          : 'event-details-wrapper__outside--none'
      ]"
      v-if="showDetailsHero"
    >
      <div
        :class="[
          'event-details-wrapper__inside',
          giveawayDetails.cover_type === 'img'
            ? 'event-details-wrapper__inside--hexa-shape'
            : 'event-details-wrapper__outside--none'
        ]"
        v-if="
          (giveawayDetails.images.img_cover_main !== null &&
            giveawayDetails.images.img_cover_main.length !== 0) ||
            giveawayDetails.videos.vid_cover_main !== null
        "
        :style="
          giveawayDetails.cover_type === 'img'
            ? `backgroundImage: url(${giveawayDetails.images.img_cover_main[0].path})`
            : ''
        "
      >
        <img
          v-if="
            giveawayDetails.has_cover_over &&
              giveawayDetails.images.img_cover_over !== null
          "
          :src="giveawayDetails.images.img_cover_over.path"
        />
        <video
          autoplay
          muted
          loop
          id="myVideo"
          v-if="giveawayDetails.cover_type !== 'img'"
          style="width: 100%;"
        >
          <source
            :src="giveawayDetails.videos.vid_cover_main.path"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
    <div
      class="event-details-wrapper__content__custom-btn-outside"
      v-if="showSponsors"
    >
      <a
        v-for="(sponsor, i) in giveawayDetails.sponsors.main"
        :key="`main${i}`"
        @click="goToSponor(sponsor.link)"
      >
        <img
          :class="[
            `event-details-wrapper__content__sponsor ${getCssClassForSponsor(
              'main'
            )}`
          ]"
          :src="sponsor.images.img_logo.path"
          :alt="sponsor.name"
        />
      </a>
      <span
        class="event-details-wrapper__content__divider"
        v-if="
          giveawayDetails.sponsors.main.length !== 0 &&
            giveawayDetails.sponsors.sub.length !== 0
        "
      ></span>
      <a
        v-for="(sponsor, i) in giveawayDetails.sponsors.sub"
        :key="`sub${i}`"
        @click="goToSponor(sponsor.link)"
      >
        <img
          :class="[
            `event-details-wrapper__content__sponsor ${getCssClassForSponsor(
              'sub'
            )}`
          ]"
          :src="sponsor.images.img_logo.path"
          :alt="sponsor.name"
        />
      </a>
      <span
        class="event-details-wrapper__content__divider"
        v-if="
          giveawayDetails.sponsors.sub.length !== 0 &&
            giveawayDetails.sponsors.extra_sub.length !== 0
        "
      ></span>
      <a
        v-for="(sponsor, i) in giveawayDetails.sponsors.extra_sub"
        :key="`extra_sub${i}`"
        @click="goToSponor(sponsor.link)"
      >
        <img
          :class="[
            `event-details-wrapper__content__sponsor ${getCssClassForSponsor(
              'extra_sub'
            )}`
          ]"
          :src="sponsor.images.img_logo.path"
          :alt="sponsor.name"
        />
      </a>
    </div>
    <div class="event-details-wrapper__content" v-if="showDetailsHero">
      <div class="row">
        <div
          class="col-12 order-2 order-md-1 col-md-8 d-flex align-items-center"
        >
          <div class="event-details-wrapper__content__breadcrumb">
            <a
              v-for="(route, i) in giveawayShortDetails.tree"
              :href="route.path"
              :key="i"
              >{{ route.name }} >
            </a>
            <span>{{ giveawayDetails.title }}</span>
          </div>
        </div>
        <div
          class="col-12 order-1 order-md-2 col-md-4 d-flex align-items-center justify-content-end"
        >
          <div
            class="event-details-wrapper__custom-button-wrapper"
            role="button"
          >
            <div
              class="event-details-wrapper__custom-button-wrapper__outside"
              @click="registerAction"
            >
              REGISTER
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-12 col-md-3 event-details-wrapper__content__logo">
            <img
              v-if="giveawayDetails.images.img_logo !== null"
              :src="giveawayDetails.images.img_logo.path"
              :alt="giveawayDetails.title"
            />
          </div>
          <div class="col-12 col-md-9">
            <div
              :class="[
                'description-container event-details-wrapper__content__description',
                setShowMoreTextFlag
                  ? 'description-container--limit'
                  : 'description-container--expand'
              ]"
              v-html="giveawayDetails.description"
              ref="descriptionText"
              v-if="giveawayDetails.description !== undefined"
            ></div>
            <span
              @click="setHeightOfDescription"
              style="padding:10px 15px;cursor:pointer;"
              v-if="setShowMoreTextFlag"
              >{{ showMoreText ? "see less..." : "see more..." }}</span
            >
          </div>
        </div>
      </div>
      <!-- <div class="container">
        <div
          class="row event-details-wrapper__content__tournaments mb-5 mb-sm-3"
        >
          <div
            class="col-12 order-2 order-md-1 col-md-6 event-details-wrapper__content__tournaments__title"
          >
            Giveaway Tournaments
          </div>
        </div>
      </div>
      <GiveawaysMenuView
        v-if="isGiveawayTournamentsFetched"
        route="giveaway-details"
        :data="giveawaysTournaments"
        :tree="getTree"
      /> -->
    </div>
    <LoginModal
      :showFlag="showLoginModal"
      :setShowLoginModal="setShowLoginModal"
    />
    <RegisterModal
      :showFlag="showRegisterModal"
      :setShowRegisterModal="setShowRegisterModal"
    />
    <RegisterGiveawayModal
      :showFlag="showRegisterGiveawayModal"
      :setShowRegisterGiveawayModal="setShowRegisterGiveawayModal"
      :questions="giveawayDetails.register_questions"
      :giveawayId="giveawayDetails.id"
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
import GiveawaysMenuView from "../../components/giveaways/GiveawaysMenuView";
import LoginModal from "../../components/home/LoginModal";
import RegisterModal from "../../components/home/RegisterModal";
import RegisterGiveawayModal from "../../components/giveaways/RegisterGiveawayModal";
import Spinner from "../../shared/Spinner";
import redirectToNewTab from "../../helpers/RedirectToNewTab";
import {
  setGiveawayCookie,
  getGiveawayCookie,
  getUserCookie
} from "../../helpers/CookieHelper";
import Popup from "../../shared/Popup";
import * as POPUPS_PLACES from "../../constants/PopupsPlaces";

export default {
  data() {
    return {
      showLoginModal: false,
      showRegisterModal: false,
      showRegisterGiveawayModal: false,
      showMoreText: false,
      setShowMoreTextFlag: false,
      giveawayShortDetails: {},
      randomPopupData: {}
    };
  },
  computed: {
    ...mapGetters({
      isUserLoggedIn: types.user.getters.IS_USER_LOGGED_IN,
      randomPopup: types.popups.getters.GET_POPUP
    }),
    ...mapState({
      giveawayDetails: state => state.giveaways.giveawayDetails,
      giveawaysTournaments: state => state.giveaways.giveawaysTournaments,
      isGiveawayTournamentsFetched: state =>
        state.giveaways.isGiveawayTournamentsFetched,
      isRegisterAvailableInGiveawayFlag: state =>
        state.giveaways.isRegisterAvailableInGiveawayFlag,
      isRegisterAvailableInGiveawayFetched: state =>
        state.giveaways.isRegisterAvailableInGiveawayFetched,
      giveawayTree: state => state.navigationTree.giveawayTree,
      amIRegisteredInGiveawayFlag: state =>
        state.giveaways.amIRegisteredInGiveawayFlag,
      isRandomPopupDataFetched: state => state.popups.isRandomPopupDataFetched
    }),
    showDetailsHero() {
      return Object.keys(this.giveawayDetails).length !== 0;
    },
    showSponsors() {
      return (
        this.giveawayDetails.sponsors !== undefined &&
        this.giveawayDetails.show_sponsors &&
        (Object.keys(this.giveawayDetails.sponsors.main).length !== 0 ||
          Object.keys(this.giveawayDetails.sponsors.sub).length !== 0 ||
          Object.keys(this.giveawayDetails.sponsors.extra_sub).length !== 0)
      );
    },
    formatSponsorsTypes() {
      let data = [];
      let nextData = [];
      const sponsorsData = this.giveawayDetails.sponsors;
      const types = Object.keys(sponsorsData);
      let newTypes = [];

      for (let i = 0; i < types.length; i++) {
        if (i < types.length - 1) nextData = sponsorsData[types[i + 1]];
        if (i < types.length - 1 && nextData.length > 0)
          newTypes = [...newTypes, types[i], "divider"];
        else newTypes = [...newTypes, types[i]];
      }
      return newTypes;
    },
    getTree() {
      let tree = [];
      if (Object.keys(this.giveawayTree).length > 0)
        tree = [...tree, ...this.giveawayTree.tree];
      else tree = [...tree, ...this.$router.history.current.params.data.tree];
      tree = [
        ...tree,
        {
          name: this.giveawayDetails.title,
          path: this.$router.history.current.path
        }
      ];
      return tree;
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
      fetchGiveawayDetails: types.giveaways.actions.FETCH_GIVEAWAY_DETAILS,
      fetchIsRegisterAvailableInGiveaway:
        types.giveaways.actions.FETCH_IS_REGISTER_AVAILABLE_IN_GIVEAWAY,
      fetchGiveawayTournaments:
        types.giveaways.actions.FETCH_GIVEAWAY_TOURNAMENTS,
      fetchAmIRegisteredGiveawaysImage:
        types.giveaways.actions.FETCH_AM_I_REGISTERED_IN_GIVEAWAY,
      fetchRandomPopup: types.popups.actions.FETCH_RANDOM_POPUPS
    }),
    setShowLoginModal(value = false) {
      this.showLoginModal = value;
    },
    setShowRegisterModal(value = false) {
      this.showRegisterModal = value;
    },
    setShowRegisterGiveawayModal(value = false) {
      this.showRegisterGiveawayModal = value;
    },
    redirectTo(url) {
      if (url.includes("http")) window.open(url, "_blank");
      else window.open(`http://${url}`, "_blank");
    },
    setHeightOfDescription() {
      let height = "";
      if (this.showMoreText) {
        height = "200px";
        this.showMoreText = false;
      } else {
        height = "100%";
        this.showMoreText = true;
      }
      this.$refs.descriptionText.style.height = height;
    },
    getCssClassForSponsor(sponsorType) {
      if (sponsorType === "main")
        return "event-details-wrapper__content__sponsor--main";
      if (sponsorType === "sub")
        return "event-details-wrapper__content__sponsor--sub";
      if (sponsorType === "extra_sub")
        return "event-details-wrapper__content__sponsor--extra_sub";
    },
    registerAction() {
      const token = getUserCookie();
      if (this.giveawayDetails.is_external)
        window.open(this.giveawayDetails.external_link, "_blank");
      else if (!token && !this.giveawayDetails.is_external)
        this.notifyVue("Please login for registration", "warning");
      else if (
        !(
          this.isRegisterAvailableInGiveawayFetched &&
          this.isRegisterAvailableInGiveawayFlag
        )
      )
        this.notifyVue("Register is closed", "warning");
      else if (this.amIRegisteredInGiveawayFlag)
        this.notifyVue("You are already registered", "danger");
      else this.setShowRegisterGiveawayModal(true);
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
    }
  },
  components: {
    Header,
    Footer,
    LoginModal,
    RegisterModal,
    RegisterGiveawayModal,
    Spinner,
    GiveawaysMenuView,
    Popup
  },
  mounted() {
    const giveawayCookieData = getGiveawayCookie();
    if (this.$router.history.current.params.data !== undefined) {
      this.giveawayShortDetails = this.$router.history.current.params.data;
      store.commit(
        types.navigationTree.mutations.SET_GIVEAWAY_TREE,
        this.giveawayShortDetails
      );
      setGiveawayCookie(this.giveawayShortDetails);
    } else if (Object.keys(this.giveawayTree).length > 0) {
      this.giveawayShortDetails = this.giveawayTree;
    } else if (giveawayCookieData !== undefined) {
      this.giveawayShortDetails = giveawayCookieData;
      store.commit(
        types.navigationTree.mutations.SET_GIVEAWAY_TREE,
        this.giveawayShortDetails
      );
    }

    const giveawayId = this.$router.history.current.params.giveawayName.split(
      "-"
    )[0];

    this.fetchGiveawayDetails(giveawayId);
    this.fetchGiveawayTournaments(giveawayId);
    this.fetchAmIRegisteredGiveawaysImage(giveawayId);
    this.fetchIsRegisterAvailableInGiveaway(giveawayId);
    this.fetchRandomPopup();
  },
  updated() {
    redirectToNewTab("description-container");
    this.$nextTick(() => {
      if (this.setShowMoreTextFlag === null) {
        this.setShowMoreTextFlag =
          this.$refs.descriptionText.clientHeight > 200;
      }
    });
    if (this.isRandomPopupDataFetched)
      this.randomPopupData = this.randomPopup(POPUPS_PLACES.GIVEAWAY_DETAILS);
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/containers/events/event-details.scss";
</style>
