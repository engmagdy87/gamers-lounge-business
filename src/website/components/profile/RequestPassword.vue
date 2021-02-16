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
        <h2>Request Password</h2>
      </div>
      <div class="change-password-modal-body request-password-modal-body">
        <form @submit.prevent>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              v-model="user.password"
              :class="[
                'form-control',
                errors.password === undefined ? 'registeration-style' : ''
              ]"
              autofocus
              v-on:keyup.enter="onEnter"
            />
            <ErrorMessage :fieldErrors="errors.password" />
          </div>
          <button
            type="button"
            class="btn btn-primary float-right"
            @click.prevent="updatePassword"
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

export default {
  data() {
    return {
      user: { password: "" },
      errors: {},
      validation: {
        Password: { isRequired: true }
      },
      aliases: {
        password: "Password"
      }
    };
  },
  props: ["showFlag", "setShowRequestedPasswordModal"],
  methods: {
    async updatePassword() {
      const errorObject = isValidationErrorExist(
        this.user,
        this.aliases,
        this.validation
      );
      this.errors = { ...errorObject.errors };
      if (errorObject.length !== 0) return;

      this.setShowRequestedPasswordModal(false, this.user.password);
      this.user.password = "";
      this.errors = {};
    },
    closeModal() {
      this.setShowRequestedPasswordModal(false);
      this.user.password = "";
      this.errors = {};
    },
    onEnter() {
      this.updatePassword();
    }
  },
  components: {
    ErrorMessage
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/profile/change-password-modal.scss";
.request-password-modal-body {
  padding: 16px;
  form {
    height: 150px !important;
  }
}
</style>
