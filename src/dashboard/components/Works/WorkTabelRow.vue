<template>
  <tr>
    <th scope="row">{{ id }}</th>
    <td>{{ rowData.title }}</td>
    <td>
      <div class="description" v-html="rowData.short_description"></div>
    </td>
    <td>
      <div class="description" v-html="rowData.description"></div>
    </td>
    <td>
      <ul>
        <li v-for="item in statistics" :key="item.id">
          {{ `${item.key}: ${item.value}` }}
        </li>
      </ul>
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
    <td class="table-actions">
      <img src="/images/edit.svg" alt="edit" @click="redirectTo" />
      <img
        src="/images/delete.svg"
        alt="delete"
        @click="setShowDeleteDialogFlag(true, rowData.id, id - 1)"
      />
      <router-link
        :to="{
          path: `/dashboard/works/sections/list/${rowData.id}`
        }"
      >
        <img src="/images/visibility.svg" alt="show" />
      </router-link>
    </td>
  </tr>
</template>

<script>
import { reverseReformatHTMLString } from "../../../helpers/StringsHelper";

export default {
  props: ["id", "rowData", "setShowDeleteDialogFlag"],
  computed: {
    statistics() {
      return JSON.parse(reverseReformatHTMLString(this.rowData.statistics));
    }
  },
  methods: {
    redirectTo() {
      this.$router.push({
        name: "Edit Work",
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
