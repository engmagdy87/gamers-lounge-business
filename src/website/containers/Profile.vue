<template>
  <div class="profile-wrapper">
    <Header activeItem="profile" :isSolidHeader="true" />
    <div class="profile-wrapper__outside" v-if="isProfileFetched">
      <div
        v-if="isEditMode && imgCoverUrl"
        class="preview-cover__close"
        role="button"
        @click="resetCoverPreview"
      >
        &times;
      </div>
      <div
        class="profile-wrapper__inside"
        v-if="imgCoverUrl"
        :style="`backgroundImage: url(${imgCoverUrl})`"
      ></div>
      <div
        v-if="!isEditMode && !imgCoverUrl"
        class="profile-wrapper__inside__img"
        alt="user profile placeholder"
      />
      <div class="dropbox-cover" v-if="!imgCoverUrl && isEditMode">
        <input
          type="file"
          multiple
          name="img_cover_main"
          @change="filesCoverChange($event.target.name, $event.target.files)"
          accept="image/png, image/jpeg"
          class="input-file"
          ref="img_cover_main"
        />
        <p v-if="!imgCoverUrl">
          Drop your profile cover picture here<br />
          or Browse
        </p>
      </div>
    </div>
    <div class="profile-wrapper__content" v-if="isProfileFetched">
      <div class="row">
        <div class="col-12 col-md-2 profile-wrapper__content__profile-image">
          <div class="form-group">
            <div class="preview">
              <div
                v-if="isEditMode && imgProfileUrl"
                class="preview__close"
                role="button"
                @click="resetPreview"
              >
                &times;
              </div>
              <img v-if="imgProfileUrl" :src="imgProfileUrl" />
              <img
                v-if="!isEditMode && !imgProfileUrl"
                src="website/img/placeholder.png"
                alt="user profile"
              />
            </div>
            <div class="dropbox" v-if="!imgProfileUrl && isEditMode">
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
        </div>
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
          <div>
            <h4>Password</h4>
            <h4>********</h4>
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
            <h4>Birth date</h4>
            <h4 v-if="!isEditMode">
              {{ profile.birthday_date.split(" ")[0] }}
            </h4>
            <div class="form-group" v-else>
              <base-input
                type="date"
                placeholder="Enter Birth Date"
                v-model="profile.birthday_date"
                :isInvalid="errors.birthday_date !== undefined"
                :isRequired="true"
                :isRegisterationForm="true"
              >
              </base-input>
              <p
                class="error-message"
                v-if="errors.birthday_date !== undefined"
              >
                {{ errors.birthday_date }}
              </p>
            </div>
          </div>
          <div>
            <h4>Phone number</h4>
            <h4 v-if="!isEditMode">
              {{ profile.phone.country_code }}
              {{ profile.phone.number }}
            </h4>
            <div class="form-group" v-else>
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <select
                    class="form-control"
                    v-model="profile.phone.country_code"
                    :class="
                      errors['phone.number'] !== undefined
                        ? 'pell-content--is-invalid'
                        : ''
                    "
                  >
                    <option
                      v-for="(countryCode, index) in countryCodesData"
                      :selected="
                        profile.phone.country_code === countryCode.dial_code
                      "
                      :key="index"
                      :value="countryCode.dial_code"
                      >{{ countryCode.code }}
                      {{ countryCode.dial_code }}</option
                    >
                  </select>
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="phone-number"
                  aria-describedby="phoneNumber"
                  placeholder="Enter Phone Number"
                  v-model="profile.phone.number"
                />
              </div>
              <p
                class="error-message"
                v-if="errors['phone.number'] !== undefined"
              >
                {{ errors["phone.number"] }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col float-right">
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
    <RequestPassword
      :showFlag="showRequestPasswordModal"
      :setShowRequestedPasswordModal="setShowRequestedPasswordModal"
    />
    <ReloginModal :showFlag="showReloginModalModal" />
    <Spinner :smallLoader="false" />
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState, mapMutations } from "vuex";
import { setUserCookie, getUserCookie } from "../helpers/CookieHelper";
import store from "../../store/index";
import types from "../../store/types";
import Header from "../shared/Header";
import ChangePassword from "../../website/components/profile/ChangePassword";
import ReloginModal from "../../website/components/profile/ReloginModal";
import RequestPassword from "../../website/components/profile/RequestPassword";
import Spinner from "../shared/Spinner";
import countryCodes from "../../assets/json/CountryCodes.json";
import isEmailValid from "../helpers/EmailValidation";

