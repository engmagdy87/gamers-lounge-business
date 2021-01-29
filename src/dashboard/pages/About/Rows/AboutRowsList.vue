<template>
  <div v-if="isAboutRowsFetched">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/dashboard/about">About</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          Section {{ aboutRowsData.order }} Rows
        </li>
      </ol>
    </nav>
    <div class="row">
      <div class="col-sm">
        <h2 class="heading-margin">
          Section {{ aboutRowsData.order }} Rows ({{
            aboutRowsData.rows.length
          }})
        </h2>
      </div>
      <div class="col-sm">
        <router-link :to="`/dashboard/about/rows/create/${sectionId}`">
          <button
            type="button"
            class="btn btn-secondary d-block ml-auto heading-margin"
          >
            Add Row
          </button>
        </router-link>
      </div>
    </div>
    <Table
      class="table-hover table-striped"
      :columns="table.columns"
      :data="aboutRowsData.rows"
      tableType="aboutRows"
      :setShowDeleteDialogFlag="setAboutRowDataFlags"
    >
    </Table>
    <DeleteDialog
      :showFlag="showFlag"
      item="About Row"
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
        columns: ["Id", "Order", "Actions"]
      }
    };
  },
  computed: {
    ...mapState({
      aboutRowsData: state => state.about.aboutRows,
      aboutSections: state => state.about.aboutSections,
      isAboutRowsFetched: state => state.about.isAboutRowsFetched
    }),
    sectionId() {
      return this.$route.params.sectionId;
    }
  },
  methods: {
    ...mapActions({
      fetchAboutRows: types.about.actions.FETCH_ABOUT_ROWS,
      deleteAboutRow: types.about.actions.DELETE_ABOUT_ROW
    }),
    async removeAboutRow() {
      const payload = {
        rowId: this.targetId,
        locationInDataArray: this.locationInDataArray
      };
      try {
        await this.deleteAboutRow(payload);
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
    const { sectionId } = this.$route.params;
    const payload = { sectionId, requestSource: "dashboard" };
    this.fetchAboutRows(payload);
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/sass/lbd/heading.scss";
</style>
