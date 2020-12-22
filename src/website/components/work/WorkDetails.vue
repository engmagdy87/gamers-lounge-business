<template>
  <div>
    <h2 style="color:white;">{{workSections}}</h2>

    <h2 style="color:white;" v-for="workSection in workSections.sections.data"
    :key="workSection.id"> {{workSection.type}} </h2>

  </div>
</template>

<script>
export default {
    props: ["workSections"],
}
</script>

<style>

</style>