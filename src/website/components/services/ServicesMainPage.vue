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
        v-for="(service, index) in services.data"
        :key="service.id"
        class="services-page-wrapper__content-wrapper col-xs-12 col-sm-12 col-md-6 col-lg-3 p-0"
        @click="getSelectedService(index)"
      >
        <router-link
          :to="`/services/${service.id}-${reformatURL(service.title)}`"
        >
          <div class="services-page-wrapper__content" @click="serviceClicked">
            <img :src="service.img_card.url" draggable="false" />

            <div class="services-page-wrapper__text">
              <h2>{{ service.title }}</h2>
            </div>
          </div>
        </router-link>
      </div>
      <Intersect @enter="loadMoreWorks" v-if="isServicesFetched"
        ><div class="threshold">
          <Loading :showLoading="showLoading" />
        </div>
      </Intersect>
    </div>
    <Modal
      :showModal="showModal"
      :setShowModal="setShowModal"
      :navigateTo="navigateTo"
    />
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import types from "../../../store/types";
import Intersect from "vue-intersect";
import Loading from "../../../website/shared/Loading";
import { reformatStringToBeInURL } from "../../../helpers/StringsHelper";
import ServicesHero from "../../components/services/ServicesHero";
import Modal from "../../shared/Modal";

export default {
  data() {
    return {
      showModal: false,
      queriedServicesCounts: 8,
      showLoading: false,
      selectedService: null
    };
  },
  components: {
    ServicesHero,
    Intersect,
    Loading,
    Modal
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
      setWebsiteServiceFetched:
        types.services.mutations.SET_IS_WEBSITE_SERVICE_FETCHED,
      setShowFooterFlag: types.app.mutations.SET_SHOW_FOOTER_FLAG,
      setShowHeaderFlag: types.app.mutations.SET_SHOW_HEADER_FLAG,
      setIsServiceFetched:
        types.services.mutations.SET_IS_WEBSITE_SERVICE_FETCHED
    }),
    reformatURL(id) {
      return reformatStringToBeInURL(id);
    },
    getSelectedService(id) {
      this.selectedService = id;
    },
    navigateTo(dir) {
      this.setWebsiteServiceFetched(false);
      let service;
      if (dir == "next")
        this.selectedService =
          this.selectedService === this.services.data.length - 1
            ? 0
            : this.selectedService + 1;
      else
        this.selectedService =
          this.selectedService === 0
            ? this.services.data.length - 1
            : this.selectedService - 1;

      service = this.services.data[this.selectedService];

      this.$router.replace(
        `/services/${service.id}-${this.reformatURL(service.title)}`
      );
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
    },
    setShowModal(flag) {
      this.showModal = flag;
    },
    serviceClicked() {
      this.setIsServiceFetched(false);
      this.setShowModal(true);
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
