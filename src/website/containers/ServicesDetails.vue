<template>
  <div class="services-details-wrapper" v-if="isWebsiteServiceFetched">
    <h1 class="services-details-wrapper__title">
      {{ websiteService.title }}
    </h1>
    <div class="services-details-wrapper__cover-container">
      <!-- <img
        v-if="websiteService.img_cover"
        :src="websiteService.img_cover.url"
        :alt="websiteService.title"
      />
      <p class="description-container" v-html="websiteService.description"></p> -->
      <div class="services-details-wrapper__sections">
        <ServiceDetails
          :websiteService="websiteService"
          v-if="websiteService.sections"
        />
      </div>
    </div>

    <Intersect @enter="loadMoreServiceSections" v-if="servicePage > 0"
      ><div class="threshold">
        <Loading :showLoading="showLoading" />
      </div>
    </Intersect>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import types from "../../store/types";
import ServiceDetails from "../components/services/ServiceDetails";
import Intersect from "vue-intersect";
import Loading from "../../website/shared/Loading";
import { getEntityId } from "../../helpers/StringsHelper";
import redirectToNewTab from "../../helpers/RedirectToNewTab";

export default {
  data() {
    return {
      queriedServiceCounts: 2,
      servicePage: 0,
      showLoading: false
    };
  },
  components: {
    ServiceDetails,
    Intersect,
    Loading
  },
  computed: {
    ...mapState({
      websiteService: state => state.services.websiteService,
      isWebsiteServiceFetched: state => state.services.isWebsiteServiceFetched
    })
  },
  methods: {
    ...mapActions({
      fetchServiceSections: types.services.actions.FETCH_WEBSITE_SERVICE
    }),
    ...mapMutations({
      setShowFooterFlag: types.app.mutations.SET_SHOW_FOOTER_FLAG
    }),
    fetchHeroAndFirstSection: async function() {
      let payload = this.generateServicePayload(true, true);
      await this.fetchServiceSections(payload);
      this.servicePage++;
    },
    generateServicePayload(showSpinner, firstFetch) {
      let data = {
        id: getEntityId(this.$route.params.serviceName)
      };
      if (!firstFetch)
        data = {
          ...data,
          first: this.queriedServiceCounts,
          page: this.servicePage
        };
      const requestSource = {
        data,
        showSpinner,
        requestSource: "website"
      };
      return requestSource;
    },
    loadMoreServiceSections: async function() {
      if (
        !this.showLoading &&
        (this.websiteService.sections.data.length === 0 ||
          this.websiteService.sections.paginatorInfo.hasMorePages)
      ) {
        this.showLoading = true;
        const payload = this.generateServicePayload(false, false);
        await this.fetchServiceSections(payload);
        this.servicePage++;
        this.showLoading = false;
      }
    }
  },
  mounted() {
    window.scroll(0, 0);

    this.setShowFooterFlag(false);
    this.fetchHeroAndFirstSection();
  },
  updated() {
    redirectToNewTab("description-container");
    if (
      this.websiteService.sections.paginatorInfo &&
      !this.websiteService.sections.paginatorInfo.hasMorePages
    )
      this.setShowFooterFlag(true);
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/containers/services-details.scss";
</style>
