<template>
  <div v-if="isSummitsFetched">
    <!-- <div class="container"> -->
    <div class="row">
      <div class="col-sm">
        <h2 class="heading-margin">Summits ({{ summitsData.length }})</h2>
      </div>
      <div class="col-sm">
        <router-link to="/dashboard/summits/create">
          <button
            type="button"
            class="btn btn-secondary d-block ml-auto heading-margin"
          >
            Add Summit
          </button>
        </router-link>
      </div>
      <!-- </div> -->
    </div>
    <LTable
      class="table-hover table-striped"
      :columns="table.columns"
      :data="summitsData"
      tableType="summits"
      :setShowDeleteDialogFlag="setImageDataFlag"
    >
    </LTable>
    <DeleteDialog
      :showFlag="showFlag"
      :setShowDeleteDialogFlag="setImageDataFlag"
      item="Summit"
      :deleteAction="removeSummit"
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
        columns: [
          "Id",
          "Initial Title",
          "Final Title",
          "Initial Description",
          "Final Description",
          "Attendess",
          "Year",
          "Location",
          "Logo Image",
          "Media Image",
          "Cover Main Image",
          "Cover Over Image",
          "Card Image",
          "Video URL",
          "Active",
          "Actions"
        ]
      }
    };
  },
  computed: {
    ...mapState({
      summitsData: state => state.summits.summitsData,
      isSummitsFetched: state => state.summits.isSummitsFetched
    })
  },
  methods: {
    ...mapActions({
      fetchSummits: types.summits.actions.FETCH_SUMMITS,
      deleteSummit: types.summits.actions.DELETE_SUMMIT
    }),
    notifyVue(message, color) {
      this.$notifications.notify({
        message: `<span>${message}</span>`,
        horizontalAlign: "right",
        verticalAlign: "top",
        type: color
      });
    },
    setImageDataFlag(flag, id, locationInDataArray) {
      this.showFlag = flag;
      this.targetId = id;
      this.locationInDataArray = locationInDataArray;
    },
    async removeSummit() {
      const payload = {
        summitId: this.targetId,
        locationInDataArray: this.locationInDataArray
      };
      try {
        await this.deleteSummit(payload);
        this.resetFields();
        this.notifyVue("Summit Deleted Successfully", "success");
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
    this.fetchSummits();
  }
};
</script>

<style lang="scss" scoped>
.heading-margin {
  margin-top: 15px !important;
  margin-bottom: 30px !important;
}
</style>
