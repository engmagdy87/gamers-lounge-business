<template>
  <div>
    <!-- <div class="container"> -->
    <div class="row">
      <div class="col-sm">
        <h2 class="heading-margin">Platforms ({{ platformsData.length }})</h2>
      </div>
      <div class="col-sm">
        <router-link to="/dashboard/platforms/create">
          <button
            type="button"
            class="btn btn-secondary d-block ml-auto heading-margin"
          >
            Add Platform
          </button>
        </router-link>
      </div>
      <!-- </div> -->
    </div>
    <LTable
      class="table-hover table-striped"
      :columns="table.columns"
      :data="platformsData"
      tableType="platforms"
      :setShowDeleteDialogFlag="setImageDataFlag"
    >
    </LTable>
    <DeleteDialog
      :showFlag="showFlag"
      :setShowDeleteDialogFlag="setImageDataFlag"
      item="Platform"
      :deleteAction="removePlatform"
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
        columns: ["Id", "Title", "Actions"]
      }
    };
  },
  computed: {
    ...mapState({
      platformsData: state => state.platforms.platformsData,
      isPlatformsDataFetched: state => state.platforms.isPlatformsDataFetched
    })
  },
  methods: {
    ...mapActions({
      fetchPlatforms: types.platforms.actions.FETCH_PLATFORMS,
      deletePlatform: types.platforms.actions.DELETE_PLATFORM
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
    async removePlatform() {
      const payload = {
        platformId: this.targetId,
        locationInDataArray: this.locationInDataArray
      };
      try {
        await this.deletePlatform(payload);
        this.resetFields();
        this.notifyVue("Event Deleted Successfully", "success");
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
    this.fetchPlatforms();
  }
};
</script>

<style lang="scss" scoped>
.heading-margin {
  margin-top: 15px !important;
  margin-bottom: 30px !important;
}
</style>
