<template>
  <div v-if="isServicesFetched">
    <ServicesHero />

    <div class="services-page-wrapper row">
      <div
        v-for="service in services"
        :key="service.id"
        class="services-page-wrapper__content-wrapper col-xs-12 col-sm-12 col-md-6 col-lg-4"
      >
        <router-link
          :to="`/services/${service.id}-${reformatURL(service.title)}`"
        >
          <div class="services-page-wrapper__content col-12 p-0 mt-3 mb-3">
            <img :src="service.img_card.url" draggable="false" />

            <div class="services-page-wrapper__text">
              <h2>{{ service.title }}</h2>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import types from "../../../store/types";
import { reformatStringToBeInURL } from "../../../helpers/StringsHelper";
import ServicesHero from "../../components/services/ServicesHero";
export default {
  components: { ServicesHero },
  computed: {
    ...mapState({
      services: state => state.services.services,
      isServicesFetched: state => state.services.isServicesFetched
    })
  },
  methods: {
    ...mapActions({
      fetchServices: types.services.actions.FETCH_SERVICES
    }),
    ...mapMutations({
      setShowHeaderFlag: types.app.mutations.SET_SHOW_HEADER_FLAG,
      setShowFooterFlag: types.app.mutations.SET_SHOW_FOOTER_FLAG
    }),
    reformatURL(id) {
      return reformatStringToBeInURL(id);
    }
  },
  mounted() {
    if (!this.isServicesFetched) this.fetchServices("website");
    else {
      this.setShowHeaderFlag(true);
      this.setShowFooterFlag(true);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/services/services-main-page.scss";
</style>
