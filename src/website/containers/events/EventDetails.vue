<template>
  <div class="event-details-wrapper">
    <Header
      activeItem="events"
      :isSolidHeader="true"
      :setShowRegisterModal="setShowRegisterModal"
      :setShowLoginModal="setShowLoginModal"
    />
    <div
      :class="[
        'event-details-wrapper__outside',
        eventDetails.cover_type === 'img'
          ? 'event-details-wrapper__outside--hexa-shape'
          : 'event-details-wrapper__outside--none'
      ]"
      v-if="showDetailsHero"
    >
      <div
        :class="[
          'event-details-wrapper__inside',
          eventDetails.cover_type === 'img'
            ? 'event-details-wrapper__inside--hexa-shape'
            : 'event-details-wrapper__outside--none'
        ]"
        v-if="
          (eventDetails.images.img_cover_main !== null &&
            eventDetails.images.img_cover_main.length !== 0) ||
            eventDetails.videos.vid_cover_main !== null
        "
        :style="
          eventDetails.cover_type === 'img'
            ? `backgroundImage: url(${eventDetails.images.img_cover_main[0].path})`
            : ''
        "
      >
        <img
          v-if="
            eventDetails.has_cover_over &&
              eventDetails.images.img_cover_over !== null
          "
          :src="eventDetails.images.img_cover_over.path"
        />
        <video
          autoplay
          muted
          loop
          id="myVideo"
          v-if="eventDetails.cover_type !== 'img'"
          style="width: 100%;"
        >
          <source
            :src="eventDetails.videos.vid_cover_main.path"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
    <div
      class="event-details-wrapper__content__custom-btn-outside"
      v-if="showSponsors"
    >
      <div v-for="(sponsorType, index) in formatSponsorsTypes" :key="index">
        <span v-if="sponsorType !== 'divider'">
          <a
            v-for="(sponsor, i) in eventDetails.sponsors[sponsorType]"
            :key="i"
            @click="redirectTo(sponsor.link)"
          >
            <img
              :class="[
                `event-details-wrapper__content__sponsor ${getCssClassForSponsor(
                  sponsorType
                )}`
              ]"
              :src="sponsor.images.img_logo.path"
              :alt="sponsor.name"
            />
          </a>
        </span>
        <div v-else class="event-details-wrapper__content__divider"></div>
      </div>
    </div>
    <div class="event-details-wrapper__content" v-if="showDetailsHero">
      <div class="row">
        <div class="col-12 d-flex align-items-center">
          <div class="event-details-wrapper__content__breadcrumb">
            <a
              v-for="(route, i) in eventShortDetails.tree"
              :href="route.path"
              :key="i"
              >{{ route.name }} >
            </a>
            <span>{{ eventDetails.initial_title }}</span>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-12 col-md-3 event-details-wrapper__content__logo">
            <img
              v-if="eventDetails.images.img_logo !== null"
              :src="eventDetails.images.img_logo.path"
              :alt="eventDetails.initial_title"
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
              v-html="eventDetails.initial_description"
              ref="descriptionText"
              v-if="eventDetails.initial_description !== undefined"
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
      <div class="container">
        <div
          class="row event-details-wrapper__content__tournaments mb-5 mb-sm-3"
        >
          <div
            class="col-12 order-2 order-md-1 col-md-6 event-details-wrapper__content__tournaments__title"
          >
            Event Tournaments
          </div>
        </div>
      </div>
      <EventsMenuView
        route="event-details"
        :data="eventDetails.tournaments"
        :tree="getTree"
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
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import store from "../../../store/index";
import types from "../../../store/types";
import Header from "../../shared/Header";
import EventsMenuView from "../../components/events/EventsMenuView";
import LoginModal from "../../components/home/LoginModal";
import RegisterModal from "../../components/home/RegisterModal";
import Spinner from "../../shared/Spinner";
import redirectToNewTab from "../../helpers/RedirectToNewTab";
import { setEventCookie, getEventCookie } from "../../helpers/CookieHelper";

export default {
  data() {
    return {
      showLoginModal: false,
      showRegisterModal: false,
      showMoreText: false,
      setShowMoreTextFlag: false,
      eventShortDetails: {}
    };
  },
  computed: {
    ...mapGetters({
      isUserLoggedIn: types.user.getters.IS_USER_LOGGED_IN
    }),
    ...mapState({
      eventDetails: state => state.events.eventDetails,
      eventTree: state => state.navigationTree.eventTree
    }),
    showDetailsHero() {
      return Object.keys(this.eventDetails).length !== 0;
    },
    showSponsors() {
      return (
        this.eventDetails.sponsors !== undefined &&
        Object.keys(this.eventDetails.sponsors).length !== 0
      );
    },
    formatSponsorsTypes() {
      let data = [];
      let nextData = [];
      const sponsorsData = this.eventDetails.sponsors;
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
      if (Object.keys(this.eventTree).length > 0)
        tree = [...tree, ...this.eventTree.tree];
      else tree = [...tree, ...this.$router.history.current.params.data.tree];
      tree = [
        ...tree,
        {
          name: this.eventDetails.initial_title,
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
      fetchEventDetails: types.events.actions.FETCH_EVENT_DETAILS
    }),
    setShowLoginModal(value = false) {
      this.showLoginModal = value;
    },
    setShowRegisterModal(value = false) {
      this.showRegisterModal = value;
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
    }
  },
  components: {
    Header,
    LoginModal,
    RegisterModal,
    Spinner,
    EventsMenuView
  },
  mounted() {
    const eventCookieData = getEventCookie();
    if (this.$router.history.current.params.data !== undefined) {
      this.eventShortDetails = this.$router.history.current.params.data;
      store.commit(
        types.navigationTree.mutations.SET_EVENT_TREE,
        this.eventShortDetails
      );
      setEventCookie(this.eventShortDetails);
    } else if (Object.keys(this.eventTree).length > 0) {
      this.eventShortDetails = this.eventTree;
    } else if (eventCookieData !== undefined) {
      this.eventShortDetails = eventCookieData;
      store.commit(
        types.navigationTree.mutations.SET_EVENT_TREE,
        this.eventShortDetails
      );
    } else if (this.$router.history.current.params.data === undefined)
      this.$router.push("/");

    this.fetchEventDetails(this.eventShortDetails.id);
  },
  updated() {
    redirectToNewTab("description-container");
    this.$nextTick(() => {
      if (this.setShowMoreTextFlag === null) {
        this.setShowMoreTextFlag =
          this.$refs.descriptionText.clientHeight > 200;
      }
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/containers/events/event-details.scss";
</style>
