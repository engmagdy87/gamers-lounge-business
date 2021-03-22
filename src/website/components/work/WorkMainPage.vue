<template>
  <div>
    <div class="work-page-wrapper row" v-if="isWorksFetched">
      <div
        v-for="(work, index) in ourWorks.data"
        :key="work.id"
        class="work-page-wrapper__content-wrapper col-xs-12 col-sm-12 col-md-6 col-lg-3 p-0"
        @click="getSelectedWork(index)"
      >
        <router-link :to="`/work/${work.id}-${reformatURL(work.title)}`">
          <div class="work-page-wrapper__content" @click="workClicked">
            <img :src="work.img_card.url" draggable="false" />

            <!-- <p
              class="description-container"
              v-html="work.short_description"
            ></p> -->
            <div class="work-page-wrapper__text">
              <h2>{{ work.title }}</h2>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <Intersect @enter="loadMoreWorks" v-if="isWorksFetched"
      ><div class="threshold">
        <Loading :showLoading="showLoading" />
      </div>
    </Intersect>
    <Modal
      :showModal="showModal"
      :setShowModal="setShowModal"
      :navigateTo="navigateTo"
    />
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import Intersect from "vue-intersect";
import Loading from "../../../website/shared/Loading";
import types from "../../../store/types";
import { reformatStringToBeInURL } from "../../../helpers/StringsHelper";
import redirectToNewTab from "../../../helpers/RedirectToNewTab";
import Modal from "../../shared/Modal";

export default {
  data() {
    return {
      showModal: false,
      queriedWorksCounts: 8,
      showLoading: false,
      selectedWork: null
    };
  },
  components: {
    Intersect,
    Loading,
    Modal
  },
  computed: {
    ...mapState({
      ourWorks: state => state.works.works,
      isWorksFetched: state => state.works.isWorksFetched
    })
  },
  methods: {
    ...mapActions({
      fetchWorks: types.works.actions.FETCH_WORKS
    }),
    ...mapMutations({
      setShowFooterFlag: types.app.mutations.SET_SHOW_FOOTER_FLAG,
      setShowHeaderFlag: types.app.mutations.SET_SHOW_HEADER_FLAG,
      setIsWorkFetched: types.works.mutations.SET_IS_WEBSITE_WORK_FETCHED
    }),
    reformatURL(id) {
      return reformatStringToBeInURL(id);
    },
    getSelectedWork(id) {
      this.selectedWork = id;
    },
    navigateTo(dir) {
      this.setIsWorkFetched(false);
      let work;
      if (dir == "next")
        this.selectedWork =
          this.selectedWork === this.ourWorks.data.length - 1
            ? 0
            : this.selectedWork + 1;
      else
        this.selectedWork =
          this.selectedWork === 0
            ? this.ourWorks.data.length - 1
            : this.selectedWork - 1;

      work = this.ourWorks.data[this.selectedWork];

      this.$router.replace(`/work/${work.id}-${this.reformatURL(work.title)}`);
    },
    generateWorkPayload(showSpinner) {
      const data = {
        first: this.queriedWorksCounts,
        page:
          Object.keys(this.ourWorks).length > 0
            ? this.ourWorks.paginatorInfo.currentPage + 1
            : 1,
        isEnabled: true
      };
      const requestSource = {
        data,
        requestSource: "website",
        showSpinner
      };
      return requestSource;
    },
    loadMoreWorks: async function() {
      const payload = this.generateWorkPayload(false);
      if (Object.keys(this.ourWorks).length > 0) {
        if (!this.showLoading && this.ourWorks.paginatorInfo.hasMorePages) {
          this.showLoading = true;
          await this.fetchWorks(payload);
          this.showLoading = false;
        }
      }
    },
    setShowModal(flag) {
      this.showModal = flag;
    },
    workClicked() {
      this.setIsWorkFetched(false);
      this.setShowModal(true);
    }
  },
  mounted() {
    if (!this.isWorksFetched) {
      this.setShowFooterFlag(false);
      const payload = this.generateWorkPayload(true);
      this.fetchWorks(payload);
    } else if (Object.keys(this.ourWorks).length > 0) {
      this.setShowHeaderFlag(true);
      if (!this.ourWorks.paginatorInfo.hasMorePages) {
        this.setShowFooterFlag(true);
      }
    } else {
      this.setShowHeaderFlag(true);
    }
  },
  updated() {
    redirectToNewTab("description-container");
    if (Object.keys(this.ourWorks).length > 0) {
      if (!this.ourWorks.paginatorInfo.hasMorePages) {
        this.setShowFooterFlag(true);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/work/work-main-page.scss";
</style>
