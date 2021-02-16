<template>
  <div class="profile-wrapper">
    <Hero :heroImage="ProfileCoverImage">
      <template #hero-content>
        <div>Profile</div>
      </template>
    </Hero>
    <div class="profile-wrapper__content">
      <div class="row">
        <div class="col-12 col-md-5 profile-wrapper__content__profile-details">
          <div>
            <h4>First Name</h4>
            <h4 v-if="!isEditMode">{{ profile.first_name }}</h4>
            <div class="form-group" v-else>
              <input
                type="text"
                id="first_name"
                aria-describedby="first_nameHelp"
                placeholder="Enter First Name"
                v-model="profile.first_name"
                :class="[
                  'form-control',
                  errors.first_name === undefined ? 'registeration-style' : ''
                ]"
              />
              <ErrorMessage :fieldErrors="errors.first_name" />
            </div>
          </div>
          <div>
            <h4>Username</h4>
            <h4 v-if="!isEditMode">{{ profile.username }}</h4>
            <div class="form-group" v-else>
              <input
                type="text"
                id="username"
                aria-describedby="username"
                placeholder="Enter Username"
                v-model="profile.username"
                :class="[
                  'form-control',
                  errors.username === undefined ? 'registeration-style' : ''
                ]"
              />
              <ErrorMessage :fieldErrors="errors.username" />
            </div>
          </div>
          <div>
            <h4>E-mail</h4>
            <h4 v-if="!isEditMode">{{ profile.email }}</h4>
            <div class="form-group" v-else>
              <input
                type="text"
                id="email"
                aria-describedby="email"
                placeholder="Enter Email"
                v-model="profile.email"
                :class="[
                  'form-control',
                  errors.email === undefined ? 'registeration-style' : ''
                ]"
              />
              <ErrorMessage :fieldErrors="errors.email" />
            </div>
          </div>
        </div>
        <div class="col-12 col-md-5 profile-wrapper__content__profile-details">
          <div>
            <h4>Last Name</h4>
            <h4 v-if="!isEditMode">{{ profile.last_name }}</h4>
            <div class="form-group" v-else>
              <input
                type="text"
                id="last-name"
                aria-describedby="last name"
                placeholder="Enter Last Name"
                v-model="profile.last_name"
                :class="[
                  'form-control',
                  errors.last_name === undefined ? 'registeration-style' : ''
                ]"
              />
              <ErrorMessage :fieldErrors="errors.last_name" />
            </div>
          </div>
          <div>
            <h4>Password</h4>
            <h4>********</h4>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col float-none float-md-right">
          <div
            class="btn float-right profile-wrapper__content__custom-button-wrapper__outside"
            role="button"
            @click="setAction"
          >
            {{ isEditMode ? "Done" : "Edit" }}
          </div>
          <div
            class="btn float-right profile-wrapper__content__custom-button-wrapper__outside"
            role="button"
            @click="changePasswordModal"
          >
            Change Password
          </div>
        </div>
      </div>
    </div>
    <ChangePassword
      :showFlag="showChangePasswordModal"
      :setShowChangePasswordModal="setShowChangePasswordModal"
    />
    <RequestPassword
      :showFlag="showRequestPasswordModal"
      :setShowRequestedPasswordModal="setShowRequestedPasswordModal"
    />
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import {
  getUserDataCookie,
  removeTokenCookie,
  removeUserDataCookie
} from "../../helpers/CookieHelper";
import ErrorMessage from "../shared/ErrorMessage";
import types from "../../store/types";
import Hero from "../shared/Hero";
import ChangePassword from "../../website/components/profile/ChangePassword";
import RequestPassword from "../../website/components/profile/RequestPassword";
import isValidationErrorExist from "../../helpers/FormValidation";
import ProfileCoverImage from "../../../public/images/website_home_cover.png";

