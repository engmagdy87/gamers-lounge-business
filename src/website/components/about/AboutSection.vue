<template>
  <div>
    <div
      class="about-section-wrapper"
      v-for="(section, i) in about.sections.data"
      :key="section.id"
    >
      <AboutSectionData
        class="about-section-wrapper__inside"
        :section="section"
        :title="titles[i]"
      />
    </div>
  </div>
</template>

<script>
import AboutSectionData from "./AboutSectionData";
export default {
  props: ["about"],
  data() {
    return {
      titles: ["our story", "our vision", "Meet the founders", "Testimonials"]
    };
  },
  components: {
    AboutSectionData
  }
};
</script>
