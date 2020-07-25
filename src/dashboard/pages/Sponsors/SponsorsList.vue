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
    >
    </LTable>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import types from "../../../store/types";
import LTable from "src/dashboard/components/Table.vue";

export default {
  data() {
    return {
      table: {
        columns: ["Id", "Name", "Link", "Logo Image"]
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
      fetchSponsors: types.sponsors.actions.FETCH_SPONSORS
    }),
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
    LTable
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
