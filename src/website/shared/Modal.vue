<template>
  <div ref="Modal" class="modal">
    <div class="overlay-bg overlay-bg__left" @click="closeModal"></div>
    <div class="modal-content">
      <router-view :key="$route.fullPath"></router-view>
      <div
        :class="['custom-arrow-text custom-arrow-text__prev']"
        @click="goto('prev')"
      >
        <div
          :class="[
            'custom-arrow custom-arrow__prev',
            isJobPage ? 'custom-arrow__prev--job' : ''
          ]"
        >
          <img src="../../../public/images/prev.png" />
        </div>
      </div>
      <div
        :class="['custom-arrow-text custom-arrow-text__next']"
        @click="goto('next')"
      >
        <div
          :class="[
            'custom-arrow custom-arrow__next',
            isJobPage ? 'custom-arrow__next--job' : ''
          ]"
        >
          <img src="../../../public/images/next.png" />
        </div>
      </div>
    </div>
    <div class="overlay-bg overlay-bg__right" @click="closeModal"></div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import types from "../../store/types";

export default {
  props: [
    "showModal",
    "setShowModal",
    "navigateTo",
    "isJobPage",
    "currentRoute",
    "parentRoute"
  ],
  methods: {
    ...mapMutations({
      setIsServiceFetched:
        types.services.mutations.SET_IS_WEBSITE_SERVICE_FETCHED,
      setIsWorkFetched: types.works.mutations.SET_IS_WEBSITE_WORK_FETCHED,
      setIsJobFetched: types.jobs.mutations.SET_IS_JOB_FETCHED
    }),
    closeModal() {
      const { href } = this.$router.resolve("/" + this.parentRoute);
      window.history.pushState({}, null, href);
      this.setShowModal(false);
    },
    goto(dir) {
      this.navigateTo(dir);
    }
  },
  watch: {
    showModal() {
      if (this.showModal) this.$refs.Modal.style.display = "flex";
      else this.$refs.Modal.style.display = "none";
    }
  },
  updated() {
    if (this.$route.name === "service")
      this.setIsServiceFetched(
        this.currentRoute === this.$router.currentRoute.path
      );
    if (this.$route.name === "work")
      this.setIsWorkFetched(
        this.currentRoute === this.$router.currentRoute.path
      );
    if (this.$route.name === "jobs")
      this.setIsJobFetched(
        this.currentRoute === this.$router.currentRoute.path
      );
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/color-palette.scss";
@import "../../assets/sass/website/variables.scss";
@import "../../assets/sass/website/mixins.scss";

.custom-arrow-text {
  cursor: pointer;
  width: fit-content;
  position: fixed;
  bottom: 20px;
  text-align: center;
  z-index: 2001;
  &__next {
    // bottom: 20px;
    bottom: 45%;
    // right: calc((#{100%} - #{$modal-width}) / 1.7);
    right: calc((#{100%} - #{$modal-width}) / 1.68);
    @include is-mobile {
      bottom: 0;
    }
    @include is-extra-small-mobile {
      bottom: 0;
    }
    &--job {
      right: calc((#{100%} - #{$modal-width}) / 1.33) !important;
    }
  }
  &__prev {
    // bottom: 20px;
    bottom: 45%;
    // left: calc((#{100%} - #{$modal-width}) / 2);
    left: calc((#{100%} - #{$modal-width}) / 1.68);
    @include is-mobile {
      bottom: 0;
    }
    @include is-extra-small-mobile {
      bottom: 0;
    }
    &--job {
      left: calc((#{100%} - #{$modal-width}) / 1.33) !important;
    }
  }
  div {
    margin-bottom: 5px;
  }
  span {
    color: white;
  }
}
.overlay-bg {
  width: calc((#{100%} - #{$modal-width}) / 2);
  height: 100%;
  position: fixed;
  // z-index: 21;
  &__left {
    left: 0;
  }
  &__right {
    right: 0;
  }
}
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1300; /* Sit on top */
  //   padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  // width: 100%; /* Full width */
  height: max-content;
  // overflow: auto; /* Enable scroll if needed */
  // background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.7); /* Black w/ opacity */
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    width: 5px !important;
    background-color: $primary !important;
    border-radius: 20px !important;
  }
  &::-webkit-scrollbar-thumb {
    background-color: $accent !important;
    border-radius: 20px !important;
  }
  &__next {
    width: 50px;
    margin: 20px;
  }
  &__previous {
    width: 50px;
    transform: rotate(180deg);
    margin: 20px;
  }
}

/* Modal Content () */
.modal-content {
  // margin: auto;
  display: block;
  max-height: 100vh;
  height: 100vh;
  overflow: hidden;
  width: $modal-width;
  // padding: 0 calc(calc(100% - #{$modal-width}) / 2);
  position: relative;
  background-color: transparent;
}

/* Add Animation */
.modal-content,
#caption {
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.6s;
  animation-name: zoom;
  animation-duration: 0.6s;
}

@-webkit-keyframes zoom {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes zoom {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* 100%  Width on Smaller Screens */
@media only screen and (max-width: 700px) {
  .modal-content {
    width: 100%;
  }
}

.custom-arrow {
  width: fit-content;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  // border: 2px solid white;
  margin: 0 auto;
  img {
    width: auto;
    height: 100%;
    // max-height: 60%;
    margin-top: auto;
    margin-bottom: auto;
  }
}
</style>
