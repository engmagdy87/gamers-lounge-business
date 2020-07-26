<template>
  <div>
    <!-- <div class="container"> -->
    <div class="row">
      <div class="col-sm">
        <h2 class="heading-margin">Games ({{ gamesData.length }})</h2>
      </div>
      <div class="col-sm">
        <router-link to="/dashboard/games/create">
          <button
            type="button"
            class="btn btn-secondary d-block ml-auto heading-margin"
          >
            Add Game
          </button>
        </router-link>
      </div>
      <!-- </div> -->
    </div>
    <LTable
      class="table-hover table-striped"
      :columns="table.columns"
      :data="gamesData"
      tableType="games"
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
          "Title",
          "Description",
          "Logo Image",
          "Main Cover Image"
        ]
      }
    };
  },
  computed: {
    ...mapState({
      gamesData: state => state.games.gamesData,
      isGamesDataFetched: state => state.games.isGamesDataFetched
    })
  },
  methods: {
    ...mapActions({
      fetchGames: types.games.actions.FETCH_GAMES
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
    this.fetchGames();
  }
};
</script>

<style lang="scss" scoped>
.heading-margin {
  margin-top: 15px !important;
  margin-bottom: 30px !important;
}
</style>
