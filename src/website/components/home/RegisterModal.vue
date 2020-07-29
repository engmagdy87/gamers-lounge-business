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
            <div class="preview" v-if="imgProfileUrl">
              <div class="preview__close" role="button" @click="resetPreview">
                &times;
              </div>
              <img v-if="imgProfileUrl" :src="imgProfileUrl" />
            </div>
            <div class="dropbox" v-if="!imgProfileUrl">
              <input
                type="file"
                multiple
                name="img_profile"
                @change="filesChange($event.target.name, $event.target.files)"
                accept="image/png, image/jpeg"
                class="input-file"
                ref="img_profile"
              />
              <p v-if="!imgProfileUrl">
                Drop you profile picture here<br />
                or Browse
              </p>
            </div>
          </div>
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
            <label for="region">Phone</label>
            <div class="input-group-prepend">
              <div class="input-group-text">
                <select class="form-control" v-model="phone.country_code">
                  <option
                    v-for="(countryCode, index) in countryCodesData"
                    :selected="phone.country_code === countryCode.dial_code"
                    :key="index"
                    :value="countryCode.dial_code"
                    >{{ countryCode.code }} {{ countryCode.dial_code }}</option
                  >
                </select>
              </div>
              <input
                type="text"
                class="form-control"
                id="phone-number"
                aria-describedby="phoneNumber"
                placeholder="Enter Phone Number"
                v-model="phone.number"
              />
            </div>
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
import countryCodes from "../../../assets/json/CountryCodes.json";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      img_profile: "",
      phone: {
        country_code: countryCodes[0].dial_code,
        number: ""
      },
      imgProfileUrl: null,
      countryCodesData: countryCodes
    };
  },
  props: ["showFlag", "setShowRegisterModal"],
  methods: {
    ...mapActions({
      postUserPersona: types.user.actions.REGISTER_USER_PERSONA
    }),
    async registerUserPersona() {
      let formData = new FormData();
      formData.append("first_name", this.firstName);
      formData.append("last_name", this.lastName);
      formData.append("username", this.username);
      formData.append("email", this.email);
      formData.append("password", this.password);
      formData.append("password_confirmation", this.confirmPassword);
      formData.append("img_profile", this.img_profile);
      formData.append("phone", JSON.stringify(this.phone));

      const isValidRequest = await this.postUserPersona(formData);
      if (isValidRequest) {
        this.firstName = "";
        this.lastName = "";
        this.username = "";
        this.email = "";
        this.password = "";
        this.confirmPassword = "";
        this.img_profile = "";
        this.imgProfileUrl = null;
        this.phone = {
          country_code: countryCodes[0].dial_code,
          number: ""
        };
        this.$refs.img_profile.value = null;
      } else {
        this.notifyVue("Error Happened", "danger");
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
      this.img_profile = "";
      this.phone = {
        country_code: countryCodes[0].dial_code,
        number: ""
      };
    },
    filesChange(name, files) {
      this.img_profile = files[0];
      this.imgProfileUrl = URL.createObjectURL(files[0]);
    },
    resetPreview() {
      this.imgProfileUrl = null;
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
@import "../../../assets/sass/website/components/home/register-modal.scss";
$preview-image: 200px;
.dropbox {
  outline: 2px dashed grey; /* the dash box */
  outline-offset: -10px;
  background: lightcyan;
  color: dimgray;
  padding: 10px 10px;
  height: $preview-image; /* minimum height */
  position: relative;
  cursor: pointer;
}

.input-file {
  opacity: 0; /* invisible but it's there! */
  width: 100%;
  height: $preview-image;
  position: absolute;
  cursor: pointer;
}

.dropbox:hover {
  background: lightblue; /* when mouse over to the drop zone, change color */
}

.dropbox p {
  font-size: 1.2em;
  text-align: center;
  padding: 50px 0;
}

.preview {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.preview img {
  max-width: 100%;
  height: $preview-image;
}

.preview__close {
  position: absolute;
  top: 0;
  right: 0;
  color: white;
  float: right;
  font-size: 30px;
  float: right;
  cursor: pointer;
  width: 20px;
  margin-bottom: 0;
  &:hover,
  &:focus {
    text-decoration: none;
    cursor: pointer;
  }
}
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
}
.input-group-prepend {
  display: flex !important;
}
</style>
