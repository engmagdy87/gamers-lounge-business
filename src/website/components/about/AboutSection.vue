<template>
<div>
     <div
      class="about-section-wrapper"
      v-for="section in about.sections.data"
      :key="section.id"
    >
      <AboutSectionData class="about-section-wrapper__inside" :section="section" />
    </div>
</div>
</template>

<script>
import AboutSectionData from "./AboutSectionData";
export default {
  props: ["about"],
  components:{ 
    AboutSectionData
  },
}
</script>