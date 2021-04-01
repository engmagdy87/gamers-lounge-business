<template>
  <div
    class="work-wrapper"
    :style="
      `background: linear-gradient(rgba(89, 193, 177, 0.8),rgba(89, 193, 177, 0.8)), url(${settings.img_home_cover.url});`
    "
    v-if="isSettingsDataFetched"
  >
    <WorkMainPage />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import WorkMainPage from "../components/work/WorkMainPage";
import types from "../../store/types";

export default {
  components: {
    WorkMainPage
  },
  methods: {
    ...mapActions({
      fetchHomeCoverImage: types.settings.actions.FETCH_SETTINGS
    })
  },
  computed: {
    ...mapState({
      settings: state => state.settings.homeSettings,
      isSettingsDataFetched: state => state.settings.isHomeSettingsDataFetched
    })
  },
  mounted() {
    if (!this.isSettingsDataFetched) this.fetchHomeCoverImage({ isHome: true });
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/containers/work.scss";
</style>
