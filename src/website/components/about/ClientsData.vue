<template>
<div class="container__imageHolder">
    <div class="container__imageHolder__leftline" :class="className"></div>
        <img class="container__imageHolder__image" :src="require('@/assets/' + imageName + '')" alt="">
    <div class="container__imageHolder__rightline" :class="className"></div>
</div>
  
</template>

<script>
export default {
    props:{
        imageName: String,
        className: String,
    }

}
</script>

<style>

</style>