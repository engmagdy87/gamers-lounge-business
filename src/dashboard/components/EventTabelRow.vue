<template>
  <tr>
    <th scope="row">{{ id }}</th>
    <td>{{ rowData.initial_title }}</td>
    <td>{{ rowData.final_title }}</td>
    <td>{{ rowData.initial_description }}</td>
    <td>{{ rowData.final_description }}</td>
    <td>
      {{ rowData.summit.initial_title }} ({{
        rowData.summit.active === 1 ? "Active" : ""
      }})
    </td>
    <td>{{ rowData.start_date }}</td>
    <td>{{ rowData.end_date }}</td>
    <td>{{ rowData.type }}</td>
    <td v-if="rowData.images !== undefined">
      <a :href="rowData.images.img_card.path" target="_blank">Img</a>
    </td>
    <td v-if="rowData.images !== undefined">
      <a
        v-for="(img, index) in rowData.images.img_cover_main"
        :key="index"
        :href="img.path"
        target="_blank"
        >Img{{ index + 1 }}</a
      >
    </td>
    <td v-if="rowData.images !== undefined">
      <a
        v-for="(img, index) in rowData.images.img_cover_over"
        :key="index"
        :href="img.path"
        target="_blank"
        >Img{{ index + 1 }}</a
      >
    </td>
    <td v-if="rowData.images !== undefined">
      <a :href="rowData.images.img_logo.path" target="_blank">Img</a>
    </td>
    <td v-if="rowData.images !== undefined">
      <a
        v-for="(img, index) in rowData.images.img_media"
        :key="index"
        :href="img.path"
        target="_blank"
        >Img{{ index + 1 }}</a
      >
    </td>
    <td v-if="rowData.images !== undefined">
      <a
        v-for="(vid, index) in rowData.images.vid_initial"
        :key="index"
        :href="vid.path"
        target="_blank"
        >Vid{{ index + 1 }}</a
      >
    </td>
    <td>{{ rowData.active }}</td>
  </tr>
</template>

<script>
export default {
  props: ["id", "rowData"]
};
</script>

<style lang="scss" scoped>
tr td a {
  margin-right: 5px;
}
</style>
