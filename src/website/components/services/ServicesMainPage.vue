<template>
  <div v-if="isServicesFetched">
    <ServicesHero />

    <div class="services-page-wrapper row">
      <div
        v-for="service in services.data"
        :key="service.id"
        class="services-page-wrapper__content-wrapper col-xs-12 col-sm-12 col-md-6 col-lg-4"
      >
        <router-link
          :to="`/services/${service.id}-${reformatURL(service.title)}`"
        >
          <div class="services-page-wrapper__content col-12 p-0 mt-3 mb-3">
            <img :src="service.img_card.url" draggable="false" />

            <div class="services-page-wrapper__text">
              <h2>{{ service.title }}</h2>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <Intersect @enter="loadMoreWorks"
      ><div class="threshold">
        <Loading :showLoading="showLoading" />
      </div>
    </Intersect>
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
      isServicesFetched: state => state.services.isServicesFetched
    })
  },
  methods: {
    ...mapActions({
      fetchServices: types.services.actions.FETCH_SERVICES
    }),
    ...mapMutations({
      setShowHeaderFlag: types.app.mutations.SET_SHOW_HEADER_FLAG
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
            : 1
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
    this.setShowHeaderFlag(false);
    if (!this.isServicesFetched) {
      const payload = this.generateWorkPayload(true);
      this.fetchServices(payload);
    }
  },
  updated() {
    if (Object.keys(this.services).length > 0) {
      if (!this.services.paginatorInfo.hasMorePages) {
        this.setShowHeaderFlag(true);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/services/services-main-page.scss";
</style>