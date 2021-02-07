<template>
  <div>
    <div class="row">
      <div class="col-sm">
        <h2 class="heading-margin">Works ({{ getWorksDataLength }})</h2>
      </div>
      <div class="col-sm">
        <router-link to="/dashboard/works/create">
          <button
            type="button"
            class="btn btn-secondary d-block ml-auto heading-margin"
          >
            Add Work
          </button>
        </router-link>
      </div>
    </div>
    <Table
      class="table-hover table-striped"
      :columns="table.columns"
      :data="getWorksData"
      tableType="works"
      :setShowDeleteDialogFlag="setWorkDataFlags"
    >
    </Table>
    <DeleteDialog
      :showFlag="showFlag"
      item="Work"
      :deleteAction="removeWork"
      :setShowDeleteDialogFlag="setWorkDataFlags"
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
          "Short Description",
          "Description",
          "Statistics",
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
      worksData: state => state.works.works
    }),
    getWorksData() {
      return this.worksData.data || [];
    },
    getWorksDataLength() {
      return this.worksData.data ? this.worksData.data.length : 0;
    }
  },
  methods: {
    ...mapActions({
      fetchWorks: types.works.actions.FETCH_WORKS,
      deleteWork: types.works.actions.DELETE_WORK
    }),
    async removeWork() {
      const payload = {
        id: this.targetId,
        locationInDataArray: this.locationInDataArray
      };
      try {
        await this.deleteWork(payload);
        this.setWorkDataFlags(false, null, null);
        this.notifyVue("Work Deleted Successfully", "success");
      } catch (error) {
        this.notifyVue("Error Happened", "danger");
      }
    },
    setWorkDataFlags(flag, id, locationInDataArray) {
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
    this.fetchWorks(requestSource);
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/lbd/heading.scss";
</style>
