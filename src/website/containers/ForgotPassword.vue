<template>
  <div class="profile-wrapper">
    <Header activeItem="profile" :isSolidHeader="true" />
    <div class="profile-wrapper__outside">
      <div class="profile-wrapper__inside"></div>
    </div>
    <div class="profile-wrapper__content">
      <div class="row" style="height:250px">
        <div class="col-12">
          <h1 v-if="!isMailSent">
            Please type your email to send reset password link
          </h1>
          <h1 v-else>Check now your email</h1>
          <div class="col" v-if="!isMailSent">
            <base-input
              type="text"
              placeholder="Enter Email"
              v-model="email"
              :autofocus="true"
            >
            </base-input>
            <p class="error-message" v-if="errors.email !== undefined">
              {{ errors.email }}
            </p>
          </div>
        </div>
      </div>
      <div class="row" v-if="!isMailSent">
        <div class="col float-right">
          <div
            class="btn float-right profile-wrapper__content__custom-button-wrapper__outside"
            role="button"
            @click="sendEmail"
          >
            Ok
          </div>
        </div>
      </div>
    </div>
    <Spinner :smallLoader="false" />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import store from "../../store/index";
import types from "../../store/types";
import Header from "../shared/Header";
import Spinner from "../shared/Spinner";
import isEmailValid from "../helpers/EmailValidation";

export default {
  data() {
    return {
      email: "",
      errors: {}
    };
  },
  computed: {
    ...mapState({
      isMailSent: state => state.user.isForgotMailSent
    })
  },
  methods: {
    ...mapActions({
      sendForgotPasswordMail: types.user.actions.SEND_FORGOT_MAIL
    }),
    sendEmail: async function() {
      if (!isEmailValid(this.email)) {
        this.notifyVue("Email has invalid format", "danger");
        this.errors = { ...this.errors, email: "Email has invalid format" };
      } else {
        try {
          let formData = new FormData();
          formData.append("email", this.email);
          await this.sendForgotPasswordMail(formData);
        } catch (error) {
          if (
            error.data.errors !== undefined &&
            error.data.message === undefined
          ) {
            this.errors = { ...error.data.errors };
            Object.keys(error.data.errors).forEach(err => {
              const errorMessage = error.data.errors[err][0];
              this.notifyVue(errorMessage, "danger");
              this.errors = { ...this.errors, [err]: errorMessage };
            });
          } else {
            this.notifyVue("Email is incorrect, Please try again!", "danger");
          }
          store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
        }
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
  },
  components: {
    Header,
    Spinner
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/containers/profile.scss";
.form-control {
  background-color: black !important;
  border: 1px solid #2af3f3 !important;
  color: #2af3f3 !important;
}

.input-group-text {
  background-color: transparent !important;
  border: none !important;
  padding: 0 !important;
  width: 150px !important;
  height: fit-content !important;
  margin: 0 !important;
}
.input-group-prepend {
  display: flex !important;
}
</style>
