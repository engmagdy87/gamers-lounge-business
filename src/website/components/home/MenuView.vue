<template>
  <div>
    <div class="row">
      <div class="col" v-for="(card, index) in data" :key="index">
        <HexaCard :card="card" />
      </div>
    </div>
    <div class="row">
      <div class="col" v-for="(card, index) in data" :key="index">
        <HexaCard :card="card" />
      </div>
    </div>
    <div class="row">
      <div class="col" v-for="(card, index) in data" :key="index">
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
