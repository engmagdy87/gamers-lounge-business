<template>
  <div v-if="isAboutRowFetched">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/dashboard/about">About</a>
        </li>
        <li class="breadcrumb-item">
          <router-link :to="`/dashboard/about/rows/list/${aboutRowsData.id}`"
            >Section {{ aboutRowsData.order }} Rows</router-link
          >
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          Columns
        </li>
      </ol>
    </nav>
    <div class="row">
      <div class="col-sm">
        <h2 class="heading-margin">
          Columns ({{ aboutRowData.columns.length }})
        </h2>
      </div>
      <div class="col-sm">
        <router-link :to="`/dashboard/about/columns/create/${rowId}`">
          <button
            type="button"
            class="btn btn-secondary d-block ml-auto heading-margin"
          >
            Add Column
          </button>
        </router-link>
      </div>
    </div>
    <Table
      class="table-hover table-striped"
      :columns="table.columns"
      :data="aboutRowData.columns"
      tableType="aboutColumns"
      :setShowDeleteDialogFlag="setAboutRowDataFlags"
    >
    </Table>
    <DeleteDialog
      :showFlag="showFlag"
      item="About Column"
      :deleteAction="removeAboutRow"
      :setShowDeleteDialogFlag="setAboutRowDataFlags"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import types from "../../../../store/types";
import Table from "../../../../dashboard/components/Table";
import DeleteDialog from "../../../../website/shared/DeleteDialog";

export default {
  data() {
    return {
      showFlag: false,
      targetId: null,
      locationInDataArray: null,
      table: {
        columns: [
          "Id",
          "Order",
          "Type",
          "Content",
          "Width in %",
          "Has Content",
          "Has External Video",
          "External Video",
          "Is Video Autoplay",
          "Images Content",
          "Videos Content",
          "Actions"
        ]
      }
    };
  },
  computed: {
    ...mapState({
      aboutRowsData: state => state.about.aboutRows,
      aboutRowData: state => state.about.aboutRow,
      aboutSections: state => state.about.aboutSections,
      isAboutRowFetched: state => state.about.isAboutRowFetched
    }),
    rowId() {
      return this.$route.params.rowId;
    }
  },
  methods: {
    ...mapActions({
      fetchColumnsRows: types.about.actions.FETCH_ABOUT_COLUMNS,
      deleteColumnRow: types.about.actions.DELETE_ABOUT_COLUMN
    }),
    async removeAboutRow() {
      const payload = {
        columnId: this.targetId,
        locationInDataArray: this.locationInDataArray
      };
      try {
        await this.deleteColumnRow(payload);
        this.setAboutRowDataFlags(false, null, null);
        this.notifyVue("About Row Deleted Successfully", "success");
      } catch (error) {
        this.notifyVue("Error Happened", "danger");
      }
    },
    setAboutRowDataFlags(flag, id, locationInDataArray) {
      this.showFlag = flag;
      this.targetId = id;
      this.locationInDataArray = locationInDataArray;
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
  components: {
    Table,
    DeleteDialog
  },
  mounted() {
    const { rowId } = this.$route.params;
    const payload = { rowId, requestSource: "dashboard" };
    this.fetchColumnsRows(payload);
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/sass/lbd/heading.scss";
</style>
