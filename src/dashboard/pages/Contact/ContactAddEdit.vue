<template>
  <div v-if="isContactFetched">
    <div class="row">
      <div class="col-6 m-auto">
        <h2
          class="heading-margin heading-margin-sections"
          style="margin:0 0 40px 0 !important;"
        >
          Contact Us
        </h2>
      </div>
      <div class="col-6">
        <button
          type="button"
          class="btn btn-secondary d-block ml-auto heading-margin-title"
          style="margin-bottom:10px !important"
          @click="toggleEditMode"
        >
          {{ editMode ? "Exit Edit Mode" : "Edit Contact Data" }}
        </button>
      </div>
    </div>
    <form>
      <div class="row">
        <div class="col-12 col-md-4">
          <base-input
            type="text"
            label="Address"
            placeholder="Enter Address"
            v-model="contact.address"
            :autofocus="true"
            :isRequired="true"
            :disabled="!editMode"
          />
          <ErrorMessage :fieldErrors="errors.address" />
        </div>
        <div class="col-12 col-md-4">
          <base-input
            type="email"
            label="Email"
            placeholder="Enter Email"
            v-model="contact.email"
            :isRequired="true"
            :disabled="!editMode"
          />
          <ErrorMessage :fieldErrors="errors.email" />
        </div>
        <div class="col-12 col-md-4">
          <base-input
            type="text"
            label="Phone Number"
            placeholder="Enter Phone"
            v-model="contact.phone"
            :isRequired="true"
            :disabled="!editMode"
          />
          <ErrorMessage :fieldErrors="errors.phone" />
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6">
          <base-input
            type="text"
            label="Facebook Link"
            placeholder="Enter Facebook Link"
            v-model="contact.facebookLink"
            :disabled="!editMode"
          />
        </div>
        <div class="col-12 col-md-6">
          <base-input
            type="text"
            label="Instagram Link"
            placeholder="Enter Instagram Link"
            v-model="contact.instagramLink"
            :disabled="!editMode"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6">
          <base-input
            type="text"
            label="Twitter Link"
            placeholder="Enter Twitter Link"
            v-model="contact.twitterLink"
            :disabled="!editMode"
          />
        </div>
        <div class="col-12 col-md-6">
          <base-input
            type="text"
            label="Youtube Link"
            placeholder="Enter Youtube Link"
            v-model="contact.youtubeLink"
            :disabled="!editMode"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <base-input
            type="url"
            label="Google Maps Link"
            placeholder="Enter Google Maps Link"
            v-model="contact.googleMapsLink"
            :disabled="!editMode"
          />
        </div>
      </div>
      <div class="row mt-3 mb-3">
        <div class="col">
          <div>
            <label for="logo" class="mr-5"
              >Choose Cover Image<span class="error-message"> *</span></label
            >
            <input
              type="file"
              id="logo"
              accept="image/png, image/jpeg"
              @change="e => setFile(e, 'img_cover')"
              ref="img_cover"
              :disabled="!editMode"
            />
            <br />
            <ImagePreview
              v-if="
                contact.img_cover !== '' &&
                  contact.img_cover !== null &&
                  contact.img_cover.url !== undefined
              "
              :image="contact.img_cover"
              :setShowDeleteDialogFlag="setImageDataFlag"
              openedFor="img_cover"
              :disabled="!editMode"
            />
            <ErrorMessage :fieldErrors="errors.img_cover" />
          </div>
        </div>
      </div>
      <div class="row mt-3 mb-3">
        <div class="col">
          <div>
            <label for="logo" class="mr-5">Choose Facebook Image</label>
            <input
              type="file"
              id="logo"
              accept="image/png, image/jpeg"
              @change="e => setFile(e, 'img_facebook')"
              ref="img_facebook"
              :disabled="!editMode"
            />
            <br />
            <ImagePreview
              v-if="
                contact.img_facebook !== '' &&
                  contact.img_facebook !== null &&
                  contact.img_facebook.url !== undefined
              "
              :image="contact.img_facebook"
              :setShowDeleteDialogFlag="setImageDataFlag"
              openedFor="img_facebook"
              :disabled="!editMode"
            />
            <!-- <ErrorMessage :fieldErrors="errors.img_facebook" /> -->
          </div>
        </div>
      </div>
      <div class="row mt-3 mb-3">
        <div class="col">
          <div>
            <label for="logo" class="mr-5">Choose Twitter Image</label>
            <input
              type="file"
              id="logo"
              accept="image/png, image/jpeg"
              @change="e => setFile(e, 'img_twitter')"
              ref="img_twitter"
              :disabled="!editMode"
            />
            <br />
            <ImagePreview
              v-if="
                contact.img_twitter !== '' &&
                  contact.img_twitter !== null &&
                  contact.img_twitter.url !== undefined
              "
              :image="contact.img_twitter"
              :setShowDeleteDialogFlag="setImageDataFlag"
              openedFor="img_twitter"
              :disabled="!editMode"
            />
            <!-- <ErrorMessage :fieldErrors="errors.img_twitter" /> -->
          </div>
        </div>
      </div>
      <div class="row mt-3 mb-3">
        <div class="col">
          <div>
            <label for="logo" class="mr-5">Choose Instagram Image</label>
            <input
              type="file"
              id="logo"
              accept="image/png, image/jpeg"
              @change="e => setFile(e, 'img_instagram')"
              ref="img_instagram"
              :disabled="!editMode"
            />
            <br />
            <ImagePreview
              v-if="
                contact.img_instagram !== '' &&
                  contact.img_instagram !== null &&
                  contact.img_instagram.url !== undefined
              "
              :image="contact.img_instagram"
              :setShowDeleteDialogFlag="setImageDataFlag"
              openedFor="img_instagram"
              :disabled="!editMode"
            />
            <!-- <ErrorMessage :fieldErrors="errors.img_instagram" /> -->
          </div>
        </div>
      </div>
      <div class="row mt-3 mb-3">
        <div class="col">
          <div>
            <label for="logo" class="mr-5">Choose Youtube Image</label>
            <input
              type="file"
              id="logo"
              accept="image/png, image/jpeg"
              @change="e => setFile(e, 'img_youtube')"
              ref="img_youtube"
              :disabled="!editMode"
            />
            <br />
            <ImagePreview
              v-if="
                contact.img_youtube !== '' &&
                  contact.img_youtube !== null &&
                  contact.img_youtube.url !== undefined
              "
              :image="contact.img_youtube"
              :setShowDeleteDialogFlag="setImageDataFlag"
              openedFor="img_youtube"
              :disabled="!editMode"
            />
            <!-- <ErrorMessage :fieldErrors="errors.img_youtube" /> -->
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12" style="height:60px">
          <div class="text-center">
            <button
              type="button"
              class="btn btn-info btn-fill float-right mt-2"
              @click="saveData"
              v-show="editMode"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
    <DeleteDialog
      :showFlag="showFlag"
      item="Image"
      :deleteAction="removeImage"
      :setShowDeleteDialogFlag="setImageDataFlag"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ErrorMessage from "../../../website/shared/ErrorMessage";
