<template>
  <div
    class="register-modal"
    :style="showFlag ? 'display:block' : 'display:none'"
    @click="closeModal"
  >
    <!-- Modal content -->
    <div
      class="register-modal-content"
      @click="
        e => {
          e.stopPropagation();
        }
      "
    >
      <div class="register-modal-header">
        <span class="close" @click="closeModal">&times;</span>
        <h2>Register</h2>
      </div>
      <div class="register-modal-body">
        <form>
          <div class="form-group">
            <label for="firstName">First Name</label>
            <input
              type="text"
              class="form-control"
              id="firstName"
              aria-describedby="firstNameHelp"
              placeholder="Enter First Name"
              v-model="firstName"
            />
            <!-- <small id="firstNameHelp" class="form-text text-muted"
              >We'll never share your email with anyone else.</small
            > -->
          </div>
          <div class="form-group">
            <label for="lastName">Last Name</label>
            <input
              type="text"
              class="form-control"
              id="lastName"
              aria-describedby="lastNameHelp"
              placeholder="Enter Last Name"
              v-model="lastName"
            />
          </div>
          <div class="form-group">
            <label for="username">Username</label>
            <input
              type="text"
              class="form-control"
              id="reigter-username"
              aria-describedby="usernameHelp"
              placeholder="Enter Username"
              v-model="username"
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="text"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter Email"
              v-model="email"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="reigter-password"
              placeholder="Enter Password"
              v-model="password"
            />
          </div>
          <div class="form-group">
            <label for="password">Confirm Password</label>
            <input
              type="password"
              class="form-control"
              id="reigter-confirm-password"
              placeholder="Enter Password again"
              v-model="confirmPassword"
            />
          </div>
          <button
            type="button"
            class="btn btn-primary float-right"
            @click="registerUserPersona"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import types from "../../../store/types";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  props: ["showFlag", "setShowRegisterModal"],
  methods: {
    ...mapActions({
      postUserPersona: types.user.actions.REGISTER_USER_PERSONA
    }),
    async registerUserPersona() {
      const payload = {
        first_name: this.firstName,
        last_name: this.lastName,
        username: this.username,
        email: this.email,
        password: this.password,
        password_confirmation: this.confirmPassword
      };
      const isValidRequest = await this.postUserPersona(payload);
      if (isValidRequest) {
        this.firstName = "";
        this.lastName = "";
        this.username = "";
        this.email = "";
        this.password = "";
        this.confirmPassword = "";
      }
    },
    closeModal() {
      this.setShowRegisterModal(false);
      this.firstName = "";
      this.lastName = "";
      this.username = "";
      this.email = "";
      this.password = "";
      this.confirmPassword = "";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/home/register-modal.scss";
</style>
