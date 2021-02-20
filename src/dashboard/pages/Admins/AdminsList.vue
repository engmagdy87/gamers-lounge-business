<template>
  <div v-if="isAdminsDataFetched">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/dashboard/admins">Admins</a>
        </li>
      </ol>
    </nav>
    <div class="row">
      <div class="col-sm">
        <h2 class="heading-margin">Admins ({{ admins.length }})</h2>
      </div>
      <div class="col-sm">
        <router-link to="/dashboard/admins/create">
          <button
            type="button"
            class="btn btn-secondary d-block ml-auto heading-margin"
          >
            Add Admin
          </button>
        </router-link>
      </div>
    </div>
    <Table
      class="table-hover table-striped"
      :columns="table.columns"
      :data="admins"
      tableType="admins"
      :setShowDeleteDialogFlag="setAdminDataFlags"
    >
    </Table>
    <DeleteDialog
      :showFlag="showFlag"
      item="Admin"
      :deleteAction="removeAdmin"
      :setShowDeleteDialogFlag="setAdminDataFlags"
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
          "Username",
          "First Name",
          "Last Name",
          "Email",
          "Roles",
          "Actions"
        ]
      }
    };
  },
  computed: {
    ...mapState({
      admins: state => state.admins.admins,
      isAdminsDataFetched: state => state.admins.isAdminsDataFetched
    })
  },
  methods: {
    ...mapActions({
      fetchAdminsData: types.admins.actions.FETCH_ADMINS,
      deleteAdminData: types.admins.actions.DELETE_ADMIN
    }),
    async removeAdmin() {
      const payload = {
        id: this.targetId,
        locationInDataArray: this.locationInDataArray
      };
      try {
        await this.deleteAdminData(payload);
        this.setAdminDataFlags(false, null, null);
        this.notifyVue("Admin Deleted Successfully", "success");
      } catch (error) {
        this.notifyVue("Error Happened", "danger");
      }
    },
    setAdminDataFlags(flag, id, locationInDataArray) {
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
    this.fetchAdminsData();
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/lbd/heading.scss";
</style>
