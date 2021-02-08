<template>
  <div>
    <div class="row">
      <div class="col-sm">
        <h2 class="heading-margin">Team ({{ teamData.length }})</h2>
      </div>
      <div class="col-sm">
        <router-link to="/dashboard/team/create">
          <button
            type="button"
            class="btn btn-secondary d-block ml-auto heading-margin"
          >
            Add Team Member
          </button>
        </router-link>
      </div>
    </div>
    <Table
      class="table-hover table-striped"
      :columns="table.columns"
      :data="teamData"
      tableType="team"
      :setShowDeleteDialogFlag="setTeamDataFlags"
    >
    </Table>
    <DeleteDialog
      :showFlag="showFlag"
      item="Team Member"
      :deleteAction="removeTeam"
      :setShowDeleteDialogFlag="setTeamDataFlags"
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
          "Title",
          "Order",
          "Published",
          "Profile Image",
          "Actions"
        ]
      }
    };
  },
  computed: {
    ...mapState({
      teamData: state => state.team.team
    })
  },
  methods: {
    ...mapActions({
      fetchTeam: types.team.actions.FETCH_TEAM,
      deleteTeamMember: types.team.actions.DELETE_TEAM_MEMBER
    }),
    async removeTeam() {
      const payload = {
        teamMemberId: this.targetId,
        locationInDataArray: this.locationInDataArray
      };
      try {
        await this.deleteTeamMember(payload);
        this.setTeamDataFlags(false, null, null);
        this.notifyVue("Team Deleted Successfully", "success");
      } catch (error) {
        this.notifyVue("Error Happened", "danger");
      }
    },
    setTeamDataFlags(flag, id, locationInDataArray) {
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
    const requestSource = {
      requestSource: "dashboard",
      showSpinner: true
    };
    this.fetchTeam(requestSource);
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/lbd/heading.scss";
</style>
