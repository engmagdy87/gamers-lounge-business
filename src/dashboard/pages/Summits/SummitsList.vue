<template>
  <div v-if="isSummitsFetched">
    <!-- <div class="container"> -->
    <div class="row">
      <div class="col-sm">
        <h2 class="heading-margin">Summits ({{ summitsData.length }})</h2>
      </div>
      <div class="col-sm">
        <router-link to="/dashboard/summits/create">
          <button
            type="button"
            class="btn btn-secondary d-block ml-auto heading-margin"
          >
            Add Summit
          </button>
        </router-link>
      </div>
      <!-- </div> -->
    </div>
    <LTable
      class="table-hover table-striped"
      :columns="table.columns"
      :data="summitsData"
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
        columns: [
          "Id",
          "Initial Title",
          "Final Title",
          "Initial Description",
          "Final Description",
          "Attendess",
          "Year",
          "Location",
          "Card Image",
          "Cover Main Image",
          "Cover Over Image",
          "Logo Image",
          "Media Image",
          "Video URL",
          "Active"
        ]
      }
    };
  },
  computed: {
    ...mapState({
      summitsData: state => state.summits.summitsData,
      isSummitsFetched: state => state.summits.isSummitsFetched
    })
  },
  methods: {
    ...mapActions({
      fetchSummits: types.summits.actions.FETCH_SUMMITS
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
    this.fetchSummits();
  }
};
</script>

<style lang="scss" scoped>
.heading-margin {
  margin-top: 15px !important;
  margin-bottom: 30px !important;
}
</style>
