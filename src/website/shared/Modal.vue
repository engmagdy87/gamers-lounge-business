<template>
  <div ref="Modal" class="modal">
    <div class="overlay-bg overlay-bg__left" @click="closeModal"></div>
    <div class="modal-content">
      <router-view :key="$route.fullPath"></router-view>
      <div
        class="custom-arrow-text custom-arrow-text__prev"
        @click="goto('prev')"
      >
        <div class="custom-arrow custom-arrow__prev">
          <img src="../../../public/images/prev.svg" />
        </div>
        <span>Previous</span>
      </div>
      <div
        class="custom-arrow-text custom-arrow-text__next"
        @click="goto('next')"
      >
        <div class="custom-arrow custom-arrow__next">
          <img src="../../../public/images/next.svg" />
        </div>
        <span>Next</span>
      </div>
    </div>
    <div class="overlay-bg overlay-bg__right" @click="closeModal"></div>
  </div>
</template>

<script>
export default {
  props: ["showModal", "setShowModal", "navigateTo"],
  methods: {
    closeModal() {
      this.$router.go(-1);
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
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/website/color-palette.scss";
$width: 72%;
.custom-arrow-text {
  cursor: pointer;
  width: fit-content;
  position: fixed;
  bottom: 20px;
  text-align: center;
  z-index: 1;
  &__next {
    bottom: 20px;
    right: calc((#{100%} - #{$width}) / 3);
  }
  &__prev {
    bottom: 20px;
    left: calc((#{100%} - #{$width}) / 3);
  }
  div {
    margin-bottom: 5px;
  }
  span {
    color: white;
  }
}
.overlay-bg {
  width: calc((#{100%} - #{$width}) / 2);
  height: 100%;
  position: fixed;
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
  height: 100%; /* Full height */
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
  margin: auto;
  display: block;
  max-height: 100vh;
  height: 100vh;
  width: $width;
  margin: 0 auto;
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
  border: 2px solid white;
  margin: 0 auto;
  img {
    width: auto;
    height: 60%;
    max-height: 60%;
    margin-top: auto;
    margin-bottom: auto;
  }
}
</style>
