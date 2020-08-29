<template>
  <div class="events-menu-view-wrapper">
    <div class="row">
      <div
        class="col-12 col-lg-4 p-0"
        v-for="(card, index) in data"
        :key="index"
      >
        <TestimonialCard :card="card" />
      </div>
    </div>
  </div>
</template>

<script>
import TestimonialCard from "../../components/testimonials/TestimonialCard";

export default {
  props: ["data"],
  components: {
    TestimonialCard
  }
};
</script>

<style lang="scss" scoped>
.events-menu-view-wrapper {
  margin-bottom: 50px;
}
</style>
