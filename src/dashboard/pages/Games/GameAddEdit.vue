<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/dashboard/games">Games</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          Create Game
        </li>
      </ol>
    </nav>
    <h4 slot="header" class="card-name">{{ operation }} Game</h4>
    <form>
      <div class="row">
        <div class="col">
          <base-input
            type="text"
            label="Title"
            placeholder="Enter Title"
            v-model="game.title"
          >
          </base-input>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label>Description</label>
            <textarea
              rows="5"
              class="form-control border-input"
              placeholder="Enter Description"
              v-model="game.description"
            >
            </textarea>
          </div>
        </div>
      </div>

      <div class="row mt-3 mb-3">
        <div class="col">
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
        <div class="col">
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
      </div>

      <div class="text-center">
        <button
          type="button"
          class="btn btn-info btn-fill float-right"
          @click="postGame"
        >
          Save
        </button>
      </div>
      <div class="clearfix"></div>
    </form>
  </div>
</template>
<script>
import store from "../../../store/index";
import types from "../../../store/types";
// import Card from "src/dashboard/components/Cards/Card.vue";
import { createGame } from "../../../website/helpers/APIsHelper.js";

export default {
  components: {
    // Card
  },
  data() {
    return {
      operation: this.$route.name,
      game: {
        title: "",
        description: "",
        img_logo: ""
      }
    };
  },
  methods: {
    setFile(e, key) {
      const files = e.target.files;

      if (!files.length) return;

      this.game[key] = files[0];
    },
    postGame: async function() {
      let formData = new FormData();
      formData.append("title", this.game.title);
      formData.append("description", this.game.description);
      formData.append("img_logo", this.game.img_logo);

      for (var i = 0; i < this.$refs.img_cover_main.files.length; i++) {
        let file = this.$refs.img_cover_main.files[i];
        formData.append("img_cover_main[]", file);
      }
      try {
        store.commit(types.home.mutations.SET_SPINNER_FLAG, true);
        const response = await createGame(formData);
        store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
        this.resetFields();
        this.notifyVue("Game Created Successfully", "success");
        this.$router.push("/dashboard/games/list");
      } catch (error) {
        this.notifyVue("Error Happened", "danger");
        store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
      }
    },
    resetFields() {
      this.game.title = "";
      this.game.description = "";
      this.game.img_logo = "";
      this.$refs.img_logo.value = null;
      this.$refs.img_cover_main.value = null;
    },
    notifyVue(message, color) {
      this.$notifications.notify({
        message: `<span>${message}</span>`,
        horizontalAlign: "right",
        verticalAlign: "top",
        type: color
      });
    }
  }
};
</script>
