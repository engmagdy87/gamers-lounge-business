<template>
  <div>
    <!-- <div class="container"> -->
    <div class="row">
      <div class="col-sm">
        <h2 class="heading-margin">Regions ({{ regionsData.length }})</h2>
      </div>
      <div class="col-sm">
        <router-link to="/dashboard/regions/create">
          <button
            type="button"
            class="btn btn-secondary d-block ml-auto heading-margin"
          >
            Add Region
          </button>
        </router-link>
      </div>
      <!-- </div> -->
    </div>
    <LTable
      class="table-hover table-striped"
      :columns="table.columns"
      :data="regionsData"
      tableType="regions"
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
      regionsData: state => state.regions.regionsData,
      isRegionsDataFetched: state => state.regions.isRegionsDataFetched
    })
  },
  methods: {
    ...mapActions({
      fetchRegions: types.regions.actions.FETCH_REGIONS
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
    this.fetchRegions();
  }
};
</script>

<style lang="scss" scoped>
.heading-margin {
  margin-top: 15px !important;
  margin-bottom: 30px !important;
}
</style>
