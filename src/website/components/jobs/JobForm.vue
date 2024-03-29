<template>
  <div class="job-form-wrapper">
    <HalfClippedShape>
      <template #content>
        <form>
          <div class="form-group">
            <label class="form-group__short-label">Name</label>
            <div class="job-form-wrapper__input-outline-mask">
              <input
                type="text"
                class="form-control"
                v-model="applicantInfo.fullName"
              />
            </div>
            <ErrorMessage :fieldErrors="errors.fullName" />
          </div>
          <div class="form-group">
            <label class="form-group__long-label">Phone Number</label>
            <div class="job-form-wrapper__input-outline-mask">
              <input
                type="number"
                class="form-control"
                v-model="applicantInfo.phone"
                min="1"
              />
            </div>
            <ErrorMessage :fieldErrors="errors.phone" />
          </div>
          <div class="form-group">
            <label class="form-group__short-label">Email</label>
            <div class="job-form-wrapper__input-outline-mask">
              <input
                type="text"
                class="form-control"
                v-model="applicantInfo.email"
              />
            </div>
            <ErrorMessage :fieldErrors="errors.email" />
          </div>
          <div class="form-group">
            <label class="form-group__mid-label">Country</label>
            <div
              class="job-form-wrapper__input-outline-mask job-form-wrapper__custom-select"
            >
              <select
                class="form-control"
                v-model="applicantInfo.country"
                @change="getSelectedIndex"
              >
                <option
                  v-for="(country, index) in countryCodesData"
                  :selected="applicantInfo.country === country.name"
                  :key="index"
                  :value="country.name"
                  >{{ country.name }}</option
                >
              </select>
            </div>
            <ErrorMessage :fieldErrors="errors.country" />
          </div>
          <div class="form-group">
            <label class="form-group__mid-label">City</label>
            <div
              class="job-form-wrapper__input-outline-mask job-form-wrapper__custom-select"
            >
              <select class="form-control" v-model="applicantInfo.city">
                <option
                  v-for="(city, index) in targetCities"
                  :selected="applicantInfo.city === city.name"
                  :key="index"
                  :value="city.name"
                  >{{ city.name }}</option
                >
              </select>
            </div>
            <ErrorMessage :fieldErrors="errors.city" />
          </div>
          <div class="form-group">
            <label class="form-group__long-label">Behance Link</label>
            <div class="job-form-wrapper__input-outline-mask">
              <input
                type="text"
                class="form-control"
                v-model="applicantInfo.behance_link"
              />
            </div>
            <ErrorMessage :fieldErrors="errors.behance_link" />
          </div>
          <div class="form-group">
            <label class="form-group__long-label">Linkedin Link</label>
            <div class="job-form-wrapper__input-outline-mask">
              <input
                type="text"
                class="form-control"
                v-model="applicantInfo.linkedin_link"
              />
            </div>
            <ErrorMessage :fieldErrors="errors.linkedin_link" />
          </div>
          <div class="form-group job-form-wrapper__footer">
            <div class="job-form-wrapper__footer-left">
              <input
                type="file"
                id="resume"
                accept=".pdf,.docx,.dot,.odt"
                ref="resumeFile"
                @change="e => setFile(e, 'resumeFile')"
              />

              <label class="job-form-wrapper__upload-btn" for="resume"
                >Upload Resume</label
              >

              <span v-if="applicantInfo.resumeFile.name">{{
                applicantInfo.resumeFile.name.slice(0, 20) + "..."
              }}</span>
              <ErrorMessage :fieldErrors="errors.resumeFile" />
            </div>
            <!-- <HalfClippedButton text="Submit" :onClickAction="applyToJob" /> -->
            <div class="job-form-wrapper__footer-right">
              <div
                role="button"
                class="job-form-wrapper__submit-btn"
                @click="applyToJob"
              >
                SUBMIT
              </div>
            </div>
          </div>
        </form>
      </template>
    </HalfClippedShape>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import types from "../../../store/types";
import HalfClippedShape from "../../shared/HalfClippedShape";
import ErrorMessage from "../../shared/ErrorMessage";
import countryCodes from "../../../assets/json/CountryCodes.json";
import isValidationErrorExist from "../../../helpers/FormValidation";
import isWebsiteValid from "../../../helpers/JobWebsitesValidation";

const emptyForm = {
  fullName: "",
  phone: "",
  email: "",
  country: "",
  city: "",
  behance_link: "",
  linkedin_link: "",
  resumeFile: ""
};

export default {
  props: ["job"],
  data() {
    return {
      applicantInfo: { ...emptyForm },
      countryCodesData: countryCodes,
      selectedIndex: null,
      errors: {},
      validation: {
        name: { isRequired: true, minLength: 3 },
        phone: { isRequired: true },
        country: { isRequired: true },
        city: { isRequired: true },
        email: { isEmail: true, isRequired: true },
        "behance link": { isRequired: false },
        "linkedin link": { isRequired: false },
        resume: { isFile: true, isRequired: true }
      },
      aliases: {
        fullName: "name",
        phone: "phone",
        country: "country",
        city: "city",
        email: "email",
        behance_link: "behance link",
        linkedin_link: "linkedin link",
        resumeFile: "resume"
      }
    };
  },
  components: {
    HalfClippedShape,
    ErrorMessage
  },
  computed: {
    targetCities() {
      return this.selectedIndex
        ? this.countryCodesData[this.selectedIndex].states
        : [];
    }
  },
  methods: {
    ...mapActions({
      applyJob: types.jobs.actions.APPLY_JOB
    }),
    applyToJob: async function() {
      const errorObject = isValidationErrorExist(
        this.applicantInfo,
        this.aliases,
        this.validation
      );
      this.errors = { ...errorObject.errors };
      if (errorObject.length !== 0) return;
      if (
        this.applicantInfo.behance_link !== "" &&
        !isWebsiteValid(this.applicantInfo.behance_link, "behance.net")
      )
        this.errors = { ...this.errors, behance_link: ["Invalid URL"] };
      else this.errors = { ...this.errors, behance_link: [] };
      if (
        this.applicantInfo.linkedin_link !== "" &&
        !isWebsiteValid(this.applicantInfo.linkedin_link, "linkedin.com")
      )
        this.errors = { ...this.errors, linkedin_link: ["Invalid URL"] };
      else this.errors = { ...this.errors, linkedin_link: [] };

      if (
        this.errors.linkedin_link.length !== 0 ||
        this.errors.behance_link.length !== 0
      )
        return;
      try {
        await this.applyJob({ ...this.applicantInfo, jobId: this.job.id });
        this.notifyVue(
          `Thank you for applying for the ${this.job.title} position`,
          "success"
        );
        this.applicantInfo = { ...emptyForm };
      } catch (errors) {
        JSON.parse(errors).forEach(error => {
          this.notifyVue(error.message, "danger");
        });
      }
    },
    getSelectedIndex(e) {
      this.selectedIndex = e.target.selectedIndex;
    },
    setFile(e, key) {
      const files = e.target.files;
      if (!files.length) return;
      this.applicantInfo[key] = files[0];
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
@import "../../../assets/sass/website/components/jobs/job-form.scss";
</style>
