<template>
  <tr>
    <th scope="row">{{ id }}</th>
    <td>{{ rowData.title }}</td>
    <td>
      <div class="description" v-html="rowData.description"></div>
    </td>
    <td>{{ rowData.order }}</td>
    <td>{{ rowData.type.toLowerCase() }}</td>
    <td>{{ rowData.is_featured ? "Yes" : "No" }}</td>
    <td>{{ rowData.is_enabled ? "Yes" : "No" }}</td>

    <td
      v-if="rowData.type === MEDIA_TYPES.VIDEO && rowData.vid_main.length > 0"
    >
      {{ rowData.vid_main[0].is_auto_play ? "Yes" : "No" }}
    </td>
    <td v-else></td>
    <td v-if="rowData.img_main">
      <a
        v-for="(img, i) in rowData.img_main"
        :href="img.url"
        :key="i"
        target="__blank"
        >IMG{{ i + 1 }}</a
      >
    </td>
    <td v-else />
    <td v-if="rowData.vid_main">
      <a
        v-for="(vid, i) in rowData.vid_main"
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
