<template>
<div class="hero-carousel">
  <HalfClippedShape> 
    <template #content>
        <Carousel
        :autoPlay="false"
        :slides="slides"
        customBulletsStyleClass="hero-bullets"
        >
            <template #carouselSlide="{slide}">
                <div>
                    <h1 class="hero-carousel__title"> {{slide.title}}</h1>
                    <h4 class="hero-carousel__content">{{slide.content}}</h4>
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