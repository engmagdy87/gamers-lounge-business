<template>
  <div
    class="register-question-modal"
    :style="
      showGiveawayRegisterQuestionModalFlag ? 'display:block' : 'display:none'
    "
    @click="closeModal"
  >
    <!-- Modal content -->
    <div
      class="register-question-modal-content"
      @click="
        e => {
          e.stopPropagation();
        }
      "
    >
      <div class="register-question-modal-header">
        <span class="close" @click="closeModal">&times;</span>
        <h2>
          {{ selectedQuestion === null ? "Add Question" : "Edit Question" }}
        </h2>
      </div>
      <div class="register-question-modal-body">
        <form>
          <div class="form-group">
            <label for="username">Title</label>
            <base-input
              type="text"
              id="title"
              aria-describedby="title"
              placeholder="Enter Title"
              v-model="title"
            />
            <p class="error-message" v-if="errors.title !== undefined">
              {{ errors.title }}
            </p>
          </div>
          <div class="form-group">
            <label for="cover-type">Type</label>
            <select class="form-control" v-model="questionType">
              <option value="-1">--Please select question type</option>
              <option
                v-for="(type, index) in giveawayQuestionTypes"
                :selected="questionType === type"
                :key="index"
                :value="type"
                >{{ type }}</option
              >
            </select>
            <p class="error-message" v-if="errors.questionType !== undefined">
              {{ errors.questionType }}
            </p>
          </div>
          <div class="form-group">
            <div>
              <label class="typo__label">Options</label>
              <multiselect
                :disabled="questionType !== 'select'"
                v-model="options"
                tag-placeholder="Add this as new option"
                placeholder="Add an option"
                label="name"
                track-by="code"
                :options="options"
                :multiple="true"
                :taggable="true"
                @tag="addOption"
              >
                <template slot="caret"></template>
              </multiselect>
              <p class="error-message" v-if="errors.options !== undefined">
                {{ errors.options }}
              </p>
            </div>
          </div>

          <button
            type="button"
            class="btn btn-primary float-right"
            @click="createPostedObject"
          >
            {{ selectedQuestion === null ? "Create" : "Save" }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import store from "../../store/index";
import types from "../../store/types";
import Multiselect from "vue-multiselect";

export default {
  components: {
    Multiselect
  },
  data() {
    return {
      title: "",
      questionType: "-1",
      options: [],
      errors: {}
    };
  },
  props: [
    "showGiveawayRegisterQuestionModalFlag",
    "setShowGiveawayRegisterQuestionModalFlag",
    "giveawayQuestionTypes",
    "setQuestionData",
    "selectedQuestion"
  ],
  methods: {
    notifyVue(message, color) {
      this.$notifications.notify({
        message: `<span>${message}</span>`,
        horizontalAlign: "right",
        verticalAlign: "top",
        type: color
      });
    },

    createPostedObject() {
      if (this.title === "") {
        this.errors = { ...this.errors, title: "Title is required" };
      } else delete this.errors.title;
      if (this.questionType === "-1") {
        this.errors = {
          ...this.errors,
          questionType: "Question Type is required"
        };
      } else delete this.errors.questionType;

      if (this.questionType === "select" && this.options.length === 0) {
        this.errors = {
          ...this.errors,
          options: "Options for Select are required"
        };
      } else delete this.errors.options;

      if (Object.keys(this.errors).length === 0) {
        let question = {
          title: this.title,
          type: this.questionType
        };
        if (this.questionType === "select") {
          const options = this.options.map(option => option.name);
          question = { ...question, data: JSON.stringify({ options }) };
        }
        this.setQuestionData(
          question,
          this.selectedQuestion === null ? "create" : "edit"
        );
        this.closeModal();
      }
    },
    closeModal() {
      this.setShowGiveawayRegisterQuestionModalFlag(false);
      this.title = "";
      this.questionType = "-1";
      this.options = [];
      this.errors = {};
    },
    addOption(newOption) {
      const tag = {
        name: newOption,
        code: newOption
      };
      this.options.push(tag);
    }
  },
  watch: {
    selectedQuestion() {
      if (this.selectedQuestion !== null) {
        this.title = this.selectedQuestion.title;
        this.questionType = this.selectedQuestion.type;
        if (this.selectedQuestion.type === "select") {
          JSON.parse(this.selectedQuestion.data).options.forEach(tag => {
            this.options.push({
              name: tag,
              code: tag
            });
          });
        }
      } else {
        this.title = "";
        this.questionType = "-1";
        this.options = [];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/components/giveaways/register-question.scss";
</style>
