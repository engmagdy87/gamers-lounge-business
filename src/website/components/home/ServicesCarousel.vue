<template>
<div class="services-carousel">
  <div class="services-header">
    <h4 class="services-header__sub-text">What we Serve?</h4>
    <h1 class="services-header__title">OUR SERVICES</h1>
    <router-link to="/" class="services-header__view-link"> View all </router-link>
  </div>
  <HalfClippedShape> 
    <template #content>
        <Carousel
        :timeInMillisecond=5000
        :slides="slides"
        :autoPlay="false"
        customBulletsStyleClass="hero-bullets"
        >
            <template #carouselSlide="{slide}">
                <div class="row m-0">
                  <div class="col-md-6">
                    <h1 class="services-carousel__title"> {{slide.title}}</h1>
                    <h4 class="services-carousel__text">{{slide.text}}</h4>
                    
                    <div class="services-carousel__btn">
                      <HalfClippedOutlineButton text="Read More" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <img class="services-carousel__img" draggable="false" :src="slide.img" alt="" srcset="">
                  </div>
                </div>
            </template>

            <template #carouselNavigationButtons="{goToPrev,goToNext}">
                <div class="carousel-navigation">
                <button @click="goToPrev"> <img src="../../../../public/images/prev.svg"> </button>
                <button @click="goToNext"> <img src="../../../../public/images/next.svg"> </button>
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
import HalfClippedOutlineButton from "../../shared/HalfClippedOutlineButton";

export default {
  components:{
    Carousel,
    HalfClippedShape,
    HalfClippedOutlineButton
  },
  data() {
    return{
      slides:[
        {
          title:"Esports Tournaments1",
          text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam e",
          img:"./images/hero.jpg"
        },
        {
          title:"Esports Tournaments2",
          text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam e",
          img:"./images/hero.jpg"
        },
        {
          title:"Esports Tournaments3",
          text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam e",
          img:"./images/hero.jpg"
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/home/services-carousel.scss";

</style>