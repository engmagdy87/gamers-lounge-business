<template>
  <div v-if="isSettingsDataFetched">
    <Hero page="services">
      <template #hero-content>
        <div
          class="row align-items-end h-100 justify-content-center services-container"
        >
          <HalfClippedShape>
            <template #content>
              <div class="services-container__heroContent">
                <h1>{{ settings.services_title }}</h1>
                <div v-html="settings.services_description"></div>
              </div>
            </template>
          </HalfClippedShape>
        </div>
      </template>
    </Hero>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import types from "../../../store/types";
import Hero from "../../shared/Hero";
import HalfClippedShape from "../../shared/HalfClippedShape";

export default {
  components: {
    Hero,
    HalfClippedShape
  },
  computed: {
    ...mapState({
      settings: state => state.settings.servicesSettings,
      isSettingsDataFetched: state =>
        state.settings.isServicesSettingsDataFetched
    })
  },
  methods: {
    ...mapActions({
      fetchHomeCoverImageAndTexts: types.settings.actions.FETCH_SETTINGS
    })
  },
  mounted() {
    const flags = {
      isServiceTexts: true,
      isService: true
    };
    if (!this.isSettingsDataFetched) this.fetchHomeCoverImageAndTexts(flags);
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/containers/services.scss";
</style>
