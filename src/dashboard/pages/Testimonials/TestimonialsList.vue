<template>
  <div>
    <!-- <div class="container"> -->
    <div class="row">
      <div class="col-sm">
        <h2 class="heading-margin">
          Testimonials ({{ testimonialsData.length }})
        </h2>
      </div>
      <div class="col-sm">
        <router-link to="/dashboard/testimonials/create">
          <button
            type="button"
            class="btn btn-secondary d-block ml-auto heading-margin"
          >
            Add Testimonial
          </button>
        </router-link>
      </div>
      <!-- </div> -->
    </div>
    <LTable
      class="table-hover table-striped"
      :columns="table.columns"
      :data="testimonialsData"
      tableType="testimonials"
      :setShowDeleteDialogFlag="setImageDataFlag"
    >
    </LTable>
    <DeleteDialog
      :showFlag="showFlag"
      :setShowDeleteDialogFlag="setImageDataFlag"
      item="Testimonial"
      :deleteAction="removeTestimonial"
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
          "Name",
          "Company",
          "Title",
          "Vote",
          "Review",
          "Profile Image",
          "Actions"
        ]
      }
    };
  },
  computed: {
    ...mapState({
      testimonialsData: state => state.testimonials.dashboardTestimonialsData
    })
  },
  methods: {
    ...mapActions({
      fetchTestimonials:
        types.testimonials.actions.FETCH_DASHBOARD_TESTIMONIALS,
      deleteTestimonial: types.testimonials.actions.DELETE_TESTIMONIAL
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
    async removeTestimonial() {
      const payload = {
        testimonialId: this.targetId,
        locationInDataArray: this.locationInDataArray
      };
      try {
        await this.deleteTestimonial(payload);
        this.resetFields();
        this.notifyVue("Testimonial Deleted Successfully", "success");
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
    this.fetchTestimonials();
  }
};
</script>

<style lang="scss" scoped>
.heading-margin {
  margin-top: 15px !important;
  margin-bottom: 30px !important;
}
</style>
