<template>
<div class="about-section-wrapper">
        
    <div class="about-section-wrapper__container">  
        <div class="about-section-wrapper__inside">
            <div class="row align-items-center">

                <slot name="content"> </slot>

            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/about/about-section.scss";
</style>