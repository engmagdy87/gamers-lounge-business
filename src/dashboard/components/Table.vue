<template>
  <div class="table-responsive">
    <table class="table">
      <thead>
        <slot name="columns">
          <tr>
            <th v-for="column in columns" :key="column">{{ column }}</th>
          </tr>
        </slot>
      </thead>
      <tbody>
        <TabelRow
          v-for="(item, index) in data"
          :key="index"
          :rowData="item"
          :id="index + 1"
        >
        </TabelRow>
      </tbody>
    </table>
  </div>
</template>
<script>
import TabelRow from "./TabelRow";
export default {
  name: "l-table",
  props: {
    columns: Array,
    data: Array
  },
  components: {
    TabelRow
  }
};
</script>
<style></style>
