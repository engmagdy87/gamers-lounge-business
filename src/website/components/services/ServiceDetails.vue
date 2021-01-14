<template>
  <div class="work-details-sections">
    <div
      class="work-details-sections__section"
      v-for="section in websiteServices.sections.data"
      :key="section.id"
      v-if="section.enabled"
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
import DetailsNormalSection from "./DetailsNormalSection";
import DetailsSpecialSection from "./DetailsSpecialSection";
import * as WORK_SECTIONS_TYPES from "../../../constants/SectionsTypes";
export default {
  props: ["websiteServices"],
  components: {
    DetailsNormalSection,
    DetailsSpecialSection
  },
  computed: {
    WORK_SECTIONS_TYPES() {
      return WORK_SECTIONS_TYPES;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/work/work-details-section.scss";
</style>
