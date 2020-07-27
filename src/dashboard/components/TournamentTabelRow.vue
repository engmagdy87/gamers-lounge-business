<template>
  <tr>
    <th scope="row">{{ id }}</th>
    <td>{{ rowData.initial_title }}</td>
    <td>{{ rowData.final_title }}</td>
    <td>{{ rowData.initial_description }}</td>
    <td>{{ rowData.final_description }}</td>
    <td>{{ rowData.format }}</td>
    <td>{{ rowData.register_link }}</td>
    <td>{{ rowData.register_start_at }}</td>
    <td>{{ rowData.register_end_at }}</td>
    <td>{{ rowData.kick_off_date }}</td>
    <td>{{ rowData.region_id }}</td>
    <td>{{ rowData.platform_id }}</td>
    <td>{{ rowData.game_id }}</td>
    <td>{{ rowData.event_id }}</td>
    <td>{{ rowData.has_rules }}</td>
    <td>
      {{
        rowData.rules === null || rowData.rules === undefined
          ? ""
          : rowData.rules.title
      }}
    </td>
    <td>
      {{
        rowData.rules === null || rowData.rules === undefined
          ? ""
          : rowData.rules.content
      }}
    </td>
    <td>{{ rowData.winner }}</td>
    <td>
      {{
        rowData.contacts === null || rowData.contacts === undefined
          ? ""
          : rowData.contacts.title
      }}
    </td>
    <td>
      {{
        rowData.contacts === null || rowData.contacts === undefined
          ? ""
          : rowData.contacts.content
      }}
    </td>
    <td v-if="rowData.images !== undefined">
      <a :href="rowData.images.img_logo.path" target="_blank">Img</a>
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
      <a :href="rowData.images.img_cover_over.path" target="_blank">Img</a>
    </td>
    <td v-if="rowData.images !== undefined">
      <a :href="rowData.images.img_card.path" target="_blank">Img</a>
    </td>
    <td v-if="rowData.images !== undefined">
      <a :href="rowData.videos.vid_stream.path" target="_blank">Vid</a>
    </td>
  </tr>
</template>

<script>
export default {
  props: ["id", "rowData"],
  mounted() {
    console.log("====================================");
    console.log(this.rowData);
    console.log("====================================");
  }
};
</script>

<style lang="scss" scoped>
tr td a {
  margin-right: 5px;
}
</style>
