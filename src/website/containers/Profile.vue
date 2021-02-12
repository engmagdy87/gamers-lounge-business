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
                  errors.first_name !== undefined ? 'is-invalid' : '',
                  errors.first_name === undefined ? 'registeration-style' : ''
                ]"
              />
              <p class="error-message" v-if="errors.first_name !== undefined">
                {{ errors.first_name }}
              </p>
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
                  errors.username !== undefined ? 'is-invalid' : '',
                  errors.username === undefined ? 'registeration-style' : ''
                ]"
              />
              <p class="error-message" v-if="errors.username !== undefined">
                {{ errors.username }}
              </p>
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
                  errors.email !== undefined ? 'is-invalid' : '',
                  errors.email === undefined ? 'registeration-style' : ''
                ]"
              />
              <p class="error-message" v-if="errors.email !== undefined">
                {{ errors.email }}
              </p>
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
                  errors.last_name !== undefined ? 'is-invalid' : '',
                  errors.last_name === undefined ? 'registeration-style' : ''
                ]"
              />
              <p class="error-message" v-if="errors.last_name !== undefined">
                {{ errors.last_name }}
              </p>
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
            @click="setShowChangePasswordModal(true)"
          >
            Change Password
          </div>
        </div>
      </div>
    </div>
    <ChangePassword
      :showFlag="showChangePasswordModal"
      :setShowChangePasswordModal="setShowChangePasswordModal"
      :setShowReloginModalModal="setShowReloginModalModal"
    />
    <ReloginModal :showFlag="showReloginModalModal" />
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState, mapMutations } from "vuex";
import { getUserDataCookie } from "../../helpers/CookieHelper";
import store from "../../store/index";
import types from "../../store/types";
import Header from "../shared/Header";
import Hero from "../shared/Hero";
import ChangePassword from "../../website/components/profile/ChangePassword";
import ReloginModal from "../../website/components/profile/ReloginModal";
import isEmailValid from "../../helpers/EmailValidation";
import ProfileCoverImage from "../../../public/images/website_home_cover.png";

export default {
  data() {
    return {
      showChangePasswordModal: false,
      showReloginModalModal: false,
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
      errors: {}
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
      // fetchUserProfile: types.user.actions.FETCH_USER_PROFILE,
      // updateUserProfile: types.user.actions.UPDATE_USER_PROFILE,
      // deleteUserImage: types.user.actions.DELETE_IMAGE_IN_PROFILE,
      // fetchRandomPopup: types.popups.actions.FETCH_RANDOM_POPUPS
    }),
    ...mapMutations({
      setIsProfileUpdated: types.user.mutations.SET_IS_USER_PROFILE_UPDATED
    }),
    setShowChangePasswordModal(value = false) {
      this.showChangePasswordModal = value;
    },
    setIsEditMode(value) {
      this.isEditMode = value;
    },
    setShowReloginModalModal(value = false) {
      this.showReloginModalModal = value;
    },
    setRequestedPassword(value) {
      this.profile.password = value;
    },
    setAction: async function() {
      if (this.isEditMode) this.validatePostRequest();
      else this.setIsEditMode(true);
    },
    validatePostRequest: async function() {
      if (!isEmailValid(this.profile.email)) {
        this.notifyVue("Email has invalid format", "danger");
        this.errors = { ...this.errors, email: "Email has invalid format" };
      } else if (
        this.profile.username !== this.profileData.username ||
        this.profile.email !== this.profileData.email ||
        this.profile.phone.country_code !==
          this.profileData.phone.country_code ||
        this.profile.phone.number !== this.profileData.phone.number
      ) {
        this.setShowRequestedPasswordModal(true);
      } else {
        await this.updateProfile();
      }
    },
    updateProfile: async function() {
      store.commit(types.home.mutations.SET_SPINNER_FLAG, true);
      thie.errors = {};
      let formData = new FormData();
      formData.append("first_name", this.profile.first_name);
      formData.append("last_name", this.profile.last_name);
      formData.append("username", this.profile.username);
      formData.append("birthday_date", this.profile.birthday_date);
      formData.append("email", this.profile.email);
      if (this.profile.password !== "")
        formData.append("current_password", this.profile.password);

      if (this.profile.img_profile !== "")
        formData.append("img_profile", this.profile.img_profile);

      if (this.profile.img_cover_main !== "")
        formData.append("img_cover_main", this.profile.img_cover_main);

      formData.append("phone", JSON.stringify(this.profile.phone));
      try {
        const newUserData = await this.updateUserProfile(formData);
        this.setIsEditMode(false);
        store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
        // const oldCookie = getUserCookie();
        // oldCookie.user = newUserData;
        // setUserCookie(oldCookie);
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
          this.notifyVue("Password is incorrect, Please try again!", "danger");
        }
        store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
      }
    },
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
    ReloginModal
  },
  mounted() {
    console.log("====================================");
    console.log(getUserDataCookie());
    console.log("====================================");
    const { username, first_name, last_name, email } = getUserDataCookie();
    this.profile.username = username;
    this.profile.first_name = first_name;
    this.profile.last_name = last_name;
    this.profile.email = email;
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/containers/profile.scss";
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
  height: fit-content !important;
  margin: 0 !important;
}
.input-group-prepend {
  display: flex !important;
}
</style>
