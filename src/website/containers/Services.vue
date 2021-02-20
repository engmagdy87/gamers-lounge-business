<template>
  <div class="services-wrapper">
    <ServicesMainPage />
  </div>
</template>

<script>
import ServicesMainPage from "../components/services/ServicesMainPage";

export default {
  components: { ServicesMainPage }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/containers/services.scss";
@import "../../assets/sass/website/color-palette.scss";
</style>
