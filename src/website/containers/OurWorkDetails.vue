<template>
  <div class="work-details-wrapper" v-if="isWebsiteWorkFetched">
    <div class="work-details-wrapper__cover-container">
      <img :src="websiteWork.img_cover.url" :alt="websiteWork.title" />
      <h1 class="work-details-wrapper__cover-container__title">
        {{ websiteWork.title }}
      </h1>
      <p
        class="work-details-wrapper__cover-container__description"
        v-html="websiteWork.description"
      ></p>

      <div class="work-details-wrapper__cover-statistics">
        <div v-for="statistic in statistics" :key="statistic.id">
          <h1>
            <countTo
              :startVal="0"
              :endVal="parseInt(statistic.value)"
              separator=""
              :duration="2000"
            ></countTo>
          </h1>
          <p>{{ statistic.key }}</p>
        </div>
      </div>
    </div>

    <WorkDetails :websiteWork="websiteWork" />
    <Intersect @enter="loadMoreWorks"
      ><div style="width:100%,height: 1px;"></div>
    </Intersect>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import countTo from "vue-count-to";
import Intersect from "vue-intersect";
import WorkDetails from "../components/work/WorkDetails";
import types from "../../store/types";
import {
  getEntityId,
  getEntityName,
  reverseReformatHTMLString
} from "../../helpers/StringsHelper";

export default {
  data() {
    return {
      queriedWorksCounts: 2,
      worksPage: 1
    };
  },
  components: {
    WorkDetails,
    countTo,
    Intersect
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
    }),
    generateWorkPayload(loadMoreFlag) {
      const data = {
        workId: getEntityId(this.$route.params.workName),
        first: this.queriedWorksCounts,
        page: this.worksPage
      };
      const requestSource = {
        data,
        requestSource: "website",
        loadMoreFlag
      };
      return requestSource;
    },
    loadMoreWorks: async function() {
      const payload = this.generateWorkPayload("more");
      if (this.websiteWork.sections.paginatorInfo.hasMorePages) {
        await this.fetchWork(payload);
        this.worksPage++;
      }
    }
  },
  mounted() {
    const payload = this.generateWorkPayload();
    this.fetchWork(payload);
    this.worksPage++;
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/containers/work-details.scss";
</style>
