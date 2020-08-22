<template>
  <div>
    <!-- <div class="container"> -->
    <div class="row">
      <div class="col-sm">
        <h2 class="heading-margin">
          Event Parent ({{ dashboardEventParentsData.length }})
        </h2>
      </div>
      <div class="col-sm">
        <router-link to="/dashboard/event-parent/create">
          <button
            type="button"
            class="btn btn-secondary d-block ml-auto heading-margin"
          >
            Add Event Parent
          </button>
        </router-link>
      </div>
      <!-- </div> -->
    </div>
    <LTable
      class="table-hover table-striped"
      :columns="table.columns"
      :data="dashboardEventParentsData"
      tableType="event-parent"
      :setShowDeleteDialogFlag="setImageDataFlag"
    >
    </LTable>
    <DeleteDialog
      :showFlag="showFlag"
      :setShowDeleteDialogFlag="setImageDataFlag"
      item="Event Parent"
      :deleteAction="removeEventParent"
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
      dashboardEventParentsData: state =>
        state.eventParent.dashboardEventParentsData
    })
  },
  methods: {
    ...mapActions({
      fetchEventParent:
        types.eventParent.actions.FETCH_EVENT_PARENTS_FOR_DASHBOARD,
      deleteEventParent: types.eventParent.actions.DELETE_EVENT_PARENT
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
    async removeEventParent() {
      const payload = {
        eventParentId: this.targetId,
        locationInDataArray: this.locationInDataArray
      };
      try {
        await this.deleteEventParent(payload);
        this.resetFields();
        this.notifyVue("Event Parent Deleted Successfully", "success");
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
    this.fetchEventParent();
  }
};
</script>

<style lang="scss" scoped>
.heading-margin {
  margin-top: 15px !important;
  margin-bottom: 30px !important;
}
</style>
