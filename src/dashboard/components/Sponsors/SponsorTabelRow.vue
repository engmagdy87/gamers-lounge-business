<template>
  <tr>
    <th scope="row">{{ id }}</th>
    <td>{{ rowData.name }}</td>
    <td>{{ rowData.order }}</td>
    <td>
      <p style="margin:2px" v-for="(place, i) in rowData.places" :key="i">
        {{ place }}
      </p>
    </td>
    <td>
      <a v-if="rowData.link" :href="rowData.link" target="__blank">URL</a>
    </td>
    <td>
      <a v-if="rowData.image" :href="rowData.image.url" target="__blank">URL</a>
    </td>
    <td>{{ rowData.is_enabled ? "Yes" : "No" }}</td>
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
        name: "Edit Sponsor",
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
