<template>
  <tr>
    <th scope="row">{{ id }}</th>
    <td>{{ rowData.order }}</td>
    <td>{{ rowData.type.toLowerCase() }}</td>
    <td>
      <div class="description" v-html="rowData.content"></div>
    </td>
    <td>{{ rowData.ratio }}</td>
    <td>{{ rowData.fillable ? "Yes" : "No" }}</td>
    <td>{{ rowData.is_vid_extenral_enabled ? "Yes" : "No" }}</td>
    <td v-if="rowData.is_vid_extenral_enabled">
      <a :href="rowData.vid_extenral" target="__blank">URL</a>
    </td>
    <td v-else></td>
    <td
      v-if="
        rowData.type === MEDIA_TYPES.VIDEO && rowData.vid_content.length > 0
      "
    >
      {{ rowData.vid_content[0].is_auto_play ? "Yes" : "No" }}
    </td>
    <td v-else></td>
    <td v-if="rowData.img_content">
      <a
        v-for="(img, i) in rowData.img_content"
        :href="img.url"
        :key="i"
        target="__blank"
        >IMG{{ i + 1 }}</a
      >
    </td>
    <td v-else />
    <td v-if="rowData.vid_content">
      <a
        v-for="(vid, i) in rowData.vid_content"
        :href="vid.url"
        :key="i"
        target="__blank"
        >VID{{ i + 1 }}</a
      >
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
        name: "Edit Work Column",
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
