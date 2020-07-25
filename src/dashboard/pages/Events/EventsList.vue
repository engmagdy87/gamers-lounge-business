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
          "Video URL"
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
      fetchEvents: types.events.actions.FETCH_EVENTS
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
