<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <h2 class="heading-margin">Summits ({{ table.data.length }})</h2>
        </div>
        <div class="col-sm">
          <router-link to="/dashboard/summits/create">
            <button
              type="button"
              class="btn btn-secondary d-block ml-auto heading-margin"
            >
              Add Summit
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <LTable
      class="table-hover table-striped"
      :columns="table.columns"
      :data="table.data"
    >
    </LTable>
  </div>
</template>

<script>
import LTable from "src/dashboard/components/Table.vue";
const tableColumns = ["Id", "Name", "Salary", "Country", "City"];
const tableData = [
  {
    id: 1,
    name: "Dakota Rice",
    salary: "$36.738",
    country: "Niger",
    city: "Oud-Turnhout"
  },
  {
    id: 2,
    name: "Minerva Hooper",
    salary: "$23,789",
    country: "Curaçao",
    city: "Sinaai-Waas"
  },
  {
    id: 3,
    name: "Sage Rodriguez",
    salary: "$56,142",
    country: "Netherlands",
    city: "Baileux"
  },
  {
    id: 4,
    name: "Philip Chaney",
    salary: "$38,735",
    country: "Korea, South",
    city: "Overland Park"
  },
  {
    id: 5,
    name: "Doris Greene",
    salary: "$63,542",
    country: "Malawi",
    city: "Feldkirchen in Kärnten"
  }
];
export default {
  data() {
    return {
      table: {
        columns: [...tableColumns],
        data: [...tableData]
      }
    };
  },
  components: {
    LTable
  }
};
</script>

<style lang="scss" scoped>
.heading-margin {
  margin-top: 15px !important;
  margin-bottom: 30px !important;
}
</style>
