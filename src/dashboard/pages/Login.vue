<template>
  <div class="login-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div class="card card-signin my-5">
            <div class="card-body">
              <h5 class="card-title text-center">Sign In</h5>
              <form class="form-signin">
                <div class="row">
                  <div class="col-12 p-2">
                    <base-input
                      type="text"
                      label="Username"
                      placeholder="Enter Username"
                      autofocus
                      v-model="credentials.username"
                      v-on:keyup.enter="onEnter"
                    >
                    </base-input>
                  </div>
                  <div class="col-12 p-2">
                    <base-input
                      type="password"
                      label="Password"
                      placeholder="Enter Password"
                      v-model="credentials.password"
                      v-on:keyup.enter="onEnter"
                    >
                    </base-input>
                  </div>
                </div>
                <div class="text-center">
                  <button
                    type="button"
                    class="btn btn-fill float-right"
                    @click.prevent="login"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import types from "../../store/types";

export default {
  data() {
    return {
      credentials: { username: "", password: "" }
    };
  },
  methods: {
    ...mapActions({
      loginToDashboard: types.login.actions.LOGIN_TO_DASHBOARD
    }),
    login: async function() {
      try {
        await this.loginToDashboard(this.credentials);
      } catch (errors) {
        JSON.parse(errors).forEach(error => {
          this.notifyVue(error.message, "danger");
        });
      }
    },
    onEnter() {
      this.login();
    },
    notifyVue(message, color) {
      this.$notifications.notify({
        message: `<span>${message}</span>`,
        horizontalAlign: "right",
        verticalAlign: "top",
        type: color
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/color-palette.scss";
$input-padding-x: 1.5rem;
$input-padding-y: 0.75rem;

.login-wrapper {
  //   background: $primary;
  background: linear-gradient(to right, $primary, $accent);
  height: 100vh;
}

.card-signin {
  border: 0;
  //   border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
}

.card-signin .card-title {
  margin-bottom: 2rem;
  font-weight: 300;
  font-size: 1.5rem;
}

.card-signin .card-body {
  padding: 2rem;
}

.form-signin {
  width: 100%;
}
</style>
