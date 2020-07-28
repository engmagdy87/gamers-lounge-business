<template>
  <tr>
    <th scope="row">{{ id }}</th>
    <td>{{ rowData.initial_title }}</td>
    <td>{{ rowData.final_title }}</td>
    <td>
      <div class="description">
        {{ rowData.initial_description }}
      </div>
    </td>
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
    <td>
      <span
        v-if="
          rowData.images.img_logo !== undefined &&
            rowData.images.img_logo !== null
        "
      >
        <a :href="rowData.images.img_logo.path" target="_blank">Img</a>
      </span>
    </td>
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
          v-if="img !== undefined && img !== null"
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
          rowData.videos.vid_stream !== undefined &&
            rowData.videos.vid_stream !== null
        "
      >
        <a :href="rowData.videos.vid_stream.path" target="_blank">Vid</a>
      </span>
    </td>
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
@import "../../assets/sass/website/color-palette.scss";
@import "../../assets/sass/website/variables.scss";
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
.description {
  height: 200px !important;
  overflow-y: auto;
  padding: 8px;
  &::-webkit-scrollbar {
    width: 5px !important;
  }
  &::-webkit-scrollbar-thumb {
    background-color: $primary !important;
    border-radius: 20px !important;
  }
  &::-webkit-scrollbar {
    background-color: $accent !important;
    border-radius: 20px !important;
  }
}
</style>
