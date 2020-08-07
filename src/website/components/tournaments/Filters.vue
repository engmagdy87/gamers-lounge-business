<template>
  <div
    class="filter-modal"
    :style="showFlag ? 'display:block' : 'display:none'"
    @click="closeModal"
  >
    <!-- Modal content -->
    <div
      class="filter-modal-content"
      @click="
        e => {
          e.stopPropagation();
        }
      "
    >
      <div class="filter-modal-header">
        <span class="close" @click="closeModal">&times;</span>
        <h2>Filter by</h2>
      </div>
      <div class="filter-modal-body">
        <form>
          <div class="form-group">
            <label for="region">Games</label>
            <select class="form-control" v-model="gameId">
              <option :value="null">--Please select game</option>
              <option
                v-for="(game, index) in gamesData"
                :selected="gameId === game.id"
                :key="index"
                :value="game.id"
                >{{ game.title }}</option
              >
            </select>
          </div>
          <div class="form-group">
            <label for="region">Regions</label>
            <select class="form-control" v-model="regionId">
              <option :value="null">--Please select region</option>
              <option
                v-for="(region, index) in regionsData"
                :selected="regionId === region.id"
                :key="index"
                :value="region.id"
                >{{ region.title }}</option
              >
            </select>
          </div>
          <div class="form-group">
            <label for="region">Status</label>
            <select class="form-control" v-model="status">
              <option :value="null">--Please select status</option>
              <option :selected="status" value="open"
                >Registeration open</option
              >
              <option :selected="status" value="closed"
                >Registeration close</option
              >
              <option :selected="status" value="soon"
                >Registeration soon</option
              >
            </select>
          </div>

          <button
            type="button"
            class="btn btn-primary float-right"
            @click="getFilteredData"
          >
            Done
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import types from "../../../store/types";

export default {
  data() {
    return {
      gameId: null,
      regionId: null,
      status: null
    };
  },
  props: ["showFlag", "setShowFiltersModal", "gamesData", "regionsData"],
  methods: {
    ...mapActions({
      fetchFilteredTournaments:
        types.tournaments.actions.FETCH_FILTERED_TOURNAMENTS
    }),
    ...mapMutations({
      setSpinnerFlag: types.home.mutations.SET_SPINNER_FLAG
    }),
    notifyVue(message, color) {
      this.$notifications.notify({
        message: `<span>${message}</span>`,
        horizontalAlign: "right",
        verticalAlign: "top",
        type: color
      });
    },
    async getFilteredData() {
      const payload = {
        region_id: this.regionId,
        game_id: this.gameId,
        status: this.status
      };
      if (
        this.regionId === null &&
        this.gameId === null &&
        this.status === null
      )
        this.notifyVue("Please select at least one filter", "danger");
      else {
        const isValidRequest = await this.fetchFilteredTournaments(payload);
        this.setSpinnerFlag(false);
        if (isValidRequest) {
          this.closeModal();
          this.notifyVue("Successful Filter", "success");
        } else this.notifyVue("Something wrong happen!", "danger");
      }
    },
    closeModal() {
      this.setShowFiltersModal(false);
      this.gameId = null;
      this.regionId = null;
      this.status = null;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/tournaments/filters.scss";
</style>
