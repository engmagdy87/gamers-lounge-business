<template>
  <div class="menu-view-wrapper">
    <div class="row">
      <div class="col p-0" v-for="(card, index) in data" :key="index">
        <HexaCard :card="card" />
      </div>
    </div>
    <div class="row">
      <div class="col p-0" v-for="(card, index) in data" :key="index">
        <HexaCard :card="card" />
      </div>
    </div>
    <div class="row">
      <div class="col p-0" v-for="(card, index) in data" :key="index">
        <HexaCard :card="card" />
      </div>
    </div>
  </div>
</template>

<script>
import HexaCard from "../../shared/HexaCard";

export default {
  props: ["data"],
  components: {
    HexaCard
  }
};
</script>

<style lang="scss" scoped></style>
