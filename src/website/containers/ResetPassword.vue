<template>
  <div class="profile-wrapper">
    <Header activeItem="profile" :isSolidHeader="true" />
    <div class="profile-wrapper__outside">
      <div class="profile-wrapper__inside"></div>
    </div>
    <div class="profile-wrapper__content">
      <div class="row" style="height:250px">
        <div class="col-12">
          <h1 v-if="!isResetPasswordSent">
            Please insert the new password
          </h1>
          <h1 v-else>New Password is set</h1>
          <div class="col" v-if="!isResetPasswordSent">
            <base-input
              type="password"
              placeholder="Enter Password"
              v-model="password"
              :autofocus="true"
            >
            </base-input>
            <p class="error-message" v-if="errors.password !== undefined">
              {{ errors.password }}
            </p>
          </div>
          <div class="col" v-if="!isResetPasswordSent">
            <base-input
              type="password"
              placeholder="Enter Password Confirmation"
              v-model="password_confirmation"
              :autofocus="true"
            >
            </base-input>
            <p
              class="error-message"
              v-if="errors.password_confirmation !== undefined"
            >
              {{ errors.password_confirmation }}
            </p>
          </div>
        </div>
      </div>
      <div class="row" v-if="!isResetPasswordSent">
        <div class="col float-right">
          <div
            class="btn float-right profile-wrapper__content__custom-button-wrapper__outside"
            role="button"
            @click="resetUserPassword"
          >
            Reset Password
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
      token: this.$router.history.current.params.token,
      email: this.$router.history.current.params.email,
      password: "",
      password_confirmation: "",
      errors: {}
    };
  },
  computed: {
    ...mapState({
      isResetPasswordSent: state => state.user.isResetPasswordSent
    })
  },
  methods: {
    ...mapActions({
      resetPassword: types.user.actions.RESET_PASSWORD
    }),
    resetUserPassword: async function() {
      if (!isEmailValid(this.email)) {
        this.notifyVue("Email has invalid format", "danger");
        this.errors = { ...this.errors, email: "Email has invalid format" };
      } else {
        try {
          let formData = new FormData();
          formData.append("token", this.token);
          formData.append("email", this.email);
          formData.append("password", this.password);
          formData.append("password_confirmation", this.password_confirmation);
          await this.resetPassword(formData);
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
            this.notifyVue(
              "Something wrong occurs, Please try again!",
              "danger"
            );
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
