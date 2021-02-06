<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/dashboard/team">Team</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ operation }}
        </li>
      </ol>
    </nav>
    <h4 slot="header" class="card-name">{{ operation }}</h4>
    <form>
      <div class="row">
        <div class="col-12 col-md-6">
          <base-input
            type="text"
            label="Name"
            placeholder="Enter Name"
            v-model="team.name"
            :autofocus="true"
            :isRequired="true"
          >
          </base-input>
          <ErrorMessage :fieldErrors="errors.name" />
        </div>
        <div class="col-12 col-md-6 mt-auto mb-auto">
          <div class="custom-control custom-switch">
            <input
              type="checkbox"
              class="custom-control-input"
              id="enabled"
              v-model="team.is_enabled"
            />
            <label class="custom-control-label" for="enabled"
              >Publish Team Member</label
            >
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6">
          <base-input
            type="text"
            label="Title"
            placeholder="Enter Title"
            v-model="team.title"
            :isRequired="true"
          >
          </base-input>
          <ErrorMessage :fieldErrors="errors.title" />
        </div>
        <div class="col-12 col-md-4">
          <base-input
            type="number"
            label="Order"
            placeholder="Enter Team Order"
            v-model="team.order"
            :isRequired="true"
            min="1"
          >
          </base-input>
        </div>
      </div>
      <div class="row mt-3 mb-3">
        <div class="col">
          <div>
            <label for="img_profile" class="mr-5"
              >Choose Profile Image<span class="error-message"> *</span></label
            >
            <input
              type="file"
              id="img_profile"
              accept="image/png, image/jpeg, image/svg"
              @change="e => setFile(e, 'img_profile')"
              ref="img_profile"
            />
            <br />
            <ImagePreview
              v-if="
                editData !== undefined &&
                  operation === 'Edit Team Member' &&
                  editData.img_profile !== ''
              "
              :image="editData.img_profile"
              :setShowDeleteDialogFlag="setImageDataFlag"
              openedFor="img_profile"
            />
            <ErrorMessage :fieldErrors="errors.img_profile" />
          </div>
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
      <DeleteDialog
        :showFlag="showFlag"
        :setShowDeleteDialogFlag="setImageDataFlag"
        item="Image"
        :deleteAction="removeImage"
      />
    </form>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import ErrorMessage from "../../../website/shared/ErrorMessage";
import types from "../../../store/types";
import isValidationErrorExist from "../../../helpers/FormValidation";
import ImagePreview from "../../../website/shared/ImagePreview.vue";
import DeleteDialog from "../../../website/shared/DeleteDialog";

const emptyTeam = {
  name: "",
  title: "",
  is_enabled: false,
  order: 1,
  img_profile: ""
};

export default {
  data() {
    return {
      editData: this.$router.history.current.params.data,
      operation: this.$route.name,
      team: {
        ...emptyTeam
      },
      openedFor: "",
      imageIndex: null,
      showFlag: false,
      imageId: null,
      errors: {},
      validation: {
        name: { isRequired: true },
        title: { isRequired: true },
        enabled: { isRequired: true },
        order: { isRequired: true },
        "profile image": { isRequired: true }
      },
      aliases: {
        name: "name",
        title: "title",
        is_enabled: "enabled",
        order: "order",
        img_profile: "profile image"
      }
    };
  },
  methods: {
    ...mapActions({
      createTeamMember: types.team.actions.CREATE_TEAM_MEMBER,
      updateTeamMember: types.team.actions.UPDATE_TEAM_MEMBER,
      deleteImage: types.app.actions.DELETE_IMAGE
    }),
    setImageDataFlag(flag, imageId, openedFor, imageIndex) {
      this.showFlag = flag;
      this.imageId = imageId;
      this.openedFor = openedFor;
      this.imageIndex = imageIndex;
    },
    setFile(e, key) {
      const files = e.target.files;

      if (!files.length) return;

      this.team[key] = files[0];
    },
    saveData: async function() {
      const errorObject = isValidationErrorExist(
        this.team,
        this.aliases,
        this.validation
      );
      this.errors = { ...errorObject.errors };
      if (errorObject.length !== 0) return;
      try {
        let payload = {
          name: this.team.name,
          title: this.team.title,
          isEnabled: this.team.is_enabled,
          order: this.team.order
        };
        if (this.operation === "Edit Team Member") {
          const { img_profile } = this.team;

          if (!img_profile.url) payload = { ...payload, img_profile };

          await this.updateTeamMember({ ...payload, id: this.editData.id });
          this.notifyVue("Team Member Updated Successfully", "success");
        } else {
          payload = {
            ...payload,
            img_profile: this.team.img_profile
          };
          await this.createTeamMember(payload);
          this.notifyVue("Team Member Created Successfully", "success");
        }
        this.team = { ...emptyTeam };
        this.$router.push("/dashboard/team");
      } catch (errors) {
        JSON.parse(errors).forEach(error => {
          this.notifyVue(error.message, "danger");
        });
      }
    },
    removeImage: async function() {
      await this.deleteImage(this.imageId);

      switch (this.openedFor) {
        case "img_profile":
          this.editData.img_profile = "";
          this.team.img_profile = "";
          break;

        default:
          break;
      }

      this.notifyVue("Image Deleted Successfully", "success");
      this.setImageDataFlag(false, null, "", null);
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
      this.$route.name === "Edit Team Member"
    )
      this.$router.push({
        path: "/dashboard/team"
      });
  },
  mounted() {
    if (this.$route.name === "Edit Team Member") {
      this.team.name = this.editData.name;
      this.team.title = this.editData.title;
      this.team.is_enabled = this.editData.is_enabled;
      this.team.order = this.editData.order;
      this.team.img_profile = this.editData.img_profile || "";
    }
  },
  components: {
    ErrorMessage,
    ImagePreview,
    DeleteDialog
  }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
