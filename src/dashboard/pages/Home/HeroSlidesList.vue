<template>
  <div v-if="isHeroSliderFetched">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/dashboard/home-hero-slides">Home Hero Slides</a>
        </li>
      </ol>
    </nav>
    <div class="row">
      <div class="col-sm">
        <h2 class="heading-margin">
          Home Hero Slides ({{ heroSlider.length }})
        </h2>
      </div>
      <div class="col-sm">
        <router-link to="/dashboard/home-hero-slides/create">
          <button
            type="button"
            class="btn btn-secondary d-block ml-auto heading-margin"
          >
            Add Home Hero Slide
          </button>
        </router-link>
      </div>
    </div>
    <Table
      class="table-hover table-striped"
      :columns="table.columns"
      :data="heroSlider"
      tableType="homeHeroSlideColumns"
      :setShowDeleteDialogFlag="setHomeHeroSlideDataFlags"
    >
    </Table>
    <DeleteDialog
      :showFlag="showFlag"
      item="Home Hero Slide"
      :deleteAction="removeHomeHeroSlide"
      :setShowDeleteDialogFlag="setHomeHeroSlideDataFlags"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import types from "../../../store/types";
import Table from "../../../dashboard/components/Table";
import DeleteDialog from "../../../website/shared/DeleteDialog";

export default {
  data() {
    return {
      showFlag: false,
      targetId: null,
      locationInDataArray: null,
      table: {
        columns: [
          "Id",
          "Title",
          "Description",
          "Order",
          "More Info URL",
          "Type",
          "Published",
          "Is Video Autoplay",
          "Main Image",
          "Main Video",
          "Actions"
        ]
      }
    };
  },
  computed: {
    ...mapState({
      heroSlider: state => state.home.heroSlider,
      isHeroSliderFetched: state => state.home.isHeroSliderFetched
    })
  },
  methods: {
    ...mapActions({
      fetchHomeHeroSlides: types.home.actions.FETCH_HERO_SLIDES,
      deleteHomeHeroSlider: types.home.actions.DELETE_HERO_SLIDER
    }),
    async removeHomeHeroSlide() {
      const payload = {
        slideId: this.targetId,
        locationInDataArray: this.locationInDataArray
      };
      try {
        await this.deleteHomeHeroSlider(payload);
        this.setHomeHeroSlideDataFlags(false, null, null);
        this.notifyVue("Home Hero Slide Deleted Successfully", "success");
      } catch (error) {
        this.notifyVue("Error Happened", "danger");
      }
    },
    setHomeHeroSlideDataFlags(flag, id, locationInDataArray) {
      this.showFlag = flag;
      this.targetId = id;
      this.locationInDataArray = locationInDataArray;
    },
    notifyVue(message, color) {
      this.$notifications.notify({
        message: `<span>${message}</span>`,
        horizontalAlign: "right",
        verticalAlign: "top",
        type: color
      });
    }
  },
  components: {
    Table,
    DeleteDialog
  },
  mounted() {
    const payload = { showSpinner: true, requestSource: "dashboard", data: {} };
    this.fetchHomeHeroSlides(payload);
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/lbd/heading.scss";
</style>
