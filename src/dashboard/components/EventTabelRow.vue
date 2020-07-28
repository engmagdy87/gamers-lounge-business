<template>
  <tr>
    <th scope="row">{{ id }}</th>
    <td>{{ rowData.initial_title }}</td>
    <td>{{ rowData.final_title }}</td>
    <td>{{ rowData.initial_description }}</td>
    <td>{{ rowData.final_description }}</td>
    <td>
      {{ rowData.summit.initial_title }} ({{
        rowData.summit.active ? "Active" : ""
      }})
    </td>
    <td>{{ rowData.start_date }}</td>
    <td>{{ rowData.end_date }}</td>
    <td>{{ rowData.type }}</td>
    <td>
        <a v-if="
          rowData.images.img_card !== undefined &&
            rowData.images.img_card !== null
        " :href="rowData.images.img_card.path" target="_blank">Img</a>
    </td>
    <td v-if="rowData.images !== undefined && rowData.images.img_cover_main !== null">
        <a
        v-for="(img, index) in rowData.images.img_cover_main" :key="index"          
          :href="img.path"
          target="_blank"
          >Img{{ index + 1 }}</a
        >
    </td>
    <td v-else></td>
    <td>
        <a v-if="
          rowData.images.img_cover_over !== undefined &&
            rowData.images.img_cover_over !== null
        " :href="rowData.images.img_cover_over.path" target="_blank">Img</a>
      </span>
    </td>
    <td>
        <a v-if="rowData.images.img_logo !== undefined && rowData.images.img_logo !== null " :href="rowData.images.img_logo.path" target="_blank">Img</a>
    </td>
    <td v-if="rowData.images !== undefined && rowData.images.img_media !== null">
        <a
        v-for="(img, index) in rowData.images.img_media" :key="index"          
          :href="img.path"
          target="_blank"
          >Img{{ index + 1 }}</a
        >
    </td>
    <td v-else></td>
    <td
      v-if="
        rowData.images.vid_initial !== undefined &&
          rowData.images.vid_initial !== null
      "
    >
      <a
        v-for="(vid, index) in rowData.images.vid_initial"
        :key="index"
        :href="vid.path"
        target="_blank"
        >Vid{{ index + 1 }}</a
      >
    </td>
    <td v-else></td>
    <td class="table-actions">
      <img src="/website/img/edit.svg" alt="edit" />
      <img
        src="/website/img/delete.svg"
        alt="delete"
        @click="setShowDeleteDialogFlag(true, rowData.id, id - 1)"
      />
    </td>
  </tr>
</template>

<script>
export default {
  props: ["id", "rowData", "setShowDeleteDialogFlag"]
};
</script>

<style lang="scss" scoped>
tr td a {
  margin-right: 5px;
}
.table-actions {
  display: flex;
  img {
    margin: 5px 10px;
    cursor: pointer;
  }
}
</style>
