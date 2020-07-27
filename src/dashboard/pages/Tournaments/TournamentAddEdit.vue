<template>
  <div
    v-if="
      isDashboardRegionsDataFetched &&
        isDashboardPlatformsDataFetched &&
        isDashboardGamesDataFetched &&
        isEventsListFetched
    "
  >
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/dashboard/tournaments">Tournaments</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          Create Tournament
        </li>
      </ol>
    </nav>
    <h4 slot="header" class="card-title">{{ operation }} Tournament</h4>
    <form>
      <div class="row">
        <div class="col-md-6">
          <base-input
            type="text"
            label="Initial Title"
            placeholder="Enter Initial Title"
            v-model="tournament.initial_title"
          >
          </base-input>
        </div>
        <div class="col-md-6">
          <base-input
            type="text"
            label="Final Title"
            placeholder="Enter Final Title"
            v-model="tournament.final_title"
          >
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div class="form-group">
            <label>Initial Description</label>
            <textarea
              rows="5"
              class="form-control border-input"
              placeholder="Enter Initial Description"
              v-model="tournament.initial_description"
            >
            </textarea>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label>Final Description</label>
            <textarea
              rows="5"
              class="form-control border-input"
              placeholder="Enter Final Description"
              v-model="tournament.final_description"
            >
            </textarea>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <base-input
            type="text"
            label="Format"
            placeholder="Enter Format"
            v-model="tournament.format"
          >
          </base-input>
        </div>
        <div class="col-md-6">
          <base-input
            type="text"
            label="Register Link"
            placeholder="Enter Register Link"
            v-model="tournament.register_link"
          >
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <base-input
            type="date"
            label="Registeration Start Date"
            placeholder="Enter Registeration Start Date"
            v-model="tournament.register_start_at"
            :min="minDate"
          >
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input
            type="date"
            label="Registeration End Date"
            placeholder="Enter Registeration End Date"
            v-model="tournament.register_end_at"
            :min="minDate"
          >
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input
            type="date"
            label="Kick-off Date"
            placeholder="Enter Kick-off Date"
            v-model="tournament.kick_off_date"
            :min="minDate"
          >
          </base-input>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="region">Region</label>
            <select class="form-control" v-model="tournament.region_id">
              <option value="-1">--Please select region</option>
              <option
                v-for="(region, index) in regionsListData"
                :selected="tournament.region_id === region.id"
                :key="index"
                :value="region.id"
                >{{ region.title }}</option
              >
            </select>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="platform">Platform</label>
            <select class="form-control" v-model="tournament.platform_id">
              <option value="-1">--Please select platform</option>
              <option
                v-for="(platform, index) in platformsListData"
                :selected="tournament.platform_id === platform.id"
                :key="index"
                :value="platform.id"
                >{{ platform.title }}</option
              >
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="game">Game</label>
            <select class="form-control" v-model="tournament.game_id">
              <option value="-1">--Please select game</option>
              <option
                v-for="(game, index) in gamesListData"
                :selected="tournament.game_id === game.id"
                :key="index"
                :value="game.id"
                >{{ game.title }}</option
              >
            </select>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="event">Event</label>
            <select class="form-control" v-model="tournament.event_id">
              <option value="-1">--Please select event</option>
              <option
                v-for="(event, index) in eventsListData"
                :selected="tournament.event_id === event.id"
                :key="index"
                :value="event.id"
                >{{ event.initial_title }}</option
              >
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2 mt-auto mb-auto">
          <div class="custom-control custom-switch">
            <input
              type="checkbox"
              class="custom-control-input"
              id="has_rules"
              v-model="tournament.has_rules"
            />
            <label class="custom-control-label" for="has_rules"
              >Tournament Rules</label
            >
          </div>
        </div>
        <div class="col-md-5">
          <base-input
            type="text"
            label="Rule Title"
            placeholder="Enter Rule Title"
            v-model="tournament.rules.title"
          >
          </base-input>
        </div>
        <div class="col-md-5">
          <base-input
            type="text"
            label="Rule Description"
            placeholder="Enter Rule Description"
            v-model="tournament.rules.content"
          >
          </base-input>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <base-input
            type="text"
            label="Winner"
            placeholder="Enter Winner"
            v-model="tournament.winner"
          >
          </base-input>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <base-input
            type="text"
            label="Contact Title"
            placeholder="Enter Contact Title"
            v-model="tournament.contacts.title"
          >
          </base-input>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label>Contact Description</label>
            <textarea
              rows="5"
              class="form-control border-input"
              placeholder="Enter Contact Description"
              v-model="tournament.contacts.content"
            >
            </textarea>
          </div>
        </div>
      </div>
      <div class="row mt-3 mb-3">
        <div class="col-6">
          <div>
            <label for="logo" class="mr-5">Choose Logo Image</label>
            <input
              type="file"
              id="logo"
              accept="image/png, image/jpeg"
              @change="e => setFile(e, 'img_logo')"
              ref="img_logo"
            />
          </div>
        </div>
        <div class="col-6">
          <div>
            <label class="mr-5" for="media-images1">Choose Card Image</label>
            <input
              type="file"
              id="media-images1"
              accept="image/png, image/jpeg"
              @change="e => setFile(e, 'img_card')"
              ref="img_card"
            />
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-6">
          <div>
            <label class="mr-5" for="media-images"
              >Choose Cover Main Images</label
            >
            <input
              type="file"
              id="media-images"
              accept="image/png, image/jpeg"
              multiple
              ref="img_cover_main"
            />
          </div>
        </div>
        <div class="col-6">
          <div>
            <label class="mr-5" for="media-images"
              >Choose Cover Over Image</label
            >
            <input
              type="file"
              id="media-images"
              accept="image/png, image/jpeg"
              @change="e => setFile(e, 'img_cover_over')"
              ref="img_cover_over"
            />
          </div>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col">
          <base-input
            type="text"
            label="Video Stream"
            placeholder="Enter Video Stream"
            v-model="tournament.vid_stream"
          >
          </base-input>
        </div>
      </div>

      <div class="text-center">
        <button
          type="button"
          class="btn btn-info btn-fill float-right"
          @click="postTournament"
        >
          Save
        </button>
      </div>
      <div class="clearfix"></div>
    </form>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import store from "../../../store/index";
