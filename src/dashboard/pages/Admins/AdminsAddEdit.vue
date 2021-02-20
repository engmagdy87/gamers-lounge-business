<template>
  <div v-if="isRolesDataFetched">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/dashboard/admins">Admins</a>
        </li>
      </ol>
    </nav>
    <h4 slot="header" class="card-name">{{ operation }}</h4>
    <form>
      <div class="row mt-3 mb-3">
        <div class="col-12 col-md-6">
          <base-input
            type="text"
            label="Username"
            placeholder="Enter Admin Username"
            v-model="admin.username"
            :isRequired="true"
          >
          </base-input>
          <ErrorMessage :fieldErrors="errors.username" />
        </div>
        <div class="col-12 col-md-6">
          <div class="form-group">
            <label>Role<span class="error-message"> *</span></label>
            <multiselect
              v-model="admin.roles"
              :options="roles.map(role => role.toUpperCase())"
              :multiple="true"
              :close-on-select="false"
              :clear-on-select="false"
              placeholder="Choose Admin Roles"
            >
            </multiselect>
            <ErrorMessage :fieldErrors="errors.roles" />
          </div>
        </div>
      </div>
      <div class="row" v-if="operation === 'Create Admin'">
        <div class="form-group col-12 col-md-6">
          <label for="password"
            >Password<span class="error-message"> *</span></label
          >
          <input
            type="password"
            id="new-password"
            placeholder="Enter Password"
            v-model="admin.password"
            :class="[
              'form-control',
              errors.password === undefined ? 'registeration-style' : ''
            ]"
          />
          <ErrorMessage :fieldErrors="errors.password" />
        </div>
        <div class="form-group col-12 col-md-6">
          <label for="password"
            >Password Confirmation<span class="error-message"> *</span></label
          >
          <input
            type="password"
            id="new-password-again"
            placeholder="Enter Password agian"
            v-model="admin.passwordConfirmation"
            :class="[
              'form-control',
              errors.passwordConfirmation === undefined
                ? 'registeration-style'
                : ''
            ]"
          />
          <ErrorMessage :fieldErrors="errors.passwordConfirmation" />
        </div>
      </div>

      <div class="text-center">
        <button
          type="button"
          class="btn btn-info btn-fill float-right"
          @click="saveData"
        >
          Save
        </button>
      </div>
      <div class="clearfix"></div>
    </form>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import Multiselect from "vue-multiselect";
import ErrorMessage from "../../../website/shared/ErrorMessage";
import types from "../../../store/types";
import isValidationErrorExist from "../../../helpers/FormValidation";
import editorOptions from "../../../dashboard/wysiwyg-factory/options";

const emptyAdmin = {
  username: "",
  roles: [],
  password: "",
  passwordConfirmation: ""
};

export default {
  data() {
    return {
      editData: this.$router.history.current.params.data,
      operation: this.$route.name,
      admin: {
        ...emptyAdmin
      },
      errors: {},
      validation: {
        username: { isRequired: true, minLength: 3 },
        roles: { isRequired: true },
        Password: { isRequired: true, minLength: 6 },
        "Password Confirmation": { isRequired: true, minLength: 6 }
      },
      aliases: {
        username: "username",
        roles: "roles",
        password: "Password",
        passwordConfirmation: "Password Confirmation"
      },
      editorOptions
    };
  },
  computed: {
    ...mapState({
      roles: state => state.admins.roles,
      isRolesDataFetched: state => state.admins.isRolesDataFetched
    })
  },
  methods: {
    ...mapActions({
      createAdminData: types.admins.actions.CREATE_ADMIN,
      updateAdminData: types.admins.actions.UPDATE_ADMIN,
      fetchRolesData: types.admins.actions.FETCH_ROLES
    }),
    saveData: async function() {
      const errorObject = isValidationErrorExist(
        this.admin,
        this.aliases,
        this.validation
      );
      this.errors = { ...errorObject.errors };
      if (errorObject.length !== 0) return;

      if (this.admin.password !== this.admin.passwordConfirmation) {
        this.errors.passwordConfirmation = [
          "password and confirm password does not match"
        ];
        return;
      }

      try {
        let payload = {
          username: this.admin.username,
          password: this.admin.password,
          passwordConfirmation: this.admin.passwordConfirmation,
          roles: this.admin.roles
        };

        if (this.operation === "Edit Admin") {
          await this.updateAdminData({
            ...payload,
            userId: this.editData.id
          });
          this.notifyVue("Admin Updated Successfully", "success");
        } else {
          await this.createAdminData({
            ...payload
          });
          this.notifyVue("Admin Created Successfully", "success");
        }
        this.$router.push("/dashboard/admins");
        this.admin = { ...emptyAdmin };
      } catch (errors) {
        JSON.parse(errors).forEach(error => {
          this.notifyVue(error.message, "danger");
        });
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
  beforeMount() {
    if (
      !this.$router.history.current.params.data &&
      this.$route.name === "Edit Admin"
    )
      this.$router.push({
        path: "/dashboard/admins"
      });
  },
  mounted() {
    this.fetchRolesData();
    if (this.$route.name === "Edit Admin") {
      this.admin.username = this.editData.username;
      this.admin.roles = this.editData.roles.map(role => role.toUpperCase());
      this.validation["Password"] = false;
      this.validation["Password Confirmation"] = false;
    }
  },
  components: {
    ErrorMessage,
    Multiselect
  }
};
</script>

<style lang="scss">
.section-templates-img {
  cursor: pointer;
  width: 150px;
  opacity: 0.4;
  &--active {
    opacity: 1;
  }
  &--error {
    margin: auto;
    width: fit-content;
  }
}
.column {
  height: 150px;
  text-align: center;
  border: 1px gray solid;
  &--not-full {
    background: lightgray;
    color: black;
  }
  &--full {
    background: #04ca04;
    color: white;
  }
  p {
    font-size: 30px;
    margin-top: 15px;
  }
}
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
