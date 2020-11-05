<template>
  <div class="home-wrapper">
    <Header activeItem="home" />

    <div class="home-wrapper__content" id="home">
      hello
    </div>

    <Spinner :smallLoader="false" />
    <Footer />
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import VueSlickCarousel from "vue-slick-carousel";
import store from "../../store/index";
import types from "../../store/types";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import Spinner from "../shared/Spinner";

export default {
  components: {
    Header,
    Spinner,
    Footer
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/containers/home.scss";
</style>
