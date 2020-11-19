<template>
<div class="work-page-wrapper row">

  <div
    v-for="work in workData"
    :key="work.id"
    class="work-page-wrapper__content-wrapper col-xs-12 col-sm-12 col-md-6 col-lg-4"
  >
    <!-- <router-link :to="`/work/${work.id}-${reformatURL(work.title)}`"> -->
      <div class="work-page-wrapper__content col-12 p-0 mt-3 mb-3">
        <img :src="work.img" draggable="false">

          <p>{{ work.subtitle }}</p>

        <div class="work-page-wrapper__text">
          <h2>{{ work.title }}</h2>
        </div>

      </div>
    <!-- </router-link> -->
  </div>

</div>
</template>

<script>
import { reformatStringToBeInURL } from "../../helpers/StringsHelper";

export default {
  data() {
    return {
      workData: [
        {
          id: "1",
          img: "./images/stadiumpic.png",
          title: "Esports tournaments",
          subtitle: "the top Esports work"
        },
        {
          id: "2",
          img: "./images/hero.jpg",
          title: "Esports tournaments",
          subtitle: "the top Esports work"
        },
        {
          id: "3",
          img: "./images/stadiumpic.png",
          title: "Esports tournaments",
          subtitle: "the top Esports work"
        },
        {
          id: "4",
          img: "./images/hero.jpg",
          title: "Esports tournaments",
          subtitle: "the top Esports work"
        },
        {
          id: "5",
          img: "./images/stadiumpic.png",
          title: "Esports tournaments",
          subtitle: "the top Esports work"
        }
      ]
    };
  },
  methods: {
    reformatURL(id) {
      return reformatStringToBeInURL(id);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/work/work-main-page.scss";
</style>
