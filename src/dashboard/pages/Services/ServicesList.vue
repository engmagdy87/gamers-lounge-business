<template>
  <div>
    <div class="row">
      <div class="col-sm">
        <h2 class="heading-margin">Services ({{ getServicesDataLength }})</h2>
      </div>
      <div class="col-sm">
        <router-link to="/dashboard/services/create">
          <button
            type="button"
            class="btn btn-secondary d-block ml-auto heading-margin"
          >
            Add Service
          </button>
        </router-link>
      </div>
    </div>
    <Table
      class="table-hover table-striped"
      :columns="table.columns"
      :data="getServicesData"
      tableType="services"
      :setShowDeleteDialogFlag="setServiceDataFlags"
    >
    </Table>
    <DeleteDialog
      :showFlag="showFlag"
      item="Service"
      :deleteAction="removeService"
      :setShowDeleteDialogFlag="setServiceDataFlags"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import types from "../../../store/types";
import Table from "../../../dashboard/components/Table";
import DeleteDialog from "../../../website/shared/DeleteDialog";

export default {
  data() {
    return {
      showFlag: false,
      targetId: null,
      locationInDataArray: null,
      table: {
        columns: [
          "Id",
          "Title",
          "Order",
          "Featured",
          "Published",
          "Admin",
          "Description",
          "Card Image",
          "Cover Image",
          "Slider Image",
          "Actions"
        ]
      }
    };
  },
  computed: {
    ...mapState({
      servicesData: state => state.services.services
    }),
    getServicesData() {
      return this.servicesData.data || [];
    },
    getServicesDataLength() {
      return this.servicesData.data ? this.servicesData.data.length : 0;
    }
  },
  methods: {
    ...mapActions({
      fetchServices: types.services.actions.FETCH_SERVICES,
      deleteService: types.services.actions.DELETE_SERVICE
    }),
    async removeService() {
      const payload = {
        id: this.targetId,
        locationInDataArray: this.locationInDataArray
      };
      try {
        await this.deleteService(payload);
        this.setServiceDataFlags(false, null, null);
        this.notifyVue("Service Deleted Successfully", "success");
      } catch (error) {
        this.notifyVue("Error Happened", "danger");
      }
    },
    setServiceDataFlags(flag, id, locationInDataArray) {
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
    const data = {
      first: 100,
      page: 1
    };
    const requestSource = {
      data,
      requestSource: "dashboard",
      showSpinner: true
    };
    this.fetchServices(requestSource);
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/lbd/heading.scss";
</style>
