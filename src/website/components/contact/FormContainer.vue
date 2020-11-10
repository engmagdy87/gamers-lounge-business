<template>
  <div class="form-container-wrapper">
    <h2>DON'T HESITATE TO ASK QUESTION</h2>
    <p>
      We are always ready to help and answer all your questions or accept your
      suggestions and feedback
    </p>
    <ContactForm />
  </div>
</template>

<script>
import ContactForm from "../../components/contact/ContactForm";

export default {
  components: {
    ContactForm
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/contact/form-container.scss";
</style>
