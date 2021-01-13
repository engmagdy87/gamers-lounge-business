<template>
  <div v-if="isServiceSectionsFetched">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/dashboard/services">Services</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ serviceSections.title }} Service Sections
        </li>
      </ol>
    </nav>
    <div class="row">
      <div class="col-sm">
        <h2 class="heading-margin">
          {{ serviceSections.title }} Service Sections ({{
            serviceSections.sections.data.length
          }})
        </h2>
      </div>
      <div class="col-sm">
        <router-link :to="`/dashboard/services/sections/create/${id}`">
          <button
            type="button"
            class="btn btn-secondary d-block ml-auto heading-margin"
          >
            Add Service Section
          </button>
        </router-link>
      </div>
    </div>
    <Table
      class="table-hover table-striped"
      :columns="table.columns"
      :data="serviceSections.sections.data"
      tableType="serviceSections"
      :setShowDeleteDialogFlag="setServiceSectionDataFlags"
    >
    </Table>
    <DeleteDialog
      :showFlag="showFlag"
      item="Service Section"
      :deleteAction="removeServiceSection"
      :setShowDeleteDialogFlag="setServiceSectionDataFlags"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import types from "../../../../store/types";
import Table from "../../../../dashboard/components/Table";
import DeleteDialog from "../../../../website/shared/DeleteDialog";

export default {
  data() {
    return {
      showFlag: false,
      targetId: null,
      locationInDataArray: null,
      table: {
        columns: ["Id", "Order", "Template", "Published", "Actions"]
      }
    };
  },
  computed: {
    ...mapState({
      serviceSections: state => state.services.serviceSections,
      isServiceSectionsFetched: state => state.services.isServiceSectionsFetched
    }),
    id() {
      return this.$route.params.id;
    }
  },
  methods: {
    ...mapActions({
      fetchServiceSections: types.services.actions.FETCH_SERVICE_SECTIONS,
      deleteServiceSection: types.services.actions.DELETE_SERVICE_SECTION
    }),
    async removeServiceSection() {
      const payload = {
        sectionId: this.targetId,
        locationInDataArray: this.locationInDataArray
      };
      try {
        await this.deleteServiceSection(payload);
        this.setServiceSectionDataFlags(false, null, null);
        this.notifyVue("Service Section Deleted Successfully", "success");
      } catch (error) {
        this.notifyVue("Error Happened", "danger");
      }
    },
    setServiceSectionDataFlags(flag, id, locationInDataArray) {
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
    const { id } = this.$route.params;
    const payload = { id, requestSource: "dashboard" };
    this.fetchServiceSections(payload);
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/sass/lbd/heading.scss";
</style>
