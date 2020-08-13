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
        <form>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              v-model="password"
              :class="[
                'form-control',
                errors.password !== undefined ? 'is-invalid' : '',
                errors.password === undefined ? 'registeration-style' : ''
              ]"
              autofocus
              v-on:keyup.enter="onEnter"
            />
            <p class="error-message" v-if="errors.password !== undefined">
              {{ errors.password }}
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
export default {
  data() {
    return {
      password: "",
      errors: {}
    };
  },
  props: ["showFlag", "setShowRequestedPasswordModal"],
  methods: {
    async updatePassword() {
      if (this.password === "")
        this.errors.password = "Please insert your password";
      else {
        this.setShowRequestedPasswordModal(false, this.password);
      }
    },
    closeModal() {
      this.setShowRequestedPasswordModal(false);
      this.password = "";
      this.errors = {};
    },
    onEnter() {
      this.updatePassword();
    }
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
