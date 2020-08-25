<template>
  <div class="row mt-5">
    <div
      class="col-12 col-md-4 col-lg-3 col-xl-2"
      v-for="(card, index) in data"
      :key="index"
    >
      <SummitCard :card="card" :tree="tree" />
    </div>
  </div>
</template>

<script>
import SummitCard from "../../shared/SummitCard";

export default {
  props: ["data", "tree"],
  components: {
    SummitCard
  }
};
</script>
