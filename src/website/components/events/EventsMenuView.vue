<template>
  <div class="events-menu-view-wrapper">
    <div class="row">
      <div
        class="col-12 col-lg-4 p-0"
        v-for="(card, index) in data"
        :key="index"
      >
        <SubEventCard :card="card" v-if="route === 'events'" />
        <TournamentCard
          :card="card"
          v-else-if="route === 'event-details'"
          :tree="tree"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SubEventCard from "../../components/events/SubEventCard";
import TournamentCard from "../../shared/TournamentCard";

export default {
  props: ["data", "route", "tree"],
  components: {
    SubEventCard,
    TournamentCard
  }
};
</script>

<style lang="scss" scoped>
.events-menu-view-wrapper {
  margin-bottom: 50px;
}
</style>
