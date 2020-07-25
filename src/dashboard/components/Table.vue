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
      <tbody v-if="tableType === 'summits'">
        <SummitTabelRow
          v-for="(item, index) in data"
          :key="index"
          :rowData="item"
          :id="index + 1"
        >
        </SummitTabelRow>
      </tbody>
      <tbody v-else-if="tableType === 'events'">
        <EventTabelRow
          v-for="(item, index) in data"
          :key="index"
          :rowData="item"
          :id="index + 1"
        >
        </EventTabelRow>
      </tbody>
      <tbody v-else-if="tableType === 'sponsors'">
        <SponsorTabelRow
          v-for="(item, index) in data"
          :key="index"
          :rowData="item"
          :id="index + 1"
        >
        </SponsorTabelRow>
      </tbody>
    </table>
  </div>
</template>
<script>
import SummitTabelRow from "./SummitTabelRow";
import EventTabelRow from "./EventTabelRow";
import SponsorTabelRow from "./SponsorTabelRow";
export default {
  name: "l-table",
  props: ["columns", "data", "tableType"],
  components: {
    SummitTabelRow,
    EventTabelRow,
    SponsorTabelRow
  }
};
</script>
<style></style>
