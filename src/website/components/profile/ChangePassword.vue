<template>
  <div
    class="change-password-modal"
    :style="showFlag ? 'display:block' : 'display:none'"
    @click="closeModal"
  >
    <!-- Modal content -->
    <div
      class="change-password-modal-content"
      @click="
        e => {
          e.stopPropagation();
        }
      "
    >
      <div class="change-password-modal-header">
        <span class="close" @click="closeModal">&times;</span>
        <h2>Change Password</h2>
      </div>
      <div class="change-password-modal-body">
        <form @submit.prevent>
          <div class="form-group">
            <label for="password">Old Password</label>
            <input
              type="password"
              id="current-password"
              placeholder="Enter Old Password"
              v-model="passwords.password"
              :class="[
                'form-control',
                errors.password === undefined ? 'registeration-style' : ''
              ]"
              v-on:keyup.enter="onEnter"
            />
            <ErrorMessage :fieldErrors="errors.password" />
          </div>
          <div class="form-group">
            <label for="password">New Password</label>
            <input
              type="password"
              id="new-password"
              placeholder="Enter New Password"
              v-model="passwords.newPassword"
              :class="[
                'form-control',
                errors.newPassword === undefined ? 'registeration-style' : ''
              ]"
              v-on:keyup.enter="onEnter"
            />
            <ErrorMessage :fieldErrors="errors.newPassword" />
          </div>
          <div class="form-group">
            <label for="password">New Password Confirmation</label>
            <input
              type="password"
              id="new-password-again"
              placeholder="Enter New Password agian"
              v-model="passwords.newPasswordConfirmation"
              :class="[
                'form-control',
                errors.newPasswordConfirmation === undefined
                  ? 'registeration-style'
                  : ''
              ]"
              v-on:keyup.enter="onEnter"
            />
            <ErrorMessage :fieldErrors="errors.newPasswordConfirmation" />
          </div>
          <button
            type="button"
            class="btn btn-primary float-right"
            @click="updatePassword"
          >
            Done
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ErrorMessage from "../../shared/ErrorMessage";
import isValidationErrorExist from "../../../helpers/FormValidation";

const emptyPasswords = {
  password: "",
  newPassword: "",
  newPasswordConfirmation: ""
};

export default {
  data() {
    return {
      passwords: { ...emptyPasswords },
      errors: {},
      validation: {
        Password: { isRequired: true, minLength: 6 },
        "New Password": { isRequired: true, minLength: 6 },
        "New Password Confirmation": { isRequired: true, minLength: 6 }
      },
      aliases: {
        password: "Password",
        newPassword: "New Password",
        newPasswordConfirmation: "New Password Confirmation"
      }
    };
  },
  props: ["showFlag", "setShowChangePasswordModal", "setShowReloginModalModal"],
  methods: {
    onEnter() {
      this.updatePassword();
    },
    async updatePassword() {
      const errorObject = isValidationErrorExist(
        this.passwords,
        this.aliases,
        this.validation
      );
      this.errors = { ...errorObject.errors };

      if (errorObject.length !== 0) return;

      if (
        this.passwords.newPassword !== this.passwords.newPasswordConfirmation
      ) {
        this.errors.newPasswordConfirmation = [
          "New password and confirm password does not match"
        ];
        return;
      }

      this.setShowChangePasswordModal(false, this.passwords);
      this.passwords = { ...emptyPasswords };
      this.errors = {};
    },
    closeModal() {
      this.setShowChangePasswordModal(false);
      this.passwords = { ...emptyPasswords };
      this.errors = {};
    }
  },
  components: {
    ErrorMessage
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/profile/change-password-modal.scss";
</style>
