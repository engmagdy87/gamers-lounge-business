<template>
  <div class="contact-wrapper" v-if="isContactFetched">
    <Hero :heroImage="contact.img_cover.url">
      <template #hero-content>
        <div class="row align-items-end contact-wrapper__contact-box">
          <div
            class="col-12 col-md-4 d-flex justify-content-center justify-content-md-end mt-2 mb-sm-3 mb-1"
            v-if="contact.information.phone !== ''"
          >
            <ContactDataBox
              title="contact number"
              icon="images/phone.svg"
              :content="contact.information.phone"
            />
          </div>
          <div
            :class="[
              'col-12 d-flex mb-sm-3 mb-1',
              contact.information.phone === ''
                ? 'col-md-6 justify-content-end pr-5'
                : 'col-md-4 justify-content-center'
            ]"
          >
            <ContactDataBox
              title="Find Location"
              icon="images/pin.svg"
              :content="contact.information.address"
            />
          </div>
          <div
            :class="[
              'col-12 col-md-4 d-flex mb-sm-3',
              contact.information.phone === ''
                ? 'col-md-6 justify-content-start pl-5'
                : 'col-md-4 justify-content-md-start justify-content-center'
            ]"
          >
            <ContactDataBox
              title="Our Mail"
              icon="images/env.svg"
              :content="contact.information.email"
            />
          </div>
        </div>
      </template>
    </Hero>
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
</template>

<script>
import { mapState, mapActions } from "vuex";
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
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/containers/contact.scss";
</style>
