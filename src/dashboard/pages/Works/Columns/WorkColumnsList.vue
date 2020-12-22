<template>
  <div v-if="isWorkRowFetched">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/dashboard/works">Works</a>
        </li>
        <li class="breadcrumb-item">
          <router-link :to="`/dashboard/works/sections/list/${workSections.id}`"
            >{{ workSections.title }} Work Sections</router-link
          >
        </li>
        <li class="breadcrumb-item">
          <router-link :to="`/dashboard/works/rows/list/${workRowsData.id}`"
            >Section {{ workRowsData.order }} Rows</router-link
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
          Columns ({{ workRowData.columns.length }})
        </h2>
      </div>
      <div class="col-sm">
        <router-link :to="`/dashboard/works/columns/create/${workRowId}`">
          <button
            type="button"
            class="btn btn-secondary d-block ml-auto heading-margin"
          >
            Add Work Column
          </button>
        </router-link>
      </div>
    </div>
    <Table
      class="table-hover table-striped"
      :columns="table.columns"
      :data="workRowData.columns"
      tableType="workColumns"
      :setShowDeleteDialogFlag="setWorkRowDataFlags"
    >
    </Table>
    <DeleteDialog
      :showFlag="showFlag"
      item="Work Column"
      :deleteAction="removeWorkRow"
      :setShowDeleteDialogFlag="setWorkRowDataFlags"
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
          "Images Content",
          "Videos Content",
          "Actions"
        ]
      }
    };
  },
  computed: {
    ...mapState({
      workRowsData: state => state.works.workRows,
      workRowData: state => state.works.workRow,
      workSections: state => state.works.workSections,
      isWorkRowFetched: state => state.works.isWorkRowFetched
    }),
    workRowId() {
      return this.$route.params.workRowId;
    }
  },
  methods: {
    ...mapActions({
      fetchColumnsRows: types.works.actions.FETCH_WORK_COLUMNS,
      deleteColumnRow: types.works.actions.DELETE_WORK_COLUMN
    }),
    async removeWorkRow() {
      const payload = {
        workColumnId: this.targetId,
        locationInDataArray: this.locationInDataArray
      };
      try {
        await this.deleteColumnRow(payload);
        this.setWorkRowDataFlags(false, null, null);
        this.notifyVue("Work Row Deleted Successfully", "success");
      } catch (error) {
        this.notifyVue("Error Happened", "danger");
      }
    },
    setWorkRowDataFlags(flag, id, locationInDataArray) {
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
    const { workRowId } = this.$route.params;
    const payload = { workRowId, requestSource: "dashboard" };
    this.fetchColumnsRows(payload);
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/sass/lbd/heading.scss";
</style>
