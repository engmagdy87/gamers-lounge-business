<template>
  <div ref="imageModal" class="image-modal">
    <span class="close" @click="closeModal">&times;</span>
    <img
      class="image-modal__previous"
      src="/website/img/next.svg"
      alt="previous"
      @click="setImageIndex(currentImageIndex - 1)"
    />
    <img class="image-modal-content" id="img01" :src="clickedImageInMedia" />
    <img
      class="image-modal__next"
      src="/website/img/next.svg"
      alt="next"
      @click="setImageIndex(currentImageIndex + 1)"
    />
  </div>
</template>

<script>
export default {
  props: [
    "showImageModalModal",
    "setShowImageModalModal",
    "clickedImageInMedia",
    "currentImageIndex",
    "setCurrentImageIndex"
  ],
  methods: {
    closeModal() {
      this.setShowImageModalModal(false);
    },
    setImageIndex(index) {
      this.setCurrentImageIndex(index);
    }
  },
  watch: {
    showImageModalModal() {
      if (this.showImageModalModal)
        this.$refs.imageModal.style.display = "flex";
      else this.$refs.imageModal.style.display = "none";
    }
  }
};
</script>

<style lang="scss" scoped>
.image-modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 200; /* Sit on top */
  //   padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.9); /* Black w/ opacity */
  justify-content: center;
  align-items: center;
  &__next {
    width: 50px;
    cursor: pointer;
    margin: 20px;
  }
  &__previous {
    width: 50px;
    transform: rotate(180deg);
    cursor: pointer;
    margin: 20px;
  }
}

/* Modal Content (image) */
.image-modal-content {
  margin: auto;
  display: block;
  max-width: 60vw;
}

/* Add Animation */
.image-modal-content,
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

/* The Close Button */
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px) {
  .image-modal-content {
    width: 100%;
  }
}
</style>
