<template>
  <div class="services-details-wrapper" v-if="isServiceSectionsFetched">
    <div class="services-details-wrapper__cover-container">
      <img :src="serviceSections.img_cover.url" alt="" />
      <h1 v-html="serviceSections.title"></h1>
      <p v-html="serviceSections.description"></p>
    </div>

    <div class="services-details-wrapper__service-section pt-5 pb-5">
      <div class="col-12 pt-5 pl-0"><Breadcrumb :tree="breadcrumbTree" /></div>

      <DetailsSection :sectionData="serviceSections.sections.data" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import types from "../../store/types";
import Breadcrumb from "../shared/Breadcrumb";
import DetailsSection from "../components/services/DetailsSections";
import { getEntityId, getEntityName } from "../../helpers/StringsHelper";

export default {
  data() {
    return {
      breadcrumbTree: [{ title: "services", path: "/services" }]
    };
  },
  components: {
    Breadcrumb,
    DetailsSection
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
    })
  },
  mounted() {
    const requestSource = {
      serviceId: getEntityId(this.$route.params.serviceName),
      requestSource: "website"
    };
    this.breadcrumbTree.push({
      title: getEntityName(this.$route.params.serviceName),
      path: ""
    });

    this.fetchServiceSections(requestSource);
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/containers/services-details.scss";
</style>
