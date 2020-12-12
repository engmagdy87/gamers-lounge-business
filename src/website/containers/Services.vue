<template>
  <div class="services-wrapper">
    
    <ServicesSection />

  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import store from "../../store/index";
import types from "../../store/types";
import ServicesSection from "../components/services/ServicesSection";

export default {
  components: { ServicesSection }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/containers/services.scss";
@import "../../assets/sass/website/color-palette.scss";

</style>

