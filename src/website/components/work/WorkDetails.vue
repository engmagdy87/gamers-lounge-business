<template>
  <div class="work-details-sections" v-if="isWebsiteWorkFetched">
    <div
      class="work-details-sections__section"
      v-for="section in websiteWork.sections.data"
      :key="section.id"
    >
      <DetailsNormalSection
        v-if="section.type === WORK_SECTIONS_TYPES.NORMAL"
        :section="section"
      />
      <DetailsSpecialSection :section="section" v-else />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import DetailsNormalSection from "../../shared/WorkServiceSections/DetailsNormalSection";
import DetailsSpecialSection from "../../shared/WorkServiceSections/DetailsSpecialSection";
import * as WORK_SECTIONS_TYPES from "../../../constants/SectionsTypes";
export default {
  props: ["websiteWork"],
  components: {
    DetailsNormalSection,
    DetailsSpecialSection
  },
  computed: {
    ...mapState({
      isWebsiteWorkFetched: state => state.works.isWebsiteWorkFetched
    }),
    WORK_SECTIONS_TYPES() {
      return WORK_SECTIONS_TYPES;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/work/work-details.scss";
</style>
