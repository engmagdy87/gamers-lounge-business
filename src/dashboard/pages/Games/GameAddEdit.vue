<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/dashboard/games">Games</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ operation }}
        </li>
      </ol>
    </nav>
    <h4 slot="header" class="card-name">{{ operation }}</h4>
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
            <ImagePreview
              v-if="
                editData !== undefined &&
                  operation === 'Edit Game' &&
                  editData.images !== null &&
                  editData.images.img_logo !== null
              "
              :image="editData.images.img_logo"
              :setShowDeleteDialogFlag="setShowFlag"
              openedFor="img_logo"
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
            <div
              v-if="
                editData !== undefined &&
                  (operation === 'Edit Game' || editData.images !== null)
              "
            >
              <ImagePreview
                v-for="(img, index) in editData.images.img_cover_main"
                :key="index"
                :image="img"
                :setShowDeleteDialogFlag="setShowFlag"
                openedFor="img_cover_main"
                :imageIndex="index"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="text-center">
        <button
          type="button"
          class="btn btn-info btn-fill float-right"
          @click="clickAction"
        >
          Save
        </button>
      </div>
      <div class="clearfix"></div>
      <DeleteDialog
        :showFlag="showFlag"
        :setShowDeleteDialogFlag="setShowFlag"
        item="Image"
        :deleteAction="removeImage"
      />
    </form>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import store from "../../../store/index";
import types from "../../../store/types";
import ImagePreview from "../../../website/shared/ImagePreview.vue";
import DeleteDialog from "../../../website/shared/DeleteDialog";
import { createGame, editGame } from "../../../website/helpers/APIsHelper.js";

export default {
  components: {
    ImagePreview,
    DeleteDialog
  },
  data() {
    return {
      openedFor: "",
      imageIndex: null,
      showFlag: false,
      imageId: null,
      editData: this.$router.history.current.params.data || { images: null },
      operation: this.$route.name,
      game: {
        title: "",
        description: "",
        img_logo: ""
      }
    };
  },
  methods: {
    ...mapActions({
      deleteImage: types.games.actions.DELETE_GAME_IMAGE
    }),
    clickAction() {
      this.operation === "Edit Game"
        ? this.saveData(editGame, "Game Updated Successfully")
        : this.saveData(createGame, "Game Created Successfully");
    },
    setShowFlag(flag, imageId, openedFor, imageIndex) {
      this.showFlag = flag;
      this.imageId = imageId;
      this.openedFor = openedFor;
      this.imageIndex = imageIndex;
    },
    setFile(e, key) {
      const files = e.target.files;

      if (!files.length) return;

      this.game[key] = files[0];
    },
    saveData: async function(saveFunction, successMessage) {
      let formData = new FormData();
      formData.append("title", this.game.title);
      formData.append("description", this.game.description);
      formData.append("img_logo", this.game.img_logo);

      for (let i = 0; i < this.$refs.img_cover_main.files.length; i++) {
        let file = this.$refs.img_cover_main.files[i];
        formData.append("img_cover_main[]", file);
      }
      try {
        store.commit(types.home.mutations.SET_SPINNER_FLAG, true);

        if (this.operation === "Edit Game")
          await saveFunction(this.editData.id, formData);
        else await saveFunction(formData);

        store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
        this.notifyVue(successMessage, "success");
        this.$router.push("/dashboard/games/list");
      } catch (error) {
        this.notifyVue("Error Happened", "danger");
        store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
      }
    },
    notifyVue(message, color) {
      this.$notifications.notify({
        message: `<span>${message}</span>`,
        horizontalAlign: "right",
        verticalAlign: "top",
        type: color
      });
    },
    removeImage: async function() {
      const payload = { gameId: this.editData.id, imageId: this.imageId };
      const response = await this.deleteImage(payload);

      switch (this.openedFor) {
        case "img_logo":
          this.editData.images.img_logo = null;
          break;

        case "img_cover_main":
          this.editData.images.img_cover_main.splice(this.imageIndex, 1);
          break;

        default:
          break;
      }

      this.notifyVue("Image Deleted Successfully", "success");
      this.setShowFlag(false);
      store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
    }
  },
  beforeMount() {
    if (
      !this.$router.history.current.params.data &&
      this.$route.name === "Edit Game"
    )
      this.$router.push({
        path: "/dashboard/games"
      });
  },
  mounted() {
    if (this.$route.name === "Edit Game") {
      this.game.title = this.editData.title;
      this.game.description = this.editData.description;
    }
  }
};
</script>
