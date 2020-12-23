<template>
  <div class="work-details-sections">

    <div class="work-details-sections__section" v-for="section in websiteWork.sections.data" :key="section.id">
      <DetailsNormalSection
      v-if="section.type === 'NORMAL'"
      :WORK_COLUMNS_TYPES="WORK_COLUMNS_TYPES"
      :section="section"/>

      <DetailsSpecialSection :section="section" :WORK_COLUMNS_TYPES="WORK_COLUMNS_TYPES" v-else />

    </div>
  </div>
</template>

<script>
import DetailsNormalSection from "./DetailsNormalSection"
import DetailsSpecialSection from "./DetailsSpecialSection"
import * as WORK_TEMPLATES from "../../../constants/WorkSectionsTypes";
import * as WORK_COLUMNS_TYPES from "../../../constants/WorkColumnsContentTypes";
export default {
  props: ["websiteWork"],
  components:{
    DetailsNormalSection,
    DetailsSpecialSection,
  },
  computed: {
    WORK_TEMPLATES() {
      return WORK_TEMPLATES;
    },
    WORK_COLUMNS_TYPES(){
      return WORK_COLUMNS_TYPES;
    }
  },
  mounted(){
    console.log(this.websiteWork);
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/work/work-details-section.scss";
</style>