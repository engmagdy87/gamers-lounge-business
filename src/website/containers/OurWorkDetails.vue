<template>
<div v-if="isWebsiteWorkFetched">

  <WorkDetails :websiteWork="websiteWork" />
</div>
</template>

<script>

import WorkDetails from "../components/work/WorkDetails";
import { mapActions, mapState, mapMutations } from "vuex";
import types from "../../store/types";
import { getEntityId, getEntityName } from "../../helpers/StringsHelper";

export default {
  components:{
    WorkDetails
  },
  computed: {
    ...mapState({
      websiteWork: state => state.works.websiteWork, 
      isWebsiteWorkFetched: state => state.works.isWebsiteWorkFetched
    })
  },
  methods: {
    ...mapActions({
      fetchWork: types.works.actions.FETCH_WEBSITE_WORK
    })
  },
  mounted() {
    const requestSource = {
      workId: getEntityId(this.$route.params.workName),
      requestSource: "website"
    };
    this.fetchWork(requestSource);


    console.log(this.websiteWork);
  }
}
</script>

<style>
/* @import "../../assets/sass/website/containers/work.scss"; */
</style>