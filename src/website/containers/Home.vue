<template>
  <div class="home-wrapper" v-if="isHomePageServicesFetched">
    <div
      class="home-wrapper__bg"
      :style="`background-image: url(${settings.img_home_cover.url};`"
    ></div>
    <Hero v-if="isSettingsDataFetched">
      <template #hero-content>
        <HeroCarousel />
      </template>
    </Hero>
    <div class="home-wrapper__bg-color">
      <div class="home-wrapper__text">
        <h1 class="home-wrapper__title">WHO WE ARE</h1>
        <p class="home-wrapper__content">
          One of the first esports organizations in the MENA ,Founded by Middle
          Eastern hardcore gamers to take the gaming scene in the region to the
          next level!
        </p>
        <div class="home-wrapper__divider"></div>
      </div>
      <ServicesCarousel />
      <WorkCarousel v-if="isHomePageWorksFetched" />
      <SponsorsCarousel v-if="isHomePageSponsorsFetched" />
      <Intersect @enter="loadMoreWorks"
        ><div class="threshold">
          <Loading :showLoading="showLoading" />
        </div>
      </Intersect>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import Intersect from "vue-intersect";
import types from "../../store/types";
import Hero from "../shared/Hero";
import HeroCarousel from "../components/home/HeroCarousel";
import ServicesCarousel from "../components/home/ServicesCarousel";
import WorkCarousel from "../components/home/WorkCarousel";
import SponsorsCarousel from "../components/home/SponsorsCarousel";
import Loading from "../../website/shared/Loading";

export default {
  data() {
    return {
      showLoading: false
    };
  },
  components: {
    Hero,
    HeroCarousel,
    ServicesCarousel,
    WorkCarousel,
    SponsorsCarousel,
    Intersect,
    Loading
  },
  computed: {
    ...mapState({
      isHomePageWorksFetched: state => state.works.isHomePageWorksFetched,
      isHomePageServicesFetched: state =>
        state.services.isHomePageServicesFetched,
      isHomePageSponsorsFetched: state => state.sponsors.isSponsorsFetched,
      settings: state => state.settings.homeSettings,
      isSettingsDataFetched: state => state.settings.isHomeSettingsDataFetched
    })
  },
  methods: {
    ...mapActions({
      fetchHomePageWork: types.works.actions.FETCH_HOME_PAGE_WORKS,
      fetchHomePageServices: types.services.actions.FETCH_HOME_PAGE_SERVICES,
      fetchHomePageSponsors: types.sponsors.actions.FETCH_WEBSITE_SPONSORS,
      fetchHomeCoverImage: types.settings.actions.FETCH_SETTINGS
    }),
    ...mapMutations({
      setShowFooterFlag: types.app.mutations.SET_SHOW_FOOTER_FLAG,
      setShowHeaderFlag: types.app.mutations.SET_SHOW_HEADER_FLAG
    }),
    loadMoreWorks: async function() {
      const data = { places: "HOME" };
      if (
        !this.showLoading &&
        this.isHomePageServicesFetched &&
        !this.isHomePageWorksFetched
      ) {
        this.showLoading = true;
        await this.fetchHomePageWork();
        await this.fetchHomePageSponsors(data);
        this.showLoading = false;
        this.setShowFooterFlag(true);
      }
    }
  },
  mounted() {
    this.setShowFooterFlag(false);

    if (!this.isSettingsDataFetched) this.fetchHomeCoverImage({ isHome: true });
    if (!this.isHomePageServicesFetched) {
      this.fetchHomePageServices();
    } else if (
      this.isHomePageServicesFetched &&
      this.isHomePageWorksFetched &&
      this.isHomePageSponsorsFetched
    ) {
      this.setShowHeaderFlag(true);
      this.setShowFooterFlag(true);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/containers/home.scss";
</style>
