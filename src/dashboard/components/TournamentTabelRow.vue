<template>
  <tr>
    <th scope="row">{{ id }}</th>
    <td>{{ rowData.initial_title }}</td>
    <td>{{ rowData.final_title }}</td>
    <td>
      <div v-html="rowData.initial_description" class="description"></div>
    </td>
    <td v-html="rowData.final_description"></td>
    <td>{{ rowData.format }}</td>
    <td>{{ rowData.register_link }}</td>
    <td>{{ rowData.register_start_at.split(" ")[0] }}</td>
    <td>{{ rowData.register_end_at.split(" ")[0] }}</td>
    <td>{{ rowData.kick_off_date.split(" ")[0] }}</td>
    <td>{{ rowData.region ? rowData.region.title : "" }}</td>
    <td>{{ rowData.platform ? rowData.platform.title : "" }}</td>
    <td>{{ rowData.game ? rowData.game.title : "" }}</td>
    <td>{{ rowData.event ? rowData.event.initial_title : "" }}</td>
    <td>{{ rowData.has_rules }}</td>
    <td>
      {{
        rowData.rule === null || rowData.rule === undefined
          ? ""
          : rowData.rule.title
      }}
    </td>

    <td v-if="rowData.rule === null || rowData.rule === undefined"></td>
    <td v-else>
      <div v-html="rowData.rule.content" class="description"></div>
    </td>

    <td>{{ rowData.winner }}</td>

    <td>
      {{
        rowData.contact === null || rowData.contact === undefined
          ? ""
          : rowData.contact.title
      }}
    </td>

    <td v-if="rowData.contact === null || rowData.contact === undefined"></td>
    <td v-else>
      <div v-html="rowData.contact.content" class="description"></div>
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
      <img src="/website/img/edit.svg" alt="edit" @click="redirectTo" />
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
  props: ["id", "rowData", "setShowDeleteDialogFlag"],
  methods: {
    redirectTo() {
      this.$router.push({
        name: "Edit Tournament",
        params: { data: this.rowData }
      });
    }
  }
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
  max-height: 200px !important;
  overflow-y: auto;
  padding: 8px;
  width: 200px;
  &::-webkit-scrollbar {
    width: 5px !important;
    background-color: $accent !important;
    border-radius: 20px !important;
  }
  &::-webkit-scrollbar-thumb {
    background-color: $primary !important;
    border-radius: 20px !important;
  }
}
</style>
