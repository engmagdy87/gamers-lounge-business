<template>
  <div v-if="showFormWhenDataFetched">
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
            :autofocus="true"
            :isInvalid="errors.name !== undefined"
            :isRequired="true"
          >
          </base-input>
          <p class="error-message" v-if="errors.name !== undefined">
            {{ errors.name }}
          </p>
        </div>
        <div class="col-md-6">
          <base-input
            type="text"
            label="Link"
            placeholder="Enter Link"
            v-model="sponsor.link"
            :isInvalid="errors.link !== undefined"
            :isRequired="true"
          >
          </base-input>
          <p class="error-message" v-if="errors.link !== undefined">
            {{ errors.link }}
          </p>
        </div>
      </div>

      <div class="row mt-3 mb-3">
        <div class="col-md-6">
          <div class="form-group">
            <label for="summit">Summit</label>
            <select class="form-control" v-model="sponsor.summit_id">
              <option value="-1">--Please select summit</option>
              <option
                v-for="(summit, index) in summitsListData"
                :selected="sponsor.summit_id === summit.id"
                :key="index"
                :value="summit.id"
                >{{ summit.initial_title
                }}{{ summit.active ? "(Active)" : "" }}</option
              >
            </select>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="category">Category</label>
            <select class="form-control" v-model="sponsor.category_id">
              <option value="-1">--Please select category</option>
              <option
                v-for="(category, index) in categoriesListData"
                :selected="sponsor.category_id === category.id"
                :key="index"
                :value="category.id"
                >{{ category.title }}</option
              >
            </select>
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
            <br />
            <ImagePreview
              v-if="
                editData !== undefined &&
                  operation === 'Edit Sponsor' &&
                  editData.images !== null &&
                  editData.images.img_logo !== null
              "
              :image="editData.images.img_logo"
              :setShowDeleteDialogFlag="setImageDataFlag"
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
        :setShowDeleteDialogFlag="setImageDataFlag"
        item="Image"
        :deleteAction="removeImage"
      />
    </form>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
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
        summit_id: "-1",
        category_id: "-1",
        img_logo: ""
      },
      errors: {}
    };
  },
  methods: {
    ...mapActions({
      deleteImage: types.sponsors.actions.DELETE_SPONSOR_IMAGE,
      fetchSummitsList: types.summits.actions.FETCH_SUMMITS_LIST,
      fetchCategoriesList:
        types.sponsorsCategories.actions.FETCH_SPONSORS_CATEGORIES_FOR_DASHBOARD
    }),
    clickAction() {
      this.operation === "Edit Sponsor"
        ? this.saveData(editSponsor, "Sponsor Updated Successfully")
        : this.saveData(createSponsor, "Sponsor Created Successfully");
    },
    setImageDataFlag(flag, imageId, openedFor, imageIndex) {
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
      formData.append("summit_id", Number(this.sponsor.summit_id));
      formData.append("category_id", Number(this.sponsor.category_id));
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
        this.errors = { ...error.data.errors };
        Object.keys(error.data.errors).forEach(err => {
          const errorMessage = error.data.errors[err][0];
          this.notifyVue(errorMessage, "danger");
          this.errors = { ...this.errors, [err]: errorMessage };
        });
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
      this.setImageDataFlag(false);
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
  computed: {
    ...mapState({
      summitsListData: state => state.summits.summitsListData,
      isSummitsListFetched: state => state.summits.isSummitsListFetched,
      categoriesListData: state =>
        state.sponsorsCategory.dashboardSponsorCategoriesData,
      isDashboardSponsorsCategoriesDataFetched: state =>
        state.sponsorsCategory.isDashboardSponsorsCategoriesDataFetched
    }),
    showFormWhenDataFetched() {
      if (this.operation !== "Edit Sponsor")
        return (
          this.isSummitsListFetched &&
          this.isDashboardSponsorsCategoriesDataFetched
        );
      return true;
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
    store.commit(types.home.mutations.SET_SPINNER_FLAG, true);
    this.fetchSummitsList();
    this.fetchCategoriesList();
    if (this.$route.name === "Edit Sponsor") {
      this.sponsor.name = this.editData.name;
      this.sponsor.link = this.editData.link;
      this.sponsor.summit_id =
        (this.editData.summit && this.editData.summit.id) || "-1";
      this.sponsor.category_id =
        (this.editData.category && this.editData.category.id) || "-1";
      this.sponsor.img_logo = this.editData.images.img_logo;
    }
  },
  updated() {
    if (
      this.isSummitsListFetched &&
      this.isDashboardSponsorsCategoriesDataFetched
    )
      store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
  }
};
</script>
