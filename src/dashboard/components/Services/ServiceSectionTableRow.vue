<template>
  <tr>
    <th scope="row">{{ id }}</th>
    <td>{{ rowData.title }}</td>
    <td>
      <div class="description" v-html="rowData.description_first"></div>
    </td>
    <td v-if="rowData.description_second !== 'undefined'">
      <div class="description" v-html="rowData.description_second"></div>
    </td>
    <td v-else></td>
    <td>{{ rowData.type }}</td>
    <td>{{ rowData.order }}</td>
    <td>{{ rowData.media_type_first }}</td>
    <td v-if="rowData.img_content_first">
      <a
        v-for="(img, i) in rowData.img_content_first"
        :href="img.url"
        :key="i"
        target="__blank"
        >IMG{{ i + 1 }}</a
      >
    </td>
    <td v-else />
    <td v-if="rowData.vid_content_first">
      <a
        v-for="(vid, i) in rowData.vid_content_first"
        :href="vid.url"
        :key="i"
        target="__blank"
        >VID{{ i + 1 }}</a
      >
    </td>
    <td v-else />
    <td>{{ rowData.media_type_second }}</td>
    <td v-if="rowData.img_content_second">
      <a
        v-for="(img, i) in rowData.img_content_second"
        :href="img.url"
        :key="i"
        target="__blank"
        >IMG{{ i + 1 }}</a
      >
    </td>
    <td v-else />
    <td v-if="rowData.vid_content_second">
      <a
        v-for="(vid, i) in rowData.vid_content_second"
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
export default {
  props: ["id", "rowData", "setShowDeleteDialogFlag"],
  methods: {
    redirectTo() {
      this.$router.push({
        name: "Edit Service Section",
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
