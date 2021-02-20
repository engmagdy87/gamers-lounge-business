<template>
  <tr>
    <th scope="row">{{ id }}</th>
    <td>{{ rowData.username }}</td>
    <td>{{ rowData.first_name }}</td>
    <td>{{ rowData.last_name }}</td>
    <td>{{ rowData.email }}</td>
    <td>
      <ul>
        <li v-for="(role, i) in rowData.roles" :key="i">
          {{ role.toUpperCase() }}
        </li>
      </ul>
    </td>
    <td class="table-actions">
      <img src="/images/reset.svg" alt="edit" @click="resetPassword" />
      <img src="/images/edit.svg" alt="edit" @click="redirectTo" />
      <img
        src="/images/delete.svg"
        alt="delete"
        @click="setShowDeleteDialogFlag(true, rowData.id, id - 1)"
      />
    </td>
  </tr>
</template>

<script>
import { mapActions } from "vuex";
import types from "../../../store/types";
import * as MEDIA_TYPES from "../../../constants/MediaTypes";
export default {
  props: ["id", "rowData", "setShowDeleteDialogFlag"],
  computed: {
    MEDIA_TYPES() {
      return MEDIA_TYPES;
    }
  },
  methods: {
    ...mapActions({
      resetAdminPassword: types.admins.actions.RESET_ADMIN_PASSWORD
    }),
    resetPassword: async function() {
      try {
        await this.resetAdminPassword(this.rowData.id);
        this.notifyVue(
          `Password Reset Successfully for ${this.rowData.username}`,
          "success"
        );
      } catch (errors) {
        JSON.parse(errors).forEach(error => {
          this.notifyVue(error.message, "danger");
        });
      }
    },
    redirectTo() {
      this.$router.push({
        name: "Edit Admin",
        params: { data: this.rowData }
      });
    },
    notifyVue(message, color) {
      this.$notifications.notify({
        message: `<span>${message}</span>`,
        horizontalAlign: "right",
        verticalAlign: "top",
        type: color
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/color-palette.scss";
@import "../../../assets/sass/website/variables.scss";
@import "../../../assets/sass/lbd/table-row.scss";
</style>
