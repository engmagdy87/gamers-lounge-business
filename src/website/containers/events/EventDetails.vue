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
    <div class="event-details-wrapper__content" v-if="showDetailsHero">
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="event-details-wrapper__content__breadcrumb">
            <a href="/events">Event</a>
            <span> > {{ eventDetails.initial_title }}</span>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div
            class="d-flex justify-content-end align-items-center mb-4"
            v-if="eventDetails.sponsors !== undefined"
          >
            <a
              v-for="(sponsor, index) in eventDetails.sponsors.main"
              :key="index"
              @click="redirectTo(sponsor.link)"
              style="cursor: pointer;"
            >
              <img
                class="event-details-wrapper__content__main-sponsor"
                v-if="sponsor.images.img_logo !== null"
                :src="sponsor.images.img_logo.path"
                :alt="sponsor.name"
              />
            </a>
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
              id="description-container"
              v-html="eventDetails.initial_description"
              style="height:200px;overflow: hidden;"
              ref="descriptionText"
            ></div>
            <span
              @click="setHeightOfDescription"
              style="display: block;padding:10px 15px;cursor:pointer;"
              >{{ showMore ? "see less..." : "see more..." }}</span
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
          <div
            class="col-12 order-1 order-md-2 col-md-6 d-flex justify-content-end align-items-center"
          >
            <div class="event-details-wrapper__content__custom-btn-outside">
              <div
                class="event-details-wrapper__content__custom-btn-inside"
                v-if="eventDetails.sponsors !== undefined"
              >
                <a
                  v-for="(sponsor, index) in eventDetails.sponsors.sub"
                  :key="index"
                  @click="redirectTo(sponsor.link)"
                >
                  <img
                    class="event-details-wrapper__content__sub-sponsor"
                    v-if="sponsor.images.img_logo !== null"
                    :src="sponsor.images.img_logo.path"
                    :alt="sponsor.name"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EventsMenuView route="event-details" :data="eventDetails.tournaments" />
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
import types from "../../../store/types";
import Header from "../../shared/Header";
import EventsMenuView from "../../components/events/EventsMenuView";
import LoginModal from "../../components/home/LoginModal";
import RegisterModal from "../../components/home/RegisterModal";
import Spinner from "../../shared/Spinner";
import redirectToNewTab from "../../helpers/RedirectToNewTab";

export default {
  data() {
    return {
      showLoginModal: false,
      showRegisterModal: false,
      showMore: false
    };
  },
  computed: {
    ...mapGetters({
      isUserLoggedIn: types.user.getters.IS_USER_LOGGED_IN
    }),
    ...mapState({
      eventDetails: state => state.events.eventDetails
    }),
    showDetailsHero() {
      return Object.keys(this.eventDetails).length !== 0;
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
      if (this.showMore) {
        height = "200px";
        this.showMore = false;
      } else {
        height = "100%";
        this.showMore = true;
      }
      this.$refs.descriptionText.style.height = height;
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
    this.fetchEventDetails(this.$router.history.current.params.eventId);
  },
  updated() {
    redirectToNewTab("description-container");
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/containers/events/event-details.scss";
</style>
