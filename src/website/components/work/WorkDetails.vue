<template>
  <div>
    <h2 style="color:white;">{{websiteWork.title}}</h2>

    <h2 style="color:white;" v-for="section in websiteWork.sections.data"
    :key="section.id"> {{section.type}} </h2>

    <h1 style="color:white;">{{statistics}}</h1>

  </div>
</template>

<script>
import { reverseReformatHTMLString } from "../../../helpers/StringsHelper";
export default {
    props: ["websiteWork"],

    computed:{
      statistics() {
        return JSON.parse(reverseReformatHTMLString(this.websiteWork.statistics));
      }
    },
}
</script>

<style>

</style>