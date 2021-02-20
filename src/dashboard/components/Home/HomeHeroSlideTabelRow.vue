<template>
  <tr>
    <th scope="row">{{ id }}</th>
    <td>{{ rowData.title }}</td>
    <td>
      <div class="description" v-html="rowData.description"></div>
    </td>
    <td>{{ rowData.order }}</td>
    <td v-if="rowData.url">
      <a :href="rowData.url" target="__blank">URL</a>
    </td>
    <td v-else></td>
    <td v-if="rowData.type">{{ rowData.type.toLowerCase() }}</td>
    <td v-else></td>
    <td>{{ rowData.is_enabled ? "Yes" : "No" }}</td>

    <td v-if="rowData.type === MEDIA_TYPES.VIDEO && rowData.vid_main">
      {{ rowData.vid_main.is_auto_play ? "Yes" : "No" }}
    </td>
    <td v-else></td>
    <td v-if="rowData.img_main">
      <a :href="rowData.img_main.url" target="__blank">IMG</a>
    </td>
    <td v-else />
    <td v-if="rowData.vid_main">
      <a :href="rowData.vid_main.url" target="__blank">VID</a>
    </td>
    <td v-else />
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
import * as MEDIA_TYPES from "../../../constants/MediaTypes";
export default {
  props: ["id", "rowData", "setShowDeleteDialogFlag"],
  computed: {
    MEDIA_TYPES() {
      return MEDIA_TYPES;
    }
  },
  methods: {
    redirectTo() {
      this.$router.push({
        name: "Edit Home Hero Slide",
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
