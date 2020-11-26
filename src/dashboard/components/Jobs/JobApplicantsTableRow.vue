<template>
  <tr>
    <th scope="row">{{ id }}</th>
    <td>{{ rowData.full_name }}</td>
    <td>{{ rowData.phone }}</td>
    <td>{{ rowData.email }}</td>
    <td>{{ rowData.country }}</td>
    <td>{{ rowData.city }}</td>
    <td>
      <a :href="rowData.behance_link" target="__blank">URL</a>
    </td>
    <td>
      <a :href="rowData.linkedin_link" target="__blank">URL</a>
    </td>
    <td>
      <a :href="rowData.resume" target="__blank">URL</a>
    </td>
    <td class="table-actions">
      <img src="/images/download.svg" alt="download" @click="downloadCSV" />
    </td>
  </tr>
</template>

<script>
import { downloadJobApplicantCSV } from "../../helpers/DownloadCSV";

export default {
  props: ["id", "rowData", "jobTitle", "departmentName"],
  methods: {
    downloadCSV() {
      downloadJobApplicantCSV(this.rowData, this.jobTitle, this.departmentName);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/color-palette.scss";
@import "../../../assets/sass/website/variables.scss";
@import "../../../assets/sass/lbd/table-row.scss";
</style>
