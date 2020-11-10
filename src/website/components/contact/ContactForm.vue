<template>
  <div class="contact-form-wrapper mt-5">
    <HalfClippedShape>
      <template #content>
        <form>
          <div class="form-group">
            <label class="form-group__name-label">Name</label>
            <div class="contact-form-wrapper__input-outline-mask">
              <input type="text" class="form-control" v-model="contact.name" />
            </div>
          </div>
          <div class="form-group">
            <label class="form-group__email-label">Email</label>
            <div class="contact-form-wrapper__input-outline-mask">
              <input
                type="text"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
                v-model="contact.email"
              />
            </div>
          </div>
          <div class="form-group">
            <label class="form-group__message-label">Message</label>
            <div class="contact-form-wrapper__textarea-outline-mask">
              <textarea
                rows="5"
                class="form-control border-input"
                v-model="contact.message"
              >
              </textarea>
            </div>
          </div>
          <HalfClippedButton text="Submit" />
        </form>
      </template>
    </HalfClippedShape>
  </div>
</template>

<script>
import HalfClippedShape from "../../shared/HalfClippedShape";
import HalfClippedButton from "../../shared/HalfClippedButton";

export default {
  data() {
    return {
      contact: {
        name: "",
        email: "",
        message: ""
      }
    };
  },
  components: {
    HalfClippedShape,
    HalfClippedButton
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/components/contact/contact-form.scss";
</style>
