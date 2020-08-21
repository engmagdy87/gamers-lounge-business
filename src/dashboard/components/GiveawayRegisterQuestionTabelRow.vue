<template>
  <tr>
    <th scope="row">{{ id }}</th>
    <td>{{ rowData.title }}</td>
    <td>{{ rowData.type }}</td>
    <td
      v-if="
        rowData.data !== 'null' &&
          rowData.data !== null &&
          rowData.data !== undefined
      "
    >
      <li v-for="(option, i) in getOptions(rowData.data)" :key="i">
        {{ option }}
      </li>
    </td>
    <td v-else></td>
    <td class="table-actions">
      <!-- <img src="/website/img/edit.svg" alt="edit" @click="showEditModal" /> -->
      <img
        src="/website/img/delete.svg"
        alt="delete"
        @click="setShowDeleteDialogFlag(true, rowData.id, id - 1, 'question')"
      />
    </td>
  </tr>
</template>

<script>
export default {
  props: [
    "id",
    "rowData",
    "setShowDeleteDialogFlag",
    "setShowGiveawayRegisterQuestionModalFlag"
  ],
  methods: {
    showEditModal() {
      this.setShowGiveawayRegisterQuestionModalFlag(
        true,
        this.rowData.id,
        this.id - 1
      );
    },
    getOptions(options) {
      return JSON.parse(options).options.map(option => option);
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
