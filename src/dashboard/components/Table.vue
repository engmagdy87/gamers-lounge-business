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
      <tbody v-if="tableType === 'services'">
        <ServiceTabelRow
          v-for="(item, index) in data"
          :key="index"
          :rowData="item"
          :id="index + 1"
          :setShowDeleteDialogFlag="setShowDeleteDialogFlag"
        >
        </ServiceTabelRow>
      </tbody>
      <tbody v-if="tableType === 'serviceSections'">
        <ServiceSectionTableRow
          v-for="(item, index) in data"
          :key="index"
          :rowData="item"
          :id="index + 1"
          :setShowDeleteDialogFlag="setShowDeleteDialogFlag"
        >
        </ServiceSectionTableRow>
      </tbody>
      <tbody v-if="tableType === 'works'">
        <WorkTabelRow
          v-for="(item, index) in data"
          :key="index"
          :rowData="item"
          :id="index + 1"
          :setShowDeleteDialogFlag="setShowDeleteDialogFlag"
        >
        </WorkTabelRow>
      </tbody>
      <tbody v-if="tableType === 'workSections'">
        <WorkSectionTabelRow
          v-for="(item, index) in data"
          :key="index"
          :rowData="item"
          :id="index + 1"
          :setShowDeleteDialogFlag="setShowDeleteDialogFlag"
        >
        </WorkSectionTabelRow>
      </tbody>
      <tbody v-if="tableType === 'workRows'">
        <WorkRowTabelRow
          v-for="(item, index) in data"
          :key="index"
          :rowData="item"
          :id="index + 1"
          :setShowDeleteDialogFlag="setShowDeleteDialogFlag"
        >
        </WorkRowTabelRow>
      </tbody>
    </table>
  </div>
</template>
<script>
import DepartmentTabelRow from "../components/Departments/DepartmentTabelRow";
import JobTabelRow from "../components/Jobs/JobTabelRow";
import JobApplicantsTableRow from "../components/Jobs/JobApplicantsTableRow";
import ServiceTabelRow from "../components/Services/ServiceTabelRow";
import ServiceSectionTableRow from "../components/Services/ServiceSectionTableRow";
import WorkTabelRow from "../components/Works/WorkTabelRow";
import WorkSectionTabelRow from "../components/Works/WorkSectionTabelRow";
import WorkRowTabelRow from "../components/Works/WorkRowTabelRow";

export default {
  name: "l-table",
  props: ["data", "tableType", "columns", "setShowDeleteDialogFlag"],
  components: {
    DepartmentTabelRow,
    JobTabelRow,
    JobApplicantsTableRow,
    ServiceTabelRow,
    ServiceSectionTableRow,
    WorkTabelRow,
    WorkSectionTabelRow,
    WorkRowTabelRow
  }
};
</script>
<style></style>
