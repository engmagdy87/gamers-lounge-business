<template>
  <div
    class="login-modal"
    :style="showFlag ? 'display:block' : 'display:none'"
    @click="closeModal"
  >
    <!-- Modal content -->
    <div
      class="login-modal-content"
      @click="
        e => {
          e.stopPropagation();
        }
      "
    >
      <div class="login-modal-header">
        <span class="close" @click="closeModal">&times;</span>
        <h2>Login</h2>
      </div>
      <div class="login-modal-body">
        <form>
          <div class="form-group">
            <label for="username">Username</label>
            <input
              type="text"
              class="form-control"
              id="login-username"
              aria-describedby="usernameHelp"
              placeholder="Enter Username"
              v-model="username"
            />
            <!-- <small id="usernameHelp" class="form-text text-muted"
              >We'll never share your email with anyone else.</small
            > -->
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="login-password"
              placeholder="Enter Password"
              v-model="password"
            />
          </div>
          <button
            type="button"
            class="btn btn-primary float-right"
            @click="getUserPersona"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import types from "../../../store/types";

export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  props: ["showFlag", "setShowLoginModal"],
  methods: {
    ...mapActions({
      fetchUserPersona: types.user.actions.FETCH_USER_PERSONA
    }),
    ...mapMutations({
      setSpinnerFlag: types.home.mutations.SET_SPINNER_FLAG
    }),
    notifyVue(message, color) {
      this.$notifications.notify({
        message: `<span>${message}</span>`,
        horizontalAlign: "right",
        verticalAlign: "top",
        type: color
      });
    },
    async getUserPersona() {
      const payload = { username: this.username, password: this.password };
      const isValidRequest = await this.fetchUserPersona(payload);
      this.setSpinnerFlag(false);
      if (isValidRequest) {
        this.username = "";
        this.password = "";
        this.notifyVue("Successful Login", "success");
      } else this.notifyVue("Something wrong happen!", "danger");
    },
    closeModal() {
      this.setShowLoginModal(false);
      this.username = "";
      this.password = "";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/home/login-modal.scss";
</style>
