<template>
  <div>
    <!-- <div class="container"> -->
    <div class="row">
      <div class="col-sm">
        <h2 class="heading-margin">Events ({{ eventsData.length }})</h2>
      </div>
      <div class="col-sm">
        <router-link to="/dashboard/events/create">
          <button
            type="button"
            class="btn btn-secondary d-block ml-auto heading-margin"
          >
            Add Event
          </button>
        </router-link>
      </div>
      <!-- </div> -->
    </div>
    <LTable
      class="table-hover table-striped"
      :columns="table.columns"
      :data="eventsData"
      tableType="events"
      :setShowDeleteDialogFlag="setShowFlag"
    >
    </LTable>
    <DeleteDialog
      :showFlag="showFlag"
      :setShowDeleteDialogFlag="setShowFlag"
      item="Event"
      :targetId="targetId"
      :deleteAction="removeEvent"
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
          "Summit",
          "Start Date",
          "End Date",
          "Type",
          "Card Image",
          "Cover Main Image",
          "Cover Over Image",
          "Logo Image",
          "Media Image",
          "Video URL",
          "Actions"
        ]
      }
    };
  },
  computed: {
    ...mapState({
      eventsData: state => state.events.eventsData,
      isEventsFetched: state => state.events.isEventsFetched
    })
  },
  methods: {
    ...mapActions({
      fetchEvents: types.events.actions.FETCH_EVENTS,
      deleteEvent: types.events.actions.DELETE_EVENT
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
    async removeEvent() {
      const payload = {
        eventId: this.targetId,
        locationInDataArray: this.locationInDataArray
      };
      try {
        await this.deleteEvent(payload);
        this.resetFields();
        this.notifyVue("Event Deleted Successfully", "success");
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
    this.fetchEvents();
  }
};
</script>

<style lang="scss" scoped>
.heading-margin {
  margin-top: 15px !important;
  margin-bottom: 30px !important;
}
</style>
