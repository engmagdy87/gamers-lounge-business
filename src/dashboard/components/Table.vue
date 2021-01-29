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
      <tbody v-if="tableType === 'serviceRows'">
        <ServiceRowTabelRow
          v-for="(item, index) in data"
          :key="index"
          :rowData="item"
          :id="index + 1"
          :setShowDeleteDialogFlag="setShowDeleteDialogFlag"
        >
        </ServiceRowTabelRow>
      </tbody>
      <tbody v-if="tableType === 'serviceColumns'">
        <ServiceColumnTabelRow
          v-for="(item, index) in data"
          :key="index"
          :rowData="item"
          :id="index + 1"
          :setShowDeleteDialogFlag="setShowDeleteDialogFlag"
        >
        </ServiceColumnTabelRow>
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
      <tbody v-if="tableType === 'workColumns'">
        <WorkColumnTabelRow
          v-for="(item, index) in data"
          :key="index"
          :rowData="item"
          :id="index + 1"
          :setShowDeleteDialogFlag="setShowDeleteDialogFlag"
        >
        </WorkColumnTabelRow>
      </tbody>
      <tbody v-if="tableType === 'aboutSections'">
        <AboutSectionTabelRow
          v-for="(item, index) in data"
          :key="index"
          :rowData="item"
          :id="index + 1"
          :setShowDeleteDialogFlag="setShowDeleteDialogFlag"
        >
        </AboutSectionTabelRow>
      </tbody>
      <tbody v-if="tableType === 'aboutRows'">
        <AboutRowTabelRow
          v-for="(item, index) in data"
          :key="index"
          :rowData="item"
          :id="index + 1"
          :setShowDeleteDialogFlag="setShowDeleteDialogFlag"
        >
        </AboutRowTabelRow>
      </tbody>
      <tbody v-if="tableType === 'aboutColumns'">
        <AboutColumnTabelRow
          v-for="(item, index) in data"
          :key="index"
          :rowData="item"
          :id="index + 1"
          :setShowDeleteDialogFlag="setShowDeleteDialogFlag"
        >
        </AboutColumnTabelRow>
      </tbody>
      <tbody v-if="tableType === 'sponsors'">
        <SponsorTabelRow
          v-for="(item, index) in data"
          :key="index"
          :rowData="item"
          :id="index + 1"
          :setShowDeleteDialogFlag="setShowDeleteDialogFlag"
        >
        </SponsorTabelRow>
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
import ServiceRowTabelRow from "../components/Services/ServiceRowTabelRow";
import ServiceColumnTabelRow from "../components/Services/ServiceColumnTabelRow";
import WorkTabelRow from "../components/Works/WorkTabelRow";
import WorkSectionTabelRow from "../components/Works/WorkSectionTabelRow";
import WorkRowTabelRow from "../components/Works/WorkRowTabelRow";
import WorkColumnTabelRow from "../components/Works/WorkColumnTabelRow";
import AboutSectionTabelRow from "../components/About/AboutSectionTabelRow";
import AboutRowTabelRow from "../components/About/AboutRowTabelRow";
import AboutColumnTabelRow from "../components/About/AboutColumnTabelRow";
import SponsorTabelRow from "../components/Sponsors/SponsorTabelRow";

export default {
  name: "l-table",
  props: ["data", "tableType", "columns", "setShowDeleteDialogFlag"],
  components: {
    DepartmentTabelRow,
    JobTabelRow,
    JobApplicantsTableRow,
    ServiceTabelRow,
    ServiceSectionTableRow,
    ServiceRowTabelRow,
    ServiceColumnTabelRow,
    WorkTabelRow,
    WorkSectionTabelRow,
    WorkRowTabelRow,
    WorkColumnTabelRow,
    AboutSectionTabelRow,
    AboutRowTabelRow,
    AboutColumnTabelRow,
    SponsorTabelRow
  }
};
</script>
<style></style>
