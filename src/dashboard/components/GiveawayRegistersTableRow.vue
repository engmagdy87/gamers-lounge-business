<template>
  <tr>
    <th scope="row">{{ id }}</th>
    <td>{{ rowData.user.first_name }}</td>
    <td>{{ rowData.user.last_name }}</td>
    <td>{{ rowData.user.username }}</td>
    <td>{{ rowData.user.email }}</td>
    <td v-if="rowData.user.phone">
      {{ rowData.user.phone.country_code }} {{ rowData.user.phone.number }}
    </td>
    <td v-else></td>
    <td>{{ rowData.user.birthday_date }}</td>
    <td v-for="(item, i) in rowData.answers" :key="i">
      <a
        v-if="item.content.includes('http')"
        :href="item.content"
        target="__blank"
        >URL</a
      >
      <span v-else>{{ item.content }}</span>
    </td>
    <td class="table-actions">
      <img
        src="/website/img/download.svg"
        alt="download"
        @click="downloadCSV"
      />
    </td>
  </tr>
</template>

<script>
export default {
  props: ["id", "rowData", "giveawayName"],
  methods: {
    downloadCSV() {
      let csvContent = "data:text/csv;charset=utf-8,";

      //******* Heading *******/
      let heading = "First Name,Last Name,Username,Email,Phone,Birthday Date,";

      this.rowData.answers.forEach(
        answer => (heading = heading + answer.title + ",")
      );

      const {
        first_name,
        last_name,
        username,
        email,
        phone,
        birthday_date
      } = this.rowData.user;

      const formatedPhone = phone ? `${phone.country_code}${phone.number}` : "";

      //******* Row *******/
      let row = `${first_name},${last_name},${username},${email},${formatedPhone},${birthday_date ||
        ""},`;

      this.rowData.answers.forEach(
        answer => (row = row + answer.content + ",")
      );

      csvContent += [heading, row].join("\n").replace(/(^\[)|(\]$)/gm, "");

      const data = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", data);
      link.setAttribute("download", `${this.giveawayName}-${username}.csv`);
      link.click();
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
