<template>
  <tr>
    <th scope="row">{{ id }}</th>
    <td>{{ rowData.title }}</td>
    <td>{{ rowData.priority }}</td>
    <td>{{ rowData.enabled ? "Yes" : "No" }}</td>
    <td class="table-actions">
      <img src="/website/img/edit.svg" alt="edit" @click="redirectTo" />
      <img
        src="/website/img/delete.svg"
        alt="delete"
        @click="setShowDeleteDialogFlag(true, rowData.id, id - 1)"
      />
    </td>
  </tr>
</template>

<script>
export default {
  props: ["id", "rowData", "setShowDeleteDialogFlag"],
  methods: {
    redirectTo() {
      this.$router.push({
        name: "Edit Sponsors Category",
        params: { data: this.rowData }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
tr td a {
  margin-right: 5px;
}
.table-actions {
  display: flex;
  img {
    margin: 5px 10px;
    cursor: pointer;
  }
}
</style>