export default {
  data() {
    return {
      showChangePasswordModal: false,
      showRequestPasswordModal: false,
      showReloginModalModal: false,
      isEditMode: false,
      profile: {
        first_name: "",
        last_name: "",
        username: "",
        password: "",
        birthday_date: "",
        email: "",
        phone: {
          country_code: countryCodes[0].dial_code,
          number: ""
        },
        img_profile: "",
        img_cover_main: ""
      },
      imgProfileUrl: null,
      imgCoverUrl: null,
      errors: {},
      countryCodesData: countryCodes
    };
  },
  computed: {
    ...mapState({
      profileData: state => state.user.userProfile,
      isProfileFetched: state => state.user.isUserProfileFetched,
      isProfileUpdated: state => state.user.isProfileUpdated,
      userPersonaData: state => state.user.userPersona
    })
  },
  watch: {
    userPersonaData() {
      if (Object.keys(this.userPersonaData).length === 0)
        this.$router.push("/");
    }
  },
  methods: {
    ...mapActions({
      fetchUserProfile: types.user.actions.FETCH_USER_PROFILE,
      updateUserProfile: types.user.actions.UPDATE_USER_PROFILE,
      deleteUserImage: types.user.actions.DELETE_IMAGE_IN_PROFILE
    }),
    ...mapMutations({
      setIsProfileUpdated: types.user.mutations.SET_IS_USER_PROFILE_UPDATED
    }),
    setShowChangePasswordModal(value = false) {
      this.showChangePasswordModal = value;
    },
    setShowRequestedPasswordModal: async function(value = false, password) {
      this.showRequestPasswordModal = value;
      if (password) {
        this.setRequestedPassword(password);
        await this.updateProfile();
        this.setShowReloginModalModal(true);
      }
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
        const oldCookie = getUserCookie();
        oldCookie.user = newUserData;
        setUserCookie(oldCookie);
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
    },
    filesChange(name, files) {
      this.profile.img_profile = files[0];
      this.imgProfileUrl = URL.createObjectURL(files[0]);
    },
    filesCoverChange(name, files) {
      this.profile.img_cover_main = files[0];
      this.imgCoverUrl = URL.createObjectURL(files[0]);
    },
    resetPreview: async function() {
      const response = await this.deleteUserImage(
        this.profileData.images.img_profile.id
      );
      this.imgProfileUrl = null;
      this.profile.img_profile = "";
    },
    resetCoverPreview: async function() {
      const response = await this.deleteUserImage(
        this.profileData.images.img_cover_main.id
      );
      this.imgCoverUrl = null;
      this.profile.img_cover_main = "";
    },
    fetchProfile: async function() {
      await this.fetchUserProfile();
      if (this.isProfileFetched && !this.isEditMode) {
        this.profile.first_name = this.profileData.first_name;
        this.profile.last_name = this.profileData.last_name;
        this.profile.username = this.profileData.username;
        this.profile.email = this.profileData.email;
        this.imgProfileUrl =
          this.profileData.images.img_profile &&
          this.profileData.images.img_profile.path;
        this.imgCoverUrl =
          this.profileData.images.img_cover_main &&
          this.profileData.images.img_cover_main.path;
        this.profile.birthday_date = this.profileData.birthday_date.split(
          " "
        )[0];
        this.profile.phone = { ...this.profileData.phone };
      }
    }
  },
  components: {
    Header,
    Spinner,
    ChangePassword,
    RequestPassword,
    ReloginModal
  },
  mounted() {
    this.fetchProfile();
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
