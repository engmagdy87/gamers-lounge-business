<template>
  <div class="contact-wrapper">
    <Header
      activeItem="contact"
      :isSolidHeader="true"
      :setShowRegisterModal="setShowRegisterModal"
      :setShowLoginModal="setShowLoginModal"
    />
    <div class="contact-wrapper__outside">
      <div class="contact-wrapper__inside"></div>
    </div>
    <div class="contact-wrapper__content">
      <div class="row">
        <div class="col-12">
          <h1>Contact Us</h1>
        </div>
        <div class="col-12 col-md-6">
          <p>
            We are taking to our community seriously, if you need our help or
            having any question about anything please don't hesitate to contact
            us or send us on our mail
          </p>
          <div style="margin:40px 0">
            <span class="contact-wrapper__content__icon">
              <img src="website/img/email.svg" alt="email icon" />
            </span>
            <span>esportsummiut@gamerlounge.com</span>
          </div>
          <div class="mb-3 mb-md-0">
            <span class="contact-wrapper__content__icon">
              <img src="website/img/phone.svg" alt="phone icon" />
            </span>
            <span>+20 123456789</span>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <form>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="email"
                placeholder="Enter E-mail"
                v-model="email"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="subject"
                placeholder="Enter Subject"
                v-model="subject"
              />
            </div>
            <div class="form-group">
              <textarea
                rows="5"
                class="form-control border-input"
                placeholder="Enter Message"
                v-model="message"
              >
              </textarea>
            </div>
            <div
              class="btn float-right contact-wrapper__content__custom-button-wrapper__outside"
              role="button"
              @click="sendMessage"
            >
              Send
            </div>
          </form>
        </div>
      </div>
    </div>
    <LoginModal
      :showFlag="showLoginModal"
      :setShowLoginModal="setShowLoginModal"
    />
    <RegisterModal
      :showFlag="showRegisterModal"
      :setShowRegisterModal="setShowRegisterModal"
    />
    <Spinner :smallLoader="false" />
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import types from "../../store/types";
import Header from "../shared/Header";
import LoginModal from "../components/home/LoginModal";
import RegisterModal from "../components/home/RegisterModal";
import Spinner from "../shared/Spinner";

export default {
  data() {
    return {
      showLoginModal: false,
      showRegisterModal: false,
      email: "",
      subject: "",
      message: ""
    };
  },
  computed: {
    ...mapState({
      isContactFetched: state => state.contact.isContactFetched
    })
  },
  watch: {
    isUserLoggedIn() {
      if (this.isUserLoggedIn) {
        this.setShowLoginModal(false);
        this.setShowRegisterModal(false);
      }
    }
  },
  methods: {
    ...mapActions({
      postMessage: types.contact.actions.SEND_MESSAGE
    }),
    setShowLoginModal(value = false) {
      this.showLoginModal = value;
    },
    setShowRegisterModal(value = false) {
      this.showRegisterModal = value;
    },
    sendMessage: async function() {
      const payload = {
        email: this.email,
        subject: this.subject,
        message: this.message
      };
      try {
        await this.postMessage(payload);
        this.email = "";
        this.subject = "";
        this.message = "";
        this.notifyVue("Message sent successfully", "success");
      } catch (error) {
        this.notifyVue("Something wrong happen!", "danger");
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
    Header,
    LoginModal,
    RegisterModal,
    Spinner
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/containers/contact.scss";
</style>
