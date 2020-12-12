<template>
<div class="section-container">
        <div class="section-container__template row m-0" 
        >
            <h1 class="col-12 p-0 m-0 section-container__title pb-5" > {{service.title}} </h1>

            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-0">
                <p v-html="service.description_first"></p>
            </div>

            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 section-container__media">
                <img v-if="service.img_content_first"
                  v-for="(img, i) in service.img_content_first"
                  :key="i" 
                  :src="img.url" 
                >
                <video v-if="service.vid_content_first"
                  v-for="(video, i) in service.vid_content_first"
                  :key="i" :src="video.url"
                  controls
                  > </video>
            </div>
        </div>
</div>
</template>

<script>
export default {
    props: [ "service"],
}
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/services/details-section.scss";
</style>