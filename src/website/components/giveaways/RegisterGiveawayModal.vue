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
          <div class="form-group" v-for="(question, i) in questions" :key="i">
            <div v-if="question.type === 'image'">
              <label>{{ question.title }}</label>
              <div class="preview" v-if="imgUrl">
                <div class="preview__close" role="button" @click="resetPreview">
                  &times;
                </div>
                <img v-if="imgUrl" :src="imgUrl" />
              </div>
              <div class="dropbox" v-if="!imgUrl">
                <input
                  type="file"
                  multiple
                  name="img_profile"
                  @change="
                    profileAvatarChange(
                      $event.target.name,
                      $event.target.files,
                      question.title
                    )
                  "
                  accept="image/png, image/jpeg"
                  class="input-file"
                  ref="img_profile"
                />
                <p v-if="!imgUrl">
                  Drop your image here<br />
                  or Browse
                </p>
              </div>
              <p
                class="error-message"
                v-if="errors[reformatString(question.title)] !== ''"
              >
                {{ errors[reformatString(question.title)] }}
              </p>
            </div>
            <div v-if="question.type === 'text'">
              <label>{{ question.title }}</label>
              <input
                type="text"
                v-model="userAnswers[reformatString(question.title)]"
                class="form-control"
              />
              <p
                class="error-message"
                v-if="errors[reformatString(question.title)] !== ''"
              >
                {{ errors[reformatString(question.title)] }}
              </p>
            </div>

            <div v-if="question.type === 'date'">
              <label>{{ question.title }}</label>
              <base-input
                type="date"
                v-model="userAnswers[reformatString(question.title)]"
                :isRegisterationForm="true"
              >
              </base-input>
              <p
                class="error-message"
                v-if="errors[reformatString(question.title)] !== ''"
              >
                {{ errors[reformatString(question.title)] }}
              </p>
            </div>
            <div v-if="question.type === 'select'">
              <label>{{ question.title }}</label>
              <select
                class="form-control"
                v-model="userAnswers[reformatString(question.title)]"
              >
                <option
                  v-for="(option, index) in questionOpations(question.data)"
                  :key="index"
                  >{{ option }}</option
                >
              </select>
              <p
                class="error-message"
                v-if="errors[reformatString(question.title)] !== ''"
              >
                {{ errors[reformatString(question.title)] }}
              </p>
            </div>
          </div>

          <button
            type="button"
            class="btn btn-primary float-right"
            @click="registerUser"
          >
            Done
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../../../store/index";
import types from "../../../store/types";
import { registerInGiveaway } from "../../helpers/APIsHelper";
import { reformatStringToBeInURL } from "../../helpers/StringsHelper";

export default {
  data() {
    return {
      userAnswers: {},
      imgUrl: null,
      errors: {}
    };
  },
  props: [
    "showFlag",
    "setShowRegisterGiveawayModal",
    "questions",
    "giveawayId"
  ],
  methods: {
    reformatString(text) {
      return reformatStringToBeInURL(text);
    },
    questionOpations(options) {
      const stringOptions = JSON.parse(options).options;
      stringOptions.unshift("");
      return stringOptions;
    },
    registerUser: async function() {
      let allFieldsFilled = true;
      this.questions.forEach(question => {
        const key = this.reformatString(question.title);

        if (
          this.userAnswers[key] === undefined ||
          this.userAnswers[key] === ""
        ) {
          this.errors = {
            ...this.errors,
            [this.reformatString(question.title)]: "This filed is required"
          };
          allFieldsFilled = allFieldsFilled && false;
        } else {
          this.errors = {
            ...this.errors,
            [this.reformatString(question.title)]: ""
          };
          allFieldsFilled = allFieldsFilled && true;
        }
      });

      if (allFieldsFilled) {
        let formData = new FormData();

        for (var i = 0; i < this.questions.length; i++) {
          const answerKey = this.reformatString(this.questions[i].title);
          const answer = this.userAnswers[answerKey];
          formData.append(`answers[${i}][question_id]`, this.questions[i].id);

          formData.append(`answers[${i}][content]`, answer);
        }
        store.commit(types.home.mutations.SET_SPINNER_FLAG, true);

        try {
          await registerInGiveaway(this.giveawayId, formData);
          store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
          this.closeModal();
          this.notifyVue("Successful Register in Giveaway", "success");
        } catch (error) {
          this.notifyVue(error.data.errors.giveaway_id[0], "danger");
          store.commit(types.home.mutations.SET_SPINNER_FLAG, false);
          this.closeModal();
        }
      }
    },
    closeModal() {
      this.setShowRegisterGiveawayModal(false);
      this.userAnswers = {};
      this.errors = {};
      this.imgUrl = null;
    },
    profileAvatarChange(name, files, key) {
      this.userAnswers[this.reformatString(key)] = files[0];
      this.imgUrl = URL.createObjectURL(files[0]);
    },
    resetPreview() {
      this.imgUrl = null;
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
  updated() {
    if (Object.keys(this.userAnswers).length === 0)
      this.questions.forEach(question => {
        this.userAnswers = {
          ...this.userAnswers,
          [this.reformatString(question.title)]: ""
        };
      });
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/home/register-modal.scss";
</style>
