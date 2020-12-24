<template>
<div class="work-details-wrapper" v-if="isWebsiteWorkFetched">

    <div class="work-details-wrapper__cover-container">
      <img :src="websiteWork.img_cover.url" :alt="websiteWork.title" />
        <h1 class="work-details-wrapper__cover-container__title">{{ websiteWork.title }}</h1>
        <p class="work-details-wrapper__cover-container__description" v-html="websiteWork.description"></p>

      <div class="work-details-wrapper__cover-statistics">
        <div v-for="statistic in statistics" :key="statistic.id">
          <h1> <countTo :startVal='0' :endVal='parseInt(statistic.value)' separator=''  :duration='2000'></countTo> </h1>
          <p>{{statistic.key}} </p>
        </div>
      </div>
    </div>

  <WorkDetails :websiteWork="websiteWork" />
</div>
</template>

<script>

import WorkDetails from "../components/work/WorkDetails";
import { mapActions, mapState, mapMutations } from "vuex";
import types from "../../store/types";
import { getEntityId, getEntityName, reverseReformatHTMLString} from "../../helpers/StringsHelper";
import countTo from 'vue-count-to';
export default {
  components:{
    WorkDetails,
    countTo
  },
  computed: {
    ...mapState({
      websiteWork: state => state.works.websiteWork, 
      isWebsiteWorkFetched: state => state.works.isWebsiteWorkFetched
    }),
    statistics() {
      return JSON.parse(reverseReformatHTMLString(this.websiteWork.statistics));
    }
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
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/containers/work-details.scss";
</style>