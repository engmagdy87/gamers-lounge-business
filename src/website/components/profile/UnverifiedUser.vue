<template>
  <div
    class="change-password-modal"
    :style="showFlag ? 'display:block' : 'display:none'"
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
        <h2>User Verification</h2>
      </div>
      <div class="change-password-modal-body" style="height:150px">
        <form>
          <div class="form-group" style="color:white;">
            <h3>You need to verify your account</h3>
          </div>
          <button
            type="button"
            class="btn btn-primary float-right"
            @click="reverifyUser"
          >
            Resend Verification Email
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import store from "../../../store/index";
import types from "../../../store/types";
import { removeCookie } from "../../helpers/CookieHelper";

export default {
  props: ["showFlag"],
  computed: {
    ...mapState({
      userVerification: state => state.user.userVerification
    })
  },
  methods: {
    ...mapActions({
      sendVerificationEmail: types.user.actions.RESEND_VERIFICATION_EMAIL
    }),
    reverifyUser: async function() {
      let formData = new FormData();
      formData.append("email", this.userVerification.email);
      await this.sendVerificationEmail(formData);
      removeCookie();
      store.commit(types.user.mutations.SET_USER_PERSONA, {});
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/profile/change-password-modal.scss";
</style>
