<template>
  <tr>
    <th scope="row">{{ id }}</th>
    <td>{{ rowData.name }}</td>
    <td>{{ rowData.title }}</td>
    <td>{{ rowData.order }}</td>
    <td>{{ rowData.is_enabled ? "Yes" : "No" }}</td>
    <td>
      <a
        v-if="rowData.img_profile"
        :href="rowData.img_profile.url"
        target="__blank"
        >URL</a
      >
    </td>
    <td class="table-actions">
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
export default {
  props: ["id", "rowData", "setShowDeleteDialogFlag"],
  methods: {
    redirectTo() {
      this.$router.push({
        name: "Edit Team Member",
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
