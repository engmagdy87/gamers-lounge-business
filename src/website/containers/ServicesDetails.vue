<template>
  <div class="services-details-wrapper" v-if="isServiceSectionsFetched">
    <div class="services-details-wrapper__cover-container">
      <img :src="serviceSections.img_cover.url" :alt="serviceSections.title" />
      <h1>{{ serviceSections.title }}</h1>
      <p v-html="serviceSections.description"></p>
    </div>

    <div class="services-details-wrapper__service-section pt-5">
      <div class="col-12 pt-5 pl-0"><Breadcrumb :tree="breadcrumbTree" /></div>
    </div>

    <DetailsSection :websiteServices="serviceSections.sections.data" v-if="serviceSections.sections" />

    <div>
      <Intersect @enter="loadMoreWorkSections" v-if="worksPage > 0"
        ><div class="threshold">
          <Loading :showLoading="showLoading" />
        </div>
      </Intersect>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import types from "../../store/types";
import Breadcrumb from "../shared/Breadcrumb";
import DetailsSection from "../components/services/ServiceDetails";
import Intersect from "vue-intersect";
import Loading from "../../website/shared/Loading";
import { getEntityId, getEntityName } from "../../helpers/StringsHelper";

export default {
  data() {
    return {
      breadcrumbTree: [{ title: "services", path: "/services" }],
      queriedServiceCounts: 2,
      servicePage: 0,
      showLoading: false
    };
  },
  components: {
    Breadcrumb,
    DetailsSection,
    Intersect,
    Loading
  },
  computed: {
    ...mapState({
      serviceSections: state => state.services.serviceSections,
      isServiceSectionsFetched: state => state.services.isServiceSectionsFetched
    })
  },
  methods: {
    ...mapActions({
      fetchServiceSections: types.services.actions.FETCH_SERVICE_SECTION
    }),
    fetchHeroAndFirstSection: async function() {
      let payload = this.generateWorkPayload(true, true);
      await this.fetchServiceSections(payload);
      this.servicePage++;
    },
    generateWorkPayload(showSpinner, firstFetch) {
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
    loadMoreWorkSections: async function() {
      if (
        !this.showLoading &&
        (this.serviceSections.sections.data.length === 0 ||
          this.serviceSections.sections.paginatorInfo.hasMorePages)
      ) {
        this.showLoading = true;
        const payload = this.generateWorkPayload(false, false);
        await this.fetchServiceSections(payload);
        this.servicePage++;
        this.showLoading = false;
      }
    }
  },
  mounted() {
    const requestSource = {
      id: getEntityId(this.$route.params.serviceName),
      requestSource: "website"
    };
    this.breadcrumbTree.push({
      title: getEntityName(this.$route.params.serviceName),
      path: ""
    });

    this.fetchServiceSections(requestSource);
  },
  updated() {
    if (
      this.serviceSections.sections.paginatorInfo &&
      !this.serviceSections.sections.paginatorInfo.hasMorePages
    )
      this.setShowFooterFlag(true);
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/containers/services-details.scss";
</style>
