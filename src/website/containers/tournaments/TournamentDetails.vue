<template>
  <div class="tournament-details-wrapper">
    <Header
      activeItem="tournaments"
      :isSolidHeader="true"
      :setShowRegisterModal="setShowRegisterModal"
      :setShowLoginModal="setShowLoginModal"
    />
    <div class="tournament-details-wrapper__outside" v-if="showDetailsHero">
      <div
        class="tournament-details-wrapper__inside"
        v-if="
          tournamentDetails.images.img_cover_main !== null &&
            tournamentDetails.images.img_cover_main.length !== 0
        "
        :style="
          `backgroundImage: url(${tournamentDetails.images.img_cover_main[0].path})`
        "
      >
        <img
          v-if="
            tournamentDetails.has_cover_over &&
              tournamentDetails.images.img_cover_over !== null
          "
          :src="tournamentDetails.images.img_cover_over.path"
        />
      </div>
    </div>
    <div class="tournament-details-wrapper__content" v-if="showDetailsHero">
      <div class="container">
        <div class="row mb-4 mb-md-0">
          <div class="col-12 col-lg-8">
            <div class="tournament-details-wrapper__content__breadcrumb">
              <a href="/">Tournament</a>
              <span> > {{ tournamentDetails.initial_title }}</span>
            </div>
          </div>
          <div
            class="col-12 col-lg-4 d-flex align-items-center justify-content-end tournament-details-wrapper__custom-button-wrapper"
            role="button"
          >
            <div
              class="tournament-details-wrapper__custom-button-wrapper__outside"
              @click="redirectTo"
            >
              Register now
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <Tabs :data="tournamentDetails" />
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
    redirectTo() {
      const token = getUserCookie();
      if (!token)
        this.notifyVue("Please login to register to tournament", "danger");
      else if (
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
