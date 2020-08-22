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
        <a style="cursor:pointer;" @click="backTo">Games > </a>
        <span>{{ gameDetails.title }}</span>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-3 game-details-wrapper__content__logo">
            <img
              v-if="gameDetails.images.img_logo !== null"
              :src="gameDetails.images.img_logo.path"
              :alt="gameDetails.title"
            />
          </div>
          <div class="col-12 col-lg-9">
            <div class="row">
              <div
                class="col description-container game-details-wrapper__content__description"
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
        <MenuView
          :data="gameDetails.tournaments"
          :isGamesActive="false"
          :tree="newTree"
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
    <Spinner :smallLoader="false" />
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import store from "../../../store/index";
import types from "../../../store/types";
import Header from "../../shared/Header";
import MenuView from "../../components/home/MenuView";
import LoginModal from "../../components/home/LoginModal";
import RegisterModal from "../../components/home/RegisterModal";
import Spinner from "../../shared/Spinner";
import redirectToNewTab from "../../helpers/RedirectToNewTab";
import reformatStringToBeInURL from "../../helpers/StringsHelper";
import { setGameCookie, getGameCookie } from "../../helpers/CookieHelper";

export default {
  data() {
    return {
      showLoginModal: false,
      showRegisterModal: false,
      gameShortDetails: {}
    };
  },
  computed: {
    ...mapGetters({
      isUserLoggedIn: types.user.getters.IS_USER_LOGGED_IN
    }),
    ...mapState({
      gameDetails: state => state.games.gameDetailsData,
      gameTree: state => state.navigationTree.gameTree
    }),
    showDetailsHero() {
      return Object.keys(this.gameDetails).length !== 0;
    },
    newTree() {
      const tree = [].concat(this.gameShortDetails.tree);
      tree.push({
        name: this.gameShortDetails.title,
        path: this.$router.history.current.path
      });
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
      fetchGameDetails: types.games.actions.FETCH_GAME_DETAILS
    }),
    setShowLoginModal(value = false) {
      this.showLoginModal = value;
    },
    setShowRegisterModal(value = false) {
      this.showRegisterModal = value;
    },
    backTo() {
      const { previousPath } = this.$router.history.current.params;
      if (previousPath === "/" || !previousPath)
        this.$router.push({ name: "home", hash: "#games" });
      else this.$router.push({ path: previousPath });
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
    const gameCookieData = getGameCookie();
    if (this.$router.history.current.params.data !== undefined) {
      this.gameShortDetails = this.$router.history.current.params.data;
      store.commit(
        types.navigationTree.mutations.SET_GAME_TREE,
        this.gameShortDetails
      );
      setGameCookie(this.gameShortDetails);
    } else if (Object.keys(this.gameTree).length > 0) {
      this.gameShortDetails = this.gameTree;
    } else if (gameCookieData !== undefined) {
      this.gameShortDetails = gameCookieData;
      store.commit(
        types.navigationTree.mutations.SET_GAME_TREE,
        this.gameShortDetails
      );
    }

    const gameId = this.$router.history.current.params.gameName.split("-")[0];
    this.fetchGameDetails(gameId);
  },
  updated() {
    redirectToNewTab("description-container");
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/containers/games/game-details.scss";
</style>
