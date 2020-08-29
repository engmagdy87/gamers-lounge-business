<template>
  <div>
    <!-- <div class="container"> -->
    <div class="row">
      <div class="col-sm">
        <h2 class="heading-margin">Popups ({{ popupsData.length }})</h2>
      </div>
      <div class="col-sm">
        <router-link to="/dashboard/popups/create">
          <button
            type="button"
            class="btn btn-secondary d-block ml-auto heading-margin"
          >
            Add Popup
          </button>
        </router-link>
      </div>
      <!-- </div> -->
    </div>
    <LTable
      class="table-hover table-striped"
      :columns="table.columns"
      :data="popupsData"
      tableType="popups"
      :setShowDeleteDialogFlag="setImageDataFlag"
    >
    </LTable>
    <DeleteDialog
      :showFlag="showFlag"
      :setShowDeleteDialogFlag="setImageDataFlag"
      item="Popup"
      :deleteAction="removePopup"
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
        columns: ["Id", "Title", "Link", "Places", "Logo Image", "Actions"]
      }
    };
  },
  computed: {
    ...mapState({
      popupsData: state => state.popups.dashboardPopupsData,
      isPopupsDataFetched: state => state.popups.isDashboardPopupsDataFetched
    })
  },
  methods: {
    ...mapActions({
      fetchPopups: types.popups.actions.FETCH_DASHBOARD_POPUPS,
      deletePopup: types.popups.actions.DELETE_POPUP
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
    async removePopup() {
      const payload = {
        popupId: this.targetId,
        locationInDataArray: this.locationInDataArray
      };
      try {
        await this.deletePopup(payload);
        this.resetFields();
        this.notifyVue("Popup Deleted Successfully", "success");
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
    this.fetchPopups();
  }
};
</script>

<style lang="scss" scoped>
.heading-margin {
  margin-top: 15px !important;
  margin-bottom: 30px !important;
}
</style>
