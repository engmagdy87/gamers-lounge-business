<template>
  <div class="table-responsive">
    <table class="table">
      <thead class="thead-dark">
        <slot name="columns">
          <tr>
            <th scope="col" v-for="column in columns" :key="column">
              {{ column }}
            </th>
          </tr>
        </slot>
      </thead>
      <tbody v-if="tableType === 'departments'">
        <DepartmentTabelRow
          v-for="(item, index) in data"
          :key="index"
          :rowData="item"
          :id="index + 1"
          :setShowDeleteDialogFlag="setShowDeleteDialogFlag"
        >
        </DepartmentTabelRow>
      </tbody>
      <tbody v-if="tableType === 'jobs'">
        <JobTabelRow
          v-for="(item, index) in data"
          :key="index"
          :rowData="item"
          :id="index + 1"
          :setShowDeleteDialogFlag="setShowDeleteDialogFlag"
        >
        </JobTabelRow>
      </tbody>
      <tbody v-if="tableType === 'job-applicants'">
        <JobApplicantsTableRow
          v-for="(item, index) in data.applications"
          :key="index"
          :rowData="item"
          :id="index + 1"
          :jobTitle="data.title"
          :departmentName="data.department.name"
        >
        </JobApplicantsTableRow>
      </tbody>
    </table>
  </div>
</template>
<script>
import DepartmentTabelRow from "../components/Departments/DepartmentTabelRow";
import JobTabelRow from "../components/Jobs/JobTabelRow";
import JobApplicantsTableRow from "../components/Jobs/JobApplicantsTableRow";

export default {
  name: "l-table",
  props: ["data", "tableType", "columns", "setShowDeleteDialogFlag"],
  components: {
    DepartmentTabelRow,
    JobTabelRow,
    JobApplicantsTableRow
  }
};
</script>
<style></style>
