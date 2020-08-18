<template>
  <footer :class="['footer-wrapper', getHeighClass()]">
    <div
      v-if="showFooter === 'show-small'"
      class="footer-wrapper__small-footer"
    >
      <div
        v-for="(sponsor, index) in getSponsorsCategoryWithPriority('1')"
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
      v-if="showFooter === 'show-large' && sponsors.length - 1 > 0"
      class="footer-wrapper__large-footer"
    >
      <div v-for="sponsorId in sponsors.length - 1" :key="sponsorId">
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
      <div>
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
    },
    getSponsorDataByPriority(priority) {
      const sponsors = this.sponsors.filter(category => {
        const categoryObject = category[Object.keys(category)[0]][0];
        if (
          categoryObject.category.enabled &&
          categoryObject.category.priority === priority
        )
          return category;
      });
      return sponsors;
    },
    getSponsorsCategoryWithPriority(priority) {
      const sponsors = this.getSponsorDataByPriority(priority);
      return Object.values(sponsors[0])[0];
    },
    categoryTitle(priority) {
      const sponsors = this.getSponsorDataByPriority(priority);
      return Object.keys(sponsors[0])[0];
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/shared/footer.scss";
</style>
