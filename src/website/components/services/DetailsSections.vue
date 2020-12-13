<template>
  <div>
    <div v-for="section in sectionData" :key="section.id">
      <Template1
        v-if="section.type === SERVICE_TEMPLATES.TEMPLATE_1"
        :data="section"
      />
      <Template2
        :data="section"
        v-else-if="section.type === SERVICE_TEMPLATES.TEMPLATE_2"
      />
      <Template3
        :data="section"
        v-else-if="section.type === SERVICE_TEMPLATES.TEMPLATE_3"
      />
      <Template4 :data="section" v-else />
    </div>
  </div>
</template>

<script>
import Template1 from "./DetailsTemplate1";
import Template2 from "./DetailsTemplate2";
import Template3 from "./DetailsTemplate3";
import Template4 from "./DetailsTemplate4";
import * as SERVICE_TEMPLATES from "../../../constants/ServiceTemplates";

export default {
  props: ["sectionData"],
  components: {
    Template1,
    Template2,
    Template3,
    Template4
  },
  computed: {
    SERVICE_TEMPLATES() {
      return SERVICE_TEMPLATES;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/services/details-section.scss";
</style>
