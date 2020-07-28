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
      :setShowDeleteDialogFlag="setShowFlag"
    >
    </LTable>
    <DeleteDialog
      :showFlag="showFlag"
      :setShowDeleteDialogFlag="setShowFlag"
      item="Region"
      :deleteAction="removeRegion"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import types from "../../../store/types";
import LTable from "src/dashboard/components/Table.vue";
import DeleteDialog from "../../../website/shared/DeleteDialog";

export default {
  data() {
    return {
      showFlag: false,
      targetId: null,
      locationInDataArray: null,
      table: {
        columns: ["Id", "Title", "Actions"]
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
      fetchRegions: types.regions.actions.FETCH_REGIONS,
      deleteRegion: types.regions.actions.DELETE_REGION
    }),
    notifyVue(message, color) {
      this.$notifications.notify({
        message: `<span>${message}</span>`,
        horizontalAlign: "right",
        verticalAlign: "top",
        type: color
      });
    },
    setShowFlag(flag, id, locationInDataArray) {
      this.showFlag = flag;
      this.targetId = id;
      this.locationInDataArray = locationInDataArray;
    },
    async removeRegion() {
      const payload = {
        regionId: this.targetId,
        locationInDataArray: this.locationInDataArray
      };
      try {
        await this.deleteRegion(payload);
        this.resetFields();
        this.notifyVue("Region Deleted Successfully", "success");
      } catch (error) {
        this.notifyVue("Error Happened", "danger");
      }
    },
    resetFields() {
      this.showFlag = false;
      this.targetId = null;
      this.locationInDataArray = null;
    }
  },
  components: {
    LTable,
    DeleteDialog
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
