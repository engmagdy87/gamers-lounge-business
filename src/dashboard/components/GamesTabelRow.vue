<template>
  <tr>
    <th scope="row">{{ id }}</th>
    <td>{{ rowData.title }}</td>
    <td>{{ rowData.description }}</td>
    <td>
      <a
        v-if="
          rowData.images.img_logo !== null &&
            rowData.images.img_logo !== undefined
        "
        :href="rowData.images.img_logo.path"
        target="_blank"
        >Img</a
      >
    </td>

    <td
      v-if="
        rowData.images !== undefined && rowData.images.img_cover_main !== null
      "
    >
      <a
        v-for="(img, index) in rowData.images.img_cover_main"
        :key="index"
        :href="img.path"
        target="_blank"
        >Img{{ index + 1 }}</a
      >
    </td>
    <td v-else></td>
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
        name: "Edit Game",
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
