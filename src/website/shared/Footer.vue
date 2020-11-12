<template>

<div class="footer-section">
    <div class="footer-section__container">
        
        <div class="row justify-content-center">
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6 footer-leftside"> <router-link to="/"><img src="../../../public/images/GL-logo.png" style="max-width: 200px;">  </router-link>
                <br><br>
                <p>the first official esports organization in Egypt, founded by <br>
                experienced gamers to develop esports in Middle-Easy & North Africa.
                </p>
                <br>
                <p class="footer-location">
                  <img src="../../../public/images/pin-white.svg">
                  Villa 33 the 5th District, the 5th Settlement,New Cairo, Egypt</p>
                <p class="footer-number">
                  <img src="../../../public/images/phone-white.svg">
                  (+20) 010123456789</p>
                <p class="footer-mail">
                  <img src="../../../public/images/mail-white.svg">
                  info@gamerslounge.com</p>
            </div>
            
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6 footer-socialmedia">
                <h5 class="footer-followus"> Follow Us</h5>
                
                <div class="socialMedia row">
                    <div class="social-logos-container" @click="goToLink('facebook')">
                      <img class="fb-logo" src="../../../public/images/facebook.svg" alt="" srcset="">
                    </div>

                    <div class="social-logos-container" @click="goToLink('instagram')">
                      <img src="../../../public/images/instagram.svg" alt="" srcset="">
                    </div>

                    <div class="social-logos-container" @click="goToLink('twitter')">
                      <img src="../../../public/images/twitter.svg" alt="" srcset="">
                    </div>

                    <div class="social-logos-container" @click="goToLink('youtube')">
                      <img src="../../../public/images/youtube.svg" alt="" srcset="">
                    </div>
                </div>
            </div>
        </div>

            <div class="row footer-nav"> 
                <ul class="nav justify-content-center col-sm-12 col-md-12 col-lg-12">
                    <router-link to="/" tag="li" active-class="active" exact=""> <a class="nav-link"> Home </a> </router-link>
                    <router-link to="/services" tag="li" active-class="active" > <a class="nav-link"> Our Services </a> </router-link>
                    <router-link to="about" tag="li" active-class="active" > <a class="nav-link"> About Us </a> </router-link> 
                    <router-link to="/contact" tag="li" active-class="active" > <a class="nav-link"> Contact Us </a> </router-link> 
                    <router-link to="/ourwork" tag="li" active-class="active" > <a class="nav-link"> Our Work </a> </router-link> 
                    <router-link to="/jobs" tag="li" active-class="active" > <a class="nav-link"> Jobs </a> </router-link> 
                </ul>
            </div>
    </div>
        
      <div class="row CopyrightDiv m-0 p-0">
        <h5>Copyright © 2020 <a href="#"> Gamers lounge </a> For Esports E.S.C All Rights Reserved</h5>
      </div>

      <transition appear
        name="slide"
        mode="out-in">
             <div class="scroll-top-wrapper" v-if="show"  @click="toTop()" > 
              <div>
                <img src="../../../public/images/top-arrow.svg" alt="" srcset="">
                <img src="../../../public/images/top-arrow.svg" alt="" srcset="">
              </div>
            </div>
      </transition> 
</div>

</template>

<script>
import HalfClippedShape from "./HalfClippedShape";
export default {
  components: {HalfClippedShape},
  data: () => ({
      show: false,
  }),

  methods: {
    goToLink(value) {
      window.open("https://"+value+".com", "_blank");
    },
    handleScroll(event) {
        if (window.scrollY > 50) {
            return this.show = true;
        } else {
            return this.show = false;
        }

      console.log("wtf")
    },
    toTop(){
      window.scrollTo(0, 0);
    }
  },

  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/shared/footer.scss";
@import "../../assets/sass/website/shared/half-clipped-button.scss";

.slide-enter-active {
    animation: slide-in 200ms ease-out forwards;
}
.slide-leave-active {
    animation: slide-out 200ms ease-out forwards;
}
@keyframes slide-in {
    from {
        transform: translateY(-30px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
@keyframes slide-out {
    from {
        transform: translateY(0);
        opacity: 1;
    }
    to {
        transform: translateY(-30px);
        opacity: 0;
    }
}
</style>