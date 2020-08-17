<template>
  <div>
    <!-- <div class="container"> -->
    <div class="row">
      <div class="col-sm">
        <h2 class="heading-margin">
          Sponsors Categories ({{ sponsorsCategoriesData.length }})
        </h2>
      </div>
      <div class="col-sm">
        <router-link to="/dashboard/sponsors-categories/create">
          <button
            type="button"
            class="btn btn-secondary d-block ml-auto heading-margin"
          >
            Add Sponsors Category
          </button>
        </router-link>
      </div>
      <!-- </div> -->
    </div>
    <LTable
      class="table-hover table-striped"
      :columns="table.columns"
      :data="sponsorsCategoriesData"
      tableType="sponsors-categories"
      :setShowDeleteDialogFlag="setShowDeleteDialog"
    >
    </LTable>
    <DeleteDialog
      :showFlag="showFlag"
      :setShowDeleteDialogFlag="setShowDeleteDialog"
      item="Sponsors Category"
      :deleteAction="removeSponsorsCategory"
    />
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
        columns: ["Id", "Title", "Actions"]
      }
    };
  },
  computed: {
    ...mapState({
      sponsorsCategoriesData: state =>
        state.sponsorsCategory.sponsorsCategoriesData
    })
  },
  methods: {
    ...mapActions({
      fetchSponsorsCategory:
        types.sponsorsCategories.actions.FETCH_SPONSORS_CATEGORIES,
      deleteSponsorsCategory:
        types.sponsorsCategories.actions.DELETE_SPONSORS_CATEGORY
    }),
    notifyVue(message, color) {
      this.$notifications.notify({
        message: `<span>${message}</span>`,
        horizontalAlign: "right",
        verticalAlign: "top",
        type: color
      });
    },
    setShowDeleteDialog(flag, id, locationInDataArray) {
      this.showFlag = flag;
      this.targetId = id;
      this.locationInDataArray = locationInDataArray;
    },
    async removeSponsorsCategory() {
      const payload = {
        sponsorsCategoryId: this.targetId,
        locationInDataArray: this.locationInDataArray
      };
      try {
        await this.deleteSponsorsCategory(payload);
        this.resetFields();
        this.notifyVue("Sponsors Category Deleted Successfully", "success");
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
    this.fetchSponsorsCategory();
  }
};
</script>

<style lang="scss" scoped>
.heading-margin {
  margin-top: 15px !important;
  margin-bottom: 30px !important;
}
</style>
