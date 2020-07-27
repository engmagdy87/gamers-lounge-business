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
    <td>
      <span
        v-if="
          rowData.images.img_card !== undefined &&
            rowData.images.img_card !== null
        "
      >
        <a :href="rowData.images.img_card.path" target="_blank">Img</a>
      </span>
    </td>
    <td>
      <span v-for="(img, index) in rowData.images.img_cover_main" :key="index">
        <a
          v-if="img !== null && img !== undefined"
          :href="img.path"
          target="_blank"
          >Img{{ index + 1 }}</a
        >
      </span>
    </td>
    <td>
      <span
        v-if="
          rowData.images.img_cover_over !== undefined &&
            rowData.images.img_cover_over !== null
        "
      >
        <a :href="rowData.images.img_cover_over.path" target="_blank">Img</a>
      </span>
    </td>
    <td>
      <span
        v-if="
          rowData.images.img_logo !== null &&
            rowData.images.img_logo !== undefined
        "
      >
        <a :href="rowData.images.img_logo.path" target="_blank">Img</a>
      </span>
    </td>
    <td>
      <span v-for="(img, index) in rowData.images.img_media" :key="index">
        <a
          v-if="img !== null && img !== undefined"
          :href="img.path"
          target="_blank"
          >Img{{ index + 1 }}</a
        >
      </span>
    </td>
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