export default {
  data() {
    return {
      showChangePasswordModal: false,
      showRequestPasswordModal: false,
      isEditMode: false,
      profile: {
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        new_password: "",
        new_password_confirmation: ""
      },
      errors: {},
      validation: {
        Username: { isRequired: true, minLength: 4 },
        "First Name": { isRequired: true, minLength: 4 },
        "Last Name": { isRequired: true, minLength: 4 },
        Email: { isRequired: true, isEmail: true }
      },
      aliases: {
        username: "Username",
        first_name: "First Name",
        last_name: "Last Name",
        email: "Email"
      }
    };
  },
  computed: {
    ...mapState({
      userPersonaData: state => state.user.userPersona
    }),
    ProfileCoverImage() {
      return ProfileCoverImage;
    }
  },
  watch: {
    userPersonaData() {
      if (Object.keys(this.userPersonaData).length === 0)
        this.$router.push("/");
    }
  },
  methods: {
    ...mapActions({
      updateUserData: types.user.actions.UPDATE_USER_DATA,
      updateUserPassword: types.user.actions.UPDATE_USER_PASSWORD
    }),
    ...mapMutations({
      setUserPersona: types.user.mutations.SET_USER_PERSONA
    }),
    changePasswordModal() {
      this.setShowChangePasswordModal(true, {
        password: undefined,
        newPassword: undefined,
        newPasswordConfirmation: undefined
      });
    },
    setShowChangePasswordModal: async function(value = false, passwords) {
      const { password, newPassword, newPasswordConfirmation } = passwords;
      this.showChangePasswordModal = value;
      if (password && newPassword && newPasswordConfirmation) {
        try {
          await this.updateUserPassword({ ...passwords });
          this.notifyVue("Password Changed Successfully", "success");
          this.notifyVue("You will be redirected to login again", "warning");
          setTimeout(() => {
            removeTokenCookie();
            removeUserDataCookie();
            this.setUserPersona({});
            window.open("/login", "_self");
          }, 3000);
        } catch (errors) {
          JSON.parse(errors).forEach(error => {
            this.notifyVue(error.debugMessage, "danger");
          });
        }
      }
    },
    setShowRequestedPasswordModal: async function(value = false, password) {
      const { username: savedUsername } = getUserDataCookie();
      const { username, first_name, last_name, email } = this.profile;
      const payload = { username, first_name, last_name, email };
      this.showRequestPasswordModal = value;
      if (password) {
        try {
          await this.updateUserData({ ...payload, password });
          this.setIsEditMode(false);
          if (savedUsername !== username) {
            this.notifyVue("You will be redirected to login again", "warning");
            setTimeout(() => {
              removeTokenCookie();
              removeUserDataCookie();
              this.setUserPersona({});
              window.open("/login", "_self");
            }, 3000);
          }
        } catch (errors) {
          JSON.parse(errors).forEach(error => {
            this.notifyVue(error.debugMessage, "danger");
          });
        }
      }
    },
    setIsEditMode(value) {
      this.isEditMode = value;
    },
    setAction: async function() {
      if (this.isEditMode) this.validatePostRequest();
      else this.setIsEditMode(true);
    },
    validatePostRequest: function() {
      const { username, first_name, last_name, email } = this.profile;
      const {
        username: savedUsername,
        first_name: savedFirstName,
        last_name: savedLastName,
        email: savedEmail
      } = getUserDataCookie();
      const payload = { username, first_name, last_name, email };
      const errorObject = isValidationErrorExist(
        payload,
        this.aliases,
        this.validation
      );
      this.errors = { ...errorObject.errors };
      if (errorObject.length !== 0) return;
      if (
        username === savedUsername &&
        first_name === savedFirstName &&
        last_name === savedLastName &&
        email === savedEmail
      )
        this.setIsEditMode(false);
      else this.setShowRequestedPasswordModal(true);
    },
    // updateProfile: async function() {
    //   thie.errors = {};
    //   let formData = new FormData();
    //   formData.append("first_name", this.profile.first_name);
    //   formData.append("last_name", this.profile.last_name);
    //   formData.append("username", this.profile.username);
    //   formData.append("birthday_date", this.profile.birthday_date);
    //   formData.append("email", this.profile.email);
    //   if (this.profile.password !== "")
    //     formData.append("current_password", this.profile.password);

    //   if (this.profile.img_profile !== "")
    //     formData.append("img_profile", this.profile.img_profile);

    //   if (this.profile.img_cover_main !== "")
    //     formData.append("img_cover_main", this.profile.img_cover_main);

    //   formData.append("phone", JSON.stringify(this.profile.phone));
    //   try {
    //     const newUserData = await this.updateUserProfile(formData);
    //     this.setIsEditMode(false);
    //     store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
    //     // const oldCookie = getUserCookie();
    //     // oldCookie.user = newUserData;
    //     // setUserCookie(oldCookie);
    //   } catch (error) {
    //     if (
    //       error.data.errors !== undefined &&
    //       error.data.message === undefined
    //     ) {
    //       this.errors = { ...error.data.errors };
    //       Object.keys(error.data.errors).forEach(err => {
    //         const errorMessage = error.data.errors[err][0];
    //         this.notifyVue(errorMessage, "danger");
    //         this.errors = { ...this.errors, [err]: errorMessage };
    //       });
    //     } else {
    //       this.notifyVue("Password is incorrect, Please try again!", "danger");
    //     }
    //     store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
    //   }
    // },
    notifyVue(message, color) {
      this.$notifications.notify({
        message: `<span>${message}</span>`,
        horizontalAlign: "right",
        verticalAlign: "top",
        type: color
      });
    }
  },
  components: {
    Hero,
    ChangePassword,
    ErrorMessage,
    RequestPassword
  },
  mounted() {
    const { username, first_name, last_name, email } = getUserDataCookie();
    this.profile.username = username;
    this.profile.first_name = first_name;
    this.profile.last_name = last_name;
    this.profile.email = email;
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/color-palette.scss";
@import "../../assets/sass/website/containers/profile.scss";
.form-control {
  background-color: $primary !important;
  border: 1px solid $accent !important;
  color: white !important;
}

.input-group-text {
  background-color: transparent !important;
  border: none !important;
  padding: 0 !important;
  width: 150px !important;
  height: fit-content !important;
  margin: 0 !important;
}
.input-group-prepend {
  display: flex !important;
}
</style>
