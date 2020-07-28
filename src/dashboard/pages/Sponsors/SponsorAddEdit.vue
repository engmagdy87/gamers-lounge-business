<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/dashboard/sponsors">Sponsors</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ operation }}
        </li>
      </ol>
    </nav>
    <h4 slot="header" class="card-name">{{ operation }}</h4>
    <form>
      <div class="row">
        <div class="col-md-6">
          <base-input
            type="text"
            label="Name"
            placeholder="Enter Name"
            v-model="sponsor.name"
          >
          </base-input>
        </div>
        <div class="col-md-6">
          <base-input
            type="text"
            label="Link"
            placeholder="Enter Link"
            v-model="sponsor.link"
          >
          </base-input>
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
                  operation === 'Edit Sponsor' &&
                  editData.images !== null &&
                  editData.images.img_logo !== null
              "
              :image="editData.images.img_logo"
              :setShowDeleteDialogFlag="setShowFlag"
              openedFor="img_logo"
            />
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
import {
  createSponsor,
  editSponsor
} from "../../../website/helpers/APIsHelper.js";

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
      sponsor: {
        name: "",
        link: "",
        img_logo: ""
      }
    };
  },
  methods: {
    ...mapActions({
      deleteImage: types.sponsors.actions.DELETE_SPONSOR_IMAGE
    }),
    clickAction() {
      this.operation === "Edit Sponsor"
        ? this.saveData(editSponsor, "Sponsor Updated Successfully")
        : this.saveData(createSponsor, "Sponsor Created Successfully");
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

      this.sponsor[key] = files[0];
    },
    saveData: async function(saveFunction, successMessage) {
      let formData = new FormData();
      formData.append("name", this.sponsor.name);
      formData.append("link", this.sponsor.link);
      formData.append("img_logo", this.sponsor.img_logo);

      try {
        store.commit(types.home.mutations.SET_SPINNER_FLAG, true);

        if (this.operation === "Edit Sponsor")
          await saveFunction(this.editData.id, formData);
        else await saveFunction(formData);

        store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
        this.notifyVue(successMessage, "success");
        this.$router.push("/dashboard/sponsors/list");
      } catch (error) {
        this.notifyVue("Error Happened", "danger");
        store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
      }
    },
    removeImage: async function() {
      const payload = { sponsorId: this.editData.id, imageId: this.imageId };
      const response = await this.deleteImage(payload);

      switch (this.openedFor) {
        case "img_logo":
          this.editData.images.img_logo = null;
          break;

        default:
          break;
      }

      this.notifyVue("Image Deleted Successfully", "success");
      this.setShowFlag(false);
      store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
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
  beforeMount() {
    if (
      !this.$router.history.current.params.data &&
      this.$route.name === "Edit Sponsor"
    )
      this.$router.push({
        path: "/dashboard/sponsors"
      });
  },
  mounted() {
    if (this.$route.name === "Edit Sponsor") {
      this.sponsor.name = this.editData.name;
      this.sponsor.link = this.editData.link;
      this.sponsor.img_logo = this.editData.images.img_logo;
    }
  }
};
</script>
