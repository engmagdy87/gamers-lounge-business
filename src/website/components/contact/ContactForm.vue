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
          <div class="btn" role="button" @click="sendMessage">
            Send
          </div>
        </form>
      </template>
    </HalfClippedShape>
  </div>
</template>

<script>
import HalfClippedShape from "../../shared/HalfClippedShape";

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
  methods: {
    sendMessage() {
      console.log("====================================");
      console.log(this.contact);
      console.log("====================================");
    }
  },
  components: {
    HalfClippedShape
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/website/color-palette.scss";
@import "../../../assets/sass/website/components/contact/contact-form.scss";
@import "../../../assets/sass/website/shared/half-clipped-shape.scss";

// All have vw as divide operation units must be the same for all
$clipped-length: 4vw;

$clipped-shape-width: 50vw;
$clipped-shape-height: 25vw;

// extra-small
$clipped-shape-width-xs: 70vw;
$clipped-shape-height-xs: ($clipped-shape-height + 10vw) * 3;

// small
$clipped-shape-width-sm: ($clipped-shape-width + 5vw) * 1.5;
$clipped-shape-height-sm: ($clipped-shape-height + 5vw) * 2;

// medium
$clipped-shape-width-md: $clipped-shape-width + 5vw;
$clipped-shape-height-md: $clipped-shape-height * 2;

// large
$clipped-shape-width-lg: $clipped-shape-width + 5vw;
$clipped-shape-height-lg: $clipped-shape-height + 12vw;

// x-large
$clipped-shape-width-xlg: $clipped-shape-width + 5vw;
$clipped-shape-height-xlg: $clipped-shape-height + 10vw;

// xx-large
$clipped-shape-width-xxlg: $clipped-shape-width - 10vw;
$clipped-shape-height-xxlg: $clipped-shape-height + 1vw;

// use /deep/ to apply scss classes to the child components
div /deep/ {
  @include filled-half-clipped-shape(
    $clipped-length,
    $clipped-shape-width,
    $clipped-shape-height,
    $clipped-shape-width-xs,
    $clipped-shape-height-xs,
    $clipped-shape-width-sm,
    $clipped-shape-height-sm,
    $clipped-shape-width-md,
    $clipped-shape-height-md,
    $clipped-shape-width-lg,
    $clipped-shape-height-lg,
    $clipped-shape-width-xlg,
    $clipped-shape-height-xlg,
    $clipped-shape-width-xxlg,
    $clipped-shape-height-xxlg,
    $form-background
  );
}
</style>
