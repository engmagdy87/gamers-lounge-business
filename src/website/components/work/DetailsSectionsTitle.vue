<template>
<div>
    <div style="color:white;" v-for="section in websiteWork.sections.data"
    :key="section.id"> {{section.type}} </div>
</div>
</template>

<script>

export default {
    props: ["section"],
}
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/work/work-sections-title.scss";
</style>