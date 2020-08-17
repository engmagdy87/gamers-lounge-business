<template>
  <footer :class="['footer-wrapper', getHeighClass()]">
    <div
      v-if="showFooter === 'show-small'"
      class="footer-wrapper__small-footer"
    >
      <div
        v-for="(sponsor, index) in sponsors['Sponsored by']"
        :key="`${index}+small`"
        @click="redirectTo(sponsor.link)"
        role="button"
        class="footer-wrapper__small-footer__img-wrapper"
      >
        <img
          v-if="sponsor.images.img_logo !== null"
          :src="sponsor.images.img_logo.path"
          :alt="sponsor.name"
        />
      </div>
    </div>
    <div
      v-if="showFooter === 'show-large'"
      class="footer-wrapper__large-footer"
    >
      <p class="styled-title"><span>Sponsored by</span></p>
      <div
        v-for="(sponsor, index) in sponsors['Sponsored by']"
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
      <p class="styled-title"><span>Organized by</span></p>
      <div
        v-for="(sponsor, index) in sponsors['Organized by']"
        :key="`${index}+large+Organized`"
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
      <p class="styled-title"><span>Media Partners</span></p>
      <div
        v-for="(sponsor, index) in sponsors['Media Partners']"
        :key="`${index}+large+Media`"
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
  </footer>
</template>

<script>
export default {
  props: ["sponsors", "events", "showFooter"],
  methods: {
    redirectTo(url) {
      if (url.includes("http")) window.open(url, "_blank");
      else window.open(`http://${url}`, "_blank");
    },
    redirectEventTo(event) {
      if (event.is_external) window.open(event.external_link, "_blank");
      else
        this.$router.push({
          path: `/events/event/${event.id}`
        });
    },
    getHeighClass() {
      if (this.showFooter === "hide") return "footer-wrapper--hide";
      else if (this.showFooter === "show-small")
        return "footer-wrapper--show-small";
      else if (this.showFooter === "show-large")
        return "footer-wrapper--show-large";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/shared/footer.scss";
</style>
