<template>
  <div class="services-page">
    <div
      v-if="isSettingsDataFetched"
      class="services-page__bg"
      :style="`background-image: url(${settings.img_services_cover.url};`"
    ></div>
    <ServicesHero />

    <div class="services-page-wrapper row" v-if="isServicesFetched">
      <div
        v-for="service in services.data"
        :key="service.id"
        class="services-page-wrapper__content-wrapper col-xs-12 col-sm-12 col-md-6 col-lg-3 p-0"
      >
        <router-link
          :to="`/services/${service.id}-${reformatURL(service.title)}`"
        >
          <div
            class="services-page-wrapper__content"
            @click="setIsServiceFetched(false)"
          >
            <img :src="service.img_card.url" draggable="false" />

            <div class="services-page-wrapper__text">
              <h2>{{ service.title }}</h2>
            </div>
          </div>
        </router-link>
      </div>
      <Intersect @enter="loadMoreWorks"
        ><div class="threshold">
          <Loading :showLoading="showLoading" />
        </div>
      </Intersect>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import types from "../../../store/types";
import Intersect from "vue-intersect";
import Loading from "../../../website/shared/Loading";
import { reformatStringToBeInURL } from "../../../helpers/StringsHelper";
import ServicesHero from "../../components/services/ServicesHero";
export default {
  data() {
    return {
      queriedServicesCounts: 8,
      showLoading: false
    };
  },
  components: {
    ServicesHero,
    Intersect,
    Loading
  },
  computed: {
    ...mapState({
      services: state => state.services.services,
      isServicesFetched: state => state.services.isServicesFetched,
      settings: state => state.settings.servicesSettings,
      isSettingsDataFetched: state =>
        state.settings.isServicesSettingsDataFetched
    })
  },
  methods: {
    ...mapActions({
      fetchServices: types.services.actions.FETCH_SERVICES
    }),
    ...mapMutations({
      setShowFooterFlag: types.app.mutations.SET_SHOW_FOOTER_FLAG,
      setShowHeaderFlag: types.app.mutations.SET_SHOW_HEADER_FLAG,
      setIsServiceFetched:
        types.services.mutations.SET_IS_WEBSITE_SERVICE_FETCHED
    }),
    reformatURL(id) {
      return reformatStringToBeInURL(id);
    },
    generateWorkPayload(showSpinner) {
      const data = {
        first: this.queriedServicesCounts,
        page:
          Object.keys(this.services).length > 0
            ? this.services.paginatorInfo.currentPage + 1
            : 1,
        isEnabled: true
      };
      const requestSource = {
        data,
        requestSource: "website",
        showSpinner
      };
      return requestSource;
    },
    loadMoreWorks: async function() {
      const payload = this.generateWorkPayload(false);

      if (Object.keys(this.services).length > 0) {
        if (!this.showLoading && this.services.paginatorInfo.hasMorePages) {
          this.showLoading = true;
          await this.fetchServices(payload);
          this.showLoading = false;
        }
      }
    }
  },
  mounted() {
    if (!this.isServicesFetched) {
      this.setShowFooterFlag(false);
      const payload = this.generateWorkPayload(true);
      this.fetchServices(payload);
    } else if (Object.keys(this.services).length > 0) {
      this.setShowHeaderFlag(true);
      if (!this.services.paginatorInfo.hasMorePages) {
        this.setShowFooterFlag(true);
      }
    } else {
      this.setShowHeaderFlag(true);
    }
  },
  updated() {
    if (Object.keys(this.services).length > 0) {
      if (!this.services.paginatorInfo.hasMorePages) {
        this.setShowFooterFlag(true);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/services/services-main-page.scss";
@import "../../../assets/sass/website/mixins.scss";

.services-page {
  &__bg {
    width: 69.8%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    position: fixed;
    z-index: 100;
    padding-top: $header-height;
    @include is-extra-small-mobile {
      width: 68.8%;
    }
  }
}
</style>
