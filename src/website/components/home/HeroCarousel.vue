<template>
<div class="hero-carousel">
  <HalfClippedShape> 
    <template #content>
        <Carousel
        :timeInMillisecond=2000
        :slides="slides"
        :autoPlay="false"
        customBulletsStyleClass="hero-bullets"
        >
            <template #carouselSlide="{slide}">
                <div>
                    <h1> {{slide.title}}</h1>
                    <h4>{{slide.content}}</h4>
                </div>
            </template>

            <template #carouselNavigationButtons="{goToPrev,goToNext}">
                <div class="carousel-navigation">
                <button @click="goToPrev"> Prev </button>
                <button @click="goToNext"> Next </button>
                </div>
            </template>
        </Carousel>
    </template>
  </HalfClippedShape>
</div>
</template>

<script>
import Carousel from '../../shared/Carousel/Carousel';
import HalfClippedShape from "../../shared/HalfClippedShape";
export default {
  components:{
    Carousel,
    HalfClippedShape
  },
  data() {
    return{
      slides:[
        {
          title:"Begining",
          content: "HELLO",
        },
        {
          title:"Begining456",
          content: "HELLO456",
        },
        {
          title:"Begining123",
          content: "HELLO123",
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/home/hero-carousel.scss";

</style>