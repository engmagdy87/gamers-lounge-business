<template>
  <tr>
    <th scope="row">{{ id }}</th>
    <td>{{ rowData.title }}</td>
    <td>{{ rowData.description }}</td>
    <td v-if="rowData.images.img_logo !== null">
      <a :href="rowData.images.img_logo.path" target="_blank">Img</a>
    </td>
    <td v-else></td>
    <td v-if="rowData.images.img_cover_main !== null">
      <a
        v-for="(img, index) in rowData.images.img_cover_main"
        :key="index"
        :href="img.path"
        target="_blank"
        >Img{{ index + 1 }}</a
      >
    </td>
    <td v-else></td>
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
