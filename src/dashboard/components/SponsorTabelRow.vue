<template>
  <tr>
    <th scope="row">{{ id }}</th>
    <td>{{ rowData.name }}</td>
    <td>
      <a :href="rowData.link" target="_blank">{{ rowData.link }}</a>
    </td>
    <td>
      <a
        v-if="
          rowData.images.img_logo !== undefined &&
            rowData.images.img_logo !== null
        "
        :href="rowData.images.img_logo.path"
        target="_blank"
        >Img</a
      >
    </td>
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
        name: "Edit Sponsor",
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
