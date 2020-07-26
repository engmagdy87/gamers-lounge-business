<template>
  <tr>
    <th scope="row">{{ id }}</th>
    <td>{{ rowData.title }}</td>
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
