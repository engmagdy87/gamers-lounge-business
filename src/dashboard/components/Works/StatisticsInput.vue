<template>
  <div class="row">
    <div class="col-5">
      <base-input
        type="text"
        placeholder="Enter Statistic Name"
        :autofocus="true"
        :isRequired="true"
        v-model="keyName"
        @keyup="updateStatistics"
      >
      </base-input>
    </div>
    <div class="col-5">
      <base-input
        type="number"
        placeholder="Enter Statistic Value"
        min="0"
        :isRequired="true"
        v-model="keyValue"
        @keyup="updateStatistics"
      >
      </base-input>
    </div>
    <div class="col-2">
      <img
        src="/images/delete.svg"
        alt="delete"
        @click="removeStatistics"
        style="cursor:pointer"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["itemLocation", "item"],
  data() {
    return {
      keyName: this.item.key,
      keyValue: this.item.value
    };
  },
  methods: {
    updateStatistics() {
      const payload = {
        name: this.keyName,
        value: this.keyValue,
        itemLocation: this.itemLocation
      };
      this.$emit("updateStatistics", payload);
    },
    removeStatistics() {
      this.$emit("removeStatistics", this.itemLocation);
    }
  }
};
</script>

<style></style>
