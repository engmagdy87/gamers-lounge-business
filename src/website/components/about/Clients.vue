<template>
  <div class="about-clients-wrapper" v-if="isSponsorsFetched">
    <div class="about-clients-wrapper__inside">
      <div class="clients-header">
        <h1>OUR CLIENTS</h1>
      </div>
      <div v-for="(step, index) in windowSteps" :key="step">
        <div class="about-clients-wrapper__topline" v-if="index === 0">
          <div />
        </div>

        <div class="container">
          <ClientsData
            :link="sponsors[step].link"
            :imageName="sponsors[step].name"
            :imageUrl="sponsors[step].image.url"
            :showBottomGuard="step === windowSteps[windowSteps.length - 1]"
            v-if="step < sponsors.length"
          />
          <ClientsData
            :link="sponsors[step + 1].link"
            :imageName="sponsors[step + 1].name"
            :imageUrl="sponsors[step + 1].image.url"
            :showBottomGuard="step === windowSteps[windowSteps.length - 1]"
            v-if="step + 1 < sponsors.length"
          />
          <ClientsData
            :link="sponsors[step + 2].link"
            :imageName="sponsors[step + 2].name"
            :imageUrl="sponsors[step + 2].image.url"
            :showBottomGuard="step === windowSteps[windowSteps.length - 1]"
            v-if="step + 2 < sponsors.length"
          />
          <ClientsData
            :link="sponsors[step + 3].link"
            :imageName="sponsors[step + 3].name"
            :imageUrl="sponsors[step + 3].image.url"
            :showBottomGuard="step === windowSteps[windowSteps.length - 1]"
            v-if="step + 3 < sponsors.length"
          />
        </div>

        <div
          class="about-clients-wrapper__linebetween"
          v-if="index !== 0 || index !== sponsors.length - 1"
        >
          <div />
        </div>

        <div
          class="about-clients-wrapper__bottomline"
          v-if="index === sponsors.length - 1"
        >
          <div />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ClientsData from "./ClientsData";

export default {
  data() {
    return {
      windowSize: 4
    };
  },
  components: { ClientsData },
  computed: {
    ...mapState({
      isSponsorsFetched: state => state.sponsors.isSponsorsFetched,
      sponsors: state => state.sponsors.sponsors
    }),
    windowSteps() {
      const steps = [];
      const numberOfWindows = Math.ceil(this.sponsors.length / this.windowSize);
      for (let i = 0; i < numberOfWindows; i++) {
        steps.push(i * this.windowSize);
      }
      return steps;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/about/about-clients.scss";
</style>
