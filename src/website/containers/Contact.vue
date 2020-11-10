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
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.113134868015!2d31.427575215691927!3d30.00490768189666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583cc723219aad%3A0x3cab9244af63e06e!2sGamers%20Lounge!5e0!3m2!1sen!2seg!4v1605050261157!5m2!1sen!2seg"
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
