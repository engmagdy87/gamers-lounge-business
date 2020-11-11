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
                <p class="footer-location"><i class="fas fa-map-marker-alt"></i> Villa 33 the 5th District, the 5th Settlement,New Cairo, Egypt</p>
                <p class="footer-number"><i class="fas fa-phone-alt"></i> (+20) 010123456789</p>
                <p class="footer-mail"><i class="fas fa-phone-alt"></i> info@gamerslounge.com</p>
            </div>
            
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6 footer-socialmedia">
                <h5 class="footer-followus"> Follow Us</h5>
                
                <div class="socialMedia row">
                    <div class="social-logos-container">
                      <img src="../../../public/images/facebook.svg" alt="" srcset="">
                    </div>

                    <div class="social-logos-container">
                      <img src="../../../public/images/instagram.svg" alt="" srcset="">
                    </div>

                    <div class="social-logos-container">
                      <img src="../../../public/images/twitter.svg" alt="" srcset="">
                    </div>

                    <div class="social-logos-container">
                      <img src="../../../public/images/youtube.svg" alt="" srcset="">
                    </div>
                </div>
            </div>
        </div>

            <div class="row footer-nav"> 
                <ul class="nav justify-content-center col-sm-12 col-md-12 col-lg-12">
                    <router-link to="/" tag="li" active-class="active" exact=""> <a class="nav-link"> Home </a> </router-link>
                    <router-link to="/about" tag="li" active-class="active" > <a class="nav-link"> About us </a> </router-link>
                    <router-link to="services" tag="li" active-class="active" > <a class="nav-link"> Services </a> </router-link> 
                    <router-link to="/tournaments" tag="li" active-class="active" > <a class="nav-link"> Tournaments </a> </router-link> 
                    <router-link to="/gallery" tag="li" active-class="active" > <a class="nav-link"> Gallery </a> </router-link> 
                    <router-link to="/contactus" tag="li" active-class="active" > <a class="nav-link"> Contact us </a> </router-link> 
                </ul>
            </div>
    </div>
        
      <div class="row CopyrightDiv m-0 p-0">
        <h5>Copyright © 2020 <a href="#"> Gamers lounge </a> For Esports E.S.C All Rights Reserved</h5>
      </div>
            
</div>

</template>

<script>
import HalfClippedShape from "./HalfClippedShape";
export default {
  components: {HalfClippedShape}
}
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/shared/footer.scss";
@import "../../assets/sass/website/shared/half-clipped-button.scss";
</style>