<template>
  <div class="table-responsive">
    <table class="table">
      <thead class="thead-dark">
        <slot name="columns">
          <tr>
            <!-- <th scope="col" v-for="column in columns" :key="column">
              {{ column }}
            </th> -->
          </tr>
        </slot>
      </thead>
      <tbody></tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "l-table"
};
</script>
<style></style>
