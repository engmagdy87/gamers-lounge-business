<template>
  <tr>
    <td>{{ id }}</td>
    <td>{{ rowData.initial_title }}</td>
    <td>{{ rowData.final_title }}</td>
    <td>{{ rowData.initial_description }}</td>
    <td>{{ rowData.final_description }}</td>
    <td>{{ rowData.attendess }}</td>
    <td>{{ rowData.year }}</td>
    <td>{{ rowData.location }}</td>
    <td>
      <a
        v-for="(img, index) in rowData.images.img_card"
        :key="index"
        :href="img.path"
        target="_blank"
        >Img{{ index + 1 }}</a
      >
    </td>
    <td>
      <a
        v-for="(img, index) in rowData.images.img_cover_main"
        :key="index"
        :href="img.path"
        target="_blank"
        >Img{{ index + 1 }}</a
      >
    </td>
    <td>
      <a
        v-for="(img, index) in rowData.images.img_cover_over"
        :key="index"
        :href="img.path"
        target="_blank"
        >Img{{ index + 1 }}</a
      >
    </td>
    <td>
      <a
        v-for="(img, index) in rowData.images.img_logo"
        :key="index"
        :href="img.path"
        target="_blank"
        >Img{{ index + 1 }}</a
      >
    </td>
    <td>
      <a
        v-for="(img, index) in rowData.images.img_media"
        :key="index"
        :href="img.path"
        target="_blank"
        >Img{{ index + 1 }}</a
      >
    </td>
    <td>
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
