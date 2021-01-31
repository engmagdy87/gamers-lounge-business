<template>
  <div class="about-clients-wrapper">
    <div class="about-clients-wrapper__inside">
        <div class="clients-header">
          <h1>OUR CLIENTS</h1>
        </div>

        <div class="about-clients-wrapper__topline"> <div></div> </div>

        <div class="container" >
            <ClientsData :link="sponsors[0].link" :imageName="sponsors[0].name" :imageUrl="sponsors[0].image.url" />
            <ClientsData :link="sponsors[1].link" :imageName="sponsors[1].name" :imageUrl="sponsors[1].image.url" />
            <ClientsData :link="sponsors[2].link" :imageName="sponsors[2].name" :imageUrl="sponsors[2].image.url" />
            <ClientsData :link="sponsors[3].link" :imageName="sponsors[3].name" :imageUrl="sponsors[3].image.url" />

        </div> 

        <div class="about-clients-wrapper__linebetween"> <div></div> </div>

        <div class="container">
            <ClientsData :link="sponsors[4].link" :imageName="sponsors[4].name"
            :imageUrl="sponsors[4].image.url"
             />
            <ClientsData :link="sponsors[5].link" :imageName="sponsors[5].name"
            :imageUrl="sponsors[5].image.url"
            />
            <ClientsData :link="sponsors[6].link" :imageName="sponsors[6].name"
            :imageUrl="sponsors[6].image.url"
            />
            <ClientsData :link="sponsors[7].link" :imageName="sponsors[7].name"
            :imageUrl="sponsors[7].image.url"
            />
        </div>

        <div class="about-clients-wrapper__bottomline"> <div></div> </div>
    </div>
  </div>
</template>

<script>
import ClientsData from "./ClientsData"
export default {
  props: ["sponsors"],
  components:{ ClientsData },
}
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/about/about-clients.scss";
</style>