<template>
  <div class="events-menu-view-wrapper">
    <div class="row">
      <div
        class="col-12 col-lg-4 p-0"
        v-for="(card, index) in data"
        :key="index"
      >
        <OfferCard :card="card" v-if="route === 'offers'" />
        <TournamentCard
          :card="card"
          v-else-if="route === 'giveaway-details'"
          :tree="tree"
        />
      </div>
    </div>
  </div>
</template>

<script>
import OfferCard from "../../components/giveaways/OfferCard";
import TournamentCard from "../../shared/TournamentCard";

export default {
  props: ["data", "route", "tree"],
  components: {
    OfferCard,
    TournamentCard
  }
};
</script>

<style lang="scss" scoped>
.events-menu-view-wrapper {
  margin-bottom: 50px;
}
</style>
