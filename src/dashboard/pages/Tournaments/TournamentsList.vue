<template>
  <div v-if="isTournamentsDataFetched">
    <!-- <div class="container"> -->
    <div class="row">
      <div class="col-sm">
        <h2 class="heading-margin">
          Tournaments ({{ tournamentsData.length }})
        </h2>
      </div>
      <div class="col-sm">
        <router-link to="/dashboard/tournaments/create">
          <button
            type="button"
            class="btn btn-secondary d-block ml-auto heading-margin"
          >
            Add Tournament
          </button>
        </router-link>
      </div>
      <!-- </div> -->
    </div>
    <LTable
      class="table-hover table-striped"
      :columns="table.columns"
      :data="tournamentsData"
      tableType="tournaments"
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
          "Format",
          "Register Link",
          "Registeration Start Date",
          "Registeration End Date",
          "Kick-off Date",
          "Region",
          "Platform",
          "Game",
          "Event",
          "Tournament Rules",
          "Rule Title",
          "Rule Description",
          "Winner",
          "Contacts Title",
          "Contacts Description",
          "Logo Image",
          "Card Image",
          "Cover Main Images",
          "Cover Over Image",
          "Video Stream URL"
        ]
      }
    };
  },
  computed: {
    ...mapState({
      tournamentsData: state => state.tournaments.dashboardTournamentsData,
      isTournamentsDataFetched: state =>
        state.tournaments.isDashboardTournamentsDataFetched
    })
  },
  methods: {
    ...mapActions({
      fetchTournaments:
        types.tournaments.actions.FETCH_TOURNAMENTS_FOR_DASHBOARD
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
    this.fetchTournaments();
  }
};
</script>

<style lang="scss" scoped>
.heading-margin {
  margin-top: 15px !important;
  margin-bottom: 30px !important;
}
</style>
