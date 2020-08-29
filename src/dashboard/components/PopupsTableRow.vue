<template>
  <tr>
    <th scope="row">{{ id }}</th>
    <td>{{ rowData.title }}</td>
    <td>
      <a :href="rowData.link" target="_blank">URL</a>
    </td>
    <td>
      <li v-for="(place, i) in rowData.places" :key="i">{{ place.name }}</li>
    </td>
    <td>
      <a
        v-if="
          rowData.images.img_main !== undefined &&
            rowData.images.img_main !== null
        "
        :href="rowData.images.img_main.path"
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
        name: "Edit Popup",
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
