<template>
  <div class="game-details-wrapper">
    <Header
      activeItem="games"
      :isSolidHeader="true"
      :setShowRegisterModal="setShowRegisterModal"
      :setShowLoginModal="setShowLoginModal"
    />
    <div class="game-details-wrapper__outside" v-if="showDetailsHero">
      <div
        class="game-details-wrapper__inside"
        v-if="
          gameDetails.images.img_cover_main !== null &&
            gameDetails.images.img_cover_main.length !== 0
        "
        :style="
          `backgroundImage: url(${gameDetails.images.img_cover_main[0].path})`
        "
      ></div>
    </div>
    <div class="game-details-wrapper__content" v-if="showDetailsHero">
      <div class="game-details-wrapper__content__breadcrumb">
        <a href="/">game</a>
        <span> > {{ gameDetails.title }}</span>
      </div>
      <div class="container">
        <div class="row">
          <div class="col game-details-wrapper__content__logo">
            <img
              v-if="gameDetails.images.img_logo !== null"
              :src="gameDetails.images.img_logo.path"
              :alt="gameDetails.title"
            />
          </div>
          <div class="col-9">
            <div class="row">
              <div
                id="description-container"
                class="col"
                v-html="gameDetails.description"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row game-details-wrapper__content__tournaments mb-5">
          <div class="col">
            Tournaments
          </div>
        </div>
        <MenuView :data="gameDetails.tournaments" :isGamesActive="false" />
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
import MenuView from "../../components/home/MenuView";
import LoginModal from "../../components/home/LoginModal";
import RegisterModal from "../../components/home/RegisterModal";
import Spinner from "../../shared/Spinner";
import redirectToNewTab from "../../helpers/RedirectToNewTab";

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
      gameDetails: state => state.games.gameDetailsData
    }),
    showDetailsHero() {
      return Object.keys(this.gameDetails).length !== 0;
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
      fetchGameDetails: types.games.actions.FETCH_GAME_DETAILS
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
    Spinner,
    MenuView
  },
  mounted() {
    this.fetchGameDetails(this.$router.history.current.params.gameId);
  },
  updated() {
    redirectToNewTab("description-container");
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/containers/games/game-details.scss";
</style>
