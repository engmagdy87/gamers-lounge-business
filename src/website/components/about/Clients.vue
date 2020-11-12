<template>
  <div class="about-clients-wrapper">
    <div class="about-clients-wrapper__inside">
        <div class="clients-header">
          <h1>OUR CLIENTS</h1>
        </div>

        <div class="about-clients-wrapper__topline"> <div></div> </div>

        <div class="container">
            <ClientsData :imageName="'Amazon.ae-Logo.wine.png'" />
            <ClientsData :imageName="'asus.svg'" />
            <ClientsData :imageName="'bloody-logo-png-5.png'" />
            <ClientsData :imageName="'dell.svg'" />

        </div> 

        <div class="about-clients-wrapper__linebetween"> <div></div> </div>

        <div class="container">
            <ClientsData :imageName="'hp.svg'" :className="'bottomgrid'" />
            <ClientsData :imageName="'Image 1.png'" :className="'bottomgrid'" />
            <ClientsData :imageName="'lenovo.svg'" :className="'bottomgrid'" />
            <ClientsData :imageName="'bloody-logo-png-5.png'" :className="'bottomgrid'" />
        </div>

        <div class="about-clients-wrapper__bottomline"> <div></div> </div>
    </div>
  </div>
</template>

<script>
import ClientsData from "./ClientsData"
export default {
  components:{ ClientsData }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/about/about-clients.scss";
</style>