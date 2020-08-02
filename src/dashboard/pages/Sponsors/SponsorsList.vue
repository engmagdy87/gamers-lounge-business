<template>
  <div>
    <!-- <div class="container"> -->
    <div class="row">
      <div class="col-sm">
        <h2 class="heading-margin">Sponsors ({{ sponsorsData.length }})</h2>
      </div>
      <div class="col-sm">
        <router-link to="/dashboard/sponsors/create">
          <button
            type="button"
            class="btn btn-secondary d-block ml-auto heading-margin"
          >
            Add Sponsor
          </button>
        </router-link>
      </div>
      <!-- </div> -->
    </div>
    <LTable
      class="table-hover table-striped"
      :columns="table.columns"
      :data="sponsorsData"
      tableType="sponsors"
      :setShowDeleteDialogFlag="setImageDataFlag"
    >
    </LTable>
    <DeleteDialog
      :showFlag="showFlag"
      :setShowDeleteDialogFlag="setImageDataFlag"
      item="Sponsor"
      :deleteAction="removeSponsor"
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
        columns: ["Id", "Name", "Link", "Logo Image", "Actions"]
      }
    };
  },
  computed: {
    ...mapState({
      sponsorsData: state => state.sponsors.sponsorsData,
      isSponsorsDataFetched: state => state.sponsors.isSponsorsDataFetched
    })
  },
  methods: {
    ...mapActions({
      fetchSponsors: types.sponsors.actions.FETCH_SPONSORS,
      deleteSponsor: types.sponsors.actions.DELETE_SPONSOR
    }),
    notifyVue(message, color) {
      this.$notifications.notify({
        message: `<span>${message}</span>`,
        horizontalAlign: "right",
        verticalAlign: "top",
        type: color
      });
    },
    setImageDataFlag(flag, id, locationInDataArray) {
      this.showFlag = flag;
      this.targetId = id;
      this.locationInDataArray = locationInDataArray;
    },
    async removeSponsor() {
      const payload = {
        sponsorId: this.targetId,
        locationInDataArray: this.locationInDataArray
      };
      try {
        await this.deleteSponsor(payload);
        this.resetFields();
        this.notifyVue("Sponsor Deleted Successfully", "success");
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
    this.fetchSponsors();
  }
};
</script>

<style lang="scss" scoped>
.heading-margin {
  margin-top: 15px !important;
  margin-bottom: 30px !important;
}
</style>
