<template>
  <div class="services-details-wrapper" v-if="isServiceSectionsFetched">
    <div class="col-12 pt-5"><Breadcrumb :tree="breadcrumbTree" /></div>
        <div
            v-for="service in serviceSections.sections.data"
            :key="service.id"
            class=""
            >
            <h1 style="color:white;">{{service.title }}</h1>

            <h1 style="color:red;">{{ service.title }}</h1>

            <h1  v-html="service.description_first" style="color:red;"></h1>

            <h1 style="color:red;"> {{ service.type }}</h1>
            <h1 style="color:purple;"> {{ service.img_content_first }}</h1>

        </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import types from "../../store/types";
import Breadcrumb from "../shared/Breadcrumb";
import { getEntityId, getEntityName } from "../../helpers/StringsHelper";

export default {  
  data() {
    return {
      breadcrumbTree: [{ title: "service", path: "/services" }]
    };
  },
  components: {
    Breadcrumb
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
    ...mapMutations({
        setIsServiceFetched: types.services.mutations.SET_IS_SERVICE_SECTIONS_FETCHED,
    }),
  },
  beforeMount() {
    this.setIsServiceFetched(false);
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
