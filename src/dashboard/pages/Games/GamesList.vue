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
      :setShowDeleteDialogFlag="setShowFlag"
    >
    </LTable>
    <DeleteDialog
      :showFlag="showFlag"
      :setShowDeleteDialogFlag="setShowFlag"
      item="Game"
      :targetId="targetId"
      :deleteAction="removeGame"
    />
    </LTable>
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
          "Title",
          "Description",
          "Logo Image",
          "Main Cover Image",
          "Actions"
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
      fetchGames: types.games.actions.FETCH_GAMES,
      deleteGame: types.games.actions.DELETE_GAME
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
    async removeGame() {
      const payload = {
        gameId: this.targetId,
        locationInDataArray: this.locationInDataArray
      };
      try {
        await this.deleteGame(payload);
        this.resetFields();
        this.notifyVue("Game Deleted Successfully", "success");
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
