<template>
  <div class="contact-wrapper">
    <Hero>
      <template #hero-content>
        <div class="row align-items-end h-100 contact-wrapper__contact_box">
          <div
            class="col-12 col-md-4 d-flex justify-content-center justify-content-md-end mt-3 mb-sm-3 mb-2"
          >
            <ContactDataBox :data="contactData[0]" />
          </div>
          <div
            class="col-12 col-md-4 d-flex justify-content-center mb-sm-3 mb-2"
          >
            <ContactDataBox :data="contactData[1]" />
          </div>
          <div
            class="col-12 col-md-4 d-flex justify-content-center justify-content-md-start mb-sm-3 mb-2"
          >
            <ContactDataBox :data="contactData[2]" />
          </div>
        </div>
      </template>
    </Hero>
    <FormContainer />
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import Hero from "../shared/Hero";
import ContactDataBox from "../components/contact/ContactDataBox";
import FormContainer from "../components/contact/FormContainer";

export default {
  data() {
    return {
      contactData: [
        {
          icon: "images/phone.svg",
          title: "contact number",
          details: "(+20) 010123456789"
        },
        {
          icon: "images/pin.svg",
          title: "Find Location",
          details:
            "Villa 33 the 5th District, the 5th Settlement,New Cairo, Egypt"
        },
        {
          icon: "images/env.svg",
          title: "Our Mail",
          details: "info@gamersloungeme.com"
        }
      ]
    };
  },
  components: {
    Hero,
    ContactDataBox,
    FormContainer
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/containers/contact.scss";
</style>
