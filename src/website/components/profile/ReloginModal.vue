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
        <h2>Login Again</h2>
      </div>
      <div class="change-password-modal-body" style="height:150px">
        <form>
          <div class="form-group" style="color:white;">
            <h3>You need to re-login again</h3>
          </div>
          <button
            type="button"
            class="btn btn-primary float-right"
            @click="reLogin"
          >
            Ok
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../../../store/index";
import types from "../../../store/types";
import { removeCookie } from "../../helpers/CookieHelper";

export default {
  props: ["showFlag"],
  methods: {
    reLogin() {
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
