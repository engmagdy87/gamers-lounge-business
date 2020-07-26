<template>
  <div>
    <!-- <div class="container"> -->
    <div class="row">
      <div class="col-sm">
        <h2 class="heading-margin">Platforms ({{ platformsData.length }})</h2>
      </div>
      <div class="col-sm">
        <router-link to="/dashboard/platforms/create">
          <button
            type="button"
            class="btn btn-secondary d-block ml-auto heading-margin"
          >
            Add Platform
          </button>
        </router-link>
      </div>
      <!-- </div> -->
    </div>
    <LTable
      class="table-hover table-striped"
      :columns="table.columns"
      :data="platformsData"
      tableType="platforms"
    >
    </LTable>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import types from "../../../store/types";
import LTable from "src/dashboard/components/Table.vue";

export default {
  data() {
    return {
      table: {
        columns: ["Id", "Title"]
      }
    };
  },
  computed: {
    ...mapState({
      platformsData: state => state.platforms.platformsData,
      isPlatformsDataFetched: state => state.platforms.isPlatformsDataFetched
    })
  },
  methods: {
    ...mapActions({
      fetchPlatforms: types.platforms.actions.FETCH_PLATFORMS
    }),
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
    LTable
  },
  mounted() {
    this.fetchPlatforms();
  }
};
</script>

<style lang="scss" scoped>
.heading-margin {
  margin-top: 15px !important;
  margin-bottom: 30px !important;
}
</style>
