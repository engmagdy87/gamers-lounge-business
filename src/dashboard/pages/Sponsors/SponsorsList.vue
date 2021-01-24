<template>
  <div>
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
    </div>
    <Table
      class="table-hover table-striped"
      :columns="table.columns"
      :data="sponsorsData"
      tableType="sponsors"
      :setShowDeleteDialogFlag="setSponsorDataFlags"
    >
    </Table>
    <DeleteDialog
      :showFlag="showFlag"
      item="Sponsor"
      :deleteAction="removeSponsor"
      :setShowDeleteDialogFlag="setSponsorDataFlags"
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
          "Name",
          "Order",
          "Places",
          "Link",
          "Main Image",
          "Published",
          "Actions"
        ]
      }
    };
  },
  computed: {
    ...mapState({
      sponsorsData: state => state.sponsors.sponsors
    })
  },
  methods: {
    ...mapActions({
      fetchSponsors: types.sponsors.actions.FETCH_SPONSORS,
      deleteSponsor: types.sponsors.actions.DELETE_SPONSOR
    }),
    async removeSponsor() {
      const payload = {
        sponsorId: this.targetId,
        locationInDataArray: this.locationInDataArray
      };
      try {
        await this.deleteSponsor(payload);
        this.setSponsorDataFlags(false, null, null);
        this.notifyVue("Sponsor Deleted Successfully", "success");
      } catch (error) {
        this.notifyVue("Error Happened", "danger");
      }
    },
    setSponsorDataFlags(flag, id, locationInDataArray) {
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
    this.fetchSponsors();
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/lbd/heading.scss";
</style>
