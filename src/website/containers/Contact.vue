<template>
  <div class="contact-wrapper" v-if="isContactFetched">
    <div
      class="contact-wrapper__bg"
      :style="`background-image: url(${contact.img_cover.url};`"
    ></div>
    <Hero page="services">
      <template #hero-content>
        <div class="row align-items-end contact-wrapper__contact-box">
          <div
            class="col-12 col-md-4 d-flex justify-content-center justify-content-md-end mt-2 mb-sm-3 mb-1"
            v-if="contact.information.phone !== ''"
          >
            <ContactDataBox
              title="contact number"
              icon="images/phone.svg"
              type="phone"
              :content="contact.information.phone"
            />
          </div>
          <div
            :class="[
              'col-12 d-flex mb-sm-3 mb-1',
              contact.information.phone === ''
                ? 'col-md-6 justify-content-md-end justify-content-center pr-md-5 mt-2 mt-md-auto'
                : 'col-md-4 justify-content-center'
            ]"
          >
            <ContactDataBox
              title="Find Location"
              icon="images/pin.svg"
              type="address"
              :map="contact.map"
              :content="contact.information.address"
            />
          </div>
          <div
            :class="[
              'col-12 col-md-4 d-flex mb-sm-3',
              contact.information.phone === ''
                ? 'col-md-6 justify-content-md-start justify-content-center pl-md-5'
                : 'col-md-4 justify-content-md-start justify-content-center'
            ]"
          >
            <ContactDataBox
              title="Our EMail"
              icon="images/env.svg"
              type="email"
              :content="contact.information.email"
            />
          </div>
        </div>
      </template>
    </Hero>
    <div class="contact-wrapper__content">
      <FormContainer />
      <iframe
        v-if="contact.map !== ''"
        :src="contact.map"
        width="100%"
        height="600"
        frameborder="0"
        style="border:0;"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import types from "../../store/types";
import Hero from "../shared/Hero";
import ContactDataBox from "../components/contact/ContactDataBox";
import FormContainer from "../components/contact/FormContainer";

export default {
  computed: {
    ...mapState({
      contact: state => state.contact.contact,
      isContactFetched: state => state.contact.isContactFetched
    })
  },
  methods: {
    ...mapActions({
      fetchContactUsData: types.contact.actions.FETCH_CONTACT
    }),
    ...mapMutations({
      setShowFooterFlag: types.app.mutations.SET_SHOW_FOOTER_FLAG
    })
  },
  components: {
    Hero,
    ContactDataBox,
    FormContainer
  },
  mounted() {
    const requestSource = {
      requestSource: "website",
      showSpinner: true
    };
    this.fetchContactUsData(requestSource);
  },
  updated() {
    if (this.isContactFetched) this.setShowFooterFlag(true);
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/containers/contact.scss";
</style>
