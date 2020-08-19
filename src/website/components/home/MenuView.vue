<template>
  <div>
    <div class="row" v-if="isGamesActive">
      <div
        class="col-12 col-lg-4 p-0"
        v-for="(card, index) in data"
        :key="index"
      >
        <GameCard :card="card" />
      </div>
    </div>
    <div class="row" v-if="!isGamesActive">
      <div
        class="col-12 col-lg-4 p-0"
        v-for="(card, index) in data"
        :key="index"
      >
        <TournamentCard :card="card" :tree="tree" />
      </div>
    </div>
  </div>
</template>

<script>
import GameCard from "../../shared/GameCard";
import TournamentCard from "../../shared/TournamentCard";

export default {
  props: ["data", "isGamesActive", "tree"],
  components: {
    GameCard,
    TournamentCard
  }
};
</script>
