<template>
  <div class="contact-form-wrapper mt-4">
    <form>
      <div class="form-group">
        <label class="form-group__name-label">Name</label>
        <div class="contact-form-wrapper__input-outline-mask">
          <input type="text" class="form-control" v-model="contact.name" />
        </div>
        <ErrorMessage :fieldErrors="errors.name" />
      </div>
      <div class="form-group">
        <label class="form-group__email-label">Email</label>
        <div class="contact-form-wrapper__input-outline-mask">
          <input
            type="text"
            class="form-control"
            id="email"
            aria-describedby="email"
            v-model="contact.email"
          />
        </div>
        <ErrorMessage :fieldErrors="errors.email" />
      </div>
      <div class="form-group">
        <label class="form-group__message-label">Message</label>
        <div class="contact-form-wrapper__textarea-outline-mask">
          <textarea
            rows="5"
            class="form-control border-input"
            v-model="contact.message"
          >
          </textarea>
        </div>
        <ErrorMessage :fieldErrors="errors.message" />
      </div>
      <div
        role="button"
        class="contact-form-wrapper__submit-btn"
        @click="submitMessage"
      >
        SUBMIT
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import types from "../../../store/types";
import ErrorMessage from "../../shared/ErrorMessage";
import isValidationErrorExist from "../../../helpers/FormValidation";

const emptyForm = {
  name: "",
  email: "",
  message: ""
};

export default {
  data() {
    return {
      contact: {
        ...emptyForm
      },
      errors: {},
      validation: {
        name: { minLength: 3 },
        email: { isEmail: true },
        message: { minLength: 4 }
      },
      aliases: {
        name: "name",
        email: "email",
        message: "message"
      }
    };
  },
  components: {
    ErrorMessage
  },
  methods: {
    ...mapActions({
      sendEmail: types.contact.actions.SEND_EMAIL
    }),
    submitMessage: async function() {
      const errorObject = isValidationErrorExist(
        this.contact,
        this.aliases,
        this.validation
      );
      this.errors = { ...errorObject.errors };
      if (errorObject.length !== 0) return;
      try {
        await this.sendEmail(this.contact);
        this.notifyVue("Thank you for sending the message", "success");
        this.contact = { ...emptyForm };
      } catch (errors) {
        JSON.parse(errors).forEach(error => {
          this.notifyVue(error.message, "danger");
        });
      }
    },
    notifyVue(message, color) {
      this.$notifications.notify({
        message: `<span>${message}</span>`,
        horizontalAlign: "right",
        verticalAlign: "top",
        type: color
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/contact/contact-form.scss";
</style>
