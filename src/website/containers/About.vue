<template>
  <div class="about-wrapper" v-if="isWebsiteAboutFetched">
    <div
      class="about-wrapper__bg"
      :style="`background-image: url(${about.img_cover.url};`"
    ></div>
    <Hero page="services">
      <template #hero-content>
        <div class="row about-container__heroContent">
          <!-- <h1>OUR VISION</h1>
          <p v-html="about.vision"></p> -->

          <h1>
            Creating a better community <br />
            for gamers by gamers!
          </h1>
          <!-- <p v-html="about.mission"></p> -->
        </div>
      </template>
    </Hero>
    <div class="about-wrapper__content row">
      <AboutSection :about="about" v-if="about.sections" />
      <Intersect @enter="loadMoreAboutSections" v-if="aboutPage > 0"
        ><div class="threshold">
          <Loading :showLoading="showLoading" />
        </div>
      </Intersect>
      <Clients />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import types from "../../store/types";
import Hero from "../shared/Hero";
import AboutSection from "../components/about/AboutSection";
import Clients from "../components/about/Clients";
import Intersect from "vue-intersect";
import Loading from "../../website/shared/Loading";

export default {
  components: {
    Hero,
    AboutSection,
    Clients,
    Intersect,
    Loading
  },
  data() {
    return {
      queriedAboutCounts: 2,
      aboutPage: 0,
      showLoading: false
    };
  },
  computed: {
    ...mapState({
      about: state => state.about.websiteAbout,
      isWebsiteAboutFetched: state => state.about.isWebsiteAboutFetched,
      isSponsorsFetched: state => state.sponsors.isSponsorsFetched
    })
  },
  methods: {
    ...mapActions({
      fetchAboutUsPageSponsors: types.sponsors.actions.FETCH_WEBSITE_SPONSORS,
      fetchAbout: types.about.actions.FETCH_WEBSITE_ABOUT
    }),
    ...mapMutations({
      setShowFooterFlag: types.app.mutations.SET_SHOW_FOOTER_FLAG
    }),
    fetchHeroAndFirstSection: async function() {
      let payload = this.generateAboutPayload(true, true);
      await this.fetchAbout(payload);
      this.aboutPage++;
    },
    generateAboutPayload(showSpinner, firstFetch) {
      let data = {};
      if (!firstFetch)
        data = {
          first: this.queriedAboutCounts,
          page: this.aboutPage
        };
      const requestSource = {
        data,
        showSpinner,
        requestSource: "website"
      };
      return requestSource;
    },
    loadMoreAboutSections: async function() {
      if (!this.showLoading && this.about.sections.paginatorInfo.hasMorePages) {
        this.showLoading = true;
        const payload = this.generateAboutPayload(false, false);
        await this.fetchAbout(payload);
        this.aboutPage++;
        this.showLoading = false;
      }
      if (
        !this.about.sections.paginatorInfo.hasMorePages &&
        !this.isSponsorsFetched
      ) {
        const data = { places: "ABOUT_US" };
        await this.fetchAboutUsPageSponsors(data);
      }
    }
  },
  mounted() {
    this.setShowFooterFlag(false);
    this.fetchHeroAndFirstSection();
  },
  updated() {
    if (
      this.about.sections.paginatorInfo &&
      !this.about.sections.paginatorInfo.hasMorePages
    )
      this.setShowFooterFlag(true);
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/containers/about.scss";
@import "../../assets/sass/website/color-palette.scss";
</style>
