<template>
  <div>
    <!-- <div class="container"> -->
    <div class="row">
      <div class="col-sm">
        <h2 class="heading-margin">Giveaways ({{ giveawaysData.length }})</h2>
      </div>
      <div class="col-sm">
        <router-link to="/dashboard/giveaways/create">
          <button
            type="button"
            class="btn btn-secondary d-block ml-auto heading-margin"
          >
            Add Giveaway
          </button>
        </router-link>
      </div>
      <!-- </div> -->
    </div>
    <LTable
      class="table-hover table-striped"
      :columns="table.columns"
      :data="giveawaysData"
      tableType="giveaways"
      :setShowDeleteDialogFlag="setImageDataFlag"
    >
    </LTable>
    <DeleteDialog
      :showFlag="showFlag"
      :setShowDeleteDialogFlag="setImageDataFlag"
      item="Giveaway"
      :deleteAction="removeGiveaway"
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
        columns: [
          "Id",
          "Title",
          "Description",
          "email_template",
          "Start Date",
          "End Date",
          "Type",
          "Cover Type",
          "Register Limit",
          "Is External",
          "Published",
          "Card Image",
          "Cover Over Image",
          "Cover Main Image",
          "Logo Image",
          "Cover Main Video URL",
          "Actions"
        ]
      }
    };
  },
  computed: {
    ...mapState({
      giveawaysData: state => state.giveaways.giveawaysList,
      isGiveawaysFetched: state => state.giveaways.isGiveawaysFetched
    })
  },
  methods: {
    ...mapActions({
      fetchGiveaways: types.giveaways.actions.FETCH_GIVEAWAY_LIST,
      deleteGiveaway: types.giveaways.actions.DELETE_GIVEAWAY
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
    async removeGiveaway() {
      const payload = {
        giveawayId: this.targetId,
        locationInDataArray: this.locationInDataArray
      };
      try {
        await this.deleteGiveaway(payload);
        this.resetFields();
        this.notifyVue("Giveaway Deleted Successfully", "success");
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
    this.fetchGiveaways();
  }
};
</script>

<style lang="scss" scoped>
.heading-margin {
  margin-top: 15px !important;
  margin-bottom: 30px !important;
}
</style>
