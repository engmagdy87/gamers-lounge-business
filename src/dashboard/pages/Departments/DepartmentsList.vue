<template>
  <div>
    <div class="row">
      <div class="col-sm">
        <h2 class="heading-margin">
          Departments ({{ departmentsData.length }})
        </h2>
      </div>
      <div class="col-sm">
        <router-link to="/dashboard/departments/create">
          <button
            type="button"
            class="btn btn-secondary d-block ml-auto heading-margin"
          >
            Add Department
          </button>
        </router-link>
      </div>
    </div>
    <Table
      class="table-hover table-striped"
      :columns="table.columns"
      :data="departmentsData"
      tableType="departments"
      :setShowDeleteDialogFlag="setDepartmentDataFlags"
    >
    </Table>
    <DeleteDialog
      :showFlag="showFlag"
      item="Department"
      :deleteAction="removeDepartment"
      :setShowDeleteDialogFlag="setDepartmentDataFlags"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import types from "../../../store/types";
import Table from "src/dashboard/components/Table.vue";
import DeleteDialog from "../../../website/shared/DeleteDialog";

export default {
  data() {
    return {
      showFlag: false,
      targetId: null,
      locationInDataArray: null,
      table: {
        columns: ["Id", "Name", "Actions"]
      }
    };
  },
  computed: {
    ...mapState({
      departmentsData: state => state.departments.departments
    })
  },
  methods: {
    ...mapActions({
      fetchDepartments: types.departments.actions.FETCH_DEPARTMENTS,
      deleteDepartment: types.departments.actions.DELETE_DEPARTMENT
    }),
    async removeDepartment() {
      const payload = {
        departmentId: this.targetId,
        locationInDataArray: this.locationInDataArray
      };
      try {
        await this.deleteDepartment(payload);
        this.setDepartmentDataFlags(false, null, null);
        this.notifyVue("Department Deleted Successfully", "success");
      } catch (error) {
        this.notifyVue("Error Happened", "danger");
      }
    },
    setDepartmentDataFlags(flag, id, locationInDataArray) {
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
    this.fetchDepartments();
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/lbd/heading.scss";
</style>
