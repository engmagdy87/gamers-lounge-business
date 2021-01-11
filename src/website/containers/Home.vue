<template>
  <div class="home-wrapper">
    <Hero>
      <template #hero-content>
        <HeroCarousel />
      </template>
    </Hero>
    <ServicesCarousel />
    <WorkCarousel />
    <SponsorsCarousel />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import store from "../../store/index";
import types from "../../store/types";
import Hero from "../shared/Hero";
import HeroCarousel from "../components/home/HeroCarousel";
import ServicesCarousel from "../components/home/ServicesCarousel";
import WorkCarousel from "../components/home/WorkCarousel";
import SponsorsCarousel from "../components/home/SponsorsCarousel";

export default {
  components: {
    Hero,
    HeroCarousel,
    ServicesCarousel,
    WorkCarousel,
    SponsorsCarousel
  },
  computed: {
    ...mapState({
      homePageWorks: state => state.works.homePageWorks,
      isHomePageWorksFetched: state => state.works.isHomePageWorksFetched
    })
  },
  methods: {
    ...mapActions({
      fetchHomePageWork: types.works.actions.FETCH_HOME_PAGE_WORKS
    })
  },
  mounted() {
    this.fetchHomePageWork();
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/containers/home.scss";
</style>
