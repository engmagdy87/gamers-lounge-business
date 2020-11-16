<template>
<div class="hero-carousel">
  <HalfClippedShape> 
    <template #content>
        <Carousel
        :timeInMillisecond=5000
        :slides="slides"
        :autoPlay="false"
        customBulletsStyleClass="hero-bullets"
        >
            <template #carouselSlide="{slide}">
                <div class="hero-carousel__container">
                    <h1 class="hero-carousel__container--title"> {{slide.title}}</h1>
                    <h4 class="hero-carousel__container--content">{{slide.content}}</h4>
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
          title:"SCULPTING A NEW ERA OF ESPORTS IN THE MENA",
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