<template>
<div>
    <Hero>
        <template #hero-content>
        <div class="row align-items-end h-100 justify-content-center services-container">
            <HalfClippedShape>
                <template #content>
                    <div class="services-container__heroContent">
                        <h1>FEEL THE EXCITEMENT OF OUR GAMES</h1>
                        <p>Gamers Lounge is the main catalyst to establish the Esports scene In the Middle 
                        East & North Africa regions, Playing an important role to unify the gaming community</p>
                    </div>
                </template>
            </HalfClippedShape>
        </div>
        </template>
    </Hero>

</div>
</template>

<script>
import Hero from "../../shared/Hero";
import HalfClippedShape from "../../shared/HalfClippedShape";
export default {
  components:{
    Hero,
    HalfClippedShape,
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/containers/services.scss";
</style>