import DeleteDialog from "../../../website/shared/DeleteDialog";
import ImagePreview from "../../../website/shared/ImagePreview.vue";
import isValidationErrorExist from "../../../helpers/FormValidation";
import types from "../../../store/types";

const emptyContact = {
  address: "",
  email: "",
  phone: "",
  facebookLink: "",
  instagramLink: "",
  twitterLink: "",
  youtubeLink: "",
  googleMapsLink: "",
  img_cover: "",
  img_facebook: "",
  img_twitter: "",
  img_instagram: "",
  img_youtube: ""
};

export default {
  data() {
    return {
      contact: {
        ...emptyContact
      },
      openedFor: "",
      showFlag: false,
      editMode: false,
      imageId: null,
      errors: {},
      validation: {
        address: { isRequired: true },
        email: { isRequired: true, isEmail: true },
        phone: { isRequired: true },
        facebookLink: { isRequired: false },
        instagramLink: { isRequired: false },
        twitterLink: { isRequired: false },
        youtubeLink: { isRequired: false },
        googleMapsLink: { isRequired: false },
        img_facebook: { isRequired: false },
        img_twitter: { isRequired: false },
        img_instagram: { isRequired: false },
        img_youtube: { isRequired: false },
        "cover image": { isRequired: true }
      },
      aliases: {
        address: "address",
        email: "email",
        phone: "phone",
        facebookLink: "facebookLink",
        instagramLink: "instagramLink",
        twitterLink: "twitterLink",
        youtubeLink: "youtubeLink",
        googleMapsLink: "googleMapsLink",
        img_facebook: "img_facebook",
        img_twitter: "img_twitter",
        img_instagram: "img_instagram",
        img_youtube: "img_youtube",
        img_cover: "cover image"
      }
    };
  },
  computed: {
    ...mapState({
      contactData: state => state.contact.contact,
      isContactFetched: state => state.contact.isContactFetched
    })
  },
  watch: {
    contactData() {
      const { information } = this.contactData;
      if (information) {
        const {
          address,
          email,
          phone,
          facebook_link,
          instagram_link,
          twitter_link,
          youtube_link
        } = information;

        this.contact.address = address || "";
        this.contact.email = email || "";
        this.contact.phone = phone || "";
        this.contact.facebookLink = facebook_link || "";
        this.contact.instagramLink = instagram_link || "";
        this.contact.twitterLink = twitter_link || "";
        this.contact.youtubeLink = youtube_link || "";
      }
      this.contact.googleMapsLink = this.contactData.map || "";
      this.contact.img_cover = this.contactData.img_cover || "";
      this.contact.img_facebook = this.contactData.img_facebook || "";
      this.contact.img_twitter = this.contactData.img_twitter || "";
      this.contact.img_instagram = this.contactData.img_instagram || "";
      this.contact.img_youtube = this.contactData.img_youtube || "";
    }
  },
  methods: {
    ...mapActions({
      fetchContact: types.contact.actions.FETCH_CONTACT,
      createContact: types.contact.actions.CREATE_CONTACT,
      updateContact: types.contact.actions.UPDATE_CONTACT,
      deleteImage: types.app.actions.DELETE_IMAGE
    }),
    toggleEditMode() {
      this.editMode = !this.editMode;
    },
    setImageDataFlag(flag, imageId, openedFor) {
      this.showFlag = flag;
      this.imageId = imageId;
      this.openedFor = openedFor;
    },
    saveData: async function() {
      let response;
      const errorObject = isValidationErrorExist(
        this.contact,
        this.aliases,
        this.validation
      );
      this.errors = { ...errorObject.errors };
      if (errorObject.length !== 0) return;
      try {
        let payload = {
          address: this.contact.address,
          email: this.contact.email,
          phone: this.contact.phone,
          facebookLink: this.contact.facebookLink,
          instagramLink: this.contact.instagramLink,
          twitterLink: this.contact.twitterLink,
          youtubeLink: this.contact.youtubeLink,
          map: this.contact.googleMapsLink
        };

        if (Object.keys(this.contactData).length !== 0) {
          let imagesData = {};
          const {
            img_cover,
            img_facebook,
            img_twitter,
            img_instagram,
            img_youtube
          } = this.contact;

          if (!img_cover.url && img_cover !== "")
            imagesData = { ...imagesData, img_cover };

          if (!img_facebook.url && img_facebook !== "")
            imagesData = {
              ...imagesData,
              img_facebook
            };

          if (!img_twitter.url && img_twitter !== "")
            imagesData = {
              ...imagesData,
              img_twitter
            };

          if (!img_instagram.url && img_instagram !== "")
            imagesData = {
              ...imagesData,
              img_instagram
            };

          if (!img_youtube.url && img_youtube !== "")
            imagesData = {
              ...imagesData,
              img_youtube
            };

          if (Object.keys(imagesData).length > 0)
            payload = { ...payload, imagesData };

          response = await this.updateContact({
            ...payload,
            id: this.contactData.id
          });
          this.notifyVue("Contact Updated Successfully", "success");
        } else {
          let imagesData = {};
          const {
            img_cover,
            img_facebook,
            img_twitter,
            img_instagram,
            img_youtube
          } = this.contact;

          if (img_cover !== "") imagesData = { ...imagesData, img_cover };

          if (img_facebook !== "") imagesData = { ...imagesData, img_facebook };

          if (img_twitter !== "") imagesData = { ...imagesData, img_twitter };

          if (img_instagram !== "")
            imagesData = { ...imagesData, img_instagram };

          if (img_youtube !== "") imagesData = { ...imagesData, img_youtube };

          if (Object.keys(imagesData).length > 0)
            payload = {
              ...payload,
              imagesData
            };

          response = await this.createContact(payload);
          this.notifyVue("Contact Created Successfully", "success");
        }
        this.editMode = false;
        this.errors = {};
        const {
          id,
          information,
          map: googleMapsLink,
          ...restOfData
        } = response;
        this.$refs.img_cover.value = null;
        this.$refs.img_facebook.value = null;
        this.$refs.img_twitter.value = null;
        this.$refs.img_instagram.value = null;
        this.$refs.img_youtube.value = null;
        this.contact = {
          ...this.contact,
          ...information,
          ...restOfData,
          googleMapsLink
        };
      } catch (errors) {
        JSON.parse(errors).forEach(error => {
          this.notifyVue(error.message, "danger");
        });
      }
    },
    removeImage: async function() {
      await this.deleteImage(this.imageId);

      switch (this.openedFor) {
        case "img_cover":
          this.contactData.img_cover = "";
          this.contact.img_cover = "";
          this.$refs.img_cover.value = null;
          break;

        case "img_facebook":
          this.contactData.img_facebook = "";
          this.contact.img_facebook = "";
          this.$refs.img_facebook.value = null;
          break;

        case "img_twitter":
          this.contactData.img_twitter = "";
          this.contact.img_twitter = "";
          this.$refs.img_twitter.value = null;
          break;

        case "img_instagram":
          this.contactData.img_instagram = "";
          this.contact.img_instagram = "";
          this.$refs.img_instagram.value = null;
          break;

        case "img_youtube":
          this.contactData.img_youtube = "";
          this.contact.img_youtube = "";
          this.$refs.img_youtube.value = null;
          break;

        default:
          break;
      }

      this.notifyVue("Image Deleted Successfully", "success");
      this.setImageDataFlag(false, null, "", null);
    },
    setFile(e, key) {
      const files = e.target.files;

      if (!files.length) return;

      this.contact[key] = files[0];
    },
    isContactDataExists() {
      return Object.keys(this.contactData).length === 0;
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
  mounted() {
    const data = {
      first: 100,
      page: 1
    };
    const requestSource = {
      data,
      requestSource: "dashboard",
      showSpinner: true
    };
    this.fetchContact(requestSource);
  },
  updated() {
    if (this.isContactDataExists()) this.editMode = true;
  },
  components: {
    ErrorMessage,
    DeleteDialog,
    ImagePreview
  }
};
</script>
