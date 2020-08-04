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
        <form>
          <div class="form-group">
            <label for="password">Old Password</label>
            <input
              type="password"
              id="current-password"
              placeholder="Enter Old Password"
              v-model="current_password"
              :class="[
                'form-control',
                errors.current_password !== undefined ? 'is-invalid' : '',
                errors.current_password === undefined
                  ? 'registeration-style'
                  : ''
              ]"
            />
            <p
              class="error-message"
              v-if="errors.current_password !== undefined"
            >
              {{ errors.current_password }}
            </p>
          </div>
          <div class="form-group">
            <label for="password">New Password</label>
            <input
              type="password"
              id="new-password"
              placeholder="Enter New Password"
              v-model="new_password"
              :class="[
                'form-control',
                errors.new_password !== undefined ? 'is-invalid' : '',
                errors.new_password === undefined ? 'registeration-style' : ''
              ]"
            />
            <p class="error-message" v-if="errors.new_password !== undefined">
              {{ errors.new_password }}
            </p>
          </div>
          <div class="form-group">
            <label for="password">New Password Confirmation</label>
            <input
              type="password"
              id="new-password-again"
              placeholder="Enter New Password agian"
              v-model="new_password_confirmation"
              :class="[
                'form-control',
                errors.new_password_confirmation !== undefined
                  ? 'is-invalid'
                  : '',
                errors.new_password_confirmation === undefined
                  ? 'registeration-style'
                  : ''
              ]"
            />
            <p
              class="error-message"
              v-if="errors.new_password_confirmation !== undefined"
            >
              {{ errors.new_password_confirmation }}
            </p>
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
import { mapActions, mapMutations } from "vuex";
import store from "../../../store/index";
import types from "../../../store/types";

export default {
  data() {
    return {
      current_password: "",
      new_password: "",
      new_password_confirmation: "",
      errors: {}
    };
  },
  props: ["showFlag", "setShowChangePasswordModal", "setShowReloginModalModal"],
  methods: {
    ...mapActions({
      updateUserPassword: types.user.actions.UPDATE_USER_PROFILE
    }),
    notifyVue(message, color) {
      this.$notifications.notify({
        message: `<span>${message}</span>`,
        horizontalAlign: "right",
        verticalAlign: "top",
        type: color
      });
    },
    async updatePassword() {
      const payload = {
        current_password: this.current_password,
        new_password: this.new_password,
        new_password_confirmation: this.new_password_confirmation
      };
      try {
        store.commit(types.home.mutations.SET_SPINNER_FLAG, true);
        await this.updateUserPassword(payload);

        store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
        this.current_password = "";
        this.new_password = "";
        this.new_password_confirmation = "";
        this.notifyVue("Password Changed Successfully", "success");
        this.setShowChangePasswordModal(false);
        this.setShowReloginModalModal(true);
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
            "Old Password is incorrect, Please try again!",
            "danger"
          );
        }
        store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
      }
    },
    closeModal() {
      this.setShowChangePasswordModal(false);
      this.current_password = "";
      this.new_password = "";
      this.new_password_confirmation = "";
      this.errors = {};
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/profile/change-password-modal.scss";
</style>
