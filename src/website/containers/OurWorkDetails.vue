<template>
  <div>
    <div class="work-details-wrapper" v-if="isWebsiteWorkFetched">
      <h1 class="work-details-wrapper__cover-container__title">
        {{ websiteWork.title }}
        <!-- <p
            class="description-container work-details-wrapper__cover-container__description"
            v-html="websiteWork.description"
          ></p> -->
      </h1>
      <div class="work-details-wrapper__cover-container">
        <!-- <img :src="websiteWork.img_cover.url" :alt="websiteWork.title" /> -->

        <div class="work-details-wrapper__cover-statistics">
          <div v-for="statistic in statistics" :key="statistic.id">
            <h1>
              <countTo
                :startVal="0"
                :endVal="parseFloat(statistic.value)"
                :decimals="numberOfDecimalsInStringNumber(statistic.value)"
                separator=""
                :duration="2000"
              ></countTo>
            </h1>
            <p>{{ statistic.key }}</p>
          </div>
        </div>
        <WorkDetails :websiteWork="websiteWork" v-if="websiteWork.sections" />
      </div>
      <Intersect @enter="loadMoreWorkSections" v-show="worksPage > 0"
        ><div class="threshold">
          <Loading :showLoading="showLoading" />
        </div>
      </Intersect>
    </div>
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
  reverseReformatHTMLString
} from "../../helpers/StringsHelper";
import { numberOfDecimalsInStringNumber } from "../../helpers/NumbersHelper";
import redirectToNewTab from "../../helpers/RedirectToNewTab";

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
      fetchWorkSections: types.works.actions.FETCH_WEBSITE_WORK
    }),
    ...mapMutations({
      setShowFooterFlag: types.app.mutations.SET_SHOW_FOOTER_FLAG
    }),
    numberOfDecimalsInStringNumber(statistic) {
      return numberOfDecimalsInStringNumber(statistic);
    },
    fetchHeroAndFirstSection: async function() {
      let payload = this.generateWorkPayload(true, true);
      await this.fetchWorkSections(payload);
      this.worksPage++;
    },
    generateWorkPayload(showSpinner, firstFetch) {
      let data = {
        id: getEntityId(this.$route.params.workName)
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
    loadMoreWorkSections: async function() {
      if (
        !this.showLoading &&
        (this.websiteWork.sections.data.length === 0 ||
          this.websiteWork.sections.paginatorInfo.hasMorePages)
      ) {
        this.showLoading = true;
        const payload = this.generateWorkPayload(false, false);
        await this.fetchWorkSections(payload);
        this.worksPage++;
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
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/containers/work-details.scss";
</style>
