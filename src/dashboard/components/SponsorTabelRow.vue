<template>
  <tr>
    <th scope="row">{{ id }}</th>
    <td>{{ rowData.name }}</td>
    <td>
      <a :href="rowData.link" target="_blank">{{ rowData.link }}</a>
    </td>
    <td v-if="rowData.images !== undefined">
      <a :href="rowData.images.img_logo.path" target="_blank">Img</a>
    </td>
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
