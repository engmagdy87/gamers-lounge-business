<template>
<div>
      <div v-for="service in sectionData" :key="service.id">

        <Template1 :data="service" v-if="service.type == 'TEMPLATE_1'"/>

        <Template2 :data="service" v-else-if="service.type == 'TEMPLATE_2'"/>


        <Template3 :data="service" v-else-if="service.type == 'TEMPLATE_3'"/>

        <Template4 :data="service" v-else/>

      </div>

</div>
</template>

<script>
import Template1 from "./DetailsTemplate1"
import Template2 from "./DetailsTemplate2"
import Template3 from "./DetailsTemplate3"
import Template4 from "./DetailsTemplate4"
import * as SERVICE_TEMPLATES from "../../../constants/ServiceTemplates";
export default {
  props: [ "sectionData"],

  components: {
    Template1,
    Template2,
    Template3,
    Template4
  },
  computed:{
    SERVICE_TEMPLATES() {
      return SERVICE_TEMPLATES;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/services/details-section.scss";
</style>
