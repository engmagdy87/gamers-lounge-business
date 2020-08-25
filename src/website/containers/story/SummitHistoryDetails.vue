<template>
  <div class="story-details-wrapper" v-if="isSummitDetailsDataFetched">
    <Header
      activeItem="story"
      :isSolidHeader="true"
      :setShowRegisterModal="setShowRegisterModal"
      :setShowLoginModal="setShowLoginModal"
    />
    <div
      :class="[
        'story-details-wrapper__outside',
        summitDetails.cover_type === 'img'
          ? 'story-details-wrapper__outside--hexa-shape'
          : 'story-details-wrapper__outside--none'
      ]"
      v-if="showDetailsHero"
    >
      <div
        class="story-details-wrapper__inside"
        :class="[
          'story-details-wrapper__inside',
          summitDetails.cover_type === 'img'
            ? 'story-details-wrapper__inside--hexa-shape'
            : 'story-details-wrapper__inside--none'
        ]"
        v-if="
          (summitDetails.images.img_cover_main !== null &&
            summitDetails.images.img_cover_main.length !== 0) ||
            summitDetails.videos.vid_cover_main !== null
        "
        :style="
          summitDetails.cover_type === 'img'
            ? `backgroundImage: url(${summitDetails.images.img_cover_main[0].path})`
            : ''
        "
      >
        <img
          v-if="
            summitDetails.has_cover_over &&
              summitDetails.images.img_cover_over !== null
          "
          :src="summitDetails.images.img_cover_over.path"
        />
        <video
          autoplay
          muted
          loop
          id="myVideo"
          v-if="
            summitDetails.cover_type !== 'img' &&
              summitDetails.videos.vid_cover_main !== null
          "
          style="width: 100%;"
        >
          <source
            :src="summitDetails.videos.vid_cover_main.path"
            type="video/mp4"
          />
        </video>
      </div>
    </div>

    <div class="story-details-wrapper__content" v-if="showDetailsHero">
      <div class="container">
        <div class="row mb-4 mb-md-0">
          <div class="col-12 d-flex align-items-center">
            <div class="story-details-wrapper__content__breadcrumb">
              <a
                v-for="(route, i) in summitShortDetails.tree"
                :href="route.path"
                :key="i"
                >{{ route.name }} >
              </a>
              <span>{{ summitDetails.final_title }}</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col mt-3 mt-md-5">
            <SummitTabs :data="summitDetails" />
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
import store from "../../../store/index";
import types from "../../../store/types";
import Header from "../../shared/Header";
import LoginModal from "../../components/home/LoginModal";
import RegisterModal from "../../components/home/RegisterModal";
import Spinner from "../../shared/Spinner";
import SummitTabs from "../../shared/SummitTabs";
import {
  getUserCookie,
  setSummitCookie,
  getSummitCookie
} from "../../helpers/CookieHelper";

export default {
  data() {
    return {
      showLoginModal: false,
      showRegisterModal: false,
      summitShortDetails: {}
    };
  },
  computed: {
    ...mapGetters({
      isUserLoggedIn: types.user.getters.IS_USER_LOGGED_IN
    }),
    ...mapState({
      summitDetails: state => state.summits.summitDetailsData,
      isSummitDetailsDataFetched: state =>
        state.summits.isSummitDetailsDataFetched,
      summitTree: state => state.navigationTree.summitTree
    }),
    showDetailsHero() {
      return Object.keys(this.summitDetails).length !== 0;
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
      fetchSummitDetails: types.summits.actions.FETCH_SUMMIT_DETAILS
    }),
    setShowLoginModal(value = false) {
      this.showLoginModal = value;
    },
    setShowRegisterModal(value = false) {
      this.showRegisterModal = value;
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
    SummitTabs
  },
  mounted() {
    const summitCookieData = getSummitCookie();
    if (this.$router.history.current.params.data !== undefined) {
      this.summitShortDetails = this.$router.history.current.params.data;
      store.commit(
        types.navigationTree.mutations.SET_SUMMIT_TREE,
        this.summitShortDetails
      );
      setSummitCookie(this.summitShortDetails);
    } else if (Object.keys(this.summitTree).length > 0) {
      this.summitShortDetails = this.summitTree;
    } else if (summitCookieData !== undefined) {
      this.summitShortDetails = summitCookieData;
      store.commit(
        types.navigationTree.mutations.SET_SUMMIT_TREE,
        this.summitShortDetails
      );
    }
    const summitId = this.$router.history.current.params.summitName.split(
      "-"
    )[0];
    this.fetchSummitDetails(summitId);
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/containers/story/story-details.scss";
</style>
