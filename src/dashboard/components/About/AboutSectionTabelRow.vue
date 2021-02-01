<template>
  <tr>
    <th scope="row">{{ id }}</th>
    <td>{{ rowData.order }}</td>
    <td>{{ rowData.enabled ? "Yes" : "No" }}</td>
    <td class="table-actions">
      <img src="/images/edit.svg" alt="edit" @click="redirectTo" />
      <img
        src="/images/delete.svg"
        alt="delete"
        @click="setShowDeleteDialogFlag(true, rowData.id, id - 1)"
      />
      <router-link
        :to="{
          path: `/dashboard/about/rows/list/${rowData.id}`
        }"
      >
        <img src="/images/visibility.svg" alt="show" />
      </router-link>
    </td>
  </tr>
</template>

<script>
export default {
  props: ["id", "rowData", "setShowDeleteDialogFlag"],
  methods: {
    redirectTo() {
      this.$router.push({
        name: "Edit About Section",
        params: { data: this.rowData }
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
