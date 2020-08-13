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
        <h2>Create Account</h2>
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
                @change="
                  profileAvatarChange($event.target.name, $event.target.files)
                "
                accept="image/png, image/jpeg"
                class="input-file"
                ref="img_profile"
              />
              <p v-if="!imgProfileUrl">
                Drop your profile picture here<br />
                or Browse
              </p>
            </div>
          </div>
          <div class="form-group">
            <div class="preview" v-if="imgCoverUrl">
              <div
                class="preview__close"
                role="button"
                @click="resetCoverPreview"
              >
                &times;
              </div>
              <img v-if="imgCoverUrl" :src="imgCoverUrl" />
            </div>
            <div class="dropbox" v-if="!imgCoverUrl">
              <input
                type="file"
                multiple
                name="img_profile"
                @change="
                  profileCoverChange($event.target.name, $event.target.files)
                "
                accept="image/png, image/jpeg"
                class="input-file"
                ref="img_profile"
              />
              <p v-if="!imgCoverUrl">
                Drop your profile cover picture here<br />
                or Browse
              </p>
            </div>
          </div>
          <div class="form-group">
            <input
              type="text"
              id="first_name"
              aria-describedby="first_nameHelp"
              placeholder="Enter First Name"
              v-model="first_name"
              :class="[
                'form-control',
                errors.first_name !== undefined ? 'is-invalid' : '',
                errors.first_name === undefined ? 'registeration-style' : ''
              ]"
            />
            <p class="error-message" v-if="errors.first_name !== undefined">
              {{ errors.first_name }}
            </p>
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="last_name"
              aria-describedby="last_nameHelp"
              placeholder="Enter Last Name"
              v-model="last_name"
              :class="[
                'form-control',
                errors.last_name !== undefined ? 'is-invalid' : '',
                errors.last_name === undefined ? 'registeration-style' : ''
              ]"
            />
            <p class="error-message" v-if="errors.last_name !== undefined">
              {{ errors.last_name }}
            </p>
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="reigter-username"
              aria-describedby="usernameHelp"
              placeholder="Enter Username"
              v-model="username"
              :class="[
                'form-control',
                errors.username !== undefined ? 'is-invalid' : '',
                errors.username === undefined ? 'registeration-style' : ''
              ]"
            />
            <p class="error-message" v-if="errors.username !== undefined">
              {{ errors.username }}
            </p>
          </div>
          <div class="form-group">
            <base-input
              type="date"
              placeholder="Enter Date of birth"
              v-model="birthday_date"
              :isRegisterationForm="true"
            >
            </base-input>
          </div>
          <div class="form-group">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <select
                  class="form-control"
                  v-model="phone.country_code"
                  :class="
                    errors['phone.number'] !== undefined
                      ? 'pell-content--is-invalid'
                      : ''
                  "
                >
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
            <p
              class="error-message"
              v-if="errors['phone.number'] !== undefined"
            >
              {{ errors["phone.number"] }}
            </p>
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter Email"
              v-model="email"
              :class="[
                'form-control',
                errors.email !== undefined ? 'is-invalid' : '',
                errors.email === undefined ? 'registeration-style' : ''
              ]"
            />
            <p class="error-message" v-if="errors.email !== undefined">
              {{ errors.email }}
            </p>
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="reigter-password"
              placeholder="Enter Password"
              v-model="password"
              :class="[
                'form-control',
                errors.password !== undefined ? 'is-invalid' : '',
                errors.password === undefined ? 'registeration-style' : ''
              ]"
            />
            <p class="error-message" v-if="errors.password !== undefined">
              {{ errors.password }}
            </p>
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="reigter-confirm-password"
              placeholder="Enter Password again"
              v-model="password_confirmation"
            />
          </div>
          <button
            type="button"
            class="btn btn-primary float-right"
            @click="registerUserPersona"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import store from "../../../store/index";
import types from "../../../store/types";
import countryCodes from "../../../assets/json/CountryCodes.json";
import isEmailValid from "../../helpers/EmailValidation";

export default {
  data() {
    return {
      first_name: "",
      last_name: "",
      username: "",
      birthday_date: "",
      email: "",
      password: "",
      password_confirmation: "",
      img_profile: "",
      img_cover_main: "",
      phone: {
        country_code: countryCodes[0].dial_code,
        number: ""
      },
      imgProfileUrl: null,
      imgCoverUrl: null,
      countryCodesData: countryCodes,
      errors: {}
    };
  },
  props: ["showFlag", "setShowRegisterModal"],
  methods: {
    ...mapActions({
      postUserPersona: types.user.actions.REGISTER_USER_PERSONA
    }),
    async registerUserPersona() {
      if (!isEmailValid(this.email)) {
        this.notifyVue("Email has invalid format", "danger");
        this.errors = { ...this.errors, email: "Email has invalid format" };
      } else {
        let formData = new FormData();
        formData.append("first_name", this.first_name);
        formData.append("last_name", this.last_name);
        formData.append("username", this.username);
        formData.append("birthday_date", this.birthday_date);
        formData.append("email", this.email);
        formData.append("password", this.password);
        formData.append("password_confirmation", this.password_confirmation);
        formData.append("img_profile", this.img_profile);
        formData.append("img_cover_main", this.img_cover_main);
        formData.append("phone", JSON.stringify(this.phone));
        try {
          await this.postUserPersona(formData);
          this.setShowRegisterModal(false);
          this.notifyVue(
            "Successful Register, Please Check Email to Verify Account",
            "success"
          );
          this.first_name = "";
          this.last_name = "";
          this.username = "";
          this.birthday_date = "";
          this.email = "";
          this.password = "";
          this.password_confirmation = "";
          this.img_profile = "";
          this.imgProfileUrl = null;
          this.img_cover_main = "";
          this.imgCoverUrl = null;
          this.phone = {
            country_code: countryCodes[0].dial_code,
            number: ""
          };
        } catch (error) {
          this.errors = { ...error.data.errors };
          Object.keys(error.data.errors).forEach(err => {
            const errorMessage = error.data.errors[err][0];
            this.notifyVue(errorMessage, "danger");
            this.errors = { ...this.errors, [err]: errorMessage };
          });
          store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
        }
      }
    },
    closeModal() {
      this.setShowRegisterModal(false);
      this.errors = {};
      this.first_name = "";
      this.last_name = "";
      this.username = "";
      this.birthday_date = "";
      this.email = "";
      this.password = "";
      this.password_confirmation = "";
      this.img_profile = "";
      this.img_cover_main = "";
      this.phone = {
        country_code: countryCodes[0].dial_code,
        number: ""
      };
    },
    profileAvatarChange(name, files) {
      this.img_profile = files[0];
      this.imgProfileUrl = URL.createObjectURL(files[0]);
    },
    profileCoverChange(name, files) {
      this.img_cover_main = files[0];
      this.imgCoverUrl = URL.createObjectURL(files[0]);
    },
    resetPreview() {
      this.imgProfileUrl = null;
    },
    resetCoverPreview() {
      this.imgCoverUrl = null;
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
</style>
