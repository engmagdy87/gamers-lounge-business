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
    <div class="tournament-details-wrapper__content" v-if="showDetailsHero">
      <div class="container">
        <div class="row mb-4 mb-md-0">
          <div class="col-12 col-lg-6 d-flex align-items-center">
            <div class="tournament-details-wrapper__content__breadcrumb">
              <a style="cursor:pointer;" @click="backTo">Tournaments</a>
              <span> > {{ tournamentDetails.initial_title }}</span>
            </div>
          </div>
          <div
            class="col-12 col-md-6 d-flex justify-content-end align-items-center"
          >
            <div
              class="tournament-details-wrapper__custom-btn-outside"
              v-if="showSponsors"
            >
              <a
                v-for="(sponsor, index) in formatSponsors"
                :key="index"
                @click="redirectTo(sponsor.link)"
              >
                <img
                  class="tournament-details-wrapper__sponsor"
                  v-if="
                    sponsor.images !== undefined &&
                      sponsor.images.img_logo !== null
                  "
                  :src="sponsor.images.img_logo.path"
                  :alt="sponsor.name"
                />
                <div v-else class="tournament-details-wrapper__divider"></div>
              </a>
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
            <Tabs :data="tournamentDetails" :redirectTo="redirectTo" />
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
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import types from "../../../store/types";
import Header from "../../shared/Header";
import LoginModal from "../../components/home/LoginModal";
import RegisterModal from "../../components/home/RegisterModal";
import Spinner from "../../shared/Spinner";
import Tabs from "../../shared/Tabs";
import { getUserCookie } from "../../helpers/CookieHelper";

export default {
  data() {
    return {
      showLoginModal: false,
      showRegisterModal: false,
      registerLink: ""
    };
  },
  computed: {
    ...mapGetters({
      isUserLoggedIn: types.user.getters.IS_USER_LOGGED_IN
    }),
    ...mapState({
      tournamentDetails: state => state.tournaments.tournamentDetailsData
    }),
    showDetailsHero() {
      return Object.keys(this.tournamentDetails).length !== 0;
    },
    showSponsors() {
      return (
        this.tournamentDetails.sponsors !== undefined &&
        Object.keys(this.tournamentDetails.sponsors).length !== 0
      );
    },
    formatSponsors() {
      const sponsors = [];
      let data = [];
      let nextData = [];
      const sponsorsData = this.tournamentDetails.sponsors;
      const types = Object.keys(sponsorsData);
      for (let i = 0; i < types.length; i++) {
        data = sponsorsData[types[i]];
        if (i < types.length) nextData = sponsorsData[types[i + 1]];

        data.forEach(sponsor => sponsors.push(sponsor));

        if (data.length > 0 && nextData.length > 0) sponsors.push({});
      }
      return sponsors;
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
      fetchTournamentRegisterLink: types.tournaments.actions.FETCH_REGISTER_LINK
    }),
    setShowLoginModal(value = false) {
      this.showLoginModal = value;
    },
    setShowRegisterModal(value = false) {
      this.showRegisterModal = value;
    },
    getLink: async function() {
      const result = await this.fetchTournamentRegisterLink(
        this.$router.history.current.params.tournamentId
      );
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
    LoginModal,
    RegisterModal,
    Spinner,
    Tabs
  },
  mounted() {
    this.fetchTournamentDetails(
      this.$router.history.current.params.tournamentId
    );
    this.getLink();
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/containers/tournaments/tournament-details.scss";
</style>
