<template>
  <div class="work-page-wrapper row" v-if="isWorksFetched">
    <div
      v-for="work in ourWorks"
      :key="work.id"
      class="work-page-wrapper__content-wrapper col-xs-12 col-sm-12 col-md-6 col-lg-4"
    >
      <router-link :to="`/work/${work.id}-${reformatURL(work.title)}`">
        <div class="work-page-wrapper__content col-12 p-0 mt-3 mb-3">
          <img :src="work.img_card.url" draggable="false" />

          <p>{{ work.title }}</p>

          <div class="work-page-wrapper__text">
            <h2 v-html="work.description"> </h2>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import types from "../../../store/types";
import { reformatStringToBeInURL } from "../../../helpers/StringsHelper";

export default {
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
    reformatURL(id) {
      return reformatStringToBeInURL(id);
    }
  },
  mounted() {
    if (!this.isWorksFetched) this.fetchWorks("website");
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/work/work-main-page.scss";
</style>
