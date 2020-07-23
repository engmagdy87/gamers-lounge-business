<template>
  <div class="story-wrapper">
    <Header
      activeItem="story"
      :isSolidHeader="true"
      :setShowRegisterModal="setShowRegisterModal"
      :setShowLoginModal="setShowLoginModal"
    />
    <div
      class="story-wrapper__outside"
      :style="
        storyData.images.img_cover_main !== undefined
          ? `display:block;`
          : 'display:none;'
      "
    >
      <div
        class="story-wrapper__inside"
        :style="
          storyData.images.img_cover_main !== undefined
            ? `backgroundImage: url(${storyData.images.img_cover_main[0].path})`
            : ''
        "
      ></div>
    </div>
    <div class="story-wrapper__content">
      <div class="row">
        <div class="col-12">
          <h1>{{ storyData.initial_title }}</h1>
        </div>
        <div class="col-12">
          <p>{{ storyData.initial_description }}</p>
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
import types from "../../store/types";
import Header from "../shared/Header";
import LoginModal from "../components/home/LoginModal";
import RegisterModal from "../components/home/RegisterModal";
import Spinner from "../shared/Spinner";

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
      storyData: state => state.story.storyData
    })
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
      fetchStory: types.story.actions.FETCH_STORY
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
    Spinner
  },
  mounted() {
    this.fetchStory();
  },
  updated() {
    console.log("====================================");
    console.log(this.storyData);
    console.log("====================================");
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/containers/story.scss";
</style>
