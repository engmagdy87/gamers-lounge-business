<template>
  <tr>
    <th scope="row">{{ id }}</th>
    <td>{{ rowData.title }}</td>
    <td>{{ rowData.order }}</td>
    <td>{{ rowData.is_featured ? "Yes" : "No" }}</td>
    <td>{{ rowData.is_enabled ? "Yes" : "No" }}</td>
    <td>
      <div class="description" v-html="rowData.description"></div>
    </td>
    <td>
      <a v-if="rowData.img_card" :href="rowData.img_card.url" target="__blank"
        >URL</a
      >
    </td>
    <td>
      <a v-if="rowData.img_cover" :href="rowData.img_cover.url" target="__blank"
        >URL</a
      >
    </td>
    <td>
      <a
        v-if="rowData.img_slider"
        :href="rowData.img_slider.url"
        target="__blank"
        >URL</a
      >
    </td>
    <td class="table-actions">
      <img src="/images/edit.svg" alt="edit" @click="redirectTo" />
      <img
        src="/images/delete.svg"
        alt="delete"
        @click="setShowDeleteDialogFlag(true, rowData.id, id - 1)"
      />
      <router-link
        :to="{
          path: `/dashboard/services/sections/list/${rowData.id}`
        }"
      >
        <img src="/images/visibility.svg" alt="show" />
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
        name: "Edit Service",
        params: { data: this.rowData }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/color-palette.scss";
@import "../../../assets/sass/website/variables.scss";
@import "../../../assets/sass/lbd/table-row.scss";
</style>
