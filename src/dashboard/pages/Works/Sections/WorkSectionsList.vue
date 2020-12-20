<template>
  <div v-if="isWorkSectionsFetched">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/dashboard/works">Works</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ workSections.title }} Work Sections
        </li>
      </ol>
    </nav>
    <div class="row">
      <div class="col-sm">
        <h2 class="heading-margin">
          {{ workSections.title }} Work Sections ({{
            workSections.sections.data.length
          }})
        </h2>
      </div>
      <div class="col-sm">
        <router-link :to="`/dashboard/works/sections/create/${workId}`">
          <button
            type="button"
            class="btn btn-secondary d-block ml-auto heading-margin"
          >
            Add Work Section
          </button>
        </router-link>
      </div>
    </div>
    <Table
      class="table-hover table-striped"
      :columns="table.columns"
      :data="workSections.sections.data"
      tableType="workSections"
      :setShowDeleteDialogFlag="setWorkSectionDataFlags"
    >
    </Table>
    <DeleteDialog
      :showFlag="showFlag"
      item="Work Section"
      :deleteAction="removeWorkSection"
      :setShowDeleteDialogFlag="setWorkSectionDataFlags"
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
      workSections: state => state.works.workSections,
      isWorkSectionsFetched: state => state.works.isWorkSectionsFetched
    }),
    workId() {
      return this.$route.params.workId;
    }
  },
  methods: {
    ...mapActions({
      fetchWorkSections: types.works.actions.FETCH_WORK_SECTIONS,
      deleteWorkSection: types.works.actions.DELETE_WORK_SECTION
    }),
    async removeWorkSection() {
      const payload = {
        workSectionId: this.targetId,
        locationInDataArray: this.locationInDataArray
      };
      try {
        await this.deleteWorkSection(payload);
        this.setWorkSectionDataFlags(false, null, null);
        this.notifyVue("Work Section Deleted Successfully", "success");
      } catch (error) {
        this.notifyVue("Error Happened", "danger");
      }
    },
    setWorkSectionDataFlags(flag, id, locationInDataArray) {
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
    const { workId } = this.$route.params;
    const payload = { workId, requestSource: "dashboard" };
    this.fetchWorkSections(payload);
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/sass/lbd/heading.scss";
</style>
