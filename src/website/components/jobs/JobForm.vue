<template>
  <div class="job-form-wrapper">
    <HalfClippedShape>
      <template #content>
        <form>
          <div class="form-group">
            <label class="form-group__short-label">Name</label>
            <div class="job-form-wrapper__input-outline-mask">
              <input type="text" class="form-control" v-model="job.fullName" />
            </div>
          </div>
          <div class="form-group">
            <label class="form-group__long-label">Phone Number</label>
            <div class="job-form-wrapper__input-outline-mask">
              <input
                type="number"
                class="form-control"
                v-model="job.phoneNumber"
                min="1"
              />
            </div>
          </div>
          <div class="form-group">
            <label class="form-group__short-label">Email</label>
            <div class="job-form-wrapper__input-outline-mask">
              <input type="text" class="form-control" v-model="job.email" />
            </div>
          </div>
          <div class="form-group">
            <label class="form-group__mid-label">Country</label>
            <div
              class="job-form-wrapper__input-outline-mask job-form-wrapper__custom-select"
            >
              <select class="form-control" v-model="job.country">
                <option
                  v-for="(country, index) in countryCodesData"
                  :selected="job.country === country.name"
                  :key="index"
                  :value="country.name"
                  >{{ country.name }}</option
                >
              </select>
            </div>
          </div>
          <div class="form-group">
            <label class="form-group__long-label">Behance Link</label>
            <div class="job-form-wrapper__input-outline-mask">
              <input
                type="text"
                class="form-control"
                v-model="job.behanceLink"
              />
            </div>
          </div>
          <div class="form-group">
            <label class="form-group__long-label">Linkedin Link</label>
            <div class="job-form-wrapper__input-outline-mask">
              <input
                type="text"
                class="form-control"
                v-model="job.linkedinLink"
              />
            </div>
          </div>
          <div
            class="form-group d-flex justify-content-start align-items-center"
          >
            <input
              type="file"
              id="resume"
              accept=".pdf,.doc,.docx"
              ref="resumeFile"
              @change="e => setFile(e, 'resumeFile')"
            />
            <HalfClippedOutlinedShape>
              <template #content>
                <label
                  class="job-form-wrapper__input-file-outline-mask"
                  for="resume"
                  >Upload Resume</label
                >
              </template>
            </HalfClippedOutlinedShape>
            <span class="ml-3">{{ job.resumeFile.name }}</span>
          </div>
          <HalfClippedButton text="Submit" :onClickAction="applyToJob" />
        </form>
      </template>
    </HalfClippedShape>
  </div>
</template>

<script>
import HalfClippedShape from "../../shared/HalfClippedShape";
import HalfClippedOutlinedShape from "../../shared/HalfClippedOutlinedShape";
import HalfClippedButton from "../../shared/HalfClippedButton";
import countryCodes from "../../../assets/json/CountryCodes.json";

export default {
  data() {
    return {
      job: {
        fullName: "",
        phoneNumber: "",
        email: "",
        country: "",
        behanceLink: "",
        linkedinLink: "",
        resumeFile: ""
      },
      countryCodesData: countryCodes
    };
  },
  components: {
    HalfClippedShape,
    HalfClippedButton,
    HalfClippedOutlinedShape
  },
  methods: {
    applyToJob() {
      console.log("====================================");
      console.log(this.job);
      console.log("====================================");
    },
    setFile(e, key) {
      const files = e.target.files;
      if (!files.length) return;
      this.job[key] = files[0];
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/jobs/job-form.scss";
</style>
