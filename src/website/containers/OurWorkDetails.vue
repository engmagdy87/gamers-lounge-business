<template>
<div v-if="isWorkSectionsFetched">
  <WorkDetails :workSections="workSections" />
</div>
</template>

<script>

import WorkDetails from "../components/work/WorkDetails";
import { mapActions, mapState, mapMutations } from "vuex";
import types from "../../store/types";
import Breadcrumb from "../shared/Breadcrumb";
import { getEntityId, getEntityName } from "../../helpers/StringsHelper";

export default {
  data() {
    return {
      breadcrumbTree: [{ title: "work", path: "/work" }]
    };
  },
  components:{
    WorkDetails
  },
  computed: {
    ...mapState({
      workSections: state => state.works.workSections, 
      isWorkSectionsFetched: state => state.works.isWorkSectionsFetched
    })
  },
  methods: {
    ...mapActions({
      fetchWorkSections: types.works.actions.FETCH_WORK_SECTIONS
    })
  },
  mounted() {
    const requestSource = {
      workId: getEntityId(this.$route.params.workName),
      requestSource: "website"
    };
    this.breadcrumbTree.push({
      title: getEntityName(this.$route.params.workName),
      path: ""
    });

    this.fetchWorkSections(requestSource);
  }
}
</script>

<style>
/* @import "../../assets/sass/website/containers/work.scss"; */
</style>