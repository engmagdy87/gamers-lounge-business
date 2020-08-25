<template>
  <div class="story-wrapper">
    <Header
      activeItem="story"
      :isSolidHeader="true"
      :setShowRegisterModal="setShowRegisterModal"
      :setShowLoginModal="setShowLoginModal"
    />
    <div
      :class="[
        'story-wrapper__outside',
        storyData.cover_type === 'img'
          ? 'story-wrapper__outside--hexa-shape'
          : 'story-wrapper__outside--none'
      ]"
      v-if="!isDataEmpty && isStoryFetched"
    >
      <div
        :class="[
          'story-wrapper__inside',
          storyData.cover_type === 'img'
            ? 'story-wrapper__inside--hexa-shape'
            : 'story-wrapper__outside--none'
        ]"
        v-if="
          (storyData.images.img_cover_main !== null &&
            storyData.images.img_cover_main.length !== 0) ||
            storyData.videos.vid_cover_main !== null
        "
        :style="
          storyData.images.img_cover_main !== null &&
          storyData.images.img_cover_main.length !== 0
            ? `backgroundImage: url(${storyData.images.img_cover_main[0].path})`
            : ''
        "
      >
        <img
          v-if="
            storyData.has_cover_over && storyData.images.img_cover_over !== null
          "
          :src="storyData.images.img_cover_over.path"
        />
        <video
          autoplay
          muted
          loop
          id="myVideo"
          v-if="storyData.cover_type !== 'img'"
          style="width: 100%;"
        >
          <source
            :src="storyData.videos.vid_cover_main.path"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
    <div class="story-wrapper__content" v-if="isStoryFetched">
      <div class="row">
        <div class="col-12">
          <h1>{{ storyData.initial_title }}</h1>
        </div>
        <div class="col-12 col-md-6">
          <div
            class="story-paragraph description-container"
            v-html="storyData.initial_description"
          ></div>
        </div>
        <div
          class="col-12 col-md-6"
          v-if="storyData.videos.vid_initial !== null"
        >
          <iframe
            :width="isThisDeviceSmart ? '320' : '560'"
            height="315"
            :src="storyData.videos.vid_initial.path"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          >
          </iframe>
        </div>
      </div>
      <div v-if="isSummitsHistoryDataFetched">
        <StoryMenuView :data="summitsHistoryData" :tree="tree" />
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
import StoryMenuView from "../components/story/StoryMenuView";
import Header from "../shared/Header";
import LoginModal from "../components/home/LoginModal";
import RegisterModal from "../components/home/RegisterModal";
import Spinner from "../shared/Spinner";
import redirectToNewTab from "../helpers/RedirectToNewTab";
import isDeviceSmart from "../helpers/DetectIsDeviceSmart";

export default {
  data() {
    return {
      showLoginModal: false,
      showRegisterModal: false,
      tree: [
        {
          name: "Our Story",
          path: "/story"
        }
      ]
    };
  },
  computed: {
    ...mapGetters({
      isUserLoggedIn: types.user.getters.IS_USER_LOGGED_IN
    }),
    ...mapState({
      storyData: state => state.story.storyData,
      summitsHistoryData: state => state.summits.summitsHistoryData,
      isStoryFetched: state => state.story.isStoryFetched,
      isSummitsHistoryDataFetched: state =>
        state.summits.isSummitsHistoryDataFetched
    }),
    isDataEmpty() {
      return (
        this.storyData !== undefined && Object.keys(this.storyData).length === 0
      );
    },
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
      fetchStory: types.story.actions.FETCH_STORY,
      fetchSummitsHistory: types.summits.actions.FETCH_SUMMITS_HISTORY
    }),
    setShowLoginModal(value = false) {
      this.showLoginModal = value;
    },
    setShowRegisterModal(value = false) {
      this.showRegisterModal = value;
    }
  },
  components: {
    StoryMenuView,
    Header,
    LoginModal,
    RegisterModal,
    Spinner
  },
  mounted() {
    this.fetchStory();
    this.fetchSummitsHistory();
  },
  updated() {
    redirectToNewTab("description-container");
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/containers/story.scss";
</style>
