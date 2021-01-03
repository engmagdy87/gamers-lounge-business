<template>
  <div>
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
      <WorkDetails :websiteWork="websiteWork" v-if="websiteWork.sections" />
    </div>
    <Intersect @enter="loadMoreWorks" v-if="worksPage > 1"
      ><div class="threshold">
        <Loading :showLoading="showLoading" />
      </div>
    </Intersect>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import countTo from "vue-count-to";
import Intersect from "vue-intersect";
import WorkDetails from "../components/work/WorkDetails";
import Loading from "../../website/shared/Loading";
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
      worksPage: 0,
      showLoading: false
    };
  },
  components: {
    WorkDetails,
    countTo,
    Intersect,
    Loading
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
    ...mapMutations({
      setShowFooterFlag: types.app.mutations.SET_SHOW_FOOTER_FLAG
    }),
    fetchHeroAndFirstSection: async function() {
      let payload = this.generateWorkPayload(true, true);
      await this.fetchWork(payload);
      this.worksPage++;
      payload = this.generateWorkPayload(false, false);
      await this.fetchWork(payload);
      this.worksPage++;
    },
    generateWorkPayload(showSpinner, firstFetch) {
      let data = {
        workId: getEntityId(this.$route.params.workName)
      };
      if (!firstFetch)
        data = {
          ...data,
          first: this.queriedWorksCounts,
          page: this.worksPage
        };
      const requestSource = {
        data,
        showSpinner,
        requestSource: "website"
      };
      return requestSource;
    },
    loadMoreWorks: async function() {
      const payload = this.generateWorkPayload(false, false);

      if (Object.keys(this.websiteWork.sections).length > 0) {
        if (this.websiteWork.sections.paginatorInfo.hasMorePages) {
          this.showLoading = true;
          await this.fetchWork(payload);
          this.worksPage++;
          this.showLoading = false;
        }
      }
    }
  },
  mounted() {
    this.setShowFooterFlag(false);
    this.fetchHeroAndFirstSection();
  },
  updated() {
    if (
      this.websiteWork.sections.paginatorInfo &&
      !this.websiteWork.sections.paginatorInfo.hasMorePages
    )
      this.setShowFooterFlag(true);
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/containers/work-details.scss";
</style>