import types from "../../../store/types";
// import Card from "src/dashboard/components/Cards/Card.vue";
import { createTournament } from "../../../website/helpers/APIsHelper.js";

export default {
  components: {
    // Card
  },
  data() {
    return {
      operation: this.$route.name,
      tournament: {
        initial_title: "",
        final_title: "",
        initial_description: "",
        final_description: "",
        format: "",
        register_link: "",
        winner: "",
        register_start_at: "",
        register_end_at: "",
        kick_off_date: "",
        region_id: 0,
        platform_id: 0,
        game_id: 0,
        event_id: 0,
        has_rules: false,
        rules: { title: "", content: "" },
        contacts: { title: "", content: "" },
        img_logo: "",
        img_cover_over: "",
        img_card: "",
        vid_stream: ""
      }
    };
  },
  methods: {
    ...mapActions({
      fetchRegionsList: types.regions.actions.FETCH_REGIONS_FOR_DASHBOARD,
      fetchPlatformsList: types.platforms.actions.FETCH_PLATFORMS_FOR_DASHBOARD,
      fetchGamesList: types.games.actions.FETCH_GAMES_FOR_DASHBOARD,
      fetchEventsList: types.events.actions.FETCH_EVENT_LIST
    }),
    setFile(e, key) {
      const files = e.target.files;

      if (!files.length) return;

      this.tournament[key] = files[0];
    },
    postTournament: async function() {
      let formData = new FormData();
      formData.append("initial_title", this.tournament.initial_title);
      formData.append("final_title", this.tournament.final_title);
      formData.append(
        "initial_description",
        this.tournament.initial_description
      );
      formData.append("final_description", this.tournament.final_description);
      formData.append("format", this.tournament.format);
      formData.append("register_link", this.tournament.register_link);
      formData.append("winner", this.tournament.winner);
      formData.append("register_start_at", this.tournament.register_start_at);
      formData.append("register_end_at", this.tournament.register_end_at);
      formData.append("kick_off_date", this.tournament.kick_off_date);
      formData.append("region_id", this.tournament.region_id);
      formData.append("platform_id", this.tournament.platform_id);
      formData.append("game_id", this.tournament.game_id);
      formData.append("event_id", this.tournament.event_id);
      formData.append("has_rules", this.tournament.has_rules ? 1 : 0);
      formData.append("rules", JSON.stringify(this.tournament.rules));
      formData.append("contacts", JSON.stringify(this.tournament.contacts));
      formData.append("img_logo", this.tournament.img_logo);
      formData.append("img_cover_over", this.tournament.img_cover_over);
      formData.append("img_card", this.tournament.img_card);
      formData.append("vid_stream", this.tournament.vid_stream);

      for (var i = 0; i < this.$refs.img_cover_main.files.length; i++) {
        let file = this.$refs.img_cover_main.files[i];
        formData.append("img_cover_main[]", file);
      }

      try {
        store.commit(types.home.mutations.SET_SPINNER_FLAG, true);
        const response = await createTournament(formData);
        store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
        this.resetFields();
        this.notifyVue("Tournament Created Successfully", "success");
        this.$router.push("/dashboard/tournaments/list");
      } catch (error) {
        this.notifyVue("Error Happened", "danger");
        store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
      }
    },
    resetFields() {
      this.tournament.initial_title = "";
      this.tournament.final_title = "";
      this.tournament.initial_description = "";
      this.tournament.final_description = "";
      this.tournament.format = "";
      this.tournament.register_link = "";
      this.tournament.winner = "";
      this.tournament.register_start_at = "";
      this.tournament.register_end_at = "";
      this.tournament.kick_off_date = "";
      this.tournament.region_id = 0;
      this.tournament.platform_id = 0;
      this.tournament.game_id = 0;
      this.tournament.event_id = 0;
      this.tournament.has_rules = false;
      this.tournament.rules = { title: "", content: "" };
      this.tournament.contacts = { title: "", content: "" };
      this.tournament.img_logo = "";
      this.tournament.img_cover_over = "";
      this.tournament.img_card = "";
      this.tournament.vid_stream = "";
      this.$refs.img_logo.value = null;
      this.$refs.img_cover_over.value = null;
      this.$refs.img_media.value = null;
      this.$refs.img_cover_main.value = null;
      this.$refs.img_card.value = null;
    },
    notifyVue(message, color) {
      this.$notifications.notify({
        message: `<span>${message}</span>`,
        horizontalAlign: "right",
        verticalAlign: "top",
        type: color
      });
    }
  },
  computed: {
    ...mapState({
      isDashboardRegionsDataFetched: state =>
        state.regions.isDashboardRegionsDataFetched,
      isDashboardPlatformsDataFetched: state =>
        state.platforms.isDashboardPlatformsDataFetched,
      isDashboardGamesDataFetched: state =>
        state.games.isDashboardGamesDataFetched,
      isEventsListFetched: state => state.events.isEventsListFetched,
      regionsListData: state => state.regions.dashboardRegionsData,
      platformsListData: state => state.platforms.dashboardPlatformsData,
      gamesListData: state => state.games.dashboardGamesData,
      eventsListData: state => state.events.eventsList
    }),
    minDate() {
      var today = new Date();
      var date =
        today.getFullYear() +
        "-" +
        ("0" + (today.getMonth() + 1)).slice(-2) +
        "-" +
        today.getDate();
      return date;
    }
  },
  mounted() {
    store.commit(types.home.mutations.SET_SPINNER_FLAG, true);
    this.fetchRegionsList();
    this.fetchPlatformsList();
    this.fetchGamesList();
    this.fetchEventsList();
  },
  updated() {
    if (
      this.isDashboardRegionsDataFetched &&
      this.isDashboardPlatformsDataFetched &&
      this.isDashboardGamesDataFetched &&
      this.isEventsListFetched
    )
      store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
  }
};
</script>
<style lang="scss" scoped>
@import "../../../assets/sass/website/color-palette.scss";

.custom-control-input:checked ~ .custom-control-label::before {
  border-color: $primary !important;
  background-color: $primary !important;
}
</style>
