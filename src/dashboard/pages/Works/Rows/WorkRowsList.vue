<template>
  <div v-if="isWorkRowsFetched">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/dashboard/works">Works</a>
        </li>
        <li class="breadcrumb-item">
          <a :href="`/dashboard/works/sections/list/${workSections.id}`"
            >{{ workSections.title }} Work Sections</a
          >
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          Section {{ workRowsData.order }} Rows
        </li>
      </ol>
    </nav>
    <div class="row">
      <div class="col-sm">
        <h2 class="heading-margin">
          Section {{ workRowsData.order }} Rows ({{ workRowsData.rows.length }})
        </h2>
      </div>
      <div class="col-sm">
        <router-link :to="`/dashboard/works/rows/create/${workSectionId}`">
          <button
            type="button"
            class="btn btn-secondary d-block ml-auto heading-margin"
          >
            Add Row in Work Row
          </button>
        </router-link>
      </div>
    </div>
    <Table
      class="table-hover table-striped"
      :columns="table.columns"
      :data="workRowsData.rows"
      tableType="workRows"
      :setShowDeleteDialogFlag="setWorkRowDataFlags"
    >
    </Table>
    <DeleteDialog
      :showFlag="showFlag"
      item="Work Row"
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
        columns: ["Id", "Order", "Actions"]
      }
    };
  },
  computed: {
    ...mapState({
      workRowsData: state => state.works.workRows,
      workSections: state => state.works.workSections,
      isWorkRowsFetched: state => state.works.isWorkRowsFetched
    }),
    workSectionId() {
      return this.$route.params.workSectionId;
    }
  },
  methods: {
    ...mapActions({
      fetchWorkRows: types.works.actions.FETCH_WORK_ROWS,
      deleteWorkRow: types.works.actions.DELETE_WORK_ROW
    }),
    async removeWorkRow() {
      const payload = {
        workRowId: this.targetId,
        locationInDataArray: this.locationInDataArray
      };
      try {
        await this.deleteWorkRow(payload);
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
    const { workSectionId } = this.$route.params;
    const payload = { workSectionId, requestSource: "dashboard" };
    this.fetchWorkRows(payload);
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/sass/lbd/heading.scss";
</style>
