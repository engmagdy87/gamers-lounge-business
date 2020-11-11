<template>
  <footer :class="['footer-wrapper', 'footer-wrapper--show-small']">
    <div class="row">
      <div class="col12 col-md-8 order-2 order-md-1">
        <div class="container ml-0">
          <div class="row d-block">
            <div class="text-center text-md-left">
              Copyright ©️ Gamers Lounge 2020
            </div>
            <div class="text-center text-md-left">
              All Rights Reserved
            </div>
          </div>
        </div>
      </div>

      <!--      <div-->
      <!--        class="col12 col-md-8 d-flex justify-content-center order-1 order-md-2"-->
      <!--      >-->
      <!--        <img-->
      <!--          class="footer-wrapper"-->
      <!--          src="/website/img/footer/sponsors-main.png"-->
      <!--        />-->
      <!--      </div>-->

      <div
        class="col12 col-md-4 d-flex justify-content-center justify-content-md-end align-items-center order-1 order-md-2"
      >
        <img
          class="footer-wrapper__logo"
          src="/website/img/footer/gamers-lounge.png"
          alt="gamers lounge"
          @click="redirectTo('http://gamersloungeme.com/')"
        />
        <div class="footer-wrapper__divider"></div>
        <img
          class="footer-wrapper__logo"
          src="/website/img/footer/worx.png"
          alt="worx"
          @click="redirectTo('https://theworx-emc.com/')"
        />
      </div>
    </div>

    <!-- <div class="footer-wrapper__large-footer">
      <div v-if="sponsors.length > 0">
        <div
          v-for="sponsorId in sponsors.length === 1 ? 1 : sponsors.length - 1"
          :key="sponsorId"
        >
          <p class="styled-title">
            <span>{{ categoryTitle(sponsorId.toString()) }}</span>
          </p>
          <div
            v-for="(sponsor, index) in getSponsorsCategoryWithPriority(
              sponsorId.toString()
            )"
            :key="`${index}+large+Sponsored`"
            @click="redirectTo(sponsor.link)"
            role="button"
            class="footer-wrapper__large-footer__img-wrapper"
          >
            <img
              v-if="sponsor.images.img_logo !== null"
              :src="sponsor.images.img_logo.path"
              :alt="sponsor.name"
            />
          </div>
        </div>
      </div>

      <p class="styled-title"><span>Events</span></p>
      <div
        v-for="(event, index) in events"
        :key="`${index}+event`"
        @click="redirectEventTo(event)"
        role="button"
        class="footer-wrapper__large-footer__img-wrapper"
      >
        <img
          v-if="event.images.img_logo !== null"
          :src="event.images.img_logo.path"
          :alt="event.name"
        />
      </div>
      <div v-if="sponsors.length > 1">
        <p class="styled-title">
          <span>{{ categoryTitle(sponsors.length.toString()) }}</span>
        </p>
        <div
          v-for="(sponsor, index) in getSponsorsCategoryWithPriority(
            sponsors.length.toString()
          )"
          :key="`${index}+large+Sponsored`"
          @click="redirectTo(sponsor.link)"
          role="button"
          class="footer-wrapper__large-footer__img-wrapper"
        >
          <img
            v-if="sponsor.images.img_logo !== null"
            :src="sponsor.images.img_logo.path"
            :alt="sponsor.name"
          />
        </div>
      </div>
    </div> -->
  </footer>
</template>

<script>
export default {
  // props: ["sponsors", "events", "showFooter"],
  methods: {
    redirectTo(url) {
      if (url.includes("http")) window.open(url, "_blank");
      else window.open(`http://${url}`, "_blank");
    }
    // redirectEventTo(event) {
    //   if (event.is_external) window.open(event.external_link, "_blank");
    //   else
    //     this.$router.push({
    //       path: `/events/event/${event.id}`
    //     });
    // },
    // getHeighClass() {
    //   if (this.showFooter === "hide") return "footer-wrapper--hide";
    //   else if (this.showFooter === "show-small")
    //     return "footer-wrapper--show-small";
    // else if (this.showFooter === "show-large")
    //   return "footer-wrapper--show-large";
    // },
    // getSponsorDataByPriority(priority) {
    //   const sponsors = this.sponsors.filter(category => {
    //     const categoryObject = category[Object.keys(category)[0]][0];
    //     if (
    //       categoryObject.category.enabled &&
    //       categoryObject.category.priority === priority
    //     )
    //       return category;
    //   });
    //   return sponsors;
    // },
    // getSponsorsCategoryWithPriority(priority) {
    //   const sponsors = this.getSponsorDataByPriority(priority);
    //   return Object.values(sponsors[0])[0];
    // },
    // categoryTitle(priority) {
    //   const sponsors = this.getSponsorDataByPriority(priority);
    //   return Object.keys(sponsors[0])[0];
    // }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/shared/footer.scss";
</style>
