<template>
  <div class="about-clients-wrapper" v-if="isSponsorsFetched">
    <div class="about-clients-wrapper__inside">
      <div class="clients-header">
        <h1>OUR CLIENTS</h1>
      </div>
      <div class="clients-wrapper">
        <div v-for="(step, index) in windowSteps" :key="step">
          <div class="container" v-if="!isDeviceSmart()">
            <ClientsData
              :link="sponsors[step].link"
              :imageName="sponsors[step].name"
              :imageUrl="sponsors[step].image.url"
              :hideBorderLeftBorder="true"
              :hideBorderRightBorder="false"
              v-if="step < sponsors.length"
            />
            <ClientsData
              :link="sponsors[step + 1].link"
              :imageName="sponsors[step + 1].name"
              :imageUrl="sponsors[step + 1].image.url"
              :hideBorderLeftBorder="false"
              :hideBorderRightBorder="false"
              v-if="step + 1 < sponsors.length"
            />
            <ClientsData
              :link="sponsors[step + 2].link"
              :imageName="sponsors[step + 2].name"
              :imageUrl="sponsors[step + 2].image.url"
              :hideBorderLeftBorder="false"
              :hideBorderRightBorder="false"
              v-if="step + 2 < sponsors.length"
            />
            <ClientsData
              :link="sponsors[step + 3].link"
              :imageName="sponsors[step + 3].name"
              :imageUrl="sponsors[step + 3].image.url"
              :hideBorderLeftBorder="false"
              :hideBorderRightBorder="false"
              v-if="step + 2 < sponsors.length"
            />
            <ClientsData
              :link="sponsors[step + 4].link"
              :imageName="sponsors[step + 4].name"
              :imageUrl="sponsors[step + 4].image.url"
              :hideBorderLeftBorder="false"
              :hideBorderRightBorder="true"
              v-if="step + 3 < sponsors.length"
            />
          </div>
          <div class="container" v-else>
            <ClientsData
              :link="sponsors[step].link"
              :imageName="sponsors[step].name"
              :imageUrl="sponsors[step].image.url"
              :hideBorderLeftBorder="true"
              :hideBorderRightBorder="false"
              v-if="step < sponsors.length"
            />
            <ClientsData
              :link="sponsors[step + 1].link"
              :imageName="sponsors[step + 1].name"
              :imageUrl="sponsors[step + 1].image.url"
              :hideBorderLeftBorder="false"
              :hideBorderRightBorder="false"
              v-if="step + 1 < sponsors.length"
            />
            <ClientsData
              :link="sponsors[step + 2].link"
              :imageName="sponsors[step + 2].name"
              :imageUrl="sponsors[step + 2].image.url"
              :hideBorderLeftBorder="false"
              :hideBorderRightBorder="true"
              v-if="step + 2 < sponsors.length"
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
  </div>
</template>

<script>
import { mapState } from "vuex";
import ClientsData from "./ClientsData";
import isDeviceSmart from "../../../helpers/DetectIsDeviceSmart";

export default {
  data() {
    return {
      windowSize: isDeviceSmart() ? 3 : 5
    };
  },
  components: { ClientsData },
  methods: {
    isDeviceSmart() {
      return isDeviceSmart();
    }
  },
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
