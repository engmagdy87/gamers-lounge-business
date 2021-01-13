<template>
  <div v-if="isServiceRowsFetched">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/dashboard/services">Services</a>
        </li>
        <li class="breadcrumb-item">
          <router-link
            :to="`/dashboard/services/sections/list/${serviceSections.id}`"
            >{{ serviceSections.title }} Service Sections</router-link
          >
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          Section {{ serviceRowsData.order }} Rows
        </li>
      </ol>
    </nav>
    <div class="row">
      <div class="col-sm">
        <h2 class="heading-margin">
          Section {{ serviceRowsData.order }} Rows ({{
            serviceRowsData.rows.length
          }})
        </h2>
      </div>
      <div class="col-sm">
        <router-link :to="`/dashboard/services/rows/create/${sectionId}`">
          <button
            type="button"
            class="btn btn-secondary d-block ml-auto heading-margin"
          >
            Add Row in Service Row
          </button>
        </router-link>
      </div>
    </div>
    <Table
      class="table-hover table-striped"
      :columns="table.columns"
      :data="serviceRowsData.rows"
      tableType="serviceRows"
      :setShowDeleteDialogFlag="setServiceRowDataFlags"
    >
    </Table>
    <DeleteDialog
      :showFlag="showFlag"
      item="Service Row"
      :deleteAction="removeServiceRow"
      :setShowDeleteDialogFlag="setServiceRowDataFlags"
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
      serviceRowsData: state => state.services.serviceRows,
      serviceSections: state => state.services.serviceSections,
      isServiceRowsFetched: state => state.services.isServiceRowsFetched
    }),
    sectionId() {
      return this.$route.params.sectionId;
    }
  },
  methods: {
    ...mapActions({
      fetchServiceRows: types.services.actions.FETCH_SERVICE_ROWS,
      deleteServiceRow: types.services.actions.DELETE_SERVICE_ROW
    }),
    async removeServiceRow() {
      const payload = {
        rowId: this.targetId,
        locationInDataArray: this.locationInDataArray
      };
      try {
        await this.deleteServiceRow(payload);
        this.setServiceRowDataFlags(false, null, null);
        this.notifyVue("Service Row Deleted Successfully", "success");
      } catch (error) {
        this.notifyVue("Error Happened", "danger");
      }
    },
    setServiceRowDataFlags(flag, id, locationInDataArray) {
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
    this.fetchServiceRows(payload);
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/sass/lbd/heading.scss";
</style>
