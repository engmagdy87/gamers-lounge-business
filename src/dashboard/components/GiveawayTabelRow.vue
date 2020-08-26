<template>
  <tr>
    <th scope="row">{{ id }}</th>
    <td>{{ rowData.title }}</td>
    <td>
      <div class="description" v-html="rowData.description"></div>
    </td>
    <td>
      <div class="description">{{ rowData.short_description }}</div>
    </td>
    <td v-if="rowData.email_template !== null">
      <div class="description" v-html="rowData.email_template.body"></div>
    </td>
    <td v-else></td>
    <td>{{ rowData.start_date.split(" ")[0] }}</td>
    <td>{{ rowData.end_date.split(" ")[0] }}</td>
    <td>{{ rowData.type }}</td>
    <td>{{ rowData.cover_type === "-1" ? "" : rowData.cover_type }}</td>
    <td>{{ rowData.register_limit }}</td>
    <td>{{ rowData.is_external ? "Yes" : "No" }}</td>
    <td>{{ rowData.enabled ? "Yes" : "No" }}</td>
    <td>
      <a
        v-if="
          rowData.images.img_card !== undefined &&
            rowData.images.img_card !== null
        "
        :href="rowData.images.img_card.path"
        target="_blank"
        >Img</a
      >
    </td>
    <td>
      <a
        v-if="
          rowData.images.img_cover_over !== undefined &&
            rowData.images.img_cover_over !== null
        "
        :href="rowData.images.img_cover_over.path"
        target="_blank"
        >Img</a
      >
    </td>
    <td
      v-if="
        rowData.images !== undefined && rowData.images.img_cover_main !== null
      "
    >
      <a
        v-for="(img, index) in rowData.images.img_cover_main"
        :key="index"
        :href="img.path"
        target="_blank"
        >Img{{ index + 1 }}</a
      >
    </td>
    <td v-else></td>

    <td>
      <a
        v-if="
          rowData.images.img_logo !== undefined &&
            rowData.images.img_logo !== null
        "
        :href="rowData.images.img_logo.path"
        target="_blank"
        >Img</a
      >
    </td>
    <td
      v-if="
        rowData.videos.vid_cover_main !== undefined &&
          rowData.videos.vid_cover_main !== null
      "
    >
      <a :href="rowData.videos.vid_cover_main.path" target="_blank">Vid</a>
    </td>
    <td v-else></td>
    <td class="table-actions">
      <img src="/website/img/edit.svg" alt="edit" @click="redirectTo" />
      <img
        src="/website/img/delete.svg"
        alt="delete"
        @click="setShowDeleteDialogFlag(true, rowData.id, id - 1)"
      />
      <router-link
        :to="{
          path: `/dashboard/giveaways/list-registers/${rowData.id}`,
          query: { giveawayName: rowData.title }
        }"
      >
        <img src="/website/img/visibility.svg" alt="show" />
      </router-link>
    </td>
  </tr>
</template>

<script>
export default {
  props: ["id", "rowData", "setShowDeleteDialogFlag"],
  methods: {
    redirectTo() {
      this.$router.push({
        name: "Edit Giveaway & Offers",
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
  width: 200px;
  padding: 8px;
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
